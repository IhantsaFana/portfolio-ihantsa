import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/ui/SEO';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      <SEO />
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Plus d'espace et mieux centré */}
            <div className="text-gray-900 dark:text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('home.heroTitle').split(' ').map((word, index) => 
                  word.toLowerCase() === t('home.heroHighlight').toLowerCase() ? (
                    <span key={index} className="text-blue-600 dark:text-blue-400">{word} </span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                )}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t('home.intro')}
              </p>
              
              {/* CTA Buttons avec composants Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  to={`/${currentLang}/contact`}
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                >
                  {t('nav.hireMe')}
                </Button>
                <Button
                  to={`/${currentLang}/projects`}
                  variant="secondary"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                >
                  {t('nav.discoverProjects')}
                </Button>
              </div>
            </div>
            
            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative">
                {/* Background Cards */}
                <div className="absolute -top-6 -left-6 w-80 h-48 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50"></div>
                <div className="absolute top-6 left-6 w-80 h-48 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-300/50 dark:border-gray-600/50"></div>
                
                {/* Robot Image */}
                <div className="relative z-10 p-8">
                  <img 
                    src="/robot-with-flower.svg" 
                    alt="Robot developer with flower"
                    className="w-80 h-80 md:w-96 md:h-96 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
