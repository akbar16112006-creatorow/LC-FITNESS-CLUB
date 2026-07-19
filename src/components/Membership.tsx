import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, ALL_INCLUSIVE_PLANS, type MembershipPlan } from '../data/gymData';

interface MembershipProps {
  onOpenInquiry: (planName?: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'gym'>('gym');

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1] as const,
        duration: 0.7
      }
    }
  };

  const currentPlans = activeTab === 'all' ? ALL_INCLUSIVE_PLANS : MEMBERSHIP_PLANS;

  return (
    <section id="membership" className="py-24 bg-[#EFECE6] relative overflow-hidden">
      
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop"
          alt="LC Fitness Membership Background"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      {/* Soft gradient background to make cards stand out */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#EFECE6] via-[#F0FF00]/5 to-[#EFECE6] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#1E1E1A] px-3.5 py-1.5 bg-[#F0FF00] rounded-full inline-block mb-3 border border-black/10">
            Affordable & Premium Pass
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A]">
            Gym Membership Packages
          </h2>
          <p className="text-[#787866] text-base mt-3 font-body">
            Transparent pricing with no hidden charges. Select your membership duration and start your transformation today.
          </p>
        </div>

        {/* Plan Type Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#E5E2DA] p-1.5 rounded-2xl grid grid-cols-2 gap-1.5 border border-black/5 w-full max-w-2xl">
            <button
              onClick={() => setActiveTab('gym')}
              className={`px-2 sm:px-5 py-3 rounded-xl text-[10px] sm:text-xs font-body font-extrabold transition-all flex items-center justify-center text-center tracking-wide uppercase ${
                activeTab === 'gym'
                  ? 'bg-[#4A5300] text-white shadow-md'
                  : 'text-[#787866] hover:bg-[#EFECE6]/75'
              }`}
            >
              <span>GYM & CARDIO ONLY</span>
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2 sm:px-5 py-3 rounded-xl text-[10px] sm:text-xs font-body font-extrabold transition-all flex items-center justify-center text-center tracking-wide uppercase gap-1.5 ${
                activeTab === 'all'
                  ? 'bg-[#4A5300] text-white shadow-md'
                  : 'text-[#787866] hover:bg-[#EFECE6]/75'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0 hidden sm:inline-block text-[#F0FF00]" />
              <span>ALL PACKAGES <span className="hidden md:inline">(GYM + ZUMBA + YOGA + ABS)</span></span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <motion.div 
          key={activeTab} // triggers re-animation when switching tabs
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12"
        >
          {currentPlans.map((plan: MembershipPlan) => {
            const isPopular = plan.isPopular;
            const isBestValue = plan.isBestValue;

            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                className={`sand-card sand-card-hover relative flex flex-col justify-between p-7 ${
                  isPopular
                    ? 'border-2 border-[#4A5300] bg-[#E5E2DA] scale-105'
                    : isBestValue
                    ? 'border-2 border-[#00E5FF] bg-[#D7FAFF]/40'
                    : 'bg-[#E5E2DA]'
                }`}
              >
                {/* Ribbon */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#F0FF00] text-[#1E1E1A] text-xs font-body font-bold tracking-wider uppercase shadow-xs border border-black/10 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1E1E1A]" />
                    <span>Most Popular</span>
                  </div>
                )}

                {isBestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#00E5FF] text-[#1E1E1A] text-xs font-body font-bold tracking-wider uppercase shadow-xs border border-black/10">
                    Best Value Pass
                  </div>
                )}

                <div>
                  {/* Name & Duration */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-headline text-3xl text-[#1E1E1A]">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-body font-bold px-3 py-1 rounded-full bg-[#D7FAFF] text-[#1E1E1A]">
                      {plan.durationLabel}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="my-4 pb-6 border-b border-[#787866]/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-[#787866]">₹</span>
                      <span className="font-headline text-5xl text-[#1E1E1A] tracking-wide">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    {plan.monthlyBreakdown && (
                      <p className="text-xs font-body font-bold text-[#4A5300] mt-1.5">
                        ({plan.monthlyBreakdown})
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body">
                        <div className="w-5 h-5 rounded-full bg-[#4A5300] text-white p-0.5 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-[#1E1E1A] font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => {
                      const modeLabel = activeTab === 'all' ? 'All Packages (Gym+Zumba+Yoga+ABS)' : 'Gym & Cardio';
                      onOpenInquiry(`${modeLabel}: ${plan.name} (₹${plan.price})`);
                    }}
                    className={`w-full py-3.5 text-xs sm:text-sm font-body font-bold flex items-center justify-center gap-2 ${
                      isPopular ? 'btn-primary-lime' : isBestValue ? 'btn-secondary-cyan' : 'btn-primary-olive'
                    }`}
                  >
                    <span>JOIN NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Policy Alert Banner */}
        <div className="sand-card p-6 sm:p-8 max-w-3xl mx-auto border border-[#787866]/30 shadow-md">
          <div className="flex items-center gap-3.5 mb-4 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#F0FF00]/30 text-[#4A5300] flex items-center justify-center border border-black/5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h4 className="font-headline text-2xl text-[#1E1E1A] uppercase tracking-wide">
              Important Club Information & Policies
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A5300] shrink-0 mt-2" />
              <p className="text-xs sm:text-sm text-[#787866] font-body font-semibold">
                <span className="text-[#1E1E1A]">Non-Refundable:</span> For any reason, the paid membership amount is strictly non-refundable.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A5300] shrink-0 mt-2" />
              <p className="text-xs sm:text-sm text-[#787866] font-body font-semibold">
                <span className="text-[#1E1E1A]">No Extensions:</span> Packages will expire on their exact duration date; no extension is provided.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A5300] shrink-0 mt-2" />
              <p className="text-xs sm:text-sm text-[#787866] font-body font-semibold">
                <span className="text-[#1E1E1A]">Non-Transferable:</span> Membership packages are strictly non-transferable to other persons.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A5300] shrink-0 mt-2" />
              <p className="text-xs sm:text-sm text-[#787866] font-body font-semibold">
                <span className="text-[#1E1E1A]">Non-Negotiable:</span> All packages are non-negotiable (no discounts, fixed standard pricing).
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
