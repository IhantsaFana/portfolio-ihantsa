import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';

interface TechLogo {
  name: string;
  logo: string;
  category: string;
}

export function TechLogos() {
  const { t } = useTranslation();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [autoSelectedIndex, setAutoSelectedIndex] = useState<number>(-1);
  const [isUserHovering, setIsUserHovering] = useState<boolean>(false);

  const technologies: TechLogo[] = [
    { name: 'React', logo: '/skills/react-2.svg', category: 'Frontend' },
    { name: 'React Native', logo: '/skills/react-native-1.svg', category: 'Mobile' },
    { name: 'Flutter', logo: '/skills/flutter-logo.svg', category: 'Mobile' },
    { name: 'Python', logo: '/skills/python-5.svg', category: 'Backend' },
    { name: 'Django', logo: '/skills/django-logo-positive.svg', category: 'Backend' },
    { name: 'Tailwind CSS', logo: '/skills/tailwind-css-2.svg', category: 'Frontend' },
    { name: 'Vite', logo: '/skills/vitejs.svg', category: 'Tools' },
  ];

  // Système de sélection automatique toutes les 3 secondes
  useEffect(() => {
    if (!isUserHovering) {
      // Délai initial de 3 secondes avant de commencer
      const initialTimeout = setTimeout(() => {
        setAutoSelectedIndex(0); // Commencer par le premier logo
      }, 3000);

      // Intervalle pour continuer la rotation
      const interval = setInterval(() => {
        setAutoSelectedIndex((prevIndex) => 
          (prevIndex + 1) % technologies.length
        );
      }, 3000); // 3 secondes entre chaque sélection

      return () => {
        clearTimeout(initialTimeout);
        clearInterval(interval);
      };
    }
  }, [isUserHovering, technologies.length]);

  // Gérer le hover utilisateur
  const handleMouseEnter = (techName: string) => {
    setIsUserHovering(true);
    setHoveredTech(techName);
  };

  const handleMouseLeave = () => {
    setIsUserHovering(false);
    setHoveredTech(null);
  };

  return (
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {t('about.technologies.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('about.technologies.subtitle')}
        </p>
      </div>

      {/* Conteneur des logos avec animation étoiles flottantes */}
      <div className="relative w-full max-w-6xl mx-auto h-[28rem] overflow-hidden">
        {/* Logos flottants comme des étoiles */}
        {technologies.map((tech, index) => {
          // Positions optimisées pour éviter les coupures
          const positions = [
            { x: 15, y: 25 }, { x: 75, y: 20 }, { x: 20, y: 60 },
            { x: 80, y: 55 }, { x: 45, y: 15 }, { x: 65, y: 70 },
            { x: 35, y: 75 }
          ];
          
          const position = positions[index] || { x: 50, y: 50 };
          
          // Déterminer si ce logo est sélectionné (hover utilisateur ou sélection auto)
          const isUserHovered = hoveredTech === tech.name;
          const isAutoSelected = !isUserHovering && autoSelectedIndex === index && autoSelectedIndex >= 0;
          const isSelected = isUserHovered || isAutoSelected;

          return (
            <div
              key={tech.name}
              className={`absolute transition-all duration-500 ease-out ${
                isSelected ? 'z-20' : 'z-10'
              }`}
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}
              onMouseEnter={() => handleMouseEnter(tech.name)}
              onMouseLeave={() => handleMouseLeave()}
            >
              {/* Container du logo avec effet hover */}
              <div
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'scale-125'
                    : 'scale-100 hover:scale-110'
                }`}
              >
                {/* Effet oval avec border flou au hover */}
                {isSelected && (
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-blue-600/30 rounded-full blur-xl opacity-80 animate-pulse"></div>
                )}
                {isSelected && (
                  <div className="absolute -inset-3 border-2 border-blue-400/50 rounded-full blur-sm"></div>
                )}
                
                {/* Logo */}
                <div
                  className={`relative w-16 h-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 ${
                    isSelected
                      ? 'shadow-2xl scale-110'
                      : 'shadow-md hover:shadow-xl'
                  }`}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`w-full h-full object-contain ${
                      tech.name === 'Django' ? 'dark:invert' : ''
                    }`}
                    loading="lazy"
                  />
                </div>

                {/* Tooltip avec nom de la technologie */}
                {isSelected && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                      {tech.name}
                      <div className="text-xs opacity-75 mt-1">{tech.category}</div>
                      {/* Flèche du tooltip */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </Container>
  );
}
