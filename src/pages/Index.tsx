
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Book, BookOpen, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';

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
    <>
      <SEO 
        title="Travel.Ltd - خدمات القبول الجامعي للطلاب السوريين"
        description="نساعد الطلاب السوريين في الحصول على قبولات جامعية في أفضل الجامعات العالمية. خدمات شاملة تشمل القبول، المنح، والتأشيرة."
        keywords="Travel.Ltd, القبول الجامعي, الطلاب السوريين, المنح الدراسية, الدراسة في الخارج, الجامعات الإيطالية, الجامعات الهندية"
      />
      
      <div className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section 
          className="relative bg-gradient-to-br from-[#0018A8] to-[#0E1B34] text-white py-20 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 24, 168, 0.8), rgba(14, 27, 52, 0.9)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0018A8]/80 via-transparent to-[#0E1B34]/80"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                  {t('hero.title')}
                </h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Button 
                    size="lg"
                    className="bg-white text-[#0018A8] hover:bg-[#F6F8FC] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => window.location.href = '/contact'}
                  >
                    {t('hero.cta')}
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#0018A8] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
                  >
                    {t('hero.whatsapp')}
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00A3E0]/30 animate-scale-in">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold mb-2 text-[#00A3E0]">{stat.number}</div>
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
        <section className="py-20 bg-[#F6F8FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-4xl font-bold text-[#0E1B34] mb-4">
                {t('services.title')}
              </h2>
              <div className="text-2xl font-semibold text-[#0018A8] mb-8">
                {t('services.price')}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 university-card">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#0018A8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-[#00A3E0] transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0E1B34] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#2B3A3E] leading-relaxed">
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
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-12">
                شركاؤنا من الجامعات المرموقة
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {[
                  { name: "Sant'Anna School", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80" },
                  { name: "Milano-Bicocca", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80" },
                  { name: "LIUC University", image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80" },
                  { name: "SRM Institute", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80" },
                  { name: "SRM Andhra Pradesh", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=400&q=80" },
                  { name: "Babeș-Bolyai", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80" },
                ].map((university, index) => (
                  <div key={index} className="bg-[#EDF1F7] h-20 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#747474]/20 hover:border-[#0018A8]/50">
                    <OptimizedImage
                      src={university.image}
                      alt={`${university.name} University campus`}
                      className="h-full w-full opacity-60 hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0E1B34] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ابدأ رحلتك التعليمية اليوم
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احجز استشارة مجانية واكتشف الفرص المتاحة لك
            </p>
            <Button 
              size="lg"
              className="bg-[#0018A8] hover:bg-[#00A3E0] text-white font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={() => window.location.href = '/contact'}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
