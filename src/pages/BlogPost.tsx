
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';

const BlogPost = () => {
  const { slug } = useParams();
  const { direction } = useLanguage();

  const blogPosts = {
    'student-visa-requirements-europe': {
      title: {
        en: "Student Visa Requirements for European Countries",
        ar: "متطلبات التأشيرة الطلابية للدول الأوروبية"
      },
      summary: {
        en: "Detailed guide to student visa requirements and application procedures for major European countries.",
        ar: "دليل مفصل لمتطلبات التأشيرة الطلابية وإجراءات التقديم لأهم الدول الأوروبية."
      },
      content: {
        en: `
          <p>Studying in Europe opens doors to world-class education and diverse cultural experiences. To begin your journey, you must secure a student visa, which involves several steps.</p>
          
          <h3>Key Requirements:</h3>
          <ul>
            <li>Acceptance letter from a recognized university</li>
            <li>Proof of sufficient financial means</li>
            <li>Valid passport and recent photographs</li>
            <li>Health insurance coverage</li>
            <li>Completed visa application form</li>
          </ul>
          
          <h3>Application Process:</h3>
          <ol>
            <li>Apply and receive an offer from your chosen university.</li>
            <li>Gather required documents, ensuring translations if necessary.</li>
            <li>Schedule an appointment with the consulate or embassy.</li>
            <li>Attend your interview and submit biometrics if required.</li>
            <li>Wait for processing and track your application status.</li>
          </ol>
          
          <h3>Tips:</h3>
          <ul>
            <li>Start early to avoid last-minute issues.</li>
            <li>Double-check document validity and completeness.</li>
            <li>Seek guidance from your university's international office.</li>
          </ul>
          
          <p>Each country may have specific requirements, so always verify with the official embassy website.</p>
        `,
        ar: `
          <p>الدراسة في أوروبا تفتح أبواب التعليم العالمي والتجارب الثقافية المتنوعة. لبدء رحلتك، يجب عليك الحصول على تأشيرة طلابية، والتي تتضمن عدة خطوات.</p>
          
          <h3>المتطلبات الأساسية:</h3>
          <ul>
            <li>خطاب قبول من جامعة معترف بها</li>
            <li>إثبات الوسائل المالية الكافية</li>
            <li>جواز سفر ساري وصور حديثة</li>
            <li>تغطية التأمين الصحي</li>
            <li>نموذج طلب التأشيرة مكتمل</li>
          </ul>
          
          <h3>عملية التقديم:</h3>
          <ol>
            <li>قدم واحصل على عرض من الجامعة المختارة.</li>
            <li>اجمع الوثائق المطلوبة، مع ضمان الترجمة إذا لزم الأمر.</li>
            <li>حدد موعداً مع القنصلية أو السفارة.</li>
            <li>احضر المقابلة وقدم البيانات البيومترية إذا طُلب منك.</li>
            <li>انتظر المعالجة وتتبع حالة طلبك.</li>
          </ol>
          
          <h3>نصائح:</h3>
          <ul>
            <li>ابدأ مبكراً لتجنب المشاكل في اللحظة الأخيرة.</li>
            <li>تحقق مرة أخرى من صحة واكتمال الوثائق.</li>
            <li>اطلب التوجيه من المكتب الدولي بجامعتك.</li>
          </ul>
          
          <p>قد يكون لكل دولة متطلبات محددة، لذا تحقق دائماً من موقع السفارة الرسمي.</p>
        `
      },
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      date: "2023-12-20",
      author: { en: "Travel.Ltd Team", ar: "فريق Travel.Ltd" },
      keywords: { en: "student visa, Europe, travel procedures", ar: "التأشيرة الطلابية, أوروبا, إجراءات السفر" }
    },
    'student-life-indian-universities': {
      title: {
        en: "Student Life in Indian Universities",
        ar: "الحياة الطلابية في الجامعات الهندية"
      },
      summary: {
        en: "Learn about the experience of Arab students in Indian universities, local culture, and costs.",
        ar: "تعرف على تجربة الطلاب العرب في الجامعات الهندية والثقافة المحلية والتكاليف."
      },
      content: {
        en: `
          <p>Indian universities offer a vibrant campus life, blending rigorous academics with rich cultural traditions.</p>
          
          <h3>Academic Environment:</h3>
          <ul>
            <li>Classes are interactive, with opportunities for research and internships.</li>
            <li>Professors are approachable and encourage participation.</li>
          </ul>
          
          <h3>Campus Life:</h3>
          <ul>
            <li>Students join clubs, sports, and cultural events.</li>
            <li>Hostels provide affordable accommodation, often with meal plans.</li>
          </ul>
          
          <h3>Cultural Adaptation:</h3>
          <ul>
            <li>Indian campuses are diverse and welcoming.</li>
            <li>Festivals, food, and language may be new, but support networks help international students adjust.</li>
          </ul>
          
          <h3>Budgeting:</h3>
          <ul>
            <li>Living costs are generally affordable.</li>
            <li>Many scholarships and part-time work opportunities are available.</li>
          </ul>
          
          <p>Arab students often find a sense of community through student associations and cultural groups.</p>
        `,
        ar: `
          <p>الجامعات الهندية تقدم حياة جامعية نابضة بالحياة، تمزج بين الأكاديميات الصارمة والتقاليد الثقافية الغنية.</p>
          
          <h3>البيئة الأكاديمية:</h3>
          <ul>
            <li>الصفوف تفاعلية، مع فرص للبحث والتدريب.</li>
            <li>الأساتذة ودودون ويشجعون المشاركة.</li>
          </ul>
          
          <h3>الحياة الجامعية:</h3>
          <ul>
            <li>الطلاب ينضمون للنوادي والرياضة والفعاليات الثقافية.</li>
            <li>النزل توفر إقامة بأسعار معقولة، غالباً مع خطط وجبات.</li>
          </ul>
          
          <h3>التكيف الثقافي:</h3>
          <ul>
            <li>الحرم الجامعي الهندي متنوع ومرحب.</li>
            <li>المهرجانات والطعام واللغة قد تكون جديدة، لكن شبكات الدعم تساعد الطلاب الدوليين على التكيف.</li>
          </ul>
          
          <h3>الميزانية:</h3>
          <ul>
            <li>تكاليف المعيشة عموماً معقولة.</li>
            <li>العديد من المنح الدراسية وفرص العمل بدوام جزئي متاحة.</li>
          </ul>
          
          <p>الطلاب العرب غالباً ما يجدون شعوراً بالمجتمع من خلال الجمعيات الطلابية والمجموعات الثقافية.</p>
        `
      },
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      date: "2023-12-28",
      author: { en: "Travel.Ltd Team", ar: "فريق Travel.Ltd" },
      keywords: { en: "Indian universities, student life, Arab students", ar: "الجامعات الهندية, الحياة الطلابية, الطلاب العرب" }
    },
    'best-majors-syrian-students-2024': {
      title: {
        en: "Best Majors for Syrian Students in 2024",
        ar: "أفضل التخصصات للطلاب السوريين في 2024"
      },
      summary: {
        en: "Analysis of the best university majors that provide excellent job opportunities for Syrian students.",
        ar: "تحليل لأفضل التخصصات الجامعية التي توفر فرص عمل ممتازة للطلاب السوريين."
      },
      content: {
        en: `
          <p>Choosing the right major is crucial for future success. In 2024, Syrian students are encouraged to consider fields with strong demand both locally and internationally.</p>
          
          <h3>Top Majors:</h3>
          <ul>
            <li>Engineering (Civil, Computer, Electrical)</li>
            <li>Information Technology and Computer Science</li>
            <li>Medicine and Health Sciences</li>
            <li>Business Administration and Finance</li>
            <li>Renewable Energy and Environmental Sciences</li>
          </ul>
          
          <h3>Why These Majors?</h3>
          <ul>
            <li>They offer high employability and growth potential.</li>
            <li>Many universities offer scholarships for these fields.</li>
          </ul>
          
          <h3>Advice:</h3>
          <ul>
            <li>Align your choice with your interests and market needs.</li>
            <li>Seek mentorship and career counseling to make informed decisions.</li>
          </ul>
        `,
        ar: `
          <p>اختيار التخصص المناسب أمر بالغ الأهمية للنجاح المستقبلي. في عام 2024، يُشجع الطلاب السوريون على النظر في المجالات ذات الطلب القوي محلياً ودولياً.</p>
          
          <h3>أفضل التخصصات:</h3>
          <ul>
            <li>الهندسة (المدنية، الحاسوب، الكهربائية)</li>
            <li>تكنولوجيا المعلومات وعلوم الحاسوب</li>
            <li>الطب والعلوم الصحية</li>
            <li>إدارة الأعمال والمالية</li>
            <li>الطاقة المتجددة والعلوم البيئية</li>
          </ul>
          
          <h3>لماذا هذه التخصصات؟</h3>
          <ul>
            <li>تقدم إمكانية توظيف عالية وإمكانية نمو.</li>
            <li>العديد من الجامعات تقدم منحاً دراسية لهذه المجالات.</li>
          </ul>
          
          <h3>النصيحة:</h3>
          <ul>
            <li>وازن اختيارك مع اهتماماتك واحتياجات السوق.</li>
            <li>اطلب الإرشاد والاستشارة المهنية لاتخاذ قرارات مدروسة.</li>
          </ul>
        `
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      date: "2023-12-15",
      author: { en: "Travel.Ltd Team", ar: "فريق Travel.Ltd" },
      keywords: { en: "university majors, job opportunities, Syrian students", ar: "التخصصات الجامعية, فرص العمل, الطلاب السوريين" }
    },
    'guide-to-italian-universities': {
      title: {
        en: "Complete Guide to Studying in Italian Universities",
        ar: "دليل شامل للدراسة في الجامعات الإيطالية"
      },
      summary: {
        en: "Discover the best Italian universities, admission requirements, and available scholarships for Syrian students.",
        ar: "اكتشف أفضل الجامعات الإيطالية ومتطلبات القبول والمنح الدراسية المتاحة للطلاب السوريين."
      },
      content: {
        en: `
          <p>Italy is home to some of the world's oldest and most prestigious universities.</p>
          
          <h3>Top Universities:</h3>
          <ul>
            <li>University of Bologna</li>
            <li>Sapienza University of Rome</li>
            <li>University of Padua</li>
          </ul>
          
          <h3>Admission Requirements:</h3>
          <ul>
            <li>High school diploma or equivalent</li>
            <li>Proof of language proficiency (Italian or English)</li>
            <li>Application through the university's online portal</li>
          </ul>
          
          <h3>Scholarships:</h3>
          <p>Government and university scholarships are available for international students, including Syrians.</p>
          
          <h3>Student Life:</h3>
          <ul>
            <li>Italian cities offer a blend of history, culture, and modern amenities.</li>
            <li>Students enjoy vibrant campus communities and opportunities for travel across Europe.</li>
          </ul>
          
          <p>Start your application early and reach out to university international offices for guidance.</p>
        `,
        ar: `
          <p>إيطاليا موطن لبعض من أقدم وأعرق الجامعات في العالم.</p>
          
          <h3>أفضل الجامعات:</h3>
          <ul>
            <li>جامعة بولونيا</li>
            <li>جامعة سابينزا في روما</li>
            <li>جامعة بادوا</li>
          </ul>
          
          <h3>متطلبات القبول:</h3>
          <ul>
            <li>شهادة الثانوية العامة أو ما يعادلها</li>
            <li>إثبات إتقان اللغة (الإيطالية أو الإنجليزية)</li>
            <li>التقديم من خلال البوابة الإلكترونية للجامعة</li>
          </ul>
          
          <h3>المنح الدراسية:</h3>
          <p>المنح الحكومية والجامعية متاحة للطلاب الدوليين، بما في ذلك السوريين.</p>
          
          <h3>الحياة الطلابية:</h3>
          <ul>
            <li>المدن الإيطالية تقدم مزيجاً من التاريخ والثقافة والمرافق الحديثة.</li>
            <li>الطلاب يستمتعون بمجتمعات جامعية نابضة بالحياة وفرص للسفر عبر أوروبا.</li>
          </ul>
          
          <p>ابدأ طلبك مبكراً وتواصل مع المكاتب الدولية بالجامعة للحصول على التوجيه.</p>
        `
      },
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
      date: "2024-01-15",
      author: { en: "Travel.Ltd Team", ar: "فريق Travel.Ltd" },
      keywords: { en: "Italian universities, studying in Italy, scholarships", ar: "الجامعات الإيطالية, الدراسة في إيطاليا, المنح الدراسية" }
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const currentLang = direction === 'rtl' ? 'ar' : 'en';
  const title = post.title[currentLang];
  const content = post.content[currentLang];
  const author = post.author[currentLang];
  const keywords = post.keywords[currentLang];

  const breadcrumbItems = [
    { label: direction === 'rtl' ? 'المدونة' : 'Blog', href: '/blog' },
    { label: title }
  ];

  return (
    <>
      <SEO 
        title={title}
        description={post.summary[currentLang]}
        keywords={keywords}
      />
      
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Back Button */}
          <Link 
            to="/blog"
            className={`inline-flex items-center space-x-2 rtl:space-x-reverse text-[#0018A8] hover:text-blue-700 transition-colors mb-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{direction === 'rtl' ? 'العودة إلى المدونة' : 'Back to Blog'}</span>
          </Link>

          {/* Article Header */}
          <article className="mb-12">
            <div className="mb-8">
              <img 
                src={post.image}
                alt={title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-500 text-sm mb-4">
                <span className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center space-x-1 rtl:space-x-reverse">
                  <User className="w-4 h-4" />
                  <span>{author}</span>
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-[#231F20] mb-4 leading-tight">
                {title}
              </h1>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
              dir={direction}
            />
          </article>

          {/* Navigation */}
          <div className="border-t pt-8">
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#EE3524] text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{direction === 'rtl' ? 'العودة إلى جميع المقالات' : 'Back to All Articles'}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
