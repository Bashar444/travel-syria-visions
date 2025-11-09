
import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t, direction } = useLanguage();

  const subtitleSegments = direction === 'rtl'
    ? [
        { text: 'إرشاد', emphasis: false },
        { text: ' احترافي للقبولات الجامعية', emphasis: true },
        { text: ' بأسعار ', emphasis: false },
        { text: 'شفافة', emphasis: true },
        { text: ' تبدأ من ', emphasis: false },
        { text: '1099$', emphasis: true },
        { text: ' مع ', emphasis: false },
        { text: 'نتائج مثبتة', emphasis: true },
        { text: ' بنسبة نجاح ', emphasis: false },
        { text: '95%', emphasis: true },
        { text: ' للطلاب السوريين الباحثين عن تعليم عالي الجودة في الخارج', emphasis: false }
      ]
    : [
        { text: 'Professional ', emphasis: false },
        { text: 'university admission guidance', emphasis: true },
        { text: ' with ', emphasis: false },
        { text: 'transparent pricing', emphasis: true },
        { text: ' starting at ', emphasis: false },
        { text: '$1099', emphasis: true },
        { text: ' and ', emphasis: false },
        { text: 'proven results', emphasis: true },
        { text: ' with ', emphasis: false },
        { text: '95% success rate', emphasis: true },
        { text: ' for Syrian students seeking quality education abroad', emphasis: false }
      ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" role="complementary" aria-label="Call to action for university applications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <DollarSign className="w-5 h-5 text-blue-200" aria-hidden="true" />
          <span className="text-sm font-medium">
            <strong>{t('cta.badge')}</strong>
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4">
          <strong>{t('cta.title')}</strong>
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {subtitleSegments.map((segment, index) => (
            <React.Fragment key={`${segment.text}-${index}`}>
              {segment.emphasis ? <strong>{segment.text}</strong> : segment.text}
            </React.Fragment>
          ))}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
          onClick={() => window.location.href = '/contact'}
          aria-label="Start your university application process today with our expert consultation and professional guidance for Syrian students"
        >
          <strong>{t('cta.button')}</strong>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
