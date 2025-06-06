
import { useLanguage } from '@/contexts/LanguageContext';

const SuccessStoriesHeader = () => {
  const { direction } = useLanguage();

  return (
    <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
      <h1 className="text-4xl lg:text-5xl font-bold text-[#231F20] mb-6 animate-fade-in">
        {direction === 'rtl' ? 'تحويل الأحلام إلى واقع' : 'Transforming Dreams into Reality'}
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in delay-200">
        {direction === 'rtl' 
          ? 'اكتشف كيف حقق طلابنا أحلامهم الأكاديمية وبناء مهن ناجحة في الخارج. هذه الرحلات الملهمة تُظهر قوة العزيمة والإرشاد المناسب والفرص الصحيحة.'
          : 'Discover how our students have achieved their academic dreams and built successful careers abroad. These inspiring journeys showcase the power of determination, proper guidance, and the right opportunities.'
        }
      </p>
    </div>
  );
};

export default SuccessStoriesHeader;
