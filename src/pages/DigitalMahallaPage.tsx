import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Project } from '../types';
import { formatUzs, formatPercentage } from '../utils/formatters';
import { 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  ArrowRight, 
  Building2, 
  Filter,
  ShieldCheck
} from 'lucide-react';

export const DigitalMahallaPage: React.FC = () => {
  const { projects, setCurrentView, openContributionModal } = useApp();

  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'all' | 'completed' | 'funding' | 'business'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(projects[0]);

  // Uzbek Map Pin Points for visual positioning (percentages of the map container)
  const regionPins: { [key: string]: { x: number; y: number; name: string } } = {
    'Toshkent shahri': { x: 74, y: 34, name: 'Toshkent shahri' },
    'Samarqand viloyati': { x: 52, y: 55, name: 'Samarqand viloyati' },
    'Farg‘ona viloyati': { x: 88, y: 48, name: 'Farg‘ona viloyati' },
    'Buxoro viloyati': { x: 42, y: 52, name: 'Buxoro viloyati' },
    'Qashqadaryo viloyati': { x: 48, y: 68, name: 'Qashqadaryo viloyati' },
    'Andijon viloyati': { x: 92, y: 42, name: 'Andijon viloyati' },
    'Namangan viloyati': { x: 86, y: 36, name: 'Namangan viloyati' },
    'Surxondaryo viloyati': { x: 54, y: 78, name: 'Surxondaryo viloyati' },
    'Qoraqalpog‘iston Respublikasi': { x: 22, y: 30, name: 'Qoraqalpog‘iston' }
  };

  const filteredProjects = projects.filter(p => {
    if (selectedRegion !== 'all' && p.location.region !== selectedRegion) return false;
    if (selectedStatusFilter === 'completed' && p.status !== 'completed') return false;
    if (selectedStatusFilter === 'funding' && p.status !== 'funding') return false;
    if (selectedStatusFilter === 'business' && p.type !== 'business') return false;
    return true;
  });

  const getMarkerColor = (p: Project) => {
    if (p.status === 'completed') return 'bg-emerald-500 text-white'; // 🟢
    if (p.type === 'business') return 'bg-blue-600 text-white'; // 🔵
    if (p.status === 'funding') return 'bg-amber-500 text-white'; // 🟡
    return 'bg-rose-500 text-white'; // 🔴
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">
          <span>Geolokatsion Shaffoflik</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Digital Mahalla: Respublika Bo‘yicha Ehtiyojlar Xaritasi
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          O‘zbekiston mahallalaridagi ta’lim, tibbiy ko‘mak va yosh tadbirkorlik tashabbuslari. Hududlar kesimida har bir so‘m harakati va mahalla mas’ullari.
        </p>
      </div>

      {/* Legend and Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Status Legend */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-emerald-100" />
            <span className="text-slate-700">Tugallangan (🟢)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-500 ring-2 ring-amber-100" />
            <span className="text-slate-700">Mablag‘ yig‘ilmoqda (🟡)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-blue-600 ring-2 ring-blue-100" />
            <span className="text-slate-700">Tadbirkorlik (🔵)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 ring-2 ring-rose-100" />
            <span className="text-slate-700">Ko‘rib chiqilmoqda (🔴)</span>
          </div>
        </div>

        {/* Region & Filter Controls */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="py-1.5 px-3 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="all">Barcha viloyatlar</option>
            {Object.keys(regionPins).map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          <select
            value={selectedStatusFilter}
            onChange={(e: any) => setSelectedStatusFilter(e.target.value)}
            className="py-1.5 px-3 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="all">Barcha toifalar</option>
            <option value="funding">Yig‘ilmoqda</option>
            <option value="completed">Tugallangan</option>
            <option value="business">Tadbirkorlik</option>
          </select>
        </div>
      </div>

      {/* Main Interactive Map & Project Preview Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Interactive Map Canvas */}
        <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-6 relative overflow-hidden min-h-[460px] flex flex-col justify-between shadow-md">
          {/* Subtle stylized topography map grid */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Map Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                O‘zbekiston Xaritasi · Interaktiv Pins
              </span>
            </div>
            <span className="text-[11px] font-mono">Faol nuqtalar: {filteredProjects.length}</span>
          </div>

          {/* Interactive Geographic Canvas with Region Pins */}
          <div className="relative w-full h-[360px] my-4">
            {/* Outline representation */}
            <svg viewBox="0 0 1000 600" className="w-full h-full opacity-30 pointer-events-none">
              <path
                d="M 120 180 Q 240 120 380 150 T 600 200 T 750 220 T 920 320 T 880 440 T 720 420 T 520 480 T 360 400 T 200 320 Z"
                fill="#064e3b"
                stroke="#10b981"
                strokeWidth="2"
              />
            </svg>

            {/* Positioned project markers */}
            {filteredProjects.map((p) => {
              const coords = regionPins[p.location.region] || { x: 50, y: 50, name: p.location.region };
              const isSelected = activeProject?.id === p.id;
              const markerBg = getMarkerColor(p);

              return (
                <div
                  key={p.id}
                  style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
                  onClick={() => setActiveProject(p)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                >
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg transition-transform duration-200 ${
                    isSelected ? 'scale-115 ring-2 ring-white ' + markerBg : 'hover:scale-110 ' + markerBg
                  }`}>
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[110px] hidden sm:inline">{p.location.city}</span>
                  </div>

                  {/* Marker Tooltip */}
                  <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-slate-900 text-white text-[11px] p-2.5 rounded-lg shadow-xl border border-slate-700 pointer-events-none z-30">
                    <p className="font-bold line-clamp-1">{p.title}</p>
                    <p className="text-slate-400 mt-0.5">{p.location.mahalla}</p>
                    <div className="mt-1 font-mono text-emerald-400 font-semibold">{formatUzs(p.raisedAmount)}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Footer status */}
          <div className="relative z-10 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-800 pt-3">
            <span>Nuqtani bosish orqali loyiha tafsilotlarini oching</span>
            <span className="font-mono text-slate-400">YordamPay GIS Engine</span>
          </div>
        </div>

        {/* Selected Project Interactive Drawer / Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          {activeProject ? (
            <>
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                <span className="font-semibold text-emerald-800">
                  {activeProject.location.region}
                </span>
                <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                  {activeProject.location.city}
                </span>
              </div>

              {/* Photo */}
              <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{activeProject.location.mahalla}</span>
                </p>
                <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                  {activeProject.problemStatement}
                </p>
              </div>

              {/* Progress & Financials */}
              <div className="p-3.5 bg-slate-50 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider">Yig‘ilgan:</span>
                  <span className="font-mono font-bold text-emerald-800">{formatUzs(activeProject.raisedAmount)}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider">Zarur summa:</span>
                  <span className="font-mono text-slate-700">{formatUzs(activeProject.requiredAmount)}</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full rounded-full"
                    style={{ width: `${formatPercentage(activeProject.raisedAmount, activeProject.requiredAmount)}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => openContributionModal(activeProject)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Ushbu mahallaga hissa qo‘shish
                </button>
                <button
                  onClick={() => setCurrentView('project-detail', activeProject.id)}
                  className="w-full py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-center block"
                >
                  To‘liq loyiha pasportini ko‘rish →
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-slate-400 text-xs">
              Xaritadagi birorta nuqtani tanlang
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
