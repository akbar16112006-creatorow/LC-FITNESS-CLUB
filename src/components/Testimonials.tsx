import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/gymData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#EFECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#1E1E1A] px-3.5 py-1.5 bg-[#F0FF00] rounded-full inline-block mb-3 border border-black/10">
            Real Stories, Real Results
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A]">
            What Our Members Say
          </h2>
        </div>

        {/* Carousel Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7, delay: 0.15 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="overflow-hidden p-2">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="sand-card p-8 sm:p-12 relative"
            >
              <Quote className="w-14 h-14 text-[#00E5FF]/30 absolute top-8 right-8" />

              <div className="flex items-center gap-1.5 text-[#4A5300] mb-6">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F0FF00] text-[#4A5300]" />
                ))}
              </div>

              <p className="text-base sm:text-xl text-[#1E1E1A] italic font-body leading-relaxed mb-8">
                "{REVIEWS[currentIndex].comment}"
              </p>

              <div className="flex items-center justify-between border-t border-[#787866]/20 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4A5300] text-white font-headline text-2xl flex items-center justify-center shadow-xs">
                    {REVIEWS[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-[#1E1E1A] flex items-center gap-1.5">
                      {REVIEWS[currentIndex].name}
                      <CheckCircle2 className="w-4 h-4 text-[#4A5300]" />
                    </h4>
                    <p className="text-xs text-[#4A5300] font-body font-bold">
                      {REVIEWS[currentIndex].tag} • {REVIEWS[currentIndex].date}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3.5 py-1 rounded-full bg-[#D7FAFF] text-[#1E1E1A] text-xs font-body font-bold border border-[#00E5FF]/30">
                  Google Verified
                </span>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#E5E2DA] border border-[#787866]/30 text-[#1E1E1A] hover:bg-[#F0FF00] shadow-xs transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#F0FF00]' : 'bg-[#787866]/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#E5E2DA] border border-[#787866]/30 text-[#1E1E1A] hover:bg-[#F0FF00] shadow-xs transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
