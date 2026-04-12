import { motion } from 'framer-motion';
import { HiMapPin, HiClock, HiLanguage } from 'react-icons/hi2';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const infos = [
  {
    icon: HiMapPin,
    label: 'Localisation',
    value: 'Nantes, France (Remote OK)',
    color: 'text-red-500 bg-red-50',
  },
  {
    icon: HiClock,
    label: 'Disponibilité',
    value: 'Immédiate - Temps plein',
    color: 'text-accent-green bg-green-50',
  },
  {
    icon: HiLanguage,
    label: 'Langues',
    value: 'Français (natif) - Anglais (B2)',
    color: 'text-primary bg-primary/5',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-surface pl-20 md:pl-28 pr-6 md:pr-16 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <p className="text-xs tracking-[0.3em] font-medium text-text-secondary mb-2">
          — CONTACT
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Parlons-en
        </h1>
        <p className="text-text-secondary text-lg max-w-xl">
          Une opportunité, un projet, une collaboration ? Je suis disponible et enthousiaste.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border"
        >
          <ContactForm />
        </motion.div>

        {/* Sidebar infos */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Infos pratiques */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h3 className="text-lg font-bold text-text-primary mb-5">Infos pratiques</h3>
            <div className="space-y-4">
              {infos.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${info.color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-text-primary">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h3 className="text-lg font-bold text-text-primary mb-5">Réseaux sociaux</h3>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
