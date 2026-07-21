import React from 'react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#EFECE6] flex text-[#1E1E1A] overflow-hidden">
      {/* Sidebar Navigation Panel */}
      <AdminSidebar />

      {/* Main Workspace Frame */}
      <main className="flex-1 h-screen overflow-y-auto p-8 sm:p-10 relative">
        {/* Background Ambient Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] -left-32 w-[600px] h-[600px] bg-[#F0FF00]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-[10%] -right-32 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
