
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { direction } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Check if user might be looking for sitemap
  const isSitemapRelated = location.pathname.toLowerCase().includes('sitemap');
  
  // Clean up common URL mistakes
  const suggestCorrectUrl = () => {
    const path = location.pathname;
    if (path.includes('sitemap.')) {
      return '/sitemap';
    }
    if (path.includes('sitemap')) {
      return '/sitemap';
    }
    return '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className={`text-center max-w-lg mx-auto p-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 text-[#231F20]">404</h1>
          <p className="text-2xl text-gray-600 mb-6">
            {direction === 'rtl' ? 'عذراً! الصفحة غير موجودة' : 'Oops! Page not found'}
          </p>
          
          {isSitemapRelated && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">
                {direction === 'rtl' ? 'هل تبحث عن خريطة الموقع؟' : 'Looking for the sitemap?'}
              </h3>
              <p className="text-yellow-700 text-sm mb-3">
                {direction === 'rtl' 
                  ? 'يبدو أنك تحاول الوصول إلى خريطة الموقع. جرب هذه الروابط:'
                  : 'It looks like you\'re trying to access the sitemap. Try these links:'
                }
              </p>
              <div className="space-y-2">
                <Link 
                  to="/sitemap" 
                  className="block bg-[#0018A8] text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  {direction === 'rtl' ? 'خريطة الموقع (صفحة تفاعلية)' : 'Sitemap (Interactive Page)'}
                </Link>
                <a 
                  href="/sitemap.xml" 
                  className="block bg-[#EE3524] text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {direction === 'rtl' ? 'ملف XML للمطورين' : 'XML File (For Developers)'}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Link 
            to={suggestCorrectUrl()} 
            className="inline-block bg-[#0018A8] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            {direction === 'rtl' ? 'العودة إلى الصفحة الرئيسية' : 'Return to Home'}
          </Link>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-[#231F20]">
              {direction === 'rtl' ? 'صفحات مفيدة:' : 'Helpful Pages:'}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/services" className="text-[#0018A8] hover:underline">
                {direction === 'rtl' ? 'خدماتنا' : 'Services'}
              </Link>
              <Link to="/universities" className="text-[#0018A8] hover:underline">
                {direction === 'rtl' ? 'الجامعات' : 'Universities'}
              </Link>
              <Link to="/contact" className="text-[#0018A8] hover:underline">
                {direction === 'rtl' ? 'اتصل بنا' : 'Contact'}
              </Link>
              <Link to="/about" className="text-[#0018A8] hover:underline">
                {direction === 'rtl' ? 'من نحن' : 'About'}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          <p>
            {direction === 'rtl' 
              ? `الرابط المطلوب: ${location.pathname}`
              : `Requested URL: ${location.pathname}`
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
