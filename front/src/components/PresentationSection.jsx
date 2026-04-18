import { motion } from 'framer-motion';
import {
  HiUser,
  HiDocumentText,
  HiRocketLaunch,
  HiArrowDownTray,
  HiMapPin,
  HiClock,
  HiCheckBadge,
} from 'react-icons/hi2';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function PresentationSection({ data, theme }) {
  const { fiche, description, objectif, cv } = data;

  return (
    <div className="bg-surface py-16 pl-20 md:pl-28 pr-6 md:pr-16 transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">PRÉSENTATION</h2>
          <p className="text-text-secondary text-sm md:text-base max-w-xl">
            Mon profil, mes compétences et mon objectif professionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fiche rapide */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className={`flex items-center gap-3 mb-5 ${theme.accent}`}>
              <HiUser size={22} />
              <h3 className="text-lg font-semibold text-text-primary">Fiche rapide</h3>
            </div>
            <div className="space-y-3">
              <p className="text-xl font-bold text-text-primary">{fiche.titre}</p>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <HiMapPin size={14} />
                {fiche.localisation}
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <HiClock size={14} />
                {fiche.disponibilite}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {fiche.competences.map((comp) => (
                  <span
                    key={comp}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-surface text-text-secondary border border-border"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className={`flex items-center gap-3 mb-5 ${theme.accent}`}>
              <HiDocumentText size={22} />
              <h3 className="text-lg font-semibold text-text-primary">À propos</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
          </motion.div>

          {/* Objectif */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className={`flex items-center gap-3 mb-5 ${theme.accent}`}>
              <HiRocketLaunch size={22} />
              <h3 className="text-lg font-semibold text-text-primary">Objectif</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">{objectif}</p>
          </motion.div>

          {/* CV */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className={`flex items-center gap-3 mb-5 ${theme.accent}`}>
              <HiArrowDownTray size={22} />
              <h3 className="text-lg font-semibold text-text-primary">Mon CV</h3>
            </div>
            <ul className="space-y-2 mb-5">
              {cv.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                  <HiCheckBadge size={16} className={`mt-0.5 shrink-0 ${theme.accent}`} />
                  {point}
                </li>
              ))}
            </ul>
            <button
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${theme.btnPrimary}`}
            >
              <HiArrowDownTray size={16} />
              {cv.downloadLabel}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
