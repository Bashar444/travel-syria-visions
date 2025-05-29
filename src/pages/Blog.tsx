
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const Blog = () => {
  const { direction } = useLanguage();

  const blogPosts = [
    {
      title: direction === 'rtl' ? "دليل شامل للدراسة في الجامعات الإيطالية" : "Complete Guide to Studying in Italian Universities",
      excerpt: direction === 'rtl' 
        ? "اكتشف أفضل الجامعات الإيطالية ومتطلبات القبول والمنح الدراسية المتاحة للطلاب السوريين."
        : "Discover the best Italian universities, admission requirements, and available scholarships for Syrian students.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
      date: "2024-01-15",
      author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
      slug: "guide-to-italian-universities",
      keywords: direction === 'rtl' ? "الجامعات الإيطالية, الدراسة في إيطاليا, المنح الدراسية" : "Italian universities, studying in Italy, scholarships"
    },
    {
      title: direction === 'rtl' ? "المنح الدراسية المتاحة للطلاب السوريين 2024" : "Available Scholarships for Syrian Students 2024",
      excerpt: direction === 'rtl' 
        ? "قائمة شاملة بأفضل المنح الدراسية المتاحة للطلاب السوريين في أوروبا وآسيا."
        : "Comprehensive list of the best scholarships available for Syrian students in Europe and Asia.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
      date: "2024-01-10",
      author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
      slug: "scholarships-for-syrian-students",
      keywords: direction === 'rtl' ? "المنح الدراسية, الطلاب السوريين, التعليم المجاني" : "scholarships, Syrian students, free education"
    },
    {
      title: direction === 'rtl' ? "كيفية كتابة خطاب الدافع المثالي" : "How to Write the Perfect Motivation Letter",
      excerpt: direction === 'rtl' 
        ? "نصائح مهمة وأمثلة عملية لكتابة خطاب دافع قوي يزيد من فرص قبولك الجامعي."
        : "Important tips and practical examples for writing a strong motivation letter that increases your university acceptance chances.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
      date: "2024-01-05",
      author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
      slug: "perfect-motivation-letter",
      keywords: direction === 'rtl' ? "خطاب الدافع, القبول الجامعي, كتابة الطلبات" : "motivation letter, university admission, application writing"
    },
    {
      title: direction === 'rtl' ? "الحياة الطلابية في الجامعات الهندية" : "Student Life in Indian Universities",
      excerpt: direction === 'rtl' 
        ? "تعرف على تجربة الطلاب العرب في الجامعات الهندية والثقافة المحلية والتكاليف."
        : "Learn about the experience of Arab students in Indian universities, local culture, and costs.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      date: "2023-12-28",
      author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
      slug: "student-life-indian-universities",
      keywords: direction === 'rtl' ? "الجامعات الهندية, الحياة الطلابية, الطلاب العرب" : "Indian universities, student life, Arab students"
    },
    {
      title: direction === 'rtl' ? "متطلبات التأشيرة الطلابية للدول الأوروبية" : "Student Visa Requirements for European Countries",
      excerpt: direction === 'rtl' 
        ? "دليل مفصل لمتطلبات التأشيرة الطلابية وإجراءات التقديم لأهم الدول الأوروبية."
        : "Detailed guide to student visa requirements and application procedures for major European countries.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      date: "2023-12-20",
      author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
      slug: "student-visa-requirements-europe",
      keywords: direction === 'rtl' ? "التأشيرة الطلابية, أوروبا, إجراءات السفر" : "student visa, Europe, travel procedures"
    },
    {
      title: direction === 'rtl' ? "أفضل التخصصات للطلاب السوريين في 2024" : "Best Majors for Syrian Students in 2024",
      excerpt: direction === 'rtl' 
        ? "تحليل لأفضل التخصصات الجامعية التي توفر فرص عمل ممتازة للطلاب السوريين."
        : "Analysis of the best university majors that provide excellent job opportunities for Syrian students.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      date: "2023-12-15",
      author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
      slug: "best-majors-syrian-students-2024",
      keywords: direction === 'rtl' ? "التخصصات الجامعية, فرص العمل, الطلاب السوريين" : "university majors, job opportunities, Syrian students"
    }
  ];

  return (
    <>
      <SEO 
        title={direction === 'rtl' ? "مدونة Travel.Ltd - دليلك للدراسة في الخارج" : "Travel.Ltd Blog - Your Guide to Study Abroad"}
        description={direction === 'rtl' 
          ? "اكتشف أحدث النصائح والإرشادات للدراسة في الخارج، المنح الدراسية، ومتطلبات القبول الجامعي للطلاب السوريين."
          : "Discover the latest tips and guidance for studying abroad, scholarships, and university admission requirements for Syrian students."
        }
        keywords={direction === 'rtl' ? "مدونة التعليم, الدراسة في الخارج, المنح الدراسية, القبول الجامعي, نصائح الطلاب" : "education blog, studying abroad, scholarships, university admission, student tips"}
      />
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#231F20] mb-6">
              {direction === 'rtl' ? 'مدونة Travel.Ltd' : 'Travel.Ltd Blog'}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {direction === 'rtl' 
                ? 'دليلك الشامل للدراسة في الخارج والحصول على أفضل الفرص التعليمية'
                : 'Your comprehensive guide to studying abroad and getting the best educational opportunities'
              }
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-[#EE3524] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {direction === 'rtl' ? 'مميز' : 'Featured'}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-sm mb-4">
                    <span className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </span>
                    <span className="flex items-center space-x-1 rtl:space-x-reverse">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#231F20] mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button className="bg-[#EE3524] hover:bg-red-600 self-start">
                    {direction === 'rtl' ? 'اقرأ المزيد' : 'Read More'}
                    <ArrowRight className={`w-4 h-4 ${direction === 'rtl' ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-xs mb-2">
                    <span className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1 rtl:space-x-reverse">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="text-[#EE3524] border-[#EE3524] hover:bg-[#EE3524] hover:text-white">
                    {direction === 'rtl' ? 'اقرأ المزيد' : 'Read More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-[#231F20] text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {direction === 'rtl' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {direction === 'rtl' 
                ? 'احصل على أحدث النصائح والمنح الدراسية مباشرة في بريدك الإلكتروني'
                : 'Get the latest tips and scholarships directly in your email'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={direction === 'rtl' ? 'بريدك الإلكتروني' : 'Your email'}
                className="px-4 py-3 rounded-lg text-[#231F20] flex-1"
              />
              <Button className="bg-[#EE3524] hover:bg-red-600 px-8">
                {direction === 'rtl' ? 'اشتراك' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
