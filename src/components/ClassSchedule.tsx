import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Music, Heart, Shield, Droplets, Sparkles } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../data/gymData';
import { getImageKitUrl } from '../utils/imagekit';

export const ClassSchedule: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'zumba' | 'yoga' | 'abs' | 'steam'>('all');

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const filteredSchedule = WEEKLY_SCHEDULE.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'zumba') return item.type === 'zumba';
    if (filter === 'yoga') return item.type === 'yoga';
    if (filter === 'abs') return item.type === 'abs';
    if (filter === 'steam') return item.type.includes('steam');
    return true;
  });

  const getActivityBadge = (type: string, activity: string, time: string) => {
    switch (type) {
      case 'zumba':
        return (
          <div className="p-3.5 rounded-2xl bg-[#F0FF00]/30 border border-[#F0FF00] text-left hover:scale-105 transition-transform shadow-xs">
            <div className="flex items-center gap-1.5 text-[#4A5300] font-body font-bold text-xs mb-1">
              <Music className="w-3.5 h-3.5" />
              <span>Zumba Dance</span>
            </div>
            <p className="font-headline text-lg text-[#1E1E1A]">{activity}</p>
            <p className="text-[11px] text-[#787866] font-body font-medium flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3 text-[#787866]" />
              {time}
            </p>
          </div>
        );
      case 'abs':
        return (
          <div className="p-3.5 rounded-2xl bg-[#D7FAFF] border border-[#00E5FF]/40 text-left hover:scale-105 transition-transform shadow-xs">
            <div className="flex items-center gap-1.5 text-[#00E5FF] text-[#1E1E1A] font-body font-bold text-xs mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Core Conditioning</span>
            </div>
            <p className="font-headline text-lg text-[#1E1E1A]">{activity}</p>
            <p className="text-[11px] text-[#787866] font-body font-medium flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3 text-[#787866]" />
              {time}
            </p>
          </div>
        );
      case 'yoga':
        return (
          <div className="p-3.5 rounded-2xl bg-[#E5E2DA] border border-[#787866]/30 text-left hover:scale-105 transition-transform shadow-xs">
            <div className="flex items-center gap-1.5 text-[#4A5300] font-body font-bold text-xs mb-1">
              <Heart className="w-3.5 h-3.5" />
              <span>Yoga & Flexibility</span>
            </div>
            <p className="font-headline text-lg text-[#1E1E1A]">{activity}</p>
            <p className="text-[11px] text-[#787866] font-body font-medium flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3 text-[#787866]" />
              {time}
            </p>
          </div>
        );
      case 'steam-ladies':
        return (
          <div className="p-3.5 rounded-2xl bg-pink-100/60 border border-pink-300 text-left hover:scale-105 transition-transform shadow-xs">
            <div className="flex items-center gap-1.5 text-pink-700 font-body font-bold text-xs mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ladies Steam Day</span>
            </div>
            <p className="font-headline text-lg text-[#1E1E1A]">Therapeutic Steam</p>
            <p className="text-[11px] text-pink-700 font-body font-bold mt-1">Wednesday Full Day Pass</p>
          </div>
        );
      case 'steam-gents':
        return (
          <div className="p-3.5 rounded-2xl bg-[#D7FAFF] border border-[#00E5FF]/40 text-left hover:scale-105 transition-transform shadow-xs">
            <div className="flex items-center gap-1.5 text-[#00E5FF] text-[#1E1E1A] font-body font-bold text-xs mb-1">
              <Droplets className="w-3.5 h-3.5" />
              <span>Gents Steam Day</span>
            </div>
            <p className="font-headline text-lg text-[#1E1E1A]">Therapeutic Steam</p>
            <p className="text-[11px] text-[#4A5300] font-body font-bold mt-1">Sunday Morning Session</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="schedule" className="py-24 bg-[#EFECE6] relative overflow-hidden">
      
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={getImageKitUrl('backgrounds/classes-bg.webp', 'hero')}
          alt="LC Fitness Classes Background"
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      {/* Soft gradient background & faint diagonal stripes */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#EFECE6] via-[#F0FF00]/3 to-[#EFECE6] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(45deg, #1E1E1A, #1E1E1A 1px, transparent 1px, transparent 12px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#1E1E1A] px-3.5 py-1.5 bg-[#F0FF00] rounded-full inline-block mb-3 border border-black/10">
            Weekly Activity Matrix
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A]">
            Daily Activity Classes & Steam Schedule
          </h2>
          <p className="text-[#787866] text-base mt-3 font-body">
            Complimentary group fitness sessions for all members. Join Zumba, Yoga, or ABS batches to keep your workouts dynamic.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-body font-bold transition-all ${
              filter === 'all' ? 'bg-[#F0FF00] text-[#1E1E1A] shadow-xs border border-black/10' : 'bg-[#E5E2DA] text-[#1E1E1A] hover:bg-[#D7FAFF] border border-[#787866]/20'
            }`}
          >
            All Sessions
          </button>
          <button
            onClick={() => setFilter('zumba')}
            className={`px-5 py-2.5 rounded-full text-xs font-body font-bold transition-all ${
              filter === 'zumba' ? 'bg-[#F0FF00] text-[#1E1E1A] shadow-xs border border-black/10' : 'bg-[#E5E2DA] text-[#1E1E1A] hover:bg-[#D7FAFF] border border-[#787866]/20'
            }`}
          >
            Zumba
          </button>
          <button
            onClick={() => setFilter('yoga')}
            className={`px-5 py-2.5 rounded-full text-xs font-body font-bold transition-all ${
              filter === 'yoga' ? 'bg-[#4A5300] text-white shadow-xs' : 'bg-[#E5E2DA] text-[#1E1E1A] hover:bg-[#D7FAFF] border border-[#787866]/20'
            }`}
          >
            Yoga
          </button>
          <button
            onClick={() => setFilter('abs')}
            className={`px-5 py-2.5 rounded-full text-xs font-body font-bold transition-all ${
              filter === 'abs' ? 'bg-[#00E5FF] text-[#1E1E1A] shadow-xs' : 'bg-[#E5E2DA] text-[#1E1E1A] hover:bg-[#D7FAFF] border border-[#787866]/20'
            }`}
          >
            ABS Batch
          </button>
          <button
            onClick={() => setFilter('steam')}
            className={`px-5 py-2.5 rounded-full text-xs font-body font-bold transition-all ${
              filter === 'steam' ? 'bg-[#D7FAFF] text-[#1E1E1A] shadow-xs border border-[#00E5FF]/40' : 'bg-[#E5E2DA] text-[#1E1E1A] hover:bg-[#D7FAFF] border border-[#787866]/20'
            }`}
          >
            Steam Days
          </button>
        </div>

        {/* 7-Day Timetable Row: Scrollable horizontally on mobile, Grid on desktop */}
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:grid md:grid-cols-7 md:overflow-visible md:snap-none md:pb-0 no-scrollbar">
          {daysOfWeek.map((dayName) => {
            const dayItems = filteredSchedule.filter(item => item.day === dayName);

            return (
              <motion.div
                key={dayName}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sand-card p-4 flex flex-col justify-between min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center shrink-0"
              >
                <div className="pb-3 border-b border-[#787866]/20 text-center mb-3">
                  <span className="font-headline text-lg text-[#1E1E1A] uppercase tracking-wider">
                    {dayName}
                  </span>
                </div>

                <div className="space-y-3 min-h-[140px] flex flex-col justify-center">
                  {dayItems.length > 0 ? (
                    dayItems.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {getActivityBadge(item.type, item.activity, item.time)}
                      </React.Fragment>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-[#787866] font-body italic">
                      Regular Gym Workout Available
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#787866]/20 text-[10px] text-center text-[#787866] font-body font-bold uppercase tracking-wider mt-3">
                  Open Full Day
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Steam Days Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="sand-card p-4 sm:p-5 border-2 border-pink-300 bg-pink-50/50 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-body font-bold uppercase tracking-wider text-pink-700">
                Every Wednesday
              </span>
              <h4 className="font-headline text-lg sm:text-xl text-[#1E1E1A]">
                Ladies Steam Day
              </h4>
              <p className="text-[11px] text-[#787866] mt-0.5 font-body">
                Exclusive steam bath access for female members for detox and muscle relaxation.
              </p>
            </div>
          </div>

          <div className="sand-card p-4 sm:p-5 border-2 border-[#00E5FF]/40 bg-[#D7FAFF]/40 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#4A5300] text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-body font-bold uppercase tracking-wider text-[#4A5300]">
                Every Sunday Morning
              </span>
              <h4 className="font-headline text-lg sm:text-xl text-[#1E1E1A]">
                Gents Steam Day
              </h4>
              <p className="text-[11px] text-[#787866] mt-0.5 font-body">
                Post-workout steam recovery 
                 for male members during Sunday morning hours.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
