
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

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
          title: "Definitions",
          content: "In these terms, the following definitions apply:",
          items: [
            "\"Company\", \"we\", or \"Travel.Ltd\": Travel.Ltd and its associates",
            "\"User\" or \"you\": Any person using our website or services",
            "\"Services\": All services provided through our website",
            "\"Content\": Any text, images, or other materials on the website",
            "\"Personal Data\": Any information that identifies you personally"
          ]
        },
        services: {
          title: "Our Services and Scope of Work",
          content: "Travel.Ltd provides a comprehensive range of educational services:",
          items: [
            "Specialized university admission services and educational consulting",
            "Visa processing and official document handling",
            "Hajj and Umrah services with certified guides",
            "Saudi and international scholarship programs",
            "Specialized educational and career consulting",
            "Translation and legal documentation services",
            "International test preparation programs"
          ]
        },
        user_responsibilities: {
          title: "User Responsibilities and Obligations",
          content: "As a user of our services, you agree to comply with the following:",
          items: [
            "Provide accurate, truthful, and up-to-date information at all times",
            "Not use the website or services for illegal or harmful purposes",
            "Respect intellectual property rights of all content and materials",
            "Not attempt unauthorized access to systems or data",
            "Pay all required fees and costs within specified timeframes",
            "Cooperate with our team and provide required documents correctly",
            "Respect the terms and conditions of partner universities and institutions"
          ]
        },
        fees: {
          title: "Fees and Payment Policy",
          content: "Our service fees start from $1099 USD and vary depending on service type and destination. Fees are non-refundable except under exceptional circumstances as defined in our refund policy. All payments are processed through secure and protected channels."
        },
        limitations: {
          title: "Liability Limitations and Warranty Disclaimers",
          content: "Travel.Ltd operates as an educational intermediary and is not responsible for:",
          items: [
            "Admission or rejection decisions made by universities or educational institutions",
            "Visa application delays or rejections by government authorities",
            "Changes in university, government policies, or local laws",
            "Indirect, consequential, or incidental losses or damages",
            "Force majeure events such as natural disasters, pandemics, or wars",
            "Errors or delays from third parties such as shipping companies or banks"
          ]
        },
        termination: {
          title: "Service and Account Termination",
          content: "We reserve the right to immediately terminate or suspend your account and services if you:",
          items: [
            "Violate any of these Terms of Service or applicable policies",
            "Provide false, misleading, or fraudulent information",
            "Fail to pay fees or costs due within specified timeframes",
            "Use the service for illegal or harmful purposes",
            "Display inappropriate or abusive behavior toward our team",
            "Violate third-party rights or applicable laws"
          ]
        },
        intellectual_property: {
          title: "Intellectual Property and Copyright",
          content: "All content, trademarks, logos, and educational materials on our website are exclusive intellectual property of Travel.Ltd or licensed to us by third parties. Use, copying, or distribution without explicit written permission is prohibited."
        },
        privacy: {
          title: "Privacy and Data Protection",
          content: "Your use of our services is also subject to our Privacy Policy, which forms an integral part of these terms. We are committed to protecting your personal data according to the highest standards of security and transparency."
        },
        changes: {
          title: "Terms and Conditions Modification",
          content: "We reserve the right to modify these Terms of Service at any time to improve our services or comply with new laws. You will be notified of any material changes via email or website notice. Your continued use of services after modifications constitutes acceptance of the updated terms."
        },
        governing_law: {
          title: "Governing Law and Dispute Resolution",
          content: "These terms are governed by the laws applicable in the United Kingdom. Any disputes arising from these terms will first be resolved through direct negotiation, and if unsuccessful, through arbitration or competent courts."
        },
        contact: {
          title: "Contact Us",
          content: "If you have any questions or inquiries about these Terms of Service, please contact us at:",
          email: "privatelimitedtravel@gmail.com",
          phone: "+963985453247",
          support: "Support team is available Monday to Friday, 10:00 AM - 6:00 PM (Damascus Time)"
        }
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50" dir={direction}>
      <SEO 
        title={`${currentContent.title} | Travel.Ltd`}
        description="Comprehensive Terms of Service for Travel.Ltd - Read our terms and conditions for using our university admission and educational consulting services. Legal compliance and user rights."
        keywords="terms of service, terms and conditions, Travel.Ltd, university admissions, educational services, legal terms, user agreement, liability, intellectual property"
        canonical="/terms"
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

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.definitions.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.definitions.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.definitions.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.services.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.services.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.services.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.user_responsibilities.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.user_responsibilities.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.user_responsibilities.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Fees */}
            <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0018A8]">
              <h2 className="text-2xl font-semibold text-[#0018A8] mb-4">
                {currentContent.sections.fees.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.fees.content}
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.limitations.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.limitations.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.limitations.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.termination.title}
              </h2>
              <p className="text-gray-700 mb-4">{currentContent.sections.termination.content}</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                {currentContent.sections.termination.items.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.intellectual_property.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.intellectual_property.content}
              </p>
            </section>

            {/* Privacy */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.privacy.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.privacy.content}
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.changes.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.changes.content}
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-[#231F20] mb-4">
                {currentContent.sections.governing_law.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.sections.governing_law.content}
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
                <p className="text-sm opacity-90">{currentContent.sections.contact.support}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
