import React from 'react';
import { EXPERIENCE } from '../Utils/constants';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="mono text-xs font-semibold text-[#3F72AF] tracking-wider uppercase">
              03 — EXPERIENCE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-2">
                Experience & Internships.
              </h2>
              <p className="text-sm sm:text-base text-[#112D4E]/70 dark:text-[#DBE2EF]/80 max-w-xl">
                Hands-on software development, real customer impact, and production web engineering.
              </p>
            </div>
            <div className="mono text-xs text-[#3F72AF] font-medium px-3 py-1 rounded bg-[#DBE2EF]/50 dark:bg-[#112D4E] border border-[#DBE2EF] dark:border-[#3F72AF]/30 self-start md:self-auto">
              Production Experience
            </div>
          </div>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-[#DBE2EF] dark:border-[#3F72AF]/30 bg-[#DBE2EF]/20 dark:bg-[#112D4E]/30 p-8 subtle-card"
            >
              {/* Top row: Role, Company, Period, Location */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-2xl font-bold tracking-tight text-[#112D4E] dark:text-[#F9F7F7]">
                      {exp.role}
                    </h3>
                    <span className="mono text-xs px-2.5 py-0.5 rounded border border-[#3F72AF]/30 bg-[#3F72AF]/10 text-[#3F72AF] dark:text-[#DBE2EF] font-semibold">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-[#112D4E]/80 dark:text-[#DBE2EF]/90 font-medium">
                    <span className="flex items-center gap-1.5 text-base font-semibold text-[#3F72AF]">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="text-[#112D4E]/40 dark:text-[#DBE2EF]/40">·</span>
                    <span className="flex items-center gap-1.5 text-xs mono text-[#112D4E]/70 dark:text-[#DBE2EF]/70">
                      <MapPin className="w-3.5 h-3.5 text-[#3F72AF]" />
                      {exp.location} ({exp.locationType})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs mono text-[#112D4E]/70 dark:text-[#DBE2EF]/80 self-start lg:self-auto bg-white/70 dark:bg-[#112D4E] px-3.5 py-1.5 rounded-lg border border-[#DBE2EF] dark:border-[#3F72AF]/30">
                  <Calendar className="w-3.5 h-3.5 text-[#3F72AF]" />
                  <span>{exp.period}</span>
                  <span className="text-[#3F72AF] font-bold">({exp.duration})</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mb-6 space-y-3">
                <div className="text-xs mono uppercase tracking-wider text-[#112D4E]/50 dark:text-[#DBE2EF]/50 font-semibold mb-3">
                  KEY CONTRIBUTIONS & IMPACT
                </div>
                {exp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3F72AF] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#112D4E]/85 dark:text-[#DBE2EF]/90 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills applied */}
              <div className="pt-4 border-t border-[#DBE2EF]/70 dark:border-[#3F72AF]/20 flex flex-wrap items-center gap-2">
                <span className="mono text-xs text-[#112D4E]/50 dark:text-[#DBE2EF]/50 mr-2">
                  Skills:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs mono rounded bg-white/80 dark:bg-[#112D4E] text-[#112D4E]/80 dark:text-[#DBE2EF] border border-[#DBE2EF] dark:border-[#3F72AF]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
