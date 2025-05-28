
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Universities = () => {
  const { t } = useLanguage();

  const italianUniversities = [
    {
      name: "Sant'Anna School of Advanced Studies",
      location: "Pisa, Italy",
      programs: ["Master's in International Security", "Economics & Management"],
      highlights: ["Fully funded scholarships with accommodation", "Public competition-based admission"],
      languages: ["English programs available"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "University of Milano-Bicocca",
      location: "Milan, Italy", 
      programs: ["Medicine", "Engineering", "Economics", "Law"],
      highlights: ["Modern campus with industry partnerships", "Located in innovative Bicocca district"],
      languages: ["English and Italian programs"],
      color: "bg-green-50 border-green-200"
    },
    {
      name: "LIUC Business University",
      location: "Castellanza, Italy",
      programs: ["Management Engineering", "Business Economics", "Business Analytics"],
      highlights: ["Harvard Business School partnership", "International experience with residential weeks abroad"],
      languages: ["English programs", "Pre-enrollment Nov 2024 - June 2025"],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const indianUniversities = [
    {
      name: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      programs: ["BTech Computer Science", "MBA", "Aerospace Engineering"],
      highlights: ["High placement rates and industry connections", "Strong alumni network and research facilities"],
      fees: "INR 7.5K to INR 1.4 Crore",
      color: "bg-orange-50 border-orange-200"
    },
    {
      name: "SRM University",
      location: "Andhra Pradesh, India",
      programs: ["Engineering", "Management", "Applied Sciences"],
      highlights: ["Modern infrastructure and international collaborations", "Industry-oriented curriculum"],
      admission: "Merit and entrance-based admission",
      color: "bg-red-50 border-red-200"
    }
  ];

  const romanianUniversities = [
    {
      name: "Babeș-Bolyai University",
      location: "Cluj-Napoca, Romania",
      programs: ["258 undergraduate programs", "270 master's programs"],
      highlights: ["Largest university in Romania", "Strong research focus and international programs"],
      languages: ["Romanian", "Hungarian", "German", "English", "French"],
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  const whatsappNumber = "+963985453247";

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#231F20] mb-4">
            {t('nav.universities')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نتعاون مع أفضل الجامعات في إيطاليا والهند ورومانيا لضمان حصولك على تعليم عالي الجودة وفرص مهنية متميزة
          </p>
        </div>

        {/* Italian Universities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#231F20] mb-8 text-center">
            الجامعات الإيطالية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {italianUniversities.map((university, index) => (
              <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${university.color} border-2`}>
                <CardHeader>
                  <CardTitle className="text-xl text-[#231F20] mb-2">
                    {university.name}
                  </CardTitle>
                  <p className="text-[#EE3524] font-semibold">{university.location}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">البرامج المتاحة:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {university.programs.map((program, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-[#EE3524] rounded-full mr-2"></span>
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">المميزات:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {university.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {university.languages && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">لغات التدريس:</h4>
                        <p className="text-sm text-gray-600">{university.languages.join(', ')}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Indian Universities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#231F20] mb-8 text-center">
            الجامعات الهندية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {indianUniversities.map((university, index) => (
              <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${university.color} border-2`}>
                <CardHeader>
                  <CardTitle className="text-xl text-[#231F20] mb-2">
                    {university.name}
                  </CardTitle>
                  <p className="text-[#EE3524] font-semibold">{university.location}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">البرامج المتاحة:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {university.programs.map((program, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-[#EE3524] rounded-full mr-2"></span>
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">المميزات:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {university.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {university.fees && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">الرسوم الدراسية:</h4>
                        <p className="text-sm text-[#EE3524] font-semibold">{university.fees}</p>
                      </div>
                    )}

                    {university.admission && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">شروط القبول:</h4>
                        <p className="text-sm text-gray-600">{university.admission}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Romanian Universities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#231F20] mb-8 text-center">
            الجامعات الرومانية
          </h2>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {romanianUniversities.map((university, index) => (
              <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${university.color} border-2`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#231F20] mb-2">
                    {university.name}
                  </CardTitle>
                  <p className="text-[#EE3524] font-semibold text-lg">{university.location}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">البرامج المتاحة:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {university.programs.map((program, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-[#EE3524] rounded-full mr-2"></span>
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">المميزات:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {university.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {university.languages && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">لغات التدريس:</h4>
                      <p className="text-sm text-gray-600">{university.languages.join(' • ')}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#EE3524] to-red-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ابدأ رحلتك الأكاديمية اليوم
          </h2>
          <p className="text-xl mb-6 opacity-90">
            تواصل معنا للحصول على استشارة مجانية واختيار الجامعة المناسبة لك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              className="bg-white text-[#EE3524] hover:bg-gray-100 font-semibold py-3 px-8 text-lg transition-all duration-300"
            >
              تواصل عبر واتساب
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#EE3524] font-semibold py-3 px-8 text-lg transition-all duration-300"
            >
              احجز استشارة مجانية
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Universities;
