import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiLockClosed,
  HiTrash,
  HiPlus,
  HiArrowUpTray,
  HiDocumentText,
  HiAcademicCap,
} from 'react-icons/hi2';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password, (ok) => {
      if (!ok) setError(true);
    });
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-2xl p-8 shadow-lg border border-border w-full max-w-sm"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
          <HiLockClosed size={28} />
        </div>
        <h2 className="text-xl font-bold text-text-primary text-center mb-2">Administration</h2>
        <p className="text-sm text-text-secondary text-center mb-6">
          Entrez le mot de passe pour accéder au panneau d'administration.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Mot de passe"
            className={`w-full px-4 py-3 rounded-xl bg-surface border text-text-primary text-sm outline-none transition-all
              focus:ring-2 focus:ring-primary/30 focus:border-primary
              ${error ? 'border-red-400 animate-shake' : 'border-border'}`}
          />
          {error && <p className="text-xs text-red-500">Mot de passe incorrect</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-primary to-accent-pink text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            Se connecter
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function AdminPanel({ token }) {
  const [activeTab, setActiveTab] = useState('parcours');
  const [parcoursList, setParcoursList] = useState([]);
  const [newEntry, setNewEntry] = useState({ year: '', title: '', location: '', description: '', type: 'Formation' });
  const [cvFiles, setCvFiles] = useState({ dev: null, electricien: null, commerce: null });
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState({ parcours: false, messages: false });

  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  const loadParcours = async () => {
    try {
      const res = await fetch(`${API_URL}/api/parcours`, { headers });
      if (res.ok) {
        const data = await res.json();
        setParcoursList(data);
        setLoaded((p) => ({ ...p, parcours: true }));
      }
    } catch { /* API not yet available */ }
  };

  const loadMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/api/contact/messages`, { headers });
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
        setLoaded((p) => ({ ...p, messages: true }));
      }
    } catch { /* API not yet available */ }
  };

  const handleAddEntry = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/parcours`, {
        method: 'POST',
        headers,
        body: JSON.stringify(newEntry),
      });
      if (res.ok) {
        setNewEntry({ year: '', title: '', location: '', description: '', type: 'Formation' });
        loadParcours();
      }
    } catch { /* API not yet available */ }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/api/parcours/${id}`, { method: 'DELETE', headers });
      loadParcours();
    } catch { /* API not yet available */ }
  };

  const handleCvUpload = async (metier) => {
    const file = cvFiles[metier];
    if (!file) return;
    const formData = new FormData();
    formData.append('cv', file);
    try {
      await fetch(`${API_URL}/api/cv/${metier}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      setCvFiles((prev) => ({ ...prev, [metier]: null }));
    } catch { /* API not yet available */ }
  };

  const tabs = [
    { id: 'parcours', label: 'Parcours', icon: HiAcademicCap },
    { id: 'cv', label: 'CV', icon: HiDocumentText },
    { id: 'messages', label: 'Messages', icon: HiDocumentText },
  ];

  return (
    <div className="min-h-screen bg-surface pl-20 md:pl-28 pr-6 md:pr-16 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-text-primary mb-8"
      >
        Panneau d'administration
      </motion.h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === 'parcours' && !loaded.parcours) loadParcours();
                if (tab.id === 'messages' && !loaded.messages) loadMessages();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-card text-text-secondary border border-border hover:border-primary/30'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {/* PARCOURS TAB */}
        {activeTab === 'parcours' && (
          <motion.div key="parcours" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Add form */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <HiPlus size={18} className="text-primary" />
                Ajouter un diplôme / expérience
              </h3>
              <form onSubmit={handleAddEntry} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text" placeholder="Année" value={newEntry.year}
                  onChange={(e) => setNewEntry({ ...newEntry, year: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-surface border border-border text-sm outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="text" placeholder="Titre" value={newEntry.title}
                  onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-surface border border-border text-sm outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="text" placeholder="Établissement / Lieu" value={newEntry.location}
                  onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-surface border border-border text-sm outline-none focus:ring-2 focus:ring-primary/30"
                />
                <select
                  value={newEntry.type}
                  onChange={(e) => setNewEntry({ ...newEntry, type: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-surface border border-border text-sm outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {['Formation', 'Certification', 'CAP', 'BEP', 'Bac', 'BTS', 'Emploi'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Description" value={newEntry.description}
                  onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
                  className="md:col-span-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-sm outline-none resize-none focus:ring-2 focus:ring-primary/30"
                  rows={3}
                />
                <button
                  type="submit"
                  className="md:col-span-2 py-2.5 rounded-xl bg-linear-to-r from-primary to-accent-pink text-white font-medium text-sm hover:shadow-lg transition-all"
                >
                  Ajouter
                </button>
              </form>
            </div>

            {/* List */}
            <div className="space-y-3">
              {parcoursList.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="flex items-center justify-between bg-card rounded-xl p-4 border border-border"
                >
                  <div>
                    <span className="text-xs font-bold text-primary mr-2">{item.year}</span>
                    <span className="text-sm font-semibold text-text-primary">{item.title}</span>
                    <span className="text-xs text-text-secondary ml-2">— {item.location}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-all"
                  >
                    <HiTrash size={16} />
                  </button>
                </motion.div>
              ))}
              {parcoursList.length === 0 && (
                <p className="text-sm text-text-secondary text-center py-8">
                  Aucune entrée. Le back-end n'est peut-être pas encore connecté.
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* CV TAB */}
        {activeTab === 'cv' && (
          <motion.div key="cv" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['dev', 'electricien', 'commerce'].map((metier) => (
                <div key={metier} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-text-primary mb-4 capitalize flex items-center gap-2">
                    <HiArrowUpTray size={18} className="text-primary" />
                    CV {metier === 'electricien' ? 'Électricien' : metier === 'dev' ? 'Développeur' : 'Commerce'}
                  </h3>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setCvFiles((prev) => ({ ...prev, [metier]: e.target.files[0] }))}
                    className="text-sm text-text-secondary mb-4 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:bg-primary/10 file:text-primary file:cursor-pointer"
                  />
                  <button
                    onClick={() => handleCvUpload(metier)}
                    disabled={!cvFiles[metier]}
                    className="w-full py-2.5 rounded-xl bg-linear-to-r from-primary to-accent-pink text-white font-medium text-sm hover:shadow-lg transition-all disabled:opacity-40"
                  >
                    Uploader
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          <motion.div key="messages" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-text-primary">{msg.nom}</span>
                    <span className="text-xs text-text-secondary">{msg.email}</span>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-lg">{msg.sujet}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{msg.message}</p>
                  {msg.created_at && (
                    <p className="text-xs text-text-secondary mt-2 opacity-60">
                      {new Date(msg.created_at).toLocaleString('fr-FR')}
                    </p>
                  )}
                </div>
              ))}
              {messages.length === 0 && (
                <p className="text-sm text-text-secondary text-center py-8">
                  Aucun message reçu. Le back-end n'est peut-être pas encore connecté.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Admin() {
  const [token, setToken] = useState(null);

  const handleLogin = async (password, callback) => {
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token || password);
        callback(true);
      } else {
        callback(false);
      }
    } catch {
      setToken(password);
      callback(true);
    }
  };

  if (!token) return <LoginScreen onLogin={handleLogin} />;
  return <AdminPanel token={token} />;
}
