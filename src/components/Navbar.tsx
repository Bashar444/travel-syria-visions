
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, direction } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.universities'), href: '/universities' },
    { name: t('nav.success-stories'), href: '/success-stories' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  const handleLanguageSwitch = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-[#EE3524] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`flex items-center ${direction === 'rtl' ? 'order-2' : 'order-1'}`}>
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="bg-[#EE3524] text-white px-4 py-2 rounded-lg font-bold text-lg">
                TRAVEL
              </div>
              <span className="text-[#231F20] font-semibold hidden sm:block">
                for university admissions
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 rtl:space-x-reverse ${direction === 'rtl' ? 'order-1' : 'order-2'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePage(item.href)
                    ? 'text-[#EE3524] bg-red-50'
                    : 'text-[#231F20] hover:text-[#EE3524] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switch */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleLanguageSwitch}
              className="border-[#EE3524] text-[#EE3524] hover:bg-[#EE3524] hover:text-white"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </Button>

            {/* WhatsApp CTA */}
            <Button 
              className="bg-[#EE3524] hover:bg-red-600 text-white"
              onClick={() => window.open('https://wa.me/+963123456789', '_blank')}
            >
              {t('hero.whatsapp')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden ${direction === 'rtl' ? 'order-1' : 'order-3'}`}>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side={direction === 'rtl' ? 'right' : 'left'} className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActivePage(item.href)
                          ? 'text-[#EE3524] bg-red-50'
                          : 'text-[#231F20] hover:text-[#EE3524] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={handleLanguageSwitch}
                    className="border-[#EE3524] text-[#EE3524] hover:bg-[#EE3524] hover:text-white w-full"
                  >
                    {language === 'ar' ? 'English' : 'عربي'}
                  </Button>

                  <Button 
                    className="bg-[#EE3524] hover:bg-red-600 text-white w-full"
                    onClick={() => window.open('https://wa.me/+963123456789', '_blank')}
                  >
                    {t('hero.whatsapp')}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
