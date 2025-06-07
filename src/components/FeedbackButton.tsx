
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSecureForm } from '@/hooks/useSecureForm';
import { createHoneypot } from '@/utils/security';
import { supabase } from '@/integrations/supabase/client';

const FeedbackButton = () => {
  const { t, direction, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const honeypotProps = createHoneypot();

  const {
    formData,
    honeypot,
    setHoneypot,
    isSubmitting,
    getFieldProps,
    getSelectFieldProps,
    handleSubmit
  } = useSecureForm({
    fields: {
      name: { type: 'name', required: false },
      email: { type: 'email', required: false },
      feedback: { type: 'text', required: true },
      serviceType: { type: 'text', required: false }
    },
    onSubmit: async (data) => {
      console.log('Submitting feedback data:', data);
      
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'feedback',
          name: data.name,
          email: data.email,
          feedback: data.feedback,
          serviceType: data.serviceType,
          rating
        }
      });

      if (error) {
        console.error('Error sending feedback email:', error);
        throw new Error('Failed to send feedback. Please try again.');
      }

      console.log('Feedback email sent successfully:', response);
      setShowSuccess(true);
      setRating(0);
      
      setTimeout(() => {
        setShowSuccess(false);
        setIsOpen(false);
      }, 2000);
    }
  });

  const isSubmitDisabled = isSubmitting || !formData.feedback?.value?.trim();

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
      
      <DialogContent className={`max-w-md max-h-[90vh] overflow-hidden flex flex-col ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-xl font-bold text-blue-600">
            {t('feedback.title')}
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            {t('feedback.subtitle')}
          </p>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field */}
              <input
                {...honeypotProps}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

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
                  {...getFieldProps('name')}
                  placeholder={language === 'ar' ? 'اسمك' : 'Your name'}
                  dir={direction}
                />
                {formData.name?.error && (
                  <p className="text-sm text-red-600">{formData.name.error}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {language === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}
                </label>
                <Input
                  {...getFieldProps('email')}
                  type="email"
                  placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                  dir={direction}
                />
                {formData.email?.error && (
                  <p className="text-sm text-red-600">{formData.email.error}</p>
                )}
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {language === 'ar' ? 'نوع الخدمة' : 'Service Type'}
                </label>
                <select
                  {...getSelectFieldProps('serviceType')}
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

              {/* Feedback with character count */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">
                    {language === 'ar' ? 'تعليقك أو استفسارك *' : 'Your Feedback or Question *'}
                  </label>
                  <span className="text-xs text-gray-500">
                    {formData.feedback?.value?.length || 0}/500
                  </span>
                </div>
                <Textarea
                  {...getFieldProps('feedback')}
                  placeholder={language === 'ar' 
                    ? 'شاركنا تجربتك أو اطرح استفسارك...' 
                    : 'Share your experience or ask a question...'
                  }
                  rows={4}
                  dir={direction}
                  className="resize-none"
                />
                {formData.feedback?.error && (
                  <p className="text-sm text-red-600">{formData.feedback.error}</p>
                )}
                {!formData.feedback?.value?.trim() && (
                  <p className="text-xs text-gray-500">
                    {language === 'ar' 
                      ? 'الرجاء إدخال تعليقك لتفعيل زر الإرسال' 
                      : 'Please enter your feedback to enable the submit button'
                    }
                  </p>
                )}
              </div>

              {/* Submit Button - Always visible at bottom */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className={`w-full transition-all duration-300 ${
                    isSubmitDisabled 
                      ? 'bg-gray-400 hover:bg-gray-400 text-gray-600 opacity-70 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
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
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackButton;
