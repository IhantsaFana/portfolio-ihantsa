import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { StructuredData } from '@/components/seo/StructuredData';

export function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <StructuredData type="person" />
      <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
              >
                {t('nav.hireMe')}
              </Button>
              <Button
                href="#projects"
                variant="secondary"
                size="lg"
              >
                {t('nav.discoverProjects')}
              </Button>
            </div>
          </div>
          
          {/* Right Illustration - Robot flottant */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              {/* Ombre au sol fixe - ne bouge pas */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black/30 dark:bg-white/20 rounded-full blur-lg"></div>
              
              {/* Robot flottant */}
              <div className="animate-float">
                <img 
                  src="/robot-with-flower.svg" 
                  alt="Ihantsa RAKOTONDRANAIVO - Full-Stack Developer & AI Engineer - Robot mascot in meditation pose with flower"
                  className="w-80 h-80 md:w-96 md:h-96 drop-shadow-2xl"
                  loading="lazy"
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
