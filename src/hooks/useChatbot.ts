
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useChatbot = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string, language: string): Promise<string> => {
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
        throw new Error('Failed to get AI response');
      }

      console.log('AI response received:', data);
      return data.response || (language === 'ar' 
        ? 'عذراً، لم أتمكن من فهم سؤالك. يرجى إعادة صياغته.'
        : 'Sorry, I couldn\'t understand your question. Please rephrase it.');
        
    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback responses for common queries
      const fallbackResponses = {
        ar: {
          services: 'نحن نقدم خدمات القبولات الجامعية، معالجة التأشيرات، خدمات الحج والعمرة، والمنح السعودية. كيف يمكنني مساعدتك؟',
          contact: 'يمكنك التواصل معنا عبر الواتساب على +963985453247 أو زيارة صفحة اتصل بنا.',
          default: 'أعتذر، أواجه مشكلة تقنية. يرجى المحاولة لاحقاً أو التواصل معنا مباشرة.'
        },
        en: {
          services: 'We offer university admissions, visa processing, Hajj & Umrah services, and Saudi scholarships. How can I help you?',
          contact: 'You can contact us via WhatsApp at +963985453247 or visit our contact page.',
          default: 'I apologize, I\'m experiencing technical difficulties. Please try again later or contact us directly.'
        }
      };

      const responses = fallbackResponses[language as keyof typeof fallbackResponses] || fallbackResponses.en;
      
      if (message.toLowerCase().includes('service') || message.includes('خدم')) {
        return responses.services;
      } else if (message.toLowerCase().includes('contact') || message.includes('تواصل')) {
        return responses.contact;
      }
      
      return responses.default;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
};
