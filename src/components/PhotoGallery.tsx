import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MediaItem } from '../data';

interface PhotoGalleryProps {
  items: MediaItem[];
}

export default function PhotoGallery({ items }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-video overflow-hidden rounded-lg"
          >
            <img
              src={item.url}
              alt={item.alt || `Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={items[selectedIndex].url}
              alt={items[selectedIndex].alt || ''}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <button className="absolute top-4 right-4 text-white text-4xl">&times;</button>
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex - 1);
                }}
                className="absolute left-4 text-white text-4xl"
              >
                &#8249;
              </button>
            )}
            {selectedIndex < items.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex + 1);
                }}
                className="absolute right-4 text-white text-4xl"
              >
                &#8250;
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}