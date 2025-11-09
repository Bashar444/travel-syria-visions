
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'ما هي الخدمات التعليمية التي تقدمونها للطلاب السوريين؟',
    answer:
      'نقدم خدمات شاملة تشمل القبول الجامعي في عدة دول، متابعة طلبات المنح السعودية، معالجة التأشيرات الطلابية، وتنظيم برامج الحج والعمرة مع متابعة دقيقة بنسبة نجاح تصل إلى 95٪.'
  },
  {
    question: 'كم تستغرق عملية القبول الجامعي والحصول على التأشيرة؟',
    answer:
      'تستغرق معالجة القبول الجامعي عادة بين 4 إلى 8 أسابيع بحسب الجامعة والبرنامج، بينما تتراوح مدة معالجة التأشيرة بين أسبوعين وأربعة أسابيع إضافية. نبقى على تواصل دائم معك لتزويدك بقائمة المستندات المطلوبة وأي تحديثات جديدة.'
  },
  {
    question: 'ما هي المستندات الأساسية المطلوبة للتقديم على الجامعات؟',
    answer:
      'تتضمن المستندات الأساسية الشهادة الثانوية أو الجامعية مترجمة ومصدقة، كشف الدرجات، جواز سفر ساري المفعول، شهادة إتقان اللغة المطلوبة، خطاب الدافع الشخصي، وخطابات توصية أكاديمية. قد تختلف التفاصيل حسب الجامعة والتخصص.'
  },
  {
    question: 'هل تضمنون الحصول على القبول الجامعي؟',
    answer:
      'نحقق معدل نجاح مرتفعًا بفضل خبرتنا وشراكاتنا الدولية، إلا أن القرار النهائي يعود للجامعة. نعمل على تجهيز ملفك بما يزيد فرص قبولك إلى أقصى حد ممكن.'
  },
  {
    question: 'ما تكلفة خدماتكم التعليمية والاستشارية؟',
    answer:
      'رسوم باقة الخدمات الشاملة تبدأ من 1099 دولارًا أمريكيًا، وتشمل الاستشارة التعليمية، تجهيز ملف القبول، متابعة طلب التأشيرة، والدعم المستمر حتى إتمام التسجيل.'
  },
  {
    question: 'في أي دول يمكنني الدراسة من خلال خدماتكم؟',
    answer:
      'نساعد الطلاب السوريين في التقديم إلى جامعات معتمدة في إيطاليا، الهند، رومانيا، وعدة وجهات دراسية أخرى، مع اختيار البرامج الأنسب لأهدافك الأكاديمية والمالية.'
  }
];

const FAQ = () => {
  const { direction } = useLanguage();

  return (
    <section className="content-wrapper" dir="rtl" role="complementary" aria-label="الأسئلة الشائعة حول خدماتنا التعليمية">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="w-6 h-6 text-blue-600" aria-hidden="true" />
            <CardTitle className="text-2xl font-bold text-gray-900 text-content">
              <h2>
                <strong>الأسئلة الشائعة حول خدماتنا التعليمية</strong>
              </h2>
            </CardTitle>
          </div>
          <p className="text-gray-600 text-content content-spacing">
            إجابات واضحة على أكثر استفسارات الطلاب السوريين شيوعًا حول القبول الجامعي، المنح، والتأشيرات.
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" role="list" aria-label="قائمة الأسئلة المتكررة">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} role="listitem" dir={direction}>
                <AccordionTrigger className="font-medium text-gray-900 hover:text-blue-600 text-content text-right" role="button" aria-expanded="false">
                  <h3>
                    <strong>{item.question}</strong>
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-content content-spacing" role="region" aria-label={`الإجابة عن: ${item.question}`} dir={direction}>
                  <p>{item.answer}</p>
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
