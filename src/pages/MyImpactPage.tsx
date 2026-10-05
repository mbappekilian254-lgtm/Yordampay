import React from 'react';
import { useApp } from '../context/AppContext';
import { formatUzs } from '../utils/formatters';
import { 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  Clock, 
  Coins, 
  ArrowRight, 
  Receipt,
  FileText,
  Calendar,
  Sparkles
} from 'lucide-react';

export const MyImpactPage: React.FC = () => {
  const { 
    currentUser, 
    contributions, 
    projects, 
    setCurrentView,
    openImpactReportModal 
  } = useApp();

  const supportedProjects = projects.filter(p => 
    contributions.some(c => c.projectId === p.id)
  );

  const completedCount = supportedProjects.filter(p => p.status === 'completed').length;
  const inProgressCount = supportedProjects.length - completedCount;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">
            <span>Donor Kabineti</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Mening Shaxsiy Ta’sirim (My Impact)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Siz qo‘llab-quvvatlagan loyihalar holati, siz tufayli yordam olgan insonlar va moliyaviy hisobotlar.
          </p>
        </div>

        <button
          onClick={() => setCurrentView('projects')}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
        >
          <span>Yangi loyihani qo‘llash</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Jami Qo‘shilgan Hissa:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-emerald-800 mt-1 block">
            {formatUzs(currentUser.totalDonated)}
          </span>
          <span className="text-[11px] text-slate-500">{contributions.length} ta operatsiya</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Qo‘llangan Loyihalar:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 mt-1 block">
            {supportedProjects.length} ta
          </span>
          <span className="text-[11px] text-slate-500">{completedCount} tugallangan, {inProgressCount} faol</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Yordam Ko‘rgan Aholi:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 mt-1 block">
            {currentUser.beneficiariesImpacted} nafar
          </span>
          <span className="text-[11px] text-emerald-700">Tasdiqlangan natija</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Audit Sertifikatlari:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 mt-1 block">
            {completedCount} ta
          </span>
          <span className="text-[11px] text-slate-500">Yuklab olishga tayyor</span>
        </div>
      </div>

      {/* Supported Projects Status Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Siz Qo‘llab-quvvatlagan Loyihalar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportedProjects.map(project => {
            const isCompleted = project.status === 'completed';
            const progress = Math.min(100, Math.round((project.raisedAmount / project.requiredAmount) * 100));

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs text-slate-400">{project.location.city}</span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                      isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {isCompleted ? '✓ 100% Yakunlangan' : `Jarayonda (${progress}%)`}
                    </span>
                  </div>

                  <h4
                    onClick={() => setCurrentView('project-detail', project.id)}
                    className="text-base font-bold text-slate-900 hover:text-emerald-700 cursor-pointer transition-colors"
                  >
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Yig‘ilgan mablag‘:</span>
                    <span className="font-mono font-bold text-slate-900">{formatUzs(project.raisedAmount)} / {formatUzs(project.requiredAmount)}</span>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setCurrentView('project-detail', project.id)}
                      className="text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
                    >
                      Batafsil kuzatish →
                    </button>
                    {isCompleted && (
                      <button
                        onClick={() => openImpactReportModal(project)}
                        className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                      >
                        Ta’sir hisobotini ko‘rish
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contribution History Ledger */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-emerald-700" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Tranzaksiyalar va Hissalar Tarixi
            </h3>
          </div>
          <span className="text-xs text-slate-400">Jami: {contributions.length} ta yozuv</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px]">
                <th className="py-2.5 px-3">Sana & Vaqt</th>
                <th className="py-2.5 px-3">Loyiha Nomi</th>
                <th className="py-2.5 px-3">To‘lov Usuli</th>
                <th className="py-2.5 px-3 text-right">Summa</th>
                <th className="py-2.5 px-3">“1 So‘mning Yo‘li” Taqsimoti</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {contributions.map(c => (
                <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-3 font-mono text-slate-500 whitespace-nowrap">
                    {c.timestamp}
                  </td>
                  <td className="py-3 px-3 font-medium text-slate-900 max-w-xs truncate">
                    {c.projectTitle}
                  </td>
                  <td className="py-3 px-3 text-slate-600">
                    <span className="px-2 py-0.5 bg-slate-100 rounded text-[11px] font-medium">
                      {c.paymentMethod}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-emerald-800 whitespace-nowrap">
                    {formatUzs(c.amount)}
                  </td>
                  <td className="py-3 px-3 text-slate-600 text-[11px]">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {c.allocatedBreakdown.map((b, i) => (
                        <span key={i} className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded text-[10px]">
                          {b.category}: {formatUzs(b.amount)}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
