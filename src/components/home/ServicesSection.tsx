
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
      title: 'University Admissions',
      description: 'Complete guidance for university applications across Italy, India, Romania and more',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      price: '$1099'
    },
    {
      title: 'Visa Processing',
      description: 'Professional visa application support with document verification and tracking',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      price: '$1099'
    },
    {
      title: 'Hajj & Umrah Services',
      description: 'Complete spiritual journey packages with accommodation, flights, and guided tours',
      icon: MapPin,
      color: 'from-purple-500 to-pink-500',
      price: '$1099'
    },
    {
      title: 'Saudi Scholarships',
      description: 'Access to exclusive Saudi Arabia scholarship programs for Syrian students',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      price: '$1099'
    },
  ];

  const features = [
    {
      title: 'University Browser',
      description: 'Browse and compare universities worldwide with detailed information',
      component: <UniversityBrowser />
    },
    {
      title: 'Hajj Services',
      description: 'Complete pilgrimage packages and spiritual journey guidance',
      component: <HajjServices />
    },
    {
      title: 'Saudi Scholarships',
      description: 'Exclusive access to Saudi Arabia education opportunities',
      component: <SaudiScholarships />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive educational and travel services designed specifically for Syrian students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 university-card relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
              <CardContent className="p-6 text-center relative">
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  {service.price}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Service Browser */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <Button
                key={index}
                variant={activeFeature === index ? "default" : "outline"}
                onClick={() => setActiveFeature(index)}
                className={activeFeature === index ? "bg-blue-600" : ""}
              >
                {feature.title}
              </Button>
            ))}
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {features[activeFeature].title}
            </h3>
            <p className="text-gray-600">
              {features[activeFeature].description}
            </p>
          </div>
          
          <div className="min-h-[400px]">
            {features[activeFeature].component}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
