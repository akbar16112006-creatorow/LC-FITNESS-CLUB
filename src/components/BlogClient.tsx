'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BLOG_POSTS } from '../data/blogData';
import { Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';
import { InquiryModal } from './InquiryModal';
import Link from 'next/link';

export const BlogClient: React.FC = () => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (planName?: string) => {
    setSelectedPlan(planName);
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#1E1E1A] antialiased selection:bg-[#F0FF00] selection:text-[#1E1E1A] font-sans relative overflow-x-hidden">
      
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FF00] text-[#1E1E1A] text-xs font-body font-bold uppercase tracking-widest mb-3 border border-black/10 shadow-xs" aria-hidden="true">
            <Sparkles className="w-3.5 h-3.5 text-[#4A5300]" />
            <span>Health & Fitness Resources</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-6xl text-[#1E1E1A] uppercase tracking-tight leading-tight">
            L C Fitness Blog
          </h1>
          <p className="text-[#787866] text-base mt-2 font-body max-w-xl mx-auto">
            Read expert-written guides on bodybuilding, weight loss, fat burning diet charts, and recovery tips from Anand Jankar and the L C Fitness coaching squad.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-[24px] overflow-hidden border border-[#787866]/20 shadow-md hover:shadow-xl hover:border-[#4A5300]/30 transition-all flex flex-col justify-between group h-full"
            >
              <div>
                {/* Photo frame */}
                <div className="aspect-[16/10] overflow-hidden relative bg-black">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#F0FF00] text-[#1E1E1A] text-[10px] font-body font-extrabold uppercase rounded-full tracking-wider border border-black/5">
                    {post.category}
                  </span>
                </div>

                {/* Body details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-[10px] text-[#787866] font-body font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-headline text-2xl text-[#1E1E1A] leading-tight line-clamp-2 uppercase">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#787866] leading-relaxed line-clamp-3 font-body">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read article: ${post.title}`}
                  className="w-full py-3 bg-[#EFECE6] hover:bg-[#4A5300] hover:text-white text-[#1E1E1A] font-body font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>

      <Footer />

      {/* Interactive Enrollment Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        selectedPlanName={selectedPlan}
      />
    </div>
  );
};
