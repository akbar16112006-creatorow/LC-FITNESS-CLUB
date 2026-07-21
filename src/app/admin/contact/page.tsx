'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { Sparkles, Save, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import { GYM_DETAILS } from '../../../data/gymData';

interface ContactData {
  primary_phone: string;
  secondary_phones: string[];
  email: string;
  address: string;
  area: string;
  whatsapp_number: string;
  instagram_handle: string;
  instagram_url: string;
  map_embed_url: string;
  weekday_timings: string;
  sunday_timings: string;
}

export default function ContactSettings() {
  const supabase = createClient();

  const [formData, setFormData] = useState<ContactData>({
    primary_phone: GYM_DETAILS.primaryPhone,
    secondary_phones: GYM_DETAILS.secondaryPhones,
    email: GYM_DETAILS.email,
    address: GYM_DETAILS.address,
    area: GYM_DETAILS.area,
    whatsapp_number: GYM_DETAILS.whatsappNumber,
    instagram_handle: GYM_DETAILS.instagramHandle,
    instagram_url: GYM_DETAILS.instagramUrl,
    map_embed_url: GYM_DETAILS.mapEmbedUrl,
    weekday_timings: GYM_DETAILS.timings.weekday,
    sunday_timings: GYM_DETAILS.timings.sunday
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    async function loadContact() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('contact')
          .select('*')
          .eq('id', 1)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
          setFormData(data);
        }
      } catch (err: any) {
        console.warn('Contact table not created yet, falling back to static settings:', err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadContact();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusMsg(null);

    try {
      const { error } = await supabase
        .from('contact')
        .upsert({ id: 1, ...formData });

      if (error) throw error;
      setStatusMsg({ type: 'success', text: 'Contact info successfully updated and published!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to update contact info.' });
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
          <span>Branding & Location</span>
        </span>
        <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
          Contact Details CMS
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
              Primary Phone Number
            </label>
            <input
              type="text"
              required
              value={formData.primary_phone}
              onChange={e => setFormData({ ...formData, primary_phone: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              WhatsApp Contact Phone (Include Country Code)
            </label>
            <input
              type="text"
              required
              value={formData.whatsapp_number}
              onChange={e => setFormData({ ...formData, whatsapp_number: e.target.value })}
              placeholder="e.g. 919762444458"
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Location Area
            </label>
            <input
              type="text"
              required
              value={formData.area}
              onChange={e => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
            Physical Address
          </label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Instagram Handle
            </label>
            <input
              type="text"
              value={formData.instagram_handle}
              onChange={e => setFormData({ ...formData, instagram_handle: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Instagram Profile URL
            </label>
            <input
              type="text"
              value={formData.instagram_url}
              onChange={e => setFormData({ ...formData, instagram_url: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Weekday Timing Label
            </label>
            <input
              type="text"
              required
              value={formData.weekday_timings}
              onChange={e => setFormData({ ...formData, weekday_timings: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Sunday Timing Label
            </label>
            <input
              type="text"
              required
              value={formData.sunday_timings}
              onChange={e => setFormData({ ...formData, sunday_timings: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
            Google Maps Embed URL
          </label>
          <textarea
            rows={3}
            value={formData.map_embed_url}
            onChange={e => setFormData({ ...formData, map_embed_url: e.target.value })}
            className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden resize-none leading-relaxed"
          />
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
                <span>Saving Details...</span>
              </>
            ) : (
              <span>Save & Publish Contact Details</span>
            )}
          </button>
        </div>
      </form>

    </div>
  );
}
