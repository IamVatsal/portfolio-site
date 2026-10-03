import React from 'react';
import { USER_INFO } from '../Utils/constants';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Vertical Indicator Gutter (Matches Photo) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center pt-2">
            <span className="mono text-xs font-semibold text-[#112D4E]/40 dark:text-[#DBE2EF]/40 tracking-wider">
              01
            </span>
            <div className="w-[1px] h-16 bg-[#DBE2EF] dark:bg-[#3F72AF]/30 my-4" />
            <span 
              className="mono text-[10px] tracking-widest text-[#112D4E]/40 dark:text-[#DBE2EF]/40 uppercase whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              BUILD / EXPLAIN / REPEAT
            </span>
          </div>

          {/* Center Main Content (Col 1-8 / Col 2-8 on desktop) */}
          <div className="lg:col-span-7">
            {/* Status indicator tag */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs mono text-[#112D4E]/80 dark:text-[#DBE2EF]/90">
              <span className="w-2 h-2 rounded-full bg-[#3F72AF] animate-pulse" />
              <span>{USER_INFO.role} — {USER_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] leading-[1.08] mb-8">
              <span>{USER_INFO.headlineLine1}</span>
              <br />
              <span className="inline-flex items-center">
                <span>{USER_INFO.headlineLine2}</span>
                <span className="inline-block w-3 md:w-4 h-9 md:h-12 bg-[#3F72AF] ml-1.5 blinking-cursor translate-y-1" />
              </span>
            </h1>

            {/* Bio description */}
            <p className="text-base sm:text-lg text-[#112D4E]/80 dark:text-[#DBE2EF]/90 max-w-xl leading-relaxed mb-10 font-normal">
              {USER_INFO.bio}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#112D4E] text-white dark:bg-[#3F72AF] dark:text-white text-xs mono font-medium hover:bg-[#3F72AF] dark:hover:bg-[#DBE2EF] dark:hover:text-[#112D4E] transition-all duration-200 shadow-sm group"
              >
                <span>See the work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={USER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs mono text-[#112D4E] dark:text-[#F9F7F7] hover:text-[#3F72AF] dark:hover:text-[#DBE2EF] underline decoration-[#DBE2EF] dark:decoration-[#3F72AF]/40 underline-offset-8 transition-colors"
              >
                <span>GitHub / IamVatsal</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3F72AF]" />
              </a>
            </div>
          </div>

          {/* Right Signal Card Widget (Matches Photo) */}
          <div className="lg:col-span-4 lg:pt-4">
            <div className="rounded-xl border border-[#DBE2EF] dark:border-[#3F72AF]/30 bg-white/70 dark:bg-[#112D4E]/50 backdrop-blur-sm p-6 shadow-sm">
              <div className="text-[10px] mono uppercase tracking-widest text-[#112D4E]/50 dark:text-[#DBE2EF]/50 mb-2">
                CURRENT SIGNAL
              </div>
              <div className="text-xl font-bold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-1">
                {USER_INFO.signalFocus}
              </div>
              <div className="text-xs text-[#3F72AF] dark:text-[#DBE2EF] font-medium mono mb-6">
                {USER_INFO.signalAvailability}
              </div>

              <div className="pt-4 border-t border-[#DBE2EF]/70 dark:border-[#3F72AF]/20">
                <div className="text-[10px] mono uppercase tracking-widest text-[#112D4E]/50 dark:text-[#DBE2EF]/50 mb-3">
                  TOOLS I REACH FOR
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {USER_INFO.quickTools.map((tool) => (
                    <span
                      key={tool.label}
                      title={tool.full}
                      className="px-2.5 py-1 text-xs mono rounded border border-[#DBE2EF] dark:border-[#3F72AF]/30 bg-[#F9F7F7] dark:bg-[#112D4E] text-[#112D4E] dark:text-[#DBE2EF] hover:border-[#3F72AF] hover:text-[#3F72AF] transition-colors cursor-default"
                    >
                      {tool.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
