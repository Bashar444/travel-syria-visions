
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const Terms = () => {
  const { direction, language } = useLanguage();

  const content = {
    ar: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: 1 يونيو 2025",
      sections: {
        intro: {
          title: "مقدمة",
          content: "مرحباً بك في Travel.Ltd. باستخدام موقعنا الإلكتروني وخدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه. يرجى قراءتها بعناية قبل استخدام خدماتنا."
        },
        services: {
          title: "خدماتنا",
          content: "تقدم Travel.Ltd الخدمات التالية:",
          items: [
            "خدمات القبول الجامعي والاستشارات التعليمية",
            "معالجة طلبات التأشيرة والوثائق",
            "خدمات الحج والعمرة",
            "المنح الدراسية السعودية",
            "الاستشارات التعليمية المتخصصة"
          ]
        },
        user_responsibilities: {
          title: "مسؤوليات المستخدم",
          content: "بصفتك مستخدماً لخدماتنا، فإنك توافق على:",
          items: [
            "تقديم معلومات دقيقة وصحيحة",
            "عدم استخدام الموقع لأغراض غير قانونية",
            "احترام حقوق الملكية الفكرية",
            "عدم محاولة الوصول غير المصرح به للأنظمة",
            "دفع الرسوم المطلوبة في الوقت المحدد"
          ]
        },
        fees: {
          title: "الرسوم والدفع",
          content: "رسوم خدماتنا تبدأ من 1099 دولار. الرسوم غير قابلة للاسترداد إلا في ظروف خاصة كما هو محدد في سياسة الاسترداد الخاصة بنا."
        },
        limitations: {
          title: "قيود المسؤولية",
          content: "Travel.Ltd غير مسؤولة عن:",
          items: [
            "قرارات القبول أو الرفض من الجامعات",
            "تأخير أو رفض طلبات التأشيرة",
            "تغييرات في سياسات الجامعات أو الحكومات",
            "خسائر أو أضرار غير مباشرة"
          ]
        },
        termination: {
          title: "إنهاء الخدمة",
          content: "يحق لنا إنهاء أو تعليق حسابك إذا:",
          items: [
            "انتهكت شروط الخدمة هذه",
            "قدمت معلومات خاطئة أو مضللة",
            "لم تدفع الرسوم المستحقة",
            "استخدمت الخدمة لأغراض غير قانونية"
          ]
        },
        intellectual_property: {
          title: "الملكية الفكرية",
          content: "جميع المحتويات والعلامات التجارية والشعارات الموجودة على موقعنا هي ملكية فكرية لـ Travel.Ltd. لا يُسمح بالاستخدام بدون إذن مكتوب."
        },
        changes: {
          title: "تعديل الشروط",
          content: "نحتفظ بالحق في تعديل شروط الخدمة هذه في أي وقت. سيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو على موقعنا."
        },
        contact: {
          title: "تواصل معنا",
          content: "إذا كان لديك أي أسئلة حول شروط الخدمة، يرجى التواصل معنا على:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247"
        }
      }
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: June 1, 2025",
      sections: {
        intro: {
          title: "Introduction",
          content: "Welcome to Travel.Ltd. By using our website and services, you agree to comply with these Terms of Service. Please read them carefully before using our services."
        },
        services: {
          title: "Our Services",
          content: "Travel.Ltd provides the following services:",
          items: [
            "University admission services and educational consulting",
            "Visa processing and document handling",
            "Hajj and Umrah services",
            "Saudi scholarships",
            "Specialized educational consulting"
          ]
        },
        user_responsibilities: {
          title: "User Responsibilities",
          content: "As a user of our services, you agree to:",
          items: [
            "Provide accurate and truthful information",
            "Not use the site for illegal purposes",
            "Respect intellectual property rights",
            "Not attempt unauthorized access to systems",
            "Pay required fees on time"
          ]
        },
        fees: {
          title: "Fees and Payment",
          content: "Our service fees start from $1099. Fees are non-refundable except under special circumstances as defined in our refund policy."
        },
        limitations: {
          title: "Liability Limitations",
          content: "Travel.Ltd is not responsible for:",
          items: [
            "University admission or rejection decisions",
            "Visa application delays or rejections",
            "Changes in university or government policies",
            "Indirect losses or damages"
          ]
        },
        termination: {
          title: "Service Termination",
          content: "We reserve the right to terminate or suspend your account if you:",
          items: [
            "Violate these Terms of Service",
            "Provide false or misleading information",
            "Fail to pay due fees",
            "Use the service for illegal purposes"
          ]
        },
        intellectual_property: {
          title: "Intellectual Property",
          content: "All content, trademarks, and logos on our site are intellectual property of Travel.Ltd. Use without written permission is prohibited."
        },
        changes: {
          title: "Terms Modification",
          content: "We reserve the right to modify these Terms of Service at any time. You will be notified of any material changes via email or on our website."
        },
        contact: {
          title: "Contact Us",
          content: "If you have any questions about these Terms of Service, please contact us at:",
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
        description="Terms of Service for Travel.Ltd - Read our terms and conditions for using our university admission and educational consulting services."
        keywords="terms of service, terms and conditions, Travel.Ltd, university admissions, educational services, legal terms"
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

            {/* Services */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.services.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.services.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.services.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.user_responsibilities.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.user_responsibilities.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.user_responsibilities.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Fees */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0018A8] mb-4">
                {currentContent.sections.fees.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.sections.fees.content}
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.limitations.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.limitations.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.limitations.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.termination.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.termination.content}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {currentContent.sections.termination.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.intellectual_property.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.sections.intellectual_property.content}
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.changes.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentContent.sections.changes.content}
              </p>
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

export default Terms;
