
const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const baseUrl = 'https://syriantravel.in';
  
  const routes = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/universities', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.8', changefreq: 'monthly' },
    { url: '/terms', priority: '0.8', changefreq: 'monthly' },
    { url: '/work-with-us', priority: '0.7', changefreq: 'monthly' },
    { url: '/success-stories', priority: '0.7', changefreq: 'monthly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/sitemap', priority: '0.5', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📅 Last modified: ${currentDate}`);
};

// Run the function
generateSitemap();

module.exports = generateSitemap;
