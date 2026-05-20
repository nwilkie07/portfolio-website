import { useState } from 'react';
import { motion } from 'framer-motion';
import type { MediaItem } from '../data';

interface WebsitePreviewProps {
  item: MediaItem;
}

export default function WebsitePreview({ item }: WebsitePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="aspect-video bg-surface rounded-lg flex flex-col items-center justify-center p-8 text-center">
        <svg className="w-12 h-12 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <p className="text-gray-400">Unable to load preview</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-primary hover:underline"
        >
          Open in new tab
        </a>
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-surface rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
          />
        </div>
      )}
      <iframe
        src={item.url}
        title={item.alt || 'Website preview'}
        className="w-full h-full border-0"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}