
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="01. About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 leading-relaxed">
        {/* <span className="text-zinc-200 font-medium"> */}
        <div>
          <p className='mb-6'>I'm Vatsal a <span className="text-zinc-200 font-medium">Computer Engineering</span> student who enjoys understanding how systems work beneath the abstractions.</p>
          <p className="mb-6">
            Many of my projects involve rebuilding core ideas rather than relying entirely on existing frameworks—whether that's implementing automatic differentiation for neural networks, writing real-time game loops, or integrating embedded hardware with backend services. I find that recreating these systems exposes trade-offs that are easy to miss when using high-level abstractions alone.
            {/* I like building things from <span className="text-zinc-200 font-medium">scratch</span>. not because frameworks are bad, but because reimplementing core ideas exposes trade-offs, edge cases, and constraints that are easy to miss otherwise. That approach has shaped how I learn everything from <span className="text-zinc-200 font-medium">neural networks and backend services</span> to <span className="text-zinc-200 font-medium">games and embedded systems</span>. */}
          </p>
          <p className="mb-6">
            While I'm comfortable building full-stack applications, I'm increasingly drawn toward systems programming, embedded software, AI infrastructure, and software that interacts closely with hardware or runtime constraints.
            {/* I'm comfortable working across the stack, but I'm especially interested in <span className="text-zinc-200 font-medium">core CS concepts, system behavior, and real-world constraints</span>—performance, timing, memory, and reliability. Projects that combine logic with physical or runtime limitations (like robotics, real-time games, or low-level AI implementations) tend to teach me the most. */}
          </p>
          <p>
            Right now I'm focused on strengthening my understanding of operating systems, networking, embedded software, and machine learning internals while continuing to build projects that expose how these systems behave under real-world constraints.
          </p>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded">
            <h3 className="mono text-zinc-100 mb-3 text-sm uppercase">Currently Exploring</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">▹</span>
                Operating systems and computer networking
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">▹</span>
                Full-Stack Devlopment
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">▹</span>
                Building ML systems from first principles
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3">▹</span>
                Real-time software
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
