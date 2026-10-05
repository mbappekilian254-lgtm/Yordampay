import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { calculateMoneyAllocation, formatUzs } from '../../utils/formatters';
import { X, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, CreditCard, Sparkles } from 'lucide-react';

export const ContributionModal: React.FC = () => {
  const {
    contributionModalOpen,
    targetProjectForContribution,
    closeContributionModal,
    contributeToProject
  } = useApp();

  const [selectedAmount, setSelectedAmount] = useState<number>(100000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'UzCard' | 'HUMO' | 'Payme' | 'Click'>('UzCard');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [successSubmitted, setSuccessSubmitted] = useState<boolean>(false);

  if (!contributionModalOpen || !targetProjectForContribution) return null;

  const currentAmount = isCustom ? (parseInt(customAmount.replace(/\D/g, '')) || 0) : selectedAmount;
  const allocations = calculateMoneyAllocation(currentAmount, targetProjectForContribution.budget);

  const presets = [50000, 100000, 250000, 500000, 1000000];

  const handleSelectPreset = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setCustomAmount(val);
    setIsCustom(true);
  };

  const handleConfirm = () => {
    if (currentAmount <= 0) return;
    const success = contributeToProject(
      targetProjectForContribution.id,
      currentAmount,
      paymentMethod,
      isAnonymous
    );

    if (success) {
      setSuccessSubmitted(true);
    }
  };

  const handleFinish = () => {
    setSuccessSubmitted(false);
    closeContributionModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Loyihani qo‘llab-quvvatlash
              </h3>
              <p className="text-xs text-slate-500 truncate max-w-xs sm:max-w-md">
                {targetProjectForContribution.title}
              </p>
            </div>
          </div>
          <button
            onClick={closeContributionModal}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!successSubmitted ? (
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Amount Selection */}
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                Hissa miqdorini tanlang:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {presets.map(p => (
                  <button
                    key={p}
                    onClick={() => handleSelectPreset(p)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                      !isCustom && selectedAmount === p
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {p.toLocaleString('uz-UZ')}
                  </button>
                ))}
              </div>

              {/* Custom Amount input */}
              <div className="mt-3">
                <div className="relative rounded-lg shadow-xs">
                  <input
                    type="text"
                    placeholder="Boshqa summa kiriting..."
                    value={isCustom ? customAmount : ''}
                    onChange={handleCustomChange}
                    onFocus={() => setIsCustom(true)}
                    className={`block w-full rounded-lg border px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
                      isCustom
                        ? 'border-emerald-600 ring-2 ring-emerald-600/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-xs font-semibold text-slate-400">so‘m (UZS)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive "1 So'mning Yo'li" Mini Breakdown */}
            {currentAmount > 0 && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-2">
                  <span>Mablag‘ingiz taqsimoti (“1 So‘mning yo‘li”):</span>
                  <span className="font-mono text-emerald-800 font-bold">{formatUzs(currentAmount)}</span>
                </div>
                <div className="space-y-2">
                  {allocations.map(a => (
                    <div key={a.name} className="flex items-center justify-between text-xs text-slate-600">
                      <span className="truncate max-w-[240px] text-slate-700">{a.name}</span>
                      <div className="flex items-center gap-2 shrink-0 font-mono">
                        <span className="text-[11px] text-slate-400">{a.percentage}%</span>
                        <span className="font-medium text-slate-900">{formatUzs(a.allocatedAmount)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Method Selector */}
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                To‘lov usuli (Simulyatsiya):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['UzCard', 'HUMO', 'Payme', 'Click'] as const).map(method => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                      paymentMethod === method
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Anonymous Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="anon"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
              />
              <label htmlFor="anon" className="text-xs text-slate-600 cursor-pointer">
                Anonim qolish (Ismim ommaviy sahifada ko‘rinmasin)
              </label>
            </div>

            {/* Crucial Prototype Mode Disclaimer */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
              <div>
                <strong>Demo Rejim:</strong> Haqiqiy pul yechilmaydi. Ushbu operatsiya orqali loyihaning yig‘im foizi, “1 So‘mning yo‘li” va donor hisoboti real vaqtda yangilanadi.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={closeContributionModal}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleConfirm}
                disabled={currentAmount <= 0}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>{formatUzs(currentAmount)} o‘tkazish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Saxovatingiz uchun tashakkur!
            </h3>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Sizning <strong>{formatUzs(currentAmount)}</strong> miqdoridagi qo‘llab-quvvatlovingiz loyiha escrow hisobiga muvaffaqiyatli yo‘naltirildi.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left max-w-sm mx-auto space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Loyiha:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[200px]">{targetProjectForContribution.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hissa miqdori:</span>
                <span className="font-mono font-bold text-emerald-800">{formatUzs(currentAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tranzaksiya turi:</span>
                <span className="text-slate-700">{paymentMethod} (Simulyatsiya)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleFinish}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Natijani ko‘rish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
