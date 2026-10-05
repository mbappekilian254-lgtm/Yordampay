import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatUzs } from '../utils/formatters';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  FileQuestion, 
  Clock, 
  Building2, 
  FileText, 
  XCircle,
  Eye,
  Check,
  Flag,
  ArrowRight
} from 'lucide-react';

export const AdminPanelPage: React.FC = () => {
  const { 
    projects, 
    currentUser, 
    reviewProjectAction, 
    completeMilestoneAction, 
    setCurrentView 
  } = useApp();

  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || '');
  const [adminNote, setAdminNote] = useState('');

  const activeProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const pendingCount = projects.filter(p => p.status === 'pending_verification' || p.status === 'under_review').length;
  const flaggedCount = projects.filter(p => p.status === 'flagged' || p.trustEngine.riskLevel === 'MEDIUM').length;
  const verifiedCount = projects.filter(p => p.trustEngine.trustStatus === 'VERIFIED').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">
            <span>YordamPay Trust & Audit Boshqaruvi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Ekspertiza va Verifikatsiya Paneli
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Hozirgi tekshiruvchi: <strong>{currentUser.name}</strong> ({currentUser.email})
          </p>
        </div>

        <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Audit vakolati: Loyihalarni tasdiqlash, qaytarish va bosqich pullarini ochish</span>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Navbatdagi arizalar:</span>
          <span className="text-2xl font-black font-mono text-slate-900 mt-1 block">{pendingCount} ta</span>
          <span className="text-[11px] text-amber-700">Ko‘rik kutilmoqda</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">E’tibor talab (Flagged):</span>
          <span className="text-2xl font-black font-mono text-rose-700 mt-1 block">{flaggedCount} ta</span>
          <span className="text-[11px] text-rose-600">AI / Byudjet ogohlantirishi</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Tasdiqlangan Loyihalar:</span>
          <span className="text-2xl font-black font-mono text-emerald-800 mt-1 block">{verifiedCount} ta</span>
          <span className="text-[11px] text-emerald-700">Trust Engine faol</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Jami Hujjatlar:</span>
          <span className="text-2xl font-black font-mono text-slate-900 mt-1 block">48 ta</span>
          <span className="text-[11px] text-slate-500">Schyot va buyruqlar</span>
        </div>
      </div>

      {/* Main Review Workplace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Projects Queue List */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 border-b border-slate-100 bg-slate-50 font-bold text-xs text-slate-800 uppercase tracking-wider">
            Tekshiruvdagi Loyihalar Ro‘yxati
          </div>
          <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
            {projects.map(p => {
              const isSelected = activeProject?.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className={`p-3.5 cursor-pointer transition-colors ${
                    isSelected ? 'bg-amber-50/70 border-l-4 border-amber-600' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>{p.location.city}</span>
                    <span className={`font-semibold px-1.5 py-0.5 rounded text-[10px] ${
                      p.trustEngine.trustStatus === 'VERIFIED'
                        ? 'bg-emerald-100 text-emerald-800'
                        : p.trustEngine.trustStatus === 'FLAGGED'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {p.trustEngine.trustStatus}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{p.title}</h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                    <span className="font-mono">{formatUzs(p.requiredAmount)}</span>
                    <span>Risk: {p.trustEngine.riskLevel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Project Review Console */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
          {activeProject ? (
            <>
              {/* Project Title and Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ko‘rib chiqilayotgan obyekt:</span>
                  <h3 className="text-lg font-bold text-slate-900">{activeProject.title}</h3>
                  <span className="text-xs text-slate-500">Ariza beruvchi: {activeProject.organization.name} ({activeProject.organization.contactPerson})</span>
                </div>

                <button
                  onClick={() => setCurrentView('project-detail', activeProject.id)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ommaviy ko‘rinish</span>
                </button>
              </div>

              {/* AI Risk Quick Alert box */}
              <div className="p-4 rounded-xl border bg-slate-50 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">AI Risk va Anomaliya Diagnostikasi</span>
                  <span className="font-mono font-bold text-slate-700">Xavf darajasi: {activeProject.aiRiskAnalysis.riskLevel}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeProject.aiRiskAnalysis.summary}
                </p>
                {activeProject.aiRiskAnalysis.riskFactors.map(rf => (
                  <div key={rf.id} className="text-xs text-amber-800 bg-amber-50 p-2 rounded border border-amber-200 flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span><strong>{rf.title}:</strong> {rf.description}</span>
                  </div>
                ))}
              </div>

              {/* Budget and Supplier check */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Smeta va Ta’minotchi Hujjatlari Tekshiruvi
                </h4>
                <div className="space-y-2">
                  {activeProject.budget.map(b => (
                    <div key={b.id} className="p-3 rounded-lg border border-slate-200 text-xs flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-slate-900 block">{b.name}</span>
                        <span className="text-[11px] text-slate-500">Ta’minotchi: {b.supplierName || 'Ko‘rsatilmagan'}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-slate-900 block">{formatUzs(b.plannedAmount)}</span>
                        <span className={`text-[10px] ${b.verified ? 'text-emerald-700 font-semibold' : 'text-amber-700'}`}>
                          {b.verified ? '✓ Asoslangan' : 'Tekshiruv kerak'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones Escrow Release Actions */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Bosqichli Escrow Chiqarish (Milestones)
                </h4>
                <div className="space-y-2">
                  {activeProject.milestones.map(m => (
                    <div key={m.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-slate-900 block">{m.order}-bosqich: {m.title}</span>
                        <span className="text-[11px] text-slate-500">{m.description}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-slate-900">{formatUzs(m.targetAmount)}</span>
                        {m.status === 'completed' ? (
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            To‘lov chiqarilgan
                          </span>
                        ) : (
                          <button
                            onClick={() => completeMilestoneAction(activeProject.id, m.id, 'Auditor tomonidan cheklar tasdiqlandi.')}
                            className="px-2.5 py-1 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded cursor-pointer transition-colors"
                          >
                            Tasdiqlash & Chiqarish
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Actions Panel */}
              <div className="p-4 bg-slate-100 rounded-xl space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Auditorlik Qarori Qabul Qilish:
                </span>
                
                <input
                  type="text"
                  placeholder="Ekspert xulosasi yoki arizachiga talab yozing..."
                  value={adminNote}
                  onChange={(e) => setAdminNote(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-amber-600"
                />

                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <button
                    onClick={() => {
                      reviewProjectAction(activeProject.id, 'approve', adminNote);
                      setAdminNote('');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg cursor-pointer transition-colors shadow-xs"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Tasdiqlash (Approve to Funding)</span>
                  </button>

                  <button
                    onClick={() => {
                      reviewProjectAction(activeProject.id, 'request_docs', adminNote);
                      setAdminNote('');
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg cursor-pointer transition-colors"
                  >
                    <FileQuestion className="w-3.5 h-3.5" />
                    <span>Qo‘shimcha hujjat so‘rash</span>
                  </button>

                  <button
                    onClick={() => {
                      reviewProjectAction(activeProject.id, 'flag', adminNote);
                      setAdminNote('');
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg cursor-pointer transition-colors"
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>Belgilash (Flag for Audit)</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-slate-400 text-xs">
              Ko‘rish uchun loyihani tanlang
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
