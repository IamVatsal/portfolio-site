
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-20 pb-32">
      <div className="mono text-cyan-500 mb-6 text-sm font-medium">Hello, I am</div>
      <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-zinc-100">
        Vatsal<span className="text-zinc-600">.</span>
      </h1>
      <p className="text-2xl md:text-3xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
        Computer Engineering student focused on building <span className="text-zinc-100">reliable systems</span> and <span className="text-zinc-100">intelligent software</span>.
      </p>
      <div className="flex flex-wrap gap-4">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded hover:bg-cyan-400 transition-colors duration-200"
        >
          View Technical Projects
        </a>
        <a 
          href="https://github.com/IamVatsal" 
          target="_blank"
          className="mono px-6 py-3 border border-zinc-700 text-zinc-300 hover:border-zinc-400 transition-colors duration-200"
        >
          github.iamvatsal
        </a>
      </div>
    </div>
  );
};

export default Hero;
