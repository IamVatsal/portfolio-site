import React from 'react';
import { PHILOSOPHY } from '../Utils/constants';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="mono text-xs font-semibold text-[#3F72AF] tracking-wider uppercase">
              06 — WORKING THEORY
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-2">
                How I keep the signal clear.
              </h2>
              <p className="text-sm sm:text-base text-[#112D4E]/70 dark:text-[#DBE2EF]/80 max-w-xl">
                Guiding tenets that preserve focus across messy domains and complex stacks.
              </p>
            </div>
            <div className="mono text-xs text-[#112D4E]/50 dark:text-[#DBE2EF]/50">
              First Principles
            </div>
          </div>
        </div>

        {/* 3 Column Notes Grid Matching Photo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY.map((item) => (
            <div
              key={item.number}
              className="p-6 rounded-xl border border-[#DBE2EF] dark:border-[#3F72AF]/30 bg-[#DBE2EF]/20 dark:bg-[#112D4E]/20"
            >
              <div className="mono text-[11px] font-semibold text-[#3F72AF] dark:text-[#DBE2EF]/70 uppercase tracking-widest mb-4">
                {item.number} / NOTE
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#112D4E]/75 dark:text-[#DBE2EF]/80 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
