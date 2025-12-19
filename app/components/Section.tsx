
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 border-t border-zinc-800 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="mono text-zinc-500 text-sm mb-12 uppercase tracking-widest flex items-center">
          <span className="w-8 h-[1px] bg-zinc-700 mr-4"></span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
