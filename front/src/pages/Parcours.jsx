import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import DiplomesTable from '../components/DiplomesTable';
import { timelineData, diplomesData } from '../data/parcoursData';

export default function Parcours() {
  return (
    <div className="min-h-screen bg-surface pl-20 md:pl-28 pr-6 md:pr-16 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <p className="text-xs tracking-[0.3em] font-medium text-text-secondary mb-2">
          — PARCOURS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Mon Parcours
        </h1>
        <p className="text-text-secondary text-lg">
          2012 → 2026 : une trajectoire multiple, riche et déterminée.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-8">Frise chronologique</h2>
        <Timeline data={timelineData} />
      </motion.div>

      {/* Diplômes & Formations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-8">Diplômes & Formations</h2>
        <DiplomesTable data={diplomesData} />
      </motion.div>
    </div>
  );
}
