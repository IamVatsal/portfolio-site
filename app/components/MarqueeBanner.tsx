import React from 'react';
import { MARQUEE_ITEMS } from '../Utils/constants';

const MarqueeBanner: React.FC = () => {
  // Repeating items for continuous infinite scroll
  const marqueeList = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-[#112D4E] text-[#DBE2EF] py-3.5 overflow-hidden border-y border-[#112D4E] select-none">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {marqueeList.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3F72AF]" />
            <span className="mono text-xs font-semibold tracking-widest uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
