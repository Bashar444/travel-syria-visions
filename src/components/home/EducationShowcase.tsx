
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import OptimizedImage from '@/components/OptimizedImage';

const EducationShowcase = () => {
  const { t } = useLanguage();

  const educationShowcase = [
    {
      name: t('education.card.1.title'),
      description: t('education.card.1.desc'),
      image: "/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png"
    },
    {
      name: t('education.card.2.title'), 
      description: t('education.card.2.desc'),
      image: "/lovable-uploads/c591c245-e976-4338-939b-f22ccec167ab.png"
    },
    {
      name: t('education.card.3.title'),
      description: t('education.card.3.desc'),
      image: "/lovable-uploads/0da782f9-59e2-4e1e-bd41-f215d98ff64e.png"
    },
    {
      name: t('education.card.4.title'),
      description: t('education.card.4.desc'),
      image: "/lovable-uploads/4630380b-a0f4-4abc-9b99-a964aa5604a3.png"
    },
    {
      name: t('education.card.5.title'),
      description: t('education.card.5.desc'),
      image: "/lovable-uploads/6b3b5567-fd2c-4b7a-9a5d-f064f7109719.png"
    },
    {
      name: t('education.card.6.title'),
      description: t('education.card.6.desc'),
      image: "/lovable-uploads/a3ebc772-a1f3-42d0-9c45-03d9c677e2a6.png"
    }
  ];

  return (
    <section className="py-20 bg-white" role="main" aria-label="رحلة التعليم وقصص النجاح" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-right mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('education.heading')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl ml-auto">
            {t('education.subtitle')}
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="معرض قصص النجاح">
          {educationShowcase.map((item, index) => (
            <article key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" role="listitem">
              <Card className="h-full">
                <div className="relative h-48">
                  <OptimizedImage
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-cover"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-white text-right">
                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6 text-right">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    aria-label={`التعرف على ${item.name}`}
                  >
                    {t('education.button')}
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationShowcase;
