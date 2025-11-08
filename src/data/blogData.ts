
export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
  keywords: string;
  fullContent: string;
}

export const getBlogPosts = (direction: string): BlogPost[] => [
  {
    title: direction === 'rtl' ? "متطلبات التأشيرة الطلابية للدول الأوروبية" : "Student Visa Requirements for European Countries",
    excerpt: direction === 'rtl' 
      ? "دليل مفصل لمتطلبات التأشيرة الطلابية وإجراءات التقديم لأهم الدول الأوروبية."
      : "Detailed guide to student visa requirements and application procedures for major European countries.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    date: "2024-01-15",
    author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
    slug: "student-visa-requirements-europe",
    keywords: direction === 'rtl' ? "التأشيرة الطلابية, أوروبا, إجراءات السفر" : "student visa, Europe, travel procedures",
    fullContent: direction === 'rtl' 
      ? "الدراسة في أوروبا تفتح أبواب التعليم عالمي المستوى والتجارب الثقافية المتنوعة. لبدء رحلتك، يجب عليك الحصول على تأشيرة طلابية، والتي تتضمن عدة خطوات.\n\nالمتطلبات الأساسية:\n• خطاب قبول من جامعة معترف بها\n• إثبات الوسائل المالية الكافية\n• جواز سفر صالح وصور حديثة\n• تغطية التأمين الصحي\n• استمارة طلب التأشيرة مكتملة\n\nعملية التقديم:\n1. قدم واحصل على عرض من الجامعة المختارة\n2. اجمع الوثائق المطلوبة مع التأكد من الترجمة إذا لزم الأمر\n3. حدد موعداً مع القنصلية أو السفارة\n4. احضر المقابلة وقدم البيانات البيومترية إذا طُلب منك\n5. انتظر المعالجة وتتبع حالة طلبك\n\nنصائح:\n• ابدأ مبكراً لتجنب المشاكل في اللحظة الأخيرة\n• تحقق من صحة الوثائق واكتمالها\n• اطلب التوجيه من مكتب الطلاب الدوليين في جامعتك\n\nقد يكون لكل دولة متطلبات محددة، لذا تحقق دائماً من موقع السفارة الرسمي."
      : "Studying in Europe opens doors to world-class education and diverse cultural experiences. To begin your journey, you must secure a student visa, which involves several steps.\n\nKey Requirements:\n• Acceptance letter from a recognized university\n• Proof of sufficient financial means\n• Valid passport and recent photographs\n• Health insurance coverage\n• Completed visa application form\n\nApplication Process:\n1. Apply and receive an offer from your chosen university\n2. Gather required documents, ensuring translations if necessary\n3. Schedule an appointment with the consulate or embassy\n4. Attend your interview and submit biometrics if required\n5. Wait for processing and track your application status\n\nTips:\n• Start early to avoid last-minute issues\n• Double-check document validity and completeness\n• Seek guidance from your university's international office\n\nEach country may have specific requirements, so always verify with the official embassy website."
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
    keywords: direction === 'rtl' ? "الجامعات الهندية, الحياة الطلابية, الطلاب العرب" : "Indian universities, student life, Arab students",
    fullContent: direction === 'rtl'
      ? "الجامعات الهندية تقدم حياة جامعية نابضة بالحياة، تمزج بين الأكاديميات الصارمة والتقاليد الثقافية الغنية.\n\nالبيئة الأكاديمية:\n• الفصول تفاعلية مع فرص للبحث والتدريب\n• الأساتذة ودودون ويشجعون المشاركة\n\nالحياة الجامعية:\n• الطلاب ينضمون للنوادي والرياضة والفعاليات الثقافية\n• المساكن توفر إقامة ميسورة التكلفة مع خطط الوجبات\n\nالتكيف الثقافي:\n• الحرم الجامعي متنوع ومرحب\n• المهرجانات والطعام واللغة قد تكون جديدة، لكن شبكات الدعم تساعد الطلاب الدوليين على التكيف\n\nالميزانية:\n• تكاليف المعيشة ميسورة بشكل عام\n• العديد من المنح الدراسية وفرص العمل بدوام جزئي متاحة\n\nالطلاب العرب غالباً ما يجدون إحساساً بالمجتمع من خلال جمعيات الطلاب والمجموعات الثقافية."
      : "Indian universities offer a vibrant campus life, blending rigorous academics with rich cultural traditions.\n\nAcademic Environment:\n• Classes are interactive, with opportunities for research and internships\n• Professors are approachable and encourage participation\n\nCampus Life:\n• Students join clubs, sports, and cultural events\n• Hostels provide affordable accommodation, often with meal plans\n\nCultural Adaptation:\n• Indian campuses are diverse and welcoming\n• Festivals, food, and language may be new, but support networks help international students adjust\n\nBudgeting:\n• Living costs are generally affordable\n• Many scholarships and part-time work opportunities are available\n\nArab students often find a sense of community through student associations and cultural groups."
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
    keywords: direction === 'rtl' ? "التخصصات الجامعية, فرص العمل, الطلاب السوريين" : "university majors, job opportunities, Syrian students",
    fullContent: direction === 'rtl'
      ? "اختيار التخصص الصحيح أمر بالغ الأهمية للنجاح المستقبلي. في عام 2024، يُشجع الطلاب السوريون على النظر في المجالات ذات الطلب القوي محلياً ودولياً.\n\nأفضل التخصصات:\n• الهندسة (المدنية، الحاسوب، الكهربائية)\n• تكنولوجيا المعلومات وعلوم الحاسوب\n• الطب والعلوم الصحية\n• إدارة الأعمال والمالية\n• الطاقة المتجددة والعلوم البيئية\n\nلماذا هذه التخصصات؟\n• تقدم قابلية توظيف عالية وإمكانات نمو\n• العديد من الجامعات تقدم منح دراسية لهذه المجالات\n\nنصائح:\n• وائم اختيارك مع اهتماماتك واحتياجات السوق\n• اطلب الإرشاد والاستشارة المهنية لاتخاذ قرارات مدروسة"
      : "Choosing the right major is crucial for future success. In 2024, Syrian students are encouraged to consider fields with strong demand both locally and internationally.\n\nTop Majors:\n• Engineering (Civil, Computer, Electrical)\n• Information Technology and Computer Science\n• Medicine and Health Sciences\n• Business Administration and Finance\n• Renewable Energy and Environmental Sciences\n\nWhy These Majors?\n• They offer high employability and growth potential\n• Many universities offer scholarships for these fields\n\nAdvice:\n• Align your choice with your interests and market needs\n• Seek mentorship and career counseling to make informed decisions"
  },
  {
    title: direction === 'rtl' ? "دليل شامل للدراسة في الجامعات الإيطالية" : "Complete Guide to Studying in Italian Universities",
    excerpt: direction === 'rtl' 
      ? "اكتشف أفضل الجامعات الإيطالية ومتطلبات القبول والمنح الدراسية المتاحة للطلاب السوريين."
      : "Discover the best Italian universities, admission requirements, and available scholarships for Syrian students.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    date: "2024-01-20",
    author: direction === 'rtl' ? "فريق Travel.Ltd" : "Travel.Ltd Team",
    slug: "guide-to-italian-universities",
    keywords: direction === 'rtl' ? "الجامعات الإيطالية, الدراسة في إيطاليا, المنح الدراسية" : "Italian universities, studying in Italy, scholarships",
    fullContent: direction === 'rtl'
      ? "إيطاليا موطن لبعض من أقدم وأرقى الجامعات في العالم.\n\nأفضل الجامعات:\n• جامعة بولونيا\n• جامعة سابيينزا في روما\n• جامعة بادوفا\n\nمتطلبات القبول:\n• شهادة الثانوية العامة أو ما يعادلها\n• إثبات إجادة اللغة (الإيطالية أو الإنجليزية)\n• التقديم عبر البوابة الإلكترونية للجامعة\n\nالمنح الدراسية:\n• منح حكومية وجامعية متاحة للطلاب الدوليين، بما في ذلك السوريين\n\nالحياة الطلابية:\n• المدن الإيطالية تقدم مزيجاً من التاريخ والثقافة والمرافق الحديثة\n• الطلاب يستمتعون بمجتمعات جامعية نابضة بالحياة وفرص للسفر عبر أوروبا\n\nابدأ طلبك مبكراً وتواصل مع مكاتب الطلاب الدوليين في الجامعات للحصول على التوجيه."
      : "Italy is home to some of the world's oldest and most prestigious universities.\n\nTop Universities:\n• University of Bologna\n• Sapienza University of Rome\n• University of Padua\n\nAdmission Requirements:\n• High school diploma or equivalent\n• Proof of language proficiency (Italian or English)\n• Application through the university's online portal\n\nScholarships:\n• Government and university scholarships are available for international students, including Syrians\n\nStudent Life:\n• Italian cities offer a blend of history, culture, and modern amenities\n• Students enjoy vibrant campus communities and opportunities for travel across Europe\n\nStart your application early and reach out to university international offices for guidance."
  }
];
