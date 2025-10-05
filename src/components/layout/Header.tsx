import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Container } from '@/components/ui/Container';

export function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();

  // Fonction pour vérifier si la page est active
  const isActivePage = (path: string) => {
    const currentPath = location.pathname;
    
    // Page d'accueil - vérification exacte
    if (path === '') {
      return currentPath === `/${currentLang}` || currentPath === `/${currentLang}/`;
    }
    
    // Autres pages - vérification exacte aussi
    const expectedPath = `/${currentLang}/${path}`;
    return currentPath === expectedPath || currentPath === `${expectedPath}/`;
  };

  const navItems = [
    { key: 'home', path: '' },
    { key: 'about', path: 'about' },
    { key: 'projects', path: 'projects' },
    { key: 'contact', path: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <Container className="py-3 sm:py-4 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo + Navigation */}
          <div className="flex items-center gap-6">
            {/* Logo avec favicon */}
            <Link
              to={`/${currentLang}`}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img src="/favicon.svg" alt="OEKA" className="w-8 h-8" />
            </Link>

            {/* Séparateur vertical */}
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

            {/* Navigation Desktop - À gauche avec le logo */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = isActivePage(item.path);
                return (
                  <Link
                    key={item.key}
                    to={`/${currentLang}/${item.path}`}
                    className={`
                      relative font-medium transition-all duration-300 py-2 px-3 rounded-lg
                      ${isActive 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {t(`nav.${item.key}`)}
                    {/* Indicateur animé pour page active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section - CTA + Language */}
          <div className="flex items-center gap-4">
            {/* CTA Buttons - Taille réduite */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                to={`/${currentLang}/contact`}
                className="px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium rounded-md text-sm"
              >
                {t('nav.hireMe')}
              </Link>
              <span className="text-gray-400 mx-1">•</span>
              <Link
                to={`/${currentLang}/projects`}
                className="px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium rounded-md text-sm"
              >
                {t('nav.discoverProjects')}
              </Link>
            </div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}
