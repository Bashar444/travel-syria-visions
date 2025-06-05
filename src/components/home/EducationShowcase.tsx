
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import OptimizedImage from '@/components/OptimizedImage';

const EducationShowcase = () => {
  const { direction } = useLanguage();

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

  return (
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
  );
};

export default EducationShowcase;
