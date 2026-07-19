import React from 'react';
import { motion } from 'framer-motion';
import { Award, Wind, Users, Star, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#EFECE6] relative overflow-hidden">
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop"
          alt="LC Fitness Gym About Background"
          className="w-full h-full object-cover opacity-[0.06] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E5E2DA] bg-white group h-[440px] sm:h-[520px]"
            >
              <img
                src="/gym-overview.png"
                alt="L C Fitness Club Keshavnagar Overview"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>

            {/* Overlapping Corner Image on Side */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-3 sm:-right-6 z-20 w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#EFECE6] bg-white group hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/unnamed.jpg"
                alt="L C Fitness Highlight"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D7FAFF] text-[#1E1E1A] text-xs font-body font-bold uppercase tracking-wider mb-4 border border-[#00E5FF]/40">
                <ShieldCheck className="w-4 h-4 text-[#4A5300]" />
                <span>About L C Fitness Club</span>
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl text-[#1E1E1A] leading-tight">
                Keshavnagar's Premier Fitness & Transformation Hub
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-[#787866] leading-relaxed font-body"
            >
              L C Fitness Club is Keshavnagar’s premier fitness destination equipped with advanced machinery, full AC, personal training, zumba, yoga, and steam recovery.
            </motion.p>

            {/* 4 Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
            >
              <div className="sand-card p-3.5 text-center">
                <Award className="w-5 h-5 text-[#4A5300] mx-auto mb-1" />
                <p className="font-body font-bold text-xs text-[#1E1E1A]">Certified Trainers</p>
              </div>
              <div className="sand-card p-3.5 text-center">
                <Wind className="w-5 h-5 text-[#00E5FF] mx-auto mb-1" />
                <p className="font-body font-bold text-xs text-[#1E1E1A]">Full A.C. Floor</p>
              </div>
              <div className="sand-card p-3.5 text-center">
                <Users className="w-5 h-5 text-[#27AE60] mx-auto mb-1" />
                <p className="font-body font-bold text-xs text-[#1E1E1A]">500+ Members</p>
              </div>
              <div className="sand-card p-3.5 text-center">
                <Star className="w-5 h-5 text-[#F0FF00] text-[#1E1E1A] mx-auto mb-1" />
                <p className="font-body font-bold text-xs text-[#1E1E1A]">4.4★ Rated</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      {/* Subtle soft-color blob behind the stats cards */}
      <div className="absolute -right-20 -bottom-20 w-[350px] h-[350px] bg-[#F0FF00]/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
};
