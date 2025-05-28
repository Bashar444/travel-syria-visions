
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, direction } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#231F20] text-center mb-12">
          {t('contact.title')}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#231F20]">
                إرسال رسالة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    dir={direction}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#EE3524] focus:border-transparent"
                    dir={direction}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#EE3524] hover:bg-red-600 text-white font-semibold py-3"
                >
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#231F20] mb-4">
                  تواصل معنا مباشرة
                </h3>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open('https://wa.me/+963123456789', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  >
                    تواصل عبر واتساب
                  </Button>
                  
                  <Button
                    onClick={() => window.open('https://facebook.com/travel.ltd', '_blank')}
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3"
                  >
                    زر صفحتنا على فيسبوك
                  </Button>
                  
                  <Button
                    onClick={() => window.open('https://instagram.com/travel.ltd', '_blank')}
                    variant="outline"
                    className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold py-3"
                  >
                    تابعنا على إنستغرام
                  </Button>
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
