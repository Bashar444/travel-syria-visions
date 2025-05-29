
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, direction } = useLanguage();
  const whatsappNumber = "+963985453247";

  return (
    <footer className="bg-[#0E1B34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`md:col-span-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="text-white px-4 py-2 rounded-lg font-bold text-lg bg-[#0018A8]">
                TRAVEL
              </div>
              <span className="text-white font-semibold">
                for university admissions
              </span>
            </div>
            <p className="text-[#EDF1F7] mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <p className="text-[#EDF1F7] text-sm">
              {t('about.hours')}
            </p>
            <div className="mt-4">
              <p className="text-[#EDF1F7] text-sm">
                <strong>البريد الإلكتروني:</strong> alhusseinamjad904@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <h3 className="text-lg font-semibold mb-4 text-[#00A3E0]">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-[#EDF1F7] hover:text-[#00A3E0] transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/universities" className="text-[#EDF1F7] hover:text-[#00A3E0] transition-colors">
                  {t('nav.universities')}
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-[#EDF1F7] hover:text-[#00A3E0] transition-colors">
                  {t('nav.success-stories')}
                </Link>
              </li>
              <li>
                <Link to="/work-with-us" className="text-[#EDF1F7] hover:text-[#00A3E0] transition-colors">
                  اعمل معنا
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#EDF1F7] hover:text-[#00A3E0] transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp Only */}
          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <h3 className="text-lg font-semibold mb-4 text-[#00A3E0]">{t('nav.contact')}</h3>
            <div className="space-y-3">
              <button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')} 
                className="flex items-center space-x-2 rtl:space-x-reverse text-[#EDF1F7] hover:text-[#00A3E0] transition-colors group"
              >
                <div className="bg-green-600 p-2 rounded-full group-hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <span>واتساب: {whatsappNumber}</span>
              </button>
              
              <Link to="/contact" className="block text-[#EDF1F7] hover:text-[#00A3E0] transition-colors">
                نموذج الاتصال
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2B3A3E] mt-8 pt-8 text-center">
          <p className="text-[#EDF1F7] text-sm">
            © 2024 Travel.Ltd. {t('footer.rights')}
          </p>
          <div className="mt-4 flex justify-center space-x-4 rtl:space-x-reverse">
            <Link to="/privacy" className="text-[#EDF1F7] hover:text-[#00A3E0] text-xs transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-[#EDF1F7] hover:text-[#00A3E0] text-xs transition-colors">
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
