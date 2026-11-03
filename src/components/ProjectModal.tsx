import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Layers, Database, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto focus:outline-none">
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="font-semibold text-blue-600 dark:text-blue-400">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.date}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup Detail Studi Kasus"
            className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title Area */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-2 font-medium">
              {project.subtitle}
            </p>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Klien / Mata Kuliah: {project.client}
            </div>
          </div>

          {/* Project Featured Image Mockup */}
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 aspect-video">
            {!imageError ? (
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 text-neutral-400">
                <span>Visual Mockup {project.title}</span>
              </div>
            )}
          </div>

          {/* KPI Metrics Row */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/60">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="font-mono text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tabular-nums">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
                Tantangan & Latar Belakang Masalah
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Solusi & Pendekatan Sistem
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Methodology & Process */}
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Metodologi Pengembangan & Kerangka Kerja</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.methodology}
            </p>
          </div>

          {/* Deliverables Produced */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-3">
              Artefak & Dokumen Hasil Kerja
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List */}
          <div>
            <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2">
              Teknologi & Perangkat Lunak
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400">
              {project.techStack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">{tech}</span>
                  {i < project.techStack.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-500">
              Dokumentasi Akademik Sistem Informasi Komputama
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
