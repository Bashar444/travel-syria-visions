
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Calendar, MapPin, Star } from 'lucide-react';
import UniversityBrowser from '@/components/services/UniversityBrowser';
import HajjServices from '@/components/services/HajjServices';
import SaudiScholarships from '@/components/services/SaudiScholarships';

const ServicesSection = () => {
  const { direction } = useLanguage();
  const [activeFeature, setActiveFeature] = React.useState(0);

  const services = [
    {
      title: 'University Admissions Consulting',
      description: 'Complete guidance for university applications across Italy, India, Romania and more with 95% success rate',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      price: '$1099'
    },
    {
      title: 'Student Visa Processing',
      description: 'Professional visa application support with document verification, tracking, and embassy guidance',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      price: '$1099'
    },
    {
      title: 'Hajj & Umrah Travel Services',
      description: 'Complete spiritual journey packages with accommodation, flights, guided tours, and religious guidance',
      icon: MapPin,
      color: 'from-purple-500 to-pink-500',
      price: '$1099'
    },
    {
      title: 'Saudi Arabia Scholarship Programs',
      description: 'Access to exclusive Saudi Arabia scholarship programs and educational opportunities for Syrian students',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      price: '$1099'
    },
  ];

  const features = [
    {
      title: 'University Browser & Search',
      description: 'Browse and compare universities worldwide with detailed information, rankings, and admission requirements',
      component: <UniversityBrowser />
    },
    {
      title: 'Hajj & Umrah Services',
      description: 'Complete pilgrimage packages and spiritual journey guidance with experienced tour operators',
      component: <HajjServices />
    },
    {
      title: 'Saudi Scholarship Programs',
      description: 'Exclusive access to Saudi Arabia education opportunities and government scholarship programs',
      component: <SaudiScholarships />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white" role="main" aria-label="Educational services section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <strong>Our Professional Educational Services</strong>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <strong>Comprehensive educational and travel services</strong> designed specifically for 
            <strong> Syrian students</strong> seeking quality education abroad. Professional guidance 
            with <strong>transparent pricing</strong> and <strong>proven results</strong>.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" role="list" aria-label="Educational service offerings">
          {services.map((service, index) => (
            <article key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 university-card relative overflow-hidden" role="listitem">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
              <CardContent className="p-6 text-center relative">
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <strong>{service.title}</strong>
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  <strong>{service.price}</strong>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  aria-label={`Get started with ${service.title} - ${service.price} - Learn more about our ${service.title.toLowerCase()} services`}
                >
                  <strong>Get Started with {service.title.split(' ')[0]}</strong>
                </Button>
              </CardContent>
            </article>
          ))}
        </div>

        {/* Interactive Service Browser */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100" role="complementary" aria-label="Detailed service exploration">
          <header className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              <strong>Explore Our Services in Detail</strong>
            </h3>
            <nav className="flex flex-wrap justify-center gap-4" role="tablist" aria-label="Service detail tabs">
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant={activeFeature === index ? "default" : "outline"}
                  onClick={() => setActiveFeature(index)}
                  className={activeFeature === index ? "bg-blue-600" : ""}
                  aria-label={`View ${feature.title} details and interactive tools`}
                  role="tab"
                  aria-selected={activeFeature === index}
                >
                  <strong>{feature.title}</strong>
                </Button>
              ))}
            </nav>
          </header>
          
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              <strong>{features[activeFeature].title}</strong>
            </h4>
            <p className="text-gray-600">
              {features[activeFeature].description}
            </p>
          </div>
          
          <div className="min-h-[400px]" role="tabpanel" aria-label={`${features[activeFeature].title} interactive content`}>
            {features[activeFeature].component}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesSection;
