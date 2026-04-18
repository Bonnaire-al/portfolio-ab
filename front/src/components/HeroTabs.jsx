import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HiArrowDown, HiEnvelope } from 'react-icons/hi2';

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function HeroTabs({ data, activeIndex, setActiveIndex }) {
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 6000);
  }, [data.length, setActiveIndex]);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoplay]);

  useEffect(() => {
    if (!backgroundVideoRef.current) return;
    backgroundVideoRef.current.playbackRate = 0.5;
  }, [activeIndex]);

  const handleTabClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    startAutoplay();
  };

  const active = data[activeIndex];
  const theme = active.theme;

  return (
    <div className={`relative min-h-screen ${theme.bg} transition-colors duration-700 overflow-hidden`}>
      {active.video && (
        <video
          key={active.id}
          ref={backgroundVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src={active.video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Ambient glow */}
      <div className={`absolute inset-0 bg-linear-to-br ${theme.gradient} opacity-10 pointer-events-none`} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none" />

      {/* Tabs */}
      <div className="relative z-10 flex justify-center pt-6">
        <div className="flex gap-1 p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
          {data.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(index)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                  ${isActive ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="hero-tab"
                    className={`absolute inset-0 bg-linear-to-r ${theme.gradient} rounded-xl shadow-lg`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <Icon size={16} />
                  {item.tab}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] pl-20 md:pl-28 pr-6 md:pr-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 ${theme.tagBg}`}
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              {active.hero.badge}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className={`text-xs tracking-[0.3em] font-medium mb-4 ${theme.accent}`}
            >
              {active.hero.subtitle}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-5xl md:text-7xl font-bold mb-2 ${theme.text}`}
            >
              {active.hero.name}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              <span className={`bg-linear-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                {active.hero.title}{' '}
              </span>
              <span className={`${theme.text} opacity-70`}>{active.hero.titleHighlight}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-base md:text-lg mb-8 leading-relaxed ${theme.text} opacity-80 max-w-lg`}
            >
              {active.hero.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {active.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${theme.tagBg} backdrop-blur-sm`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="/projets"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${theme.btnPrimary}`}
              >
                <HiArrowDown size={16} />
                Voir mes projets
              </a>
              <a
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 ${theme.btnSecondary}`}
              >
                <HiEnvelope size={16} />
                Me contacter
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? `w-8 bg-linear-to-r ${theme.gradient}`
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
