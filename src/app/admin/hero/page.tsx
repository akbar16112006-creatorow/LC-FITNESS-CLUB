'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { Sparkles, Save, Eye, Loader2 } from 'lucide-react';

interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primary_button: string;
  secondary_button: string;
  bg_image: string;
  overlay_opacity: number;
}

export default function HeroSettings() {
  const supabase = createClient();

  const [formData, setFormData] = useState<HeroData>({
    badge: 'L C FITNESS CLUB_36',
    title: 'JOIN WITH US AND FIT FOREVER',
    subtitle: 'PREMIUM FITNESS DESTINATION IN KESHAVNAGAR',
    description: 'Transform your physique with our world-class cardio training zones, flexible membership packages, and 1-on-1 personal guidance from certified coach Anand Jankar.',
    primary_button: 'VIEW PRICING PLANS',
    secondary_button: 'CONTACT WHATSAPP',
    bg_image: 'hero/gym-hero-bg.webp',
    overlay_opacity: 0.22
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Fetch Hero from Supabase
  useEffect(() => {
    async function loadHero() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('hero')
          .select('*')
          .eq('id', 1)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
          setFormData(data);
        }
      } catch (err: any) {
        console.warn('Hero DB fetch fail, using static layout defaults:', err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadHero();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      const { error } = await supabase
        .from('hero')
        .upsert({ id: 1, ...formData });

      if (error) throw error;
      setMessage({ type: 'success', text: 'Hero configuration successfully updated and published!' });
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to update configuration.' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div>
        <span className="text-xs font-body font-bold uppercase tracking-widest text-[#787866] flex items-center gap-1.5 mb-1.5">
          <Sparkles className="w-4 h-4 text-[#4A5300]" />
          <span>Interactive Section Manager</span>
        </span>
        <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
          Hero Header Configuration
        </h2>
      </div>

      {message && (
        <div className={`p-4 rounded-2xl border text-xs font-body font-bold text-center ${
          message.type === 'success'
            ? 'bg-green-500/10 border-green-500/20 text-green-700'
            : 'bg-red-500/10 border-red-500/20 text-red-700'
        }`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Editor Form */}
        <form onSubmit={handleSave} className="lg:col-span-7 bg-[#E5E2DA] border border-[#787866]/20 p-8 rounded-[32px] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                Badge Slogan
              </label>
              <input
                type="text"
                value={formData.badge}
                onChange={e => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                Subtitle Tagline
              </label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Main Headline (Title)
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden font-headline uppercase"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Description Copy
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden resize-none leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                Primary Button Label
              </label>
              <input
                type="text"
                value={formData.primary_button}
                onChange={e => setFormData({ ...formData, primary_button: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                Secondary Button Label
              </label>
              <input
                type="text"
                value={formData.secondary_button}
                onChange={e => setFormData({ ...formData, secondary_button: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                Background Image path (ImageKit)
              </label>
              <input
                type="text"
                value={formData.bg_image}
                onChange={e => setFormData({ ...formData, bg_image: e.target.value })}
                placeholder="hero/gym-hero-bg.webp"
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                Overlay Opacity (0 to 1)
              </label>
              <input
                type="number"
                step="0.05"
                min="0"
                max="1"
                value={formData.overlay_opacity}
                onChange={e => setFormData({ ...formData, overlay_opacity: parseFloat(e.target.value) || 0.2 })}
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSaving}
              className="w-full py-3.5 bg-[#4A5300] hover:bg-[#3d4400] text-white font-body font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#F0FF00]" />
                  <span>Publishing Changes...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 text-[#F0FF00]" />
                  <span>Save & Publish Config</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Live Visual Preview Frame */}
        <div className="lg:col-span-5 bg-black rounded-[32px] overflow-hidden shadow-2xl relative h-[450px] border border-[#787866]/20">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-[#333]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" style={{ opacity: formData.overlay_opacity }} />
          </div>
          
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-center items-center text-center space-y-4">
            <span className="text-[10px] font-body font-bold uppercase tracking-widest text-black px-2.5 py-1 bg-[#F0FF00] rounded-full">
              {formData.badge}
            </span>
            <h3 className="font-headline text-3xl text-white uppercase tracking-wide leading-tight">
              {formData.title}
            </h3>
            <span className="text-[9px] text-[#00E5FF] font-body uppercase font-bold tracking-widest">
              {formData.subtitle}
            </span>
            <p className="text-[11px] text-white/80 font-body max-w-sm line-clamp-3">
              {formData.description}
            </p>
            <div className="flex gap-3 pt-2">
              <span className="px-4 py-2 bg-[#4A5300] text-white text-[9px] font-body font-bold uppercase rounded-lg">
                {formData.primary_button}
              </span>
              <span className="px-4 py-2 bg-white/10 text-white border border-white/20 text-[9px] font-body font-bold uppercase rounded-lg">
                {formData.secondary_button}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
