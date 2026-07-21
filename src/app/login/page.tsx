'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../lib/supabase/client';
import { Eye, EyeOff, Loader2, Sparkles } from 'lucide-react';
import { getImageKitUrl } from '../../utils/imagekit';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      router.push('/admin/dashboard');
      router.refresh();
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to authenticate admin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EFECE6] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] -left-32 w-[500px] h-[500px] bg-[#F0FF00]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-32 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[420px] bg-[#E5E2DA] border border-[#787866]/30 p-8 sm:p-10 rounded-[32px] shadow-2xl relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="h-16 w-16 rounded-full overflow-hidden border border-[#787866]/40 shadow-xs mb-4 bg-white flex items-center justify-center p-0.5">
            <img 
              src={getImageKitUrl('logo/logo.jpg', 'icon')} 
              alt="L C Fitness Logo" 
              className="w-full h-full object-contain rounded-full" 
            />
          </div>
          <h2 className="font-headline text-3xl text-[#1E1E1A] tracking-wide uppercase">
            L C <span className="text-[#4A5300]">FITNESS CLUB</span>
          </h2>
          <p className="text-xs text-[#787866] font-body mt-1 uppercase tracking-widest flex items-center gap-1.5 justify-center">
            <Sparkles className="w-3.5 h-3.5 text-[#4A5300]" />
            <span>Admin Console Login</span>
          </p>
        </div>

        {/* Error notification */}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-700 text-xs font-body text-center font-bold">
            {errorMsg}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Admin Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@lcfitness.club"
              className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-hidden focus:border-[#4A5300] transition-colors"
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
              Security Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] placeholder-[#787866]/60 focus:outline-hidden focus:border-[#4A5300] transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#787866] hover:text-[#1E1E1A] transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3.5 bg-[#4A5300] hover:bg-[#3d4400] text-white font-body font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating Admin...</span>
              </>
            ) : (
              <span>Verify & Access</span>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-[10px] font-bold text-[#787866] hover:text-[#4A5300] uppercase tracking-wider transition-colors"
          >
            ← Back to Client Website
          </a>
        </div>
      </div>
    </div>
  );
}
