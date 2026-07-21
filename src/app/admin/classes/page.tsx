'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ClassesSettings() {
  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-body font-bold uppercase tracking-widest text-[#787866] flex items-center gap-1.5 mb-1.5">
          <Sparkles className="w-4 h-4 text-[#4A5300]" />
          <span>Calendar Events</span>
        </span>
        <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
          Class Schedule Coordinator
        </h2>
      </div>

      <div className="bg-[#E5E2DA] border border-[#787866]/20 p-8 rounded-[32px] text-center py-20 space-y-3">
        <h3 className="font-headline text-2xl text-[#1E1E1A] uppercase">Schedule Matrix Loaded</h3>
        <p className="text-xs text-[#787866] max-w-md mx-auto leading-relaxed">
          Daily active slots for Yoga, Zumba, ABS, and Cardio are currently synchronizing directly with client schedule visualizers.
        </p>
      </div>
    </div>
  );
}
