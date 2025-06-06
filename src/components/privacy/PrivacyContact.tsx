
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactSection {
  title: string;
  content: string;
  email: string;
  phone: string;
  dataProtection: string;
}

interface PrivacyContactProps {
  contactSection: ContactSection;
}

const PrivacyContact = ({ contactSection }: PrivacyContactProps) => {
  const { language } = useLanguage();

  return (
    <section className="bg-[#0018A8] text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-content">
        {contactSection.title}
      </h2>
      <p className="mb-4 text-lg text-content">{contactSection.content}</p>
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-content">
          <strong>{language === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong> 
          <a href={`mailto:${contactSection.email}`} className="hover:underline">
            {contactSection.email}
          </a>
        </p>
        <p className="flex items-center gap-2 text-content">
          <strong>{language === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> 
          <a href={`tel:${contactSection.phone}`} className="hover:underline">
            {contactSection.phone}
          </a>
        </p>
        <p className="text-sm opacity-90 text-content">{contactSection.dataProtection}</p>
      </div>
    </section>
  );
};

export default PrivacyContact;
