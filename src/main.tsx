
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

function createApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// Enhanced hydration with better error handling
if (import.meta.env.PROD) {
  const hasServerContent = root.innerHTML.trim() && !root.innerHTML.includes('noscript');
  
  if (hasServerContent) {
    try {
      console.log('Attempting hydration...');
      hydrateRoot(root, createApp());
      console.log('Hydration successful');
    } catch (error) {
      console.warn('Hydration failed, falling back to client-side rendering:', error);
      // Clear the content and render fresh
      root.innerHTML = '';
      createRoot(root).render(createApp());
    }
  } else {
    console.log('No server content found, using client-side rendering');
    createRoot(root).render(createApp());
  }
} else {
  // Development mode - always use client-side rendering
  createRoot(root).render(createApp());
}
