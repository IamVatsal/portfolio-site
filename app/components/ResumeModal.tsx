"use client";
import React, { useEffect } from 'react';
import { USER_INFO, EXPERIENCE, PROJECTS, SKILL_ROWS, EDUCATION } from '../Utils/constants';
import { X, Printer, Download, MapPin, Mail, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    // in new tab?
    window.open('https://iamvatsal.github.io/My-Resume/cv.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-50 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="mono text-xs font-semibold text-zinc-700">
              Vatsal_Resume_2026.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs mono rounded bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed text-zinc-800 bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-2">
              VATSAL
            </h1>
            <div className="text-sm font-semibold text-zinc-700 mb-3 tracking-wide">
              SOFTWARE ENGINEER · SYSTEMS & WEB DEVELOPMENT
            </div>
            
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs mono text-zinc-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-500" />
                Himatnagar, Gujarat, India
              </span>
              <span>·</span>
              <a href={`mailto:${USER_INFO.email}`} className="flex items-center gap-1 hover:text-zinc-950 underline">
                <Mail className="w-3 h-3 text-zinc-500" />
                {USER_INFO.email}
              </a>
              <span>·</span>
              <a href={USER_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-950 underline">
                <GithubIcon className="w-3 h-3 text-zinc-500" />
                github.com/IamVatsal
              </a>
              <span>·</span>
              <a href={USER_INFO.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-950 underline">
                <Globe className="w-3 h-3 text-zinc-500" />
                vatsal.live
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold mono uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <span className="font-bold text-sm text-zinc-950">{EDUCATION.degree}</span>
              </div>
              <span className="text-xs mono text-zinc-600">{EDUCATION.period}</span>
            </div>
            <div className="text-xs text-zinc-600">
              {EDUCATION.institution} · {EDUCATION.focus}
            </div>
          </div>

          {/* Experience Section (Requested by user) */}
          <div className="mb-6">
            <h2 className="text-xs font-bold mono uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
              WORK & INTERNSHIP EXPERIENCE
            </h2>

            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <div>
                    <span className="font-bold text-sm text-zinc-950">{exp.role}</span>
                    <span className="text-zinc-500 mx-1.5">—</span>
                    <span className="font-semibold text-sm text-zinc-800">{exp.company}</span>
                    <span className="text-xs mono text-zinc-500 ml-2">({exp.type})</span>
                  </div>
                  <span className="text-xs mono text-zinc-600 whitespace-nowrap">
                    {exp.period} ({exp.duration}) · {exp.location}
                  </span>
                </div>

                <ul className="list-disc list-inside text-xs text-zinc-700 space-y-1 pl-1 mt-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-normal">
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Technical Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold mono uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
              SELECTED TECHNICAL PROJECTS
            </h2>

            <div className="space-y-4">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                    <span className="font-bold text-sm text-zinc-950">
                      {p.title}
                    </span>
                    <span className="text-xs mono text-zinc-500">
                      {p.tech.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-normal">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold mono uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_ROWS.map((row) => (
                <div key={row.category} className="flex items-baseline gap-2">
                  <span className="font-bold text-zinc-900 mono w-32 shrink-0">
                    {row.category}:
                  </span>
                  <span className="text-zinc-700">
                    {row.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
