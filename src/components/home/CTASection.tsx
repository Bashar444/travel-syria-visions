
import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" role="complementary" aria-label="دعوة لاتخاذ إجراء للقبولات الجامعية" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <DollarSign className="w-5 h-5 text-blue-200" aria-hidden="true" />
          <span className="text-sm font-medium">
            {t('cta.badge')}
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
          onClick={() => window.location.href = '/contact'}
          aria-label="ابدأ رحلتك الدراسية الآن"
        >
          {t('cta.button')}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
