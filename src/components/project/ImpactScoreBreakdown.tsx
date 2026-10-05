import React from 'react';
import { ImpactMetrics } from '../../types';
import { Target, Users, Gauge, CheckCircle2, Info } from 'lucide-react';

interface ImpactScoreBreakdownProps {
  metrics: ImpactMetrics;
}

export const ImpactScoreBreakdown: React.FC<ImpactScoreBreakdownProps> = ({ metrics }) => {
  const {
    overallScore,
    communityReach,
    urgency,
    transparency,
    measurability,
    beneficiariesCount,
    beneficiariesDescription,
    measurableOutcomes,
    unSustainableDevGoals
  } = metrics;

  const components = [
    { label: 'Jamoaviy qamrov (Community Reach)', score: communityReach, desc: 'Natijadan foydalanuvchi fuqarolar va oilalar doirasi' },
    { label: 'Dolzarblik va zaruriyat (Urgency)', score: urgency, desc: 'Muammoning kechiktirib bo‘lmaslik darajasi' },
    { label: 'Shaffoflik va hisobot (Transparency)', score: transparency, desc: 'Hujjatlar va ochiq ta’minotchi dalolatnomalari sifati' },
    { label: 'O‘lchanuvchi natija (Measurability)', score: measurability, desc: 'Kutilgan natijani aniq raqamlarda ifodalash' }
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-emerald-700" />
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Ta’sir Ko‘rsatkichi (Impact Score)
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Loyiha ta’sirini tahlil qilish uchun ko‘p omilli analitik indeks
          </p>
        </div>

        {/* Circular / Big Score Counter */}
        <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200 self-start sm:self-auto">
          <div className="text-3xl font-black text-emerald-900 font-mono">
            {overallScore}
          </div>
          <div className="text-left leading-tight">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              / 100 Ball
            </span>
            <span className="text-[10px] text-emerald-700 font-medium">
              Yuqori Ijtimoiy Qiymat
            </span>
          </div>
        </div>
      </div>

      {/* Subscores Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-slate-100">
        {components.map(item => (
          <div key={item.label} className="p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1.5">
              <span>{item.label}</span>
              <span className="font-mono text-emerald-800">{item.score} / 100</span>
            </div>
            {/* Progress line */}
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all"
                style={{ width: `${item.score}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5 leading-tight">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Beneficiaries & Measurable outcomes */}
      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Users className="w-4 h-4 text-emerald-700" />
            <span>Qamrab Olingan Yaraluvchilar (Benefisiarlar)</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-xl font-bold font-mono text-slate-900">
              {beneficiariesCount.toLocaleString('uz-UZ')} nafar
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {beneficiariesDescription}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Target className="w-4 h-4 text-emerald-700" />
            <span>O‘lchanuvchi Aniq Natijalar</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {measurableOutcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sustainable Goals if present */}
      {unSustainableDevGoals && unSustainableDevGoals.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap text-xs text-slate-600">
          <span className="font-semibold text-slate-700">BMT Barqaror Rivojlanish Maqsadlari:</span>
          {unSustainableDevGoals.map((sdg, i) => (
            <span key={i} className="text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              {sdg}
            </span>
          ))}
        </div>
      )}

      {/* Informational Disclaimer as mandated by Prompt */}
      <div className="mt-4 p-2.5 bg-slate-100/70 rounded-md text-[11px] text-slate-500 leading-tight">
        <strong>Eslatma:</strong> Impact Score loyihalar o‘rtasida musobaqa yoki mutlaq reyting emas. Bu ko‘rsatkich qamrov va o‘lchanuvchanlikni ifodalovchi tahliliy ma’lumot bo‘lib, kelgusi muvaffaqiyat kafolati hisoblanmaydi.
      </div>
    </div>
  );
};
