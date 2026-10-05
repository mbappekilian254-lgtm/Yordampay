import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, UserProfile, UserRole, Contribution, ProjectStatus } from '../types';
import { INITIAL_PROJECTS, INITIAL_USER, INITIAL_CONTRIBUTIONS, SAMPLE_NOTIFICATIONS } from '../data/mockData';
import { calculateMoneyAllocation } from '../utils/formatters';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  projectId?: string;
}

interface AppContextType {
  currentUser: UserProfile;
  switchRole: (role: UserRole) => void;
  projects: Project[];
  contributions: Contribution[];
  notifications: NotificationItem[];
  unreadNotificationsCount: number;
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  
  // Interactive Project Actions
  contributeToProject: (projectId: string, amount: number, paymentMethod: any, isAnonymous?: boolean) => boolean;
  addNewProject: (newProject: Omit<Project, 'id' | 'createdAt' | 'raisedAmount' | 'supportersCount' | 'timeline' | 'updates'>) => string;
  reviewProjectAction: (projectId: string, action: 'approve' | 'flag' | 'request_docs', note?: string) => void;
  completeMilestoneAction: (projectId: string, milestoneId: string, verifierNote?: string) => void;
  
  // Active Navigation & Modals
  currentView: string;
  setCurrentView: (view: string, extraParam?: string) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  
  contributionModalOpen: boolean;
  targetProjectForContribution: Project | null;
  openContributionModal: (project: Project) => void;
  closeContributionModal: () => void;

