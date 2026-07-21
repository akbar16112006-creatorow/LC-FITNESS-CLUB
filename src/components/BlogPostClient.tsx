'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BLOG_POSTS } from '../data/blogData';
import { Calendar, Clock, ArrowLeft, User, Bookmark } from 'lucide-react';
import { InquiryModal } from './InquiryModal';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostClientProps {
  slug: string;
}

export const BlogPostClient: React.FC<BlogPostClientProps> = ({ slug }) => {
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

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#1E1E1A] antialiased selection:bg-[#F0FF00] selection:text-[#1E1E1A] font-sans relative overflow-x-hidden">
      
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="relative z-10 pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-body font-bold text-[#787866] hover:text-[#1E1E1A] transition-colors mb-8 group uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to blog</span>
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-[28px] overflow-hidden border border-[#787866]/20 shadow-lg p-6 sm:p-10 space-y-8">
          
          {/* Header Metadata */}
          <div className="space-y-4">
            <span className="px-3.5 py-1.5 bg-[#F0FF00] text-[#1E1E1A] text-xs font-body font-extrabold uppercase rounded-full tracking-wider border border-black/5 inline-block">
              {post.category}
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl text-[#1E1E1A] leading-tight uppercase">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#787866] font-body font-bold uppercase tracking-wider pt-2 border-y border-[#787866]/10 py-3">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#4A5300]" />
                <span>By {post.author} ({post.authorRole})</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-[20px] bg-black">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* HTML body content styled premiumly */}
          <div 
            className="prose max-w-none prose-neutral prose-headings:font-headline prose-headings:uppercase prose-headings:text-[#1E1E1A] prose-p:text-sm prose-p:leading-relaxed prose-p:font-body prose-p:text-[#787866] prose-ul:list-disc prose-ul:pl-5 prose-li:text-sm prose-li:font-body prose-li:text-[#787866] space-y-6 pt-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="pt-8 border-t border-[#787866]/10 flex items-center gap-2.5 flex-wrap">
            <Bookmark className="w-4 h-4 text-[#4A5300]" />
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-body font-bold uppercase tracking-wider px-3 py-1 bg-[#EFECE6] rounded-full border border-black/5 text-[#787866]">
                #{tag}
              </span>
            ))}
          </div>

        </article>

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
