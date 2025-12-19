
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="01. About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 leading-relaxed">
        <div>
          <p className="mb-6">
            I approach engineering from a <span className="text-zinc-200 font-medium">first-principles</span> perspective. Whether it's debugging a kernel module or architecting a distributed web application, I start by asking how the underlying machine handles the task.
          </p>
          <p className="mb-6">
            My journey began with a curiosity for how software interacts with physical hardware. This led me to study Computer Engineering, where I bridge the gap between abstract algorithms and real-world silicon.
          </p>
          <p>
            I believe the best engineers are interdisciplinary thinkers who can navigate the entire stack, from memory registers to modern browser environments.
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
