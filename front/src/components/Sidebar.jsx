import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  HiHome,
  HiBriefcase,
  HiAcademicCap,
  HiEnvelope,
  HiPhone,
  HiBars3,
  HiXMark,
} from 'react-icons/hi2';

const navItems = [
  { to: '/', icon: HiHome, label: 'Accueil' },
  { to: '/projets', icon: HiBriefcase, label: 'Projets' },
  { to: '/parcours', icon: HiAcademicCap, label: 'Parcours' },
  { to: '/contact', icon: HiEnvelope, label: 'Contact' },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);
  const location = useLocation();

  const handlePhoneDoubleClick = () => {
    setAdminClickCount((prev) => prev + 1);
    if (adminClickCount >= 1) {
      window.location.href = '/admin';
      setAdminClickCount(0);
    }
    setTimeout(() => setAdminClickCount(0), 500);
  };

  return (
    <>
      {/* Mobile burger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-xl bg-card shadow-lg border border-border"
      >
        {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.nav
        initial={false}
        animate={{ x: mobileOpen ? 0 : undefined }}
        className={`fixed left-0 top-0 h-screen w-16 bg-card/80 backdrop-blur-xl border-r border-border
          flex flex-col items-center py-6 justify-between z-50
          transition-transform duration-300
          max-md:w-56 max-md:bg-card max-md:shadow-2xl
          ${mobileOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'}
          md:translate-x-0`}
      >
        {/* Logo */}
        <NavLink to="/" onClick={() => setMobileOpen(false)}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-accent-pink flex items-center justify-center text-white font-bold text-lg shadow-lg"
          >
            P
          </motion.div>
        </NavLink>

        {/* Nav links */}
        <div className="flex flex-col items-center gap-2 max-md:items-start max-md:w-full max-md:px-4">
          {navItems.map((item) => {
            const isActive =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to);
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? 'bg-primary/10 text-primary shadow-lg shadow-primary/20'
                        : 'text-text-secondary hover:bg-primary/5 hover:text-primary'
                    }
                    max-md:w-full max-md:px-4`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full max-md:hidden"
                    />
                  )}
                  <Icon size={22} />
                  <span className="hidden max-md:block text-sm font-medium">
                    {item.label}
                  </span>

                  {/* Tooltip desktop */}
                  <div className="absolute left-full ml-3 px-2 py-1 bg-text-primary text-white text-xs rounded-md 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap
                    max-md:hidden">
                    {item.label}
                  </div>
                </motion.div>
              </NavLink>
            );
          })}
        </div>

        {/* Phone button (admin double-click) */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePhoneDoubleClick}
          className="p-3 rounded-xl text-text-secondary hover:bg-accent-green/10 hover:text-accent-green transition-all duration-300"
        >
          <HiPhone size={20} />
        </motion.button>
      </motion.nav>
    </>
  );
}
