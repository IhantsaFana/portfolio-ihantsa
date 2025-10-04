import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { motion } from 'framer-motion';

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
    <motion.header
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={`/${currentLang}`}
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
          >
            OEKA
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={`/${currentLang}/${item.path}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
