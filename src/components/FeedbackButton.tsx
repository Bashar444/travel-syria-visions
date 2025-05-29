
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';

const FeedbackButton = () => {
  const { t, direction, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
      serviceType: ''
    }
  });

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // Simulate feedback submission to privatelimitedtravel@gmail.com
      console.log('Feedback submission to privatelimitedtravel@gmail.com:', {
        ...data,
        rating,
        timestamp: new Date().toISOString()
      });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setShowSuccess(true);
      form.reset();
      setRating(0);
      
      setTimeout(() => {
        setShowSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Feedback submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110"
          size="lg"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          {t('feedback.button')}
        </Button>
      </DialogTrigger>
      
      <DialogContent className={`max-w-md ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-blue-600">
            {t('feedback.title')}
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            {t('feedback.subtitle')}
          </p>
        </DialogHeader>
        
        {showSuccess ? (
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
        ) : (
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {/* Star Rating */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'تقييمك للخدمة' : 'Service Rating'}
              </label>
              <div className="flex space-x-1 rtl:space-x-reverse">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`p-1 transition-colors ${
                      star <= rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'الاسم (اختياري)' : 'Name (Optional)'}
              </label>
              <Input
                {...form.register('name')}
                placeholder={language === 'ar' ? 'اسمك' : 'Your name'}
                dir={direction}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}
              </label>
              <Input
                {...form.register('email')}
                type="email"
                placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                dir={direction}
              />
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'نوع الخدمة' : 'Service Type'}
              </label>
              <select
                {...form.register('serviceType')}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                dir={direction}
              >
                <option value="">
                  {language === 'ar' ? 'اختر نوع الخدمة' : 'Select service type'}
                </option>
                <option value="university-admission">
                  {language === 'ar' ? 'قبولات جامعية' : 'University Admissions'}
                </option>
                <option value="visa-processing">
                  {language === 'ar' ? 'معالجة التأشيرة' : 'Visa Processing'}
                </option>
                <option value="hajj-services">
                  {language === 'ar' ? 'خدمات الحج والعمرة' : 'Hajj & Umrah Services'}
                </option>
                <option value="saudi-scholarships">
                  {language === 'ar' ? 'المنح السعودية' : 'Saudi Scholarships'}
                </option>
                <option value="general">
                  {language === 'ar' ? 'عام' : 'General'}
                </option>
              </select>
            </div>

            {/* Feedback */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'ar' ? 'تعليقك أو استفسارك' : 'Your Feedback or Question'}
              </label>
              <Textarea
                {...form.register('feedback', { required: true })}
                placeholder={language === 'ar' 
                  ? 'شاركنا تجربتك أو اطرح استفسارك...' 
                  : 'Share your experience or ask a question...'
                }
                rows={4}
                dir={direction}
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !form.watch('feedback')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'إرسال التقييم' : 'Send Feedback'}
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackButton;
