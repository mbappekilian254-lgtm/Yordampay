import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-900 font-extrabold text-lg">
                Y
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Yordam<span className="text-emerald-400">Pay</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Ijtimoiy va mahalliy iqtisodiy loyihalarni shaffof moliyalashtirish, har bir so‘m yo‘lini kuzatish va tasdiqlangan natijani ko‘rish fintech platformasi.
            </p>
            <div className="text-[11px] text-emerald-400 font-medium tracking-wide uppercase">
              Money → Transparency → Impact
            </div>
          </div>

          {/* Core Workflow Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Ishlash Tamoyili
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>1. Need (Muammoni aniqlash)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>2. Verify (Trust Engine tekshiruvi)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>3. Fund (Bosqichma-bosqich yig‘im)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>4. Track (1 So‘mning yo‘li)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>5. Impact (Haqiqiy o‘lchanuvchi natija)</span>
              </li>
            </ul>
          </div>

          {/* Platform Sections */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Platforma Sahifalari
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setCurrentView('projects')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Barcha muammolar va loyihalar
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('youth')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Yoshlar dasturi & Grantlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('solutions')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Ijtimoiy-Iqtisodiy yechimlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('business')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Yosh tadbirkor dasturi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('mahalla')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Digital Mahalla xaritasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('transparency')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Ochiq mablag‘lar va hisobotlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('ai-insights')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  AI Risk & Byudjet tahlili
                </button>
              </li>
            </ul>
          </div>

          {/* Trust and Prototype Notice */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Xavfsizlik va Shaffoflik
            </h4>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/80 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Maqsadli mablag‘ taqsimoti</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Ushbu platforma FinTech prototipi bo‘lib, to‘lovlar va verifikatsiya jarayonlari simulyatsiya qilingan. Haqiqiy to‘lov shlyuzlari (UzCard, HUMO, Click, Payme) integratsiyasiga to‘liq tayyorlangan.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 YordamPay FinTech. O‘zbekiston Respublikasi bo‘ylab ijtimoiy va iqtisodiy shaffoflik standarti.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Maxfiylik siyosati</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Foydalanish shartlari</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Audit protokollari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
