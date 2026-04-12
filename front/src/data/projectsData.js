const projectsData = [
  // DEV - 3 projets
  {
    id: 1,
    category: 'Dev',
    year: '2024',
    title: 'TaskFlow Dashboard',
    description: 'Application de gestion de projets en temps réel',
    longDescription:
      "Dashboard complet permettant de gérer des projets, des tâches et des équipes en temps réel. Fonctionnalités de drag & drop, notifications push et analytics intégrés.",
    technologies: ['React', 'TypeScript', 'Supabase'],
    image: null,
    link: '#',
  },
  {
    id: 2,
    category: 'Dev',
    year: '2024',
    title: 'EcoShop',
    description: 'E-commerce éco-responsable avec paiement Stripe',
    longDescription:
      "Plateforme e-commerce dédiée aux produits éco-responsables. Panier, paiement sécurisé via Stripe, gestion des commandes et tableau de bord vendeur.",
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    image: null,
    link: '#',
  },
  {
    id: 3,
    category: 'Dev',
    year: '2023',
    title: 'Portfolio Interactif',
    description: 'Portfolio animé avec Three.js et effets 3D',
    longDescription:
      "Portfolio personnel avec des animations 3D, des transitions fluides et un design immersif. Utilisation de Three.js pour les effets visuels.",
    technologies: ['React', 'Three.js', 'Framer Motion'],
    image: null,
    link: '#',
  },
  // ÉLECTRICIEN - 3 expériences + 2 projets B2B
  {
    id: 4,
    category: 'Électricité',
    year: '2022',
    title: 'Installation résidentielle complète',
    description: 'Rénovation électrique totale d\'un logement de 120m²',
    longDescription:
      "Rénovation complète de l'installation électrique d'une maison : tableau, câblage, prises, éclairage LED, VMC. Mise aux normes NFC 15-100.",
    technologies: ['NFC 15-100', 'Tableaux', 'LED'],
    image: null,
    link: null,
  },
  {
    id: 5,
    category: 'Électricité',
    year: '2021',
    title: 'Maintenance tertiaire',
    description: 'Maintenance électrique dans un complexe de bureaux',
    longDescription:
      "Maintenance préventive et curative des installations électriques d'un complexe de bureaux de 2000m². Dépannage, remplacement de composants, contrôle des armoires.",
    technologies: ['Dépannage', 'Armoires', 'Tertiaire'],
    image: null,
    link: null,
  },
  {
    id: 6,
    category: 'Électricité',
    year: '2020',
    title: 'Chantier neuf collectif',
    description: 'Installation électrique dans un immeuble neuf',
    longDescription:
      "Participation à la mise en place de l'installation électrique complète d'un immeuble de 24 logements neufs. Travail en équipe, respect des délais et des normes.",
    technologies: ['Collectif', 'Neuf', 'Équipe'],
    image: null,
    link: null,
  },
  {
    id: 7,
    category: 'Électricité',
    year: '2023',
    title: 'Tableau Électrique 3D',
    description: 'Modélisation 3D d\'installations électriques',
    longDescription:
      "Projet B2B de modélisation 3D de tableaux et installations électriques pour des entreprises. Visualisation interactive pour les clients et les équipes terrain.",
    technologies: ['Three.js', 'React', 'WebGL'],
    image: null,
    link: '#',
  },
  {
    id: 8,
    category: 'Électricité',
    year: '2023',
    title: 'Outil de devis automatisé',
    description: 'Application de génération de devis pour électriciens',
    longDescription:
      "Développement d'un outil B2B permettant aux électriciens de générer des devis automatiquement à partir de plans et de métrés. Gain de temps considérable.",
    technologies: ['React', 'Node.js', 'PDF'],
    image: null,
    link: '#',
  },
  // COMMERCE - 1 expérience
  {
    id: 9,
    category: 'Commerce',
    year: '2019',
    title: 'Responsable de rayon',
    description: 'Gestion de rayon en grande distribution',
    longDescription:
      "Gestion complète d'un rayon en grande surface : commandes, merchandising, gestion des stocks, animation commerciale et management d'une équipe de 3 personnes.",
    technologies: ['Merchandising', 'Management', 'Gestion stock'],
    image: null,
    link: null,
  },
];

export default projectsData;
