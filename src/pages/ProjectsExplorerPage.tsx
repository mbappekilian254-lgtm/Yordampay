import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ProjectCard } from '../components/project/ProjectCard';
import { ProjectCategory, ProjectType } from '../types';
import { Search, Filter, SlidersHorizontal, MapPin, X } from 'lucide-react';

export const ProjectsExplorerPage: React.FC = () => {
  const { projects } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<'recommended' | 'near_completion' | 'recent' | 'amount_high'>('recommended');
  const [onlyVerified, setOnlyVerified] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'youth', label: 'Yoshlar dasturi' },
    { id: 'education', label: 'Ta’lim va maktablar' },
    { id: 'water_eco', label: 'Toza suv & Eko' },
    { id: 'health', label: 'Salomatlik & Energiya' },
    { id: 'disability', label: 'Nogironlik va tibbiyot' },
    { id: 'business', label: 'Yosh tadbirkor' },
    { id: 'community', label: 'Mahalla va jamoat' },
    { id: 'social', label: 'Ijtimoiy yordam' }
  ];

  const regions = [
    'all',
    'Toshkent shahri',
    'Samarqand viloyati',
    'Farg‘ona viloyati',
    'Buxoro viloyati',
    'Namangan viloyati',
    'Surxondaryo viloyati',
    'Qoraqalpog‘iston Respublikasi',
    'Qashqadaryo viloyati',
    'Andijon viloyati'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesDesc = p.problemStatement.toLowerCase().includes(q);
        const matchesCity = p.location.city.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCity) return false;
      }

      // Category
      if (selectedCategory !== 'all') {
        if (p.category !== selectedCategory) return false;
      }

      // Region
      if (selectedRegion !== 'all') {
        if (p.location.region !== selectedRegion) return false;
      }

      // Only Verified
      if (onlyVerified && p.trustEngine.trustStatus !== 'VERIFIED') {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === 'near_completion') {
        const progA = a.raisedAmount / a.requiredAmount;
        const progB = b.raisedAmount / b.requiredAmount;
        return progB - progA;
      }
      if (selectedSort === 'recent') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (selectedSort === 'amount_high') {
        return b.requiredAmount - a.requiredAmount;
      }
      // default: overall impact score
      return b.impactMetrics.overallScore - a.impactMetrics.overallScore;
    });
  }, [projects, searchQuery, selectedCategory, selectedRegion, selectedSort, onlyVerified]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">
          <span>Ochiq Katalog</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Mahalliy Ehtiyojlar va Muammolar
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          Tasdiqlangan ijtimoiy tashabbuslar va yosh tadbirkorlik loyihalari. Har bir loyiha ochiq smeta va mustaqil auditorlik xulosasiga ega.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Muammo, maktab, tuman yoki mahalla nomini qidiring..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-600 text-slate-900 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Region Select */}
          <div className="w-full md:w-56">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-emerald-600 cursor-pointer"
            >
              <option value="all">Barcha viloyatlar</option>
              {regions.filter(r => r !== 'all').map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Sort Select */}
          <div className="w-full md:w-56">
            <select
              value={selectedSort}
              onChange={(e: any) => setSelectedSort(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-emerald-600 cursor-pointer"
            >
              <option value="recommended">Tavsiya etilgan (Impact Score)</option>
              <option value="near_completion">Tugallanishiga yaqin</option>
              <option value="recent">Yangi qo‘shilganlar</option>
              <option value="amount_high">Byudjet hajmi bo‘yicha</option>
            </select>
          </div>
        </div>

        {/* Categories Tab Strip & Verification Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map(c => {
              const active = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer shrink-0 ${
                    active
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={onlyVerified}
              onChange={(e) => setOnlyVerified(e.target.checked)}
              className="w-3.5 h-3.5 rounded text-emerald-700 focus:ring-emerald-600 border-slate-300"
            />
            <span>Faqat to‘liq tasdiqlanganlar (Verified)</span>
          </label>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Topildi: <strong>{filteredProjects.length} ta loyiha</strong></span>
        {(searchQuery || selectedCategory !== 'all' || selectedRegion !== 'all' || onlyVerified) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedRegion('all');
              setOnlyVerified(false);
            }}
            className="text-emerald-700 hover:underline cursor-pointer font-medium"
          >
            Filtrlarni tozalash
          </button>
        )}
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Mos keluvchi loyihalar topilmadi
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Qidiruv so‘zini o‘zgartiring yoki filtrlarni tozalab qaytadan urinib ko‘ring.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedRegion('all');
              setOnlyVerified(false);
            }}
            className="mt-2 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
          >
            Barcha loyihalarni ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
};
