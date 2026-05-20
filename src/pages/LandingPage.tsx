import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CategoryTile from '../components/CategoryTile';
import { categories } from '../data';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    onEnter();
    setTimeout(() => {
      navigate(`/${categoryId}`);
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nicholas
          </span>
          <br />
          <span className="text-white">Wilkie</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-400"
        >
          <span className="text-primary">Software Developer</span>
          <span className="mx-2">|</span>
          <span className="text-secondary">Engineering</span>
          <span className="mx-2">|</span>
          <span className="text-accent">Audio Book Narration</span>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-4xl"
      >
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
          Select a category to explore my work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {categories.map((category, index) => (
            <CategoryTile
              key={category.id}
              category={category}
              index={index}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={onEnter}
          className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Skip to main site</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}