
import { useLanguage } from '@/contexts/LanguageContext';

const Sitemap = () => {
  const { direction } = useLanguage();
  
  const routes = [
    { 
      url: '/', 
      priority: '1.0', 
      changefreq: 'daily',
      title: direction === 'rtl' ? 'الصفحة الرئيسية' : 'Home',
      description: direction === 'rtl' ? 'الصفحة الرئيسية لموقع Travel.Ltd' : 'Travel.Ltd main homepage'
    },
    { 
      url: '/services', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: direction === 'rtl' ? 'خدماتنا' : 'Our Services',
      description: direction === 'rtl' ? 'خدمات القبول الجامعي والاستشارات التعليمية' : 'University admission services and educational consulting'
    },
    { 
      url: '/universities', 
      priority: '0.9', 
      changefreq: 'weekly',
      title: direction === 'rtl' ? 'الجامعات والشراكات' : 'Universities & Partnerships',
      description: direction === 'rtl' ? 'شراكاتنا مع المؤسسات التعليمية والثقافية' : 'Our partnerships with educational and cultural institutions'
    },
    { 
      url: '/blog', 
      priority: '0.8', 
      changefreq: 'weekly',
      title: direction === 'rtl' ? 'المدونة' : 'Blog',
      description: direction === 'rtl' ? 'مقالات وأدلة التعليم والدراسة في الخارج' : 'Educational articles and study abroad guides'
    },
    { 
      url: '/contact', 
      priority: '0.8', 
      changefreq: 'monthly',
      title: direction === 'rtl' ? 'اتصل بنا' : 'Contact Us',
      description: direction === 'rtl' ? 'تواصل معنا للاستفسارات والحجوزات' : 'Contact us for inquiries and bookings'
    },
    { 
      url: '/privacy', 
      priority: '0.8', 
      changefreq: 'monthly',
      title: direction === 'rtl' ? 'سياسة الخصوصية' : 'Privacy Policy',
      description: direction === 'rtl' ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy policy and data protection'
    },
    { 
      url: '/terms', 
      priority: '0.8', 
      changefreq: 'monthly',
      title: direction === 'rtl' ? 'شروط الخدمة' : 'Terms of Service',
      description: direction === 'rtl' ? 'شروط وأحكام استخدام الخدمات' : 'Terms and conditions for using our services'
    },
    { 
      url: '/work-with-us', 
      priority: '0.7', 
      changefreq: 'monthly',
      title: direction === 'rtl' ? 'اعمل معنا' : 'Work with Us',
      description: direction === 'rtl' ? 'فرص عمل في مجال التعليم والاستشارات' : 'Job opportunities in education and consulting'
    },
    { 
      url: '/success-stories', 
      priority: '0.7', 
      changefreq: 'monthly',
      title: direction === 'rtl' ? 'قصص النجاح' : 'Success Stories',
      description: direction === 'rtl' ? 'تجارب ناجحة من طلابنا' : 'Successful experiences from our students'
    },
    { 
      url: '/about', 
      priority: '0.6', 
      changefreq: 'monthly',
      title: direction === 'rtl' ? 'معلومات عنا' : 'About Us',
      description: direction === 'rtl' ? 'معلومات عن Travel.Ltd' : 'Information about Travel.Ltd'
    },
    { 
      url: '/sitemap', 
      priority: '0.5', 
      changefreq: 'monthly',
      title: direction === 'rtl' ? 'خريطة الموقع' : 'Sitemap',
      description: direction === 'rtl' ? 'خريطة الموقع وجميع الصفحات' : 'Site map and all pages'
    }
  ];

  const generateSitemap = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://syriantravel.in${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen">
      <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <h1 className="text-4xl font-bold mb-8 text-[#231F20]">
          {direction === 'rtl' ? 'خريطة الموقع' : 'Sitemap'}
        </h1>
        
        <div className="mb-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#0018A8]">
            {direction === 'rtl' ? 'معلومات مهمة للمطورين:' : 'Important Information for Developers:'}
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>{direction === 'rtl' ? 'رابط الملف الثابت:' : 'Static File URL:'}</strong>{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">https://syriantravel.in/sitemap.xml</code>
            </p>
            <p>
              <strong>{direction === 'rtl' ? 'موقع الملف:' : 'File Location:'}</strong>{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">public/sitemap.xml</code>
            </p>
            <p className="text-sm text-gray-600">
              {direction === 'rtl' 
                ? 'يمكن رفع هذا الملف مباشرة إلى Google Search Console و Google AdSense'
                : 'This file can be directly uploaded to Google Search Console and Google AdSense'
              }
            </p>
          </div>
        </div>

        <div className="mb-8">
          <button 
            onClick={generateSitemap}
            className="bg-[#EE3524] text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg"
          >
            {direction === 'rtl' ? 'تحميل خريطة الموقع XML' : 'Download XML Sitemap'}
          </button>
          <p className="text-sm text-gray-600 mt-2">
            {direction === 'rtl' 
              ? 'انقر لتحميل ملف XML يمكن رفعه إلى محركات البحث'
              : 'Click to download XML file that can be uploaded to search engines'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="border rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-xl mb-3 text-[#231F20]">{route.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{route.description}</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-500">
                  <strong>{direction === 'rtl' ? 'الرابط:' : 'URL:'}</strong> 
                  <code className="ml-2 bg-gray-100 px-2 py-1 rounded">{route.url}</code>
                </p>
                <p className="text-gray-500">
                  <strong>{direction === 'rtl' ? 'الأولوية:' : 'Priority:'}</strong> {route.priority}
                </p>
                <p className="text-gray-500">
                  <strong>{direction === 'rtl' ? 'التحديث:' : 'Update Frequency:'}</strong> {route.changefreq}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            {direction === 'rtl' ? 'كيفية إرسال خريطة الموقع إلى Google:' : 'How to Submit Sitemap to Google:'}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              {direction === 'rtl' 
                ? 'اذهب إلى Google Search Console'
                : 'Go to Google Search Console'
              }
            </li>
            <li>
              {direction === 'rtl' 
                ? 'انقر على "Sitemaps" في القائمة الجانبية'
                : 'Click on "Sitemaps" in the sidebar'
              }
            </li>
            <li>
              {direction === 'rtl' 
                ? 'أدخل "sitemap.xml" في حقل الإدخال'
                : 'Enter "sitemap.xml" in the input field'
              }
            </li>
            <li>
              {direction === 'rtl' 
                ? 'انقر على "Submit" أو "إرسال"'
                : 'Click "Submit"'
              }
            </li>
            <li>
              {direction === 'rtl' 
                ? 'تحقق من حالة الإرسال في نفس الصفحة'
                : 'Check the submission status on the same page'
              }
            </li>
          </ol>
          <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
            <p className="text-yellow-800 font-semibold">
              {direction === 'rtl' 
                ? '⚠️ تأكد من أن موقعك منشور على syriantravel.in قبل إرسال خريطة الموقع'
                : '⚠️ Make sure your site is live on syriantravel.in before submitting the sitemap'
              }
            </p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#0018A8]">
            {direction === 'rtl' ? 'متطلبات AdSense المكتملة:' : 'AdSense Requirements Completed:'}
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              {direction === 'rtl' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              {direction === 'rtl' ? 'شروط الخدمة' : 'Terms of Service'}
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              {direction === 'rtl' ? 'ملف ads.txt' : 'ads.txt file'}
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              {direction === 'rtl' ? 'كود AdSense' : 'AdSense code'}
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              {direction === 'rtl' ? 'خريطة الموقع' : 'Sitemap'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
