import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa6';

const socials = [
  { name: 'GitHub', icon: FaGithub, url: '#', color: 'hover:bg-gray-900 hover:text-white' },
  { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: 'hover:bg-blue-600 hover:text-white' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:contact@example.com', color: 'hover:bg-primary hover:text-white' },
  { name: 'Twitter', icon: FaTwitter, url: '#', color: 'hover:bg-sky-500 hover:text-white' },
];

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border text-text-secondary
              transition-all duration-300 ${social.color}`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{social.name}</span>
          </motion.a>
        );
      })}
    </div>
  );
}
