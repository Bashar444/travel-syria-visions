
import { useLanguage } from '@/contexts/LanguageContext';

const BlogHeader = () => {
  const { direction } = useLanguage();

  return (
    <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
      <h1 className="text-4xl lg:text-5xl font-bold text-[#231F20] mb-6 animate-fade-in">
        {direction === 'rtl' ? 'مدونة Travel.Ltd' : 'Travel.Ltd Blog'}
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
        {direction === 'rtl' 
          ? 'دليلك الشامل للدراسة في الخارج والحصول على أفضل الفرص التعليمية'
          : 'Your comprehensive guide to studying abroad and getting the best educational opportunities'
        }
      </p>
    </div>
  );
};

export default BlogHeader;
