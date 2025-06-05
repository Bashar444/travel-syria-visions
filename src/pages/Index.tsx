import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Book, BookOpen, Calendar, MapPin, Star, TrendingUp, DollarSign, Plane, Award, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import UniversityBrowser from '@/components/services/UniversityBrowser';
import HajjServices from '@/components/services/HajjServices';
import SaudiScholarships from '@/components/services/SaudiScholarships';
import FeedbackButton from '@/components/FeedbackButton';
import FAQ from '@/components/FAQ';

const Index = () => {
  const { t, direction } = useLanguage();

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

  const stats = [
    { number: '500+', label: direction === 'rtl' ? 'طالب حصل على قبول' : 'Successful Students' },
    { number: '150+', label: direction === 'rtl' ? 'جامعة شريكة' : 'Partner Universities' },
    { number: '95%', label: direction === 'rtl' ? 'معدل النجاح' : 'Success Rate' },
    { number: '24/7', label: direction === 'rtl' ? 'دعم العملاء' : 'Customer Support' },
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

  const educationShowcase = [
    {
      name: "Graduate Achievement",
      description: "Celebrating successful graduation moments",
      image: "/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png"
    },
    {
      name: "University Campus Life", 
      description: "Modern university campuses and student life",
      image: "/lovable-uploads/c591c245-e976-4338-939b-f22ccec167ab.png"
    },
    {
      name: "Academic Excellence",
      description: "Group graduation ceremony celebration",
      image: "/lovable-uploads/0da782f9-59e2-4e1e-bd41-f215d98ff64e.png"
    },
    {
      name: "Graduation Ceremony",
      description: "Academic achievement and success",
      image: "/lovable-uploads/4630380b-a0f4-4abc-9b99-a964aa5604a3.png"
    },
    {
      name: "Historic University",
      description: "Traditional academic architecture",
      image: "/lovable-uploads/6b3b5567-fd2c-4b7a-9a5d-f064f7109719.png"
    },
    {
      name: "Campus Journey",
      description: "Students exploring university life",
      image: "/lovable-uploads/a3ebc772-a1f3-42d0-9c45-03d9c677e2a6.png"
    }
  ];

  const [activeFeature, setActiveFeature] = React.useState(0);

  return (
    <>
      <SEO 
        title="Travel.Ltd - University Admissions & Educational Services for Syrian Students"
        description="Professional university admission services, visa processing, Hajj packages, and Saudi scholarships for Syrian students. Expert guidance for studying abroad with 95% success rate."
        keywords="university admissions Syria, study abroad, visa processing, Hajj services, Saudi scholarships, Syrian students education, study in Italy, study in India, study in Romania"
      />
      
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
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

        {/* Services Section */}
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

        {/* Education Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {direction === 'rtl' ? 'رحلة التعليم والنجاح' : 'Educational Journey & Success'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {direction === 'rtl' ? 'من الحلم إلى التخرج - نرافقك في كل خطوة' : 'From dreams to graduation - we accompany you every step'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationShowcase.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <DollarSign className="w-5 h-5 text-blue-200" />
              <span className="text-sm font-medium">Join 500+ Successful Students</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional guidance with transparent pricing and proven results
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={() => window.location.href = '/contact'}
            >
              Start Application
            </Button>
          </div>
        </section>

        {/* Feedback Button */}
        <FeedbackButton />
      </div>
    </>
  );
};

export default Index;
