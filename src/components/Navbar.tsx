import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { getImageKitUrl } from '../utils/imagekit';

interface NavbarProps {
  onOpenInquiry: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'FACILITIES', href: '#facilities' },
    { name: 'PRICING', href: '#membership' },
    { name: 'SCHEDULE', href: '#schedule' },
    { name: 'RESULTS', href: '#transformations' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-3 sm:px-6 transition-all duration-300">
      
      {/* Warm Sand Floating Capsule Container */}
      <div
        className={`w-full max-w-[1380px] mx-auto rounded-full px-5 sm:px-6 py-3 transition-all duration-300 bg-[#E5E2DA] text-[#1E1E1A] border border-[#787866]/30 shadow-md ${
          isScrolled ? 'shadow-xl bg-[#E5E2DA]/95 backdrop-blur-xl border-[#787866]/50' : 'bg-[#E5E2DA]/95 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="h-11 w-11 rounded-full overflow-hidden border border-[#787866]/40 shadow-xs group-hover:scale-105 transition-transform duration-200 bg-white flex items-center justify-center p-0.5">
              <img 
                src={getImageKitUrl('logo/logo.jpg?v=2', 'icon')} 
                alt="L C Fitness Club Logo" 
                width="44"
                height="44"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-contain rounded-full" 
              />
            </div>
            <span className="font-headline font-bold text-xl sm:text-2xl tracking-wider text-[#1E1E1A] uppercase">
              L C <span className="text-[#4A5300]">FITNESS CLUB</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden xl:flex items-center justify-center gap-1 sm:gap-1.5 flex-1 mx-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-body font-bold tracking-wider whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#F0FF00] text-[#1E1E1A] shadow-xs'
                      : 'text-[#1E1E1A] hover:bg-[#D7FAFF] hover:text-[#4A5300]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${GYM_DETAILS.primaryPhone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-body font-bold tracking-wider border border-[#787866] text-[#1E1E1A] hover:bg-[#D7FAFF] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#4A5300]" />
              <span>CALL</span>
            </a>

            <button
              onClick={() => onOpenInquiry('Navbar Join Now')}
              className="btn-primary-lime px-4 py-1.5 rounded-full text-xs font-body font-bold tracking-wider flex items-center gap-1.5 shadow-sm hover:scale-105 transition-transform whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1E1E1A]" />
              <span>JOIN NOW</span>
            </button>
          </div>

          {/* Mobile Header: Three Lines Hamburger Menu */}
          <div className="flex xl:hidden items-center justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-[#1E1E1A] bg-[#F0FF00] hover:bg-[#D8E600] transition-colors border border-black/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Dark Blurred Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="xl:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
        />
      )}

      {/* Floating Transparent Warm Sand Mobile Navigation Capsule Card Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-24 z-50 bg-[#EFECE6]/80 backdrop-blur-2xl text-[#1E1E1A] flex flex-col justify-between p-6 rounded-[28px] border border-[#787866]/30 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Mobile Header: Logo and Close Button */}
          <div className="flex items-center justify-between pb-3 border-b border-[#787866]/20 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full overflow-hidden border border-black/10 bg-white flex items-center justify-center p-0.5 shadow-xs">
                <img src="/logo.jpg?v=2" alt="L C Fitness Club Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-bold text-lg tracking-wide text-[#1E1E1A] uppercase">
                  L C <span className="text-[#4A5300]">FITNESS CLUB</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full text-[#1E1E1A] bg-black/5 hover:bg-black/10 transition-colors border border-[#787866]/25"
              aria-label="Close Navigation Menu"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Centered Large Premium Navigation Links */}
          <nav className="flex flex-col items-center justify-center gap-4.5 py-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-headline text-2xl sm:text-3xl tracking-wider uppercase transition-colors ${
                    isActive ? 'text-[#4A5300]' : 'text-[#1E1E1A]/80 hover:text-[#4A5300]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Premium Bottom Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-[#787866]/20 mt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Mobile Overlay Join');
              }}
              className="btn-primary-lime w-full py-3.5 text-xs font-body font-bold tracking-wider flex items-center justify-center gap-2 rounded-xl shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#1E1E1A]" />
              BOOK FREE TRIAL PASS
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${GYM_DETAILS.primaryPhone}`}
                className="py-3 px-3 rounded-xl border border-[#787866]/40 text-xs font-body font-bold tracking-wider text-[#1E1E1A] flex items-center justify-center gap-1.5 bg-[#D7FAFF] hover:bg-[#bbf3ff] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#4A5300]" />
                CALL NOW
              </a>
              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20LC%20Fitness%20Club,%20I%20want%20to%20inquire%20about%20membership`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-xl border border-transparent text-xs font-body font-bold tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WHATSAPP
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
