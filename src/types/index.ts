export type ProjectCategory = 
  | 'education' 
  | 'disability' 
  | 'community' 
  | 'social' 
  | 'business' 
  | 'emergency'
  | 'youth'
  | 'health'
  | 'water_eco';

export type ProjectType = 'social' | 'business';

export type ProjectStatus = 
  | 'pending_verification' 
  | 'under_review' 
  | 'verified' 
  | 'funding' 
  | 'funded' 
  | 'in_progress' 
  | 'completed' 
  | 'needs_review' 
  | 'flagged';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface BudgetItem {
  id: string;
  name: string;
  category: string;
  plannedAmount: number;
  spentAmount: number;
  supplierName?: string;
  receiptUrl?: string;
  verified: boolean;
  notes?: string;
}

export interface Milestone {
  id: string;
  order: number;
  title: string;
  targetAmount: number;
  releasedAmount: number;
  status: 'pending' | 'in_progress' | 'completed';
  completedDate?: string;
  description: string;
  evidenceNotes?: string;
  evidenceFiles?: string[];
  verifierName?: string;
}

export interface VerificationChecklist {
  identityVerified: boolean;
  projectVerified: boolean;
  organizationVerified: boolean;
  budgetReviewed: boolean;
  documentsChecked: boolean;
  supplierChecked: boolean;
  onSiteInspection: boolean;
}

export interface TrustEngineData {
  verificationCompleteness: number; // e.g. 92%
  trustStatus: 'VERIFIED' | 'UNDER_REVIEW' | 'FLAGGED' | 'PENDING';
  riskLevel: RiskLevel;
  verifierName: string;
  verifierOrganization: string;
  verifiedAt: string;
  checklist: VerificationChecklist;
  transparencyPledgeSigned: boolean;
}

export interface RiskFactor {
  id: string;
  type: 'budget_anomaly' | 'missing_document' | 'duplicate_info' | 'supplier_check' | 'price_deviation';
  title: string;
  description: string;
  severity: RiskLevel;
}

export interface AiRiskAnalysis {
  riskLevel: RiskLevel;
  score: number; // 0 to 100 where higher is safer
  lastAnalyzedAt: string;
  summary: string;
  riskFactors: RiskFactor[];
  recommendedAction: string;
  budgetInsights: string[];
}

export interface ImpactMetrics {
  overallScore: number; // e.g. 86
  communityReach: number; // e.g. 90
  urgency: number; // e.g. 85
  transparency: number; // e.g. 92
  measurability: number; // e.g. 80
  beneficiariesCount: number;
  beneficiariesDescription: string;
  measurableOutcomes: string[];
  unSustainableDevGoals?: string[];
}

export interface ProjectTimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'submission' | 'verification' | 'funding_start' | 'milestone' | 'spending' | 'completion';
  completed: boolean;
}

export interface BusinessPlanData {
  concept: string;
  targetAudience: string;
  monthlyRevenueProjected: number;
  monthlyExpensesProjected: number;
  breakEvenMonths: number;
  jobsCreated: number;
  assumptions: string[];
  marketRisks: string[];
  founderBio: string;
  disclaimer: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  type: ProjectType;
  category: ProjectCategory;
  status: ProjectStatus;
  location: {
    region: string;
    city: string;
    mahalla: string;
    coordinates?: [number, number];
  };
  organization: {
    name: string;
    type: 'school' | 'ngo' | 'individual' | 'community' | 'business';
    contactPerson: string;
    registrationNumber?: string;
    phone: string;
  };
  imageUrl: string;
  requiredAmount: number;
  raisedAmount: number;
  supportersCount: number;
  daysRemaining: number;
  createdAt: string;
  
  problemStatement: string;
  whyItMatters: string;
  detailedDescription: string;

  budget: BudgetItem[];
  milestones: Milestone[];
  timeline: ProjectTimelineEvent[];
  trustEngine: TrustEngineData;
  aiRiskAnalysis: AiRiskAnalysis;
  impactMetrics: ImpactMetrics;
  businessPlan?: BusinessPlanData;

  updates: {
    id: string;
    date: string;
    title: string;
    content: string;
    author: string;
    imageUrl?: string;
  }[];

  documents: {
    id: string;
    title: string;
    type: 'id' | 'budget_estimate' | 'invoice' | 'official_letter' | 'receipt';
    fileSize: string;
    verified: boolean;
  }[];
}

export interface Contribution {
  id: string;
  projectId: string;
  projectTitle: string;
  amount: number;
  supporterName: string;
  isAnonymous: boolean;
  timestamp: string;
  paymentMethod: 'UzCard' | 'HUMO' | 'Visa' | 'Payme' | 'Click';
  allocatedBreakdown: {
    category: string;
    amount: number;
    percentage: number;
  }[];
}

export type UserRole = 'donor' | 'owner' | 'org' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  totalDonated: number;
  projectsFundedCount: number;
  beneficiariesImpacted: number;
}
