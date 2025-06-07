
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

;(async () => {
  try {
    console.log('🏗️ Starting prerendering process...');
    
    // Check if template exists
    const templatePath = toAbsolute('dist/index.html');
    if (!fs.existsSync(templatePath)) {
      throw new Error('Template file not found: dist/index.html. Run client build first.');
    }
    
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Check if server bundle exists
    const serverPath = toAbsolute('dist/server/entry-server.js');
    if (!fs.existsSync(serverPath)) {
      throw new Error('Server bundle not found: dist/server/entry-server.js. Run server build first.');
    }
    
    const { render } = await import('./dist/server/entry-server.js');
    
    let successCount = 0;
    let failureCount = 0;
    
    for (const route of staticRoutes) {
      try {
        console.log(`🔄 Prerendering ${route}...`);
        
        const appHtml = render(route);
        
        // Validate that we got meaningful HTML
        if (!appHtml || appHtml.trim() === '') {
          throw new Error('Render function returned empty content');
        }
        
        // Replace the app-html placeholder
        const html = template.replace(`<!--app-html-->`, appHtml);
        
        // Validate final HTML
        if (!html.includes('<html') || !html.includes('</html>')) {
          throw new Error('Generated HTML appears to be malformed');
        }
        
        const filePath = `dist${route === '/' ? '/index' : route}.html`;
        const dir = path.dirname(toAbsolute(filePath));
        
        // Ensure directory exists
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(toAbsolute(filePath), html);
        console.log(`✅ Successfully prerendered: ${filePath}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to prerender ${route}:`, error.message);
        failureCount++;
        
        // Create a basic fallback page
        try {
          const fallbackHtml = template.replace(`<!--app-html-->`, `
            <div class="min-h-screen bg-gray-50 flex items-center justify-center">
              <div class="text-center p-6">
                <h1 class="text-2xl font-bold mb-4">Travel.Ltd - University Admissions</h1>
                <p class="text-gray-600">Professional educational services for Syrian students</p>
                <p class="mt-4 text-sm">Contact: +963985453247</p>
              </div>
            </div>
          `);
          
          const filePath = `dist${route === '/' ? '/index' : route}.html`;
          const dir = path.dirname(toAbsolute(filePath));
          
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          
          fs.writeFileSync(toAbsolute(filePath), fallbackHtml);
          console.log(`⚠️ Created fallback page for: ${route}`);
        } catch (fallbackError) {
          console.error(`❌ Failed to create fallback for ${route}:`, fallbackError.message);
        }
      }
    }
    
    console.log(`\n📊 Prerendering Summary:`);
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${failureCount}`);
    console.log(`📁 Total routes: ${staticRoutes.length}`);
    
    if (successCount > 0) {
      console.log('\n🎉 Prerendering completed with at least some success!');
      process.exit(0);
    } else {
      console.log('\n💥 All prerendering attempts failed!');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Prerendering process failed:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
})()
