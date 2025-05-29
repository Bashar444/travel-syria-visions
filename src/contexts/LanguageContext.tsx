
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.universities': 'Universities',
    'nav.success-stories': 'Success Stories',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.work-with-us': 'Work with Us',
    
    // Homepage
    'hero.title': 'University Admissions & Educational Services',
    'hero.subtitle': 'Expert guidance for Syrian students seeking quality education abroad. University admissions, visa processing, and specialized services.',
    'hero.cta': 'Book Free Consultation',
    'hero.whatsapp': 'Contact via WhatsApp',
    
    // Services
    'services.title': 'Our Professional Services',
    'services.admission': 'University Admission Consulting',
    'services.admission.desc': 'Comprehensive guidance for choosing the right university and preparing admission files',
    'services.scholarship': 'Scholarship Application Assistance',
    'services.scholarship.desc': 'Finding available scholarships and preparing applications',
    'services.visa': 'Visa Support and Documentation',
    'services.visa.desc': 'Assistance with visa procedures and required document preparation',
    'services.tours': 'Educational Tours and Orientation',
    'services.tours.desc': 'Orientation programs to understand the education system in your chosen country',
    'services.price': '$1099 per service',
    
    // About
    'about.title': 'About Travel.Ltd',
    'about.mission': 'Our mission is to help Syrian students achieve their educational dreams',
    'about.hours': 'Operating Hours: 6 days a week, 6 AM - 10 PM',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    
    // Footer
    'footer.description': 'Travel.Ltd - Your trusted partner in university education journey',
    'footer.rights': 'All rights reserved',
    'footer.quick-links': 'Quick Links',
    'footer.contact-form': 'Contact Form',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    
    // Feedback
    'feedback.title': 'Your Feedback Matters',
    'feedback.subtitle': 'Share your experience or questions with us',
    'feedback.button': 'Give Feedback',
    
    // Work with Us
    'work.title': 'Work with Us',
    'work.subtitle': 'Join our team and be part of our mission to help Syrian students achieve their educational dreams',
    'work.educational-consultant': 'Educational Consultant',
    'work.business-developer': 'Business Developer',
    'work.apply-now': 'Apply Now',
    'work.opportunities': 'Available Opportunities',
    'work.why-choose': 'Why Choose to Work with Us?',
    'work.meaningful-mission': 'Meaningful Mission',
    'work.flexible-environment': 'Flexible Work Environment',
    'work.growth-opportunities': 'Growth Opportunities',
  },
  ar: {
    // Navigation
    'nav.home': 'الصفحة الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.universities': 'الجامعات والشراكات',
    'nav.success-stories': 'قصص النجاح',
    'nav.about': 'معلومات عنا',
    'nav.contact': 'اتصل بنا',
    'nav.blog': 'المدونة',
    'nav.work-with-us': 'اعمل معنا',
    
    // Homepage
    'hero.title': 'القبولات الجامعية والخدمات التعليمية',
    'hero.subtitle': 'إرشاد متخصص للطلاب السوريين الساعين للحصول على تعليم عالي الجودة في الخارج. قبولات جامعية، معالجة التأشيرات، وخدمات متخصصة.',
    'hero.cta': 'احجز استشارة مجانية',
    'hero.whatsapp': 'تواصل عبر واتساب',
    
    // Services
    'services.title': 'خدماتنا المتميزة',
    'services.admission': 'استشارات القبول الجامعي',
    'services.admission.desc': 'إرشاد شامل لاختيار الجامعة المناسبة وإعداد ملف القبول',
    'services.scholarship': 'المساعدة في طلبات المنح',
    'services.scholarship.desc': 'البحث عن المنح المتاحة وإعداد طلبات التقديم',
    'services.visa': 'دعم التأشيرة والوثائق',
    'services.visa.desc': 'مساعدة في إجراءات التأشيرة وتحضير الوثائق المطلوبة',
    'services.tours': 'الجولات التعليمية والتوجيه',
    'services.tours.desc': 'برامج توجيهية لفهم نظام التعليم في البلد المختار',
    'services.price': '١٠٩٩ دولار لكل خدمة',
    
    // About
    'about.title': 'عن Travel.Ltd',
    'about.mission': 'مهمتنا هي مساعدة الطلاب السوريين في تحقيق أحلامهم التعليمية',
    'about.hours': 'ساعات العمل: ٦ أيام في الأسبوع، من ٦ صباحاً إلى ١٠ مساءً',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال',
    
    // Footer
    'footer.description': 'Travel.Ltd - شريكك الموثوق في رحلة التعليم الجامعي',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.quick-links': 'روابط سريعة',
    'footer.contact-form': 'نموذج الاتصال',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    
    // Feedback
    'feedback.title': 'تقييمك يهمنا',
    'feedback.subtitle': 'شاركنا تجربتك أو استفساراتك',
    'feedback.button': 'قدم تقييمك',
    
    // Work with Us
    'work.title': 'اعمل معنا',
    'work.subtitle': 'انضم إلى فريقنا وكن جزءاً من رسالتنا لمساعدة الطلاب السوريين في تحقيق أحلامهم التعليمية',
    'work.educational-consultant': 'مستشار تعليمي',
    'work.business-developer': 'مطور أعمال',
    'work.apply-now': 'قدم الآن',
    'work.opportunities': 'الفرص المتاحة',
    'work.why-choose': 'لماذا تختار العمل معنا؟',
    'work.meaningful-mission': 'رسالة هادفة',
    'work.flexible-environment': 'بيئة عمل مرنة',
    'work.growth-opportunities': 'فرص للنمو',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check for saved language preference, default to Arabic
    const saved = localStorage.getItem('preferred-language');
    return (saved === 'en' || saved === 'ar') ? saved as Language : 'ar';
  });
  
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations['ar']];
    if (!translation) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  const handleSetLanguage = (lang: Language) => {
    console.log(`Switching language to: ${lang}`);
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  useEffect(() => {
    // Apply changes immediately with smooth transition
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Enhanced Arabic font support
    if (language === 'ar') {
      document.body.style.fontFamily = "'Noto Sans Arabic', 'Cairo', 'Segoe UI', 'Tahoma', 'Arial', sans-serif";
      document.body.style.fontSize = '1.1em';
      document.body.style.lineHeight = '1.8';
      document.body.style.textAlign = 'right';
    } else {
      document.body.style.fontFamily = "'Inter', 'Segoe UI', 'Tahoma', 'Arial', sans-serif";
      document.body.style.fontSize = '1em';
      document.body.style.lineHeight = '1.6';
      document.body.style.textAlign = 'left';
    }
    
    // Add class for CSS transitions
    document.documentElement.classList.add('language-switching');
    setTimeout(() => {
      document.documentElement.classList.remove('language-switching');
    }, 300);
    
    console.log(`Language context updated: ${language}, Direction: ${direction}`);
  }, [direction, language]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
