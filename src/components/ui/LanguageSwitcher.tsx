import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    // Récupère le chemin actuel sans la langue
    const pathWithoutLang = location.pathname.replace(/^\/(en|fr)/, '');
    
    // Navigue vers la nouvelle langue
    navigate(`/${lng}${pathWithoutLang}`);
    
    // Change la langue dans i18next
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-primary text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Switch to English"
      >
        🇬🇧 EN
      </motion.button>
      
      <motion.button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'fr'
            ? 'bg-primary text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Passer au français"
      >
        🇫🇷 FR
      </motion.button>
    </div>
  );
}
