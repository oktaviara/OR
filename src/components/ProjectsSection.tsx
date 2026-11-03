import React, { useState } from 'react';
import { ArrowUpRight, Filter, ChevronRight, Eye } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'system-analysis', label: 'Analisis Sistem' },
    { id: 'web-database', label: 'Basis Data & Web' },
    { id: 'ui-ux', label: 'UI/UX Design' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Karya & Studi Kasus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Portofolio Rekayasa Sistem & Desain Digital
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Kumpulan proyek analisis kebutuhan, perancangan antarmuka, dan arsitektur data terstruktur yang dikerjakan secara individual maupun tim akademik.
            </p>
          </div>

          {/* Interactive Filter Segmented Controls (Permitted interactive buttons per Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-850 rounded-xl border border-neutral-200 dark:border-neutral-800 self-start md:self-auto">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento & Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && activeCategory === 'all';
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <div
                  className={`relative overflow-hidden bg-neutral-100 dark:bg-neutral-950 ${
                    isFeatured ? 'aspect-21/9 md:aspect-16/9' : 'aspect-16/10'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900/80 backdrop-blur-md rounded-lg flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Buka Studi Kasus</span>
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Clean unboxed metadata with typographic separators (NO PILLS) */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {project.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.role}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle / summary */}
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer of card */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                      <span>{project.metrics[0]?.value}</span>
                      <span className="text-neutral-400">({project.metrics[0]?.label})</span>
                    </div>

                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Detail
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
