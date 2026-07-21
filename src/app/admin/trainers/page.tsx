'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function TrainersSettings() {
  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-body font-bold uppercase tracking-widest text-[#787866] flex items-center gap-1.5 mb-1.5">
          <Sparkles className="w-4 h-4 text-[#4A5300]" />
          <span>Coaches List</span>
        </span>
        <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
          Trainers Configuration
        </h2>
      </div>

      <div className="bg-[#E5E2DA] border border-[#787866]/20 p-8 rounded-[32px] text-center py-20 space-y-3">
        <h3 className="font-headline text-2xl text-[#1E1E1A] uppercase">Active Profiles</h3>
        <p className="text-xs text-[#787866] max-w-md mx-auto leading-relaxed">
          Certified coach Anand Jankar and the L C Fitness personal training support team details are currently managed via the main dynamic layout.
        </p>
      </div>
    </div>
  );
}
