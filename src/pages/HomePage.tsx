import React from 'react';
import { useApp } from '../context/AppContext';
import { ProjectCard } from '../components/project/ProjectCard';
import { MoneyFlowVisualizer } from '../components/project/MoneyFlowVisualizer';
import { formatUzs } from '../utils/formatters';
import { PLATFORM_STATS } from '../data/mockData';
import { 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  Search, 
  Eye, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Building2,
  Users,
  Compass
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { projects, setCurrentView, openContributionModal, openImpactReportModal } = useApp();

  const featuredProjects = projects.slice(0, 3);
  const completedProject = projects.find(p => p.status === 'completed') || projects[2];

  const workflowSteps = [
    {
      num: '01',
      title: 'Need (Muammo)',
      desc: 'Maktab, mahalla yoki yosh tadbirkor ehtiyoji asosida batafsil ariza va smeta shakllantiriladi.'
    },
    {
      num: '02',
      title: 'Verify (Tekshiruv)',
      desc: 'Trust Engine va inson auditorlari shaxsiyat, ta’minotchi va narxlarni mustaqil o‘rganadi.'
    },
    {
      num: '03',
      title: 'Fund (Yig‘im)',
      desc: 'Mablag‘lar ochiq bank escrow hisobida jamg‘ariladi va himoyalanadi.'
    },
    {
      num: '04',
      title: 'Track (Kuzatuv)',
      desc: '“1 So‘mning yo‘li” orqali donor o‘z hissasining har bir so‘mini xarajat moddalarida kuzatadi.'
    },
    {
      num: '05',
      title: 'Impact (Natija)',
      desc: 'Bosqichlar yakunlanishi bilan faktik cheklar, fotohisobotlar va ta’sir ko‘rsatkichlari e’lon qilinadi.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          
          {/* Concept Banner */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Money → Transparency → Impact</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] text-balance">
            Yaxshilikni moliyalashtiring. <br />
            <span className="text-emerald-700">Natijani ko‘ring.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance">
            YordamPay — ijtimoiy va mahalliy iqtisodiy loyihalarni moliyalashtirish, mablag‘larning har bir so‘mini ochiq kuzatish va real o‘lchanuvchi natijaga erishish imkonini beruvchi fintech platforma.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => setCurrentView('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>Loyihalarni ko‘rish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentView('create-project')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              <span>Loyiha yaratish</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-10 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Verifikatsiyalangan loyihalar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-emerald-600" />
              <span>Bosqichma-bosqich Escrow yechish</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>AI Anomaliya va Risk Tahlili</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Storytelling Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="p-8 rounded-2xl bg-rose-50/40 border border-rose-100/80">
            <div className="text-xs font-bold text-rose-700 uppercase tracking-widest mb-2">
              Mavjud Muammo
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              “Odamlar yordam bermoqchi. Lekin pulining qayerga ketganini bilmaydi.”
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold mt-0.5">✕</span>
                <span>Muammoning haqiqatda mavjudligi va soxta emasligi noaniq</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold mt-0.5">✕</span>
                <span>So‘ralgan byudjet asossiz shishirilgan yoki ta’minotchi narxiga mos kelmaydi</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold mt-0.5">✕</span>
                <span>Yig‘im tugagach, pul qanday sarflangani bo‘yicha ochiq faktik hisobot bo‘lmaydi</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-emerald-50/40 border border-emerald-100/80">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">
              YordamPay Yechimi
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              “YordamPay har bir so‘mni shaffof boshqaradi va natijani ko‘rsatadi.”
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Trust Engine:</strong> Shaxsiyat, joylashuv va smeta mustaqil tekshiriladi</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>“1 So‘mning Yo‘li”:</strong> Sizning hissangiz qaysi jihozga ketishi aniq ko‘rinadi</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Bosqichli Escrow:</strong> Mablag‘ tovar topshirilgandan keyingina chiqariladi</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Workflow (NEED → VERIFY → FUND → TRACK → IMPACT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
            Yagona Standart
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            NEED → VERIFY → FUND → TRACK → IMPACT
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Har bir loyiha 5 ta qat’iy bosqichdan o‘tadi, bu esa korrupsiya va ishonchsizlikni butunlay bartaraf etadi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflowSteps.map((step) => (
            <div
              key={step.num}
              className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-black font-mono text-emerald-700 block mb-2">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Feature Spotlight: “1 SO‘MNING YO‘LI” */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Markaziy FinTech Xususiyati
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              “1 So‘mning Yo‘li” Interaktiv Oqimi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Quyidagi namunada 100,000 so‘m yoki boshqa summani tanlang va uning taqsimotini sinab ko‘ring
            </p>
          </div>
        </div>

        <MoneyFlowVisualizer
          budget={projects[0].budget}
          projectTitle={projects[0].title}
          defaultAmount={100000}
        />
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Hozir Moliyalashtirilmoqda
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Faol Loyihalar
            </h2>
          </div>

          <button
            onClick={() => setCurrentView('projects')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
          >
            <span>Barchasini ko‘rish ({projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Social & Economic Solutions & Youth Support Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Youth Support */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Yoshlar Kelajagi Dasturi</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                Yoshlar iqtidori va innovatsiyalarini moliyalashtirish
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Namangan robototexnika laboratoriyasi, yosh dasturchilar noutbuklari, hunarmand yoshlar startaplari va ta’lim stipendiyalari.
              </p>
            </div>
            <button
              onClick={() => setCurrentView('youth')}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer self-start"
            >
              <span>Yoshlar dasturini ochish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Social & Economic Systemic Solutions */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Ijtimoiy & Iqtisodiy Yechimlar</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Bir martalik yordam emas, balki tizimli barqaror natija
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Toza ichimlik suvi artezian quduqlari, poliklinikalarga quyosh panellari, ayollar tikuv va ipak kooperativlari, nogironlar uchun to‘siqlarsiz hayot.
              </p>
            </div>
            <button
              onClick={() => setCurrentView('solutions')}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer self-start"
            >
              <span>Tizimli yechimlarni o‘rganish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Verified Completed Case Study & Impact Certificate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Yakunlangan Namunaviy Loyiha</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {completedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                {completedProject.problemStatement}
              </p>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-800 max-w-md">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Yig‘ilgan:</span>
                  <span className="text-base font-bold font-mono text-emerald-400">{formatUzs(completedProject.raisedAmount)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Benefisiarlar:</span>
                  <span className="text-base font-bold font-mono text-white">{completedProject.impactMetrics.beneficiariesCount} nafar</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Faktik Sarf:</span>
                  <span className="text-base font-bold font-mono text-white">98.1%</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => openImpactReportModal(completedProject)}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
                >
                  Rasmiy Ta’sir Hisobotini Ko‘rish (PDF)
                </button>
                <button
                  onClick={() => setCurrentView('project-detail', completedProject.id)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Tafsilotlar
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-800 shadow-xl">
                <img
                  src={completedProject.imageUrl}
                  alt={completedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate Transparency Ledger Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Umumiy Platforma Statistikasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ochiq Mablag‘lar Balansi
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Har bir fuqaro platformadagi jami tushum va xarajatlarni real vaqtda tekshirishi mumkin
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-slate-50 rounded-xl">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Jami Yig‘ilgan Mablag‘:</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 mt-1 block">
                {formatUzs(PLATFORM_STATS.totalRaisedUzs, { compact: true })}
              </span>
              <span className="text-[11px] text-emerald-700 font-medium">100% Escrow kafolati</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Faktik Chiqarilgan (Disbursed):</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-emerald-800 mt-1 block">
                {formatUzs(PLATFORM_STATS.totalDisbursedUzs, { compact: true })}
              </span>
              <span className="text-[11px] text-slate-500">Bosqich dalolatnomalari asosida</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Yakunlangan Loyihalar:</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-slate-900 mt-1 block">
                {PLATFORM_STATS.completedProjectsCount} ta
              </span>
              <span className="text-[11px] text-slate-500">{PLATFORM_STATS.activeProjectsCount} ta faol yig‘imda</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Yordam Ko‘rsatilgan Aholi:</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-emerald-800 mt-1 block">
                {PLATFORM_STATS.totalBeneficiariesCount.toLocaleString('uz-UZ')}
              </span>
              <span className="text-[11px] text-slate-500">O‘quvchilar, oilalar, yoshlar</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentView('transparency')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
            >
              <span>To‘liq moliyaviy audit va oylik grafiklarni ochish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Digital Mahalla Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Digital Mahalla Xaritasi</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              O‘zbekiston bo‘ylab har bir mahallaning real ehtiyojlarini xaritada ko‘ring
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Toshkent, Samarqand, Farg‘ona, Buxoro va boshqa viloyatlardagi maktablar va tadbirkorlik tashabbuslarini geolokatsiya bo‘yicha o‘rganing.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('mahalla')}
            className="px-6 py-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Xaritani ochish
          </button>
        </div>
      </section>
    </div>
  );
};
