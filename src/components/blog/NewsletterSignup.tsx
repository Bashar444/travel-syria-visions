
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterSignup = () => {
  const { direction } = useLanguage();

  return (
    <div className="mt-20 bg-gradient-to-r from-[#231F20] to-[#0018A8] text-white rounded-2xl p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          {direction === 'rtl' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
        </h2>
        <p className="text-xl mb-8 opacity-90 animate-fade-in delay-200">
          {direction === 'rtl' 
            ? 'احصل على أحدث النصائح والمنح الدراسية مباشرة في بريدك الإلكتروني'
            : 'Get the latest tips and scholarships directly in your email'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder={direction === 'rtl' ? 'بريدك الإلكتروني' : 'Your email'}
            className="px-4 py-3 rounded-lg text-[#231F20] flex-1 border-2 border-white/20 focus:border-white transition-all duration-300"
          />
          <Button className="bg-[#EE3524] hover:bg-red-600 px-8 transition-all duration-300 transform hover:scale-105">
            {direction === 'rtl' ? 'اشتراك' : 'Subscribe'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
