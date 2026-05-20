import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function AppContent() {
  const [showMain, setShowMain] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleEnter = () => {
    setShowMain(true);
  };

  useEffect(() => {
    if (!isHomePage) {
      setShowMain(true);
    }
  }, [isHomePage]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!showMain && isHomePage && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <LandingPage onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(showMain || !isHomePage) && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <Navigation />
            <main>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={showMain ? <HomePage /> : <LandingPage onEnter={handleEnter} />} />
                <Route path="/:categoryId" element={<CategoryPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}