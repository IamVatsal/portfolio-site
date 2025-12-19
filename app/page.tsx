"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="selection:bg-cyan-500/30">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'backdrop-blur-sm border-b rounded-2xl border-zinc-800 mx-[10%] mt-2' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="mono font-bold text-lg text-zinc-100 tracking-tighter">
            VATSAL<span className="text-cyan-500">_</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {['About', 'Skills', 'Projects', 'Philosophy', 'Contact'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="mono text-[11px] uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="bg-zinc-950 text-zinc-100">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Philosophy />
        <Footer />
      </main>

      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/5 blur-[100px] rounded-full"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </div>
  );
}
