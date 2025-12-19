
import React from 'react';
import Section from './Section';
import { SKILLS } from '../Utils/constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="02. Core Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((group) => (
          <div key={group.category} className="space-y-4">
            <h3 className="mono text-cyan-500 text-xs uppercase tracking-widest">{group.category}</h3>
            <ul className="space-y-2">
              {group.skills.map(skill => (
                <li key={skill} className="text-zinc-300 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
