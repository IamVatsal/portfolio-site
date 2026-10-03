import React, { useEffect, useState } from 'react';
import { Project } from '../Utils/types';
import { PROJECTS } from '../Utils/constants';
import { ArrowUpRight, Layers, Eye } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'hardware' | 'ai' | 'systems' | 'web'>('all');
  const [totalCountOfProjects, setTotalCountOfProjects] = useState(PROJECTS.length);
  const [selectedCountOfProjects, setSelectedCountOfProjects] = useState(PROJECTS.length);
  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  useEffect(() => {
    setSelectedCountOfProjects(filteredProjects.length);
  }, [filteredProjects]);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="mono text-xs font-semibold text-[#3F72AF] tracking-wider uppercase">
                02 — SELECTED WORK
              </span>
            </div>
            <span className="mono text-xs text-[#112D4E]/50 dark:text-[#DBE2EF]/50 tracking-widest">
              {selectedCountOfProjects} / {totalCountOfProjects}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-3">
                Projects with receipts.
              </h2>
              <p className="text-sm sm:text-base text-[#112D4E]/70 dark:text-[#DBE2EF]/80 max-w-xl">
                Six experiments across hardware, web, AI, and the beautifully low-level bits in between.
              </p>
            </div>

            {/* Interactive Filters (Buttons/Tabs) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#DBE2EF]/50 dark:bg-[#112D4E]/60 border border-[#DBE2EF] dark:border-[#3F72AF]/30">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs mono rounded-md transition-all ${
                  filter === 'all'
                    ? 'bg-white dark:bg-[#3F72AF] text-[#112D4E] dark:text-white shadow-sm font-semibold'
                    : 'text-[#112D4E]/70 dark:text-[#DBE2EF]/70 hover:text-[#112D4E] dark:hover:text-white'
                }`}
              >
                All (6)
              </button>
              <button
                onClick={() => setFilter('hardware')}
                className={`px-3 py-1.5 text-xs mono rounded-md transition-all ${
                  filter === 'hardware'
                    ? 'bg-white dark:bg-[#3F72AF] text-[#112D4E] dark:text-white shadow-sm font-semibold'
                    : 'text-[#112D4E]/70 dark:text-[#DBE2EF]/70 hover:text-[#112D4E] dark:hover:text-white'
                }`}
              >
                Hardware & IoT
              </button>
              <button
                onClick={() => setFilter('ai')}
                className={`px-3 py-1.5 text-xs mono rounded-md transition-all ${
                  filter === 'ai'
                    ? 'bg-white dark:bg-[#3F72AF] text-[#112D4E] dark:text-white shadow-sm font-semibold'
                    : 'text-[#112D4E]/70 dark:text-[#DBE2EF]/70 hover:text-[#112D4E] dark:hover:text-white'
                }`}
              >
                AI & ML
              </button>
              <button
                onClick={() => setFilter('systems')}
                className={`px-3 py-1.5 text-xs mono rounded-md transition-all ${
                  filter === 'systems'
                    ? 'bg-white dark:bg-[#3F72AF] text-[#112D4E] dark:text-white shadow-sm font-semibold'
                    : 'text-[#112D4E]/70 dark:text-[#DBE2EF]/70 hover:text-[#112D4E] dark:hover:text-white'
                }`}
              >
                Systems & Play
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-3 py-1.5 text-xs mono rounded-md transition-all ${
                  filter === 'web'
                    ? 'bg-white dark:bg-[#3F72AF] text-[#112D4E] dark:text-white shadow-sm font-semibold'
                    : 'text-[#112D4E]/70 dark:text-[#DBE2EF]/70 hover:text-[#112D4E] dark:hover:text-white'
                }`}
              >
                Web & Cloud
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Grid Matching the Photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-xl border border-[#DBE2EF] dark:border-[#3F72AF]/30 bg-[#DBE2EF]/30 dark:bg-[#112D4E]/40 hover:bg-[#DBE2EF]/50 dark:hover:bg-[#112D4E]/60 p-7 flex flex-col justify-between cursor-pointer subtle-card overflow-hidden"
            >
              {/* Large Faded Index Number in Background (Matches Photo) */}
              <div 
                className="absolute top-4 right-6 text-7xl font-extrabold mono text-[#3F72AF]/15 dark:text-[#DBE2EF]/10 select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
              >
                {project.number}
              </div>

              <div>
                {/* Top Kicker */}
                <div className="mono text-[11px] font-semibold text-[#3F72AF] dark:text-[#DBE2EF]/80 uppercase tracking-widest mb-4">
                  PROJECT / {project.number}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-3 group-hover:text-[#3F72AF] dark:group-hover:text-white transition-colors pr-12">
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p className="text-xs sm:text-sm text-[#112D4E]/80 dark:text-[#DBE2EF]/80 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] mono rounded border border-[#DBE2EF] dark:border-[#3F72AF]/40 bg-white/70 dark:bg-[#112D4E]/80 text-[#112D4E]/80 dark:text-[#DBE2EF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div className="pt-4 border-t border-[#DBE2EF]/80 dark:border-[#3F72AF]/20 flex items-center justify-between text-xs mono text-[#112D4E]/60 dark:text-[#DBE2EF]/60">
                <span className="uppercase tracking-wider font-semibold text-[#112D4E]/70 dark:text-[#DBE2EF]/70">
                  {project.tagline}
                </span>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 hover:text-[#3F72AF] dark:hover:text-white transition-colors">
                    Repo
                    <ArrowUpRight className="w-3 h-3 text-[#3F72AF]" />
                  </span>
                  <span className="text-[#DBE2EF] dark:text-[#3F72AF]/40">/</span>
                  <span className="inline-flex items-center gap-1 text-[#3F72AF] dark:text-[#DBE2EF] font-medium group-hover:underline">
                    <Eye className="w-3 h-3" />
                    Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
