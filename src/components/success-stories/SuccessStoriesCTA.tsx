
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessStoriesCTA = () => {
  const { direction, t } = useLanguage();
  const whatsappNumber = "+963985453247";

  return (
    <div className="bg-gradient-to-r from-[#231F20] via-[#0018A8] to-[#00A3E0] text-white rounded-2xl p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in">
          {direction === 'rtl' ? 'ابدأ قصة نجاحك الخاصة' : 'Start Your Own Success Story'}
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in delay-200">
          {direction === 'rtl' 
            ? 'انضم إلى آلاف الطلاب الذين حققوا أحلامهم الأكاديمية معنا. دعنا نساعدك في بناء مستقبل مشرق في الجامعات العالمية.'
            : 'Join thousands of students who have achieved their academic dreams with us. Let us help you build a bright future at international universities.'
          }
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">
              {direction === 'rtl' ? 'إرشاد الخبراء' : 'Expert Guidance'}
            </h3>
            <p className="text-sm opacity-90">
              {direction === 'rtl' 
                ? 'إرشاد خطوة بخطوة من خلال عمليات التأشيرة المعقدة'
                : 'Step-by-step guidance through complex visa processes'
              }
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">
              {direction === 'rtl' ? 'اختيار الجامعة' : 'University Selection'}
            </h3>
            <p className="text-sm opacity-90">
              {direction === 'rtl' 
                ? 'مطابقة الطلاب مع البرامج التي تتماشى مع أهدافهم'
                : 'Matching students with programs that align with their goals'
              }
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">
              {direction === 'rtl' ? 'فرص المنح' : 'Scholarship Opportunities'}
            </h3>
            <p className="text-sm opacity-90">
              {direction === 'rtl' 
                ? 'تحديد والتقدم للمساعدات المالية'
                : 'Identifying and applying for financial aid'
              }
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            className="bg-[#EE3524] hover:bg-red-600 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/contact">
              {direction === 'rtl' ? (
                <>
                  ابدأ رحلتك الآن <ArrowRight className="w-5 h-5 mr-2" />
                </>
              ) : (
                <>
                  Start Your Journey Now <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Link>
          </Button>
          
          <Button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')} 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0018A8] px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            {direction === 'rtl' ? (
              <>
                <MessageCircle className="w-5 h-5 ml-2" /> واتساب مجاني
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5 mr-2" /> Free WhatsApp
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesCTA;
