
import React from 'react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Calendar, MapPin, Star } from 'lucide-react';
import UniversityBrowser from '@/components/services/UniversityBrowser';
import HajjServices from '@/components/services/HajjServices';
import SaudiScholarships from '@/components/services/SaudiScholarships';

const ServicesSection = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = React.useState(0);

  const services = [
    {
      title: t('services.card.consulting.title'),
      description: t('services.card.consulting.desc'),
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('services.card.visa.title'),
      description: t('services.card.visa.desc'),
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: t('services.card.hajj.title'),
      description: t('services.card.hajj.desc'),
      icon: MapPin,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: t('services.card.scholarship.title'),
      description: t('services.card.scholarship.desc'),
      icon: Star,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const features = [
    {
      title: t('services.tabs.university'),
      description: t('services.tabs.university.desc'),
      component: <UniversityBrowser />
    },
    {
      title: t('services.tabs.hajj'),
      description: t('services.tabs.hajj.desc'),
      component: <HajjServices />
    },
    {
      title: t('services.tabs.scholarship'),
      description: t('services.tabs.scholarship.desc'),
      component: <SaudiScholarships />
    }
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      role="main"
      aria-label="قسم الخدمات التعليمية"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-right mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl ml-auto">
            {t('services.description')}
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" role="list" aria-label="عروض الخدمات التعليمية">
          {services.map((service, index) => (
            <article key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 university-card relative overflow-hidden" role="listitem">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
              <CardContent className="p-6 text-center relative">
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-sm font-semibold text-blue-700 mb-3 leading-relaxed">
                  {t('pricing.note')}
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
                  aria-label={`ابدأ في خدمة ${service.title}`}
                >
                  {t('services.button')}
                </Button>
              </CardContent>
            </article>
          ))}
        </div>

        {/* Interactive Service Browser */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100" role="complementary" aria-label="استكشاف تفصيلي للخدمات">
          <header className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t('services.tabs.title')}
            </h3>
            <nav className="flex flex-wrap justify-center gap-4" role="tablist" aria-label="أقسام تفاصيل الخدمات">
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant={activeFeature === index ? "default" : "outline"}
                  onClick={() => setActiveFeature(index)}
                  className={activeFeature === index ? "bg-blue-600" : ""}
                  aria-label={`عرض تفاصيل ${feature.title}`}
                  role="tab"
                  aria-selected={activeFeature === index}
                >
                  {feature.title}
                </Button>
              ))}
            </nav>
          </header>
          
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              {features[activeFeature].title}
            </h4>
            <p className="text-gray-600">
              {features[activeFeature].description}
            </p>
          </div>
          
          <div className="min-h-[400px]" role="tabpanel" aria-label={`محتوى ${features[activeFeature].title}`}>
            {features[activeFeature].component}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesSection;
