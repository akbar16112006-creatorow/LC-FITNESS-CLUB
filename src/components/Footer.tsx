import React from 'react';
import { Phone, Mail, MapPin, Star, ArrowUp } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E5E2DA] text-[#1E1E1A] pt-20 pb-24 lg:pb-12 border-t border-[#787866]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#787866]/20">

          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-[#787866]/30 shadow-xs bg-white flex items-center justify-center p-0.5">
                <img src="/logo.jpg" alt="L C Fitness Club Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl tracking-wide text-[#1E1E1A]">
                  L C <span className="text-[#4A5300]">FITNESS</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-body font-bold text-[#787866]">
                  KESHAVNAGAR • PUNE
                </span>
              </div>
            </a>

            <p className="text-xs text-[#787866] leading-relaxed max-w-sm font-body">
              "{GYM_DETAILS.tagline}" Premier boutique fitness center in Keshavnagar, Mundhwa offering strength training, cardio, yoga, zumba, personal training & steam bath facilities.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-[#787866]/20 text-xs shadow-xs">
              <div className="flex text-[#F0FF00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F0FF00] text-[#4A5300]" />
                ))}
              </div>
              <span className="font-headline text-[#1E1E1A] text-base">4.4 / 5.0</span>
              <span className="text-[#787866] font-body">({GYM_DETAILS.reviewCount}+ Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline text-xl uppercase tracking-wider text-[#4A5300]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-body font-bold text-[#1E1E1A]">
              <li><a href="#about" className="hover:text-[#4A5300] transition-colors">About L C Fitness</a></li>
              <li><a href="#why-us" className="hover:text-[#4A5300] transition-colors">Why Choose Us</a></li>
              <li><a href="#facilities" className="hover:text-[#4A5300] transition-colors">Gym Facilities & Steam Bath</a></li>
              <li><a href="#membership" className="hover:text-[#4A5300] transition-colors">Membership Packages</a></li>
              <li><a href="#personal-training" className="hover:text-[#4A5300] transition-colors">1-on-1 Personal Training</a></li>
              <li><a href="#schedule" className="hover:text-[#4A5300] transition-colors">Zumba & Yoga Timetable</a></li>
              <li><a href="#gallery" className="hover:text-[#4A5300] transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#4A5300] transition-colors">Google Member Reviews</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-headline text-xl uppercase tracking-wider text-[#4A5300]">
              Address & Contact Info
            </h4>
            <div className="space-y-2.5 text-xs text-[#787866] font-body">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4A5300] shrink-0 mt-0.5" />
                <span>{GYM_DETAILS.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4A5300] shrink-0" />
                <a href={`tel:${GYM_DETAILS.primaryPhone}`} className="hover:underline font-body font-bold text-[#1E1E1A]">
                  +91 {GYM_DETAILS.primaryPhone} / 7040728758 / 8380900090
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#27AE60] shrink-0" />
                <a href={`mailto:${GYM_DETAILS.email}`} className="hover:underline font-body font-bold text-[#1E1E1A]">
                  {GYM_DETAILS.email}
                </a>
              </p>
            </div>

            {/* Social SVGs */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#787866]/30 flex items-center justify-center text-[#1E1E1A] hover:bg-[#F0FF00] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#787866]/30 flex items-center justify-center text-[#1E1E1A] hover:bg-[#00E5FF] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787866] font-body">
          <p>© {new Date().getFullYear()} L C FITNESS CLUB. All rights reserved. Keshavnagar, Mundhwa, Pune.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#1E1E1A] hover:text-[#4A5300] font-headline text-lg transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
