import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {
    language,
    setLanguage,
    t,
    direction
  } = useLanguage();
  const navigation = [{
    name: t('nav.home'),
    href: '/'
  }, {
    name: t('nav.services'),
    href: '/services'
  }, {
    name: t('nav.universities'),
    href: '/universities'
  }, {
    name: 'المدونة',
    href: '/blog'
  }, {
    name: t('nav.success-stories'),
    href: '/success-stories'
  }, {
    name: t('nav.about'),
    href: '/about'
  }, {
    name: t('nav.contact'),
    href: '/contact'
  }];
  const isActivePage = (href: string) => {
    return location.pathname === href;
  };
  const handleLanguageSwitch = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  const whatsappNumber = "+963985453247";
  return <nav className="bg-white shadow-lg border-b-2 border-[#EE3524] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Optimized with larger size and hover effects */}
          <div className={`flex items-center ${direction === 'rtl' ? 'order-2' : 'order-1'}`}>
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="flex items-center logo-hover">
                <img src="/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png" alt="Travel for university admissions" className="h-20 w-auto min-w-[180px] md:h-24 transition-transform duration-300 hover:scale-105" style={{
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                minHeight: '120px'
              }} />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-1 rtl:space-x-reverse ${direction === 'rtl' ? 'order-1' : 'order-2'}`}>
            {navigation.map(item => <Link key={item.name} to={item.href} className={`relative px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:-translate-y-0.5 ${isActivePage(item.href) ? 'text-[#EE3524] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#EE3524] after:content-[""]' : 'text-[#231F20] hover:text-[#EE3524]'}`}>
                {item.name}
              </Link>)}
            
            {/* Language Switch */}
            <Button variant="outline" size="sm" onClick={handleLanguageSwitch} className="border-[#EE3524] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 mx-2 text-cyan-50 text-base font-normal bg-emerald-700 hover:bg-emerald-600">
              {language === 'ar' ? 'EN' : 'عربي'}
            </Button>

            {/* WhatsApp CTA */}
            <Button onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')} className="text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 transform text-base bg-sky-800 hover:bg-sky-700">
              {t('hero.whatsapp')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden ${direction === 'rtl' ? 'order-1' : 'order-3'}`}>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-gray-100 transition-colors duration-200">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={direction === 'rtl' ? 'right' : 'left'} className="w-80 bg-white border-r border-gray-200">
                <div className="flex flex-col space-y-1 mt-8">
                  {/* Logo in mobile menu */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <img src="/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png" alt="Travel for university admissions" className="h-16 w-auto min-w-[140px] mx-auto" style={{
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                    minHeight: '93px'
                  }} />
                  </div>

                  {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${isActivePage(item.href) ? 'text-[#EE3524] bg-red-50 border-r-2 border-[#EE3524]' : 'text-[#231F20] hover:text-[#EE3524] hover:bg-gray-50'}`}>
                      {item.name}
                    </Link>)}
                  
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <Button variant="outline" onClick={handleLanguageSwitch} className="border-[#EE3524] text-[#EE3524] hover:bg-[#EE3524] hover:text-white w-full mb-3 transition-all duration-200">
                      {language === 'ar' ? 'English' : 'عربي'}
                    </Button>

                    <Button className="bg-[#EE3524] hover:bg-red-600 text-white w-full transition-all duration-200" onClick={() => {
                    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
                    setIsOpen(false);
                  }}>
                      {t('hero.whatsapp')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;