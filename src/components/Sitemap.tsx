
const Sitemap = () => {
  const routes = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/universities', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/success-stories', priority: '0.7', changefreq: 'monthly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' }
  ];

  const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://travel-ltd.com${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
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
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">خريطة الموقع</h1>
      
      <div className="mb-8">
        <button 
          onClick={generateSitemap}
          className="bg-[#EE3524] text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          تحميل خريطة الموقع XML
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {routes.map((route, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{route.url}</h3>
            <p className="text-sm text-gray-600">الأولوية: {route.priority}</p>
            <p className="text-sm text-gray-600">التحديث: {route.changefreq}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
