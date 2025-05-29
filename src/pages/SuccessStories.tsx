
import { useLanguage } from '@/contexts/LanguageContext';

const SuccessStories = () => {
  const { t, direction } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl font-bold text-[#231F20] text-center mb-8">
            {t('nav.success-stories')}
          </h1>
          <p className="text-xl text-gray-600 text-center">
            {direction === 'rtl' ? 'صفحة قصص النجاح قيد التطوير' : 'Success Stories page under development'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
