import { motion } from 'framer-motion';

const categoryColors = {
  Dev: 'text-primary bg-primary/10',
  Électricité: 'text-accent-orange bg-accent-orange/10',
  Commerce: 'text-accent-green bg-accent-green/10',
};

export default function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-border transition-shadow duration-300"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/5 to-accent-pink/5">
            <span className="text-4xl opacity-30">
              {project.category === 'Dev' ? '💻' : project.category === 'Électricité' ? '⚡' : '🏪'}
            </span>
          </div>
        )}
        {project.year && (
          <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-bold
            bg-linear-to-r from-primary to-accent-pink text-white shadow-md`}>
            {project.year}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium mb-3 ${categoryColors[project.category]}`}>
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs bg-surface text-text-secondary border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
