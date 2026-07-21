'use client';

import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface LocalContentProps {
  location: string;
  title: string;
  description: string;
  nearbyAreas: string[];
}

export const LocalContent: React.FC<LocalContentProps> = ({
  location,
  title,
  description,
  nearbyAreas
}) => {
  return (
    <section className="py-20 bg-[#E5E2DA]/30 border-t border-[#787866]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Copywriting Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] font-body font-bold text-[#4A5300] px-3.5 py-1 bg-[#F0FF00] rounded-full uppercase tracking-wider border border-black/5">
              Local Guide • {location}
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1A] uppercase leading-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-[#787866] leading-relaxed font-body">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {nearbyAreas.map((area) => (
                <span key={area} className="px-3 py-1 bg-white text-xs font-body font-bold text-[#787866] rounded-full border border-[#787866]/20">
                  📍 {area}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-[28px] border border-[#787866]/20 shadow-md space-y-5">
            <h3 className="font-headline text-xl text-[#1E1E1A] uppercase">
              Location & Details
            </h3>
            
            <div className="space-y-4 text-xs font-body text-[#787866]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4A5300] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1E1E1A] uppercase text-[10px]">Gym Address</h4>
                  <p className="mt-1 leading-relaxed">{GYM_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4A5300] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1E1E1A] uppercase text-[10px]">Call Support</h4>
                  <p className="mt-1 font-bold text-[#1E1E1A]">+91 {GYM_DETAILS.primaryPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4A5300] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1E1E1A] uppercase text-[10px]">Opening Timings</h4>
                  <p className="mt-1 leading-normal">
                    Mon-Sat: {GYM_DETAILS.timings.weekday}<br />
                    Sunday: {GYM_DETAILS.timings.sunday}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20LC%20Fitness%20Club,%20I%20want%20to%20inquire%20about%20membership%20at%20${location}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-body font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with local support</span>
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#787866]/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A5300]" />
              <h4 className="font-headline text-lg uppercase text-[#1E1E1A]">Elite Coaches</h4>
            </div>
            <p className="text-xs text-[#787866] font-body leading-relaxed">
              Experience customized 1-on-1 personal training blueprints tailored for weight loss, bodybuilding, and fitness goals with Anand Jankar and the L C Fitness coaches.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A5300]" />
              <h4 className="font-headline text-lg uppercase text-[#1E1E1A]">Amenities</h4>
            </div>
            <p className="text-xs text-[#787866] font-body leading-relaxed">
              Enjoy premium facilities including a full climate-controlled A.C. floor, cardio functional CrossFit zone, washrooms, secure lockers, and luxury steam rooms.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A5300]" />
              <h4 className="font-headline text-lg uppercase text-[#1E1E1A]">Flexibility</h4>
            </div>
            <p className="text-xs text-[#787866] font-body leading-relaxed">
              We offer dedicated afternoon batches for general training and exclusive ladies-only batches with female certified personal trainers for privacy and comfort.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
