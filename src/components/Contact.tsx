import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { getImageKitUrl } from '../utils/imagekit';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Weight Loss',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goals = ['Weight Loss', 'Muscle Gain', 'Personal Training', 'Yoga & Zumba', 'Ladies Batch', 'General Fitness'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Build the WhatsApp inquiry message with all details including user's custom message
    const msg = `Hi LC Fitness Club, I have a membership inquiry:
- *Name:* ${formData.name}
- *Phone:* ${formData.phone}
- *Email:* ${formData.email || 'Not Provided'}
- *Goal:* ${formData.goal}
- *Message:* ${formData.message || 'None'}`;

    const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', goal: 'Weight Loss', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#EFECE6] relative overflow-hidden select-none">
      
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={getImageKitUrl('backgrounds/contact-bg.webp', 'hero')}
          alt="LC Fitness Gym Contact Background"
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      {/* Soft gradient & dot grid background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#EFECE6] via-[#D7FAFF]/5 to-[#EFECE6] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E1E1A 1.2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FF00] text-[#1E1E1A] text-xs font-body font-bold uppercase tracking-widest mb-3 border border-black/10 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#4A5300]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A] tracking-tight leading-tight">
            Contact L C Fitness Club
          </h2>
          <p className="text-[#787866] text-sm sm:text-base mt-2 font-body max-w-xl mx-auto">
            Have questions or want to visit our boutique gym in Keshavnagar? Connect with our expert team today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inquiry Form: Displayed first on mobile, spans 7 columns on desktop */}
          <div className="order-1 lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 border border-[#787866]/20 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-headline text-2xl sm:text-3xl text-[#1E1E1A]">
                Send Membership Inquiry
              </h3>
              <span className="text-[9px] font-body font-bold uppercase tracking-widest text-[#787866] px-2.5 py-0.5 bg-[#EFECE6] rounded-full border border-black/5">
                FREE TRIAL PASS
              </span>
            </div>
            <p className="text-xs text-[#787866] font-body mb-6">
              Fill in your details below and our team will get back to you within 2 hours.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#D7FAFF] border border-[#00E5FF]/40 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-[#4A5300] mx-auto animate-bounce" />
                <h4 className="font-headline text-2xl text-[#1E1E1A]">Inquiry Received!</h4>
                <p className="text-xs text-[#787866] font-body font-medium max-w-md mx-auto">
                  Thank you! Team L C Fitness Club Keshavnagar will contact you back shortly to confirm your visit.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EFECE6]/50 border border-[#787866]/20 text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-none focus:border-[#4A5300] focus:bg-white transition-all text-xs sm:text-sm font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EFECE6]/50 border border-[#787866]/20 text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-none focus:border-[#4A5300] focus:bg-white transition-all text-xs sm:text-sm font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EFECE6]/50 border border-[#787866]/20 text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-none focus:border-[#4A5300] focus:bg-white transition-all text-xs sm:text-sm font-body"
                  />
                </div>

                {/* Chips */}
                <div>
                  <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-2">
                    Primary Fitness Goal
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {goals.map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setFormData({ ...formData, goal: g })}
                        className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-body font-bold transition-all border ${
                          formData.goal === g
                            ? 'bg-[#F0FF00] text-[#1E1E1A] border-black/10 shadow-xs'
                            : 'bg-[#EFECE6]/60 text-[#1E1E1A] border-transparent hover:bg-[#D7FAFF]'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-body font-bold text-[#1E1E1A] uppercase tracking-wider mb-1.5">
                    Message / Preferred Call Time
                  </label>
                  <textarea
                    rows={2.5}
                    placeholder="Tell us about your fitness goals or preferred time to visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EFECE6]/50 border border-[#787866]/20 text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-none focus:border-[#4A5300] focus:bg-white transition-all text-xs sm:text-sm font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-olive w-full py-3.5 text-xs sm:text-sm font-body font-bold flex items-center justify-center gap-2 rounded-xl shadow-md hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>SUBMIT INQUIRY</span>
                </button>

              </form>
            )}
          </div>
          
          {/* Contact Cards: Displayed second on mobile, spans 5 columns on desktop, formatted as a 2x2 grid */}
          <div className="order-2 lg:col-span-5 grid grid-cols-2 gap-3.5">
            
            {/* Phone Card */}
            <motion.a 
              href={`tel:${GYM_DETAILS.primaryPhone}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[20px] p-4 border border-[#787866]/20 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#4A5300]/30 transition-all col-span-1 cursor-pointer"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#D7FAFF] text-[#4A5300] flex items-center justify-center shrink-0 border border-[#00E5FF]/40 shadow-xs mb-2">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="font-body font-extrabold text-sm text-[#1E1E1A] uppercase tracking-wide">Call Directly</h4>
              </div>
              <div className="mt-2 space-y-0.5">
                <span className="text-[11px] sm:text-xs font-body font-extrabold text-[#1E1E1A] hover:text-[#4A5300] transition-colors block">
                  +91 {GYM_DETAILS.primaryPhone}
                </span>
                <p className="text-[9px] text-[#787866] font-body leading-tight">
                  Alt: 7040728758 / 8380900090
                </p>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a 
              href={`mailto:${GYM_DETAILS.email}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[20px] p-4 border border-[#787866]/20 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#4A5300]/30 transition-all col-span-1 cursor-pointer"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#F0FF00] text-[#1E1E1A] flex items-center justify-center shrink-0 border border-black/10 shadow-xs mb-2">
                  <Mail className="w-4 h-4" />
                </div>
                <h4 className="font-body font-extrabold text-sm text-[#1E1E1A] uppercase tracking-wide">Email Inquiry</h4>
              </div>
              <div className="mt-2">
                <span className="text-[11px] sm:text-xs font-body font-extrabold text-[#1E1E1A] hover:text-[#4A5300] transition-colors block truncate">
                  {GYM_DETAILS.email}
                </span>
                <p className="text-[9px] text-[#787866] font-body mt-0.5">
                  24hr response time
                </p>
              </div>
            </motion.a>

            {/* Location & Address Card */}
            <motion.a 
              href="https://www.google.com/maps/search/?api=1&query=L+C+Fitness+Club+Keshavnagar+Mundhwa+Pune"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[20px] p-4 border border-[#787866]/20 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#4A5300]/30 transition-all col-span-1 cursor-pointer"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#E5E2DA] text-[#1E1E1A] flex items-center justify-center shrink-0 border border-[#787866]/30 shadow-xs mb-2">
                  <MapPin className="w-4 h-4 text-[#4A5300]" />
                </div>
                <h4 className="font-body font-extrabold text-sm text-[#1E1E1A] uppercase tracking-wide">Address</h4>
              </div>
              <p className="text-[10px] text-[#1E1E1A] font-body leading-normal mt-2 line-clamp-2">
                {GYM_DETAILS.address}
              </p>
            </motion.a>

            {/* Hours Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[20px] p-4 border border-[#787866]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-all col-span-1"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#D7FAFF] text-[#1E1E1A] flex items-center justify-center shrink-0 border border-[#00E5FF]/40 shadow-xs mb-2">
                  <Clock className="w-4 h-4 text-[#4A5300]" />
                </div>
                <h4 className="font-body font-extrabold text-sm text-[#1E1E1A] uppercase tracking-wide">Hours</h4>
              </div>
              <div className="mt-2 space-y-0.5 text-[9px] sm:text-[10px] font-body text-[#1E1E1A] leading-tight">
                <p><span className="font-bold">M-S:</span> 5:30AM–10PM</p>
                <p><span className="font-bold">Sun:</span> 6AM–1PM</p>
              </div>
            </motion.div>

            {/* WhatsApp Quick Connect Card: Spans full width at bottom of grid */}
            <motion.a
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20LC%20Fitness%20Club,%20I%20want%20to%20inquire%20about%20membership`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="p-4 rounded-[20px] bg-white text-[#1E1E1A] shadow-sm flex items-center justify-between border border-[#787866]/20 group cursor-pointer col-span-2 hover:shadow-md hover:border-[#1E1E1A]/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-body font-extrabold text-sm text-[#1E1E1A] leading-none uppercase tracking-wide">WhatsApp Support</h4>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  </div>
                  <p className="text-[10px] text-[#787866] font-body mt-0.5">Instant response</p>
                </div>
              </div>
              <span className="text-[10px] font-body font-bold px-3 py-1.5 rounded-full bg-[#F0FF00] text-[#1E1E1A] group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-xs border border-black/5">
                Chat Now
              </span>
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
};
