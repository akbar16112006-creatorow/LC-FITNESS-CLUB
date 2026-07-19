import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const InstagramSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mute audio whenever slide changes to prevent background sound playing from inactive slides
  useEffect(() => {
    setIsMuted(true);
  }, [activeIndex]);

  const reels = [
    {
      id: 'reel-1',
      url: 'https://www.instagram.com/reel/DYNPJUdMVQB/',
      videoSrc: '/videos/reel1.mp4',
      title: 'Fitness & Strength Form'
    },
    {
      id: 'reel-2',
      url: 'https://www.instagram.com/reel/DZafcUAIxCA/?igsh=bjU1YTdtZmZhOGQ5',
      videoSrc: '/videos/reel2.mp4',
      title: 'VIP Personal Coaching'
    },
    {
      id: 'reel-3',
      url: 'https://www.instagram.com/reel/DIbV0xwsMyx/?igsh=MThjdDNhd281aDZ3OQ==',
      videoSrc: '/videos/reel3.mp4',
      title: 'Transformation Highlights'
    }
  ];

  const getCardStyle = (index: number) => {
    const isCenter = index === activeIndex;
    const isLeft = index === (activeIndex - 1 + reels.length) % reels.length;
    const offset = isMobile ? 60 : 130;

    if (isCenter) {
      return {
        x: 0,
        scale: 1.05,
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(100%) blur(0px)'
      };
    } else if (isLeft) {
      return {
        x: -offset,
        scale: 0.85,
        zIndex: 10,
        opacity: 0.6,
        filter: 'brightness(70%) blur(1px)'
      };
    } else {
      return {
        x: offset,
        scale: 0.85,
        zIndex: 10,
        opacity: 0.6,
        filter: 'brightness(70%) blur(1px)'
      };
    }
  };

  return (
    <section className="py-20 bg-[#EFECE6] relative overflow-hidden">
      
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop"
          alt="LC Fitness Instagram Background"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 3D Stacked Carousel Container */}
        <div className="relative flex flex-col items-center select-none mb-16">
          <div className="relative w-full max-w-lg h-[470px] md:h-[500px] flex items-center justify-center">
            {reels.map((reel, idx) => {
              const cardStyle = getCardStyle(idx);
              const isCenter = idx === activeIndex;

              return (
                <motion.div
                  key={reel.id}
                  style={{
                    position: 'absolute',
                    width: isMobile ? '240px' : '280px',
                    height: isMobile ? '380px' : '440px',
                    transformOrigin: 'center center',
                    cursor: 'pointer'
                  }}
                  animate={cardStyle}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(idx);
                    }
                  }}
                  className="rounded-[24px] bg-white shadow-xl overflow-hidden border border-[#787866]/20 flex flex-col hover:shadow-2xl"
                >
                  {/* Spacing above the photo */}
                  <div className="pt-4 px-4 pb-2 bg-white flex items-center justify-between text-[10px] font-body font-bold text-[#787866] tracking-widest uppercase">
                    <span>L C Fitness Reel</span>
                    {isCenter && <span className="w-2.5 h-2.5 rounded-full bg-[#F0FF00] border border-black/10 animate-pulse" />}
                  </div>

                  {/* Video Player Frame with padding margins */}
                  <div className="flex-1 mx-3 mb-2 rounded-2xl overflow-hidden relative group bg-black flex items-center justify-center">
                    <video
                      key={`${reel.id}-${isCenter ? 'active' : 'inactive'}`}
                      src={reel.videoSrc}
                      autoPlay={isCenter}
                      controls={false}
                      muted={isMuted}
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* Premium Sleek Custom Volume Button Overlay (Center card only) */}
                    {isCenter && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="absolute bottom-4 right-4 z-40 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-xs transition-all shadow-md border border-white/10"
                        aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    )}
                  </div>

                  {/* Watch Link Down Below */}
                  <div className="p-4 bg-white border-t border-black/5 flex flex-col justify-center items-center text-center">
                    <h5 className="font-headline text-sm md:text-base text-[#1E1E1A] line-clamp-1">
                      {reel.title}
                    </h5>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-body font-extrabold text-[#4A5300] hover:underline uppercase tracking-wider mt-1.5"
                    >
                      <span>Watch on Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#4A5300]" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + reels.length) % reels.length)}
              className="p-3 rounded-full bg-white border border-[#787866]/30 text-[#1E1E1A] hover:bg-[#F0FF00] transition-all hover:scale-105 shadow-xs"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mx-4">
              {reels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-[#4A5300]' : 'w-2.5 bg-[#787866]/30 hover:bg-[#787866]/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % reels.length)}
              className="p-3 rounded-full bg-white border border-[#787866]/30 text-[#1E1E1A] hover:bg-[#F0FF00] transition-all hover:scale-105 shadow-xs"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Banner (Moved down below the 3D Reel Carousel) */}
        <div className="p-8 sm:p-12 sand-card relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D7FAFF] text-[#1E1E1A] border border-[#00E5FF]/40 text-xs font-body font-bold uppercase tracking-wider">
              <svg className="w-4 h-4 fill-current text-[#4A5300]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Official Instagram Handle</span>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl text-[#1E1E1A]">
              {GYM_DETAILS.instagramHandle}
            </h3>
            <p className="text-sm text-[#787866] max-w-xl font-body">
              Join our fitness community following our daily workout reels, member transformations, and class schedules!
            </p>
          </div>

          <div className="z-10">
            <a
              href={GYM_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary-olive px-8 py-4 text-sm flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
