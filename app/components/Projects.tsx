
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../Utils/constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="03. Selected Projects">
      <div className="space-y-24">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="mono text-cyan-500 text-xs mb-2">Project {String(idx + 1).padStart(2, '0')}</div>
              <h3 className="text-3xl font-bold mb-4 text-zinc-100">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="mono text-[10px] px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a 
                href={project.githubUrl} 
                className="inline-flex items-center text-zinc-400 hover:text-white transition-colors text-sm underline underline-offset-4"
                target="_blank"
              >
                View Repository
              </a>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded shadow-xl">
                <h4 className="mono text-xs text-zinc-500 uppercase mb-3">The Problem</h4>
                <p className="text-zinc-300 mb-6 leading-relaxed">{project.problem}</p>
                
                <h4 className="mono text-xs text-zinc-500 uppercase mb-3">The Solution</h4>
                <p className="text-zinc-300 mb-6 leading-relaxed">{project.solution}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
                  <div>
                    <h4 className="mono text-xs text-zinc-500 uppercase mb-2">Impact</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{project.impact}</p>
                  </div>
                  <div>
                    <h4 className="mono text-xs text-zinc-500 uppercase mb-2">Key Lesson</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{project.lessons}</p>
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
