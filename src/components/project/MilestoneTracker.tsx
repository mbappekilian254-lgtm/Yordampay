import React from 'react';
import { Milestone } from '../../types';
import { formatUzs } from '../../utils/formatters';
import { CheckCircle2, Clock, CircleDot, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface MilestoneTrackerProps {
  milestones: Milestone[];
  projectId: string;
}

export const MilestoneTracker: React.FC<MilestoneTrackerProps> = ({ milestones, projectId }) => {
  const { currentUser, completeMilestoneAction } = useApp();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Bosqichma-bosqich Moliyalashtirish (Milestones)
            </h3>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Escrow Himoyasi
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Mablag‘lar birvarakayiga emas, balki har bir bosqich mustaqil tekshirilib qabul qilingandan so‘ng chiqariladi
          </p>
        </div>
      </div>

      {/* Milestones list */}
      <div className="space-y-4 mt-5">
        {milestones.map((m, idx) => {
          const isCompleted = m.status === 'completed';
          const isInProgress = m.status === 'in_progress';
          const isPending = m.status === 'pending';

          return (
            <div
              key={m.id}
              className={`p-4 rounded-xl border transition-all ${
                isCompleted
                  ? 'border-emerald-200 bg-emerald-50/30'
                  : isInProgress
                  ? 'border-amber-200 bg-amber-50/30 ring-1 ring-amber-200/50'
                  : 'border-slate-200 bg-slate-50/50 opacity-90'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Status Icon */}
                  <div className="mt-0.5 shrink-0">
                    {isCompleted && (
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                    {isInProgress && (
                      <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center animate-pulse shadow-xs">
                        <CircleDot className="w-4 h-4" />
                      </div>
                    )}
                    {isPending && (
                      <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {m.order}-Bosqich
                      </span>
                      <span className="text-slate-300">·</span>
                      <h4 className="text-sm font-bold text-slate-900">{m.title}</h4>
                      {isCompleted && (
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                          Yakunlangan · {m.completedDate}
                        </span>
                      )}
                      {isInProgress && (
                        <span className="text-[10px] font-semibold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                          Jarayonda
                        </span>
                      )}
                      {isPending && (
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          Bloklangan (Navbatda)
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.description}</p>

                    {/* Evidence & Auditor notes */}
                    {m.evidenceNotes && (
                      <div className="mt-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-900 block">
                            Audit tekshiruvi: {m.verifierName || 'Rasmiy komissiya'}
                          </span>
                          <span className="text-[11px] text-slate-600">{m.evidenceNotes}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Target Amount and Release Status */}
                <div className="sm:text-right shrink-0">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                    Bosqich summasi:
                  </span>
                  <span className="text-sm font-mono font-bold text-slate-900">
                    {formatUzs(m.targetAmount)}
                  </span>
                  <div className="text-[11px] mt-0.5">
                    {m.releasedAmount > 0 ? (
                      <span className="text-emerald-700 font-semibold">
                        {formatUzs(m.releasedAmount)} ajratildi
                      </span>
                    ) : (
                      <span className="text-slate-400">Escrowda saqlanmoqda</span>
                    )}
                  </div>

                  {/* Admin role action button to simulate verification */}
                  {currentUser.role === 'admin' && !isCompleted && (
                    <button
                      onClick={() => completeMilestoneAction(projectId, m.id)}
                      className="mt-2 text-[11px] font-semibold px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded cursor-pointer transition-colors shadow-xs"
                    >
                      Bosqichni tasdiqlash
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
