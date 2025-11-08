
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, language, context, userType } = await req.json();
    console.log('Received chat request:', { message, language, context, userType });

    // Enhanced system prompt for Travel.Ltd services
    const systemPrompt = language === 'ar' ? `
أنت مساعد ذكي متخصص في شركة Travel.Ltd للخدمات التعليمية والسياحية. معلومات مهمة:

الخدمات الرئيسية:
- القبولات الجامعية في إيطاليا، الهند، رومانيا، تركيا
- معالجة التأشيرات للدراسة في الخارج
- المنح السعودية للدراسة في السعودية
- خدمات الحج والعمرة المتكاملة

معلومات التواصل:
- واتساب: +963985453247
- هاتف: +963985453247
- إيميل: info@travel.ltd
- موقع: www.travel.ltd

أقسام الموقع:
- /services: جميع الخدمات
- /universities: الجامعات المتاحة
- /success-stories: قصص نجاح الطلاب
- /contact: نموذج التواصل
- /about: عن الشركة

كن مفيداً ومهنياً. وجه العملاء إلى الأقسام المناسبة أو معلومات التواصل. لا تقل أبداً أن الخدمة غير متوفرة، بل وجههم للتواصل المباشر للحصول على مساعدة شخصية.
` : `
You are an AI assistant specialized in Travel.Ltd educational and tourism services. Important information:

Main Services:
- University admissions in Italy, India, Romania, Turkey
- Visa processing for studying abroad
- Saudi scholarships for studying in Saudi Arabia
- Comprehensive Hajj & Umrah services

Contact Information:
- WhatsApp: +963985453247
- Phone: +963985453247
- Email: info@travel.ltd
- Website: www.travel.ltd

Website Sections:
- /services: All services
- /universities: Available universities
- /success-stories: Student success stories
- /contact: Contact form
- /about: About us

Be helpful and professional. Direct clients to appropriate sections or contact information. Never say services are unavailable, instead direct them to contact us directly for personalized assistance.
`;

    if (!OPENAI_API_KEY) {
      console.error('OpenAI API key not found');
      return new Response(JSON.stringify({ 
        response: language === 'ar' 
          ? 'للحصول على مساعدة شخصية، يرجى التواصل معنا على +963985453247 أو زيارة قسم التواصل على موقعنا.'
          : 'For personalized assistance, please contact us at +963985453247 or visit our contact section.'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 400,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || (
      language === 'ar' 
        ? 'أعتذر، للحصول على إجابة دقيقة يرجى التواصل معنا مباشرة على +963985453247 أو زيارة موقعنا.'
        : 'I apologize, for an accurate answer please contact us directly at +963985453247 or visit our website.'
    );

    console.log('AI response generated successfully');

    // Log conversation for n8n webhook (optional)
    try {
      const webhookUrl = Deno.env.get('N8N_WEBHOOK_URL');
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'chat_interaction',
            userMessage: message,
            aiResponse,
            language,
            timestamp: new Date().toISOString(),
            context,
            userType,
            intent: 'educational_services'
          })
        });
      }
    } catch (webhookError) {
      console.log('Webhook notification failed:', webhookError);
      // Don't fail the main request if webhook fails
    }

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Chat AI handler error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      response: language === 'ar' 
        ? 'للحصول على المساعدة المطلوبة، يرجى التواصل معنا مباشرة على واتساب +963985453247 أو الاتصال بنا أو ملء نموذج التواصل على موقعنا.'
        : 'For the assistance you need, please contact us directly on WhatsApp +963985453247, call us, or fill out the contact form on our website.'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
