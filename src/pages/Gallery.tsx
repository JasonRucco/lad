import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Video } from 'lucide-react';
import { galleryData } from '../data/gallery';
import type { GalleryItem } from '../types';

interface CarouselProps {
  files: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  isModal?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ files, currentIndex, onNext, onPrev, isModal = false }) => {
  const getFullUrl = (filename: string) => {
    return `https://equilibrium-it.com/assets/images/gallery/${filename}`;
  };

  const isVideo = (filename: string) => filename.toLowerCase().endsWith('.mp4');
  const containerClass = isModal ? 'w-full max-w-6xl mx-auto' : 'w-full';
  const mediaClass = isModal 
    ? 'max-h-[80vh] object-contain w-full'
    : 'aspect-square object-cover w-full';

  return (
    <div className={`relative ${containerClass}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {isVideo(files[currentIndex]) ? (
            <div className="relative">
              <video
                src={getFullUrl(files[currentIndex])}
                className={mediaClass}
                controls
                autoPlay={isModal}
                muted
              />
              <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full">
                <Video className="w-4 h-4 text-white" />
              </div>
            </div>
          ) : (
            <img
              src={getFullUrl(files[currentIndex])}
              alt={`Gallery image ${currentIndex + 1}`}
              className={mediaClass}
              loading="lazy"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {files.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {files.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<GalleryItem | null>(null);
  const [currentIndexes, setCurrentIndexes] = useState<{ [key: string]: number }>(
    Object.fromEntries(galleryData.map(group => [group.GROUPID, 0]))
  );

  const handleNext = (groupId: string, totalFiles: number) => {
    setCurrentIndexes(prev => ({
      ...prev,
      [groupId]: (prev[groupId] + 1) % totalFiles
    }));
  };

  const handlePrev = (groupId: string, totalFiles: number) => {
    setCurrentIndexes(prev => ({
      ...prev,
      [groupId]: (prev[groupId] - 1 + totalFiles) % totalFiles
    }));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Work Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Browse through our portfolio of premium detailing work
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData.map((group: GalleryItem) => (
              <motion.div
                key={group.GROUPID}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedGroup(group)}
              >
                <Carousel
                  files={group.files}
                  currentIndex={currentIndexes[group.GROUPID]}
                  onNext={() => handleNext(group.GROUPID, group.files.length)}
                  onPrev={() => handlePrev(group.GROUPID, group.files.length)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedGroup(null)}
              className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <Carousel
              files={selectedGroup.files}
              currentIndex={currentIndexes[selectedGroup.GROUPID]}
              onNext={() => handleNext(selectedGroup.GROUPID, selectedGroup.files.length)}
              onPrev={() => handlePrev(selectedGroup.GROUPID, selectedGroup.files.length)}
              isModal
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your premium detailing service
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:267-356-1409"
              className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
