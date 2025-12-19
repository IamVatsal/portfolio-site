
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="01. About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 leading-relaxed">
        {/* <span className="text-zinc-200 font-medium"> */}
        <div>
          <p className='mb-6'>I'm a <span className="text-zinc-200 font-medium">Computer Engineering</span> student who enjoys understanding how systems work beneath the abstractions.</p>
          <p className="mb-6">
            I like building things from <span className="text-zinc-200 font-medium">scratch</span>. not because frameworks are bad, but because reimplementing core ideas exposes trade-offs, edge cases, and constraints that are easy to miss otherwise. That approach has shaped how I learn everything from <span className="text-zinc-200 font-medium">neural networks and backend services</span> to <span className="text-zinc-200 font-medium">games and embedded systems</span>.
          </p>
          <p className="mb-6">
            I'm comfortable working across the stack, but I'm especially interested in <span className="text-zinc-200 font-medium">core CS concepts, system behavior, and real-world constraints</span>—performance, timing, memory, and reliability. Projects that combine logic with physical or runtime limitations (like robotics, real-time games, or low-level AI implementations) tend to teach me the most.
          </p>
          <p>
            I value clarity over buzzwords, and depth over breadth. My goal is to <span className="text-zinc-200 font-medium">keep improving my fundamentals</span> while building practical systems that behave predictably and are easy to reason about
          </p>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded">
            <h3 className="mono text-zinc-100 mb-3 text-sm uppercase">Currently Focused On</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">▹</span>
                Building verifiable RAG systems for industrial intelligence.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">▹</span>
                Optimizing low-level drivers for robotics hardware.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">▹</span>
                Deepening knowledge in Operating System design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
