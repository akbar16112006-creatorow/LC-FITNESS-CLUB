import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/gymData';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-[#EFECE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#1E1E1A] px-3.5 py-1.5 bg-[#F0FF00] rounded-full inline-block mb-3 border border-black/10">
            Real Gym Experience
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1E1E1A]">
            L C Fitness Photo Gallery
          </h2>
          <p className="text-[#787866] text-base mt-3 font-body">
            Authentic glimpses of our modern equipment, energetic group batches, and vibrant gym atmosphere in Keshavnagar.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {[
            { label: 'All Photos', value: 'all' },
            { label: 'Gym Interior', value: 'interior' },
            { label: 'Group Classes', value: 'classes' },
            { label: 'Facilities & Steam', value: 'facilities' },
            { label: 'Transformations', value: 'transformations' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-body font-bold transition-all duration-200 ${activeFilter === tab.value
                  ? 'bg-[#F0FF00] text-[#1E1E1A] shadow-xs scale-105 border border-black/10'
                  : 'bg-[#E5E2DA] text-[#1E1E1A] hover:bg-[#D7FAFF]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="sand-card sand-card-hover group flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow-xs text-[#1E1E1A] group-hover:bg-[#F0FF00] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 bg-[#E5E2DA]">
                  <span className="text-[10px] font-body font-bold uppercase tracking-widest text-[#4A5300]">
                    {item.category}
                  </span>
                  <h3 className="font-headline text-xl text-[#1E1E1A] mt-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#787866] font-body line-clamp-1 mt-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#E5E2DA] rounded-3xl overflow-hidden border border-[#787866]/30 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#F0FF00] text-[#1E1E1A] hover:bg-[#D8E600] transition-colors border border-black/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-[#E5E2DA] text-[#1E1E1A]">
                <span className="text-xs font-body font-bold uppercase tracking-widest text-[#4A5300]">
                  {selectedImage.category}
                </span>
                <h3 className="font-headline text-3xl text-[#1E1E1A] mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-[#787866] font-body mt-2">{selectedImage.caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
