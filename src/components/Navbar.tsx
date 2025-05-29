
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, Languages, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, direction } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.universities'), href: '/universities' },
    { name: direction === 'rtl' ? 'المدونة' : 'Blog', href: '/blog' },
    { name: t('nav.success-stories'), href: '/success-stories' },
    { name: direction === 'rtl' ? 'اعمل معنا' : 'Work with Us', href: '/work-with-us' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    
    // Add smooth transition effect
    document.documentElement.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  const whatsappNumber = "+963985453247";

  return (
    <nav className="bg-white shadow-lg border-b-2 border-[#0018A8] sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className={`flex items-center ${direction === 'rtl' ? 'order-2' : 'order-1'}`}>
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="flex items-center logo-hover">
                <img 
                  alt="Travel for university admissions" 
                  style={{
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                    minHeight: '120px'
                  }} 
                  src="https://ik.imagekit.io/sa7gckrpwy/logo%20travel.ico?updatedAt=1748450827694" 
                  className="h-20 w-auto min-w-[180px] md:h-24 transition-transform duration-300 hover:scale-105 object-contain" 
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-1 rtl:space-x-reverse ${direction === 'rtl' ? 'order-1' : 'order-2'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#F6F8FC] hover:shadow-sm transform hover:-translate-y-1 hover:scale-105 ${
                  isActivePage(item.href)
                    ? 'text-[#0018A8] bg-[#F6F8FC] shadow-md after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#0018A8] after:content-[""] after:rounded-t-md'
                    : 'text-[#2B3A3E] hover:text-[#0018A8]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Enhanced Language Switch */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLanguageSwitch} 
              className="border-[#0018A8] transition-all duration-300 hover:shadow-md hover:-translate-y-1 mx-2 text-white text-base font-normal bg-[#00A3E0] hover:bg-[#0018A8] min-w-[80px] flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === 'ar' ? 'EN' : 'عربي'}
            </Button>

            {/* WhatsApp CTA */}
            <Button 
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')} 
              className="text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform text-base bg-[#0018A8] hover:bg-[#00A3E0] flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {t('hero.whatsapp')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden ${direction === 'rtl' ? 'order-1' : 'order-3'}`}>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-[#F6F8FC] transition-colors duration-200">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={direction === 'rtl' ? 'right' : 'left'} className="w-80 bg-white border-r border-[#747474]">
                <div className="flex flex-col space-y-1 mt-8">
                  {/* Logo in mobile menu */}
                  <div className="mb-6 pb-6 border-b border-[#747474]">
                    <img 
                      src="https://ik.imagekit.io/sa7gckrpwy/logo%20travel.ico?updatedAt=1748450827694" 
                      alt="Travel for university admissions" 
                      className="h-16 w-auto min-w-[140px] mx-auto" 
                      style={{
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                        minHeight: '93px'
                      }} 
                    />
                  </div>

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                        isActivePage(item.href)
                          ? 'text-[#0018A8] bg-[#F6F8FC] border-r-2 border-[#0018A8]'
                          : 'text-[#2B3A3E] hover:text-[#0018A8] hover:bg-[#F6F8FC]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-[#747474] mt-4">
                    <Button 
                      variant="outline" 
                      onClick={handleLanguageSwitch} 
                      className="border-[#0018A8] text-[#0018A8] hover:bg-[#0018A8] hover:text-white w-full mb-3 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Languages className="w-4 h-4" />
                      {language === 'ar' ? 'English' : 'عربي'}
                    </Button>

                    <Button 
                      className="bg-[#0018A8] hover:bg-[#00A3E0] text-white w-full transition-all duration-200 flex items-center justify-center gap-2" 
                      onClick={() => {
                        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
                        setIsOpen(false);
                      }}
                    >
                      <Globe className="w-4 h-4" />
                      {t('hero.whatsapp')}
                    </Button>
                  </div>
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
