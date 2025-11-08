
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Book, Calendar, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const { t, direction } = useLanguage();

  const services = [
    {
      title: t('services.admission'),
      description: t('services.admission.desc'),
      icon: BookOpen,
      features: [
        direction === 'rtl' ? 'تقييم الملف الأكاديمي' : 'Academic file assessment',
        direction === 'rtl' ? 'اختيار الجامعات المناسبة' : 'Choosing suitable universities',
        direction === 'rtl' ? 'إعداد السيرة الذاتية' : 'CV preparation',
        direction === 'rtl' ? 'كتابة خطاب الدافع' : 'Motivation letter writing',
        direction === 'rtl' ? 'متابعة طلبات القبول' : 'Application follow-up'
      ]
    },
    {
      title: t('services.scholarship'),
      description: t('services.scholarship.desc'),
      icon: Book,
      features: [
        direction === 'rtl' ? 'البحث عن المنح المتاحة' : 'Finding available scholarships',
        direction === 'rtl' ? 'تقييم الأهلية للمنح' : 'Eligibility assessment',
        direction === 'rtl' ? 'إعداد طلبات المنح' : 'Scholarship applications',
        direction === 'rtl' ? 'كتابة المقالات المطلوبة' : 'Required essay writing',
        direction === 'rtl' ? 'متابعة النتائج' : 'Results follow-up'
      ]
    },
    {
      title: t('services.visa'),
      description: t('services.visa.desc'),
      icon: Calendar,
      features: [
        direction === 'rtl' ? 'إعداد ملف التأشيرة' : 'Visa file preparation',
        direction === 'rtl' ? 'حجز موعد السفارة' : 'Embassy appointment booking',
        direction === 'rtl' ? 'التحضير للمقابلة' : 'Interview preparation',
        direction === 'rtl' ? 'ترجمة الوثائق' : 'Document translation',
        direction === 'rtl' ? 'متابعة الطلب' : 'Application tracking'
      ]
    },
    {
      title: t('services.tours'),
      description: t('services.tours.desc'),
      icon: Users,
      features: [
        direction === 'rtl' ? 'جولات في الجامعات' : 'University tours',
        direction === 'rtl' ? 'التعريف بالنظام التعليمي' : 'Education system introduction',
        direction === 'rtl' ? 'المساعدة في السكن' : 'Accommodation assistance',
        direction === 'rtl' ? 'التوجيه الثقافي' : 'Cultural orientation',
        direction === 'rtl' ? 'الدعم المستمر' : 'Ongoing support'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#231F20] mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            {direction === 'rtl' 
              ? 'نقدم خدمات شاملة ومتخصصة لضمان حصولك على أفضل الفرص التعليمية'
              : 'We provide comprehensive and specialized services to ensure you get the best educational opportunities'
            }
          </p>
          <div className="bg-[#EE3524] text-white px-8 py-4 rounded-lg inline-block">
            <span className="text-2xl font-bold">{t('services.price')}</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-[#EE3524] transition-colors duration-300 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-[#EE3524] w-16 h-16 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#231F20]">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-[#EE3524] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-[#231F20] text-center mb-12">
            {direction === 'rtl' ? 'كيف نعمل معك؟' : 'How do we work with you?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: direction === 'rtl' ? 'الاستشارة المجانية' : 'Free Consultation', 
                desc: direction === 'rtl' ? 'تقييم أولي لملفك وأهدافك' : 'Initial assessment of your profile and goals' 
              },
              { 
                step: '2', 
                title: direction === 'rtl' ? 'وضع الخطة' : 'Planning', 
                desc: direction === 'rtl' ? 'تحديد الجامعات والبرامج المناسبة' : 'Identifying suitable universities and programs' 
              },
              { 
                step: '3', 
                title: direction === 'rtl' ? 'التنفيذ' : 'Implementation', 
                desc: direction === 'rtl' ? 'تحضير الطلبات والوثائق' : 'Preparing applications and documents' 
              },
              { 
                step: '4', 
                title: direction === 'rtl' ? 'المتابعة' : 'Follow-up', 
                desc: direction === 'rtl' ? 'متابعة النتائج والدعم المستمر' : 'Following results and ongoing support' 
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#EE3524] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#231F20] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#231F20] mb-6">
            {direction === 'rtl' ? 'جاهز لبدء رحلتك؟' : 'Ready to start your journey?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {direction === 'rtl' 
              ? 'احجز استشارة مجانية واكتشف كيف يمكننا مساعدتك'
              : 'Book a free consultation and discover how we can help you'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#EE3524] hover:bg-red-600 text-white font-semibold px-12 py-4 text-lg"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#EE3524] text-[#EE3524] hover:bg-[#EE3524] hover:text-white font-semibold px-12 py-4 text-lg"
              onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
            >
              {t('hero.whatsapp')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
