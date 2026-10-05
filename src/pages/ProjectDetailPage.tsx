import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MoneyFlowVisualizer } from '../components/project/MoneyFlowVisualizer';
import { BudgetTable } from '../components/project/BudgetTable';
import { MilestoneTracker } from '../components/project/MilestoneTracker';
import { TrustEngineCard } from '../components/project/TrustEngineCard';
import { AiRiskCard } from '../components/project/AiRiskCard';
import { ImpactScoreBreakdown } from '../components/project/ImpactScoreBreakdown';
import { formatUzs, formatPercentage } from '../utils/formatters';
import { 
  HeartHandshake, 
  MapPin, 
  Users, 
  Clock, 
  ShieldCheck, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Share2, 
  ArrowLeft,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { 
    selectedProjectId, 
    projects, 
    setCurrentView, 
    openContributionModal,
    openImpactReportModal,
    showToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<string>('overview');

  const project = projects.find(p => p.id === selectedProjectId) || projects[0];

  const progress = formatPercentage(project.raisedAmount, project.requiredAmount);
  const remaining = Math.max(0, project.requiredAmount - project.raisedAmount);

  const tabs = [
    { id: 'overview', label: 'Umumiy Ma’lumot' },
    { id: 'flow', label: '“1 So‘mning Yo‘li”' },
    { id: 'budget', label: 'Smeta & Xarajatlar' },
    { id: 'milestones', label: 'Bosqichlar (Milestones)' },
    { id: 'verification', label: 'Trust Engine & Audit' },
    { id: 'ai-analysis', label: 'AI Risk Tahlili' },
    { id: 'impact', label: 'Ta’sir Ko‘rsatkichi' },
    { id: 'documents', label: 'Hujjatlar & Cheklar' }
  ];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Loyiha havolasi nusxalandi!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb & Back */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('projects')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Loyihalar ro‘yxatiga qaytish</span>
        </button>

        <div className="flex items-center gap-2">
          {project.status === 'completed' && (
            <button
              onClick={() => openImpactReportModal(project)}
              className="px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer border border-emerald-200"
            >
              Yakuniy Ta’sir Hisoboti (PDF)
            </button>
          )}
          <button
            onClick={handleShare}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Ulashish"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Showcase Card */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Visual photo column */}
          <div className="lg:col-span-6 relative aspect-4/3 lg:aspect-auto min-h-[320px] bg-slate-100">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded">
                {project.type === 'business' ? 'Yosh tadbirkor' : 'Ijtimoiy loyiha'}
              </span>
              {project.trustEngine.trustStatus === 'VERIFIED' && (
                <span className="bg-emerald-800/90 backdrop-blur-xs text-emerald-100 text-xs font-semibold px-2.5 py-1 rounded flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Tasdiqlangan
                </span>
              )}
            </div>
          </div>

          {/* Key Facts & Funding Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Meta strip */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{project.location.region}, {project.location.city}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{project.organization.name}</span>
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Financial Status Box */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="grid grid-cols-3 gap-3 mb-3 text-center sm:text-left">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Yig‘ilgan:</span>
                  <span className="text-lg font-black font-mono text-emerald-700">{formatUzs(project.raisedAmount)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Zarur summa:</span>
                  <span className="text-lg font-black font-mono text-slate-900">{formatUzs(project.requiredAmount)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Qolgan summa:</span>
                  <span className="text-lg font-black font-mono text-slate-600">{formatUzs(remaining)}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-emerald-600 h-full rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                <span className="font-semibold text-emerald-800 font-mono">{progress}% to‘plandi</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{project.supportersCount} saxovatpesha</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{project.daysRemaining > 0 ? `${project.daysRemaining} kun qoldi` : 'Yig‘im yakunlangan'}</span>
                </span>
              </div>

              {/* Big CTA Button */}
              {project.status !== 'completed' ? (
                <button
                  onClick={() => openContributionModal(project)}
                  className="w-full py-3 px-6 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-5 h-5" />
                  <span>Loyihani qo‘llab-quvvatlash</span>
                </button>
              ) : (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center text-xs font-semibold text-emerald-800">
                  Ushbu loyiha 100% muvaffaqiyatli moliyalashtirildi va yakunlandi!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-slate-200">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {tabs.map(tab => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs font-semibold transition-colors cursor-pointer shrink-0 border-b-2 ${
                  active
                    ? 'border-emerald-700 text-emerald-800'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="space-y-6">
        
        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              {/* Problem */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Muammo va Zaruriyat
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Why it matters */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Nima Uchun Bu Muhim?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.whyItMatters}
                </p>
              </div>

              {/* Detailed Description */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Amalga Oshirish Rejasi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Updates Section */}
              {project.updates.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Loyiha Yangiliklari & Hisobotlar ({project.updates.length})
                  </h3>
                  <div className="space-y-4">
                    {project.updates.map(up => (
                      <div key={up.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                          <span className="font-semibold text-slate-900">{up.author}</span>
                          <span>{up.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">{up.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{up.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Quick Trust & Timeline */}
            <div className="lg:col-span-4 space-y-6">
              {/* Trust Engine Summary Badge */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h4 className="text-sm font-bold text-slate-900">YordamPay Trust Standarti</h4>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg text-xs space-y-1">
                  <span className="font-bold text-emerald-900 block">Holat: {project.trustEngine.trustStatus}</span>
                  <p className="text-emerald-700 text-[11px]">
                    Tekshiruv to‘liqligi: {project.trustEngine.verificationCompleteness}% · Xavf darajasi: {project.trustEngine.riskLevel}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('verification')}
                  className="w-full text-center py-2 text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
                >
                  Auditorlik tekshiruvini to‘liq ko‘rish →
                </button>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 mb-4">Loyiha Xronologiyasi</h4>
                <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {project.timeline.map((event) => (
                    <div key={event.id} className="relative text-xs">
                      <span className={`absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full ${
                        event.completed ? 'bg-emerald-600 ring-2 ring-emerald-100' : 'bg-slate-300'
                      }`} />
                      <span className="text-[10px] text-slate-400 block font-mono">{event.date}</span>
                      <strong className="text-slate-900 block">{event.title}</strong>
                      <span className="text-slate-500 text-[11px] leading-tight block">{event.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: "1 So'mning Yo'li" */}
        {activeTab === 'flow' && (
          <MoneyFlowVisualizer
            budget={project.budget}
            projectTitle={project.title}
            defaultAmount={100000}
          />
        )}

        {/* Tab 3: Budget Table */}
        {activeTab === 'budget' && (
          <BudgetTable
            budget={project.budget}
            requiredAmount={project.requiredAmount}
          />
        )}

        {/* Tab 4: Milestones */}
        {activeTab === 'milestones' && (
          <MilestoneTracker
            milestones={project.milestones}
            projectId={project.id}
          />
        )}

        {/* Tab 5: Trust Engine */}
        {activeTab === 'verification' && (
          <TrustEngineCard
            trustEngine={project.trustEngine}
            projectStatus={project.status}
          />
        )}

        {/* Tab 6: AI Risk Analysis */}
        {activeTab === 'ai-analysis' && (
          <AiRiskCard
            aiAnalysis={project.aiRiskAnalysis}
            budget={project.budget}
            projectTitle={project.title}
          />
        )}

        {/* Tab 7: Impact */}
        {activeTab === 'impact' && (
          <ImpactScoreBreakdown
            metrics={project.impactMetrics}
          />
        )}

        {/* Tab 8: Documents */}
        {activeTab === 'documents' && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Rasmiy Hujjatlar, Smeta va Cheklar
            </h3>
            <p className="text-xs text-slate-500">
              Barcha hujjatlar mustaqil komissiya va auditorlar tomonidan tasdiqlangan
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.documents.map(doc => (
                <div
                  key={doc.id}
                  className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-emerald-700" />
                    <div>
                      <span className="font-semibold text-slate-900 block truncate max-w-[220px]">{doc.title}</span>
                      <span className="text-[11px] text-slate-400 font-mono">{doc.fileSize} · PDF</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                    Tasdiqlangan
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
