import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Bot, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck2, 
  Scale, 
  Cpu, 
  ArrowRight
} from 'lucide-react';

export const AiInsightsPage: React.FC = () => {
  const { projects, setCurrentView } = useApp();

  const flaggedProjects = projects.filter(p => p.aiRiskAnalysis.riskLevel !== 'LOW' || p.aiRiskAnalysis.riskFactors.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Mashinali O‘rganish & Anomaliya Nazorati</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            YordamPay AI Trust Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Platformadagi barcha loyihalar bo‘yicha narx mutanosibligi, byudjet strukturasining xavfsizligi va soxta arizalarning oldini oluvchi avtomatlashtirilgan tahlil markazi.
          </p>
        </div>
      </div>

      {/* AI Engine Architecture Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Bozor Narxlari Dinamikasi</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Kompyuterlar, qurilish materiallari va tibbiy buyumlar smetasi O‘zbekiston ulgurji kotirovkalari bilan solishtiriladi va sun’iy shishirilgan narxlar darhol belgilanadi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Takrorlanuvchi Profil Tahlili</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Bir xil telefon raqamlari, takroriy bank kartalari yoki internetdan ko‘chirilgan soxta fotosuratlar neyrotarmoqlar orqali tekshiriladi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Byudjet Balansi Modeli</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ijtimoiy loyihalarda operatsion xarajatlar umumiy mablag‘ning 15-20% dan oshmasligi va kamida 75-80% bevosita moddiy yordamga yo‘naltirilishi nazorat qilinadi.
          </p>
        </div>
      </div>

      {/* Flagged and Analyzed Projects Showcase */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            AI Tahlili O‘tkazilgan So‘nggi Obyektlar
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Har bir loyiha o‘z risk ko‘rsatkichi va auditor tavsiyalari bilan
          </p>
        </div>

        <div className="space-y-4">
          {projects.map(p => (
            <div
              key={p.id}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    p.aiRiskAnalysis.riskLevel === 'LOW'
                      ? 'bg-emerald-100 text-emerald-800'
                      : p.aiRiskAnalysis.riskLevel === 'MEDIUM'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {p.aiRiskAnalysis.riskLevel} RISK ({p.aiRiskAnalysis.score}/100)
                  </span>
                  <span className="text-xs text-slate-400">· {p.location.city}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-1">{p.aiRiskAnalysis.summary}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                <span className="text-xs font-mono font-bold text-slate-800">{p.aiRiskAnalysis.recommendedAction}</span>
                <button
                  onClick={() => setCurrentView('project-detail', p.id)}
                  className="px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                >
                  Ko‘rish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
