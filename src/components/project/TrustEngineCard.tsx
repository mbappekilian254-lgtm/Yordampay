import React from 'react';
import { TrustEngineData, RiskLevel } from '../../types';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Clock, FileCheck2, UserCheck, Building2, Calculator, Truck } from 'lucide-react';

interface TrustEngineCardProps {
  trustEngine: TrustEngineData;
  projectStatus: string;
}

export const TrustEngineCard: React.FC<TrustEngineCardProps> = ({ trustEngine, projectStatus }) => {
  const {
    verificationCompleteness,
    trustStatus,
    riskLevel,
    verifierName,
    verifierOrganization,
    verifiedAt,
    checklist
  } = trustEngine;

  const checklistItems = [
    { key: 'identityVerified', label: 'Shaxsiyat tasdiqlangan (Pasport/ID)', icon: <UserCheck className="w-4 h-4" />, status: checklist.identityVerified },
    { key: 'projectVerified', label: 'Muammo va manzil joyida o‘rganilgan', icon: <CheckCircle2 className="w-4 h-4" />, status: checklist.projectVerified },
    { key: 'organizationVerified', label: 'Muassasa / Maktab rasmiy vakolati', icon: <Building2 className="w-4 h-4" />, status: checklist.organizationVerified },
    { key: 'budgetReviewed', label: 'Bozor narxlari va smeta tekshirilgan', icon: <Calculator className="w-4 h-4" />, status: checklist.budgetReviewed },
    { key: 'documentsChecked', label: 'Rasmiy buyruq va dalolatnomalar', icon: <FileCheck2 className="w-4 h-4" />, status: checklist.documentsChecked },
    { key: 'supplierChecked', label: 'Ta’minotchi INN va tijorat taklifi', icon: <Truck className="w-4 h-4" />, status: checklist.supplierChecked }
  ];

  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case 'LOW':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'MEDIUM':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'HIGH':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getTrustBadge = () => {
    switch (trustStatus) {
      case 'VERIFIED':
        return {
          label: 'TASDIQLANGAN (VERIFIED)',
          bg: 'bg-emerald-700 text-white',
          icon: <ShieldCheck className="w-4 h-4" />
        };
      case 'UNDER_REVIEW':
        return {
          label: 'KO‘RIB CHIQILMOQDA',
          bg: 'bg-amber-600 text-white',
          icon: <Clock className="w-4 h-4" />
        };
      case 'FLAGGED':
        return {
          label: 'QO‘SHIMCHA TEKSHIRUVDA',
          bg: 'bg-rose-600 text-white',
          icon: <AlertTriangle className="w-4 h-4" />
        };
      default:
        return {
          label: 'KUTILMOQDA',
          bg: 'bg-slate-700 text-white',
          icon: <Clock className="w-4 h-4" />
        };
    }
  };

  const badge = getTrustBadge();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Trust Engine: Ishonchlilik & Verifikatsiya
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Soxta va shubhali yig‘imlarning oldini olish uchun ko‘p bosqichli inson va audit tekshiruvi
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold tracking-wide ${badge.bg}`}>
            {badge.icon}
            <span>{badge.label}</span>
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-b border-slate-100">
        <div className="p-3 bg-slate-50 rounded-lg">
          <span className="text-[11px] text-slate-400 font-medium block uppercase tracking-wider">
            Verifikatsiya darajasi
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-slate-900 font-mono">
              {verificationCompleteness}%
            </span>
            <span className="text-xs text-emerald-700 font-medium">To‘liq tekshiruv</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all"
              style={{ width: `${verificationCompleteness}%` }}
            />
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg">
          <span className="text-[11px] text-slate-400 font-medium block uppercase tracking-wider">
            Xavf darajasi (Risk Level)
          </span>
          <div className="mt-1">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold border ${getRiskColor(riskLevel)}`}>
              {riskLevel === 'LOW' && <CheckCircle2 className="w-3.5 h-3.5" />}
              {riskLevel === 'MEDIUM' && <AlertTriangle className="w-3.5 h-3.5" />}
              {riskLevel === 'HIGH' && <XCircle className="w-3.5 h-3.5" />}
              <span>{riskLevel === 'LOW' ? 'PAST XAVF (IShonchli)' : riskLevel === 'MEDIUM' ? 'O‘RTACHA XAVF' : 'YUQORI XAVF'}</span>
            </span>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">
            AI & Auditor filtri bo‘yicha hech qanday anomaliya aniqlanmagan
          </p>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg">
          <span className="text-[11px] text-slate-400 font-medium block uppercase tracking-wider">
            Mas’ul Auditor / Ekspert
          </span>
          <div className="text-xs font-bold text-slate-900 mt-1">
            {verifierName}
          </div>
          <div className="text-[11px] text-slate-500">
            {verifierOrganization} · {verifiedAt}
          </div>
        </div>
      </div>

      {/* Checklist items grid */}
      <div className="pt-4">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
          Tekshiruv Protokoli va Dalillar
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {checklistItems.map(item => (
            <div
              key={item.key}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/50 text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="text-slate-500">{item.icon}</span>
                <span className="text-slate-800 font-medium">{item.label}</span>
              </div>
              <div>
                {item.status ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Tasdiqlangan
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3" />
                    Kutilmoqda
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
