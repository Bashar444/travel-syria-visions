
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import PrivacyHeader from '@/components/privacy/PrivacyHeader';
import PrivacySection from '@/components/privacy/PrivacySection';
import PrivacyContact from '@/components/privacy/PrivacyContact';

const Privacy = () => {
  const { direction, language } = useLanguage();

  const content = {
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 6 يونيو 2025",
      sections: {
        intro: {
          title: "مقدمة",
          content: "تلتزم شركة Travel.Ltd بحماية خصوصيتك وشفافية ممارسات البيانات. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا الإلكتروني وخدماتنا. نحن ملتزمون بمعايير حماية البيانات الدولية بما في ذلك GDPR وقوانين حماية البيانات المحلية."
        },
        collection: {
          title: "المعلومات التي نجمعها",
          content: "نجمع المعلومات التالية بشكل قانوني وشفاف:",
          items: [
            "المعلومات الشخصية: الاسم الكامل، البريد الإلكتروني، رقم الهاتف، العنوان البريدي",
            "المعلومات الأكاديمية: المؤهلات التعليمية، الدرجات، الشهادات، التخصص المرغوب",
            "معلومات فنية: عنوان IP، نوع المتصفح، نظام التشغيل، أوقات الزيارة، الصفحات المعروضة",
            "ملفات تعريف الارتباط: لتحسين تجربة المستخدم وتخصيص المحتوى والإعلانات",
            "معلومات الاستخدام: تفاعلات الموقع، تفضيلات المحتوى، مدة الجلسات"
          ]
        },
        usage: {
          title: "كيفية استخدام المعلومات",
          content: "نستخدم معلوماتك للأغراض التالية:",
          items: [
            "تقديم خدمات القبول الجامعي والاستشارات التعليمية المتخصصة",
            "التواصل معك بشأن طلبات الخدمة والتحديثات والعروض ذات الصلة",
            "تحسين خدماتنا وموقعنا الإلكتروني وتجربة المستخدم",
            "عرض إعلانات مخصصة وذات صلة بمصالحك",
            "إجراء تحليلات وأبحاث لتطوير خدماتنا",
            "الامتثال للمتطلبات القانونية والتنظيمية"
          ]
        },
        adsense: {
          title: "Google AdSense وملفات تعريف الارتباط",
          content: "يستخدم موقعنا Google AdSense لعرض الإعلانات ذات الصلة. تستخدم Google ملفات تعريف الارتباط وتقنيات التتبع الأخرى لعرض إعلانات مخصصة بناءً على اهتماماتك وزياراتك السابقة. هذه الإعلانات تساعدنا في تقديم محتوى مجاني عالي الجودة. يمكنك إدارة تفضيلات الإعلانات أو إلغاء الاشتراك في الإعلانات المخصصة من خلال زيارة إعدادات الإعلانات في Google أو استخدام أدوات إلغاء الاشتراك المتاحة."
        },
        cookies: {
          title: "سياسة ملفات تعريف الارتباط",
          content: "نستخدم أنواع مختلفة من ملفات تعريف الارتباط:",
          items: [
            "ملفات تعريف الارتباط الأساسية: ضرورية لعمل الموقع الأساسي",
            "ملفات تعريف الارتباط التحليلية: لفهم كيفية استخدام الموقع",
            "ملفات تعريف الارتباط الوظيفية: لحفظ تفضيلاتك واللغة",
            "ملفات تعريف الارتباط الإعلانية: لعرض إعلانات ذات صلة",
            "ملفات تعريف الارتباط من طرف ثالث: من خدمات مثل Google Analytics و AdSense"
          ]
        },
        sharing: {
          title: "مشاركة المعلومات",
          content: "نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات المحددة التالية:",
          items: [
            "بموافقتك الصريحة والمستنيرة",
            "لتقديم الخدمات المطلوبة مع شركائنا الموثوقين (مثل الجامعات الشريكة)",
            "لامتثال للمتطلبات القانونية أو أوامر المحكمة",
            "لحماية حقوقنا وسلامة المستخدمين والأمن العام",
            "مع مقدمي الخدمات الذين يساعدوننا في تشغيل موقعنا (مثل Google Analytics)"
          ]
        },
        security: {
          title: "أمان المعلومات وحمايتها",
          content: "نتخذ تدابير أمنية صارمة وشاملة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. هذا يشمل التشفير، وجدران الحماية، والوصول المحدود، والمراقبة المستمرة. ومع ذلك، يرجى ملاحظة أنه لا يمكن ضمان الأمان المطلق لأي نقل عبر الإنترنت أو تخزين إلكتروني."
        },
        rights: {
          title: "حقوقك في حماية البيانات",
          content: "وفقاً لقوانين حماية البيانات، لديك الحقوق التالية:",
          items: [
            "الحق في الوصول: طلب نسخة من بياناتك الشخصية",
            "الحق في التصحيح: تحديث أو تصحيح معلوماتك",
            "الحق في المحو: طلب حذف بياناتك الشخصية",
            "الحق في تقييد المعالجة: الحد من كيفية استخدام بياناتك",
            "الحق في نقل البيانات: الحصول على بياناتك بتنسيق قابل للقراءة",
            "الحق في الاعتراض: رفض معالجة بياناتك لأغراض معينة",
            "الحق في سحب الموافقة: إلغاء موافقتك في أي وقت"
          ]
        },
        retention: {
          title: "الاحتفاظ بالبيانات",
          content: "نحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضرورياً للأغراض المحددة أو كما يقتضي القانون. عادة ما نحتفظ بالبيانات لمدة 7 سنوات بعد آخر تفاعل، ما لم تطلب حذفها أو تقتضي القوانين المحلية فترات احتفاظ مختلفة."
        },
        contact: {
          title: "تواصل معنا",
          content: "إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ترغب في ممارسة حقوقك، يرجى التواصل معنا على:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247",
          dataProtection: "مسؤول حماية البيانات متاح عبر نفس قنوات الاتصال."
        }
      }
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 6, 2025",
      sections: {
        intro: {
          title: "Introduction",
          content: "Travel.Ltd is committed to protecting your privacy and maintaining transparent data practices. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. We are committed to international data protection standards including GDPR and local data protection laws."
        },
        collection: {
          title: "Information We Collect",
          content: "We collect the following information legally and transparently:",
          items: [
            "Personal Information: Full name, email address, phone number, and postal address.",
            "Academic Information: Educational qualifications, grades, certificates, and desired specialization.",
            "Technical Information: IP address, browser type, operating system, visit times, and pages viewed.",
            "Cookies: Used to improve user experience and personalize content and advertisements.",
            "Usage Information: Site interactions, content preferences, and session duration."
          ]
        },
        usage: {
          title: "How We Use Your Information",
          content: "We use your information for the following purposes:",
          items: [
            "Provide specialized university admission and educational consulting services.",
            "Communicate with you about service requests, updates, and relevant offers.",
            "Improve our services, website functionality, and overall user experience.",
            "Display personalized and relevant advertisements based on your interests.",
            "Conduct analytics and research to develop and enhance our services.",
            "Comply with legal and regulatory requirements as mandated by law."
          ]
        },
        adsense: {
          title: "Google AdSense and Cookie Usage",
          content: "Our website uses Google AdSense to display relevant advertisements to our visitors. Google uses cookies and other tracking technologies to serve personalized ads based on your interests and prior website visits. These advertisements help us provide free, high-quality content and services. You can manage your ad preferences or opt out of personalized advertising by visiting Google's Ads Settings or using available opt-out tools provided by Google."
        },
        cookies: {
          title: "Cookie Policy and Types",
          content: "We use different types of cookies to enhance your browsing experience:",
          items: [
            "Essential Cookies: Necessary for basic website functionality and navigation.",
            "Analytics Cookies: Help us understand how visitors use and interact with our website.",
            "Functional Cookies: Remember your preferences, language settings, and user choices.",
            "Advertising Cookies: Used to display relevant advertisements and measure ad effectiveness.",
            "Third-party Cookies: From external services like Google Analytics and AdSense."
          ]
        },
        sharing: {
          title: "Information Sharing and Disclosure",
          content: "We do not sell, rent, or share your personal information with third parties except in the following specified circumstances:",
          items: [
            "With your explicit and informed consent for specific purposes.",
            "To provide requested services through our trusted partners (such as partner universities).",
            "To comply with legal requirements, court orders, or government regulations.",
            "To protect our rights, user safety, and maintain public security.",
            "With service providers who help us operate our website (such as Google Analytics)."
          ]
        },
        security: {
          title: "Information Security and Protection",
          content: "We implement strict and comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption protocols, secure firewalls, restricted access controls, and continuous monitoring systems. However, please note that no internet transmission or electronic storage method can be guaranteed to be completely secure."
        },
        rights: {
          title: "Your Data Protection Rights",
          content: "Under applicable data protection laws, you have the following rights regarding your personal data:",
          items: [
            "Right to Access: Request a copy of your personal data that we hold.",
            "Right to Rectification: Update or correct any inaccurate information.",
            "Right to Erasure: Request deletion of your personal data under certain conditions.",
            "Right to Restrict Processing: Limit how your data is used or processed.",
            "Right to Data Portability: Obtain your data in a readable and transferable format.",
            "Right to Object: Refuse processing of your data for certain specific purposes.",
            "Right to Withdraw Consent: Cancel your consent at any time without penalty."
          ]
        },
        retention: {
          title: "Data Retention Policy",
          content: "We retain your personal data only as long as necessary for the specified purposes or as required by applicable law. Typically, we retain data for 7 years after the last interaction, unless you request deletion or local laws require different retention periods for specific types of information."
        },
        contact: {
          title: "Contact Information",
          content: "If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us using the information below:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247",
          dataProtection: "Our Data Protection Officer is available through the same contact channels listed above."
        }
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 content-wrapper" dir={direction}>
      <SEO 
        title={`${currentContent.title} | Travel.Ltd`}
        description="Comprehensive Privacy Policy for Travel.Ltd - Learn how we collect, use, and protect your personal information when using our university admission services. GDPR compliant with Google AdSense integration."
        keywords="privacy policy, data protection, GDPR, Travel.Ltd, university admissions, personal information, cookies, Google AdSense, data rights"
        url="https://syriantravel.in/privacy"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <PrivacyHeader 
            title={currentContent.title} 
            lastUpdated={currentContent.lastUpdated} 
          />

          <div className="space-y-8">
            <PrivacySection
              title={currentContent.sections.intro.title}
              content={currentContent.sections.intro.content}
            />

            <PrivacySection
              title={currentContent.sections.collection.title}
              content={currentContent.sections.collection.content}
              items={currentContent.sections.collection.items}
            />

            <PrivacySection
              title={currentContent.sections.usage.title}
              content={currentContent.sections.usage.content}
              items={currentContent.sections.usage.items}
            />

            <PrivacySection
              title={currentContent.sections.adsense.title}
              content={currentContent.sections.adsense.content}
              highlighted={true}
              bgColor="bg-blue-50"
            />

            <PrivacySection
              title={currentContent.sections.cookies.title}
              content={currentContent.sections.cookies.content}
              items={currentContent.sections.cookies.items}
            />

            <PrivacySection
              title={currentContent.sections.sharing.title}
              content={currentContent.sections.sharing.content}
              items={currentContent.sections.sharing.items}
            />

            <PrivacySection
              title={currentContent.sections.security.title}
              content={currentContent.sections.security.content}
            />

            <PrivacySection
              title={currentContent.sections.rights.title}
              content={currentContent.sections.rights.content}
              items={currentContent.sections.rights.items}
              bgColor="bg-gray-50"
            />

            <PrivacySection
              title={currentContent.sections.retention.title}
              content={currentContent.sections.retention.content}
            />

            <PrivacyContact contactSection={currentContent.sections.contact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
