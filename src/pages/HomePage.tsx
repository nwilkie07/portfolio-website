import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data';

export default function HomePage() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            My Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Explore my portfolio across different creative disciplines
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={`/${cat.id}`}
                className="block p-6 rounded-xl bg-surface hover:bg-surface/80 transition-colors"
                style={{ borderLeft: `4px solid ${cat.color}` }}
              >
                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-gray-400 text-sm">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Learn more about me
          </Link>
        </motion.div>
      </div>
    </div>
  );
}