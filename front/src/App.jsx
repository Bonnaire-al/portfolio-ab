import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Parcours from './pages/Parcours';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' },
};

export default function App() {
  const location = useLocation();

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition} className="min-h-screen">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/parcours" element={<Parcours />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
