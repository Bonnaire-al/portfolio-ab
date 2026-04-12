import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiArrowTopRightOnSquare } from 'react-icons/hi2';

const categoryColors = {
  Dev: 'text-primary',
  Électricité: 'text-accent-orange',
  Commerce: 'text-accent-green',
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-border"
        >
          {/* Header image */}
          <div className="relative h-56 bg-linear-to-br from-primary/10 to-accent-pink/10">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl opacity-20">
                  {project.category === 'Dev' ? '💻' : project.category === 'Électricité' ? '⚡' : '🏪'}
                </span>
              </div>
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
            >
              <HiXMark size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-sm font-medium ${categoryColors[project.category]}`}>
                {project.category}
              </span>
              {project.year && (
                <span className="text-xs text-text-secondary bg-surface px-2 py-0.5 rounded-md">
                  {project.year}
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {project.title}
            </h2>

            <p className="text-text-secondary leading-relaxed mb-6">
              {project.longDescription}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-sm bg-primary/5 text-primary border border-primary/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External link */}
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-primary to-accent-pink text-white font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <HiArrowTopRightOnSquare size={16} />
                Voir le projet
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
