import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatUzs } from '../utils/formatters';
import { ProjectCard } from '../components/project/ProjectCard';
import { 
  Briefcase, 
  TrendingUp, 
  AlertTriangle, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Info,
  DollarSign
} from 'lucide-react';

export const YoungEntrepreneurPage: React.FC = () => {
  const { projects, setCurrentView, openContributionModal } = useApp();

  const businessProjects = projects.filter(p => p.type === 'business');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(businessProjects[0]?.id || '');

  const activeProject = businessProjects.find(p => p.id === selectedProjectId) || businessProjects[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-2xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Mahalliy Iqtisodiyot & Yoshlar Bandligi</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            “Yosh Tadbirkor” Mikromoliyalashtirish
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Mahalladagi hunarmand va yosh tashabbuskorlarning biznes rejalarini shaffof qo‘llab-quvvatlash. Har bir xarajat va uskunalar kafolatlangan dilerlar orqali yetkaziladi.
          </p>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-amber-300 bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/40 max-w-xl">
            <Info className="w-4 h-4 shrink-0" />
            <span>
              <strong>Kafolat yo‘qligi to‘g‘risida eslatma:</strong> Biznes ko‘rsatkichlari ehtimoliy hisob-kitoblar (projections) bo‘lib, kelgusidagi foyda kafolatlangan emas.
            </span>
          </div>
        </div>
      </div>

      {/* Featured Young Entrepreneur Project Deep Dive */}
      {activeProject && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                Tanlangan Loyiha
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {activeProject.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Muassis: {activeProject.organization.contactPerson} · {activeProject.location.city}, {activeProject.location.mahalla}
              </p>
            </div>

            <button
              onClick={() => openContributionModal(activeProject)}
              className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              Ushbu biznesni qo‘llash
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Unit Economics and Projections Matrix */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>Moliyaviy Ehtimoliy Ssenariy (Projections & Assumptions)</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Zarur Boshlang‘ich Kapital:</span>
                  <span className="text-lg font-black font-mono text-slate-900 block mt-1">
                    {formatUzs(activeProject.requiredAmount)}
                  </span>
                  <span className="text-[10px] text-slate-500">100% uskunalar va xomashyo</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Kutilayotgan Oylik Tushum:</span>
                  <span className="text-lg font-black font-mono text-emerald-700 block mt-1">
                    ~{formatUzs(activeProject.businessPlan?.monthlyRevenueProjected || 18500000)}
                  </span>
                  <span className="text-[10px] text-slate-500">Mo‘tadil talab ssenariysida</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">O‘zini Oqlash Muddati:</span>
                  <span className="text-lg font-black font-mono text-slate-900 block mt-1">
                    ~{activeProject.businessPlan?.breakEvenMonths || 8} oy
                  </span>
                  <span className="text-[10px] text-slate-500">Ehtimoliy hisob-kitob</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Yaratiladigan Ish O‘rni:</span>
                  <span className="text-lg font-black font-mono text-emerald-800 block mt-1">
                    {activeProject.businessPlan?.jobsCreated || 3} nafar yosh
                  </span>
                  <span className="text-[10px] text-slate-500">Doimiy bandlik</span>
                </div>
              </div>
            </div>

            {/* Business Plan Assumptions & Risks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Assumptions */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Asosiy Taxmin va Farazlar (Key Assumptions)
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeProject.businessPlan?.assumptions?.map((assump, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{assump}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Market Risks */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5 text-amber-800">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Bozor Xatarlari va Cheklovlar (Risks)</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeProject.businessPlan?.marketRisks?.map((risk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Founder Bio and Verification */}
            <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                  Tashabbuskor haqida
                </span>
                <p className="text-xs text-slate-800 leading-relaxed">
                  {activeProject.businessPlan?.founderBio}
                </p>
                <div className="text-[11px] text-slate-500 pt-1">
                  Mahalla qo‘mitasi tavsiyanomasi: <strong>✓ Tasdiqlangan</strong> · Mustaqil mutaxassis: <strong>{activeProject.trustEngine.verifierName}</strong>
                </div>
              </div>

              <button
                onClick={() => setCurrentView('project-detail', activeProject.id)}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer shrink-0 shadow-2xs"
              >
                Loyiha sahifasini to‘liq ochish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid of all business projects */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Barcha Yosh Tadbirkorlik Loyihalari ({businessProjects.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessProjects.map(project => (
            <div key={project.id} className="relative">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
