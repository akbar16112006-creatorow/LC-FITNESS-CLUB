import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Plus } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface HeroProps {
  onOpenInquiry: (planName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-16 overflow-hidden bg-[#EFECE6]">

      {/* Background Gym Photo with Warm Grayscale Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop"
          alt="LC Fitness Gym Background"
          className="w-full h-full object-cover opacity-[0.22] filter grayscale contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#EFECE6]/85 to-[#EFECE6]" />
      </div>

      {/* Subtle Dot Grid Pattern in corner */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E1E1A 1px, transparent 0)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)'
        }}
      />

      {/* Ambient Glow Orbs (Lime Yellow & Bright Cyan) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-[#F0FF00]/25 via-[#D7FAFF]/40 to-[#00E5FF]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        {/* Top Centered Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#4A5300] text-white shadow-sm mb-8 border border-black/10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#F0FF00] animate-ping" />
          <span className="text-xs sm:text-sm font-body font-bold uppercase tracking-wider text-white">
            Keshavnagar & Mundhwa's #1 Fitness Destination
          </span>
        </motion.div>

        {/* Centered Headline: Anton Font (matching design spec) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline text-4xl sm:text-6xl lg:text-8xl xl:text-[105px] text-[#1E1E1A] tracking-wide leading-[0.92] uppercase max-w-5xl mx-auto mb-8 sm:mb-10"
        >
          TRANSFORM YOUR BODY.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A5300] via-[#787866] to-[#00E5FF]">
            TRAIN SMARTER.
          </span>{' '}
          STAY STRONG.
        </motion.h1>

        {/* Action Button Centered (Book Free Visit) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-6 max-w-xs mx-auto mb-8"
        >
          <button
            onClick={() => onOpenInquiry('Free Visit Pass')}
            className="btn-primary-lime w-full px-9 py-4.5 text-sm sm:text-base font-body font-bold flex items-center justify-center gap-2.5 shadow-md hover:scale-105 transition-transform"
          >
            <Calendar className="w-5 h-5 text-[#1E1E1A]" />
            <span>BOOK FREE VISIT</span>
          </button>
        </motion.div>

        {/* Floating Google Reviews Pill Badge (Normal 4.4/5 font & 500+ Reviews) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="inline-flex items-center gap-4 px-5 py-3 rounded-full bg-[#1C1C18] text-white shadow-xl border border-white/10"
        >
          {/* Overlapping Indian Member Avatars */}
          <div className="flex items-center -space-x-2.5">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Indian Member 1"
              className="w-8 h-8 rounded-full border-2 border-[#1C1C18] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Indian Member 2"
              className="w-8 h-8 rounded-full border-2 border-[#1C1C18] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Indian Member 3"
              className="w-8 h-8 rounded-full border-2 border-[#1C1C18] object-cover"
            />
            <div className="w-8 h-8 rounded-full border-2 border-[#1C1C18] bg-white text-[#1C1C18] flex items-center justify-center font-bold text-xs shadow-xs">
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* Rating in Normal Font and 500+ Reviews Subtext */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-body font-bold text-base tracking-normal text-white">{GYM_DETAILS.rating}/5</span>
              <div className="flex text-[#F5A623]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>
            </div>
            <span className="text-[11px] text-slate-300 font-body font-medium">Based on 500+ Reviews</span>
          </div>
        </motion.div>

        {/* Clean 2-Stat Trust Card (Happy Members + 40K+ Instagram Base) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sand-card p-6 sm:p-8 max-w-xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-6 text-center divide-x divide-[#787866]/20">

            {/* Stat 1: 500+ Happy Members */}
            <div className="p-2">
              <div className="font-headline text-4xl text-[#4A5300] mb-1">
                500+
              </div>
              <p className="text-xs font-body font-bold text-[#1E1E1A] uppercase tracking-wider">HAPPY MEMBERS</p>
              <p className="text-[11px] text-[#787866] font-body font-medium">In Keshavnagar & Mundhwa</p>
            </div>

            {/* Stat 2: 40K+ Instagram Base */}
            <div className="p-2">
              <div className="font-headline text-4xl text-[#00E5FF] mb-1">
                40K+
              </div>
              <p className="text-xs font-body font-bold text-[#1E1E1A] uppercase tracking-wider">INSTAGRAM BASE</p>
              <p className="text-[11px] text-[#787866] font-body font-medium">Active Social Community</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
