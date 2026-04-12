import {
  HiCodeBracket,
  HiBolt,
  HiBuildingStorefront,
} from 'react-icons/hi2';

const homeData = [
  {
    id: 'dev',
    tab: 'Dev Junior',
    icon: HiCodeBracket,
    theme: {
      bg: 'bg-surface-dark',
      text: 'text-text-light',
      accent: 'text-primary-light',
      gradient: 'from-primary via-purple-600 to-accent-pink',
      tagBg: 'bg-white/10 text-white',
      btnPrimary: 'bg-linear-to-r from-primary to-accent-pink text-white',
      btnSecondary: 'border border-white/30 text-white hover:bg-white/10',
      cardBg: 'bg-white/5 backdrop-blur-md border border-white/10',
    },
    hero: {
      badge: 'Disponible - Nantes & Remote',
      subtitle: 'PORTFOLIO',
      name: 'Alex Dupont',
      title: 'Développeur Web',
      titleHighlight: 'Junior',
      description:
        'Rejoindre une équipe tech dynamique pour créer des expériences web modernes, performantes et accessibles.',
      tags: ['React & TypeScript', 'UI/UX Avancée', 'APIs REST & GraphQL', 'Projets fullstack'],
    },
    presentation: {
      fiche: {
        titre: 'Développeur Web Junior',
        localisation: 'Nantes, France',
        disponibilite: 'Immédiate - Temps plein',
        competences: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'],
      },
      description:
        "Passionné par le développement web depuis plusieurs années, j'ai acquis des compétences solides en front-end et back-end grâce à des formations certifiantes et des projets personnels. Je maîtrise React, TypeScript et les architectures modernes.",
      objectif:
        "Intégrer une équipe de développement dynamique pour contribuer à des projets innovants, monter en compétences et évoluer vers un poste de développeur confirmé.",
      cv: {
        points: ['Formation Meta Front-End Developer', 'Certification Agile/Scrum', '3 projets fullstack réalisés'],
        downloadLabel: 'Télécharger mon CV Dev',
      },
    },
  },
  {
    id: 'electricien',
    tab: 'Électricien',
    icon: HiBolt,
    theme: {
      bg: 'bg-linear-to-br from-amber-950 via-orange-950 to-yellow-950',
      text: 'text-amber-50',
      accent: 'text-accent-orange',
      gradient: 'from-accent-orange via-amber-500 to-accent-yellow',
      tagBg: 'bg-white/10 text-amber-100',
      btnPrimary: 'bg-linear-to-r from-accent-orange to-accent-yellow text-white',
      btnSecondary: 'border border-amber-300/30 text-amber-100 hover:bg-white/10',
      cardBg: 'bg-white/5 backdrop-blur-md border border-amber-200/10',
    },
    hero: {
      badge: 'Disponible - Nantes & Périphérie',
      subtitle: 'PORTFOLIO',
      name: 'Alex Dupont',
      title: 'Électricien',
      titleHighlight: 'Qualifié',
      description:
        "Expérience en installations électriques résidentielles et tertiaires. Habilitation électrique à jour, rigueur et respect des normes.",
      tags: ['Habilitation BR', 'NFC 15-100', 'Résidentiel & Tertiaire', 'Dépannage'],
    },
    presentation: {
      fiche: {
        titre: 'Électricien qualifié',
        localisation: 'Nantes & Périphérie',
        disponibilite: 'Immédiate',
        competences: ['Câblage', 'Tableaux électriques', 'Dépannage', 'Normes NFC', 'Habilitation BR'],
      },
      description:
        "Fort de plusieurs années d'expérience en électricité résidentielle et tertiaire, je maîtrise les installations complètes, la mise en conformité et le dépannage. Rigoureux et autonome, je respecte les normes en vigueur.",
      objectif:
        "Mettre mes compétences techniques au service d'une entreprise d'électricité ou de maintenance pour des chantiers variés et formateurs.",
      cv: {
        points: ['CAP & BEP Électrotechnique', 'Habilitation électrique BR', '3+ ans d\'expérience terrain'],
        downloadLabel: 'Télécharger mon CV Électricien',
      },
    },
  },
  {
    id: 'commerce',
    tab: 'Employé de commerce',
    icon: HiBuildingStorefront,
    theme: {
      bg: 'bg-linear-to-br from-emerald-950 via-teal-950 to-cyan-950',
      text: 'text-emerald-50',
      accent: 'text-accent-green',
      gradient: 'from-accent-green via-emerald-500 to-accent-blue',
      tagBg: 'bg-white/10 text-emerald-100',
      btnPrimary: 'bg-linear-to-r from-accent-green to-accent-blue text-white',
      btnSecondary: 'border border-emerald-300/30 text-emerald-100 hover:bg-white/10',
      cardBg: 'bg-white/5 backdrop-blur-md border border-emerald-200/10',
    },
    hero: {
      badge: 'Disponible - Nantes',
      subtitle: 'PORTFOLIO',
      name: 'Alex Dupont',
      title: 'Employé de',
      titleHighlight: 'Commerce',
      description:
        "Expérience en vente, relation client et gestion de rayon. Dynamique, à l'écoute et orienté résultats.",
      tags: ['Relation client', 'Gestion de rayon', 'Merchandising', 'Vente B2B'],
    },
    presentation: {
      fiche: {
        titre: 'Employé de commerce',
        localisation: 'Nantes, France',
        disponibilite: 'Immédiate',
        competences: ['Vente', 'Relation client', 'Merchandising', 'Gestion stock', 'Encaissement'],
      },
      description:
        "Avec un BTS NRC et un Bac Pro Commerce, j'ai développé de solides compétences en vente, négociation et gestion commerciale. Mon parcours m'a appris à être polyvalent et orienté satisfaction client.",
      objectif:
        "Rejoindre une enseigne ou une équipe commerciale pour contribuer activement au développement des ventes et à la fidélisation de la clientèle.",
      cv: {
        points: ['BTS NRC', 'Bac Pro Commerce', 'Expérience en vente et relation client'],
        downloadLabel: 'Télécharger mon CV Commerce',
      },
    },
  },
];

export default homeData;
