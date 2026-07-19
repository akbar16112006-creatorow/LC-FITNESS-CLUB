import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TransformCard {
  id: number;
  image: string;
  alt: string;
  name: string;
  result: string;
  duration: string;
  tag: string;
}

const transforms: TransformCard[] = [
  {
    id: 1,
    image: '/transforms/transform1.png',
    alt: 'Neelesh Warghai Before After Transformation at LC Fitness Club',
    name: '@neeleshwarghai',
    result: 'Incredible Body Recomposition',
    duration: '6 Months',
    tag: 'Fat Loss',
  },
  {
    id: 2,
    image: '/transforms/transform2.png',
    alt: '160kg to 83kg Fat Loss Journey at LC Fitness Club',
    name: 'LC Fitness Member',
    result: '160kg → 83kg',
    duration: 'Fat Loss Journey',
    tag: '77kg Lost',
  },
  {
    id: 3,
    image: '/transforms/transform3.png',
    alt: '100kg to 68kg Women Transformation at LC Fitness Club',
    name: 'LC Fitness Member',
    result: '100kg → 68kg',
    duration: 'Women\'s Transformation',
    tag: '32kg Lost',
  },
  {
    id: 4,
    image: '/transforms/transform4.png',
    alt: 'Women Body Transformation at LC Fitness Club Pune',
    name: 'LC Fitness Member',
    result: 'Complete Body Recomp',
    duration: 'Personal Training',
    tag: 'Fat Loss',
  },
  {
    id: 5,
    image: '/transforms/transform5.png',
    alt: '90kg to 84kg Body Transformation at LC Fitness Club',
    name: 'LC Fitness Member',
    result: '90kg → 84kg',
    duration: 'Lean Body Plan',
    tag: 'Muscle Gain',
  },
];

export const Transformations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getCardStyle = (index: number) => {
    const total = transforms.length;
    const isCenter = index === activeIndex;
    const isLeft = index === (activeIndex - 1 + total) % total;
    const isRight = index === (activeIndex + 1) % total;
    const offset = isMobile ? 70 : 150;

    if (isCenter) {
      return {
        x: 0,
        scale: 1.05,
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(100%) blur(0px)',
        pointerEvents: 'auto' as const
      };
    } else if (isLeft) {
      return {
        x: -offset,
        scale: 0.85,
        zIndex: 10,
        opacity: 0.5,
        filter: 'brightness(70%) blur(1px)',
        pointerEvents: 'auto' as const
      };
    } else if (isRight) {
      return {
        x: offset,
        scale: 0.85,
        zIndex: 10,
        opacity: 0.5,
        filter: 'brightness(70%) blur(1px)',
        pointerEvents: 'auto' as const
      };
    } else {
      return {
        x: 0,
        scale: 0.7,
        zIndex: 0,
        opacity: 0,
        filter: 'brightness(50%) blur(4px)',
        pointerEvents: 'none' as const
      };
    }
  };

  return (
    <section id="transformations" className="py-20 bg-[#EFECE6] relative overflow-hidden select-none">
      
      {/* Background Gym Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop"
          alt="LC Fitness Transformations Background"
          className="w-full h-full object-cover opacity-[0.05] filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/85 via-[#EFECE6]/95 to-[#EFECE6]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#1E1E1A] px-3.5 py-1.5 bg-[#F0FF00] rounded-full inline-block mb-3 border border-black/10">
            Real Members, Real Results
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A] leading-tight">
            Client Transformations
          </h2>
        </div>

        {/* 3D Stacked Carousel Container */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-lg h-[490px] md:h-[530px] flex items-center justify-center">
            {transforms.map((card, idx) => {
              const cardStyle = getCardStyle(idx);
              const isCenter = idx === activeIndex;

              return (
                <motion.div
                  key={card.id}
                  style={{
                    position: 'absolute',
                    width: isMobile ? '260px' : '310px',
                    height: isMobile ? '430px' : '490px',
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
                  {/* Top Bar */}
                  <div className="pt-3.5 px-4 pb-2 bg-white flex items-center justify-between text-[10px] font-body font-bold text-[#787866] tracking-widest uppercase border-b border-black/5">
                    <span>L C FITNESS RESULT</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#F0FF00] text-[#1E1E1A] font-extrabold border border-black/10">
                      {card.tag}
                    </span>
                  </div>

                  {/* Image Frame */}
                  <div className="flex-1 mx-3 my-2 rounded-2xl overflow-hidden relative bg-black flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover object-top rounded-2xl"
                    />
                  </div>

                  {/* Card Bottom Details */}
                  <div className="p-4 bg-white border-t border-black/5 flex flex-col justify-center items-center text-center">
                    <h5 className="font-headline text-base md:text-lg text-[#1E1E1A] line-clamp-1">
                      {card.result}
                    </h5>
                    <div className="flex items-center gap-3 mt-1 text-xs font-body">
                      <span className="text-[#787866]">{card.duration}</span>
                      <span className="w-1 h-1 rounded-full bg-[#787866]" />
                      <span className="font-bold text-[#4A5300]">{card.name}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + transforms.length) % transforms.length)}
              className="p-3 rounded-full bg-white border border-[#787866]/30 text-[#1E1E1A] hover:bg-[#F0FF00] transition-all hover:scale-105 shadow-xs"
              aria-label="Previous Transformation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mx-4">
              {transforms.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-[#4A5300]' : 'w-2.5 bg-[#787866]/30 hover:bg-[#787866]/60'
                  }`}
                  aria-label={`Go to transformation ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % transforms.length)}
              className="p-3 rounded-full bg-white border border-[#787866]/30 text-[#1E1E1A] hover:bg-[#F0FF00] transition-all hover:scale-105 shadow-xs"
              aria-label="Next Transformation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
