'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { 
  Percent, UserCheck, Image, Quote, Dumbbell, 
  Eye, Calendar, Sparkles, ArrowUpRight
} from 'lucide-react';
import { MEMBERSHIP_PLANS, ALL_INCLUSIVE_PLANS, WEEKLY_SCHEDULE } from '../../../data/gymData';

interface DashboardStats {
  plansCount: number;
  trainersCount: number;
  galleryCount: number;
  testimonialsCount: number;
  classesCount: number;
  visits: number;
  lastUpdated: string;
}

export default function DashboardOverview() {
  const supabase = createClient();
  const [stats, setStats] = useState<DashboardStats>({
    plansCount: MEMBERSHIP_PLANS.length + ALL_INCLUSIVE_PLANS.length,
    trainersCount: 5,
    galleryCount: 12,
    testimonialsCount: 4,
    classesCount: WEEKLY_SCHEDULE.length,
    visits: 1845,
    lastUpdated: new Date().toLocaleDateString()
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        setIsLoading(true);
        // Execute dynamic counts from Supabase if tables exist
        const [
          { count: plans },
          { count: trainers },
          { count: gallery },
          { count: testimonials },
          { count: classes }
        ] = await Promise.all([
          supabase.from('membership_plans').select('*', { count: 'exact', head: true }),
          supabase.from('trainers').select('*', { count: 'exact', head: true }),
          supabase.from('gallery').select('*', { count: 'exact', head: true }),
          supabase.from('testimonials').select('*', { count: 'exact', head: true }),
          supabase.from('classes').select('*', { count: 'exact', head: true })
        ]);

        setStats(prev => ({
          plansCount: plans !== null ? plans : prev.plansCount,
          trainersCount: trainers !== null ? trainers : prev.trainersCount,
          galleryCount: gallery !== null ? gallery : prev.galleryCount,
          testimonialsCount: testimonials !== null ? testimonials : prev.testimonialsCount,
          classesCount: classes !== null ? classes : prev.classesCount,
          visits: prev.visits,
          lastUpdated: new Date().toLocaleDateString()
        }));
      } catch (err) {
        console.warn('Fallback to static data config: Supabase tables may not be created yet.', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    { name: 'Membership Plans', count: stats.plansCount, icon: Percent, color: 'bg-green-500/10 text-green-700 border-green-500/20' },
    { name: 'Certified Trainers', count: stats.trainersCount, icon: UserCheck, color: 'bg-blue-500/10 text-blue-700 border-blue-500/20' },
    { name: 'Gallery Items', count: stats.galleryCount, icon: Image, color: 'bg-amber-500/10 text-amber-700 border-amber-500/20' },
    { name: 'Client Testimonials', count: stats.testimonialsCount, icon: Quote, color: 'bg-purple-500/10 text-purple-700 border-purple-500/20' },
    { name: 'Classes Scheduled', count: stats.classesCount, icon: Dumbbell, color: 'bg-rose-500/10 text-rose-700 border-rose-500/20' },
    { name: 'Total Visits (Est.)', count: stats.visits, icon: Eye, color: 'bg-[#F0FF00]/20 text-[#4A5300] border-[#4A5300]/20' }
  ];

  return (
    <div className="space-y-10">
      
      {/* Header Greeting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#787866] flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-4 h-4 text-[#4A5300]" />
            <span>Operational Console</span>
          </span>
          <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
            Dashboard Overview
          </h2>
        </div>
        <div className="bg-[#E5E2DA] border border-[#787866]/30 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-body font-bold text-[#787866]">
          <Calendar className="w-4 h-4 text-[#4A5300]" />
          <span>Last Sync: {stats.lastUpdated}</span>
        </div>
      </div>

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div 
              key={idx}
              className="bg-[#E5E2DA] border border-[#787866]/20 p-6 rounded-[24px] shadow-sm flex items-center justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-1.5">
                <span className="text-xs font-body font-bold text-[#787866] uppercase tracking-wider block">
                  {card.name}
                </span>
                <h4 className="font-headline text-3xl text-[#1E1E1A]">
                  {card.count}
                </h4>
              </div>
              <div className={`p-4 rounded-2xl border ${card.color} transition-transform duration-200 group-hover:scale-110`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Setup Guide banner */}
      <div className="bg-[#4A5300] text-white p-8 rounded-[32px] shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div 
            className="w-full h-full"
            style={{
              background: 'repeating-linear-gradient(45deg, #FFF, #FFF 1px, transparent 1px, transparent 14px)'
            }}
          />
        </div>
        <div className="space-y-2 text-center md:text-left relative z-10">
          <h3 className="font-headline text-2xl uppercase tracking-wider text-[#F0FF00]">
            Instantly Manage Content
          </h3>
          <p className="text-xs font-body max-w-xl opacity-90 leading-relaxed">
            Use the sidebar controls to customize the website's layout, update membership tier pricing, publish dynamic schedule timings, and update images without touching the codebase.
          </p>
        </div>
        <a 
          href="/admin/hero"
          className="px-6 py-3.5 bg-[#F0FF00] hover:bg-white text-[#1E1E1A] font-body font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer z-10 shrink-0"
        >
          <span>Start Editing Hero</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
