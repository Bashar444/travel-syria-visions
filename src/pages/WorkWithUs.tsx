
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Target, Award, Globe, TrendingUp, Clock, Heart } from 'lucide-react';
import SEO from '@/components/SEO';
import { useState } from 'react';

const WorkWithUs = () => {
  const { direction } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

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
      icon: Users,
      salary: direction === 'rtl'
        ? 'تفاصيل التعويضات تحدد بعد المقابلة، وللاستفسار يرجى التواصل عبر واتساب على الرقم ‎+963 985 453 247‎.'
        : 'Compensation is discussed after the interview. Contact us on WhatsApp at +963 985 453 247 for details.'
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
      icon: Target,
      salary: direction === 'rtl'
        ? 'تفاصيل التعويضات تحدد بعد المقابلة، وللاستفسار يرجى التواصل عبر واتساب على الرقم ‎+963 985 453 247‎.'
        : 'Compensation is discussed after the interview. Contact us on WhatsApp at +963 985 453 247 for details.'
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
      icon: Award,
      salary: direction === 'rtl'
        ? 'تفاصيل التعويضات تحدد بعد المقابلة، وللاستفسار يرجى التواصل عبر واتساب على الرقم ‎+963 985 453 247‎.'
        : 'Compensation is discussed after the interview. Contact us on WhatsApp at +963 985 453 247 for details.'
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
      icon: Globe,
      salary: direction === 'rtl'
        ? 'تفاصيل التعويضات تحدد بعد المقابلة، وللاستفسار يرجى التواصل عبر واتساب على الرقم ‎+963 985 453 247‎.'
        : 'Compensation is discussed after the interview. Contact us on WhatsApp at +963 985 453 247 for details.'
    }
  ];

  const benefits = [
    {
      title: direction === 'rtl' ? 'رسالة هادفة' : 'Meaningful Mission',
      description: direction === 'rtl' 
        ? 'ساهم في تغيير حياة الطلاب وبناء مستقبل أفضل للتعليم في المنطقة'
        : 'Contribute to changing students\' lives and building a better future for education in the region',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      title: direction === 'rtl' ? 'بيئة عمل مرنة' : 'Flexible Work Environment',
      description: direction === 'rtl' 
        ? 'نوفر بيئة عمل مرنة تدعم التوازن بين الحياة المهنية والشخصية'
        : 'We provide a flexible work environment that supports work-life balance',
      icon: Clock,
      color: 'bg-blue-500'
    },
    {
      title: direction === 'rtl' ? 'فرص للنمو' : 'Growth Opportunities',
      description: direction === 'rtl' 
        ? 'نقدم فرص تطوير مهني مستمرة وإمكانيات للترقي والنمو المهني'
        : 'We offer continuous professional development opportunities and possibilities for promotion and career growth',
      icon: TrendingUp,
      color: 'bg-green-500'
    }
  ];

  const ApplicationModal = () => (
    showApplicationModal && (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowApplicationModal(false)}>
        <div className="bg-white rounded-lg p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
          <h3 className="text-2xl font-bold text-[#0E1B34] mb-4">
            {direction === 'rtl' ? 'تقديم الطلب' : 'Submit Application'}
          </h3>
          <p className="text-gray-600 mb-6">
            {direction === 'rtl' 
              ? 'سنتواصل معك قريباً لمناقشة الفرصة المناسبة لك'
              : 'We will contact you soon to discuss the right opportunity for you'
            }
          </p>
          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-[#0018A8] hover:bg-[#00A3E0]"
              onClick={() => {
                setShowApplicationModal(false);
                window.location.href = '/contact';
              }}
            >
              {direction === 'rtl' ? 'ارسل السيرة الذاتية' : 'Send CV'}
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setShowApplicationModal(false)}
            >
              {direction === 'rtl' ? 'إغلاق' : 'Close'}
            </Button>
          </div>
        </div>
      </div>
    )
  );

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
      
      <ApplicationModal />
      
      <div className="min-h-screen bg-[#F6F8FC]">
        {/* Hero Section with enhanced animation */}
        <section className="bg-gradient-to-br from-[#0018A8] to-[#0E1B34] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`text-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {direction === 'rtl' ? 'اعمل معنا' : 'Work with Us'}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in delay-200">
                {direction === 'rtl' 
                  ? 'انضم إلى فريقنا وكن جزءًا من رسالتنا لمساعدة الطلاب السوريين في تحقيق أحلامهم التعليمية'
                  : 'Join our team and be part of our mission to help Syrian students achieve their educational dreams'
                }
              </p>
              <Button 
                size="lg"
                className="bg-[#EE3524] hover:bg-red-600 text-white font-semibold px-8 py-4 text-lg animate-bounce"
                onClick={() => setShowApplicationModal(true)}
              >
                {direction === 'rtl' ? 'ابدأ الآن' : 'Start Now'}
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us - FIXED TITLE */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-8">
                {direction === 'rtl' ? 'لماذا تختار العمل معنا؟' : 'Why Choose to Work with Us?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                      hoveredCard === index ? 'scale-105' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`${benefit.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0018A8] mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-[#2B3A3E] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Opportunities - Enhanced */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-4 animate-fade-in">
                {direction === 'rtl' ? 'الفرص المتاحة' : 'Available Opportunities'}
              </h2>
              <p className="text-xl text-[#2B3A3E] animate-fade-in delay-200">
                {direction === 'rtl' 
                  ? 'اكتشف الوظائف المتاحة وانضم إلى فريقنا المتنامي'
                  : 'Discover available positions and join our growing team'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-2xl transition-all duration-300 border-[#747474]/20 transform hover:-translate-y-1 hover:border-[#0018A8]/30"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="bg-[#0018A8] p-3 rounded-full animate-pulse">
                          <opportunity.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-[#0E1B34]">{opportunity.title}</CardTitle>
                          <p className="text-[#0018A8] font-semibold">{opportunity.salary}</p>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {direction === 'rtl' ? 'متاح' : 'Available'}
                      </div>
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
                      className="w-full bg-[#0018A8] hover:bg-[#00A3E0] text-white transition-all duration-300 hover:shadow-lg"
                      onClick={() => setShowApplicationModal(true)}
                    >
                      {direction === 'rtl' ? 'قدم الآن' : 'Apply Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process - Enhanced */}
        <section className="py-20 bg-[#F6F8FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-4">
                {direction === 'rtl' ? 'كيفية التقديم' : 'How to Apply'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="text-center group">
                    <div className="bg-[#0018A8] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-[#00A3E0] transition-all duration-300 transform group-hover:scale-110">
                      {step}
                    </div>
                    <h3 className="font-semibold text-[#0E1B34] mb-2">
                      {step === 1 && (direction === 'rtl' ? 'اختر الوظيفة' : 'Choose Position')}
                      {step === 2 && (direction === 'rtl' ? 'قدم طلبك' : 'Submit Application')}
                      {step === 3 && (direction === 'rtl' ? 'المقابلة' : 'Interview')}
                      {step === 4 && (direction === 'rtl' ? 'انضم إلينا' : 'Join Us')}
                    </h3>
                    <p className="text-[#2B3A3E] group-hover:text-[#0018A8] transition-colors duration-300">
                      {step === 1 && (direction === 'rtl' 
                        ? 'اختر الوظيفة التي تناسب مهاراتك واهتماماتك'
                        : 'Choose the position that matches your skills and interests'
                      )}
                      {step === 2 && (direction === 'rtl' 
                        ? 'أرسل سيرتك الذاتية ورسالة تغطية عبر نموذج الاتصال'
                        : 'Send your CV and cover letter through the contact form'
                      )}
                      {step === 3 && (direction === 'rtl' 
                        ? 'سنتواصل معك لترتيب مقابلة شخصية أو عبر الفيديو'
                        : 'We will contact you to arrange a personal or video interview'
                      )}
                      {step === 4 && (direction === 'rtl' 
                        ? 'ابدأ رحلتك المهنية معنا وساهم في نجاح طلابنا'
                        : 'Start your career journey with us and contribute to our students\' success'
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-20 bg-gradient-to-r from-[#0E1B34] to-[#0018A8] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              {direction === 'rtl' ? 'هل أنت مستعد للانضمام إلينا؟' : 'Are you ready to join us?'}
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in delay-200">
              {direction === 'rtl' 
                ? 'ابدأ رحلتك المهنية معنا وساهم في تحقيق أحلام الطلاب'
                : 'Start your professional journey with us and contribute to achieving students\' dreams'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#EE3524] hover:bg-red-600 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowApplicationModal(true)}
              >
                {direction === 'rtl' ? 'قدم الآن' : 'Apply Now'}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0018A8] font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
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
