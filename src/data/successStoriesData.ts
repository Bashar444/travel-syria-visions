
export interface SuccessStory {
  id: string;
  studentName: string;
  title: string;
  summary: string;
  fullStory: string;
  keyAchievement: string;
  country: string;
  university?: string;
  image: string;
}

export const getSuccessStories = (language: string): SuccessStory[] => {
  if (language === 'ar') {
    return [
      {
        id: 'maya-pilot',
        studentName: 'مايا',
        title: 'من دمشق إلى النجاح العالمي',
        summary: 'رحلة مايا: طالبة سورية تصبح طيارة ومهندسة',
        fullStory: 'فرت مايا من دمشق عام 2015 في سن 16 عاماً وانتقلت إلى المملكة المتحدة من خلال برنامج لم الشمل العائلي. رغم مواجهة حواجز اللغة والتحديات الأولية في متابعة تعليمها، علمت نفسها اللغة الإنجليزية وتغلبت على العديد من العقبات لتأمين مكانها في المدرسة. من خلال المثابرة والعزيمة، حققت مايا حلمها في أن تصبح أول طيارة لاجئة سورية في سن 21. اليوم، تعمل كطيارة ومهندسة وسفيرة النوايا الحسنة لدى المفوضية السامية للأمم المتحدة لشؤون اللاجئين، ملهمة الآخرين أن أي شيء ممكن مع العقلية الصحيحة والدعم المناسب.',
        keyAchievement: 'أول طيارة لاجئة سورية، سفيرة النوايا الحسنة لدى المفوضية السامية للأمم المتحدة لشؤون اللاجئين',
        country: 'المملكة المتحدة',
        image: '/lovable-uploads/d7939d67-66f6-4e0d-9ecb-b43d2e214eda.png'
      },
      {
        id: 'jennifer-germany',
        studentName: 'جينيفر',
        title: 'التميز الأكاديمي في ألمانيا',
        summary: 'مسار جينيفر: من دبي إلى النجاح الجامعي الألماني',
        fullStory: 'جينيفر، طالبة سورية ولدت وترعرعت في دبي، انتقلت بنجاح من المدرسة الدولية شويفات في الشارقة لمتابعة درجة البكالوريوس في ألمانيا. انتقلت إلى ألمانيا في سن 17 عاماً في عام 2014، واختارت ألمانيا بدلاً من الولايات المتحدة بسبب قربها من العائلة وفرصة تعلم اللغتين الإنجليزية والألمانية. تخرجت جينيفر مؤخراً بدرجة البكالوريوس وتشعر أنها اتخذت خطوة مهمة في إسعاد والديها.',
        keyAchievement: 'إكمال درجة البكالوريوس بنجاح في ألمانيا، إتقان لغتين',
        country: 'ألمانيا',
        image: '/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png'
      },
      {
        id: 'amr-uk',
        studentName: 'عمرو',
        title: 'من لاجئ إلى خريج جامعي في بريطانيا',
        summary: 'انتصار عمرو: التغلب على الشدائد من خلال التعليم',
        fullStory: 'عمرو، لاجئ سوري، واجه ظروفاً تهدد الحياة أجبرت عائلته على الفرار من سوريا بعد المشاركة في مظاهرات سياسية. بعد البحث عن ملجأ في لبنان في البداية، تم اختيار عائلته في النهاية للانتقال إلى المملكة المتحدة. رغم المخاوف الأولية حول تكاليف التعليم والأهلية، اكتشف عمرو فرص منح دراسية مصممة خصيصاً للاجئين في جامعة هيرتفوردشاير. من خلال دعم المتطوعين المحليين وبرنامج المنح الدراسية للاجئين في الجامعة، تابع عمرو بنجاح التعليم العالي في المملكة المتحدة.',
        keyAchievement: 'التعليم الجامعي في المملكة المتحدة من خلال برنامج المنح الدراسية للاجئين',
        country: 'المملكة المتحدة',
        university: 'جامعة هيرتفوردشاير',
        image: '/lovable-uploads/a3ebc772-a1f3-42d0-9c45-03d9c677e2a6.png'
      },
      {
        id: 'yunus-wales',
        studentName: 'يونس',
        title: 'تميز في درجة الماجستير في ويلز',
        summary: 'إنجاز يونس: دراسات قانونية متخصصة في جامعة سوانسي',
        fullStory: 'يونس عسفاري من سوريا اختار جامعة سوانسي لدرجة الماجستير في القانون في حقوق الإنسان، منجذباً بمحتوى الدورة وترتيب الجامعة والموقع الساحلي في جنوب ويلز. يركز برنامج الماجستير في القانون على التحديات المعاصرة بما في ذلك المراقبة الرقمية وحماية البيئة والإرهاب وقضايا الهجرة. يستمتع يونس بشكل خاص بالمناقشات الدولية مع الطلاب من خلفيات متنوعة ويقدر سحر سوانسي الفريد كمدينة ساحلية.',
        keyAchievement: 'درجة الماجستير في القانون متخصصة في قانون حقوق الإنسان',
        country: 'المملكة المتحدة',
        university: 'جامعة سوانسي',
        image: '/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png'
      },
      {
        id: 'esraa-jordan',
        studentName: 'إسراء',
        title: 'كسر الحواجز في علوم الحاسوب',
        summary: 'ابتكار إسراء: نجاح في تطوير الويب في الأردن',
        fullStory: 'بعد الفرار من الصراع في سوريا، كانت إسراء في البداية غير متأكدة من متابعة تعليمها في الأردن. رغم الصور النمطية التي تشير إلى أن علوم الحاسوب مخصصة في المقام الأول للرجال، ثابرت وعملت بجد لتحقيق درجتها في علوم الحاسوب. اليوم، تعمل إسراء كمطورة ويب ناجحة ومستقلة، تقوم بإنشاء مواقع ويب من الصفر للشركات الصغيرة في الأردن وحول العالم.',
        keyAchievement: 'مطورة ويب ناجحة ورائدة أعمال، كسر الحواجز الجنسانية في التكنولوجيا',
        country: 'الأردن',
        image: '/lovable-uploads/c591c245-e976-4338-939b-f22ccec167ab.png'
      }
    ];
  }

  return [
    {
      id: 'maya-pilot',
      studentName: 'Maya',
      title: 'From Damascus to Global Success',
      summary: 'Maya\'s Journey: Syrian Student Becomes Pilot and Engineer',
      fullStory: 'Maya fled Damascus in 2015 at age 16 and relocated to the United Kingdom through a family reunification program. Despite facing language barriers and initial challenges in continuing her education, she taught herself English and overcame numerous obstacles to secure her place in school. Through persistence and determination, Maya fulfilled her dream of becoming the first female Syrian refugee pilot at age 21. Today, she serves as a pilot, engineer, and UNHCR Goodwill Ambassador, inspiring others that anything is possible with the right mindset and support.',
      keyAchievement: 'First female Syrian refugee pilot, UNHCR Goodwill Ambassador',
      country: 'United Kingdom',
      image: '/lovable-uploads/d7939d67-66f6-4e0d-9ecb-b43d2e214eda.png'
    },
    {
      id: 'jennifer-germany',
      studentName: 'Jennifer',
      title: 'Academic Excellence in Germany',
      summary: 'Jennifer\'s Path: From Dubai to German University Success',
      fullStory: 'Jennifer, a Syrian student born and raised in Dubai, successfully transitioned from the International School Choueifat in Sharjah to pursue her Bachelor\'s degree in Germany. Moving to Germany at age 17 in 2014, she chose Germany over the United States due to its proximity to family and the opportunity to learn both English and German languages. Jennifer recently graduated with her Bachelor\'s degree and feels she has taken a significant step forward in making her parents proud.',
      keyAchievement: 'Successful Bachelor\'s degree completion in Germany, bilingual proficiency',
      country: 'Germany',
      image: '/lovable-uploads/266da83c-19ae-41d9-b291-60b8b0b9136a.png'
    },
    {
      id: 'amr-uk',
      studentName: 'Amr',
      title: 'From Refugee to UK University Graduate',
      summary: 'Amr\'s Triumph: Overcoming Adversity Through Education',
      fullStory: 'Amr, a Syrian refugee, faced life-threatening circumstances that forced his family to flee Syria after participating in political demonstrations. After initially seeking refuge in Lebanon, his family was eventually selected to relocate to the UK. Despite initial concerns about educational costs and eligibility, Amr discovered scholarship opportunities specifically designed for refugees at the University of Hertfordshire. Through the support of local volunteers and the university\'s refugee scholarship program, Amr successfully pursued higher education in the UK.',
      keyAchievement: 'University education in the UK through refugee scholarship program',
      country: 'United Kingdom',
      university: 'University of Hertfordshire',
      image: '/lovable-uploads/a3ebc772-a1f3-42d0-9c45-03d9c677e2a6.png'
    },
    {
      id: 'yunus-wales',
      studentName: 'Yunus',
      title: 'Master\'s Degree Excellence in Wales',
      summary: 'Yunus\'s Achievement: Specialized Legal Studies at Swansea University',
      fullStory: 'Yunus Asfari from Syria chose Swansea University for his Master of Laws in Human Rights, attracted by the course content, university ranking, and the coastal location in South Wales. The LLM program focuses on contemporary challenges including digital surveillance, environmental protection, terrorism, and migration issues. Yunus particularly enjoys the international discussions with students from diverse backgrounds and appreciates Swansea\'s unique charm as a coastal city.',
      keyAchievement: 'Master of Laws degree specializing in Human Rights law',
      country: 'United Kingdom',
      university: 'Swansea University',
      image: '/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png'
    },
    {
      id: 'esraa-jordan',
      studentName: 'Esraa',
      title: 'Breaking Barriers in Computer Science',
      summary: 'Esraa\'s Innovation: Web Development Success in Jordan',
      fullStory: 'After fleeing conflict in Syria, Esraa was initially uncertain about continuing her education in Jordan. Despite stereotypes suggesting computer science was primarily for men, she persevered and worked hard to achieve her degree in computer science. Today, Esraa works as a successful web developer and freelancer, creating websites from scratch for small businesses in Jordan and around the world.',
      keyAchievement: 'Successful web developer and entrepreneur, breaking gender barriers in technology',
      country: 'Jordan',
      image: '/lovable-uploads/c591c245-e976-4338-939b-f22ccec167ab.png'
    }
  ];
};
