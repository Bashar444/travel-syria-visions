
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { t, direction } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      preferredUniversity: '',
      desiredMajor: '',
      additionalMessage: ''
    }
  });

  const universities = [
    'Sant\'Anna School of Advanced Studies (Pisa)',
    'University of Milano-Bicocca',
    'LIUC Business University',
    'SRM Institute of Science and Technology (Chennai)',
    'SRM University (Andhra Pradesh)',
    'Babeș-Bolyai University (Cluj-Napoca)'
  ];

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, this would send to alhusseinamjad904@gmail.com
      console.log('Form submission to alhusseinamjad904@gmail.com:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "+963985453247";

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#231F20] text-center mb-12">
          {t('contact.title')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#231F20]">
                احجز استشارة مجانية
              </CardTitle>
            </CardHeader>
            <CardContent>
              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6">
                  تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
                </div>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    rules={{ required: "الاسم الكامل مطلوب" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          الاسم الكامل *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full" 
                            dir={direction}
                            placeholder="أدخل اسمك الكامل"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    rules={{ required: "رقم الهاتف مطلوب" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          رقم الهاتف *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            className="w-full" 
                            placeholder="+963xxxxxxxxx"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "البريد الإلكتروني مطلوب",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "البريد الإلكتروني غير صحيح"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          البريد الإلكتروني *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="w-full" 
                            placeholder="example@email.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="preferredUniversity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          الجامعة المرغوبة
                        </FormLabel>
                        <FormControl>
                          <select 
                            {...field}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EE3524] focus:border-transparent"
                            dir={direction}
                          >
                            <option value="">اختر الجامعة</option>
                            {universities.map((university) => (
                              <option key={university} value={university}>
                                {university}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="desiredMajor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          التخصص المطلوب
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full" 
                            dir={direction}
                            placeholder="مثل: هندسة الحاسوب، إدارة الأعمال، الطب"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="additionalMessage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          رسالة إضافية (اختيارية)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            className="w-full"
                            dir={direction}
                            placeholder="أي معلومات إضافية تود مشاركتها..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#EE3524] hover:bg-red-600 text-white font-semibold py-3 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      'إرسال الطلب'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info - WhatsApp Only */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#231F20] mb-4">
                  تواصل معنا مباشرة
                </h3>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all duration-300"
                  >
                    تواصل عبر واتساب
                  </Button>
                  
                  <div className="text-center pt-4">
                    <p className="text-gray-600">
                      <strong>رقم الواتساب:</strong> {whatsappNumber}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>البريد الإلكتروني:</strong> alhusseinamjad904@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#231F20] mb-4">
                  ساعات العمل
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
