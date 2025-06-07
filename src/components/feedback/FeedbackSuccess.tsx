
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const FeedbackSuccess = () => {
  const { language } = useLanguage();

  return (
    <Card className="border-green-200 bg-green-50">
      <CardContent className="p-6 text-center">
        <div className="text-green-600 mb-2">
          <Send className="w-8 h-8 mx-auto" />
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          {language === 'ar' ? 'شكراً لك!' : 'Thank You!'}
        </h3>
        <p className="text-green-700 text-sm">
          {language === 'ar' 
            ? 'تم إرسال تقييمك بنجاح. سنتواصل معك قريباً.' 
            : 'Your feedback has been sent successfully. We\'ll get back to you soon.'
          }
        </p>
      </CardContent>
    </Card>
  );
};

export default FeedbackSuccess;
