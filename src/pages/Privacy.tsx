
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const Privacy = () => {
  const { direction, language } = useLanguage();

  const content = {
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 1 يونيو 2025",
      sections: {
        intro: {
          title: "مقدمة",
          content: "تلتزم شركة Travel.Ltd بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا الإلكتروني وخدماتنا."
        },
        collection: {
          title: "المعلومات التي نجمعها",
          content: "نجمع المعلومات التالية:",
          items: [
            "المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، العنوان",
            "المعلومات الأكاديمية: المؤهلات التعليمية، الدرجات، الشهادات",
            "معلومات الموقع: عنوان IP، نوع المتصفح، أوقات الزيارة",
            "ملفات تعريف الارتباط: لتحسين تجربة المستخدم وتخصيص المحتوى"
          ]
        },
        usage: {
          title: "كيفية استخدام المعلومات",
          content: "نستخدم معلوماتك لـ:",
          items: [
            "تقديم خدمات القبول الجامعي والاستشارات التعليمية",
            "التواصل معك بشأن طلبات الخدمة والتحديثات",
            "تحسين خدماتنا وموقعنا الإلكتروني",
            "الامتثال للمتطلبات القانونية والتنظيمية"
          ]
        },
        adsense: {
          title: "Google AdSense وملفات تعريف الارتباط",
          content: "يستخدم موقعنا Google AdSense لعرض الإعلانات. قد تستخدم Google ملفات تعريف الارتباط لعرض إعلانات مخصصة بناءً على زياراتك السابقة لموقعنا أو مواقع أخرى. يمكنك إلغاء الاشتراك في الإعلانات المخصصة من خلال زيارة إعدادات الإعلانات في Google."
        },
        sharing: {
          title: "مشاركة المعلومات",
          content: "لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:",
          items: [
            "بموافقتك الصريحة",
            "لتقديم الخدمات المطلوبة (مثل الجامعات الشريكة)",
            "للامتثال للمتطلبات القانونية",
            "لحماية حقوقنا وسلامة المستخدمين"
          ]
        },
        security: {
          title: "أمان المعلومات",
          content: "نتخذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. ومع ذلك، لا يمكن ضمان الأمان المطلق لأي نقل عبر الإنترنت."
        },
        rights: {
          title: "حقوقك",
          content: "لديك الحق في:",
          items: [
            "الوصول إلى معلوماتك الشخصية وتحديثها",
            "طلب حذف معلوماتك",
            "الاعتراض على معالجة معلوماتك",
            "طلب نقل معلوماتك"
          ]
        },
        contact: {
          title: "تواصل معنا",
          content: "إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا على:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247"
        }
      }
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 1, 2025",
      sections: {
        intro: {
          title: "Introduction",
          content: "Travel.Ltd is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services."
        },
        collection: {
          title: "Information We Collect",
          content: "We collect the following information:",
          items: [
            "Personal Information: Name, email, phone number, address",
            "Academic Information: Educational qualifications, grades, certificates",
            "Website Information: IP address, browser type, visit times",
            "Cookies: To improve user experience and personalize content"
          ]
        },
        usage: {
          title: "How We Use Information",
          content: "We use your information to:",
          items: [
            "Provide university admission and educational consulting services",
            "Communicate with you about service requests and updates",
            "Improve our services and website",
            "Comply with legal and regulatory requirements"
          ]
        },
        adsense: {
          title: "Google AdSense and Cookies",
          content: "Our website uses Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other sites. You can opt out of personalized advertising by visiting Google's Ads Settings."
        },
        sharing: {
          title: "Information Sharing",
          content: "We do not sell, rent, or share your personal information with third parties except in the following cases:",
          items: [
            "With your explicit consent",
            "To provide requested services (such as partner universities)",
            "To comply with legal requirements",
            "To protect our rights and user safety"
          ]
        },
        security: {
          title: "Information Security",
          content: "We take appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission can be guaranteed to be completely secure."
        },
        rights: {
          title: "Your Rights",
          content: "You have the right to:",
          items: [
            "Access and update your personal information",
            "Request deletion of your information",
            "Object to processing of your information",
            "Request transfer of your information"
          ]
        },
        contact: {
          title: "Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247"
        }
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50" dir={direction}>
      <SEO 
        title={currentContent.title}
        description="Privacy Policy for Travel.Ltd - Learn how we collect, use, and protect your personal information when using our university admission services."
        keywords="privacy policy, data protection, Travel.Ltd, university admissions, personal information, cookies, AdSense"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#0018A8] mb-4">{currentContent.title}</h1>
          <p className="text-gray-600 mb-8">{currentContent.lastUpdated}</p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.intro.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.sections.intro.content}
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.collection.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.collection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.collection.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Information Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.usage.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.usage.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.usage.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* AdSense */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0018A8] mb-4">
                {currentContent.sections.adsense.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.sections.adsense.content}
              </p>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.sharing.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.sharing.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.sharing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.security.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.sections.security.content}
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.rights.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.rights.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.rights.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.contact.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.contact.content}</p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>{language === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong> {currentContent.sections.contact.email}
                </p>
                <p className="text-gray-700">
                  <strong>{language === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> {currentContent.sections.contact.phone}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
