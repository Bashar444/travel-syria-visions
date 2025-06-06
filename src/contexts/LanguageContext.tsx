import React, { createContext, useContext, useState, useEffect } from 'react';

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

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.universities': 'Universities',
    'nav.blog': 'Blog',
    'nav.work-with-us': 'Work With Us',
    'nav.success-stories': 'Success Stories',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.terms-privacy': 'Terms & Privacy',
    'nav.terms': 'Terms of Service',
    'nav.privacy': 'Privacy Policy',

    'hero.title': 'Unlock Your Future with Global Education',
    'hero.subtitle': 'Your gateway to international universities and scholarships',
    'hero.services': 'Explore Our Services',
    'hero.whatsapp': 'Contact Us on WhatsApp',

    'services.title': 'Our Services',
    'services.university-admissions': 'University Admissions',
    'services.visa-assistance': 'Visa Assistance',
    'services.scholarships': 'Scholarships',
    'services.study-abroad': 'Study Abroad',

    'universities.title': 'Partner Universities',
    'universities.description': 'Explore our network of prestigious universities around the world.',

    'blog.title': 'Latest Articles',
    'blog.description': 'Stay updated with the latest news and insights about studying abroad.',

    'work-with-us.title': 'Join Our Team',
    'work-with-us.description': 'Explore career opportunities and become a part of our mission.',

    'success-stories.title': 'Inspiring Stories',
    'success-stories.description': 'Read about the success of our students and their journey to global education.',
    
    'contact.title': 'Contact Us',
    'contact.free-consultation': 'Book Free Consultation',
    'contact.success-message': 'Your request has been sent successfully! We will contact you soon.',
    'contact.full-name': 'Full Name',
    'contact.full-name-required': 'Full name is required',
    'contact.full-name-placeholder': 'Enter your full name',
    'contact.phone': 'Phone Number',
    'contact.phone-required': 'Phone number is required',
    'contact.email': 'Email',
    'contact.email-required': 'Email is required',
    'contact.email-invalid': 'Invalid email format',
    'contact.preferred-university': 'Preferred University',
    'contact.select-university': 'Select University',
    'contact.desired-major': 'Desired Major',
    'contact.major-placeholder': 'e.g., Computer Engineering, Business Administration, Medicine',
    'contact.additional-message': 'Additional Message (Optional)',
    'contact.message-placeholder': 'Any additional information you would like to share...',
    'contact.sending': 'Sending...',
    'contact.submit': 'Submit Request',
    'contact.direct-contact': 'Contact Us Directly',
    'contact.whatsapp': 'Contact via WhatsApp',
    'contact.whatsapp-number': 'WhatsApp Number',
    'contact.email-label': 'Email',
    'contact.working-hours': 'Working Hours',

    'about.title': 'About Us',
    'about.mission': 'Your trusted partner for university admissions and educational services.',
    'about.hours': 'Monday to Friday: 10:00 AM - 6:00 PM (GMT+3)',

    'footer.description': 'Professional educational services and university admissions guidance for Syrian students worldwide.',
    'footer.quick-links': 'Quick Links',
    'footer.contact-form': 'Contact Form',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // New mobile header translations
    'mobile.language-prompt': 'Change Website Language?',
    'mobile.language-confirm': 'Would you like to switch to Arabic?',
    'mobile.language-confirm-ar': 'Would you like to switch to English?',
    'mobile.change-to-arabic': 'Change to Arabic',
    'mobile.change-to-english': 'Change to English',
    'mobile.cancel': 'Cancel',
    'mobile.confirm': 'Confirm',
    'mobile.call-now': 'Call Now',
    'mobile.apply-now': 'Apply Now',
    'mobile.notifications': 'Notifications',
    'mobile.quick-contact': 'Quick Contact',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.universities': 'الجامعات',
    'nav.blog': 'المدونة',
    'nav.work-with-us': 'اعمل معنا',
    'nav.success-stories': 'قصص النجاح',
    'nav.about': 'معلومات عنا',
    'nav.contact': 'اتصل بنا',
    'nav.terms-privacy': 'الشروط والخصوصية',
    'nav.terms': 'شروط الخدمة',
    'nav.privacy': 'سياسة الخصوصية',

    'hero.title': 'اطلق العنان لمستقبلك مع التعليم العالمي',
    'hero.subtitle': 'بوابتك إلى الجامعات والمنح الدراسية الدولية',
    'hero.services': 'اكتشف خدماتنا',
    'hero.whatsapp': 'تواصل معنا على واتساب',

    'services.title': 'خدماتنا',
    'services.university-admissions': 'قبولات جامعية',
    'services.visa-assistance': 'المساعدة في الحصول على التأشيرة',
    'services.scholarships': 'المنح الدراسية',
    'services.study-abroad': 'الدراسة في الخارج',

    'universities.title': 'الجامعات الشريكة',
    'universities.description': 'اكتشف شبكتنا من الجامعات المرموقة حول العالم.',

    'blog.title': 'أحدث المقالات',
    'blog.description': 'ابق على اطلاع بأحدث الأخبار والرؤى حول الدراسة في الخارج.',

    'work-with-us.title': 'انضم إلى فريقنا',
    'work-with-us.description': 'اكتشف الفرص الوظيفية وكن جزءًا من مهمتنا.',

    'success-stories.title': 'قصص ملهمة',
    'success-stories.description': 'اقرأ عن نجاح طلابنا ورحلتهم إلى التعليم العالمي.',
    
    'contact.title': 'اتصل بنا',
    'contact.free-consultation': 'احجز استشارة مجانية',
    'contact.success-message': 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.',
    'contact.full-name': 'الاسم الكامل',
    'contact.full-name-required': 'الاسم الكامل مطلوب',
    'contact.full-name-placeholder': 'أدخل اسمك الكامل',
    'contact.phone': 'رقم الهاتف',
    'contact.phone-required': 'رقم الهاتف مطلوب',
    'contact.email': 'البريد الإلكتروني',
    'contact.email-required': 'البريد الإلكتروني مطلوب',
    'contact.email-invalid': 'البريد الإلكتروني غير صحيح',
    'contact.preferred-university': 'الجامعة المرغوبة',
    'contact.select-university': 'اختر الجامعة',
    'contact.desired-major': 'التخصص المطلوب',
    'contact.major-placeholder': 'مثل: هندسة الحاسوب، إدارة الأعمال، الطب',
    'contact.additional-message': 'رسالة إضافية (اختيارية)',
    'contact.message-placeholder': 'أي معلومات إضافية تود مشاركتها...',
    'contact.sending': 'جاري الإرسال...',
    'contact.submit': 'إرسال الطلب',
    'contact.direct-contact': 'تواصل معنا مباشرة',
    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.whatsapp-number': 'رقم الواتساب',
    'contact.email-label': 'البريد الإلكتروني',
    'contact.working-hours': 'ساعات العمل',

    'about.title': 'معلومات عنا',
    'about.mission': 'شريكك الموثوق لقبولات الجامعات والخدمات التعليمية.',
    'about.hours': 'الاثنين إلى الجمعة: 10:00 صباحاً - 6:00 مساءً (توقيت دمشق)',

    'footer.description': 'خدمات تعليمية احترافية وإرشاد لقبولات الجامعات للطلاب السوريين حول العالم.',
    'footer.quick-links': 'روابط سريعة',
    'footer.contact-form': 'نموذج التواصل',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',

    // New mobile header translations
    'mobile.language-prompt': 'تغيير لغة الموقع؟',
    'mobile.language-confirm': 'هل تريد التبديل إلى اللغة الإنجليزية؟',
    'mobile.language-confirm-ar': 'هل تريد التبديل إلى اللغة العربية؟',
    'mobile.change-to-arabic': 'التغيير إلى العربية',
    'mobile.change-to-english': 'التغيير إلى الإنجليزية',
    'mobile.cancel': 'إلغاء',
    'mobile.confirm': 'تأكيد',
    'mobile.call-now': 'اتصل الآن',
    'mobile.apply-now': 'قدم الآن',
    'mobile.notifications': 'الإشعارات',
    'mobile.quick-contact': 'تواصل سريع',
  }
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key] || key;
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
