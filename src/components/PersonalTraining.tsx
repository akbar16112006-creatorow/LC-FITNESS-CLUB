import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, UserCheck, Flame, ShieldAlert, ArrowRight } from 'lucide-react';
import { PERSONAL_TRAINING_PLANS, type PersonalTrainingPlan } from '../data/gymData';

interface PersonalTrainingProps {
  onOpenInquiry: (planName?: string) => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onOpenInquiry }) => {
  const [oneMonthPtSessions, setOneMonthPtSessions] = useState<'12' | '16' | '20' | '24'>('12');

  const getPriceForOneMonth = (sessions: '12' | '16' | '20' | '24') => {
    switch (sessions) {
      case '12': return { price: '₹6,000', perSess: '₹500 / session' };
      case '16': return { price: '₹8,000', perSess: '₹500 / session' };
      case '20': return { price: '₹9,000', perSess: '₹450 / session' };
      case '24': return { price: '₹10,000', perSess: '₹416 / session' };
    }
  };

  const currentOneMonthDetails = getPriceForOneMonth(oneMonthPtSessions);

  return (
    <section id="personal-training" className="py-24 bg-[#EFECE6] relative overflow-hidden">
      
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop"
          alt="LC Fitness Personal Training Background"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      {/* Soft cyan-tinted gradient & faint diagonal stripes */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#EFECE6] via-[#00E5FF]/5 to-[#EFECE6] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(45deg, #1E1E1A, #1E1E1A 1px, transparent 1px, transparent 12px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D7FAFF] text-[#1E1E1A] border border-[#00E5FF]/40 text-xs font-body font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-[#4A5300]" />
            <span>VIP Transformation Tier</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A]">
            1-on-1 Personal Training Packages
          </h2>
          <p className="text-[#787866] text-base mt-3 font-body">
            Accelerate your transformation with dedicated, 1-on-1 coaching by certified master trainers. Customized workout blueprints and tailored nutrition charts.
          </p>

          {/* Urgency Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F0FF00] text-[#1E1E1A] text-xs font-body font-bold border border-black/10">
            <ShieldAlert className="w-4 h-4 text-[#4A5300]" />
            <span>Limited Trainer Slots Available — Secure Preferred Schedule Early</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {PERSONAL_TRAINING_PLANS.map((plan: PersonalTrainingPlan, idx: number) => {
            const isOneMonth = plan.id === 'pt-1m';
            const displayPrice = isOneMonth ? currentOneMonthDetails.price : plan.priceFormatted;
            const subLabel = isOneMonth ? currentOneMonthDetails.perSess : 'Dedicated 1-on-1 Master Trainer';

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="sand-card sand-card-hover p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-headline text-3xl text-[#1E1E1A]">
                      {plan.duration} PT
                    </span>
                    <div className="w-9 h-9 rounded-2xl bg-[#D7FAFF] text-[#4A5300] flex items-center justify-center border border-[#00E5FF]/30">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Dynamic Session Pill Selectors (Only for 1 Month Package) */}
                  {isOneMonth && (
                    <div className="mb-4">
                      <span className="block text-[9px] font-body font-extrabold text-[#787866] uppercase tracking-widest mb-1.5">
                        Select Session Count:
                      </span>
                      <div className="grid grid-cols-4 gap-1 bg-[#EFECE6]/60 p-0.5 rounded-lg border border-black/5">
                        {(['12', '16', '20', '24'] as const).map((sess) => (
                          <button
                            type="button"
                            key={sess}
                            onClick={() => setOneMonthPtSessions(sess)}
                            className={`py-1 rounded-md text-[10px] font-bold transition-all ${
                              oneMonthPtSessions === sess
                                ? 'bg-[#F0FF00] text-[#1E1E1A] shadow-xs'
                                : 'text-[#787866] hover:bg-white/50'
                            }`}
                          >
                            {sess}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="my-4 pb-6 border-b border-[#787866]/20">
                    <div className="font-headline text-4xl text-[#4A5300]">
                      {displayPrice}
                    </div>
                    <p className="text-xs text-[#787866] font-body mt-1">{subLabel}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#1E1E1A] font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#4A5300] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => {
                      if (isOneMonth) {
                        onOpenInquiry(`PT 1 Month: ${oneMonthPtSessions} Sessions (${displayPrice})`);
                      } else {
                        onOpenInquiry(`PT ${plan.duration} (${plan.priceFormatted})`);
                      }
                    }}
                    className="btn-primary-olive w-full py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2"
                  >
                    <span>BOOK PERSONAL TRAINING</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 VIP Feature Highlights */}
        <div className="sand-card p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-2">
            <Flame className="w-6 h-6 text-[#4A5300] mx-auto mb-1.5" />
            <h4 className="font-headline text-lg sm:text-xl text-[#1E1E1A]">Customized Diet Plan</h4>
            <p className="text-[11px] text-[#787866] font-body mt-1">Tailored macro and calorie charting aligned with your weight loss or muscle gain goals.</p>
          </div>
          <div className="p-2">
            <UserCheck className="w-6 h-6 text-[#00E5FF] mx-auto mb-1.5" />
            <h4 className="font-headline text-lg sm:text-xl text-[#1E1E1A]">Posture Correction</h4>
            <p className="text-[11px] text-[#787866] font-body mt-1">Certified guidance on lifting biomechanics to prevent injuries and optimize gains.</p>
          </div>
          <div className="p-2">
            <Award className="w-6 h-6 text-[#4A5300] mx-auto mb-1.5" />
            <h4 className="font-headline text-lg sm:text-xl text-[#1E1E1A]">Guaranteed Results</h4>
            <p className="text-[11px] text-[#787866] font-body mt-1">Weekly body composition scans and progress photo tracking to hold you accountable.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
