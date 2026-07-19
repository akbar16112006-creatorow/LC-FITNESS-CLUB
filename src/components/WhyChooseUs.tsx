import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, Dumbbell, Activity, Flame, TrendingUp,
  Music, Heart, Shield, UserCheck, Wind, Droplets,
  Sparkles, Users, Sparkle, Lock, Bath, Zap, Clock, CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US_CATEGORIES } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(WHY_CHOOSE_US_CATEGORIES[0].id);

  const getIcon = (name: string) => {
    const iconProps = { className: 'w-6 h-6 text-[#4A5300]' };
    switch (name) {
      case 'Award': return <Award {...iconProps} />;
      case 'Dumbbell': return <Dumbbell {...iconProps} />;
      case 'Activity': return <Activity {...iconProps} />;
      case 'Flame': return <Flame {...iconProps} />;
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      case 'Music': return <Music {...iconProps} />;
      case 'Heart': return <Heart {...iconProps} />;
      case 'Shield': return <Shield {...iconProps} />;
      case 'UserCheck': return <UserCheck {...iconProps} />;
      case 'Wind': return <Wind {...iconProps} />;
      case 'Droplets': return <Droplets {...iconProps} />;
      case 'Sparkles': return <Sparkles {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'Sparkle': return <Sparkle {...iconProps} />;
      case 'Lock': return <Lock {...iconProps} />;
      case 'Bath': return <Bath {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      default: return <CheckCircle2 {...iconProps} />;
    }
  };

  const selectedCategory = WHY_CHOOSE_US_CATEGORIES.find(c => c.id === activeTab) || WHY_CHOOSE_US_CATEGORIES[0];

  return (
    <section id="why-us" className="py-24 bg-[#EFECE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#1E1E1A]">
            Everything You Need To Build Your Best Self
          </h2>
          <p className="text-[#787866] text-base mt-3 font-body">
            We provide a complete, modern ecosystem — certified trainers, daily group batches, full AC comfort, and premium steam facilities.
          </p>
        </div>

        {/* 4 Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-4 mb-10">
          {WHY_CHOOSE_US_CATEGORIES.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-body font-bold tracking-wide transition-all duration-200 whitespace-nowrap shadow-xs ${isSelected
                    ? 'bg-[#F0FF00] text-[#1E1E1A] shadow-md scale-105 border border-black/10'
                    : 'bg-[#E5E2DA] text-[#1E1E1A] hover:bg-[#D7FAFF] border border-[#787866]/20'
                  }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Category Subtitle */}
        <div className="text-center mb-10">
          <p className="text-sm font-body font-medium text-[#787866] max-w-xl mx-auto italic">
            "{selectedCategory.description}"
          </p>
        </div>

        {/* Feature Cards Grid (Sand Cards with 24px Radius) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {selectedCategory.features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="sand-card sand-card-hover p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#D7FAFF] flex items-center justify-center mb-5 border border-[#00E5FF]/30">
                    {getIcon(feature.iconName)}
                  </div>
                  <h3 className="font-headline text-2xl text-[#1E1E1A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#787866] leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
