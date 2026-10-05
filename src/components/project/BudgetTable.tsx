import React from 'react';
import { BudgetItem } from '../../types';
import { formatUzs } from '../../utils/formatters';
import { CheckCircle2, AlertCircle, FileText, ArrowUpRight } from 'lucide-react';

interface BudgetTableProps {
  budget: BudgetItem[];
  requiredAmount: number;
}

export const BudgetTable: React.FC<BudgetTableProps> = ({ budget, requiredAmount }) => {
  const totalPlanned = budget.reduce((acc, item) => acc + item.plannedAmount, 0);
  const totalSpent = budget.reduce((acc, item) => acc + item.spentAmount, 0);
  const remainingBudget = totalPlanned - totalSpent;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      {/* Header and Aggregate Comparison */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Smeta va Haqiqiy Xarajatlar Balansi
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Rejalashtirilgan mablag‘ va rasmiy tasdiqlangan faktik sarflar
          </p>
        </div>

        {/* Planned vs Spent Summary Chips */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Reja bo‘yicha:</span>
            <span className="text-xs font-mono font-bold text-slate-900">{formatUzs(totalPlanned)}</span>
          </div>
          <div className="h-6 w-px bg-slate-200" />
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Haqiqiy sarflangan:</span>
            <span className="text-xs font-mono font-bold text-emerald-700">{formatUzs(totalSpent)}</span>
          </div>
          <div className="h-6 w-px bg-slate-200" />
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Qoldiq / Tejalgan:</span>
            <span className="text-xs font-mono font-bold text-slate-700">{formatUzs(remainingBudget)}</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
              <th className="py-2.5 px-3 font-semibold">Xarajat moddasi & Tovarlar</th>
              <th className="py-2.5 px-3 font-semibold">Yo‘nalish</th>
              <th className="py-2.5 px-3 font-semibold text-right">Reja</th>
              <th className="py-2.5 px-3 font-semibold text-right">Faktik Sarf</th>
              <th className="py-2.5 px-3 font-semibold">Ta’minotchi / Ijrochi</th>
              <th className="py-2.5 px-3 font-semibold text-center">Dalolatnoma</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {budget.map(item => (
              <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3 px-3 font-medium text-slate-900 max-w-xs">
                  <div>{item.name}</div>
                  {item.notes && (
                    <span className="text-[11px] text-slate-400 font-normal">{item.notes}</span>
                  )}
                </td>
                <td className="py-3 px-3 text-slate-500 whitespace-nowrap">
                  {item.category}
                </td>
                <td className="py-3 px-3 text-right font-mono font-medium text-slate-900 whitespace-nowrap">
                  {formatUzs(item.plannedAmount)}
                </td>
                <td className="py-3 px-3 text-right font-mono font-semibold text-emerald-700 whitespace-nowrap">
                  {formatUzs(item.spentAmount)}
                </td>
                <td className="py-3 px-3 text-slate-600 max-w-[180px] truncate">
                  {item.supplierName || '—'}
                </td>
                <td className="py-3 px-3 text-center whitespace-nowrap">
                  {item.verified ? (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Tasdiqlangan
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Kutilmoqda
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-slate-200 font-bold bg-slate-50/80">
              <td className="py-3 px-3 text-slate-900" colSpan={2}>
                JAMI BYUDJET
              </td>
              <td className="py-3 px-3 text-right font-mono text-slate-900">
                {formatUzs(totalPlanned)}
              </td>
              <td className="py-3 px-3 text-right font-mono text-emerald-800">
                {formatUzs(totalSpent)}
              </td>
              <td className="py-3 px-3 text-slate-500 text-[11px]" colSpan={2}>
                Qoldiq: {formatUzs(remainingBudget)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
