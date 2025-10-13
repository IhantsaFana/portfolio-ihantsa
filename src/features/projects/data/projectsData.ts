import type { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Personnel',
    description: 'Portfolio moderne avec React 19, TypeScript et Tailwind CSS',
    longDescription: 'Un portfolio personnel moderne développé avec les dernières technologies web. Inclut un système multilingue, un mode sombre/clair, et des animations fluides.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18next'],
    category: 'web',
    featured: true,
    liveUrl: 'https://oeka.mg',
    githubUrl: 'https://github.com/IhantsaFana/portfolio-ihantsa',
    completedAt: '2025-01',
    challenge: 'Créer un portfolio qui se démarque avec une excellente performance et un SEO optimisé.',
    solution: 'Utilisation de React 19 avec SSR, optimisation des images, et implémentation complète du SEO technique.'
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Mobile App',
    description: 'Application mobile e-commerce avec Flutter et Firebase',
    longDescription: 'Application mobile complète pour le commerce électronique avec gestion des commandes, paiements intégrés et interface utilisateur moderne.',
    image: '/projects/ecommerce-app.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe', 'Provider'],
    category: 'mobile',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    completedAt: '2024-12',
    challenge: 'Intégrer un système de paiement sécurisé et gérer l\'état complexe de l\'application.',
    solution: 'Implémentation de Stripe pour les paiements et utilisation du pattern Provider pour la gestion d\'état.'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Assistant',
    description: 'Assistant IA conversationnel avec OpenAI GPT-4',
    longDescription: 'Chatbot intelligent capable de répondre aux questions, d\'analyser des documents et d\'assister dans diverses tâches professionnelles.',
    image: '/projects/ai-chatbot.jpg',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'WebSocket'],
    category: 'ai',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    completedAt: '2024-11',
    challenge: 'Créer une interface conversationnelle naturelle avec des réponses contextuelles.',
    solution: 'Utilisation de l\'API OpenAI avec un système de mémoire conversationnelle et WebSocket pour le temps réel.'
  },
  {
    id: 'task-management',
    title: 'Task Management Platform',
    description: 'Plateforme de gestion de tâches collaborative',
    longDescription: 'Plateforme web complète pour la gestion de projets et tâches en équipe avec tableaux Kanban, notifications temps réel et rapports.',
    image: '/projects/task-management.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    category: 'fullstack',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    completedAt: '2024-10',
    challenge: 'Gérer la collaboration en temps réel entre plusieurs utilisateurs.',
    solution: 'Implémentation de Socket.io pour les mises à jour temps réel et Prisma pour la gestion de base de données.'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'Application météo avec géolocalisation et prévisions',
    longDescription: 'Application mobile de prévisions météorologiques avec géolocalisation automatique, cartes interactives et notifications d\'alertes.',
    image: '/projects/weather-app.jpg',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API', 'Maps'],
    category: 'mobile',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    completedAt: '2024-09',
    challenge: 'Intégrer plusieurs APIs météo et gérer la géolocalisation précise.',
    solution: 'Combinaison de plusieurs sources de données météo et implémentation d\'un système de cache intelligent.'
  },
  {
    id: 'blog-cms',
    title: 'Blog CMS',
    description: 'Système de gestion de contenu pour blogs',
    longDescription: 'CMS complet pour la création et gestion de blogs avec éditeur WYSIWYG, gestion des médias et SEO intégré.',
    image: '/projects/blog-cms.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TinyMCE'],
    category: 'fullstack',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    completedAt: '2024-08',
    challenge: 'Créer un éditeur de contenu riche et intuitif avec prévisualisation en temps réel.',
    solution: 'Intégration de TinyMCE avec un système de prévisualisation live et optimisation SEO automatique.'
  }
];

export const technologies = [
  'All',
  'React',
  'TypeScript',
  'Flutter',
  'Python',
  'Next.js',
  'Node.js',
  'Firebase',
  'OpenAI API',
  'Tailwind CSS'
];

export const categories = [
  { key: 'all', label: 'Tous' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'ai', label: 'IA' },
  { key: 'fullstack', label: 'Full-Stack' }
];
