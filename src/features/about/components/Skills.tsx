import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { 
  FaCode, 
  FaMobile, 
  FaMicrochip,
  FaTerminal,
  FaPaintBrush,
  FaServer,
  FaStar
} from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export function Skills() {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      title: t('about.skills.web'),
      description: t('about.skills.webDesc'),
      skills: [
        { name: 'React', level: 95, icon: FaCode },
        { name: 'Next.js', level: 90, icon: FaTerminal },
        { name: 'TypeScript', level: 90, icon: FaCode },
        { name: 'Tailwind CSS', level: 95, icon: FaPaintBrush },
        { name: 'Node.js', level: 85, icon: FaServer },
      ]
    },
    {
      title: t('about.skills.mobile'),
      description: t('about.skills.mobileDesc'),
      skills: [
        { name: 'Flutter', level: 85, icon: FaMobile },
        { name: 'React Native', level: 80, icon: FaMobile },
        { name: 'Dart', level: 85, icon: FaCode },
      ]
    },
    {
      title: t('about.skills.ai'),
      description: t('about.skills.aiDesc'),
      skills: [
        { name: 'Python', level: 90, icon: FaTerminal },
        { name: 'Machine Learning', level: 80, icon: FaMicrochip },
        { name: 'TensorFlow', level: 75, icon: FaMicrochip },
        { name: 'OpenAI API', level: 85, icon: FaStar },
      ]
    }
  ];

  return (
    <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('about.skills.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {category.description}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                        <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </Container>
  );
}
