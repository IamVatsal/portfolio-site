import React from 'react';
import { FieldNote } from '../Utils/types';
import { FIELD_NOTES, USER_INFO } from '../Utils/constants';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface FieldNotesProps {
  onSelectNote: (note: FieldNote) => void;
}

const FieldNotes: React.FC<FieldNotesProps> = ({ onSelectNote }) => {
  return (
    <section id="writing" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="mono text-xs font-semibold text-[#3F72AF] tracking-wider uppercase">
              05 — FIELD NOTES
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-2">
                Things I'm thinking through.
              </h2>
              <p className="text-sm sm:text-base text-[#112D4E]/70 dark:text-[#DBE2EF]/80 max-w-xl">
                Essays, architectural breakdowns, and field observations on systems and AI.
              </p>
            </div>
            
            <a
              href={USER_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs mono text-[#3F72AF] hover:text-[#112D4E] dark:hover:text-white transition-colors"
            >
              <span>All notes on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Column Grid Matching Photo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIELD_NOTES.map((note) => {
            const isFeatured = note.featured;

            return (
              <div
                key={note.id}
                onClick={() => onSelectNote(note)}
                className={`group rounded-xl p-7 flex flex-col justify-between cursor-pointer subtle-card border transition-all ${
                  isFeatured
                    ? 'bg-[#112D4E] text-[#F9F7F7] border-[#112D4E] shadow-md dark:border-[#3F72AF]/50'
                    : 'bg-[#F9F7F7] dark:bg-[#112D4E]/30 text-[#112D4E] dark:text-[#F9F7F7] border-[#DBE2EF] dark:border-[#3F72AF]/30'
                }`}
              >
                <div>
                  {/* Top Kicker & Read Time */}
                  <div className="flex items-center justify-between text-[11px] mono uppercase tracking-wider mb-6 pb-3 border-b border-current/15">
                    <span className={isFeatured ? 'text-[#DBE2EF]' : 'text-[#3F72AF]'}>
                      {note.number} / {note.type}
                    </span>
                    <span className="opacity-70">
                      {note.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight mb-4 group-hover:underline underline-offset-4 leading-snug">
                    {note.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isFeatured ? 'text-[#DBE2EF]/90' : 'text-[#112D4E]/70 dark:text-[#DBE2EF]/80'
                  }`}>
                    {note.excerpt}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-current/15 flex items-center justify-between text-xs mono">
                  <span className={`inline-flex items-center gap-1 font-medium ${
                    isFeatured ? 'text-[#DBE2EF] group-hover:text-white' : 'text-[#3F72AF] group-hover:text-[#112D4E] dark:group-hover:text-white'
                  }`}>
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>
                      {note.id === 'technical-rag' ? 'Read the system notes' : note.id === 'iot-sensor-inbox' ? 'Read the build log' : 'Open the notebook'}
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FieldNotes;
