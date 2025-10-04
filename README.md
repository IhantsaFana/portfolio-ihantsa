# 🌟 Portfolio OEKA - Modern Full Stack Developer Portfolio

Portfolio moderne et performant construit avec les dernières technologies web 2025.

## 🚀 Stack Technique

- ⚡ **Vite 7** - Build tool ultra-rapide
- ⚛️ **React 19** - Avec Document Metadata natif
- 📘 **TypeScript 5.9** - Type safety
- 🎨 **Tailwind CSS v4.1** - Styling moderne avec plugin Vite
- 🌐 **React Router DOM v7** - Routing avec support multilingue
- 🌍 **i18next** - Internationalisation (EN/FR)
- 🎭 **Framer Motion** - Animations fluides
- 🌓 **Dark/Light Mode** - Thème adaptatif
- 📱 **Mobile-First** - Design responsive

## 📁 Structure du Projet

```
portfolio-ihantsa/
├── public/
│   └── locales/          # Fichiers de traduction
│       ├── en/
│       │   └── translation.json
│       └── fr/
│           └── translation.json
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── layout/      # Header, Footer, Layout
│   │   └── ui/          # SEO, ThemeToggle, LanguageSwitcher
│   ├── features/        # Features par domaine
│   │   ├── home/
│   │   ├── about/
│   │   ├── projects/
│   │   └── contact/
│   ├── contexts/        # React Contexts (Theme)
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Fonctions utilitaires
│   ├── types/           # Types TypeScript
│   ├── config/          # Configuration (i18n)
│   ├── router.tsx       # Configuration des routes
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## 🛠️ Installation

```bash
# Installer les dépendances avec Yarn
yarn install

# Lancer le serveur de développement
yarn dev

# Build pour production
yarn build

# Preview du build
yarn preview
```

## 🌐 Routes Multilingues

Le portfolio supporte deux langues avec des URLs dédiées :

- **Anglais (par défaut)** : `https://oeka.mg/en/`
- **Français** : `https://oeka.mg/fr/`

### Structure des URLs :
```
/en              → Page d'accueil (EN)
/en/about        → À propos (EN)
/en/projects     → Projets (EN)
/en/contact      → Contact (EN)

/fr              → Page d'accueil (FR)
/fr/about        → À propos (FR)
/fr/projects     → Projets (FR)
/fr/contact      → Contact (FR)
```

## 🎨 Fonctionnalités

### ✅ SEO Optimisé
- Meta tags dynamiques avec react-helmet-async
- Balises `hreflang` pour le multilingue
- Open Graph et Twitter Cards
- URLs canoniques
- Sitemap par langue

### ✅ Dark/Light Mode
- Détection automatique de la préférence système
- Sauvegarde du choix utilisateur
- Transition fluide entre les thèmes
- Toggle animé avec Framer Motion

### ✅ Internationalisation
- Détection automatique de la langue du navigateur
- Changement de langue sans rechargement
- Traductions chargées dynamiquement
- Support de langues illimitées

### ✅ Performance
- Code splitting automatique
- Lazy loading des routes
- Optimisation des images
- Cache des traductions

## 🎯 Commandes Disponibles

```bash
yarn dev          # Serveur de développement
yarn build        # Build pour production
yarn preview      # Preview du build
yarn lint         # Linter le code
```

## 🌍 Domaine

Le portfolio sera hébergé sur : **https://oeka.mg**

## 📝 Configuration

### Modifier les traductions
Éditez les fichiers dans `public/locales/[langue]/translation.json`

### Ajouter une nouvelle langue
1. Créer `public/locales/[code-langue]/translation.json`
2. Ajouter la langue dans `src/config/i18n.ts`
3. Ajouter le bouton dans `src/components/ui/LanguageSwitcher.tsx`

### Personnaliser les couleurs
Modifier les variables CSS dans `src/index.css` :
```css
@theme {
  --color-primary: oklch(0.6 0.2 250);
  --color-secondary: oklch(0.5 0.15 200);
  --color-accent: oklch(0.7 0.25 150);
}
```

## 📦 Technologies Utilisées

| Technologie | Version | Usage |
|------------|---------|-------|
| React | 19.1.1 | UI Framework |
| TypeScript | 5.9.3 | Type Safety |
| Vite | 7.1.7 | Build Tool |
| Tailwind CSS | 4.1.14 | Styling |
| React Router | 7.9.3 | Routing |
| i18next | 25.5.3 | i18n |
| Framer Motion | 12.23.22 | Animations |

## 🚀 Déploiement

Le site est optimisé pour être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Tout hébergeur supportant les SPAs

## 📄 License

© 2025 OEKA. Tous droits réservés.
