
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  type: 'contact' | 'feedback';
  fullName?: string;
  phoneNumber?: string;
  email: string;
  preferredUniversity?: string;
  desiredMajor?: string;
  additionalMessage?: string;
  feedback?: string;
  serviceType?: string;
  rating?: number;
  name?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Email function called with method:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    let emailSubject: string;
    let emailContent: string;

    if (formData.type === 'contact') {
      emailSubject = `New Contact Form Submission from ${formData.fullName || 'Anonymous'}`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0018A8;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p><strong>Full Name:</strong> ${formData.fullName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone Number:</strong> ${formData.phoneNumber || 'Not provided'}</p>
          </div>
          
          ${formData.preferredUniversity ? `
          <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Educational Information:</h3>
            <p><strong>Preferred University:</strong> ${formData.preferredUniversity}</p>
            <p><strong>Desired Major:</strong> ${formData.desiredMajor || 'Not specified'}</p>
          </div>
          ` : ''}
          
          ${formData.additionalMessage ? `
          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Additional Message:</h3>
            <p style="white-space: pre-wrap;">${formData.additionalMessage}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This email was sent from the Syria Travel Visions contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;
    } else {
      emailSubject = `New Feedback Submission${formData.name ? ` from ${formData.name}` : ''}`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0018A8;">New Feedback Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Feedback Information:</h3>
            <p><strong>Name:</strong> ${formData.name || 'Anonymous'}</p>
            <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
            ${formData.serviceType ? `<p><strong>Service Type:</strong> ${formData.serviceType}</p>` : ''}
            ${formData.rating ? `<p><strong>Rating:</strong> ${formData.rating}/5 stars</p>` : ''}
          </div>
          
          <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Feedback Message:</h3>
            <p style="white-space: pre-wrap;">${formData.feedback || 'No feedback message provided'}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This email was sent from the Syria Travel Visions feedback form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Syria Travel Visions <onboarding@resend.dev>",
      to: ["privatelimitedtravel@gmail.com"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully",
        emailId: emailResponse.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        details: "Failed to send email. Please try again later." 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
