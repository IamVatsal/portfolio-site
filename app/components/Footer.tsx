import React from 'react';
import { USER_INFO } from '../Utils/constants';
import { Code2, ArrowUpRight, ArrowDown, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F9F7F7] dark:bg-[#0b1a2d] border-t border-[#DBE2EF] dark:border-[#3F72AF]/20 py-16 text-[#112D4E] dark:text-[#DBE2EF] transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Left Brand Col */}
          <div className="max-w-sm">
            <a 
              href="#top" 
              className="flex items-center gap-2 group text-base font-bold tracking-tight text-[#112D4E] dark:text-[#F9F7F7] mb-4"
            >
              <div className="w-7 h-7 rounded border border-[#3F72AF]/40 bg-[#DBE2EF]/30 dark:bg-[#112D4E] flex items-center justify-center text-[#3F72AF] group-hover:bg-[#3F72AF] group-hover:text-white transition-colors">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="mono tracking-tight text-sm font-semibold">
                {USER_INFO.brandName}
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#112D4E]/70 dark:text-[#DBE2EF]/70 leading-relaxed font-normal">
              Software engineer building close-to-the-metal software for curious people.
            </p>
          </div>

          {/* Right Navigation & Download Cols */}
          <div className="flex flex-wrap gap-12 sm:gap-20">
            {/* Elsewhere */}
            <div>
              <div className="text-[10px] mono uppercase tracking-widest text-[#112D4E]/40 dark:text-[#DBE2EF]/40 font-semibold mb-3">
                ELSEWHERE
              </div>
              <ul className="space-y-2 text-xs mono">
                <li>
                  <a
                    href={USER_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#112D4E]/80 dark:text-[#DBE2EF]/80 hover:text-[#3F72AF] dark:hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#3F72AF]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${USER_INFO.email}`}
                    className="inline-flex items-center gap-1 text-[#112D4E]/80 dark:text-[#DBE2EF]/80 hover:text-[#3F72AF] dark:hover:text-white transition-colors"
                  >
                    <span>Email</span>
                    <ArrowUpRight className="w-3 h-3 text-[#3F72AF]" />
                  </a>
                </li>
                <li>
                  <a
                    href={USER_INFO.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#112D4E]/80 dark:text-[#DBE2EF]/80 hover:text-[#3F72AF] dark:hover:text-white transition-colors"
                  >
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3 h-3 text-[#3F72AF]" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Download */}
            <div>
              <div className="text-[10px] mono uppercase tracking-widest text-[#112D4E]/40 dark:text-[#DBE2EF]/40 font-semibold mb-3">
                DOWNLOAD
              </div>
              <ul className="space-y-2 text-xs mono">
                <li>
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-1 text-[#112D4E]/80 dark:text-[#DBE2EF]/80 hover:text-[#3F72AF] dark:hover:text-white transition-colors text-left"
                  >
                    <span>Resume PDF</span>
                    <ArrowDown className="w-3 h-3 text-[#3F72AF]" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-1 text-[#112D4E]/80 dark:text-[#DBE2EF]/80 hover:text-[#3F72AF] dark:hover:text-white transition-colors text-left"
                  >
                    <span>Back to top</span>
                    <ArrowUp className="w-3 h-3 text-[#3F72AF]" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#DBE2EF] dark:border-[#3F72AF]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] mono text-[#112D4E]/50 dark:text-[#DBE2EF]/50">
          <div>
            © {new Date().getFullYear()} {USER_INFO.name.toUpperCase()}
          </div>
          <div className="flex items-center gap-2">
            <span>MADE WITH CURIOSITY</span>
            <span>/</span>
            <span>23.5901° N</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
