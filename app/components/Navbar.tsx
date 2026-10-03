import React from 'react';
import { USER_INFO } from '../Utils/constants';
import { Code2, Moon, Sun, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
// import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode, onOpenResume, scrolled }) => { 
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled 
          ? darkMode 
            ? 'bg-[#112D4E]/90 border-[#3F72AF]/30 backdrop-blur-xs shadow-sm rounded-2xl mt-2 mx-auto sm:mx-[5%] md:mx-[5%] lg:mx-[8%] xl:mx-[20%]'
            : 'bg-[#F9F7F7]/90 border-[#DBE2EF] backdrop-blur-xs shadow-sm rounded-2xl mt-2 mx-auto sm:mx-[5%] md:mx-[5%] lg:mx-[8%] xl:mx-[20%]'
          : darkMode
            ? 'bg-transparent border-transparent'
            : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single Brand element */}
        <a 
          href="#top" 
          className="flex items-center gap-2 group text-base font-bold tracking-tight text-[#112D4E] dark:text-[#F9F7F7]"
        >
          <div className="w-7 h-7 rounded border border-[#3F72AF]/40 bg-[#DBE2EF]/30 dark:bg-[#112D4E] flex items-center justify-center text-[#3F72AF] group-hover:bg-[#3F72AF] group-hover:text-white transition-colors duration-200">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="mono tracking-tight text-sm font-semibold">
            {USER_INFO.brandName}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs mono uppercase tracking-wider text-[#112D4E]/70 dark:text-[#DBE2EF]/80">
          <a href="#work" className="hover:text-[#3F72AF] dark:hover:text-[#DBE2EF] transition-colors">
            work
          </a>
          <a href="#experience" className="hover:text-[#3F72AF] dark:hover:text-[#DBE2EF] transition-colors">
            experience
          </a>
          <a href="#skills" className="hover:text-[#3F72AF] dark:hover:text-[#DBE2EF] transition-colors">
            skills
          </a>
          <a href="#writing" className="hover:text-[#3F72AF] dark:hover:text-[#DBE2EF] transition-colors">
            writing
          </a>
          <a href="#contact" className="hover:text-[#3F72AF] dark:hover:text-[#DBE2EF] transition-colors">
            contact
          </a>
        </nav>

        {/* Zone 3: Actions (GitHub, Resume, Dark Mode) */}
        <div className="flex items-center gap-3">
          <a 
            href={USER_INFO.githubUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs mono px-3 py-1.5 rounded border border-[#DBE2EF] dark:border-[#3F72AF]/40 text-[#112D4E] dark:text-[#F9F7F7] hover:border-[#3F72AF] hover:text-[#3F72AF] transition-colors"
            title="View code on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#3F72AF]" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs mono px-3 py-1.5 rounded bg-[#3F72AF] text-white hover:bg-[#112D4E] transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded border border-[#DBE2EF] dark:border-[#3F72AF]/40 flex items-center justify-center text-[#112D4E] dark:text-[#DBE2EF] hover:bg-[#DBE2EF]/40 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#112D4E]" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
