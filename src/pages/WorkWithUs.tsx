
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Target, Award, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const WorkWithUs = () => {
  const { direction } = useLanguage();

  const opportunities = [
    {
      title: direction === 'rtl' ? 'مستشار تعليمي' : 'Educational Consultant',
      description: direction === 'rtl' 
        ? 'انضم إلى فريقنا كمستشار تعليمي لمساعدة الطلاب في اختيار التخصص والجامعة المناسبة'
        : 'Join our team as an educational consultant to help students choose the right specialization and university',
      requirements: [
        direction === 'rtl' ? 'خبرة في التعليم العالي' : 'Experience in higher education',
        direction === 'rtl' ? 'إتقان اللغة الإنجليزية' : 'Fluency in English',
        direction === 'rtl' ? 'مهارات تواصل ممتازة' : 'Excellent communication skills'
      ],
      icon: Users
    },
    {
      title: direction === 'rtl' ? 'مطور أعمال' : 'Business Developer',
      description: direction === 'rtl' 
        ? 'ساعدنا في بناء شراكات جديدة مع الجامعات العالمية وتوسيع نطاق خدماتنا'
        : 'Help us build new partnerships with international universities and expand our services',
      requirements: [
        direction === 'rtl' ? 'خبرة في تطوير الأعمال' : 'Business development experience',
        direction === 'rtl' ? 'شبكة علاقات قوية' : 'Strong network',
        direction === 'rtl' ? 'مهارات تفاوض' : 'Negotiation skills'
      ],
      icon: Target
    },
    {
      title: direction === 'rtl' ? 'منسق أكاديمي' : 'Academic Coordinator',
      description: direction === 'rtl' 
        ? 'تنسيق العمليات الأكاديمية وضمان حصول الطلاب على أفضل خدمة ممكنة'
        : 'Coordinate academic operations and ensure students receive the best possible service',
      requirements: [
        direction === 'rtl' ? 'شهادة جامعية' : 'University degree',
        direction === 'rtl' ? 'مهارات تنظيمية' : 'Organizational skills',
        direction === 'rtl' ? 'اهتمام بالتفاصيل' : 'Attention to detail'
      ],
      icon: Award
    },
    {
      title: direction === 'rtl' ? 'ممثل دولي' : 'International Representative',
      description: direction === 'rtl' 
        ? 'كن ممثلنا في بلدك لمساعدة الطلاب المحليين والترويج لخدماتنا'
        : 'Be our representative in your country to help local students and promote our services',
      requirements: [
        direction === 'rtl' ? 'إقامة خارج سوريا' : 'Residence outside Syria',
        direction === 'rtl' ? 'فهم للثقافة المحلية' : 'Understanding of local culture',
        direction === 'rtl' ? 'شغف بالتعليم' : 'Passion for education'
      ],
      icon: Globe
    }
  ];

  return (
    <>
      <SEO 
        title={direction === 'rtl' ? "اعمل معنا - Travel.Ltd" : "Work with Us - Travel.Ltd"}
        description={direction === 'rtl' 
          ? "انضم إلى فريق Travel.Ltd وساعد الطلاب السوريين في تحقيق أحلامهم التعليمية. فرص عمل متنوعة في مجال الاستشارات التعليمية."
          : "Join the Travel.Ltd team and help Syrian students achieve their educational dreams. Various job opportunities in educational consulting."
        }
        keywords={direction === 'rtl' ? "وظائف, اعمل معنا, مستشار تعليمي, Travel.Ltd, فرص عمل" : "jobs, work with us, educational consultant, Travel.Ltd, job opportunities"}
      />
      
      <div className="min-h-screen bg-[#F6F8FC]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0018A8] to-[#0E1B34] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {direction === 'rtl' ? 'اعمل معنا' : 'Work with Us'}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                {direction === 'rtl' 
                  ? 'انضم إلى فريقنا وكن جزءًا من رسالتنا لمساعدة الطلاب السوريين في تحقيق أحلامهم التعليمية'
                  : 'Join our team and be part of our mission to help Syrian students achieve their educational dreams'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-8">
                {direction === 'rtl' ? 'لماذا تختار العمل معنا؟' : 'Why Choose to Work with Us?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0018A8] mb-4">
                    {direction === 'rtl' ? 'رسالة هادفة' : 'Meaningful Mission'}
                  </h3>
                  <p className="text-[#2B3A3E]">
                    {direction === 'rtl' 
                      ? 'ساهم في تغيير حياة الطلاب وبناء مستقبل أفضل للتعليم في المنطقة'
                      : 'Contribute to changing students\' lives and building a better future for education in the region'
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0018A8] mb-4">
                    {direction === 'rtl' ? 'بيئة عمل مرنة' : 'Flexible Work Environment'}
                  </h3>
                  <p className="text-[#2B3A3E]">
                    {direction === 'rtl' 
                      ? 'نوفر بيئة عمل مرنة تدعم التوازن بين الحياة المهنية والشخصية'
                      : 'We provide a flexible work environment that supports work-life balance'
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0018A8] mb-4">
                    {direction === 'rtl' ? 'فرص للنمو' : 'Growth Opportunities'}
                  </h3>
                  <p className="text-[#2B3A3E]">
                    {direction === 'rtl' 
                      ? 'نقدم فرص تطوير مهني مستمرة وإمكانيات للترقي والنمو المهني'
                      : 'We offer continuous professional development opportunities and possibilities for promotion and career growth'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Opportunities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-4">
                {direction === 'rtl' ? 'الفرص المتاحة' : 'Available Opportunities'}
              </h2>
              <p className="text-xl text-[#2B3A3E]">
                {direction === 'rtl' 
                  ? 'اكتشف الوظائف المتاحة وانضم إلى فريقنا المتنامي'
                  : 'Discover available positions and join our growing team'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-[#747474]/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="bg-[#0018A8] p-3 rounded-full">
                        <opportunity.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-[#0E1B34]">{opportunity.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#2B3A3E] mb-4 leading-relaxed">
                      {opportunity.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#0018A8] mb-2">
                        {direction === 'rtl' ? 'المتطلبات:' : 'Requirements:'}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-[#2B3A3E]">
                        {opportunity.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-[#0018A8] hover:bg-[#00A3E0] text-white transition-all duration-300"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {direction === 'rtl' ? 'قدم الآن' : 'Apply Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-[#F6F8FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-4">
                {direction === 'rtl' ? 'كيفية التقديم' : 'How to Apply'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">
                    {direction === 'rtl' ? 'اختر الوظيفة' : 'Choose Position'}
                  </h3>
                  <p className="text-[#2B3A3E]">
                    {direction === 'rtl' 
                      ? 'اختر الوظيفة التي تناسب مهاراتك واهتماماتك'
                      : 'Choose the position that matches your skills and interests'
                    }
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">
                    {direction === 'rtl' ? 'قدم طلبك' : 'Submit Application'}
                  </h3>
                  <p className="text-[#2B3A3E]">
                    {direction === 'rtl' 
                      ? 'أرسل سيرتك الذاتية ورسالة تغطية عبر نموذج الاتصال'
                      : 'Send your CV and cover letter through the contact form'
                    }
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">
                    {direction === 'rtl' ? 'المقابلة' : 'Interview'}
                  </h3>
                  <p className="text-[#2B3A3E]">
                    {direction === 'rtl' 
                      ? 'سنتواصل معك لترتيب مقابلة شخصية أو عبر الفيديو'
                      : 'We will contact you to arrange a personal or video interview'
                    }
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">
                    {direction === 'rtl' ? 'انضم إلينا' : 'Join Us'}
                  </h3>
                  <p className="text-[#2B3A3E]">
                    {direction === 'rtl' 
                      ? 'ابدأ رحلتك المهنية معنا وساهم في نجاح طلابنا'
                      : 'Start your career journey with us and contribute to our students\' success'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0E1B34] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {direction === 'rtl' ? 'هل أنت مستعد للانضمام إلينا؟' : 'Are you ready to join us?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {direction === 'rtl' 
                ? 'ابدأ رحلتك المهنية معنا وساهم في تحقيق أحلام الطلاب'
                : 'Start your professional journey with us and contribute to achieving students\' dreams'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#0018A8] hover:bg-[#00A3E0] text-white font-semibold px-8 py-4 text-lg transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                {direction === 'rtl' ? 'تواصل معنا الآن' : 'Contact Us Now'}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0018A8] font-semibold px-8 py-4 text-lg transition-all duration-300"
                onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
              >
                {direction === 'rtl' ? 'واتساب' : 'WhatsApp'}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkWithUs;
