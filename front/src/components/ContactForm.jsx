import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi2';

const subjects = [
  'Opportunité professionnelle',
  'Projet de collaboration',
  'Demande de devis',
  'Question générale',
  'Autre',
];

export default function ContactForm() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: subjects[0], message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.nom.trim()) errs.nom = 'Le nom est requis';
    if (!form.email.trim()) errs.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email invalide';
    if (!form.message.trim()) errs.message = 'Le message est requis';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ nom: '', email: '', sujet: subjects[0], message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status) setStatus(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nom */}
      <div>
        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Nom
        </label>
        <input
          type="text"
          value={form.nom}
          onChange={(e) => handleChange('nom', e.target.value)}
          placeholder="Alexandre Martin"
          className={`w-full px-4 py-3 rounded-xl bg-surface border text-text-primary text-sm outline-none transition-all duration-300
            focus:ring-2 focus:ring-primary/30 focus:border-primary
            ${errors.nom ? 'border-red-400' : 'border-border'}`}
        />
        {errors.nom && <p className="text-xs text-red-500 mt-1">{errors.nom}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="vous@email.com"
          className={`w-full px-4 py-3 rounded-xl bg-surface border text-text-primary text-sm outline-none transition-all duration-300
            focus:ring-2 focus:ring-primary/30 focus:border-primary
            ${errors.email ? 'border-red-400' : 'border-border'}`}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Sujet */}
      <div>
        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Sujet
        </label>
        <select
          value={form.sujet}
          onChange={(e) => handleChange('sujet', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm outline-none transition-all duration-300
            focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none cursor-pointer"
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Votre message..."
          rows={5}
          className={`w-full px-4 py-3 rounded-xl bg-surface border text-text-primary text-sm outline-none resize-none transition-all duration-300
            focus:ring-2 focus:ring-primary/30 focus:border-primary
            ${errors.message ? 'border-red-400' : 'border-border'}`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white shadow-lg transition-all duration-300
          ${status === 'success'
            ? 'bg-accent-green'
            : status === 'error'
              ? 'bg-red-500'
              : 'bg-linear-to-r from-primary to-accent-pink hover:shadow-xl'
          }`}
      >
        {status === 'sending' ? (
          <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
        ) : status === 'success' ? (
          <>
            <HiCheckCircle size={18} />
            Message envoyé !
          </>
        ) : status === 'error' ? (
          <>
            <HiExclamationCircle size={18} />
            Erreur, réessayez
          </>
        ) : (
          <>
            <HiPaperAirplane size={16} />
            Envoyer le message
          </>
        )}
      </motion.button>
    </form>
  );
}
