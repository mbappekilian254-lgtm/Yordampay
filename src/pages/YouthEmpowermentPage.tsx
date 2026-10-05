import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProjectCard } from '../components/project/ProjectCard';
import { formatUzs } from '../utils/formatters';
import { 
  Sparkles, 
  GraduationCap, 
  Bot, 
  Award, 
  Briefcase, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Rocket,
  ShieldCheck
} from 'lucide-react';

export const YouthEmpowermentPage: React.FC = () => {
  const { projects, setCurrentView, openContributionModal } = useApp();

  // Filter projects relating to youth (education, youth category, business, robotics, computers)
  const youthProjects = projects.filter(
    p => p.category === 'youth' || p.category === 'education' || p.category === 'business'
  );

  const [grantCalculatorAmount, setGrantCalculatorAmount] = useState<number>(500000);

  const youthPillars = [
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
      title: 'Talabalar & Yosh Dasturchilar Granti',
      desc: 'Kam ta’minlangan iqtidorli talabalarga dasturlash, sun’iy intellekt va muhandislik noutbuklari bilan ta’minlash.'
    },
    {
      icon: <Bot className="w-5 h-5 text-blue-600" />,
      title: 'Robototexnika & STEM Laboratoriyalari',
      desc: 'Maktab va mahallalarda bepul elektronika, mikrokontrollerlar va 3D modellashtirish to‘garaklarini jihozlash.'
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-600" />,
      title: 'Yosh Usta & Kasb-hunar Startaplari',
      desc: 'Novvoylik, chilangarlik, tikuvchilik va duradgorlik kasbini egallagan yoshlarga birinchi dastgoh va xomashyo ajratish.'
    },
    {
      icon: <Rocket className="w-5 h-5 text-purple-600" />,
      title: 'Startap Mikromoliyalashtirish',
      desc: 'Mahalliy yosh tadbirkorlarning iqtisodiy loyihalarini foizsiz va shaffof jamoaviy moliyalashtirish.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Yoshlar Kelajagi Davlat va Jamoat Dasturi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Yoshlarni Qo‘llab-quvvatlash va <br className="hidden sm:inline" />
            <span className="text-emerald-400">Innovatsiyalar Jamg‘armasi</span>
          </h1>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Har bir yoshning iqtidori va intilishiga imkoniyat yaratamiz. YordamPay orqali yosh muhandislar, talabalar va yosh tadbirkorlar zamonaviy uskunalar bilan bepul ta’minlanadi.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Shaffof uskunalar xaridi</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>Dilerlik narxlarida kafolat</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>Doimiy jamoat auditi</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Youth Support */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {youthPillars.map((p, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-3">
                {p.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Youth Impact Calculator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
            Interaktiv Hisoblagich
          </span>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Sizning Hissangiz Qancha Yoshga Imkoniyat Beradi?
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Quyida summa tanlang va yoshlar hayotidagi o‘lchanuvchi o‘zgarishni ko‘ring
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold text-slate-700 block">Qo‘llab-quvvatlash summasi:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {[200000, 500000, 1000000, 2500000].map(amt => (
                <button
                  key={amt}
                  onClick={() => setGrantCalculatorAmount(amt)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    grantCalculatorAmount === amt
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {formatUzs(amt)}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-emerald-50/70 p-5 rounded-xl border border-emerald-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <span className="text-[10px] text-emerald-800 uppercase tracking-wider block font-semibold">Robototexnika Darslari:</span>
                <span className="text-lg font-black font-mono text-emerald-950 block mt-0.5">
                  {Math.round(grantCalculatorAmount / 125000)} ta bola
                </span>
                <span className="text-[11px] text-emerald-700">1 oylik bepul dars</span>
              </div>
              <div>
                <span className="text-[10px] text-emerald-800 uppercase tracking-wider block font-semibold">Dasturlash Amaliyoti:</span>
                <span className="text-lg font-black font-mono text-emerald-950 block mt-0.5">
                  {Math.round(grantCalculatorAmount / 250000)} nafar yosh
                </span>
                <span className="text-[11px] text-emerald-700">Amaliy darslik & plata</span>
              </div>
              <div>
                <span className="text-[10px] text-emerald-800 uppercase tracking-wider block font-semibold">Kasbiy Ish O‘rni:</span>
                <span className="text-lg font-black font-mono text-emerald-950 block mt-0.5">
                  {grantCalculatorAmount >= 1000000 ? '1 ta usta' : 'Dastgoh ulushi'}
                </span>
                <span className="text-[11px] text-emerald-700">Doimiy daromad sari</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Youth Projects Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Yoshlar Bo‘yicha Faol Loyihalar ({youthProjects.length})
            </h3>
            <p className="text-xs text-slate-500">
              Namangan robototexnika laboratoriyasi, maktab IT sinflari, yosh novvoyxona va hunarmandlar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {youthProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
