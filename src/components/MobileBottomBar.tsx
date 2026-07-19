import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface MobileBottomBarProps {
  onOpenInquiry: (planName?: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenInquiry }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#E5E2DA]/95 backdrop-blur-lg border-t border-[#787866]/30 shadow-xl flex items-center gap-2">
      <a
        href={`tel:${GYM_DETAILS.primaryPhone}`}
        className="flex-1 py-3 rounded-2xl bg-[#D7FAFF] border border-[#00E5FF]/40 text-[#1E1E1A] font-body font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#4A5300]" />
        <span>Call Now</span>
      </a>

      <button
        onClick={() => onOpenInquiry('Mobile Bottom Bar Pass')}
        className="btn-primary-lime flex-1 py-3 text-[#1E1E1A] font-body font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#1E1E1A]" />
        <span>Join Now</span>
      </button>

      <a
        href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20LC%20Fitness%20Club,%20I%20want%20to%20inquire%20about%20membership`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-3 rounded-2xl bg-[#25D366] text-white font-body font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
