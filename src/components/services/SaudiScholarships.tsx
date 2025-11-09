
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, DollarSign, CheckCircle } from 'lucide-react';

const undergraduateScholarships = [
  {
    id: 1,
    name: 'منحة جامعة الملك سعود',
    university: 'جامعة الملك سعود - الرياض',
    location: 'الرياض',
    coverage: 'منحة كاملة لمرحلة البكالوريوس',
    fields: ['الهندسة', 'الطب', 'العلوم', 'علوم الحاسوب'],
    requirements: ['شهادة ثانوية بمعدل مميز', 'درجة IELTS لا تقل عن 6.0 أو ما يعادلها', 'عمر أقل من 25 عامًا'],
    deadline: 'مارس 2024',
  benefits: ['إعفاء كامل من الرسوم', 'مكافأة شهرية مجزية تحدد بعد القبول', 'سكن جامعي مؤمن', 'تأمين صحي شامل'],
    rating: 'امتياز'
  },
  {
    id: 2,
    name: 'منحة جامعة الأميرة نورة',
    university: 'جامعة الأميرة نورة بنت عبدالرحمن',
    location: 'الرياض',
    coverage: 'منحة كاملة للطالبات',
    fields: ['التربية', 'العلوم الصحية', 'الفنون والتصميم', 'إدارة الأعمال'],
    requirements: ['شهادة ثانوية مع معدل مرتفع', 'إجادة اللغة العربية', 'عمر أقل من 23 عامًا'],
    deadline: 'أبريل 2024',
    benefits: ['إعفاء من الرسوم الدراسية', 'بدل معيشة', 'تنقلات داخلية', 'توفير الكتب والمراجع'],
    rating: 'امتياز'
  }
];

const graduateScholarships = [
  {
    id: 3,
    name: 'منحة جامعة الملك عبدالله للعلوم والتقنية KAUST',
    university: 'جامعة الملك عبدالله للعلوم والتقنية - ثول',
    location: 'ثول',
    coverage: 'منحة كاملة لبرامج الماجستير والدكتوراه',
    fields: ['الهندسة', 'العلوم التطبيقية', 'التقنية', 'الرياضيات التطبيقية'],
    requirements: ['شهادة بكالوريوس', 'اختبار GRE أو GMAT', 'درجة TOEFL لا تقل عن 79', 'خبرة بحثية موثقة'],
    deadline: 'يناير 2024',
  benefits: ['إعفاء كامل من الرسوم', 'مكافأة سنوية مجزية تحدد بعد القبول', 'سكن عائلي', 'دعم للأسرة والتأمين الصحي'],
    rating: 'ممتاز جدًا'
  },
  {
    id: 4,
    name: 'برنامج الدراسات العليا بجامعة الإمام',
    university: 'جامعة الإمام محمد بن سعود الإسلامية',
    location: 'الرياض',
    coverage: 'منح جزئية وكاملة حسب التخصص',
    fields: ['الدراسات الإسلامية', 'اللغة العربية', 'الشريعة', 'العلوم التربوية'],
    requirements: ['شهادة بكالوريوس معتمدة', 'إجادة تامة للغة العربية', 'اجتياز اختبار القبول والمقابلة الشخصية'],
    deadline: 'مايو 2024',
    benefits: ['تغطية رسوم الدراسة', 'مكافأة شهرية', 'دعم للأبحاث والمؤتمرات'],
    rating: 'جيد جدًا'
  }
];

const applicationSteps = [
  {
    step: 1,
    title: 'تقييم الملف الأكاديمي',
    description: 'نراجع مؤهلاتك الأكاديمية واللغوية ونحدد فرص القبول الأفضل',
    duration: 'يومان'
  },
  {
    step: 2,
    title: 'تجهيز وتصديق المستندات',
    description: 'نجمع الوثائق، نترجمها ونعتمدها حسب متطلبات الجامعة والملحقية',
    duration: '1-2 أسبوع'
  },
  {
    step: 3,
    title: 'تقديم طلبات المنحة',
    description: 'نقدم الطلبات إلكترونيًا ونتابعها مع الجامعات السعودية المختارة',
    duration: '2-3 أسابيع'
  },
  {
    step: 4,
    title: 'التحضير للمقابلات',
    description: 'تدريب مكثف على المقابلات الشخصية والمتطلبات الإضافية للمنح',
    duration: 'أسبوع واحد'
  },
  {
    step: 5,
    title: 'إجراءات التأشيرة والسفر',
    description: 'إعداد ملف التأشيرة الطلابية وترتيب السفر والاستقبال في السعودية',
    duration: '4-6 أسابيع'
  }
];

const SaudiScholarships = () => {
  const [selectedLevel, setSelectedLevel] = useState<'undergraduate' | 'graduate'>('undergraduate');
  const currentScholarships = selectedLevel === 'undergraduate' ? undergraduateScholarships : graduateScholarships;

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant={selectedLevel === 'undergraduate' ? 'default' : 'outline'}
          onClick={() => setSelectedLevel('undergraduate')}
          className="px-8"
        >
          منح البكالوريوس
        </Button>
        <Button
          variant={selectedLevel === 'graduate' ? 'default' : 'outline'}
          onClick={() => setSelectedLevel('graduate')}
          className="px-8"
        >
          منح الماجستير والدكتوراه
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {currentScholarships.map((scholarship) => (
          <Card key={scholarship.id} className="hover:shadow-lg transition-shadow duration-300" dir="rtl">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="text-right">
                  <CardTitle className="text-lg mb-1">{scholarship.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-2">{scholarship.university}</p>
                  <div className="flex items-center gap-2 justify-end">
                    <Badge variant="secondary">{scholarship.location}</Badge>
                    <Badge variant={scholarship.rating.includes('ممتاز') ? 'default' : 'outline'}>
                      {scholarship.rating}
                    </Badge>
                  </div>
                </div>
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-right">
                  <h4 className="font-semibold text-green-600 mb-1">{scholarship.coverage}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-600 justify-end">
                    <span>{scholarship.deadline}</span>
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-right">
                  <h4 className="font-semibold mb-2">التخصصات المتاحة:</h4>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {scholarship.fields.map((field) => (
                      <Badge key={field} variant="outline" className="text-xs">
                        {field}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <h4 className="font-semibold mb-2">شروط القبول:</h4>
                  <ul className="space-y-1">
                    {scholarship.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center justify-end gap-2">
                        <span>{req}</span>
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-right">
                  <h4 className="font-semibold mb-2">المزايا المالية والمعيشية:</h4>
                  <ul className="space-y-1">
                    {scholarship.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center justify-end gap-2">
                        <span>{benefit}</span>
                        <DollarSign className="w-3 h-3 text-green-500" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    ابدأ طلب المنحة
                  </Button>
                  <Button variant="outline" className="flex-1">
                    احصل على استشارة
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200" dir="rtl">
        <CardHeader>
          <CardTitle className="text-center">خطواتنا لمساعدتك في الحصول على المنحة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {applicationSteps.map((step) => (
              <div key={step.step}>
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 mb-1 leading-relaxed">{step.description}</p>
                <Badge variant="outline" className="text-xs">المدة التقريبية: {step.duration}</Badge>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
            >
              احجز جلسة استشارية مجانية
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaudiScholarships;
