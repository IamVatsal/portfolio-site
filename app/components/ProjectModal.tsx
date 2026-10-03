"use client";
import React, { useEffect } from 'react';
import { Project } from '../Utils/types';
import { X, ArrowUpRight, Cpu, Workflow, Lightbulb, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F9F7F7] dark:bg-[#112D4E] text-[#112D4E] dark:text-[#F9F7F7] rounded-2xl border border-[#DBE2EF] dark:border-[#3F72AF]/40 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#DBE2EF] dark:border-[#3F72AF]/30 flex items-center justify-center text-[#112D4E] dark:text-[#DBE2EF] hover:bg-[#DBE2EF]/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mono text-xs font-semibold text-[#3F72AF] dark:text-[#DBE2EF] uppercase tracking-wider mb-2">
            <span>PROJECT / {project.number}</span>
            <span>·</span>
            <span>{project.tagline}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            {project.title}
          </h2>
          <p className="text-sm text-[#112D4E]/80 dark:text-[#DBE2EF]/90 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-8 pb-6 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs mono rounded bg-white dark:bg-[#0b1a2d] text-[#112D4E] dark:text-[#DBE2EF] border border-[#DBE2EF] dark:border-[#3F72AF]/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Problem & Solution Sections */}
        <div className="space-y-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs mono uppercase tracking-wider text-[#3F72AF] dark:text-[#DBE2EF] font-bold mb-2">
              <AlertCircle className="w-4 h-4 text-[#3F72AF]" />
              The Problem & Core Challenge
            </div>
            <p className="text-sm leading-relaxed text-[#112D4E]/85 dark:text-[#DBE2EF]/90 bg-white/60 dark:bg-[#0b1a2d]/40 p-4 rounded-xl border border-[#DBE2EF] dark:border-[#3F72AF]/20">
              {project.problem}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs mono uppercase tracking-wider text-[#3F72AF] dark:text-[#DBE2EF] font-bold mb-2">
              <Cpu className="w-4 h-4 text-[#3F72AF]" />
              Engineering Solution
            </div>
            <p className="text-sm leading-relaxed text-[#112D4E]/85 dark:text-[#DBE2EF]/90 bg-white/60 dark:bg-[#0b1a2d]/40 p-4 rounded-xl border border-[#DBE2EF] dark:border-[#3F72AF]/20">
              {project.solution}
            </p>
          </div>

          {/* Architecture Pipeline */}
          <div>
            <div className="flex items-center gap-2 text-xs mono uppercase tracking-wider text-[#3F72AF] dark:text-[#DBE2EF] font-bold mb-2">
              <Workflow className="w-4 h-4 text-[#3F72AF]" />
              System Architecture & Data Flow
            </div>
            <div className="mono text-xs p-4 rounded-xl bg-[#112D4E] text-[#DBE2EF] border border-[#3F72AF]/30 overflow-x-auto">
              <code>{project.architecture}</code>
            </div>
          </div>

          {/* Key Engineering Takeaway */}
          <div>
            <div className="flex items-center gap-2 text-xs mono uppercase tracking-wider text-[#3F72AF] dark:text-[#DBE2EF] font-bold mb-2">
              <Lightbulb className="w-4 h-4 text-[#3F72AF]" />
              Key Engineering Takeaway
            </div>
            <p className="text-sm italic leading-relaxed text-[#112D4E]/80 dark:text-[#DBE2EF]/80 border-l-2 border-[#3F72AF] pl-4">
              "{project.keyTakeaway}"
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-[#DBE2EF] dark:border-[#3F72AF]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs mono font-semibold rounded bg-[#112D4E] dark:bg-[#3F72AF] text-white hover:bg-[#3F72AF] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Explore GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs mono font-semibold rounded border border-[#DBE2EF] dark:border-[#3F72AF]/40 hover:border-[#3F72AF] transition-colors"
              >
                <span>Live Deployment</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3F72AF]" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs mono text-[#112D4E]/60 dark:text-[#DBE2EF]/60 hover:text-[#112D4E] dark:hover:text-white transition-colors"
          >
            Press ESC to close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
