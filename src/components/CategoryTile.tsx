import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Category } from '../data';

interface CategoryTileProps {
  category: Category;
  index: number;
  onClick: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  video: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  palette: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  music: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  camera: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function CategoryTile({ category, index, onClick }: CategoryTileProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative aspect-square rounded-2xl overflow-hidden group"
      style={{ backgroundColor: category.color }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
          {iconMap[category.icon] || iconMap.code}
        </div>
        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
        <p className="text-sm text-white/70 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          {category.description}
        </p>
      </div>

      <div className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-white/40 transition-colors" />
    </motion.button>
  );
}

export function CategoryTileLink({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
    >
      <Link
        to={`/${category.id}`}
        className="block relative aspect-square rounded-2xl overflow-hidden group"
        style={{ backgroundColor: category.color }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            {iconMap[category.icon] || iconMap.code}
          </div>
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-sm text-white/70 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            {category.description}
          </p>
        </div>

        <div className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-white/40 transition-colors" />
      </Link>
    </motion.div>
  );
}