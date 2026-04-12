import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';

const typeColors = {
  Formation: 'bg-primary/10 text-primary',
  Certification: 'bg-accent-green/10 text-accent-green',
  BTS: 'bg-accent-blue/10 text-accent-blue',
  Bac: 'bg-accent-pink/10 text-accent-pink',
  BEP: 'bg-accent-orange/10 text-accent-orange',
  CAP: 'bg-accent-yellow/10 text-accent-yellow',
};

const filterTypes = ['Tous', 'CAP', 'BEP', 'Bac', 'BTS', 'Formation', 'Certification'];

export default function DiplomesTable({ data }) {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [sortAsc, setSortAsc] = useState(false);

  const filtered = activeFilter === 'Tous'
    ? data
    : data.filter((d) => d.type === activeFilter);

  const sorted = [...filtered].sort((a, b) =>
    sortAsc ? a.year.localeCompare(b.year) : b.year.localeCompare(a.year)
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === type
                ? 'bg-linear-to-r from-primary to-accent-pink text-white shadow-md'
                : 'bg-card text-text-secondary border border-border hover:border-primary/30'
            }`}
          >
            {type}
          </button>
        ))}

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="ml-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-medium bg-card text-text-secondary border border-border hover:border-primary/30 transition-all"
        >
          {sortAsc ? <HiChevronUp size={14} /> : <HiChevronDown size={14} />}
          {sortAsc ? 'Plus ancien' : 'Plus récent'}
        </button>
      </div>

      {/* Table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        {/* Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-surface text-xs font-semibold text-text-secondary uppercase tracking-wider border-b border-border">
          <div className="col-span-1">Année</div>
          <div className="col-span-3">Diplôme</div>
          <div className="col-span-3">Établissement</div>
          <div className="col-span-4">Description</div>
          <div className="col-span-1">Type</div>
        </div>

        {/* Rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + sortAsc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {sorted.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 border-b border-border last:border-0 hover:bg-primary/2 transition-colors"
              >
                <div className="col-span-1">
                  <span className="text-sm font-bold bg-linear-to-r from-primary to-accent-pink bg-clip-text text-transparent">
                    {item.year}
                  </span>
                </div>
                <div className="col-span-3">
                  <p className="text-sm font-semibold text-text-primary">{item.diplome}</p>
                </div>
                <div className="col-span-3">
                  <p className="text-sm text-text-secondary">{item.etablissement}</p>
                </div>
                <div className="col-span-4">
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
                <div className="col-span-1">
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${typeColors[item.type] || 'bg-gray-100 text-gray-600'}`}>
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
