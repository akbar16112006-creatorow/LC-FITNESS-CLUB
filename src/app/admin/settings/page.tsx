'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { Sparkles, Save, Loader2 } from 'lucide-react';

interface SettingsData {
  website_name: string;
  logo_url: string;
  footer_logo_url: string;
  copyright: string;
  maintenance_mode: boolean;
}

export default function GlobalSettings() {
  const supabase = createClient();

  const [formData, setFormData] = useState<SettingsData>({
    website_name: 'L C FITNESS CLUB',
    logo_url: 'logo/logo.jpg',
    footer_logo_url: 'logo/logo.jpg',
    copyright: '© 2026 L C Fitness Club. All Rights Reserved.',
    maintenance_mode: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    async function loadSettings() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('*')
          .eq('id', 1)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        if (data) {
          setFormData(data);
        }
      } catch (err: any) {
        console.warn('Settings not created, using defaults:', err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusMsg(null);

    try {
      const { error } = await supabase
        .from('settings')
        .upsert({ id: 1, ...formData });

      if (error) throw error;
      setStatusMsg({ type: 'success', text: 'Global configurations successfully updated!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to update settings.' });
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
          <span>System Configurations</span>
        </span>
        <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
          Global Settings Configuration
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
              Website Name
            </label>
            <input
              type="text"
              required
              value={formData.website_name}
              onChange={e => setFormData({ ...formData, website_name: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Copyright Signature Text
            </label>
            <input
              type="text"
              required
              value={formData.copyright}
              onChange={e => setFormData({ ...formData, copyright: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Website Logo (ImageKit Path)
            </label>
            <input
              type="text"
              required
              value={formData.logo_url}
              onChange={e => setFormData({ ...formData, logo_url: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Footer Logo (ImageKit Path)
            </label>
            <input
              type="text"
              required
              value={formData.footer_logo_url}
              onChange={e => setFormData({ ...formData, footer_logo_url: e.target.value })}
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 py-2">
          <label className="flex items-center gap-2 text-xs font-body font-bold text-[#1E1E1A] uppercase tracking-wider">
            <input
              type="checkbox"
              checked={formData.maintenance_mode}
              onChange={e => setFormData({ ...formData, maintenance_mode: e.target.checked })}
              className="w-4 h-4"
            />
            <span>Enable Maintenance Mode</span>
          </label>
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
                <span>Saving settings...</span>
              </>
            ) : (
              <span>Save & Publish Global Settings</span>
            )}
          </button>
        </div>
      </form>

    </div>
  );
}
