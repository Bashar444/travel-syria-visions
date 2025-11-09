import React, { createContext, useContext, useMemo } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  direction: string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations: Record<string, string> = {
  'nav.home': 'الرئيسية',
  'nav.services': 'خدماتنا',
  'nav.universities': 'الجامعات',
  'nav.blog': 'المدونة',
  'nav.languages': 'خدمات اللغات',
  'nav.work-with-us': 'انضم إلى فريقنا',
  'nav.success-stories': 'قصص النجاح',
  'nav.about': 'من نحن',
  'nav.contact': 'تواصل معنا',
  'nav.terms-privacy': 'الشروط والخصوصية',
  'nav.terms': 'شروط الخدمة',
  'nav.privacy': 'سياسة الخصوصية',

  'hero.badge': 'خدمات تعليمية متكاملة للطلاب السوريين',
  'hero.title': 'نقودك إلى مستقبلك الدراسي بثقة',
  'hero.highlight': 'قبولات جامعية، تأشيرات طلابية، منح سعودية، وخدمات الحج والعمرة',
  'hero.description': 'نقدم حلولاً تعليمية متكاملة للطلاب السوريين الراغبين بالدراسة في الخارج مع متابعة دقيقة لكل مرحلة من القبول وحتى السفر بنسبة نجاح 95٪.',
  'hero.primary-action': 'استكشف خدماتنا التعليمية',
  'hero.secondary-action': 'استشارة مجانية عبر واتساب',
  'hero.whatsapp': 'تواصل عبر واتساب',

  'services.heading': 'حلول تعليمية مصممة لاحتياجاتك',
  'services.title': 'خدماتنا التعليمية المتكاملة',
  'services.description': 'خدمات احترافية في القبول الجامعي، معالجة التأشيرات، برامج المنح، وخدمات الحج والعمرة مع متابعة دقيقة بكل خطوة.',
  'services.card.consulting.title': 'استشارات القبول الجامعي',
  'services.card.consulting.desc': 'تنسيق كامل لملفك الأكاديمي واختيار الجامعات وفق أهدافك وتخصصك، مع إعداد احترافي لجميع متطلبات القبول.',
  'services.card.visa.title': 'معالجة التأشيرات الطلابية',
  'services.card.visa.desc': 'إعداد ملفات التأشيرة، حجز المواعيد، التدريب على المقابلات، وترجمة الوثائق لضمان تجربة ميسرة.',
  'services.card.hajj.title': 'تنظيم رحلات الحج والعمرة',
  'services.card.hajj.desc': 'برامج ميسرة تشمل التأشيرة، السكن، النقل، والإشراف الديني مع مرافقين خبراء.',
  'services.card.scholarship.title': 'برامج المنح السعودية',
  'services.card.scholarship.desc': 'فرص دراسية ممولة بالكامل مع متابعة منح وزارة التعليم السعودية وتوفير مقاعد مضمونة للطلاب المتميزين.',
  'services.button': 'تواصل عبر واتساب الآن',
  'services.tabs.title': 'استكشف خدماتنا التفصيلية',
  'services.tabs.university': 'متصفح الجامعات العالمي',
  'services.tabs.hajj': 'خدمات الحج والعمرة',
  'services.tabs.scholarship': 'المنح السعودية',
  'services.tabs.university.desc': 'ابحث في قاعدة بيانات عالمية للجامعات مع فلترة للتخصصات، الرسوم، ولغات الدراسة.',
  'services.tabs.hajj.desc': 'تنظيم شامل للرحلة، من الحصول على التأشيرة وحتى البرامج الزيارات الدينية.',
  'services.tabs.scholarship.desc': 'إرشاد متكامل للحصول على منح دراسية سعودية مع متابعة الملفات والمقابلات الشخصية.',

  'education.heading': 'قصص نجاح طلابنا',
  'education.subtitle': 'صور حقيقية تعكس تجارب طلابنا في الجامعات العالمية من التسجيل وحتى التخرج.',
  'education.card.1.title': 'تخرج ناجح',
  'education.card.1.desc': 'لحظة تخرج أحد طلابنا بعد رحلة أكاديمية ناجحة بفضل خدماتنا الاستشارية.',
  'education.card.2.title': 'حياة جامعية متطورة',
  'education.card.2.desc': 'تعرف على نمط الحياة الجامعية الحديثة التي نوفرها لطلابنا حول العالم.',
  'education.card.3.title': 'تفوق أكاديمي',
  'education.card.3.desc': 'احتفال جماعي بتخرج طلابنا في الجامعات الدولية بعد تحقيق نتائج متميزة.',
  'education.card.4.title': 'حفل تخرج عالمي',
  'education.card.4.desc': 'طلاب من ثقافات متعددة يحتفلون بالنجاح ضمن بيئة تعليمية داعمة.',
  'education.card.5.title': 'حرم جامعي تاريخي',
  'education.card.5.desc': 'جولة داخل أبرز الجامعات ذات الطراز المعماري العريق حول العالم.',
  'education.card.6.title': 'رحلة الطالب الجامعية',
  'education.card.6.desc': 'طلابنا يستكشفون مرافق الجامعات ويستفيدون من خدمات الإرشاد الأكاديمي.',
  'education.button': 'استكشف قصص النجاح',

  'cta.badge': 'انضم إلى أكثر من 500 طالب سوري ناجح',
  'cta.title': 'هل أنت جاهز لبدء رحلتك التعليمية في الخارج؟',
  'cta.subtitle': 'استشارات تعليمية احترافية مع متابعة دقيقة لكل خطوات القبول والتأشيرات. لمعرفة تفاصيل الأسعار تواصل معنا عبر واتساب على الرقم ‎+963 985 453 247‎.',
  'cta.button': 'ابدأ طلبك الجامعي الآن',

  'footer.description': 'خدمات تعليمية متكاملة للطلاب السوريين تشمل القبول الجامعي، التأشيرات، المنح الدراسية، وخدمات الحج والعمرة.',
  'footer.quick-links': 'روابط مهمة',
  'footer.contact-form': 'نموذج التواصل',
  'footer.rights': 'جميع الحقوق محفوظة.',

  'contact.title': 'تواصل معنا الآن',
  'contact.free-consultation': 'احجز استشارتك المجانية',
  'contact.success-message': 'تم استلام طلبك بنجاح وسيتم التواصل معك في أقرب وقت.',
  'contact.full-name': 'الاسم الكامل',
  'contact.full-name-required': 'الاسم الكامل مطلوب',
  'contact.full-name-placeholder': 'مثال: أحمد علي الحسين',
  'contact.phone': 'رقم الهاتف',
  'contact.phone-required': 'رقم الهاتف مطلوب',
  'contact.email': 'البريد الإلكتروني',
  'contact.email-required': 'البريد الإلكتروني مطلوب',
  'contact.email-invalid': 'صيغة البريد الإلكتروني غير صحيحة',
  'contact.preferred-university': 'الجامعة المفضلة',
  'contact.select-university': 'اختر الجامعة المناسبة',
  'contact.desired-major': 'التخصص المطلوب',
  'contact.major-placeholder': 'مثال: هندسة الحاسوب، إدارة الأعمال، الطب',
  'contact.additional-message': 'رسالة إضافية (اختياري)',
  'contact.message-placeholder': 'اكتب أي تفاصيل أو استفسارات ترغب بمشاركتها...',
  'contact.sending': 'جاري الإرسال...',
  'contact.submit': 'إرسال الطلب',
  'contact.direct-contact': 'طرق التواصل المباشر',
  'contact.whatsapp': 'التواصل عبر واتساب',
  'contact.whatsapp-number': 'رقم واتساب',
  'contact.email-label': 'البريد الإلكتروني',
  'contact.working-hours': 'ساعات العمل الرسمية',

  'about.title': 'من نحن',
  'about.mission': 'شركة متخصصة في تمكين الطلاب السوريين من الحصول على أفضل الفرص التعليمية في الخارج مع متابعة كاملة لكل التفاصيل.',
  'about.hours': 'الإثنين - الجمعة: 10 صباحاً - 6 مساءً (توقيت دمشق)',

  'mobile.call-now': 'اتصل الآن',
  'mobile.apply-now': 'قدم الآن',
  'mobile.notifications': 'الإشعارات',
  'mobile.quick-contact': 'تواصل سريع',

  'languages.title': 'خدمات إعداد اللغة',
  'languages.subtitle': 'دورات مكثفة للغة الإنجليزية والألمانية مع مدربين معتمدين ومحتوى موجه للطلاب السوريين.',
  'languages.english.title': 'برنامج اللغة الإنجليزية الأكاديمي',
  'languages.english.desc': 'تحضير شامل لاختبارات IELTS وTOEFL مع تركيز على مهارات المحادثة والكتابة الأكاديمية ونماذج المقابلات الجامعية.',
  'languages.german.title': 'برنامج اللغة الألمانية الجامعي',
  'languages.german.desc': 'تهيئة متكاملة لاختبارات TestDaF وDSH ومهارات الاندماج الثقافي مع تدريبات على مقابلات السفارة.',
  'languages.services.heading': 'ماذا نقدم في برامج اللغة؟',
  'languages.services.item1': 'تقييم مستوى دقيق وخطة تعلم مخصصة لكل طالب',
  'languages.services.item2': 'جلسات مباشرة مع مدربين معتمدين ومتحدثين أصليين',
  'languages.services.item3': 'متابعة أسبوعية وتقارير تقدم مفصلة باللغة العربية',
  'languages.services.item4': 'تحضير للمقابلات الجامعية ومهارات العرض الأكاديمي',
  'languages.cta': 'احجز اختبار تحديد المستوى',

  'faq.title': 'الأسئلة الشائعة حول خدماتنا',
  'faq.subtitle': 'إجابات تفصيلية على أكثر استفسارات الطلاب السوريين انتشاراً حول الدراسة في الخارج.',

  'footer.address': 'سوريا - خدمات استشارية عبر الإنترنت',
  'footer.phone': 'هاتف',
  'footer.email': 'البريد الإلكتروني',

  'pricing.note': 'للاستفسار عن الأسعار يرجى التواصل معنا مباشرة عبر واتساب على الرقم ‎+963 985 453 247‎.'
};

const translate = (key: string) => translations[key] ?? key;
const noop = () => {};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const value = useMemo(
    () => ({
      language: 'ar',
      setLanguage: noop,
      t: translate,
      direction: 'rtl'
    }),
    []
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
