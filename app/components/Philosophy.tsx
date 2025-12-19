
import React from 'react';
import Section from './Section';
import { PHILOSOPHY } from '../Utils/constants';

const Philosophy: React.FC = () => {
  return (
    <Section id="philosophy" title="04. Engineering Philosophy">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PHILOSOPHY.map((item) => (
          <div key={item.title} className="p-8 border border-zinc-800 bg-zinc-950/50 flex flex-col h-full">
            <h3 className="text-xl font-bold text-zinc-100 mb-4">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm flex-grow">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 p-8 border-l-2 border-cyan-500 bg-zinc-900/30">
        <p className="text-zinc-300 italic font-light text-lg">
          "The most powerful tool in an engineer's arsenal is not a specific language or framework, but the ability to learn deeply and build with precision."
        </p>
      </div>
    </Section>
  );
};

export default Philosophy;
