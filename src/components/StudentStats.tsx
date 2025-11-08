
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Users, GraduationCap, Award, Globe, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const StudentStats = () => {
  const { direction } = useLanguage();
  const [counters, setCounters] = useState({
    totalStudents: 0,
    successRate: 0,
    universities: 0,
    countries: 0,
    scholarships: 0,
    programs: 0
  });

  const finalStats = {
    totalStudents: 2847,
    successRate: 94,
    universities: 156,
    countries: 23,
    scholarships: 1203,
    programs: 89
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        totalStudents: Math.floor(finalStats.totalStudents * progress),
        successRate: Math.floor(finalStats.successRate * progress),
        universities: Math.floor(finalStats.universities * progress),
        countries: Math.floor(finalStats.countries * progress),
        scholarships: Math.floor(finalStats.scholarships * progress),
        programs: Math.floor(finalStats.programs * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.totalStudents,
      label: direction === 'rtl' ? 'طالب ناجح' : 'Successful Students',
      suffix: '+',
      color: 'bg-blue-500',
      description: direction === 'rtl' ? 'منذ 2020' : 'Since 2020'
    },
    {
      icon: TrendingUp,
      value: counters.successRate,
      label: direction === 'rtl' ? 'معدل النجاح' : 'Success Rate',
      suffix: '%',
      color: 'bg-green-500',
      description: direction === 'rtl' ? 'قبول الطلبات' : 'Application Acceptance'
    },
    {
      icon: GraduationCap,
      value: counters.universities,
      label: direction === 'rtl' ? 'جامعة شريكة' : 'Partner Universities',
      suffix: '+',
      color: 'bg-purple-500',
      description: direction === 'rtl' ? 'حول العالم' : 'Worldwide'
    },
    {
      icon: Globe,
      value: counters.countries,
      label: direction === 'rtl' ? 'دولة' : 'Countries',
      suffix: '',
      color: 'bg-orange-500',
      description: direction === 'rtl' ? 'وجهات دراسية' : 'Study Destinations'
    },
    {
      icon: Award,
      value: counters.scholarships,
      label: direction === 'rtl' ? 'منحة دراسية' : 'Scholarships',
      suffix: '+',
      color: 'bg-red-500',
      description: direction === 'rtl' ? 'تم الحصول عليها' : 'Secured'
    },
    {
      icon: BookOpen,
      value: counters.programs,
      label: direction === 'rtl' ? 'برنامج دراسي' : 'Study Programs',
      suffix: '+',
      color: 'bg-indigo-500',
      description: direction === 'rtl' ? 'متاح' : 'Available'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0018A8] to-[#0E1B34] py-16 rounded-2xl my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {direction === 'rtl' ? 'إحصائيات نجاحنا' : 'Our Success Statistics'}
          </h2>
          <p className="text-xl text-blue-100 mb-2">
            {direction === 'rtl' ? '2020 - 2025' : '2020 - 2025'}
          </p>
          <p className="text-blue-200">
            {direction === 'rtl' 
              ? 'رحلة نجاح مستمرة مع طلابنا حول العالم'
              : 'A continuous success journey with our students worldwide'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`${stat.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              {direction === 'rtl' ? 'نمو متواصل عبر السنوات' : 'Continuous Growth Over the Years'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {[
                { year: '2020', students: 312 },
                { year: '2021', students: 456 },
                { year: '2022', students: 623 },
                { year: '2023', students: 781 },
                { year: '2024', students: 675 }
              ].map((yearData, index) => (
                <div key={index} className="text-white">
                  <div className="text-2xl font-bold text-blue-200">{yearData.year}</div>
                  <div className="text-lg">{yearData.students}</div>
                  <div className="text-sm text-blue-300">
                    {direction === 'rtl' ? 'طالب' : 'Students'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStats;
