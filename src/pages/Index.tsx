
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Book, BookOpen, Calendar } from 'lucide-react';

const Index = () => {
  const { t, direction } = useLanguage();

  const services = [
    {
      title: t('services.admission'),
      description: t('services.admission.desc'),
      icon: BookOpen,
    },
    {
      title: t('services.scholarship'),
      description: t('services.scholarship.desc'),
      icon: Book,
    },
    {
      title: t('services.visa'),
      description: t('services.visa.desc'),
      icon: Calendar,
    },
    {
      title: t('services.tours'),
      description: t('services.tours.desc'),
      icon: Users,
    },
  ];

  const stats = [
    { number: '500+', label: 'طالب حصل على قبول' },
    { number: '50+', label: 'جامعة شريكة' },
    { number: '15+', label: 'دولة متاحة' },
    { number: '95%', label: 'معدل النجاح' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EE3524] to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-[#EE3524] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                >
                  {t('hero.cta')}
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#EE3524] font-semibold px-8 py-4 text-lg"
                  onClick={() => window.open('https://wa.me/+963123456789', '_blank')}
                >
                  {t('hero.whatsapp')}
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <h2 className="text-4xl font-bold text-[#231F20] mb-4">
              {t('services.title')}
            </h2>
            <div className="text-2xl font-semibold text-[#EE3524] mb-8">
              {t('services.price')}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#EE3524] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#231F20] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#231F20] mb-12">
              شركاؤنا من الجامعات المرموقة
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* University logos placeholder */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <div key={index} className="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">جامعة {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#231F20] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ابدأ رحلتك التعليمية اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90">
            احجز استشارة مجانية واكتشف الفرص المتاحة لك
          </p>
          <Button 
            size="lg"
            className="bg-[#EE3524] hover:bg-red-600 text-white font-semibold px-12 py-4 text-lg"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
