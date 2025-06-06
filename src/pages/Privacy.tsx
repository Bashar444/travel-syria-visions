
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

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
            "للامتثال للمتطلبات القانونية أو أوامر المحكمة",
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
            "Personal Information: Full name, email address, phone number, postal address",
            "Academic Information: Educational qualifications, grades, certificates, desired specialization",
            "Technical Information: IP address, browser type, operating system, visit times, pages viewed",
            "Cookies: To improve user experience and personalize content and advertisements",
            "Usage Information: Site interactions, content preferences, session duration"
          ]
        },
        usage: {
          title: "How We Use Information",
          content: "We use your information for the following purposes:",
          items: [
            "Provide specialized university admission and educational consulting services",
            "Communicate with you about service requests, updates, and relevant offers",
            "Improve our services, website, and user experience",
            "Display personalized and relevant advertisements",
            "Conduct analytics and research to develop our services",
            "Comply with legal and regulatory requirements"
          ]
        },
        adsense: {
          title: "Google AdSense and Cookies",
          content: "Our website uses Google AdSense to display relevant advertisements. Google uses cookies and other tracking technologies to serve personalized ads based on your interests and prior visits. These advertisements help us provide free, high-quality content. You can manage your ad preferences or opt out of personalized advertising by visiting Google's Ads Settings or using available opt-out tools."
        },
        cookies: {
          title: "Cookie Policy",
          content: "We use different types of cookies:",
          items: [
            "Essential Cookies: Necessary for basic website functionality",
            "Analytics Cookies: To understand how the website is used",
            "Functional Cookies: To remember your preferences and language",
            "Advertising Cookies: To display relevant advertisements",
            "Third-party Cookies: From services like Google Analytics and AdSense"
          ]
        },
        sharing: {
          title: "Information Sharing",
          content: "We do not sell, rent, or share your personal information with third parties except in the following specified cases:",
          items: [
            "With your explicit and informed consent",
            "To provide requested services with our trusted partners (such as partner universities)",
            "To comply with legal requirements or court orders",
            "To protect our rights, user safety, and public security",
            "With service providers who help us operate our website (such as Google Analytics)"
          ]
        },
        security: {
          title: "Information Security and Protection",
          content: "We implement strict and comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, firewalls, restricted access, and continuous monitoring. However, please note that no internet transmission or electronic storage can be guaranteed to be completely secure."
        },
        rights: {
          title: "Your Data Protection Rights",
          content: "Under data protection laws, you have the following rights:",
          items: [
            "Right to Access: Request a copy of your personal data",
            "Right to Rectification: Update or correct your information",
            "Right to Erasure: Request deletion of your personal data",
            "Right to Restrict Processing: Limit how your data is used",
            "Right to Data Portability: Obtain your data in a readable format",
            "Right to Object: Refuse processing of your data for certain purposes",
            "Right to Withdraw Consent: Cancel your consent at any time"
          ]
        },
        retention: {
          title: "Data Retention",
          content: "We retain your personal data only as long as necessary for the specified purposes or as required by law. Typically, we retain data for 7 years after the last interaction, unless you request deletion or local laws require different retention periods."
        },
        contact: {
          title: "Contact Us",
          content: "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247",
          dataProtection: "Data Protection Officer is available through the same contact channels."
        }
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50" dir={direction}>
      <SEO 
        title={`${currentContent.title} | Travel.Ltd`}
        description="Comprehensive Privacy Policy for Travel.Ltd - Learn how we collect, use, and protect your personal information when using our university admission services. GDPR compliant with Google AdSense integration."
        keywords="privacy policy, data protection, GDPR, Travel.Ltd, university admissions, personal information, cookies, Google AdSense, data rights"
        canonical="/privacy"
      />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2 rtl:space-x-reverse">
              <li>
                <a href="/" className="text-[#0018A8] hover:underline">
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <span className="text-gray-500">{'>'}</span>
              <li className="text-gray-700">{currentContent.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#0018A8] mb-4">{currentContent.title}</h1>
            <p className="text-gray-600 text-lg">{currentContent.lastUpdated}</p>
          </header>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.intro.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.intro.content}
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.collection.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.collection.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.collection.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Information Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.usage.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.usage.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.usage.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* AdSense */}
            <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0018A8]">
              <h2 className="text-2xl font-semibold text-[#0018A8] mb-4">
                {currentContent.sections.adsense.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.adsense.content}
              </p>
            </section>

            {/* Cookie Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.cookies.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.cookies.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.cookies.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.sharing.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.sharing.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.sharing.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.security.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.security.content}
              </p>
            </section>

            {/* User Rights */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.rights.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.rights.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.rights.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.retention.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.retention.content}
              </p>
            </section>

            {/* Contact */}
            <section className="bg-[#0018A8] text-white p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                {currentContent.sections.contact.title}
              </h2>
              <p className="mb-4 text-lg">{currentContent.sections.contact.content}</p>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <strong>{language === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong> 
                  <a href={`mailto:${currentContent.sections.contact.email}`} className="hover:underline">
                    {currentContent.sections.contact.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <strong>{language === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> 
                  <a href={`tel:${currentContent.sections.contact.phone}`} className="hover:underline">
                    {currentContent.sections.contact.phone}
                  </a>
                </p>
                <p className="text-sm opacity-90">{currentContent.sections.contact.dataProtection}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
