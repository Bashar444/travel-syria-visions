
import { useLanguage } from '@/contexts/LanguageContext';

interface TermsHeaderProps {
  title: string;
  lastUpdated: string;
}

const TermsHeader = ({ title, lastUpdated }: TermsHeaderProps) => {
  const { language } = useLanguage();

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2 rtl:space-x-reverse">
              <li>
                <a href="/" className="text-[#0018A8] hover:underline text-content">
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <span className="text-gray-500">{'>'}</span>
              <li className="text-gray-700 text-content">{title}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#0018A8] mb-4 text-content">{title}</h1>
        <p className="text-gray-600 text-lg text-content">{lastUpdated}</p>
      </header>
    </>
  );
};

export default TermsHeader;
