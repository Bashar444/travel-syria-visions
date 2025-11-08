
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const { direction } = useLanguage();

  return (
    <nav className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600 mb-6" dir={direction}>
      <a href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
        <Home className="w-4 h-4" />
      </a>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <a 
              href={item.href}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="font-medium text-gray-900">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
