
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const { language, direction } = useLanguage();

  const faqData = {
    ar: {
      title: 'الأسئلة الشائعة حول خدماتنا التعليمية',
      subtitle: 'إجابات شاملة على الأسئلة الأكثر شيوعاً حول خدمات القبول الجامعي والمنح الدراسية',
      questions: [
        {
          q: 'ما هي الخدمات التعليمية التي تقدمونها للطلاب السوريين؟',
          a: 'نقدم خدمات شاملة تشمل القبول الجامعي في إيطاليا والهند ورومانيا، معالجة التأشيرات الطلابية، خدمات الحج والعمرة، والمنح الدراسية السعودية. جميع خدماتنا مصممة خصيصاً للطلاب السوريين الراغبين في الدراسة بالخارج مع معدل نجاح 95%.'
        },
        {
          q: 'كم تستغرق عملية القبول الجامعي والحصول على التأشيرة؟',
          a: 'تتراوح مدة معالجة القبول الجامعي من 4-8 أسابيع حسب الجامعة والبرنامج، بينما تستغرق معالجة التأشيرة 2-4 أسابيع إضافية. نقوم بمتابعة طلبك خطوة بخطوة ونبقيك على اطلاع دائم بالتطورات والمستندات المطلوبة.'
        },
        {
          q: 'ما هي المستندات المطلوبة للتقديم على الجامعات؟',
          a: 'المستندات الأساسية تشمل: الشهادة الثانوية أو الجامعية مترجمة ومصدقة، كشف الدرجات الأكاديمي، جواز السفر ساري المفعول، شهادة إتقان اللغة الإنجليزية (IELTS/TOEFL)، خطاب الدافع الشخصي، وخطابات التوصية الأكاديمية. قد تختلف المتطلبات حسب الجامعة والتخصص المطلوب.'
        },
        {
          q: 'هل تضمنون الحصول على القبول الجامعي؟',
          a: 'نحن نحقق معدل نجاح 95% في الحصول على القبولات الجامعية للطلاب السوريين. رغم أننا لا نستطيع ضمان القبول بنسبة 100% بسبب سياسات الجامعات، إلا أن خبرتنا الواسعة وشراكاتنا القوية مع الجامعات الدولية تزيد من فرص نجاحك بشكل كبير.'
        },
        {
          q: 'ما هي تكلفة خدماتكم التعليمية والاستشارية؟',
          a: 'تبلغ تكلفة حزمة خدماتنا الشاملة 1099 دولار أمريكي، وهي تشمل جميع خدمات القبول الجامعي، معالجة التأشيرة، والاستشارة التعليمية. هذا السعر شامل ولا توجد رسوم إضافية مخفية أو مفاجآت في التكلفة.'
        },
        {
          q: 'في أي دول يمكنني الدراسة من خلال خدماتكم؟',
          a: 'نساعدك في التقديم للجامعات في إيطاليا، الهند، رومانيا، وعدة دول أخرى حول العالم. نختار الجامعات بعناية بناءً على تفضيلاتك الأكاديمية، أهدافك المهنية، وإمكانياتك المالية لضمان أفضل تطابق ممكن.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions About Our Educational Services',
      subtitle: 'Comprehensive answers to the most common questions about university admissions and scholarship services for Syrian students',
      questions: [
        {
          q: 'What educational services do you provide for Syrian students?',
          a: 'We offer comprehensive services including university admissions in Italy, India, Romania, student visa processing, Hajj & Umrah travel services, and Saudi scholarship programs. All our services are specifically designed for Syrian students seeking to study abroad with a 95% success rate and professional guidance throughout the process.'
        },
        {
          q: 'How long does the university admission and visa process take?',
          a: 'The university admission processing typically takes 4-8 weeks, depending on the specific university and program requirements, while visa processing takes an additional 2-4 weeks. We track your application every step of the way and keep you constantly updated on all developments, required documents, and processing timelines.'
        },
        {
          q: 'What documents are required for university applications?',
          a: 'The essential documents include: translated and certified high school or university certificates, academic transcripts, valid passport, English proficiency certificates (IELTS/TOEFL), personal motivation letter, and academic recommendation letters. Specific requirements may vary depending on the chosen university and academic program you wish to pursue.'
        },
        {
          q: 'Do you guarantee university admission acceptance?',
          a: 'We maintain a 95% success rate in securing university admissions for Syrian students. While we cannot guarantee 100% acceptance due to university admission policies, our extensive experience and strong partnerships with international educational institutions significantly increase your chances of successful admission and academic placement.'
        },
        {
          q: 'What are your educational service fees and consultation costs?',
          a: 'Our comprehensive service package costs $1,099 USD, which includes all university admission services, visa processing assistance, and educational consultation. This is an all-inclusive price with no hidden additional fees, surprise charges, or extra costs throughout the entire application process.'
        },
        {
          q: 'Which countries can I study in through your services?',
          a: 'We help Syrian students apply to universities in Italy, India, Romania, and several other countries worldwide. We carefully select universities based on your academic preferences, career goals, financial capabilities, and desired study destinations to ensure the best possible match for your educational journey.'
        }
      ]
    }
  };

  const currentData = faqData[language as keyof typeof faqData];

  return (
    <section className="content-wrapper" dir={direction} role="complementary" aria-label="Frequently asked questions about educational services">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="w-6 h-6 text-blue-600" aria-hidden="true" />
            <CardTitle className="text-2xl font-bold text-gray-900 text-content">
              <h2><strong>{currentData.title}</strong></h2>
            </CardTitle>
          </div>
          <p className="text-gray-600 text-content content-spacing">
            {currentData.subtitle}
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" role="list" aria-label="FAQ list">
            {currentData.questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} role="listitem">
                <AccordionTrigger className="font-medium text-gray-900 hover:text-blue-600 text-content text-left" role="button" aria-expanded="false">
                  <h3><strong>{item.q}</strong></h3>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-content content-spacing" role="region" aria-label={`Answer to: ${item.q}`}>
                  <p>{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQ;
