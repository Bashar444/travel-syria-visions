
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
  ar: {
    // Navigation
    'nav.home': 'الصفحة الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.universities': 'الجامعات والشراكات',
    'nav.success-stories': 'قصص النجاح',
    'nav.about': 'معلومات عنا',
    'nav.contact': 'اتصل بنا',
    
    // Homepage
    'hero.title': 'رحلتك نحو التعليم الجامعي تبدأ هنا',
    'hero.subtitle': 'نساعد الطلاب السوريين في الحصول على قبولات جامعية ومنح دراسية في أفضل الجامعات حول العالم',
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
    'services.price': '$800 لكل قبول ناجح',
    
    // About
    'about.title': 'عن Travel.Ltd',
    'about.mission': 'مهمتنا هي مساعدة الطلاب السوريين في تحقيق أحلامهم التعليمية',
    'about.hours': 'ساعات العمل: 6 أيام في الأسبوع، من 6 صباحاً إلى 10 مساءً',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال',
    
    // Footer
    'footer.description': 'Travel.Ltd - شريكك الموثوق في رحلة التعليم الجامعي',
    'footer.rights': 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.universities': 'Universities',
    'nav.success-stories': 'Success Stories',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Homepage
    'hero.title': 'Your Journey to University Education Starts Here',
    'hero.subtitle': 'We help Syrian students obtain university admissions and scholarships at the best universities worldwide',
    'hero.cta': 'Book Free Consultation',
    'hero.whatsapp': 'Contact via WhatsApp',
    
    // Services
    'services.title': 'Our Distinguished Services',
    'services.admission': 'University Admission Consulting',
    'services.admission.desc': 'Comprehensive guidance for choosing the right university and preparing admission files',
    'services.scholarship': 'Scholarship Application Assistance',
    'services.scholarship.desc': 'Finding available scholarships and preparing applications',
    'services.visa': 'Visa Support and Documentation',
    'services.visa.desc': 'Assistance with visa procedures and required document preparation',
    'services.tours': 'Educational Tours and Orientation',
    'services.tours.desc': 'Orientation programs to understand the education system in your chosen country',
    'services.price': '$800 per successful admission',
    
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
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
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
