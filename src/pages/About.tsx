
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#231F20] text-center mb-8">
          {t('about.title')}
        </h1>
        <p className="text-xl text-gray-600 text-center mb-4">
          {t('about.mission')}
        </p>
        <p className="text-lg text-gray-600 text-center">
          {t('about.hours')}
        </p>
      </div>
    </div>
  );
};

export default About;
