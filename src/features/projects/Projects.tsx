import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SEO } from '@/components/ui/SEO';

export function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('projects.title')} />
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t('projects.title')}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Les projets seront ajoutés ici */}
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
              Projects coming soon...
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
