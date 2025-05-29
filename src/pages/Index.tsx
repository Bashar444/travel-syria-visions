
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Book, BookOpen, Calendar, Brain, MapPin, TrendingUp, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import ScholarshipMatcher from '@/components/ai/ScholarshipMatcher';
import VisaProcessingModule from '@/components/ai/VisaProcessingModule';
import VirtualCampusTour from '@/components/3d/VirtualCampusTour';
import ApplicationTracker from '@/components/dashboard/ApplicationTracker';

const Index = () => {
  const { t, direction } = useLanguage();

  const services = [
    {
      title: 'AI Scholarship Matching',
      description: 'Advanced machine learning algorithms match you with 150+ scholarships across Italy, India, and Romania',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Visa Processing',
      description: 'Automated document verification and real-time processing updates with AI-powered assistance',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Virtual Campus Tours',
      description: 'Immersive 3D university experiences with interactive campus exploration',
      icon: MapPin,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Success probability modeling and adaptive recommendations based on real-time data',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const stats = [
    { number: '500+', label: 'طالب حصل على قبول' },
    { number: '150+', label: 'جامعة شريكة' },
    { number: '85%', label: 'دقة الذكاء الاصطناعي' },
    { number: '95%', label: 'معدل النجاح' },
  ];

  const aiFeatures = [
    {
      title: 'Automated Scholarship Matching',
      description: 'Our AI analyzes your profile and matches you with the most suitable scholarships',
      component: <ScholarshipMatcher />
    },
    {
      title: 'Smart Visa Processing',
      description: 'AI-powered document verification and real-time application tracking',
      component: <VisaProcessingModule />
    },
    {
      title: 'Virtual Campus Tours',
      description: 'Explore universities in immersive 3D environments',
      component: <VirtualCampusTour />
    },
    {
      title: 'Application Timeline Tracker',
      description: 'Interactive progress visualization with predictive analytics',
      component: <ApplicationTracker />
    }
  ];

  const [activeFeature, setActiveFeature] = React.useState(0);

  return (
    <>
      <SEO 
        title="Travel.Ltd - AI-Powered University Admissions for Syrian Students"
        description="Advanced AI-driven platform helping Syrian students secure university admissions with machine learning scholarship matching, smart visa processing, and virtual campus tours."
        keywords="AI university admissions, machine learning scholarships, Syrian students, virtual campus tours, smart visa processing"
      />
      
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section 
          className="relative bg-gradient-to-br from-[#0018A8] via-[#0E1B34] to-[#00A3E0] text-white py-20 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 24, 168, 0.9), rgba(14, 27, 52, 0.9)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0018A8]/90 via-transparent to-[#00A3E0]/90"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Brain className="w-5 h-5 text-[#00A3E0]" />
                  <span className="text-sm font-medium">AI-Powered Platform</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                  Next-Generation
                  <span className="bg-gradient-to-r from-[#00A3E0] to-white bg-clip-text text-transparent"> AI </span>
                  University Admissions
                </h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Advanced machine learning algorithms and immersive 3D experiences revolutionizing Syrian student admissions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Button 
                    size="lg"
                    className="bg-white text-[#0018A8] hover:bg-[#F6F8FC] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => document.getElementById('ai-features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Experience AI Demo
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

        {/* AI Features Showcase */}
        <section id="ai-features" className="py-20 bg-gradient-to-br from-[#F6F8FC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-4xl font-bold text-[#0E1B34] mb-4">
                AI-Powered Features
              </h2>
              <p className="text-xl text-[#2B3A3E] mb-8 max-w-3xl mx-auto">
                Experience the future of university admissions with our cutting-edge AI technology
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
                    <h3 className="text-lg font-semibold text-[#0E1B34] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#2B3A3E] leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive AI Demo */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#0018A8]/20">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {aiFeatures.map((feature, index) => (
                  <Button
                    key={index}
                    variant={activeFeature === index ? "default" : "outline"}
                    onClick={() => setActiveFeature(index)}
                    className={activeFeature === index ? "bg-[#0018A8]" : ""}
                  >
                    {feature.title}
                  </Button>
                ))}
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0E1B34] mb-2">
                  {aiFeatures[activeFeature].title}
                </h3>
                <p className="text-[#2B3A3E]">
                  {aiFeatures[activeFeature].description}
                </p>
              </div>
              
              <div className="min-h-[400px]">
                {aiFeatures[activeFeature].component}
              </div>
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
        <section className="py-20 bg-gradient-to-br from-[#0E1B34] via-[#0018A8] to-[#00A3E0] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-[#00A3E0]" />
              <span className="text-sm font-medium">Join 500+ Successful Students</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience AI-Powered Admissions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your journey with our intelligent matching system and virtual campus tours
            </p>
            <Button 
              size="lg"
              className="bg-white text-[#0018A8] hover:bg-[#F6F8FC] font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={() => window.location.href = '/contact'}
            >
              Begin AI Assessment
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
