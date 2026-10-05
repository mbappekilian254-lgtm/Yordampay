import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ContributionModal } from './components/modals/ContributionModal';
import { ImpactReportModal } from './components/modals/ImpactReportModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsExplorerPage } from './pages/ProjectsExplorerPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { YoungEntrepreneurPage } from './pages/YoungEntrepreneurPage';
import { DigitalMahallaPage } from './pages/DigitalMahallaPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { MyImpactPage } from './pages/MyImpactPage';
import { AdminPanelPage } from './pages/AdminPanelPage';
import { CreateProjectWizardPage } from './pages/CreateProjectWizardPage';
import { AiInsightsPage } from './pages/AiInsightsPage';
import { YouthEmpowermentPage } from './pages/YouthEmpowermentPage';
import { SolutionsHubPage } from './pages/SolutionsHubPage';

const AppContent: React.FC = () => {
  const { currentView, toastMessage } = useApp();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsExplorerPage />;
      case 'project-detail':
        return <ProjectDetailPage />;
      case 'youth':
        return <YouthEmpowermentPage />;
      case 'solutions':
        return <SolutionsHubPage />;
      case 'business':
        return <YoungEntrepreneurPage />;
      case 'mahalla':
        return <DigitalMahallaPage />;
      case 'transparency':
        return <TransparencyPage />;
      case 'impact':
        return <MyImpactPage />;
      case 'admin':
        return <AdminPanelPage />;
      case 'create-project':
        return <CreateProjectWizardPage />;
      case 'ai-insights':
        return <AiInsightsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Bar Contract Navbar */}
      <Navbar />

      {/* Main View Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <ContributionModal />
      <ImpactReportModal />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs font-medium flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
