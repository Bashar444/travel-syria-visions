
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import TermsHeader from '@/components/terms/TermsHeader';
import TermsSection from '@/components/terms/TermsSection';
import TermsContact from '@/components/terms/TermsContact';

const Terms = () => {
  const { direction, language } = useLanguage();

  const content = {
    ar: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: 6 يونيو 2025",
      sections: {
        intro: {
          title: "الاتفاقية والقبول",
          content: "مرحباً بك في Travel.Ltd. باستخدام موقعنا الإلكتروني وخدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه والسياسات ذات الصلة. يرجى قراءتها بعناية قبل استخدام خدماتنا. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا."
        },
        definitions: {
          title: "التعريفات",
          content: "في هذه الشروط، تعني:",
          items: [
            "\"الشركة\" أو \"نحن\" أو \"Travel.Ltd\": شركة Travel.Ltd ومعاونيها",
            "\"المستخدم\" أو \"أنت\": أي شخص يستخدم موقعنا أو خدماتنا",
            "\"الخدمات\": جميع الخدمات المقدمة من خلال موقعنا الإلكتروني",
            "\"المحتوى\": أي نص أو صور أو مواد أخرى على الموقع",
            "\"البيانات الشخصية\": أي معلومات تحدد هويتك الشخصية"
          ]
        },
        services: {
          title: "خدماتنا ونطاق العمل",
          content: "تقدم Travel.Ltd مجموعة شاملة من الخدمات التعليمية:",
          items: [
            "خدمات القبول الجامعي والاستشارات التعليمية المتخصصة",
            "معالجة طلبات التأشيرة والوثائق الرسمية",
            "خدمات الحج والعمرة مع مرشدين معتمدين",
            "برامج المنح الدراسية السعودية والدولية",
            "الاستشارات التعليمية والمهنية المتخصصة",
            "خدمات الترجمة والتوثيق القانوني",
            "برامج التحضير للاختبارات الدولية"
          ]
        },
        user_responsibilities: {
          title: "مسؤوليات وواجبات المستخدم",
          content: "بصفتك مستخدماً لخدماتنا، فإنك توافق على الالتزام بما يلي:",
          items: [
            "تقديم معلومات دقيقة وصحيحة وحديثة في جميع الأوقات",
            "عدم استخدام الموقع أو الخدمات لأغراض غير قانونية أو ضارة",
            "احترام حقوق الملكية الفكرية لجميع المحتويات والمواد",
            "عدم محاولة الوصول غير المصرح به للأنظمة أو البيانات",
            "دفع جميع الرسوم والتكاليف المطلوبة في الأوقات المحددة",
            "التعاون مع فريقنا وتقديم الوثائق المطلوبة بطريقة صحيحة",
            "احترام شروط وأحكام الجامعات والمؤسسات الشريكة"
          ]
        },
        fees: {
          title: "الرسوم وسياسة الدفع",
          content: "رسوم خدماتنا تبدأ من 1099 دولار أمريكي وتختلف حسب نوع الخدمة والوجهة. الرسوم غير قابلة للاسترداد إلا في ظروف استثنائية محددة كما هو موضح في سياسة الاسترداد الخاصة بنا. جميع الدفعات تتم عبر قنوات آمنة ومحمية."
        },
        limitations: {
          title: "قيود المسؤولية واستثناءات الضمان",
          content: "Travel.Ltd تعمل كوسيط تعليمي وليست مسؤولة عن:",
          items: [
            "قرارات القبول أو الرفض الصادرة من الجامعات أو المؤسسات التعليمية",
            "تأخير أو رفض طلبات التأشيرة من السلطات الحكومية",
            "تغييرات في سياسات الجامعات أو الحكومات أو القوانين المحلية",
            "خسائر أو أضرار غير مباشرة أو تبعية أو عرضية",
            "قوى قاهرة مثل الكوارث الطبيعية أو الأوبئة أو الحروب",
            "أخطاء أو تأخير من أطراف ثالثة مثل شركات الشحن أو البنوك"
          ]
        },
        termination: {
          title: "إنهاء الخدمة والحساب",
          content: "يحق لنا إنهاء أو تعليق حسابك وخدماتك فوراً إذا:",
          items: [
            "انتهكت أي من شروط الخدمة أو السياسات المعمول بها",
            "قدمت معلومات خاطئة أو مضللة أو مزورة",
            "لم تدفع الرسوم أو التكاليف المستحقة في الأوقات المحددة",
            "استخدمت الخدمة لأغراض غير قانونية أو ضارة",
            "أظهرت سلوكاً غير لائق أو مسيئاً تجاه فريقنا",
            "انتهكت حقوق الطرف الثالث أو القوانين المعمول بها"
          ]
        },
        intellectual_property: {
          title: "الملكية الفكرية وحقوق الطبع",
          content: "جميع المحتويات والعلامات التجارية والشعارات والمواد التعليمية الموجودة على موقعنا هي ملكية فكرية حصرية لـ Travel.Ltd أو مرخصة لنا من أطراف ثالثة. لا يُسمح بالاستخدام أو النسخ أو التوزيع بدون إذن مكتوب صريح."
        },
        privacy: {
          title: "الخصوصية وحماية البيانات",
          content: "استخدامك لخدماتنا يخضع أيضاً لسياسة الخصوصية الخاصة بنا، والتي تشكل جزءاً لا يتجزأ من هذه الشروط. نحن ملتزمون بحماية بياناتك الشخصية وفقاً لأعلى معايير الأمان والشفافية."
        },
        changes: {
          title: "تعديل الشروط والأحكام",
          content: "نحتفظ بالحق في تعديل شروط الخدمة هذه في أي وقت لتحسين خدماتنا أو الامتثال للقوانين الجديدة. سيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على موقعنا. استمرارك في استخدام الخدمات بعد التعديلات يعني موافقتك على الشروط المحدثة."
        },
        governing_law: {
          title: "القانون الحاكم وحل النزاعات",
          content: "تخضع هذه الشروط للقوانين المعمول بها في المملكة المتحدة. أي نزاعات تنشأ عن هذه الشروط سيتم حلها أولاً من خلال التفاوض المباشر، وإذا تعذر ذلك، فسيتم اللجوء إلى التحكيم أو المحاكم المختصة."
        },
        contact: {
          title: "تواصل معنا",
          content: "إذا كان لديك أي أسئلة أو استفسارات حول شروط الخدمة، يرجى التواصل معنا على:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247",
          support: "فريق الدعم متاح من الاثنين إلى الجمعة، 10:00 صباحاً - 6:00 مساءً (توقيت دمشق)"
        }
      }
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: June 6, 2025",
      sections: {
        intro: {
          title: "Agreement and Acceptance",
          content: "Welcome to Travel.Ltd. By using our website and services, you agree to comply with these Terms of Service and related policies. Please read them carefully before using our services. If you do not agree with these terms, please do not use our services."
        },
        definitions: {
          title: "Definitions and Terminology",
          content: "In these terms, the following definitions apply:",
          items: [
            "\"Company\", \"we\", or \"Travel.Ltd\": Travel.Ltd and its associates",
            "\"User\" or \"you\": Any person using our website or services",
            "\"Services\": All services provided through our website and platforms",
            "\"Content\": Any text, images, or other materials available on the website",
            "\"Personal Data\": Any information that identifies you personally"
          ]
        },
        services: {
          title: "Our Services and Scope of Work",
          content: "Travel.Ltd provides a comprehensive range of educational and consulting services:",
          items: [
            "Specialized university admission services and educational consulting worldwide",
            "Professional visa processing and official document handling services",
            "Hajj and Umrah pilgrimage services with certified and experienced guides",
            "Saudi and international scholarship programs and application assistance",
            "Specialized educational and career consulting for students and professionals",
            "Translation and legal documentation services for academic purposes",
            "International test preparation programs and coaching services"
          ]
        },
        user_responsibilities: {
          title: "User Responsibilities and Obligations",
          content: "As a user of our services, you agree to comply with the following requirements:",
          items: [
            "Provide accurate, truthful, and up-to-date information at all times during the application process",
            "Not use the website or services for illegal, harmful, or fraudulent purposes",
            "Respect intellectual property rights of all content, materials, and proprietary information",
            "Not attempt unauthorized access to systems, data, or confidential information",
            "Pay all required fees and costs within specified timeframes as agreed",
            "Cooperate with our team and provide required documents correctly and promptly",
            "Respect the terms and conditions of partner universities and educational institutions"
          ]
        },
        fees: {
          title: "Fees and Payment Policy",
          content: "Our service fees start from $1,099 USD and vary depending on service type, destination country, and program complexity. Fees are non-refundable except under exceptional circumstances as defined in our refund policy. All payments are processed through secure and protected channels with industry-standard encryption."
        },
        limitations: {
          title: "Liability Limitations and Warranty Disclaimers",
          content: "Travel.Ltd operates as an educational intermediary and consulting service. We are not responsible for:",
          items: [
            "Admission or rejection decisions made by universities or educational institutions",
            "Visa application delays or rejections by government authorities or embassies",
            "Changes in university policies, government regulations, or local laws",
            "Indirect, consequential, or incidental losses or damages of any kind",
            "Force majeure events such as natural disasters, pandemics, wars, or political instability",
            "Errors or delays from third parties such as shipping companies, banks, or government agencies"
          ]
        },
        termination: {
          title: "Service and Account Termination",
          content: "We reserve the right to immediately terminate or suspend your account and services if you:",
          items: [
            "Violate any of these Terms of Service or applicable policies and guidelines",
            "Provide false, misleading, or fraudulent information during the application process",
            "Fail to pay fees or costs due within specified timeframes as agreed",
            "Use the service for illegal, harmful, or fraudulent purposes",
            "Display inappropriate or abusive behavior toward our team or partners",
            "Violate third-party rights or applicable laws in your jurisdiction"
          ]
        },
        intellectual_property: {
          title: "Intellectual Property and Copyright",
          content: "All content, trademarks, logos, and educational materials on our website are exclusive intellectual property of Travel.Ltd or licensed to us by third parties. Use, copying, or distribution without explicit written permission is strictly prohibited and may result in legal action."
        },
        privacy: {
          title: "Privacy and Data Protection",
          content: "Your use of our services is also subject to our comprehensive Privacy Policy, which forms an integral part of these terms. We are committed to protecting your personal data according to the highest standards of security, transparency, and international compliance regulations."
        },
        changes: {
          title: "Terms and Conditions Modification",
          content: "We reserve the right to modify these Terms of Service at any time to improve our services, comply with new laws, or adapt to changing business requirements. You will be notified of any material changes via email or website notice. Your continued use of services after modifications constitutes acceptance of the updated terms."
        },
        governing_law: {
          title: "Governing Law and Dispute Resolution",
          content: "These terms are governed by the laws applicable in the United Kingdom. Any disputes arising from these terms will first be resolved through direct negotiation and mediation. If unsuccessful, disputes will be resolved through arbitration or competent courts as determined by applicable law."
        },
        contact: {
          title: "Contact Information and Support",
          content: "If you have any questions or inquiries about these Terms of Service, please contact us using the information provided below:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247",
          support: "Our support team is available Monday to Friday, 10:00 AM - 6:00 PM (Damascus Time) for assistance."
        }
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 content-wrapper" dir={direction}>
      <SEO 
        title={`${currentContent.title} | Travel.Ltd`}
        description="Comprehensive Terms of Service for Travel.Ltd - Read our terms and conditions for using our university admission and educational consulting services. Legal compliance and user rights."
        keywords="terms of service, terms and conditions, Travel.Ltd, university admissions, educational services, legal terms, user agreement, liability, intellectual property"
        url="https://syriantravel.in/terms"
      />
      
      <TermsHeader title={currentContent.title} lastUpdated={currentContent.lastUpdated} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            <TermsSection 
              title={currentContent.sections.intro.title}
              content={currentContent.sections.intro.content}
            />

            <TermsSection 
              title={currentContent.sections.definitions.title}
              content={currentContent.sections.definitions.content}
              items={currentContent.sections.definitions.items}
            />

            <TermsSection 
              title={currentContent.sections.services.title}
              content={currentContent.sections.services.content}
              items={currentContent.sections.services.items}
            />

            <TermsSection 
              title={currentContent.sections.user_responsibilities.title}
              content={currentContent.sections.user_responsibilities.content}
              items={currentContent.sections.user_responsibilities.items}
            />

            <TermsSection 
              title={currentContent.sections.fees.title}
              content={currentContent.sections.fees.content}
              highlighted={true}
            />

            <TermsSection 
              title={currentContent.sections.limitations.title}
              content={currentContent.sections.limitations.content}
              items={currentContent.sections.limitations.items}
            />

            <TermsSection 
              title={currentContent.sections.termination.title}
              content={currentContent.sections.termination.content}
              items={currentContent.sections.termination.items}
            />

            <TermsSection 
              title={currentContent.sections.intellectual_property.title}
              content={currentContent.sections.intellectual_property.content}
            />

            <TermsSection 
              title={currentContent.sections.privacy.title}
              content={currentContent.sections.privacy.content}
              bgColor="bg-gray-50"
            />

            <TermsSection 
              title={currentContent.sections.changes.title}
              content={currentContent.sections.changes.content}
            />

            <TermsSection 
              title={currentContent.sections.governing_law.title}
              content={currentContent.sections.governing_law.content}
            />

            <TermsContact contactSection={currentContent.sections.contact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
