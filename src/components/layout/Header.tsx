import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Container } from '@/components/ui/Container';

export function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

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
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={`/${currentLang}/${item.path}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
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
