'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { Sparkles, Save, Loader2 } from 'lucide-react';

interface SeoData {
  meta_title: string;
  meta_description: string;
  keywords: string[];
  canonical_url: string;
  favicon_url: string;
  og_image: string;
  google_analytics_id: string;
}

export default function SeoSettings() {
  const supabase = createClient();

  const [formData, setFormData] = useState<SeoData>({
    meta_title: 'L C Fitness Club - Gym & Cardio Keshavnagar, Mundhwa, Pune',
    meta_description: 'Join L C Fitness Club in Keshavnagar, Mundhwa, Pune. Premium gym memberships, certified personal training, steam rooms, and ladies batches available.',
    keywords: ['gym', 'fitness club', 'pune', 'manjari road', 'keshavnagar', 'cardioworkout', 'zumba', 'yoga'],
    canonical_url: 'https://lcfitness.club/',
    favicon_url: 'logo/logo.jpg',
    og_image: 'logo/logo.jpg',
    google_analytics_id: 'G-XXXXXXXXXX'
  });

  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    async function loadSeo() {
      try {
        const { data, error } = await supabase
          .from('seo')
          .select('*')
          .eq('id', 1)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
          setFormData({
            meta_title: data.meta_title,
            meta_description: data.meta_description,
            keywords: data.keywords || [],
            canonical_url: data.canonical_url,
            favicon_url: data.favicon_url,
            og_image: data.og_image,
            google_analytics_id: data.google_analytics_id
          });
        }
      } catch (err: any) {
        console.warn('SEO settings fallback applied:', err.message);
      }
    }
    loadSeo();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusMsg(null);

    try {
      const { error } = await supabase
        .from('seo')
        .upsert({ id: 1, ...formData });

      if (error) throw error;
      setStatusMsg({ type: 'success', text: 'SEO metadata updated and index updated!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to update SEO settings.' });
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
          <span>Meta Tags & Head config</span>
        </span>
        <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
          SEO & Analytics Editor
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
        
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
            Meta Title
          </label>
          <input
            type="text"
            required
            value={formData.meta_title}
            onChange={e => setFormData({ ...formData, meta_title: e.target.value })}
            className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
            Meta Description
          </label>
          <textarea
            rows={4}
            required
            value={formData.meta_description}
            onChange={e => setFormData({ ...formData, meta_description: e.target.value })}
            className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden resize-none leading-relaxed"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Canonical URL
            </label>
            <input
              type="text"
              required
              value={formData.canonical_url}
              onChange={e => setFormData({ ...formData, canonical_url: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Google Analytics ID (Tag)
            </label>
            <input
              type="text"
              value={formData.google_analytics_id}
              onChange={e => setFormData({ ...formData, google_analytics_id: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Favicon Icon (ImageKit path)
            </label>
            <input
              type="text"
              value={formData.favicon_url}
              onChange={e => setFormData({ ...formData, favicon_url: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              OpenGraph Image (Social Preview)
            </label>
            <input
              type="text"
              value={formData.og_image}
              onChange={e => setFormData({ ...formData, og_image: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
            Meta Keywords (Comma-separated)
          </label>
          <input
            type="text"
            value={formData.keywords.join(', ')}
            onChange={e => setFormData({ ...formData, keywords: e.target.value.split(',').map(k => k.trim()).filter(Boolean) })}
            className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
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
                <span>Saving Metadata...</span>
              </>
            ) : (
              <span>Save & Publish SEO Metadata</span>
            )}
          </button>
        </div>
      </form>

    </div>
  );
}
