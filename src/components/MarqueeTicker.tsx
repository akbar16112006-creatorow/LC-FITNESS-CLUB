import React from 'react';
import { Star } from 'lucide-react';

interface MarqueeTickerProps {
  bgColor?: string;
  textColor?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  bgColor = 'bg-[#F0FF00]',
  textColor = 'text-[#1E1E1A]'
}) => {
  const items = [
    'LIVE STRONG',
    'ELEVATE DAILY',
    'NO EXCUSES',
    'L C FITNESS CLUB',
    'KESHAVNAGAR PUNE',
    '500+ TRANSFORMATIONS',
    'PERSONAL TRAINING',
    'STEAM BATH',
    'ZUMBA & YOGA',
    'JOIN TODAY'
  ];

  return (
    <div className={`w-full overflow-hidden ${bgColor} ${textColor} py-3.5 border-y border-black/10 select-none shadow-xs`}>
      <div className="animate-marquee flex items-center whitespace-nowrap gap-8 font-headline text-xl sm:text-2xl tracking-wider uppercase">
        {/* Render twice for continuous infinite loop */}
        {[...items, ...items].map((text, index) => (
          <React.Fragment key={index}>
            <span className="flex items-center gap-8">
              <span>{text}</span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#4A5300] shrink-0" />
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
