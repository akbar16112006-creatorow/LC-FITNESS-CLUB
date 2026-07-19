import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, Clock, Sparkle, Flame, Award, 
  Wind, Users, UserCheck, Droplets, Calendar, Lock, Activity 
} from 'lucide-react';

export const Facilities: React.FC = () => {
  const amenities = [
    { icon: Dumbbell, title: "Gym Section / Cardio Section", desc: "Fully equipped premium strength training and endurance floor." },
    { icon: Clock, title: "Special At's Batches", desc: "Flexible afternoon batches designed to fit your unique schedule." },
    { icon: Sparkle, title: "Special Yoga Batches", desc: "Relaxing yoga sessions for strength, breathing, and flexibility." },
    { icon: Flame, title: "Special Fat Loss Dance", desc: "High-energy dance sessions (Zumba) to sweat out calories." },
    { icon: Award, title: "Certified / Experienced Trainers", desc: "Get professional, structured guidance from our elite coaches." },
    { icon: Wind, title: "Full A.C Gym Section", desc: "Work out comfortably on a clean, climate-controlled gym floor." },
    { icon: Users, title: "Special Ladies Batches", desc: "Exclusive comfortable slots designed specifically for female members." },
    { icon: UserCheck, title: "Personal Training", desc: "1-on-1 dedicated attention and custom diet blueprints." },
    { icon: Droplets, title: "Steam Bath / Spa Section", desc: "Recover and detox in our premium therapeutic steam rooms." },
    { icon: Calendar, title: "Open For Full Day", desc: "Train whenever you want from early morning to late night." },
    { icon: Lock, title: "Washroom / Locker Facility", desc: "Clean changing rooms, hot showers, and secure storage lockers." },
    { icon: Activity, title: "Cardio / CrossFit Training", desc: "High-intensity functional training area with battle ropes & tires." }
  ];

  return (
    <section id="facilities" className="py-24 bg-[#EFECE6] relative overflow-hidden">
      
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop"
          alt="LC Fitness Gym Background"
          className="w-full h-full object-cover opacity-[0.06] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#1E1E1A 1.2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient glow decorative orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#F0FF00]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#1E1E1A] px-3.5 py-1.5 bg-[#F0FF00] rounded-full inline-block mb-3 border border-black/10">
            Gym Facilities & Environment
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A] tracking-wide uppercase leading-tight">
            GYM FACILITIES & <span className="text-[#4A5300]">SERVICES</span>
          </h2>
          <p className="text-[#787866] text-base mt-3 font-body">
            Everything you need for a complete workout, recovery, and results-driven experience at LC Fitness.
          </p>
        </div>

        {/* 12 Amenities: Grid on Desktop/Tablet, Snapping Vertical Cards on Mobile */}
        <div className="max-w-6xl mx-auto px-1 sm:px-0">
          <div 
            className="flex flex-col gap-6 h-[300px] overflow-y-auto snap-y snap-mandatory no-scrollbar p-3 bg-[#E5E2DA]/40 rounded-[24px] border border-[#787866]/20 shadow-inner md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:h-auto md:overflow-visible md:snap-none md:p-0 md:bg-transparent md:border-none md:shadow-none md:flex-row"
          >
            {amenities.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="snap-start snap-always shrink-0 w-full min-h-[230px] md:min-h-0 md:h-auto flex flex-col justify-between md:justify-start p-5 md:p-6 bg-white md:bg-[#E5E2DA]/65 rounded-[20px] md:rounded-card border border-[#787866]/15 md:border-[#787866]/10 hover:border-[#1E1E1A]/20 hover:bg-white md:hover:bg-[#E5E2DA]/90 shadow-md md:shadow-none hover:shadow-xl md:hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon Wrapper with Pop Color */}
                    <div className="p-3 w-fit rounded-xl bg-[#EFECE6] text-[#4A5300] border border-black/5 shadow-xs group-hover:scale-110 group-hover:bg-[#F0FF00] group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 md:space-y-1">
                      <h4 className="font-body font-extrabold text-[#1E1E1A] text-lg md:text-[15px] lg:text-base tracking-wide uppercase leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#787866] font-body leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Brand Tagline at Bottom (Only visible on Mobile view to enhance premium app feel) */}
                  <div className="block md:hidden pt-3 border-t border-black/5 text-[9px] font-body font-bold tracking-widest text-[#787866] uppercase">
                    L C Fitness Club • Facility {idx + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
