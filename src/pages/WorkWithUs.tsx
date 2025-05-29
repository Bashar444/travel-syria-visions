
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Target, Award, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const WorkWithUs = () => {
  const { direction } = useLanguage();

  const opportunities = [
    {
      title: 'مستشار تعليمي',
      description: 'انضم إلى فريقنا كمستشار تعليمي لمساعدة الطلاب في اختيار التخصص والجامعة المناسبة',
      requirements: ['خبرة في التعليم العالي', 'إتقان اللغة الإنجليزية', 'مهارات تواصل ممتازة'],
      icon: Users
    },
    {
      title: 'مطور أعمال',
      description: 'ساعدنا في بناء شراكات جديدة مع الجامعات العالمية وتوسيع نطاق خدماتنا',
      requirements: ['خبرة في تطوير الأعمال', 'شبكة علاقات قوية', 'مهارات تفاوض'],
      icon: Target
    },
    {
      title: 'منسق أكاديمي',
      description: 'تنسيق العمليات الأكاديمية وضمان حصول الطلاب على أفضل خدمة ممكنة',
      requirements: ['شهادة جامعية', 'مهارات تنظيمية', 'اهتمام بالتفاصيل'],
      icon: Award
    },
    {
      title: 'ممثل دولي',
      description: 'كن ممثلنا في بلدك لمساعدة الطلاب المحليين والترويج لخدماتنا',
      requirements: ['إقامة خارج سوريا', 'فهم للثقافة المحلية', 'شغف بالتعليم'],
      icon: Globe
    }
  ];

  return (
    <>
      <SEO 
        title="اعمل معنا - Travel.Ltd"
        description="انضم إلى فريق Travel.Ltd وساعد الطلاب السوريين في تحقيق أحلامهم التعليمية. فرص عمل متنوعة في مجال الاستشارات التعليمية."
        keywords="وظائف, اعمل معنا, مستشار تعليمي, Travel.Ltd, فرص عمل"
      />
      
      <div className="min-h-screen bg-[#F6F8FC]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0018A8] to-[#0E1B34] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                اعمل معنا
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                انضم إلى فريقنا وكن جزءًا من رسالتنا لمساعدة الطلاب السوريين في تحقيق أحلامهم التعليمية
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0E1B34] mb-8">
                لماذا تختار العمل معنا؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0018A8] mb-4">رسالة هادفة</h3>
                  <p className="text-[#2B3A3E]">ساهم في تغيير حياة الطلاب وبناء مستقبل أفضل للتعليم في المنطقة</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0018A8] mb-4">بيئة عمل مرنة</h3>
                  <p className="text-[#2B3A3E]">نوفر بيئة عمل مرنة تدعم التوازن بين الحياة المهنية والشخصية</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0018A8] mb-4">فرص للنمو</h3>
                  <p className="text-[#2B3A3E]">نقدم فرص تطوير مهني مستمرة وإمكانيات للترقي والنمو المهني</p>
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
                الفرص المتاحة
              </h2>
              <p className="text-xl text-[#2B3A3E]">
                اكتشف الوظائف المتاحة وانضم إلى فريقنا المتنامي
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
                      <h4 className="font-semibold text-[#0018A8] mb-2">المتطلبات:</h4>
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
                      قدم الآن
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
                كيفية التقديم
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">اختر الوظيفة</h3>
                  <p className="text-[#2B3A3E]">اختر الوظيفة التي تناسب مهاراتك واهتماماتك</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">قدم طلبك</h3>
                  <p className="text-[#2B3A3E]">أرسل سيرتك الذاتية ورسالة تغطية عبر نموذج الاتصال</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">المقابلة</h3>
                  <p className="text-[#2B3A3E]">سنتواصل معك لترتيب مقابلة شخصية أو عبر الفيديو</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0018A8] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-[#0E1B34] mb-2">انضم إلينا</h3>
                  <p className="text-[#2B3A3E]">ابدأ رحلتك المهنية معنا وساهم في نجاح طلابنا</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0E1B34] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              هل أنت مستعد للانضمام إلينا؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ابدأ رحلتك المهنية معنا وساهم في تحقيق أحلام الطلاب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#0018A8] hover:bg-[#00A3E0] text-white font-semibold px-8 py-4 text-lg transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                تواصل معنا الآن
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0018A8] font-semibold px-8 py-4 text-lg transition-all duration-300"
                onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
              >
                واتساب
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkWithUs;
