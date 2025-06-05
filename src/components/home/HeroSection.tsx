
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Globe, Award } from 'lucide-react';

const HeroSection = () => {
  const { t, direction } = useLanguage();

  const stats = [
    { number: '500+', label: direction === 'rtl' ? 'طالب حصل على قبول' : 'Successful Students' },
    { number: '150+', label: direction === 'rtl' ? 'جامعة شريكة' : 'Partner Universities' },
    { number: '95%', label: direction === 'rtl' ? 'معدل النجاح' : 'Success Rate' },
    { number: '24/7', label: direction === 'rtl' ? 'دعم العملاء' : 'Customer Support' },
  ];

  return (
    <section 
      className="relative bg-gradient-to-br from-[#1e40af] via-[#3b82f6] to-[#60a5fa] text-white py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.9)), url('/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/90 via-transparent to-[#60a5fa]/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-200" />
              <span className="text-sm font-medium">Professional Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              University Admissions
              <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent"> & Educational </span>
              Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Expert guidance for Syrian students seeking quality education abroad. University admissions, visa processing, and specialized services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-[#1e40af] hover:bg-blue-50 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e40af] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
              >
                <Award className="w-5 h-5 mr-2" />
                {t('hero.whatsapp')}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2 text-blue-200">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
