import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import projectsData from '../data/projectsData';

const filters = ['Tous', 'Dev', 'Électricité', 'Commerce'];

const filterColors = {
  Tous: 'bg-linear-to-r from-primary to-accent-pink text-white',
  Dev: 'bg-primary/10 text-primary',
  Électricité: 'bg-accent-orange/10 text-accent-orange',
  Commerce: 'bg-accent-green/10 text-accent-green',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'Tous'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-surface pl-20 md:pl-28 pr-6 md:pr-16 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <p className="text-xs tracking-[0.3em] font-medium text-text-secondary mb-2">
          — PORTFOLIO
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Mes Projets
        </h1>
        <p className="text-text-secondary text-lg">
          Des projets concrets, du code propre, des résultats réels.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === filter
                ? filterColors[filter] + ' shadow-md'
                : 'bg-card text-text-secondary border border-border hover:border-primary/30'
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
