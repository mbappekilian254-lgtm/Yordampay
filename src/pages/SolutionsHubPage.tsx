import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatUzs } from '../utils/formatters';
import { 
  HeartHandshake, 
  Droplets, 
  Sun, 
  Briefcase, 
  GraduationCap, 
  Accessibility, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  Users,
  ShieldCheck,
  Building2,
  Cpu
} from 'lucide-react';

export const SolutionsHubPage: React.FC = () => {
  const { setCurrentView } = useApp();

  const [activeSolutionIdx, setActiveSolutionIdx] = useState<number>(0);

  const solutions = [
    {
      id: 'water',
      title: 'Toza Ichimlik Suvi & Qishloq Infratuzilmasi',
      category: 'Ijtimoiy & Ekologik Yechim',
      icon: <Droplets className="w-5 h-5 text-blue-600" />,
      tagline: 'Chekka qishloqlarda artezian quduqlari va sanoat filtrlash stansiyalari',
      problem: 'Orolbo‘yi va cho‘l hududlaridagi minglab oilalar ichimlik suvini kilometrlar uzoqdan tashib ichishga majbur. Bu buyrak va oshqozon-ichak kasalliklarining asosiy sababidir.',
      solutionMechanism: 'YordamPay orqali geologik qidiruv, 100-150 metr chuqurlikdagi artezian qudug‘i va teskari osmos sanoat filtrlari bevosita mahalla nazorati ostida o‘rnatiladi.',
      economicReturn: 'Har bir xonadon suv tashish uchun sarflaydigan oyiga 450,000 so‘m tejaladi, yuqumli kasalliklar 85% ga qisqaradi va qishloq maktablarida davomat 98% ga yetadi.',
      liveExample: 'Qoraqalpog‘istonda 1,200 aholi uchun toza suv qudug‘i (Naymanko‘l mahallasi)',
      projectId: 'proj_clean_water_07'
    },
    {
      id: 'solar',
      title: 'Yashil Energiya & Qishloq Tibbiyot Shoxobchalari',
      category: 'Infratuzilma & Salomatlik',
      icon: <Sun className="w-5 h-5 text-amber-600" />,
      tagline: 'Qishloq poliklinikalari va maktablarini 24/7 avtonom quyosh elektriga o‘tkazish',
      problem: 'Tog‘li va chekka qishloqlarda elektr uzilishlari tufayli vaksinalar, dori-darmonlar saqlanadigan muzlatkichlar va laboratoriyalar to‘xtab qoladi.',
      solutionMechanism: '10 dona 550 Vt monokristall quyosh paneli, gibrid invertor va litiy akkumulyatorlar orqali shifoxona 100% uzluksiz yashil quvvat bilan ta’minlanadi.',
      economicReturn: 'Elektr tarmoqlari to‘lovlari yiliga 18 million so‘m tejaladi va 1,800 nafar aholiga kechayu-kunduz tibbiy xizmat kafolatlanadi.',
      liveExample: 'Surxondaryo Boysun qishloq poliklinikasiga 5 kVt quyosh stansiyasi',
      projectId: 'proj_solar_clinic_09'
    },
    {
      id: 'empowerment',
      title: 'Boqimandalikdan Chiqish — Xotin-qizlar va Yoshlar Bandligi',
      category: 'Iqtisodiy Mustaqillik',
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
      tagline: 'Bir martalik xayriya berish emas, balki daromad keltiruvchi dastgoh bilan ta’minlash',
      problem: 'Bir martalik oziq-ovqat berish oilani qashshoqlikdan chiqarmaydi. Kam ta’minlangan xotin-qizlar va yoshlarga doimiy kasbiy vosita kerak.',
      solutionMechanism: 'Tikuv mashinalari, milliy ipak to‘quv dastgohlari yoki non pishirish pechlari xarid qilinib, mahalliy kooperativlarga biriktiriladi va kafolatlangan xaridorlar topiladi.',
      economicReturn: '10 million so‘mlik uskunalar har yili oilalarga kamida 35-45 million so‘m sof daromad keltiradi va oila doimiy o‘zini-o‘zi ta’minlashga o‘tadi.',
      liveExample: 'Andijon ayollar tikuv sexi va Marg‘ilon hunarmandlar arteli',
      projectId: 'proj_womens_craft_10'
    },
    {
      id: 'disability',
      title: 'Inklyuziv Hayot — Faol Harakatlanish va Jamiyatga Integratsiya',
      category: 'Ijtimoiy Himoya & Inklyuziya',
      icon: <Accessibility className="w-5 h-5 text-indigo-600" />,
      tagline: 'Og‘ir nogironligi bo‘lgan shaxslarga yengil faol aravachalar va uyda masofaviy ish',
      problem: 'Standart og‘ir aravachalar uy ichida erkin yurishga imkon bermaydi. Bolalar yillab xonaga qamalib, o‘qish va do‘stlaridan ajralib qoladi.',
      solutionMechanism: 'Individual o‘lchamdagi yengil alyuminiy aktiv aravachalar shifokor nazorati ostida topshiriladi va bolalarga IT/til o‘rganish noutbuki beriladi.',
      economicReturn: 'Bola maktabga qatnay boshlaydi, oila a’zolari doimiy qarovchilik yukidan yengillashib, mustaqil ishga chiqish imkoniyatiga ega bo‘ladi.',
      liveExample: 'Buxoroda nogironligi bo‘lgan yoshlar uchun faol reabilitatsiya aravachalari',
      projectId: 'proj_wheelchair_04'
    },
    {
      id: 'digital',
      title: 'Raqamli Tenglik & Yoshlar IT Kasblari',
      category: 'Ta’lim & Texnologiya',
      icon: <GraduationCap className="w-5 h-5 text-purple-600" />,
      tagline: 'Qishloq maktablarida zamonaviy kompyuter sinflari va robototexnika',
      problem: 'Shahar va qishloq maktablari o‘rtasida raqamli tafovut kuchaymoqda. Qishloq bolalarida dasturlashni amalda sinab ko‘rishga kompyuter yo‘q.',
      solutionMechanism: '10-15 ta sifatli tizim bloki, monitorlar, internet va bepul o‘quv platformalari maktablarga o‘rnatilib, haftasiga 300+ bolaga amaliy dars o‘tiladi.',
      economicReturn: 'Maktab bitiruvchilari 1-2 yil ichida zamonaviy dasturchi, dizayner yoki IT mutaxassisi bo‘lib, oyiga 4-10 million so‘m daromad olishga erishadi.',
      liveExample: '272-sonli maktab kompyuter sinfi va Namangan robototexnika laboratoriyasi',
      projectId: 'proj_school_comp_01'
    }
  ];

  const active = solutions[activeSolutionIdx];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">
          <span>YordamPay Tizimli Metodologiyasi</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Ijtimoiy & Iqtisodiy Yechimlar Markazi
        </h1>
        <p className="text-xs sm:text-base text-slate-500 mt-1 max-w-3xl leading-relaxed">
          Biz shunchaki xayriya yig‘maymiz. YordamPay muammoning tub ildizini yo‘qotuvchi, har bir inson va oilani doimiy mustaqil daromadga yetaklovchi tizimli FinTech yechimlarni taqdim etadi.
        </p>
      </div>

      {/* Solutions Tabs Strip */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 border-b border-slate-200">
        {solutions.map((sol, idx) => {
          const isSelected = activeSolutionIdx === idx;
          return (
            <button
              key={sol.id}
              onClick={() => setActiveSolutionIdx(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{sol.icon}</span>
              <span>{sol.title.split('—')[0].split('&')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Solution In-Depth Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              {active.category}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {active.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {active.tagline}
            </p>
          </div>

          <button
            onClick={() => setCurrentView('project-detail', active.projectId)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors cursor-pointer shadow-xs shrink-0 self-start sm:self-auto"
          >
            <span>Ushbu loyihani ochish</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Step Systemic Solution Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Problem */}
          <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-100 space-y-2">
            <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block">
              1. Ijtimoiy Muammo:
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {active.problem}
            </p>
          </div>

          {/* 2. Mechanism */}
          <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
              2. YordamPay Yechim Mexanizmi:
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {active.solutionMechanism}
            </p>
          </div>

          {/* 3. Economic Return */}
          <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              3. Iqtisodiy & Barqaror Foyda:
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {active.economicReturn}
            </p>
          </div>
        </div>

        {/* Multiplier / System Impact Note */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-medium text-slate-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Real namunaviy obyekt: <strong>{active.liveExample}</strong></span>
          </div>
          <span className="text-slate-400 font-mono text-[11px]">Audit standarti: ISO-9001/YP-IMPACT</span>
        </div>
      </div>

      {/* Sustainable Development Goals Mapping (SDG) */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>Birlashgan Millatlar Tashkiloti Barqaror Rivojlanish Maqsadlari</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          YordamPay platformasi qanday global muammolarni mahalliy darajada yechadi?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Har bir loyiha qat’iy xalqaro barqarorlik mezonlariga javob beradi: Qashshoqlikka barham berish (SDG 1), Sifatli ta’lim (SDG 4), Toza suv va sanitariya (SDG 6), Arzon va toza energiya (SDG 7) hamda Munosib ish o‘rinlari (SDG 8).
        </p>
      </div>
    </div>
  );
};
