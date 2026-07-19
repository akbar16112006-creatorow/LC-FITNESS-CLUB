import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, selectedPlanName }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Weight Loss');
  const [chosenPlan, setChosenPlan] = useState('General Inquiry');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setGoal('Weight Loss');
      setChosenPlan(selectedPlanName || 'General Inquiry');
    }
  }, [isOpen, selectedPlanName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Build the WhatsApp message
    const message = `Hi LC Fitness Club, I want to enroll! Here are my inquiry details:
- *Name:* ${name}
- *Phone:* ${phone}
- *Fitness Goal:* ${goal}
- *Selected Plan:* ${chosenPlan}`;

    // Construct WhatsApp link
    const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const goals = [
    'Weight Loss',
    'Muscle Gain',
    'Personal Training',
    'Zumba & Yoga',
    'General Fitness'
  ];

  const plans = [
    'General Inquiry',
    'Free Trial Pass',
    '1 Month Membership (₹1,500)',
    '3 Months Membership (₹3,500)',
    '6 Months Membership (₹5,500)',
    '1 Year Membership (₹8,500)',
    'All-Inclusive Monthly (₹1,499*)',
    'All-Inclusive 3 Months (₹3,999)',
    'All-Inclusive 6 Months (₹6,999)',
    'All-Inclusive 1 Year (₹11,999)',
    'PT 1 Month: 12 Sessions (₹6,000)',
    'PT 1 Month: 16 Sessions (₹8,000)',
    'PT 1 Month: 20 Sessions (₹9,000)',
    'PT 1 Month: 24 Sessions (₹10,000)',
    'PT 3 Months (₹15,000)',
    'PT 6 Months (₹30,000)',
    'PT 1 Year (₹55,000)'
  ];

  // Dynamic list containing the selected plan even if passed externally
  const allPlans = plans.includes(chosenPlan) ? plans : [...plans, chosenPlan];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md p-4 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#EFECE6] text-[#1E1E1A] p-6 sm:p-8 rounded-[28px] border border-[#787866]/30 max-w-md w-full shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-[#1E1E1A] hover:bg-[#F0FF00] transition-colors border border-black/10 shadow-xs"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3.5">
                <CheckCircle2 className="w-14 h-14 text-[#4A5300] mx-auto animate-bounce" />
                <h3 className="font-headline text-3xl text-[#1E1E1A] uppercase">Opening WhatsApp</h3>
                <p className="text-xs text-[#787866] font-body leading-relaxed max-w-xs mx-auto">
                  Redirecting your inquiry for <span className="font-bold text-[#1E1E1A]">{name}</span> directly to our gym coordinators...
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FF00] text-[#1E1E1A] text-xs font-body font-bold uppercase tracking-widest mb-3 border border-black/10 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#4A5300]" />
                  <span>Interactive Enrollment</span>
                </div>

                <h3 className="font-headline text-2xl text-[#1E1E1A] uppercase tracking-wide">
                  Join L C Fitness Club
                </h3>
                <p className="text-xs text-[#787866] font-body mt-1">
                  Complete the short details below to proceed directly via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  {/* Name input */}
                  <div>
                    <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#787866]/30 text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-none focus:border-[#4A5300] text-xs sm:text-sm font-body"
                    />
                  </div>

                  {/* Phone input */}
                  <div>
                    <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#787866]/30 text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-none focus:border-[#4A5300] text-xs sm:text-sm font-body"
                    />
                  </div>

                  {/* Fitness Goal (What you want) */}
                  <div>
                    <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                      What is your fitness goal? *
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#787866]/30 text-[#1E1E1A] focus:outline-none focus:border-[#4A5300] text-xs sm:text-sm font-body cursor-pointer"
                    >
                      {goals.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Plan chosen */}
                  <div>
                    <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                      Which plan have you chosen? *
                    </label>
                    <select
                      value={chosenPlan}
                      onChange={(e) => setChosenPlan(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#787866]/30 text-[#1E1E1A] focus:outline-none focus:border-[#4A5300] text-xs sm:text-sm font-body cursor-pointer"
                    >
                      {allPlans.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-lime w-full py-3.5 text-xs sm:text-sm font-body font-bold flex items-center justify-center gap-2 rounded-xl mt-2 hover:scale-[1.01] transition-transform"
                  >
                    <MessageSquare className="w-4 h-4 text-[#1E1E1A]" />
                    <span>SEND ENROLLMENT VIA WHATSAPP</span>
                  </button>
                </form>

                <p className="text-[9px] text-[#787866] text-center font-body mt-4 leading-normal">
                  Clicking submit constructs a personalized message and redirects you to LC Fitness Club on WhatsApp to finalize your enrollment.
                  <br />
                  <span className="font-semibold text-[#4A5300]">*Notice: All packages are strictly non-refundable, non-transferable, non-negotiable, and have no extensions.*</span>
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
