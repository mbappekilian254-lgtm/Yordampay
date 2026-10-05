import React from 'react';
import { PLATFORM_STATS } from '../data/mockData';
import { formatUzs } from '../utils/formatters';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  FileCheck2, 
  Users, 
  Building2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export const TransparencyPage: React.FC = () => {
  const maxMonthly = Math.max(...PLATFORM_STATS.monthlyFunding.map(m => m.amount));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">
          <span>Ommaviy Audit & Boshqaruv</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Ochiq Mablag‘lar va Moliyaviy Shaffoflik
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          Platformada yig‘ilgan har bir so‘m, bosqichma-bosqich o‘tkazilgan to‘lovlar va mustaqil audit natijalari bo‘yicha agregatsiyalangan ochiq hisobot.
        </p>
      </div>

      {/* Aggregate KPI Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Jami Yig‘ilgan Mablag‘:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 mt-1 block">
            {formatUzs(PLATFORM_STATS.totalRaisedUzs, { compact: true })}
          </span>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 inline-flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            100% Escrow kafolati
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Faktik Chiqarilgan Mablag‘:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-emerald-700 mt-1 block">
            {formatUzs(PLATFORM_STATS.totalDisbursedUzs, { compact: true })}
          </span>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Bosqich dalolatnomalari bo‘yicha
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Tugallangan Loyihalar:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 mt-1 block">
            {PLATFORM_STATS.completedProjectsCount} ta
          </span>
          <span className="text-[11px] text-slate-500 mt-1 block">
            {PLATFORM_STATS.activeProjectsCount} ta faol yig‘im
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Qamrab Olingan Aholi:</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-emerald-800 mt-1 block">
            {PLATFORM_STATS.totalBeneficiariesCount.toLocaleString('uz-UZ')}
          </span>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Tasdiqlangan foydalanuvchilar
          </span>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Monthly Funding Histogram / Bar Chart */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Oylik Yig‘imlar Dinamikasi (2026)
              </h3>
              <p className="text-xs text-slate-500">Mablag‘lar hajmi va qo‘llab-quvvatlangan loyihalar soni</p>
            </div>
            <BarChart3 className="w-5 h-5 text-emerald-700" />
          </div>

          <div className="h-64 flex items-end justify-between gap-2 pt-8 px-2">
            {PLATFORM_STATS.monthlyFunding.map(month => {
              const heightPercent = (month.amount / maxMonthly) * 100;
              return (
                <div key={month.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                  {/* Tooltip value */}
                  <span className="text-[10px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {formatUzs(month.amount, { compact: true })}
                  </span>
                  
                  {/* Visual Bar */}
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-t-md transition-all duration-300 relative"
                  />

                  {/* Month Label */}
                  <span className="text-[11px] text-slate-600 font-medium whitespace-nowrap">
                    {month.month.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>O‘sish tendentsiyasi: <strong>+198% (So‘nggi 6 oyda)</strong></span>
            <span className="font-mono">Auditorlik protokoli: #YP-LEDGER-2026</span>
          </div>
        </div>

        {/* Categories Breakdown */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Yo‘nalishlar Bo‘yicha Taqsimot
              </h3>
              <p className="text-xs text-slate-500">Mablag‘lar sohalar kesimida</p>
            </div>
            <PieChart className="w-5 h-5 text-emerald-700" />
          </div>

          <div className="space-y-4 pt-2">
            {PLATFORM_STATS.categoryBreakdown.map(cat => (
              <div key={cat.name} className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between font-semibold text-slate-800">
                  <span>{cat.name}</span>
                  <span className="font-mono">{cat.percentage}% ({formatUzs(cat.amount, { compact: true })})</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-600 mt-4 leading-relaxed">
            Ta’lim va nogironlik vositalari platformadagi umumiy mablag‘larning 60% dan ortig‘ini tashkil qilmoqda.
          </div>
        </div>
      </div>

      {/* Planned vs Actual Spending Global Analysis */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          Reja vs Faktik Sarf Tahlili (Smeta Intizomi)
        </h3>
        <p className="text-xs text-slate-500">
          Platformadagi barcha yakunlangan loyihalarda byudjet intizomi va tejamkorlik ko‘rsatkichlari
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Rejalashtirilgan Smeta:</span>
            <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">965 400 000 so‘m</span>
            <span className="text-[11px] text-slate-500">124 ta loyiha bo‘yicha tasdiqlangan</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Faktik Xaridlar Sarfi:</span>
            <span className="text-xl font-bold font-mono text-emerald-700 mt-1 block">940 200 000 so‘m</span>
            <span className="text-[11px] text-slate-500">Schyot-fakturalar bilan asoslangan</span>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <span className="text-[10px] text-emerald-800 uppercase tracking-wider block font-semibold">Ulgurji Tejalgan Mablag‘:</span>
            <span className="text-xl font-bold font-mono text-emerald-950 mt-1 block">25 200 000 so‘m</span>
            <span className="text-[11px] text-emerald-700">Audit va ta’minotchi chegirmalari tufayli</span>
          </div>
        </div>
      </div>
    </div>
  );
};
