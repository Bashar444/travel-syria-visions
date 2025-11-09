import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Globe, Languages as LanguagesIcon } from 'lucide-react';

const languagePrograms = [
  {
    title: 'برنامج اللغة الإنجليزية الأكاديمي',
    overview:
      'برنامج مكثف يطور مهارات الاستماع، المحادثة، القراءة، والكتابة الأكاديمية مع تحضير شامل لاختبارات IELTS وTOEFL وتدريب على مقابلات الجامعات والسفارات.',
    highlights: [
      'خطة تعلم فردية تبدأ باختبار تحديد مستوى دقيق',
      'جلسات مباشرة مع مدربين معتمدين وخبراء لغويين',
      'محتوى مخصص للطلاب السوريين الراغبين بالدراسة في الخارج',
      'نماذج تدريبية على كتابة المقالات الأكاديمية وخطابات الدافع',
      'محاكاة لمقابلات القبول الجامعي والتأشيرات الطلابية'
    ]
  },
  {
    title: 'برنامج اللغة الألمانية الجامعي',
    overview:
      'مسار متكامل للوصول إلى مستويات B2 و C1 مع تحضير شامل لاختبارات TestDaF و DSH وتدريب ثقافي يساعدك على الاندماج السلس في المجتمع الألماني.',
    highlights: [
      'مناهج معتمدة وأدوات تفاعلية تدعم سرعة اكتساب اللغة',
      'ورش عمل حول الثقافة الجامعية الألمانية ومتطلبات الجامعات',
      'تدريب عملي على مهارات التواصل مع السفارات والجامعات',
      'جلسات محاكاة لاجتياز مقابلات المنح والبرامج الممولة',
      'متابعة أسبوعية وتقارير تقدم تفصيلية باللغة العربية'
    ]
  }
];

const Languages = () => {
  const { direction } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-16" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <header className="mb-16 text-right">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-slate-200">
            <LanguagesIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">دورات لغوية احترافية للطلاب السوريين</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mt-6 mb-4">
            برامج الإعداد اللغوي للجامعات الدولية
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl ml-auto">
            نجهز الطلاب السوريين لاجتياز المتطلبات اللغوية للقبول الجامعي في الخارج من خلال برامج مركزة للغة الإنجليزية والألمانية مع محتوى تدريبي متكامل ودعم استشاري مستمر طوال فترة التعلم.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {languagePrograms.map((program) => (
            <Card key={program.title} className="border border-slate-200 shadow-md hover:shadow-lg transition-shadow" dir={direction}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 flex items-center gap-3 justify-end">
                  <span>{program.title}</span>
                  <Globe className="w-6 h-6 text-blue-600" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-right">
                  <p className="text-sm text-blue-900 leading-relaxed">{program.overview}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-blue-600 mb-4">أبرز محاور البرنامج</h3>
                  <ul className="space-y-3">
                    {program.highlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center" dir="rtl">
          <div className="inline-flex flex-col sm:flex-row-reverse items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-lg border border-blue-100">
            <p className="text-base text-slate-700 max-w-xl text-right">
              ابدأ اختبار تحديد المستوى المجاني مع فريقنا لتحصل على خطة تعليمية مخصصة وخارطة طريق واضحة للوصول إلى المتطلبات اللغوية للجامعة التي تطمح لها.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => window.location.assign('/contact')}
            >
              احجز تقييمك الآن
            </Button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            نوفر تقارير تقدم باللغة العربية، جلسات دعم مباشرة، وجدولة مرنة تناسب التزاماتك اليومية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
