import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const navItems = [
    { key: 'about', path: 'about' },
    { key: 'projects', path: 'projects' },
    { key: 'contact', path: 'contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-12 md:px-16 py-8">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo avec favicon */}
            <Link
              to={`/${currentLang}`}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img src="/favicon.svg" alt="OEKA" className="w-10 h-10" />
            </Link>

            {/* Séparateur vertical */}
            <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

            {/* Navigation Desktop - À gauche avec le logo */}
            <div className="hidden md:flex items-center gap-8">
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
          <div className="flex items-center gap-6">
            {/* CTA Buttons - Style Grafikart - Plus grands */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                to={`/${currentLang}/contact`}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium rounded-md"
              >
                {t('nav.hireMe')}
              </Link>
              <span className="text-gray-400 mx-1">•</span>
              <Link
                to={`/${currentLang}/projects`}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium rounded-md"
              >
                {t('nav.discoverProjects')}
              </Link>
            </div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
