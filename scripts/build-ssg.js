
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 Starting SSG build process...');

try {
  // Clean dist directory
  console.log('🧹 Cleaning dist directory...');
  if (fs.existsSync(path.join(rootDir, 'dist'))) {
    fs.rmSync(path.join(rootDir, 'dist'), { recursive: true, force: true });
  }

  // Build client
  console.log('📦 Building client...');
  execSync('npm run build:client', { 
    stdio: 'inherit', 
    cwd: rootDir,
    encoding: 'utf8'
  });

  // Build server
  console.log('🖥️ Building server...');
  execSync('npm run build:server', { 
    stdio: 'inherit', 
    cwd: rootDir,
    encoding: 'utf8'
  });

  // Prerender pages
  console.log('🏗️ Prerendering pages...');
  execSync('npm run generate', { 
    stdio: 'inherit', 
    cwd: rootDir,
    encoding: 'utf8'
  });

  console.log('✅ SSG build completed successfully!');
} catch (error) {
  console.error('❌ SSG build failed:', error.message);
  process.exit(1);
}
