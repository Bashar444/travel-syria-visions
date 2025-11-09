
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Plane, Hotel, Star } from 'lucide-react';

const hajjPackages = [
  {
    id: 1,
    name: 'باقة الحج المميزة',
    duration: '14 يومًا',
    price: '4,500 دولار للفرد',
    groupSize: 'من 25 إلى 30 حاجًا',
    accommodation: 'فنادق خمس نجوم قريبة من الحرم',
    features: ['رحلات مباشرة', 'نقل فاخر بين المشاعر', 'مرشد شرعي وطبي مرافق', 'وجبات كاملة يوميًا', 'إشراف طبي على مدار الساعة'],
    rating: 4.8,
    available: 'متاحة لموسم ذو الحجة 2024'
  },
  {
    id: 2,
    name: 'باقة الحج الاقتصادية',
    duration: '12 يومًا',
    price: '3,200 دولار للفرد',
    groupSize: 'من 40 إلى 50 حاجًا',
    accommodation: 'فنادق أربع نجوم بخدمات مميزة',
    features: ['رحلات مجدولة', 'نقل جماعي مكيف', 'مرشدون يتحدثون العربية', 'وجبتان يوميًا', 'رعاية طبية أساسية'],
    rating: 4.5,
    available: 'متاحة لموسم ذو الحجة 2024'
  }
];

const umrahPackages = [
  {
    id: 3,
    name: 'باقة العمرة الفاخرة',
    duration: '7 أيام',
    price: '1,800 دولار للفرد',
    groupSize: 'من 15 إلى 20 معتمرًا',
    accommodation: 'فنادق خمس نجوم مقابل الحرم',
    features: ['رحلات مباشرة', 'نقل خاص', 'مرشد شخصي', 'وجبات يومية كاملة', 'توفير مياه زمزم وتسهيلات خاصة'],
    rating: 4.9,
    available: 'متاحة طوال العام'
  },
  {
    id: 4,
    name: 'باقة العمرة الاقتصادية',
    duration: '5 أيام',
    price: '1,200 دولار للفرد',
    groupSize: 'من 30 إلى 40 معتمرًا',
    accommodation: 'فنادق ثلاث نجوم بخدمات جيدة',
    features: ['رحلات اقتصادية', 'نقل مشترك مريح', 'مرشد جماعي', 'إفطار يومي', 'دعم لوجستي متواصل'],
    rating: 4.3,
    available: 'متاحة طوال العام'
  }
];

const serviceHighlights = [
  {
    icon: Plane,
    title: 'تنظيم الرحلات الجوية',
    description: 'حجوزات مؤكدة من دمشق وحلب مع مقاعد مريحة وخطط سفر واضحة'
  },
  {
    icon: Hotel,
    title: 'إقامة مريحة',
    description: 'فنادق مختارة بعناية قريبة من الحرم مع خدمات فندقية متكاملة'
  },
  {
    icon: Users,
    title: 'إرشاد وخدمات ميدانية',
    description: 'مرشدون شرعيون وإداريون يتحدثون العربية وذوو خبرة طويلة'
  },
  {
    icon: Calendar,
    title: 'مواعيد مرنة',
    description: 'مغادرات متعددة على مدار السنة وخطط تناسب العائلات والمجموعات'
  }
];

const HajjServices = () => {
  const [selectedPackage, setSelectedPackage] = useState<'hajj' | 'umrah'>('hajj');
  const currentPackages = selectedPackage === 'hajj' ? hajjPackages : umrahPackages;

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant={selectedPackage === 'hajj' ? 'default' : 'outline'}
          onClick={() => setSelectedPackage('hajj')}
          className="px-8"
        >
          باقات الحج
        </Button>
        <Button
          variant={selectedPackage === 'umrah' ? 'default' : 'outline'}
          onClick={() => setSelectedPackage('umrah')}
          className="px-8"
        >
          باقات العمرة
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {serviceHighlights.map((service, index) => (
          <Card key={index} className="text-center p-4" dir="rtl">
            <service.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentPackages.map((pkg) => (
          <Card key={pkg.id} className="hover:shadow-lg transition-shadow duration-300" dir="rtl">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="text-right">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-2 mb-2 justify-end">
                    <Badge variant="secondary">مدة البرنامج: {pkg.duration}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">{pkg.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{pkg.available}</p>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
                  <div className="text-sm text-gray-500">يشمل جميع الخدمات</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" dir="rtl">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center justify-end gap-2">
                    <span>{pkg.groupSize}</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span>{pkg.accommodation}</span>
                    <Hotel className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-right">تشمل الباقة:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center justify-end gap-2">
                        <span>{feature}</span>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    احجز الآن
                  </Button>
                  <Button variant="outline" className="flex-1">
                    اطلب التفاصيل
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200" dir="rtl">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">هل تحتاج خطة مخصصة؟</h3>
          <p className="text-gray-600 mb-4">
            تواصل مع فريق الحج والعمرة لدينا لتصميم برنامج خاص بك أو بحملتك مع خدمات إضافية حسب الطلب.
          </p>
          <Button
            onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
            className="bg-green-600 hover:bg-green-700"
          >
            تواصل مع مستشار الحج
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HajjServices;
