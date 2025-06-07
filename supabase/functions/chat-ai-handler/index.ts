
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

    // Enhanced system prompt for educational services
    const systemPrompt = language === 'ar' ? `
أنت مساعد ذكي متخصص في الخدمات التعليمية لشركة Travel.Ltd. تساعد الطلاب السوريين في:
- القبولات الجامعية (إيطاليا، الهند، رومانيا، تركيا)
- معالجة التأشيرات
- خدمات الحج والعمرة
- المنح السعودية
- الاستشارات التعليمية

كن مفيداً ومهنياً ومتجاوباً. إذا لم تعرف شيئاً، اطلب من المستخدم التواصل مع فريق الخبراء.
رقم الواتساب: +963985453247
` : `
You are an AI assistant specialized in educational services for Travel.Ltd. You help Syrian students with:
- University admissions (Italy, India, Romania, Turkey)
- Visa processing
- Hajj & Umrah services  
- Saudi scholarships
- Educational consulting

Be helpful, professional, and responsive. If you don't know something, ask the user to contact our expert team.
WhatsApp: +963985453247
`;

    if (!OPENAI_API_KEY) {
      console.error('OpenAI API key not found');
      return new Response(JSON.stringify({ 
        response: language === 'ar' 
          ? 'عذراً، الخدمة غير متوفرة حالياً. يرجى التواصل معنا على +963985453247'
          : 'Sorry, service is temporarily unavailable. Please contact us at +963985453247'
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
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || (
      language === 'ar' 
        ? 'عذراً، لم أتمكن من معالجة طلبك. يرجى المحاولة مرة أخرى.'
        : 'Sorry, I couldn\'t process your request. Please try again.'
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
            type: 'chat_message',
            userMessage: message,
            aiResponse,
            language,
            timestamp: new Date().toISOString(),
            context,
            userType
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
        ? 'عذراً، حدث خطأ تقني. يرجى المحاولة لاحقاً أو التواصل معنا مباشرة على +963985453247'
        : 'Sorry, a technical error occurred. Please try again later or contact us directly at +963985453247'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
