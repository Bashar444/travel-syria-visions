
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UrlHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    
    // Handle common URL mistakes
    if (path.endsWith('.') && !path.endsWith('.xml')) {
      // Remove trailing period from URLs (except .xml files)
      const cleanPath = path.slice(0, -1);
      console.log('Cleaning URL: removing trailing period', { original: path, clean: cleanPath });
      navigate(cleanPath, { replace: true });
      return;
    }

    // Handle multiple slashes
    if (path.includes('//')) {
      const cleanPath = path.replace(/\/+/g, '/');
      console.log('Cleaning URL: removing extra slashes', { original: path, clean: cleanPath });
      navigate(cleanPath, { replace: true });
      return;
    }

    // Handle sitemap variations
    if (path === '/sitemap.' || path === '/sitemap.htm' || path === '/sitemap.html') {
      console.log('Redirecting sitemap variation to /sitemap', { original: path });
      navigate('/sitemap', { replace: true });
      return;
    }
  }, [location.pathname, navigate]);

  return null; // This component doesn't render anything
};

export default UrlHandler;
