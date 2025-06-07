
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import OptimizedImage from '@/components/OptimizedImage';

const EducationShowcase = () => {
  const { direction } = useLanguage();

  const educationShowcase = [
    {
      name: "University Graduation Success",
      description: "Celebrating successful graduation moments of Syrian students studying abroad through our university admission services",
      image: "/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png",
      alt: "Syrian student celebrating graduation ceremony with diploma and cap, representing successful university admission outcomes"
    },
    {
      name: "Modern University Campus Life", 
      description: "Exploring modern university campuses and international student life experiences through our educational consulting",
      image: "/lovable-uploads/c591c245-e976-4338-939b-f22ccec167ab.png",
      alt: "International students walking through modern university campus with buildings and greenery, showcasing quality education abroad"
    },
    {
      name: "Academic Excellence Achievement",
      description: "Group graduation ceremony celebrating academic achievements and educational success of our Syrian students",
      image: "/lovable-uploads/0da782f9-59e2-4e1e-bd41-f215d98ff64e.png",
      alt: "Group of diverse graduates in caps and gowns celebrating together at graduation ceremony, demonstrating successful university admissions"
    },
    {
      name: "International Graduation Ceremony",
      description: "International students achieving academic success through our comprehensive university admission and visa processing services",
      image: "/lovable-uploads/4630380b-a0f4-4abc-9b99-a964aa5604a3.png",
      alt: "International graduation ceremony with students in academic regalia receiving diplomas, showing successful study abroad outcomes"
    },
    {
      name: "Historic University Architecture",
      description: "Traditional academic architecture showcasing prestigious university environments available through our admission services",
      image: "/lovable-uploads/6b3b5567-fd2c-4b7a-9a5d-f064f7109719.png",
      alt: "Historic university building with classical architecture and academic atmosphere, representing quality educational institutions"
    },
    {
      name: "Student Campus Journey",
      description: "Students exploring university life and educational opportunities abroad with guidance from our educational consultants",
      image: "/lovable-uploads/a3ebc772-a1f3-42d0-9c45-03d9c677e2a6.png",
      alt: "Students walking and exploring university campus grounds with modern facilities, showcasing student life abroad"
    }
  ];

  return (
    <section className="py-20 bg-white" role="main" aria-label="Educational journey and student success stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <strong>{direction === 'rtl' ? 'رحلة التعليم والنجاح' : 'Educational Journey & Student Success Stories'}</strong>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {direction === 'rtl' ? 
              'من الحلم إلى التخرج - نرافقك في كل خطوة' : 
              'From dreams to graduation - we accompany Syrian students every step of their <strong>educational journey abroad</strong> with professional <strong>university admission services</strong>'
            }
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Student success story gallery">
          {educationShowcase.map((item, index) => (
            <article key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" role="listitem">
              <Card className="h-full">
                <div className="relative h-48">
                  <OptimizedImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      <strong>{item.name}</strong>
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    aria-label={`Learn more about ${item.name} - ${item.description} - View detailed success story`}
                  >
                    <strong>Discover More Success Stories</strong>
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
