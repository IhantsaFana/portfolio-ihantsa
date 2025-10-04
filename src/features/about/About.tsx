import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SEO } from '@/components/ui/SEO';

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('about.title')} />
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            {t('about.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>
      </section>
    </>
  );
}
