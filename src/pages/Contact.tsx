
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Textarea } from '@/components/ui/textarea';
import { useSecureForm } from '@/hooks/useSecureForm';
import { createHoneypot } from '@/utils/security';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { t, direction } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const universities = [
    'Sant\'Anna School of Advanced Studies (Pisa)',
    'University of Milano-Bicocca',
    'LIUC Business University',
    'SRM Institute of Science and Technology (Chennai)',
    'SRM University (Andhra Pradesh)',
    'Babeș-Bolyai University (Cluj-Napoca)'
  ];

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
      fullName: { type: 'name', required: true },
      phoneNumber: { type: 'phone', required: true },
      email: { type: 'email', required: true },
      preferredUniversity: { type: 'text', required: false },
      desiredMajor: { type: 'text', required: false },
      additionalMessage: { type: 'text', required: false }
    },
    onSubmit: async (data) => {
      console.log('Submitting contact form data:', data);
      
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'contact',
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          preferredUniversity: data.preferredUniversity,
          desiredMajor: data.desiredMajor,
          additionalMessage: data.additionalMessage
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email. Please try again.');
      }

      console.log('Email sent successfully:', response);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  });

  const whatsappNumber = "+963985453247";

  return (
    <div className="min-h-screen py-20" dir={direction}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#231F20] text-center mb-12">
          {t('contact.title')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#231F20]">
                {t('contact.free-consultation')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6">
                  {t('contact.success-message')}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for bot detection */}
                <input
                  {...honeypotProps}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.full-name')} *
                  </label>
                  <Input 
                    {...getFieldProps('fullName')}
                    className="w-full" 
                    dir={direction}
                    placeholder={t('contact.full-name-placeholder')}
                  />
                  {formData.fullName?.error && (
                    <p className="text-sm text-red-600">{formData.fullName.error}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.phone')} *
                  </label>
                  <Input 
                    {...getFieldProps('phoneNumber')}
                    type="tel"
                    className="w-full" 
                    placeholder="+963xxxxxxxxx"
                  />
                  {formData.phoneNumber?.error && (
                    <p className="text-sm text-red-600">{formData.phoneNumber.error}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.email')} *
                  </label>
                  <Input 
                    {...getFieldProps('email')}
                    type="email"
                    className="w-full" 
                    placeholder="example@email.com"
                  />
                  {formData.email?.error && (
                    <p className="text-sm text-red-600">{formData.email.error}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.preferred-university')}
                  </label>
                  <select 
                    {...getSelectFieldProps('preferredUniversity')}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EE3524] focus:border-transparent"
                    dir={direction}
                  >
                    <option value="">{t('contact.select-university')}</option>
                    {universities.map((university) => (
                      <option key={university} value={university}>
                        {university}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.desired-major')}
                  </label>
                  <Input 
                    {...getFieldProps('desiredMajor')}
                    className="w-full" 
                    dir={direction}
                    placeholder={t('contact.major-placeholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.additional-message')}
                  </label>
                  <Textarea
                    {...getFieldProps('additionalMessage')}
                    rows={4}
                    className="w-full"
                    dir={direction}
                    placeholder={t('contact.message-placeholder')}
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#EE3524] hover:bg-red-600 text-white font-semibold py-3 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t('contact.sending')}
                    </div>
                  ) : (
                    t('contact.submit')
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info - WhatsApp Only */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#231F20] mb-4">
                  {t('contact.direct-contact')}
                </h3>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all duration-300"
                  >
                    {t('contact.whatsapp')}
                  </Button>
                  
                  <div className="text-center pt-4">
                    <p className="text-gray-600">
                      <strong>{t('contact.whatsapp-number')}:</strong> {whatsappNumber}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>{t('contact.email-label')}:</strong> privatelimitedtravel@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#231F20] mb-4">
                  {t('contact.working-hours')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.hours')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
