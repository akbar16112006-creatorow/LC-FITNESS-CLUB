import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/gymData';

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#EFECE6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#1E1E1A] px-3.5 py-1.5 bg-[#F0FF00] rounded-full inline-block mb-3 border border-black/10">
            Got Questions?
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#787866] text-base mt-3 font-body">
            Everything you need to know before joining L C Fitness Club in Keshavnagar.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="sand-card overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline text-2xl text-[#1E1E1A] hover:text-[#4A5300] transition-colors"
                >
                  <span className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-2xl bg-[#D7FAFF] text-[#4A5300] flex items-center justify-center shrink-0 border border-[#00E5FF]/40">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#787866] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#4A5300]' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-[#787866] leading-relaxed font-body border-t border-[#787866]/20 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
