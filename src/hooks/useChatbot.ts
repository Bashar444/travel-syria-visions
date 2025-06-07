
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useChatbot = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getEnhancedResponse = (message: string, language: string): any => {
    const lowerMessage = message.toLowerCase();
    const isArabic = language === 'ar';

    // University admissions queries
    if (lowerMessage.includes('university') || lowerMessage.includes('admission') || 
        lowerMessage.includes('جامع') || lowerMessage.includes('قبول')) {
      return {
        text: isArabic 
          ? 'نحن نساعد الطلاب السوريين في الحصول على قبولات جامعية في إيطاليا، الهند، رومانيا، وتركيا. يمكنك استكشاف الجامعات المتاحة أو التواصل معنا للحصول على استشارة شخصية.'
          : 'We help Syrian students get university admissions in Italy, India, Romania, and Turkey. You can explore available universities or contact us for personalized consultation.',
        interactive: {
          links: [
            { text: isArabic ? 'استكشف الجامعات' : 'Explore Universities', url: '/universities', type: 'internal' },
            { text: isArabic ? 'واتساب' : 'WhatsApp', url: '', type: 'whatsapp' },
            { text: isArabic ? 'نموذج التواصل' : 'Contact Form', url: '/contact', type: 'internal' }
          ]
        }
      };
    }

    // Visa processing queries
    if (lowerMessage.includes('visa') || lowerMessage.includes('تأشير')) {
      return {
        text: isArabic
          ? 'نقدم خدمات معالجة التأشيرات للدراسة في الخارج. فريقنا المتخصص يساعدك في إكمال جميع الإجراءات المطلوبة بنجاح.'
          : 'We provide visa processing services for studying abroad. Our specialized team helps you complete all required procedures successfully.',
        interactive: {
          links: [
            { text: isArabic ? 'خدمات التأشيرات' : 'Visa Services', url: '/services', type: 'internal' },
            { text: isArabic ? 'اتصل بنا' : 'Call Us', url: '+963985453247', type: 'phone' },
            { text: isArabic ? 'واتساب' : 'WhatsApp', url: '', type: 'whatsapp' }
          ]
        }
      };
    }

    // Saudi scholarships queries
    if (lowerMessage.includes('saudi') || lowerMessage.includes('scholarship') || 
        lowerMessage.includes('سعود') || lowerMessage.includes('منح')) {
      return {
        text: isArabic
          ? 'نساعدك في الحصول على المنح السعودية للدراسة في المملكة العربية السعودية. نوفر كامل الدعم من التقديم حتى القبول.'
          : 'We help you get Saudi scholarships to study in Saudi Arabia. We provide complete support from application to acceptance.',
        interactive: {
          links: [
            { text: isArabic ? 'المنح السعودية' : 'Saudi Scholarships', url: '/services', type: 'internal' },
            { text: isArabic ? 'قصص النجاح' : 'Success Stories', url: '/success-stories', type: 'internal' },
            { text: isArabic ? 'تواصل معنا' : 'Contact Us', url: '/contact', type: 'internal' }
          ]
        }
      };
    }

    // Hajj and Umrah queries
    if (lowerMessage.includes('hajj') || lowerMessage.includes('umrah') || 
        lowerMessage.includes('حج') || lowerMessage.includes('عمرة')) {
      return {
        text: isArabic
          ? 'نقدم خدمات الحج والعمرة المتكاملة مع أفضل البرامج والأسعار. رحلة روحانية مميزة مع خدمة عالية الجودة.'
          : 'We offer comprehensive Hajj and Umrah services with the best programs and prices. A special spiritual journey with high-quality service.',
        interactive: {
          links: [
            { text: isArabic ? 'خدمات الحج والعمرة' : 'Hajj & Umrah Services', url: '/services', type: 'internal' },
            { text: isArabic ? 'واتساب للاستفسار' : 'WhatsApp Inquiry', url: '', type: 'whatsapp' },
            { text: isArabic ? 'اتصل الآن' : 'Call Now', url: '+963985453247', type: 'phone' }
          ]
        }
      };
    }

    // Contact queries
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || 
        lowerMessage.includes('تواصل') || lowerMessage.includes('هاتف')) {
      return {
        text: isArabic
          ? 'يمكنك التواصل معنا بعدة طرق. فريقنا متاح للإجابة على جميع استفساراتك وتقديم الدعم المطلوب.'
          : 'You can contact us in several ways. Our team is available to answer all your inquiries and provide the support you need.',
        interactive: {
          links: [
            { text: isArabic ? 'واتساب: +963985453247' : 'WhatsApp: +963985453247', url: '', type: 'whatsapp' },
            { text: isArabic ? 'هاتف: +963985453247' : 'Phone: +963985453247', url: '+963985453247', type: 'phone' },
            { text: isArabic ? 'نموذج التواصل' : 'Contact Form', url: '/contact', type: 'internal' },
            { text: isArabic ? 'إيميل' : 'Email', url: 'info@travel.ltd', type: 'email' }
          ]
        }
      };
    }

    // Services overview queries
    if (lowerMessage.includes('service') || lowerMessage.includes('help') || 
        lowerMessage.includes('خدم') || lowerMessage.includes('مساعد')) {
      return {
        text: isArabic
          ? 'نحن شركة Travel.Ltd متخصصون في الخدمات التعليمية والسياحية. نقدم القبولات الجامعية، معالجة التأشيرات، المنح السعودية، وخدمات الحج والعمرة.'
          : 'We are Travel.Ltd, specialists in educational and tourism services. We offer university admissions, visa processing, Saudi scholarships, and Hajj & Umrah services.',
        interactive: {
          links: [
            { text: isArabic ? 'جميع الخدمات' : 'All Services', url: '/services', type: 'internal' },
            { text: isArabic ? 'عن الشركة' : 'About Us', url: '/about', type: 'internal' },
            { text: isArabic ? 'قصص النجاح' : 'Success Stories', url: '/success-stories', type: 'internal' }
          ]
        }
      };
    }

    // Default enhanced response
    return {
      text: isArabic
        ? 'مرحباً! أنا هنا لمساعدتك في جميع الخدمات التعليمية والسياحية. يمكنني توجيهك لأفضل الخيارات المتاحة أو ربطك بفريق الخبراء.'
        : 'Hello! I\'m here to help you with all educational and tourism services. I can guide you to the best available options or connect you with our expert team.',
      interactive: {
        links: [
          { text: isArabic ? 'الخدمات' : 'Services', url: '/services', type: 'internal' },
          { text: isArabic ? 'الجامعات' : 'Universities', url: '/universities', type: 'internal' },
          { text: isArabic ? 'تواصل معنا' : 'Contact Us', url: '/contact', type: 'internal' },
          { text: isArabic ? 'واتساب' : 'WhatsApp', url: '', type: 'whatsapp' }
        ]
      }
    };
  };

  const sendMessage = async (message: string, language: string): Promise<any> => {
    setIsLoading(true);
    
    try {
      console.log('Sending message to AI:', { message, language });
      
      // Call Supabase Edge Function for AI processing
      const { data, error } = await supabase.functions.invoke('chat-ai-handler', {
        body: {
          message,
          language,
          context: 'educational_services',
          userType: 'visitor'
        }
      });

      if (error) {
        console.error('AI chat error:', error);
        // Return enhanced fallback response instead of generic error
        return getEnhancedResponse(message, language);
      }

      console.log('AI response received:', data);
      
      // If AI response is generic or empty, use enhanced response
      if (!data.response || data.response.includes('service is temporarily unavailable') || 
          data.response.includes('الخدمة غير متوفرة')) {
        return getEnhancedResponse(message, language);
      }
      
      return { text: data.response };
        
    } catch (error) {
      console.error('Chat error:', error);
      // Return enhanced fallback response
      return getEnhancedResponse(message, language);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
};
