import React, { useState } from 'react';
import { SKILL_ROWS } from '../Utils/constants';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="mono text-xs font-semibold text-[#3F72AF] tracking-wider uppercase">
              04 — THE TOOLBOX
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-2">
                Useful at different layers.
              </h2>
              <p className="text-sm sm:text-base text-[#112D4E]/70 dark:text-[#DBE2EF]/80 max-w-xl">
                A toolkit honed from silicon registers up to modern distributed cloud systems.
              </p>
            </div>
            <div className="mono text-xs text-[#112D4E]/50 dark:text-[#DBE2EF]/50">
              6 Core Layers
            </div>
          </div>
        </div>

        {/* Editorial Table Matching the Screenshot */}
        <div className="overflow-x-auto">
          <div className="min-w-160 divide-y divide-[#DBE2EF] dark:divide-[#3F72AF]/20 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
            {SKILL_ROWS.map((row) => (
              <div
                key={row.category}
                onMouseEnter={() => setActiveCategory(row.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`grid grid-cols-12 py-5 px-4 transition-colors duration-150 ${
                  activeCategory === row.category 
                    ? 'bg-[#DBE2EF]/30 dark:bg-[#112D4E]/50' 
                    : 'hover:bg-[#DBE2EF]/15 dark:hover:bg-[#112D4E]/20'
                }`}
              >
                {/* Category Column (3 cols) */}
                <div className="col-span-3 pr-4 flex items-center">
                  <span className="mono text-xs sm:text-sm font-semibold text-[#3F72AF] dark:text-[#DBE2EF]">
                    {row.category}
                  </span>
                </div>

                {/* Skills Row (9 cols) */}
                <div className="col-span-9 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {row.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm text-[#112D4E]/90 dark:text-[#F9F7F7] font-normal hover:text-[#3F72AF] dark:hover:text-[#DBE2EF] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
