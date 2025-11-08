
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import SuccessStoriesHeader from '@/components/success-stories/SuccessStoriesHeader';
import StoriesGrid from '@/components/success-stories/StoriesGrid';
import SuccessStoriesCTA from '@/components/success-stories/SuccessStoriesCTA';
import { getSuccessStories } from '@/data/successStoriesData';

const SuccessStories = () => {
  const { direction, language } = useLanguage();
  const stories = getSuccessStories(language);

  const breadcrumbItems = [
    { 
      label: direction === 'rtl' ? 'قصص النجاح' : 'Success Stories'
    }
  ];

  return (
    <>
      <SEO 
        title={direction === 'rtl' ? 'قصص النجاح - Travel.Ltd' : 'Success Stories - Travel.Ltd'}
        description={direction === 'rtl' 
          ? 'اكتشف قصص نجاح طلابنا السوريين في الجامعات العالمية. رحلات ملهمة من دمشق إلى النجاح الأكاديمي في أوروبا وأمريكا.'
          : 'Discover success stories of Syrian students in international universities. Inspiring journeys from Damascus to academic success in Europe and America.'
        }
        keywords={direction === 'rtl' 
          ? 'قصص نجاح, طلاب سوريين, الدراسة في الخارج, جامعات عالمية, منح دراسية'
          : 'success stories, Syrian students, study abroad, international universities, scholarships'
        }
      />
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          
          <SuccessStoriesHeader />
          
          <StoriesGrid stories={stories} />
          
          <SuccessStoriesCTA />
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
