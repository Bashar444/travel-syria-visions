
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Static routes that should be prerendered
const staticRoutes = [
  '/',
  '/services',
  '/universities', 
  '/success-stories',
  '/about',
  '/contact',
  '/blog',
  '/work-with-us',
  '/privacy',
  '/terms',
  '/sitemap'
];

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

;(async () => {
  try {
    const { render } = await import('./dist/server/entry-server.js')
    
    for (const route of staticRoutes) {
      try {
        console.log(`Prerendering ${route}...`);
        const appHtml = render(route);
        const html = template.replace(`<!--app-html-->`, appHtml)

        const filePath = `dist${route === '/' ? '/index' : route}.html`
        const dir = path.dirname(toAbsolute(filePath));
        
        // Ensure directory exists
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(toAbsolute(filePath), html)
        console.log('✓ Pre-rendered:', filePath)
      } catch (error) {
        console.error(`✗ Failed to prerender ${route}:`, error.message);
        // Continue with other routes
      }
    }
    
    console.log('✓ Prerendering completed successfully');
  } catch (error) {
    console.error('✗ Prerendering failed:', error);
    process.exit(1);
  }
})()
