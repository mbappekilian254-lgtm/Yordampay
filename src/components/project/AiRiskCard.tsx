import React, { useState } from 'react';
import { AiRiskAnalysis, BudgetItem } from '../../types';
import { Bot, ShieldAlert, Sparkles, CheckCircle2, AlertTriangle, FileQuestion, RefreshCw } from 'lucide-react';

interface AiRiskCardProps {
  aiAnalysis: AiRiskAnalysis;
  budget: BudgetItem[];
  projectTitle: string;
}

export const AiRiskCard: React.FC<AiRiskCardProps> = ({ aiAnalysis, budget, projectTitle }) => {
  const [isReanalyzing, setIsReanalyzing] = useState(false);
  const [analysisState, setAnalysisState] = useState(aiAnalysis);

  const handleSimulateReanalysis = () => {
    setIsReanalyzing(true);
    setTimeout(() => {
      setIsReanalyzing(false);
      setAnalysisState(prev => ({
        ...prev,
        lastAnalyzedAt: new Date().toISOString().substring(0, 10),
        score: Math.min(99, prev.score + 1)
      }));
    }, 1200);
  };

  const getRiskBadge = () => {
    if (analysisState.riskLevel === 'LOW') {
      return {
        label: 'PAST XAVF DARAJASI (LOW RISK)',
        color: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        icon: <CheckCircle2 className="w-4 h-4 text-emerald-700" />
      };
    } else if (analysisState.riskLevel === 'MEDIUM') {
      return {
        label: 'O‘RTACHA XAVF — QO‘SHIMCHA TEKSHIRUV (MEDIUM)',
        color: 'bg-amber-100 text-amber-900 border-amber-300',
        icon: <AlertTriangle className="w-4 h-4 text-amber-700" />
      };
    } else {
      return {
        label: 'YUQORI XAVF — SHUBHALI BELGILAR (HIGH RISK)',
        color: 'bg-rose-100 text-rose-900 border-rose-300',
        icon: <ShieldAlert className="w-4 h-4 text-rose-700" />
      };
    }
  };

  const badge = getRiskBadge();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-slate-900 text-white rounded-lg shrink-0 mt-0.5">
            <Bot className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                AI Risk & Byudjet Tahlilchisi
              </h3>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded tracking-wide">
                NEVRO-AUDIT v2.4
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Soxta arizalar, takrorlangan hisoblar va narx anomaliyalarini aniqlovchi mashinali o‘rganish moduli
            </p>
          </div>
        </div>

        <button
          onClick={handleSimulateReanalysis}
          disabled={isReanalyzing}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-slate-500 ${isReanalyzing ? 'animate-spin' : ''}`} />
          <span>{isReanalyzing ? 'Tahlil qilinmoqda...' : 'Qayta tekshirish'}</span>
        </button>
      </div>

      {/* Main Analysis Status Box */}
      <div className="py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg border bg-slate-50/70 gap-3">
          <div className="flex items-center gap-2.5">
            {badge.icon}
            <div>
              <span className="text-xs font-bold text-slate-900 block">
                {badge.label}
              </span>
              <span className="text-[11px] text-slate-500">
                Ishonchlilik indeksi: <span className="font-mono font-bold text-slate-800">{analysisState.score}/100</span> · So‘nggi tahlil: {analysisState.lastAnalyzedAt}
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-700 sm:text-right">
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Tavsiya etilgan harakat:</span>
            <span className="font-medium text-slate-900">{analysisState.recommendedAction}</span>
          </div>
        </div>

        {/* AI Summary Prose */}
        <p className="text-xs text-slate-600 leading-relaxed mt-3.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <strong className="text-slate-900">AI Xulosasi: </strong>
          {analysisState.summary}
        </p>

        {/* Risk Factors Breakdown */}
        {analysisState.riskFactors.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Aniqlangan Fikr va Ko‘rsatkichlar
            </h4>
            <div className="space-y-2">
              {analysisState.riskFactors.map(rf => (
                <div
                  key={rf.id}
                  className="p-2.5 rounded-lg border border-slate-200 bg-white text-xs flex items-start gap-2.5"
                >
                  <FileQuestion className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">{rf.title}</span>
                    <span className="text-slate-600 text-[11px]">{rf.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Budget Analyzer Observations */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI Byudjet Tahlili Xulosalari</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
            {analysisState.budgetInsights.map((insight, i) => (
              <li key={i} className="leading-normal">
                {insight}
              </li>
            ))}
          </ul>
        </div>

        {/* Crucial Rule 3 Disclaimer */}
        <div className="mt-4 p-2.5 bg-slate-100/70 rounded-md text-[11px] text-slate-500 leading-tight">
          <strong>Muhim eslatma:</strong> YordamPay AI tahlili qat’iy ayblov yoki 100% kafolat bermaydi. Ushbu ma’lumotlar inson auditorlari va jamoat nazorati uchun qaror qabul qilishda yordamchi tahliliy vosita hisoblanadi.
        </div>
      </div>
    </div>
  );
};
