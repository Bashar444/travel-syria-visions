
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const { t, direction } = useLanguage();

  return (
    <footer className="bg-[#231F20] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`md:col-span-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="bg-[#EE3524] text-white px-4 py-2 rounded-lg font-bold text-lg">
                TRAVEL
              </div>
              <span className="text-white font-semibold">
                for university admissions
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <p className="text-gray-300 text-sm">
              {t('about.hours')}
            </p>
          </div>

          {/* Quick Links */}
          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <h3 className="text-lg font-semibold mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#EE3524] transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/universities" className="text-gray-300 hover:text-[#EE3524] transition-colors">
                  {t('nav.universities')}
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-[#EE3524] transition-colors">
                  {t('nav.success-stories')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#EE3524] transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <div className="space-y-3">
              <button
                onClick={() => window.open('https://wa.me/+963123456789', '_blank')}
                className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 hover:text-[#EE3524] transition-colors"
              >
                <span>WhatsApp</span>
              </button>
              
              <div className="flex space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => window.open('https://facebook.com/travel.ltd', '_blank')}
                  className="text-gray-300 hover:text-[#EE3524] transition-colors"
                >
                  <Facebook size={20} />
                </button>
                <button
                  onClick={() => window.open('https://instagram.com/travel.ltd', '_blank')}
                  className="text-gray-300 hover:text-[#EE3524] transition-colors"
                >
                  <Instagram size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Travel.Ltd. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
