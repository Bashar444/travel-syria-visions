
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const { language, direction } = useLanguage();

  const faqData = {
    ar: {
      title: 'الأسئلة الشائعة',
      subtitle: 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا',
      questions: [
        {
          q: 'ما هي الخدمات التي تقدمونها؟',
          a: 'نقدم خدمات شاملة تشمل القبول الجامعي، معالجة التأشيرات، خدمات الحج والعمرة، والمنح الدراسية السعودية. جميع خدماتنا مصممة خصيصاً للطلاب السوريين الراغبين في الدراسة بالخارج.'
        },
        {
          q: 'كم تستغرق عملية القبول الجامعي؟',
          a: 'تتراوح مدة معالجة القبول الجامعي من 4-8 أسابيع حسب الجامعة والبرنامج. نقوم بمتابعة طلبك خطوة بخطوة ونبقيك على اطلاع دائم بالتطورات.'
        },
        {
          q: 'ما هي المستندات المطلوبة للتقديم؟',
          a: 'المستندات الأساسية تشمل: الشهادة الثانوية أو الجامعية، كشف الدرجات، جواز السفر، شهادة إتقان اللغة الإنجليزية، خطاب الدافع، وخطابات التوصية. قد تختلف المتطلبات حسب الجامعة والتخصص.'
        },
        {
          q: 'هل تضمنون الحصول على القبول؟',
          a: 'نحن نحقق معدل نجاح 95% في الحصول على القبولات الجامعية. رغم أننا لا نستطيع ضمان القبول بنسبة 100%، إلا أن خبرتنا الواسعة وشراكاتنا مع الجامعات تزيد من فرص نجاحك بشكل كبير.'
        },
        {
          q: 'ما هي تكلفة خدماتكم؟',
          a: 'تبلغ تكلفة خدماتنا 1099 دولار أمريكي، وهي تشمل جميع خدمات القبول الجامعي ومعالجة التأشيرة. هذا السعر شامل ولا توجد رسوم إضافية مخفية.'
        },
        {
          q: 'في أي دول يمكنني الدراسة؟',
          a: 'نساعدك في التقديم للجامعات في إيطاليا، الهند، رومانيا، وعدة دول أخرى. نختار الجامعات بناءً على تفضيلاتك الأكاديمية وإمكانياتك المالية.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to the most common questions about our services',
      questions: [
        {
          q: 'What services do you provide?',
          a: 'We offer comprehensive services including university admissions, visa processing, Hajj & Umrah services, and Saudi scholarship programs. All our services are specifically designed for Syrian students seeking to study abroad and pursue their educational goals.'
        },
        {
          q: 'How long does the university admission process take?',
          a: 'The university admission processing typically takes 4-8 weeks, depending on the specific university and program requirements. We track your application every step of the way and keep you constantly updated on all developments and progress.'
        },
        {
          q: 'What documents are required for application?',
          a: 'The essential documents include: high school or university certificates, academic transcripts, valid passport, English proficiency certificates (IELTS/TOEFL), motivation letter, and recommendation letters. Specific requirements may vary depending on the chosen university and academic program.'
        },
        {
          q: 'Do you guarantee admission acceptance?',
          a: 'We maintain a 95% success rate in securing university admissions for our students. While we cannot guarantee 100% acceptance due to university policies, our extensive experience and strong partnerships with educational institutions significantly increase your chances of successful admission.'
        },
        {
          q: 'What are your service fees?',
          a: 'Our comprehensive service package costs $1,099 USD, which includes all university admission services and visa processing assistance. This is an all-inclusive price with no hidden additional fees or surprise charges.'
        },
        {
          q: 'Which countries can I study in?',
          a: 'We help students apply to universities in Italy, India, Romania, and several other countries worldwide. We carefully select universities based on your academic preferences, career goals, and financial capabilities to ensure the best possible match.'
        }
      ]
    }
  };

  const currentData = faqData[language as keyof typeof faqData];

  return (
    <div className="content-wrapper" dir={direction}>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <CardTitle className="text-2xl font-bold text-gray-900 text-content">
              {currentData.title}
            </CardTitle>
          </div>
          <p className="text-gray-600 text-content content-spacing">
            {currentData.subtitle}
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {currentData.questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-medium text-gray-900 hover:text-blue-600 text-content text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-content content-spacing">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;
