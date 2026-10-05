import React, { useState } from 'react';
import { BudgetItem } from '../../types';
import { calculateMoneyAllocation, formatUzs } from '../../utils/formatters';
import { ArrowDown, ArrowRight, CheckCircle2, FileText, Info, ShieldCheck, Sparkles } from 'lucide-react';

interface MoneyFlowVisualizerProps {
  budget: BudgetItem[];
  projectTitle: string;
  defaultAmount?: number;
  compact?: boolean;
}

export const MoneyFlowVisualizer: React.FC<MoneyFlowVisualizerProps> = ({
  budget,
  projectTitle,
  defaultAmount = 100000,
  compact = false
}) => {
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(0);

  const presets = [50000, 100000, 250000, 500000];
  const allocations = calculateMoneyAllocation(amount, budget);
  const selectedItem = selectedCategoryIndex !== null ? budget[selectedCategoryIndex] : null;
  const selectedAllocation = selectedCategoryIndex !== null ? allocations[selectedCategoryIndex] : null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              “1 So‘mning Yo‘li”
            </h3>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Shaffof Oqim
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Har bir so‘mingiz loyihaning qaysi qismiga va qanday maqsadga yo‘naltirilishini bevosita ko‘ring
          </p>
        </div>

        {/* Amount Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 mr-1">Summa:</span>
          {presets.map(p => (
            <button
              key={p}
              onClick={() => setAmount(p)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                amount === p
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {p.toLocaleString('uz-UZ')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flow Stage */}
      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Step 1: Donor Contribution Node */}
          <div className="lg:col-span-3 flex flex-col items-center text-center p-4 bg-emerald-50/70 rounded-xl border border-emerald-200">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
              Sizning Hissangiz
            </span>
            <div className="text-xl sm:text-2xl font-black text-emerald-950 font-mono tabular-nums my-1">
              {formatUzs(amount)}
            </div>
            <p className="text-[11px] text-emerald-700 leading-tight">
              100% maqsadli bank escrow hisobiga qabul qilinadi
            </p>
          </div>

          {/* Flow Connector Arrow */}
          <div className="lg:col-span-1 hidden lg:flex items-center justify-center text-emerald-600">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>
          <div className="flex lg:hidden items-center justify-center text-emerald-600">
            <ArrowDown className="w-5 h-5 animate-pulse" />
          </div>

          {/* Step 2: Interactive Allocation Channels */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1 px-1">
              <span>Mablag‘ taqsimoti ({allocations.length} yo‘nalish)</span>
              <span>Ussha / Summa</span>
            </div>

            {allocations.map((alloc, idx) => {
              const isSelected = selectedCategoryIndex === idx;
              return (
                <div
                  key={alloc.name}
                  onClick={() => setSelectedCategoryIndex(idx)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50/90 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="truncate max-w-[200px]">{alloc.name}</span>
                    <span className="font-mono tabular-nums">
                      {formatUzs(alloc.allocatedAmount)}
                    </span>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-200/60 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full ${isSelected ? 'bg-emerald-400' : 'bg-emerald-600'}`}
                      style={{ width: `${alloc.percentage}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] mt-1.5 opacity-80">
                    <span className="text-[10px] uppercase tracking-wider">{alloc.category}</span>
                    <span className="font-mono">{alloc.percentage}% ulush</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Connector Arrow */}
          <div className="lg:col-span-1 hidden lg:flex items-center justify-center text-emerald-600">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>
          <div className="flex lg:hidden items-center justify-center text-emerald-600">
            <ArrowDown className="w-5 h-5 animate-pulse" />
          </div>

          {/* Step 3: Real World Result Node */}
          <div className="lg:col-span-2 flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
              Kutilgan Natija
            </span>
            <p className="text-xs text-slate-600 leading-tight">
              Tasdiqlangan dalolatnoma va ochiq fotohisobot
            </p>
          </div>
        </div>
      </div>

      {/* Selected Channel Detailed Evidence Drawer */}
      {selectedItem && selectedAllocation && (
        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-700" />
              <span className="font-bold text-slate-900">
                Tafsilot: {selectedItem.name}
              </span>
            </div>
            <span className="text-emerald-800 font-mono font-semibold">
              Sizdan ajratiladigan: {formatUzs(selectedAllocation.allocatedAmount)}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-600">
            <div>
              <span className="text-[11px] text-slate-400 block">Rejalashtirilgan byudjet:</span>
              <span className="font-semibold text-slate-900 font-mono">
                {formatUzs(selectedItem.plannedAmount)}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Rasmiy Ta’minotchi / Ijrochi:</span>
              <span className="font-medium text-slate-900">
                {selectedItem.supplierName || 'Ochiq tanlov asosida'}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Tekshiruv dalolatnomasi:</span>
              <span className="inline-flex items-center gap-1 font-medium text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Hujjatlar tasdiqlangan
              </span>
            </div>
          </div>
          {selectedItem.notes && (
            <p className="text-slate-500 mt-2 text-[11px] italic bg-white p-2 rounded border border-slate-200">
              Izoh: {selectedItem.notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
