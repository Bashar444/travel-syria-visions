
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language, direction } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    ar: {
      title: 'استخدام ملفات تعريف الارتباط',
      message: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وعرض إعلانات مخصصة عبر Google AdSense. بالمتابعة، توافق على استخدامنا لملفات تعريف الارتباط.',
      accept: 'أوافق',
      decline: 'رفض',
      privacy: 'سياسة الخصوصية'
    },
    en: {
      title: 'Cookie Usage',
      message: 'We use cookies to improve your experience and display personalized ads through Google AdSense. By continuing, you agree to our use of cookies.',
      accept: 'Accept',
      decline: 'Decline',
      privacy: 'Privacy Policy'
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md" dir={direction}>
      <Card className="bg-white border-2 border-blue-200 shadow-xl">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">
                {currentContent.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {currentContent.message}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={acceptCookies}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                  size="sm"
                >
                  {currentContent.accept}
                </Button>
                <Button 
                  onClick={declineCookies}
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  {currentContent.decline}
                </Button>
              </div>
              <div className="mt-2">
                <a 
                  href="/privacy" 
                  className="text-xs text-blue-600 hover:underline"
                >
                  {currentContent.privacy}
                </a>
              </div>
            </div>
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
