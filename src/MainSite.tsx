import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';

interface MainSiteProps {
  isVisible: boolean;
}

export default function MainSite({ isVisible }: MainSiteProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="min-h-screen"
        >
          <Navigation />

          <main className={isHomePage ? '' : ''}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {location.pathname === '/' ? (
                  <HomePage />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HomePage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">My Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio across different creative disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 'software', name: 'Software', color: '#6366f1', desc: 'Full-stack applications and interactive experiences' },
            { id: 'engineering', name: 'Engineering', color: '#ec4899', desc: 'Project management.' },
            { id: 'narration', name: 'Narration', color: '#8b5cf6', desc: 'Audiobook narration.' },
          ].map((cat, i) => (
            <motion.a
              key={cat.id}
              href={`/${cat.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="block p-6 rounded-xl bg-surface hover:bg-surface/80 transition-colors"
              style={{ borderLeft: `4px solid ${cat.color}` }}
            >
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <p className="text-gray-400 text-sm">{cat.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}