
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

// Use hydration for SSR in production
if (import.meta.env.PROD && root.innerHTML.trim()) {
  try {
    hydrateRoot(root, createApp());
  } catch (error) {
    console.warn('Hydration failed, falling back to client-side rendering:', error);
    root.innerHTML = '';
    createRoot(root).render(createApp());
  }
} else {
  createRoot(root).render(createApp());
}
