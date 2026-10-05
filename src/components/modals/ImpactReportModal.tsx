import React from 'react';
import { useApp } from '../../context/AppContext';
import { formatUzs } from '../../utils/formatters';
import { X, Printer, ShieldCheck, CheckCircle2, Download, Award, FileCheck2, Building2 } from 'lucide-react';

export const ImpactReportModal: React.FC = () => {
  const { impactReportModalProject, closeImpactReportModal, showToast } = useApp();

  if (!impactReportModalProject) return null;

  const project = impactReportModalProject;
  const totalPlanned = project.budget.reduce((a, b) => a + b.plannedAmount, 0);
  const totalSpent = project.budget.reduce((a, b) => a + b.spentAmount, 0);
  const totalSaved = totalPlanned - totalSpent;

  const handlePrint = () => {
    window.print();
  };

  const handleSimulateDownload = () => {
    showToast('Rasmiy PDF Ta’sir Hisoboti yuklab olindi (Simulyatsiya)');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white print:hidden">
          <div className="flex items-center gap-2 text-xs">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold tracking-wide uppercase">
              Rasmiy Auditorlik & Ta’sir Hisoboti (Impact Certificate)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Yuklab olish</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Chop etish</span>
            </button>
            <button
              onClick={closeImpactReportModal}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate/Report Body */}
        <div className="p-8 sm:p-10 space-y-8 bg-white text-slate-900 print:p-0">
          
          {/* Header Institutional Stamp */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-slate-900">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded bg-emerald-700 text-white font-black flex items-center justify-center text-sm">
                  Y
                </span>
                <span className="text-xl font-black tracking-tight text-slate-900">
                  Yordam<span className="text-emerald-700">Pay</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                Hujjat ID: YP-AUDIT-{project.id.toUpperCase()}-2026
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block uppercase tracking-wider">
                ✓ Auditorlik Ko‘rigidan O‘tgan
              </span>
              <p className="text-[11px] text-slate-500 mt-1 font-mono">
                Sana: {new Date().toLocaleDateString('uz-UZ')}
              </p>
            </div>
          </div>

          {/* Title and Summary */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
              Loyiha Natijalari To‘g‘risida Yakuniy Hisobot
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Ajratilgan Jami Mablag‘:</span>
              <span className="text-base font-black font-mono text-slate-900">{formatUzs(project.raisedAmount)}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Faktik Sarflangan:</span>
              <span className="text-base font-black font-mono text-emerald-700">{formatUzs(totalSpent)}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Qamrab olingan aholi:</span>
              <span className="text-base font-black font-mono text-slate-900">{project.impactMetrics.beneficiariesCount} nafar</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Loyiha Bajarilishi:</span>
              <span className="text-base font-black font-mono text-emerald-700">100% Yakunlandi</span>
            </div>
          </div>

          {/* Outcomes & Beneficiaries */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Erishilgan Asosiy Natijalar (Impact Statement)
            </h4>
            <div className="space-y-2">
              {project.impactMetrics.measurableOutcomes.map((out, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 bg-slate-50/60 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{out}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Breakdown Table */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Xarajatlar va Ta’minotchi Hisob-kitoblari
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 text-[10px] uppercase">
                    <th className="py-2">Modda</th>
                    <th className="py-2 text-right">Reja</th>
                    <th className="py-2 text-right">Fakt</th>
                    <th className="py-2">Ta’minotchi</th>
                    <th className="py-2 text-center">Dalolatnoma</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {project.budget.map(b => (
                    <tr key={b.id}>
                      <td className="py-2 font-medium text-slate-900">{b.name}</td>
                      <td className="py-2 text-right font-mono text-slate-600">{formatUzs(b.plannedAmount)}</td>
                      <td className="py-2 text-right font-mono font-semibold text-emerald-700">{formatUzs(b.spentAmount)}</td>
                      <td className="py-2 text-slate-600">{b.supplierName || '—'}</td>
                      <td className="py-2 text-center text-emerald-700 font-semibold">✓ Tasdiqlangan</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verification Signoff Footer */}
          <div className="pt-6 border-t-2 border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span className="font-bold text-slate-900 block">{project.trustEngine.verifierName}</span>
              <span>{project.trustEngine.verifierOrganization}</span>
              <span className="block text-[11px] font-mono">Tasdiqlangan sana: {project.trustEngine.verifiedAt}</span>
            </div>

            <div className="p-3 border-2 border-dashed border-slate-300 rounded-lg text-center font-mono text-[11px] text-slate-600">
              <div className="font-bold text-slate-800">YORDAMPAY TRUST SEAL</div>
              <div>VERIFIED & AUDITED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
