
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSecureForm } from '@/hooks/useSecureForm';
import { createHoneypot } from '@/utils/security';
import { supabase } from '@/integrations/supabase/client';
import StarRating from './StarRating';

interface FeedbackFormProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  onSuccess: () => void;
}

const FeedbackForm = ({ rating, onRatingChange, onSuccess }: FeedbackFormProps) => {
  const { language, direction } = useLanguage();
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
      onSuccess();
    }
  });

  const isSubmitDisabled = isSubmitting || !formData.feedback?.value?.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field */}
      <input
        {...honeypotProps}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <StarRating rating={rating} onRatingChange={onRatingChange} />

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

      {/* Submit Button */}
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
  );
};

export default FeedbackForm;
