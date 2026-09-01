export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    about: string;
    journey: string;
    projects: string;
    stack: string;
    services: string;
    contact: string;
  };
  hero: {
    availableStatus: string;
    greeting: string;
    name: string;
    roleHeadline: string;
    bioLead: string;
    bioFrontend: string;
    bioNextJs: string;
    bioReact: string;
    bioBody: string;
    viewWork: string;
    downloadResume: string;
    focus: string;
    badgeRole: string;
    badgeTech: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    caseStudy: string;
    quickView: string;
    liveDemo: string;
    sourceCode: string;
    allProjectsTitle: string;
    allProjectsSubtitle: string;
    backToHome: string;
    selectedWorksCount: string;
    overview: string;
    challenge: string;
    solution: string;
    features: string;
    outcome: string;
    category: string;
    role: string;
    timeline: string;
    links: string;
    visitLiveSite: string;
    githubRepo: string;
    nextProject: string;
    allProjectsLink: string;
    backToAllProjects: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      frontendTitle: string;
      frontendDesc: string;
      nextJsTitle: string;
      nextJsDesc: string;
      responsiveTitle: string;
      responsiveDesc: string;
      uiTitle: string;
      uiDesc: string;
      apiTitle: string;
      apiDesc: string;
      perfTitle: string;
      perfDesc: string;
    };
  };
  stack: {
    badge: string;
    title: string;
    subtitle: string;
    coreTitle: string;
    stylingTitle: string;
    toolsTitle: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step4Title: string;
      step4Desc: string;
      step5Title: string;
      step5Desc: string;
    };
  };
  currently: {
    buildingLabel: string;
    buildingVal: string;
    learningLabel: string;
    learningVal: string;
    openToLabel: string;
    openToVal: string;
  };
  signals: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    educationTitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    getInTouch: string;
    getInTouchSub: string;
    emailLabel: string;
    copy: string;
    copied: string;
    sendDirectEmail: string;
    location: string;
    socialChannels: string;
    sendMessage: string;
    sendMessageSub: string;
    yourName: string;
    yourNamePlaceholder: string;
    yourEmail: string;
    yourEmailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendWhatsApp: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      journey: "Journey",
      projects: "Projects",
      stack: "Stack",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      availableStatus: "Available for opportunities",
      greeting: "I'm",
      name: "Saja Jawad",
      roleHeadline: "Software Engineer crafting thoughtful digital experiences.",
      bioLead: "Specializing in",
      bioFrontend: "Frontend Engineering",
      bioNextJs: "Next.js",
      bioReact: "React",
      bioBody: ". I focus on UI-focused product development, performance, and clean interactive architecture.",
      viewWork: "View selected work",
      downloadResume: "Download résumé",
      focus: "Focus:",
      badgeRole: "Software Engineer",
      badgeTech: "Next.js & React",
    },
    projects: {
      badge: "Selected Work",
      title: "Featured Projects",
      subtitle: "Software engineering projects built with focus on UI quality and performance.",
      viewAll: "View all projects",
      caseStudy: "Case Study",
      quickView: "Quick View",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      allProjectsTitle: "All Projects",
      allProjectsSubtitle: "A comprehensive showcase of web applications, platforms, and interactive interfaces built with Next.js, React, and TypeScript.",
      backToHome: "Back to Home",
      selectedWorksCount: "selected works",
      overview: "Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      features: "Key Features & Technical Details",
      outcome: "Outcome",
      category: "Category",
      role: "Role",
      timeline: "Timeline",
      links: "Links",
      visitLiveSite: "Visit Live Site",
      githubRepo: "GitHub Repository",
      nextProject: "Next Project",
      allProjectsLink: "All Projects",
      backToAllProjects: "Back to all projects",
    },
    services: {
      badge: "Capabilities",
      title: "Engineering Specializations",
      subtitle: "Core technical capabilities focused on producing high-quality frontend software.",
      items: {
        frontendTitle: "Frontend Engineering",
        frontendDesc: "Building resilient, type-safe web frontends using React 19, Next.js 16, and modern JavaScript.",
        nextJsTitle: "Next.js Applications",
        nextJsDesc: "Architecting web apps with App Router, Server Components, and optimized client boundaries.",
        responsiveTitle: "Responsive Interfaces",
        responsiveDesc: "Designing adaptive user layouts with Tailwind CSS 4, maintaining visual integrity on all viewports.",
        uiTitle: "UI Engineering & Motion",
        uiDesc: "Creating fluid micro-interactions and smooth page transitions using Framer Motion.",
        apiTitle: "API Integration",
        apiDesc: "Connecting user interfaces seamlessly to RESTful APIs, asynchronous services, and data providers.",
        perfTitle: "Performance & Web Vitals",
        perfDesc: "Optimizing image loading, asset bundles, layout shifts, and client render cycles.",
      },
    },
    stack: {
      badge: "Stack",
      title: "Tools I build with",
      subtitle: "Curated technologies and modern tooling used to craft reliable software applications.",
      coreTitle: "Core & Frameworks",
      stylingTitle: "Styling & Motion",
      toolsTitle: "Tools & Workflow",
    },
    process: {
      badge: "Process",
      title: "How I Work",
      subtitle: "A structured, iterative engineering process ensuring quality software delivery.",
      steps: {
        step1Title: "Understand",
        step1Desc: "Analyze core project requirements, user needs, technical constraints, and data flows.",
        step2Title: "Design & Architecture",
        step2Desc: "Define component hierarchies, state models, design tokens, and routing structure.",
        step3Title: "Build",
        step3Desc: "Develop clean, type-safe Next.js/React code with responsive Tailwind CSS styling.",
        step4Title: "Refine & Test",
        step4Desc: "Audit responsiveness, accessibility, performance bottlenecks, and interaction details.",
        step5Title: "Ship",
        step5Desc: "Deploy to production environment with continuous integration and static optimization.",
      },
    },
    currently: {
      buildingLabel: "Currently Building",
      buildingVal: "Next.js 16 & React 19 web applications with Tailwind CSS 4",
      learningLabel: "Currently Learning",
      learningVal: "Advanced Web Performance & Accessibility Standards",
      openToLabel: "Open To",
      openToVal: "Software Engineering & Frontend Developer opportunities",
    },
    signals: {
      item1: "Software Engineering",
      item2: "Frontend Development",
      item3: "Responsive Interfaces",
      item4: "Performance & Web Vitals",
      item5: "UI Engineering",
      item6: "Component Architecture",
    },
    experience: {
      badge: "Experience",
      title: "Career Journey & Growth",
      subtitle: "Timeline of software engineering projects, practical training, and academic background.",
    },
    about: {
      badge: "About Me",
      title: "Passionate about building intuitive software",
      subtitle: "Software engineer dedicated to frontend excellence, performant web applications, and modern UI systems.",
      bioParagraph1: "I am a Software Engineer based in Palestine with a strong focus on Frontend Engineering, Next.js, React, and TypeScript. I enjoy turning complex challenges into clean, performant, and accessible digital products.",
      bioParagraph2: "Throughout my journey, I have built web applications ranging from FinTech cashflow platforms to interactive AI corporate websites and e-commerce applications, prioritizing code cleaniness, design precision, and smooth user experiences.",
      educationTitle: "Education & Certifications",
    },
    contact: {
      badge: "Contact",
      title: "Have an idea? Let's build it.",
      subtitle: "Feel free to reach out for project inquiries, engineering roles, or technical discussions.",
      getInTouch: "Get In Touch",
      getInTouchSub: "Whether you have a specific software project in mind or want to discuss engineering opportunities, I'll be glad to connect.",
      emailLabel: "Email Address",
      copy: "Copy",
      copied: "Copied",
      sendDirectEmail: "Send direct email",
      location: "Palestine",
      socialChannels: "Verified Social Channels",
      sendMessage: "Send a Message",
      sendMessageSub: "Submitting this form prepares a formatted message sent directly via WhatsApp.",
      yourName: "Your Name",
      yourNamePlaceholder: "Jane Doe",
      yourEmail: "Your Email",
      yourEmailPlaceholder: "jane@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project or inquiry...",
      sendWhatsApp: "Send via WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عنّي",
      journey: "مسيرتي",
      projects: "المشاريع",
      stack: "التقنيات",
      services: "الخدمات",
      contact: "تواصل معي",
    },
    hero: {
      availableStatus: "متاحة للفرص والمشاريع الجديدة",
      greeting: "أنا",
      name: "سجى جواد",
      roleHeadline: "مهندسة برمجيات أبتكر تجارب رقمية مدروسة وعالية الجودة.",
      bioLead: "متخصصة في",
      bioFrontend: "تطوير واجهات المستخدم (Frontend)",
      bioNextJs: "Next.js",
      bioReact: "React",
      bioBody: ". أركز على تطوير المنتجات الموجهة لتجربة المستخدم، الأداء الفائق، والحلول البرمجية التفاعلية.",
      viewWork: "استعرض المشاريع",
      downloadResume: "تحميل السيرة الذاتية",
      focus: "التركيز:",
      badgeRole: "Software Engineer",
      badgeTech: "Next.js & React",
    },
    projects: {
      badge: "أعمال مختارة",
      title: "أبرز المشاريع",
      subtitle: "مشاريع برمجية تم بناؤها بالتركيز على جودة واجهة المستخدم والأداء العالي.",
      viewAll: "عرض كافة المشاريع",
      caseStudy: "دراسة الحالة",
      quickView: "معاينة سريعة",
      liveDemo: "معاينة حية",
      sourceCode: "الكود المصدري",
      allProjectsTitle: "كافة المشاريع",
      allProjectsSubtitle: "معرض شامل لتطبيقات الويب والمنصات الواعده التي تم بناؤها باستخدام Next.js و React و TypeScript.",
      backToHome: "العودة للرئيسية",
      selectedWorksCount: "مشاريع مميزة",
      overview: "نظرة عامة",
      challenge: "التحدي",
      solution: "الحل البرمجي",
      features: "المميزات الرئيسية والتفاصيل التقنية",
      outcome: "النتائج",
      category: "الفئة",
      role: "الدور",
      timeline: "الفترة الزمنية",
      links: "الروابط",
      visitLiveSite: "زيارة الموقع الحي",
      githubRepo: "مستودع GitHub",
      nextProject: "المشروع التالي",
      allProjectsLink: "جميع المشاريع",
      backToAllProjects: "العودة لجميع المشاريع",
    },
    services: {
      badge: "القدرات والخبرات",
      title: "التخصصات البرمجية",
      subtitle: "قدرات تقنية أساسية تركز على إنتاج برمجيات واجهات مستخدم عالية الجودة.",
      items: {
        frontendTitle: "هندسة واجهات المستخدم",
        frontendDesc: "بناء واجهات ويب قوية وآمنة الأنواع باستخدام React 19 و Next.js 16 وأحدث تقنيات JavaScript.",
        nextJsTitle: "تطبيقات Next.js المتطورة",
        nextJsDesc: "هيكلة تطبيقات الويب باستخدام App Router والمكونات الموجهة للسيرفر مع تحسين حدود العميل.",
        responsiveTitle: "واجهات متجاوبة كلياً",
        responsiveDesc: "تصميم تخطيطات تفاعلية باستخدام Tailwind CSS 4 تحافظ على الدقة البصرية عبر جميع الأجهزة.",
        uiTitle: "هندسة الحركات والتفاعل",
        uiDesc: "إبتكار تفاعلات دقيقة وانتقالات سلسة بين الصفحات باستخدام Framer Motion.",
        apiTitle: "ربط وتكامل الـ APIs",
        apiDesc: "ربط واجهات المستخدم بمرونة مع خدمات الـ RESTful APIs والخدمات غير المتزامنة ومزودي البيانات.",
        perfTitle: "الأداء وسرعة التحميل",
        perfDesc: "تحسين تحميل الصور وحزم البرامج وتقليل انزياح التخطيط وضمان سرعة الاستجابة.",
      },
    },
    stack: {
      badge: "التقنيات",
      title: "أدوات التطوير التي أستخدمها",
      subtitle: "مجموعة مختارة من أفضل التقنيات والأدوات الحديثة لبناء تطبيقات برمجية موثوقة.",
      coreTitle: "النواة وأطر العمل",
      stylingTitle: "التصميم والحركة",
      toolsTitle: "الأدوات وسير العمل",
    },
    process: {
      badge: "العمليات",
      title: "آلية وسير العمل",
      subtitle: "عملية برمجية منظمة وتكرارية تضمن تسليم برمجيات عالية الجودة.",
      steps: {
        step1Title: "الفهم والتحليل",
        step1Desc: "تحليل متطلبات المشروع الأساسية، احتياجات المستخدمين، القيود التقنية، وتدفق البيانات.",
        step2Title: "التصميم والتسلسل الهيكلي",
        step2Desc: "تحديد تسلسل المكونات، نماذج الحالة، متغيرات التصميم، وهيكلية التنقل.",
        step3Title: "البناء والتطوير",
        step3Desc: "تطوير كود نظيف وآمن باستخدام Next.js و React وتنسيقات Tailwind CSS متجاوبة.",
        step4Title: "المراجعة والاختبار",
        step4Desc: "اختبار التجاوب، سهولة الوصول، تحسين الأداء، والدقة البصرية في التفاعل.",
        step5Title: "الإطلاق والإنتاج",
        step5Desc: "النشر في بيئة الإنتاج مع النشر المستمر والتحسين الفائق للأداء.",
      },
    },
    currently: {
      buildingLabel: "أقوم ببنائه حالياً",
      buildingVal: "تطبيقات ويب باستخدام Next.js 16 و React 19 و Tailwind CSS 4",
      learningLabel: "أتعلمه حالياً",
      learningVal: "معايير أداء الويب المتقدمة وسهولة الوصول (Accessibility)",
      openToLabel: "متاحة لـ",
      openToVal: "فرص عمل في هندسة البرمجيات وتطوير واجهات المستخدم",
    },
    signals: {
      item1: "هندسة البرمجيات",
      item2: "تطوير واجهات المستخدم",
      item3: "واجهات متجاوبة",
      item4: "الأداء وسرعة التحميل",
      item5: "هندسة التفاعل",
      item6: "بنية المكونات",
    },
    experience: {
      badge: "الخبرة",
      title: "مسيرتي المهنية والتطويرية",
      subtitle: "سجل زمني للمشاريع البرمجية، التدريب العملي، والخلفية الأكاديمية.",
    },
    about: {
      badge: "عنّي",
      title: "شغوفة ببناء برمجيات ذكية وسلسة",
      subtitle: "مهندسة برمجيات مكرسة للتميز في واجهات المستخدم، تطبيقات الويب السريعة، وأنظمة التصميم الحديثة.",
      bioParagraph1: "أنا مهندسة برمجيات مقيمة في فلسطين، أركز بشكل أساسي على هندسة واجهات المستخدم (Frontend)، وتطوير تطبيقات Next.js و React و TypeScript. أحب تحويل التحديات البرمجية المعقدة إلى منتجات رقمية نظيفة، عالية الأداء ومتاحة للجميع.",
      bioParagraph2: "خلال مسيرتي، قمت ببناء تطبيقات ويب تتراوح بين منصات الإدارة المالية ومواقع الشركات التفاعلية القائمة على الذكاء الاصطناعي وتطبيقات التداول، مع إعطاء الأولوية لنقاء الكود، دقة التصميم، وسلاسة تجربة المستخدم.",
      educationTitle: "التعليم والشهادات",
    },
    contact: {
      badge: "التواصل",
      title: "لديك فكرة مشروع؟ لنقم ببنائها.",
      subtitle: "يسعدني التواصل لمناقشة استفسارات المشاريع، الفرص البرمجية، أو المناقشات التقنية.",
      getInTouch: "تواصل معي مباشرة",
      getInTouchSub: "سواء كان لديك مشروع برمي محدد أو ترغب في مناقشة فرص العمل والتعاون البرمجي، يسعدني التواصل معك.",
      emailLabel: "البريد الإلكتروني",
      copy: "نسخ",
      copied: "تم النسخ",
      sendDirectEmail: "إرسال بريد إلكتروني",
      location: "فلسطين",
      socialChannels: "قنوات التواصل الموثقة",
      sendMessage: "إرسال رسالة",
      sendMessageSub: "تعبئة هذا النموذج تجهز رسالة منسقة يتم إرسالها مباشرة عبر واتساب.",
      yourName: "الاسم",
      yourNamePlaceholder: "أحمد علي",
      yourEmail: "البريد الإلكتروني",
      yourEmailPlaceholder: "ahmed@example.com",
      message: "الرسالة",
      messagePlaceholder: "اكتب تفاصيل مشروعك أو استفسارك هنا...",
      sendWhatsApp: "إرسال عبر WhatsApp",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      builtWith: "تم البناء باستخدام Next.js و TypeScript و Tailwind CSS",
    },
  },
};
