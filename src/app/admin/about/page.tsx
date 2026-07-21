'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { Sparkles, Save, Loader2 } from 'lucide-react';

interface AboutData {
  heading: string;
  description: string;
  mission: string;
  vision: string;
  experience_years: number;
}

export default function AboutSettings() {
  const supabase = createClient();

  const [formData, setFormData] = useState<AboutData>({
    heading: 'Welcome to L C Fitness Club',
    description: 'We are a premium gym and fitness center located in Keshavnagar, Pune. Our mission is to provide world-class facilities and expert guidance to help you reach your goals.',
    mission: 'To make premium fitness coaching accessible and help members build healthy, sustainable habits.',
    vision: 'To be the most trusted and results-driven fitness community in Pune.',
    experience_years: 10
  });

  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    async function loadAbout() {
      try {
        const { data, error } = await supabase
          .from('about')
          .select('*')
          .eq('id', 1)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
          setFormData(data);
        }
      } catch (err: any) {
        console.warn('Fallback about applied:', err.message);
      }
    }
    loadAbout();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusMsg(null);

    try {
      const { error } = await supabase
        .from('about')
        .upsert({ id: 1, ...formData });

      if (error) throw error;
      setStatusMsg({ type: 'success', text: 'About settings successfully updated!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to update about settings.' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-body font-bold uppercase tracking-widest text-[#787866] flex items-center gap-1.5 mb-1.5">
          <Sparkles className="w-4 h-4 text-[#4A5300]" />
          <span>Core Story Config</span>
        </span>
        <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
          About Gym Settings
        </h2>
      </div>

      {statusMsg && (
        <div className={`p-4 rounded-2xl border text-xs font-body font-bold text-center ${
          statusMsg.type === 'success'
            ? 'bg-green-500/10 border-green-500/20 text-green-700'
            : 'bg-red-500/10 border-red-500/20 text-red-700'
        }`}>
          {statusMsg.text}
        </div>
      )}

      <form onSubmit={handleSave} className="bg-[#E5E2DA] border border-[#787866]/20 p-8 rounded-[32px] space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              About Heading
            </label>
            <input
              type="text"
              required
              value={formData.heading}
              onChange={e => setFormData({ ...formData, heading: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Years of Experience
            </label>
            <input
              type="number"
              required
              value={formData.experience_years}
              onChange={e => setFormData({ ...formData, experience_years: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
            About Description
          </label>
          <textarea
            rows={4}
            required
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden resize-none leading-relaxed"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Our Mission
            </label>
            <textarea
              rows={3}
              value={formData.mission}
              onChange={e => setFormData({ ...formData, mission: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden resize-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Our Vision
            </label>
            <textarea
              rows={3}
              value={formData.vision}
              onChange={e => setFormData({ ...formData, vision: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden resize-none"
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
                <span>Saving About Section...</span>
              </>
            ) : (
              <span>Save & Publish About Details</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
