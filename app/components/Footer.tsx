
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-100 tracking-tight">Get in touch.</h2>
        <p className="text-zinc-400 max-w-lg mx-auto mb-12 leading-relaxed">
          I'm always open to conversations about system design, low-level details, or building things that are interesting.
        </p>
        
        <div className="flex justify-center gap-8 mb-16">
          <a href="mailto:vatsalpatel0609@gmail.com" className="mono text-zinc-300 hover:text-cyan-400 transition-colors">
            Email
          </a>
          <a href="https://github.com/IamVatsal" target="_blank" className="mono text-zinc-300 hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vatsal-patel0609/" target="_blank" className="mono text-zinc-300 hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
        </div>
        
        <div className="mono text-[10px] text-zinc-600 uppercase tracking-widest">
          Designed & Built by Vatsal &copy; {new Date().getFullYear()} / No Fluff. Pure Engineering.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
