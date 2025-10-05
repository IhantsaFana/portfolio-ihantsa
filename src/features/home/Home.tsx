import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/ui/SEO';
import { Button } from '@/components/ui/Button';

export function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      <SEO />
      {/* Hero Section - Style Grafikart avec gradient */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        </div>
        
        <div className="container mx-auto px-12 md:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            {/* Left Content - Plus d'espace et mieux centré */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                {t('home.heroTitle').split(' ').map((word, index) => 
                  word.toLowerCase() === t('home.heroHighlight').toLowerCase() ? (
                    <span key={index} className="text-blue-300">{word} </span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                )}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-16 leading-relaxed max-w-2xl">
                {t('home.intro')}.
              </p>
              
              {/* CTA Buttons avec composants Button */}
              <div className="flex flex-col sm:flex-row gap-8 mt-12">
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
                  className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900"
                >
                  {t('nav.discoverProjects')}
                </Button>
              </div>
            </div>
            
            {/* Right Illustration - Plus grande et mieux positionnée */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background Cards/Mockups comme Grafikart */}
                <div className="absolute -top-6 -left-6 w-80 h-48 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"></div>
                <div className="absolute top-6 left-6 w-80 h-48 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30"></div>
                
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
        </div>
      </section>

    </>
  );
}
