'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '../../lib/supabase/client';
import { 
  LayoutDashboard, Flame, UserCheck, Dumbbell, Award, 
  Map, Image, Quote, Percent, Phone, Shield, Settings, 
  LogOut, ShieldAlert, Sparkles, Wind
} from 'lucide-react';
import { getImageKitUrl } from '../../utils/imagekit';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const navigation: SidebarItem[] = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Hero Config', href: '/admin/hero', icon: Sparkles },
    { name: 'About Gym', href: '/admin/about', icon: Award },
    { name: 'Membership', href: '/admin/membership', icon: Percent },
    { name: 'Personal Training', href: '/admin/personal-training', icon: Flame },
    { name: 'Classes Schedule', href: '/admin/classes', icon: Dumbbell },
    { name: 'Trainers', href: '/admin/trainers', icon: UserCheck },
    { name: 'Facilities', href: '/admin/facilities', icon: Wind },
    { name: 'Media / Gallery', href: '/admin/gallery', icon: Image },
    { name: 'Testimonials', href: '/admin/testimonials', icon: Quote },
    { name: 'Contact Info', href: '/admin/contact', icon: Phone },
    { name: 'SEO & Analytics', href: '/admin/seo', icon: Shield },
    { name: 'Global Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <aside className="w-64 bg-[#E5E2DA] border-r border-[#787866]/30 flex flex-col justify-between shrink-0 h-screen sticky top-0">
      <div className="flex flex-col flex-1 overflow-y-auto">
        
        {/* Header Branding */}
        <div className="p-6 border-b border-[#787866]/20 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full overflow-hidden border border-[#787866]/40 bg-white flex items-center justify-center p-0.5">
            <img 
              src={getImageKitUrl('logo/logo.jpg?v=2', 'icon')} 
              alt="L C Fitness Logo" 
              className="w-full h-full object-contain rounded-full" 
            />
          </div>
          <div>
            <h3 className="font-headline text-lg text-[#1E1E1A] tracking-wider uppercase leading-none">
              L C <span className="text-[#4A5300]">FITNESS CLUB</span>
            </h3>
            <span className="text-[9px] font-bold text-[#787866] tracking-widest uppercase">CMS PANEL</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-body font-bold uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? 'bg-[#4A5300] text-white shadow-md'
                    : 'text-[#787866] hover:bg-[#EFECE6]/80 hover:text-[#1E1E1A]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#F0FF00]' : ''}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Row */}
      <div className="p-4 border-t border-[#787866]/20 bg-[#E5E2DA]">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-body font-bold uppercase tracking-wider text-red-700 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-all duration-150 cursor-pointer"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          <span>Log Out Admin</span>
        </button>
      </div>
    </aside>
  );
};
