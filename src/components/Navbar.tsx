import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, Languages, Globe, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageConfirmDialog from './LanguageConfirmDialog';
import MobileHeaderButtons from './MobileHeaderButtons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState<string>('');
  const location = useLocation();
  const { language, setLanguage, t, direction } = useLanguage();
  const isMobile = useIsMobile();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.languages'), href: '/languages' },
    { name: t('nav.universities'), href: '/universities' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.success-stories'), href: '/success-stories' },
    { name: t('nav.work-with-us'), href: '/work-with-us' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  const legalPages = [
    { name: t('nav.terms'), href: '/terms' },
    { name: t('nav.privacy'), href: '/privacy' }
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  const isLegalPageActive = () => {
    return legalPages.some(page => location.pathname === page.href);
  };

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    console.log(`Language button clicked. Current: ${language}, Switching to: ${newLanguage}`);
    setLanguage(newLanguage);
    
    // Add smooth transition effect
    document.documentElement.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  const handleMobileLanguageClick = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setPendingLanguage(newLanguage);
    setShowLanguageDialog(true);
  };

  const confirmLanguageChange = () => {
    console.log(`Mobile language switch confirmed. Changing to: ${pendingLanguage}`);
    setLanguage(pendingLanguage);
    setShowLanguageDialog(false);
    
    // Add smooth transition effect
    document.documentElement.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  const handleCallClick = () => {
    window.open('tel:+963985453247', '_self');
  };

  const handleNotificationClick = () => {
    // For now, just show a simple alert - can be enhanced with actual notification system
    alert(t('mobile.notifications'));
  };

  const whatsappNumber = "+963985453247";

  return (
    <>
      <nav className="bg-white shadow-lg border-b-2 border-[#0018A8] sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
            {/* Logo */}
            <div className={`flex items-center ${direction === 'rtl' ? 'order-2' : 'order-1'}`}>
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="flex items-center logo-hover">
                  <img 
                    alt="Travel for university admissions" 
                    style={{
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
                      minHeight: 'auto'
                    }} 
                    src="https://ik.imagekit.io/sa7gckrpwy/logo%20travel.ico?updatedAt=1748450827694" 
                    className="h-14 sm:h-16 md:h-20 w-auto min-w-[120px] sm:min-w-[140px] md:min-w-[180px] object-contain" 
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center space-x-2 rtl:space-x-reverse ${direction === 'rtl' ? 'order-1' : 'order-2'}`}>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-3 sm:px-4 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 hover:bg-[#F6F8FC] whitespace-nowrap ${
                    isActivePage(item.href)
                      ? "text-[#0018A8] bg-[#F6F8FC] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#0018A8] after:content-[''] after:rounded-t-md"
                      : 'text-[#2B3A3E] hover:text-[#0018A8]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Terms & Privacy Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={`relative px-3 sm:px-4 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 hover:bg-[#F6F8FC] flex items-center gap-1 whitespace-nowrap ${
                      isLegalPageActive()
                        ? "text-[#0018A8] bg-[#F6F8FC] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#0018A8] after:content-[''] after:rounded-t-md"
                        : 'text-[#2B3A3E] hover:text-[#0018A8]'
                    }`}
                  >
                    {t('nav.terms-privacy')}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-[#747474] shadow-lg z-50" align={direction === 'rtl' ? 'end' : 'start'}>
                  {legalPages.map((page) => (
                    <DropdownMenuItem key={page.href} asChild>
                      <Link
                        to={page.href}
                        className={`w-full px-4 py-2 text-xs sm:text-sm transition-colors duration-200 cursor-pointer ${
                          isActivePage(page.href)
                            ? 'text-[#0018A8] bg-[#F6F8FC]'
                            : 'text-[#2B3A3E] hover:text-[#0018A8] hover:bg-[#F6F8FC]'
                        }`}
                      >
                        {page.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Enhanced Language Switch */}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLanguageSwitch} 
                className="border-[#0018A8] transition-colors duration-200 mx-2 text-white text-base font-normal bg-[#00A3E0] hover:bg-[#0018A8] min-w-[80px] flex items-center gap-2"
                title={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
              >
                <Languages className="w-4 h-4" />
                {language === 'ar' ? 'EN' : 'عربي'}
              </Button>

              {/* WhatsApp CTA */}
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')} 
                className="text-white transition-colors duration-200 text-base bg-[#0018A8] hover:bg-[#00A3E0] flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {t('hero.whatsapp')}
              </Button>
            </div>

            {/* Enhanced Mobile Header */}
            <div className={`md:hidden flex items-center gap-2 ${direction === 'rtl' ? 'order-1' : 'order-3'}`}>
              {/* Mobile Header Buttons */}
              <MobileHeaderButtons
                onLanguageClick={handleMobileLanguageClick}
                onCallClick={handleCallClick}
                onNotificationClick={handleNotificationClick}
              />
              
              {/* Mobile menu button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:bg-[#F6F8FC] transition-colors duration-200 h-8 w-8 p-0">
                    <Menu className="h-5 w-5 text-[#0018A8]" />
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
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                          isActivePage(item.href)
                            ? 'text-[#0018A8] bg-[#F6F8FC] border-r-2 border-[#0018A8]'
                            : 'text-[#2B3A3E] hover:text-[#0018A8] hover:bg-[#F6F8FC]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Legal Pages in Mobile Menu */}
                    <div className="pt-2 border-t border-[#747474] mt-2">
                      <div className="px-4 py-2 text-sm font-medium text-[#0018A8]">
                        {t('nav.terms-privacy')}
                      </div>
                      {legalPages.map((page) => (
                        <Link
                          key={page.href}
                          to={page.href}
                          onClick={() => setIsOpen(false)}
                          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 block ${
                            isActivePage(page.href)
                              ? 'text-[#0018A8] bg-[#F6F8FC] border-r-2 border-[#0018A8]'
                              : 'text-[#2B3A3E] hover:text-[#0018A8] hover:bg-[#F6F8FC]'
                          }`}
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-[#747474] mt-4">
                      <Button 
                        variant="outline" 
                        onClick={handleMobileLanguageClick} 
                        className="border-[#0018A8] text-[#0018A8] hover:bg-[#0018A8] hover:text-white w-full mb-3 transition-colors duration-200 flex items-center justify-center gap-2"
                        title={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
                      >
                        <Languages className="w-4 h-4" />
                        {language === 'ar' ? 'English' : 'عربي'}
                      </Button>

                      <Button 
                        className="bg-[#0018A8] hover:bg-[#00A3E0] text-white w-full transition-colors duration-200 flex items-center justify-center gap-2" 
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

      {/* Language Confirmation Dialog */}
      <LanguageConfirmDialog
        open={showLanguageDialog}
        onOpenChange={setShowLanguageDialog}
        onConfirm={confirmLanguageChange}
        targetLanguage={pendingLanguage}
      />
    </>
  );
};

export default Navbar;
