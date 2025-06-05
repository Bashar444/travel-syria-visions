
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
      subtitle: 'Answers to the most common questions about our services',
      questions: [
        {
          q: 'What services do you provide?',
          a: 'We offer comprehensive services including university admissions, visa processing, Hajj & Umrah services, and Saudi scholarships. All our services are specifically designed for Syrian students seeking to study abroad.'
        },
        {
          q: 'How long does the university admission process take?',
          a: 'University admission processing takes 4-8 weeks depending on the university and program. We track your application step by step and keep you constantly updated on developments.'
        },
        {
          q: 'What documents are required for application?',
          a: 'Basic documents include: high school or university certificate, transcript, passport, English proficiency certificate, motivation letter, and recommendation letters. Requirements may vary by university and major.'
        },
        {
          q: 'Do you guarantee admission acceptance?',
          a: 'We achieve a 95% success rate in obtaining university admissions. While we cannot guarantee 100% acceptance, our extensive experience and university partnerships significantly increase your chances of success.'
        },
        {
          q: 'What are your service costs?',
          a: 'Our services cost $1099 USD, which includes all university admission and visa processing services. This price is comprehensive with no hidden additional fees.'
        },
        {
          q: 'Which countries can I study in?',
          a: 'We help you apply to universities in Italy, India, Romania, and several other countries. We select universities based on your academic preferences and financial capabilities.'
        }
      ]
    }
  };

  const currentData = faqData[language as keyof typeof faqData];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          <CardTitle className="text-2xl font-bold text-gray-900">
            {currentData.title}
          </CardTitle>
        </div>
        <p className="text-gray-600">
          {currentData.subtitle}
        </p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {currentData.questions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-blue-600">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQ;