  impactReportModalProject: Project | null;
  openImpactReportModal: (project: Project) => void;
  closeImpactReportModal: () => void;

  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial from localStorage or defaults
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('yordampay_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('yordampay_projects_v2');
    if (saved) {
      try {
        const parsed: Project[] = JSON.parse(saved);
        // Merge missing initial projects if any
        const existingIds = new Set(parsed.map(p => p.id));
        const missing = INITIAL_PROJECTS.filter(p => !existingIds.has(p.id));
        return [...parsed, ...missing];
      } catch (e) {
        return INITIAL_PROJECTS;
      }
    }
    return INITIAL_PROJECTS;
  });

  const [contributions, setContributions] = useState<Contribution[]>(() => {
    const saved = localStorage.getItem('yordampay_contributions');
    return saved ? JSON.parse(saved) : INITIAL_CONTRIBUTIONS;
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    const saved = localStorage.getItem('yordampay_notifications');
    return saved ? JSON.parse(saved) : SAMPLE_NOTIFICATIONS;
  });

  const [currentView, setCurrentViewInternal] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const [contributionModalOpen, setContributionModalOpen] = useState(false);
  const [targetProjectForContribution, setTargetProjectForContribution] = useState<Project | null>(null);

  const [impactReportModalProject, setImpactReportModalProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('yordampay_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('yordampay_projects_v2', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('yordampay_contributions', JSON.stringify(contributions));
  }, [contributions]);

  useEffect(() => {
    localStorage.setItem('yordampay_notifications', JSON.stringify(notifications));
  }, [notifications]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const setCurrentView = (view: string, extraParam?: string) => {
    if (view === 'project-detail' && extraParam) {
      setSelectedProjectId(extraParam);
    }
    setCurrentViewInternal(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchRole = (role: UserRole) => {
    let name = 'Sarvar Olimov (Saxovatpesha)';
    let email = 'sarvar@example.uz';
    if (role === 'owner') {
      name = 'Azizbek Rahmonov (Loyiha muallifi)';
      email = 'azizbek@nurli-non.uz';
    } else if (role === 'org') {
      name = 'Gulnora Karimova (272-maktab Vasiyligi)';
      email = 'maktab272@tashkent.uz';
    } else if (role === 'admin') {
      name = 'Dilshod To‘rayev (Audit va Tekshiruv Eksperti)';
      email = 'admin.audit@yordampay.uz';
    }

    setCurrentUser(prev => ({
      ...prev,
      role,
      name,
      email
    }));

    showToast(`Foydalanuvchi roli o‘zgartirildi: ${role.toUpperCase()} (${name})`);
  };

  const openContributionModal = (project: Project) => {
    setTargetProjectForContribution(project);
    setContributionModalOpen(true);
  };

  const closeContributionModal = () => {
    setContributionModalOpen(false);
    setTargetProjectForContribution(null);
  };

  const openImpactReportModal = (project: Project) => {
    setImpactReportModalProject(project);
  };

  const closeImpactReportModal = () => {
    setImpactReportModalProject(null);
  };

  const contributeToProject = (
    projectId: string,
    amount: number,
    paymentMethod: any,
    isAnonymous: boolean = false
  ): boolean => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return false;

    const allocations = calculateMoneyAllocation(amount, project.budget);

    // Update project metrics
    const updatedRaised = project.raisedAmount + amount;
    const newStatus: ProjectStatus = updatedRaised >= project.requiredAmount ? 'funded' : project.status;

    const updatedProjects = projects.map(p => {
      if (p.id === projectId) {
        return {
          ...p,
          raisedAmount: updatedRaised,
          supportersCount: p.supportersCount + 1,
          status: newStatus
        };
      }
      return p;
    });

    setProjects(updatedProjects);

    // Create new contribution record
    const newContribution: Contribution = {
      id: `cnt_${Date.now()}`,
      projectId,
      projectTitle: project.title,
      amount,
      supporterName: isAnonymous ? 'Saxovatpesha fuqaro' : currentUser.name,
      isAnonymous,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      paymentMethod,
      allocatedBreakdown: allocations.map(a => ({
        category: a.category,
        amount: a.allocatedAmount,
        percentage: a.percentage
      }))
    };

    setContributions([newContribution, ...contributions]);

    // Update current user impact
    setCurrentUser(prev => ({
      ...prev,
      totalDonated: prev.totalDonated + amount,
      projectsFundedCount: prev.projectsFundedCount + (contributions.some(c => c.projectId === projectId) ? 0 : 1),
      beneficiariesImpacted: prev.beneficiariesImpacted + Math.max(1, Math.round(project.impactMetrics.beneficiariesCount / 20))
    }));

    // Add notification
    const newNotif: NotificationItem = {
      id: `notif_${Date.now()}`,
      title: 'Mablag‘ muvaffaqiyatli ajratildi!',
      message: `Siz “${project.title}” loyihasiga ${amount.toLocaleString('uz-UZ')} so‘m o‘tkazdingiz. “1 So‘mning yo‘li” orqali mablag‘ taqsimoti qayd etildi.`,
      timestamp: 'Hozirgina',
      read: false,
      projectId
    };
    setNotifications([newNotif, ...notifications]);

    showToast(`Rahmat! ${amount.toLocaleString('uz-UZ')} so‘m miqdoridagi qo‘llab-quvvatlovingiz qabul qilindi.`);
    return true;
  };

  const addNewProject = (newProjectData: Omit<Project, 'id' | 'createdAt' | 'raisedAmount' | 'supportersCount' | 'timeline' | 'updates'>): string => {
    const newId = `proj_${Date.now()}`;
    const newProject: Project = {
      ...newProjectData,
      id: newId,
      createdAt: new Date().toISOString().substring(0, 10),
      raisedAmount: 0,
      supportersCount: 0,
      timeline: [
        {
          id: `t_${Date.now()}_1`,
          date: new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short', year: 'numeric' }),
          title: 'Ariza va byudjet topshirildi',
          description: 'Loyiha YordamPay Trust Engine ko‘rigiga taqdim etildi.',
          type: 'submission',
          completed: true
        }
      ],
      updates: []
    };

    setProjects([newProject, ...projects]);

    const notif: NotificationItem = {
      id: `notif_${Date.now()}`,
      title: 'Yangi loyiha topshirildi',
      message: `“${newProject.title}” loyihasi ekspertlar ko‘rigiga yuborildi.`,
      timestamp: 'Hozirgina',
      read: false,
      projectId: newId
    };
    setNotifications([notif, ...notifications]);

    showToast('Loyihangiz muvaffaqiyatli yaratildi va ekspertlar tekshiruviga yuborildi!');
    return newId;
  };

  const reviewProjectAction = (projectId: string, action: 'approve' | 'flag' | 'request_docs', note?: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;
      
      let nextStatus: ProjectStatus = p.status;
      let completeness = p.trustEngine.verificationCompleteness;
      let trustStatus = p.trustEngine.trustStatus;

      if (action === 'approve') {
        nextStatus = 'funding';
        completeness = 95;
        trustStatus = 'VERIFIED';
      } else if (action === 'flag') {
        nextStatus = 'flagged';
        trustStatus = 'FLAGGED';
      } else if (action === 'request_docs') {
        nextStatus = 'under_review';
        trustStatus = 'UNDER_REVIEW';
      }

      return {
        ...p,
        status: nextStatus,
        trustEngine: {
          ...p.trustEngine,
          verificationCompleteness: completeness,
          trustStatus,
          verifiedAt: new Date().toISOString().substring(0, 10),
          verifierName: currentUser.name
        }
      };
    }));

    showToast(`Loyiha holati o‘zgartirildi: ${action === 'approve' ? 'TASDIQLANDI' : action === 'flag' ? 'BELGILANDI' : 'HUJJAT SO‘RALDI'}`);
  };

  const completeMilestoneAction = (projectId: string, milestoneId: string, verifierNote?: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== projectId) return p;

      const updatedMilestones = p.milestones.map(m => {
        if (m.id === milestoneId) {
          return {
            ...m,
            status: 'completed' as const,
            releasedAmount: m.targetAmount,
            completedDate: new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short', year: 'numeric' }),
            evidenceNotes: verifierNote || m.evidenceNotes || 'Tekshiruv dalolatnomasi tasdiqlandi.',
            verifierName: currentUser.name
          };
        }
        return m;
      });

      const allCompleted = updatedMilestones.every(m => m.status === 'completed');

      return {
        ...p,
        status: allCompleted ? 'completed' : p.status,
        milestones: updatedMilestones,
        timeline: [
          ...p.timeline,
          {
            id: `t_m_${Date.now()}`,
            date: new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short', year: 'numeric' }),
            title: `Bosqich muvaffaqiyatli yakunlandi`,
            description: `Ekspert ${currentUser.name} tomonidan dalolatnoma qabul qilindi.`,
            type: 'milestone',
            completed: true
          }
        ]
      };
    }));

    showToast('Bosqich yakunlandi va mablag‘ ozod qilindi!');
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        currentUser,
        switchRole,
        projects,
        contributions,
        notifications,
        unreadNotificationsCount,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        contributeToProject,
        addNewProject,
        reviewProjectAction,
        completeMilestoneAction,
        currentView,
        setCurrentView,
        selectedProjectId,
        setSelectedProjectId,
        contributionModalOpen,
        targetProjectForContribution,
        openContributionModal,
        closeContributionModal,
        impactReportModalProject,
        openImpactReportModal,
        closeImpactReportModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
