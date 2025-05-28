
import { useLanguage } from '@/contexts/LanguageContext';

const Universities = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#231F20] text-center mb-8">
          {t('nav.universities')}
        </h1>
        <p className="text-xl text-gray-600 text-center">
          صفحة الجامعات والشراكات قيد التطوير
        </p>
      </div>
    </div>
  );
};

export default Universities;
