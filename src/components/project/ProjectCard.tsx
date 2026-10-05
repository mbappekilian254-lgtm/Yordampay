import React from 'react';
import { Project } from '../../types';
import { formatUzs, formatPercentage } from '../../utils/formatters';
import { useApp } from '../../context/AppContext';
import { MapPin, Users, ShieldCheck, ArrowRight, HeartHandshake } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { setCurrentView, openContributionModal } = useApp();

  const progress = formatPercentage(project.raisedAmount, project.requiredAmount);
  const remaining = Math.max(0, project.requiredAmount - project.raisedAmount);

  const handleCardClick = () => {
    if (onSelect) {
      onSelect();
    } else {
      setCurrentView('project-detail', project.id);
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col h-full text-left">
      {/* Visual Image container with fallback */}
      <div
        onClick={handleCardClick}
        className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 cursor-pointer"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          onError={(e) => {
            // CSS fallback container
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Quiet status and category overlay strip */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-xs">
            {project.type === 'business' ? 'Yosh tadbirkor' : 'Ijtimoiy loyiha'}
          </div>

          {project.trustEngine.trustStatus === 'VERIFIED' && (
            <div className="bg-emerald-900/90 backdrop-blur-xs text-emerald-200 text-[11px] font-semibold px-2 py-1 rounded-md shadow-xs flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tasdiqlangan</span>
            </div>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed clean metadata kicker */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.location.city}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Impact: {project.impactMetrics.overallScore}/100</span>
          </div>

          {/* Title */}
          <h3
            onClick={handleCardClick}
            className="text-base font-bold text-slate-900 line-clamp-2 hover:text-emerald-700 transition-colors cursor-pointer tracking-tight"
          >
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Financial Flow & Progress Section */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-1.5 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Yig‘ilgan:</span>
              <span className="font-mono font-bold text-slate-900">{formatUzs(project.raisedAmount)}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Zarur summa:</span>
              <span className="font-mono font-medium text-slate-600">{formatUzs(project.requiredAmount)}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span className="font-semibold text-emerald-800 font-mono">{progress}% to‘plandi</span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{project.supportersCount} saxovatpesha</span>
            </span>
          </div>

          {/* Actions Button Row */}
          <div className="mt-4 pt-3 flex items-center gap-2">
            <button
              onClick={handleCardClick}
              className="flex-1 text-center py-2 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Batafsil ko‘rish
            </button>
            <button
              onClick={() => openContributionModal(project)}
              className="inline-flex items-center justify-center gap-1 py-2 px-3.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Qo‘llash</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
