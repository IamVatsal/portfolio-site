
import React, { useState } from 'react';
import Section from './Section';
import { PROJECTS } from '../Utils/constants';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <Section id="projects" title="03. Selected Projects">
      <div className="space-y-12">
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            className="group relative border border-zinc-800 bg-zinc-900/10 transition-all duration-500 hover:border-zinc-700 overflow-hidden"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Entry Header */}
            <div className="p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Information Column */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="mono text-[10px] text-cyan-500">[{String(idx + 1).padStart(2, '0')}]</span>
                      <a href={project.githubUrl} target="_blank" className="z-10 flex-1">
                      <h3 
                        className="text-3xl font-bold text-zinc-100 tracking-tight cursor-default transition-colors hover:text-cyan-400"
                      >
                        {project.title}
                      </h3>
                      </a>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="mono text-[9px] px-2 py-0.5 border border-zinc-800 text-zinc-500 rounded lowercase">
                          #{t.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-800/50">
                    <div>
                      <h4 className="mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">System Context</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Architectural Solve</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      className="group/link flex items-center gap-2 mono text-[10px] text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      <span className="border-b border-zinc-800 group-hover/link:border-cyan-400 py-1 uppercase tracking-widest">
                        View_Code
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="group/link flex items-center gap-2 mono text-[10px] text-zinc-400 hover:text-cyan-400 transition-colors"
                      >
                        <span className="border-b border-zinc-800 group-hover/link:border-cyan-400 py-1 uppercase tracking-widest">
                          Launch_Demo
                        </span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Technical Preview Column - 16:9 Aspect */}
                <div className="lg:col-span-5 relative">
                  <div className="aspect-video w-full bg-zinc-950 border border-zinc-800 relative overflow-hidden group-hover:border-zinc-600 transition-colors">
                    {/* Placeholder Grid */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    
                    {/* The Image (Appears on Hover) */}
                    <a href={project.githubUrl} target="_blank" className="z-10 absolute inset-0">
                    <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${hoveredProject === project.id ? 'opacity-100 scale-100 filter-none' : 'opacity-100 scale-110 filter grayscale contrast-150 brightness-75'}`}>
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay"></div>
                      
                      {/* Scanline Effect */}
                      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-20 bg-[length:100%_2px,3px_100%]"></div>
                    </div>
                    </a>
                  </div>
                  
                  {/* Insight Metadata below image */}
                  <div className="mt-6 flex gap-6">
                    <div className="flex-1">
                      <h5 className="mono text-[8px] text-zinc-600 uppercase mb-1">Architecture</h5>
                      <p className="text-zinc-500 text-[12px] leading-tight font-light">{project.impact}</p>
                    </div>
                    <div className="flex-1">
                      <h5 className="mono text-[8px] text-zinc-600 uppercase mb-1">Observation</h5>
                      <p className="text-zinc-500 text-[12px] leading-tight font-light">{project.lessons}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
