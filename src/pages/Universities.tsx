
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Universities = () => {
  const { t, direction } = useLanguage();

  const italianUniversities = [
    {
      name: "Sant'Anna School of Advanced Studies",
      location: "Pisa, Italy",
      programs: [
        direction === 'rtl' ? "ماجستير في الأمن الدولي" : "Master's in International Security",
        direction === 'rtl' ? "الاقتصاد والإدارة" : "Economics & Management"
      ],
      highlights: [
        direction === 'rtl' ? "منح دراسية كاملة مع السكن" : "Fully funded scholarships with accommodation",
        direction === 'rtl' ? "قبول على أساس المنافسة العامة" : "Public competition-based admission"
      ],
      languages: [direction === 'rtl' ? "برامج باللغة الإنجليزية متاحة" : "English programs available"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "University of Milano-Bicocca",
      location: "Milan, Italy", 
      programs: [
        direction === 'rtl' ? "الطب" : "Medicine",
        direction === 'rtl' ? "الهندسة" : "Engineering",
        direction === 'rtl' ? "الاقتصاد" : "Economics",
        direction === 'rtl' ? "القانون" : "Law"
      ],
      highlights: [
        direction === 'rtl' ? "حرم جامعي حديث مع شراكات صناعية" : "Modern campus with industry partnerships",
        direction === 'rtl' ? "يقع في منطقة بيكوكا المبتكرة" : "Located in innovative Bicocca district"
      ],
      languages: [direction === 'rtl' ? "برامج باللغة الإنجليزية والإيطالية" : "English and Italian programs"],
      color: "bg-green-50 border-green-200"
    },
    {
      name: "LIUC Business University",
      location: "Castellanza, Italy",
      programs: [
        direction === 'rtl' ? "هندسة الإدارة" : "Management Engineering",
        direction === 'rtl' ? "اقتصاد الأعمال" : "Business Economics",
        direction === 'rtl' ? "تحليل الأعمال" : "Business Analytics"
      ],
      highlights: [
        direction === 'rtl' ? "شراكة مع كلية هارفارد للأعمال" : "Harvard Business School partnership",
        direction === 'rtl' ? "تجربة دولية مع أسابيع إقامة في الخارج" : "International experience with residential weeks abroad"
      ],
      languages: [
        direction === 'rtl' ? "برامج باللغة الإنجليزية" : "English programs",
        direction === 'rtl' ? "التسجيل المسبق نوفمبر 2024 - يونيو 2025" : "Pre-enrollment Nov 2024 - June 2025"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const feesNote = direction === 'rtl'
    ? 'تفاصيل الرسوم الدراسية تُحدد بعد التواصل المباشر معنا عبر واتساب على الرقم ‎+963 985 453 247‎.'
    : 'Tuition details are provided after contacting us on WhatsApp at +963 985 453 247.';

  const indianUniversities = [
    {
      name: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      programs: [
        direction === 'rtl' ? "بكالوريوس علوم الحاسوب" : "BTech Computer Science",
        direction === 'rtl' ? "ماجستير إدارة الأعمال" : "MBA",
        direction === 'rtl' ? "هندسة الطيران" : "Aerospace Engineering"
      ],
      highlights: [
        direction === 'rtl' ? "معدلات توظيف عالية وصلات صناعية" : "High placement rates and industry connections",
        direction === 'rtl' ? "شبكة خريجين قوية ومرافق بحثية" : "Strong alumni network and research facilities"
      ],
  fees: feesNote,
      color: "bg-orange-50 border-orange-200"
    },
    {
      name: "SRM University",
      location: "Andhra Pradesh, India",
      programs: [
        direction === 'rtl' ? "الهندسة" : "Engineering",
        direction === 'rtl' ? "الإدارة" : "Management",
        direction === 'rtl' ? "العلوم التطبيقية" : "Applied Sciences"
      ],
      highlights: [
        direction === 'rtl' ? "بنية تحتية حديثة وتعاون دولي" : "Modern infrastructure and international collaborations",
        direction === 'rtl' ? "منهج موجه للصناعة" : "Industry-oriented curriculum"
      ],
      admission: direction === 'rtl' ? "قبول على أساس الجدارة والامتحان" : "Merit and entrance-based admission",
      color: "bg-red-50 border-red-200"
    }
  ];

  const romanianUniversities = [
    {
      name: "Babeș-Bolyai University",
      location: "Cluj-Napoca, Romania",
      programs: [
        direction === 'rtl' ? "258 برنامج بكالوريوس" : "258 undergraduate programs",
        direction === 'rtl' ? "270 برنامج ماجستير" : "270 master's programs"
      ],
      highlights: [
        direction === 'rtl' ? "أكبر جامعة في رومانيا" : "Largest university in Romania",
        direction === 'rtl' ? "تركيز بحثي قوي وبرامج دولية" : "Strong research focus and international programs"
      ],
      languages: [
        direction === 'rtl' ? "الرومانية، المجرية، الألمانية، الإنجليزية، الفرنسية" : "Romanian, Hungarian, German, English, French"
      ],
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
            {direction === 'rtl' 
              ? 'نتعاون مع أفضل الجامعات في إيطاليا والهند ورومانيا لضمان حصولك على تعليم عالي الجودة وفرص مهنية متميزة'
              : 'We partner with the best universities in Italy, India, and Romania to ensure you get high-quality education and excellent career opportunities'
            }
          </p>
        </div>

        {/* Italian Universities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#231F20] mb-8 text-center">
            {direction === 'rtl' ? 'الجامعات الإيطالية' : 'Italian Universities'}
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {direction === 'rtl' ? 'البرامج المتاحة:' : 'Available Programs:'}
                      </h4>
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {direction === 'rtl' ? 'المميزات:' : 'Highlights:'}
                      </h4>
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
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {direction === 'rtl' ? 'لغات التدريس:' : 'Teaching Languages:'}
                        </h4>
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
            {direction === 'rtl' ? 'الجامعات الهندية' : 'Indian Universities'}
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {direction === 'rtl' ? 'البرامج المتاحة:' : 'Available Programs:'}
                      </h4>
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {direction === 'rtl' ? 'المميزات:' : 'Highlights:'}
                      </h4>
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
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {direction === 'rtl' ? 'الرسوم الدراسية:' : 'Tuition Fees:'}
                        </h4>
                        <p className="text-sm text-[#EE3524] font-semibold">{university.fees}</p>
                      </div>
                    )}

                    {university.admission && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {direction === 'rtl' ? 'شروط القبول:' : 'Admission Requirements:'}
                        </h4>
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
            {direction === 'rtl' ? 'الجامعات الرومانية' : 'Romanian Universities'}
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {direction === 'rtl' ? 'البرامج المتاحة:' : 'Available Programs:'}
                      </h4>
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {direction === 'rtl' ? 'المميزات:' : 'Highlights:'}
                      </h4>
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
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {direction === 'rtl' ? 'لغات التدريس:' : 'Teaching Languages:'}
                      </h4>
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
            {direction === 'rtl' ? 'ابدأ رحلتك الأكاديمية اليوم' : 'Start your academic journey today'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {direction === 'rtl' 
              ? 'تواصل معنا للحصول على استشارة مجانية واختيار الجامعة المناسبة لك'
              : 'Contact us for a free consultation and choose the right university for you'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              className="bg-white text-[#EE3524] hover:bg-gray-100 font-semibold py-3 px-8 text-lg transition-all duration-300"
            >
              {direction === 'rtl' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
            </Button>
            <Button
              onClick={() => window.location.href = '/contact'}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#EE3524] font-semibold py-3 px-8 text-lg transition-all duration-300"
            >
              {direction === 'rtl' ? 'احجز استشارة مجانية' : 'Book free consultation'}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Universities;
