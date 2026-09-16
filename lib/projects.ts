export interface Project {
  slug: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  description?: string;
  descriptionAr?: string;

  image: string;
  coverImage?: string;
  gallery?: string[];

  technologies: string[];

  role?: string;
  roleAr?: string;
  year?: string;
  status?: string;

  featured?: boolean;

  liveUrl?: string;
  githubUrl?: string;

  challenge?: string;
  challengeAr?: string;
  solution?: string;
  solutionAr?: string;
  technicalDecisions?: string[];
  features?: string[];
  featuresAr?: string[];
  outcome?: string;
  outcomeAr?: string;
}

export const projects: Project[] = [
  {
    slug: "gardenia",
    title: "Gardenia",
    titleAr: "جاردينيا — تجربة التسوق الزهري الفاخرة",
    category: "E-Commerce",
    categoryAr: "تجارة إلكترونية",
    shortDescription: "A premium floral e-commerce experience combining editorial design, intuitive product discovery, bouquet customization, thoughtful gifting, and a seamless responsive shopping journey.",
    shortDescriptionAr: "تجربة تسوق إلكتروني فاخرة للزهور تجمع بين التصميم التحريري الرفيع، استكشاف المنتجات، تخصيص الباقات، والهدايا المدروسة عبر رحلة تسوق سلسة ومتجاوبة.",
    description: "Gardenia is a modern floral e-commerce experience designed to transform the traditional process of ordering flowers into something more personal, elegant, and memorable.\n\nThe platform combines a luxury editorial design with an intuitive shopping experience, allowing customers to discover curated floral collections, shop by flower or occasion, customize their own bouquet, add thoughtful gifts, and complete their order through a seamless checkout journey.",
    descriptionAr: "تعتبر جاردينيا منصة تسوق إلكتروني معاصرة مصممة لتحويل العملية التقليدية لطلب الزهور إلى تجربة شخصية، أنيقة ومميزة.\n\nتجمع المنصة بين التصميم التحريري الفاخر وتجربة التسوق التفاعلية السلسة، مما يتيح للعملاء اكتشاف مجموعات الزهور المختارة، التسوق حسب المناسبة أو نوع الزهر، تصميم باقاتهم الخاصة، إضافة الهدايا، وإتمام الطلب عبر تدفق دفع غير مسبوق.",
    image: "/gardenia/hero.png",
    coverImage: "/gardenia/hero.png",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    role: "Product Designer & Frontend Engineer",
    roleAr: "مصممة منتج ومطورة واجهات مستخدم",
    year: "2026",
    status: "Completed",
    featured: true,
    liveUrl: "https://gardenia-five.vercel.app/",
    githubUrl: "https://github.com/SajaJawad/Gardenia",
    challenge: "Most flower e-commerce experiences focus heavily on product grids and checkout, often losing the emotional quality associated with flowers and gifting.\n\nThe challenge with Gardenia was to balance two different goals:\n\n\"Create a visually rich, premium brand experience while keeping the shopping journey simple, fast, and intuitive.\"\n\nThe interface therefore needed to feel expressive without becoming distracting, and sophisticated without making basic commerce actions difficult to find.",
    challengeAr: "تركز معظم تجارب التجارة الإلكترونية للزهور بشكل مكثف على شبكات المنتجات وإجراءات الدفع، مما يفقدها غالبًا الطابع العاطفي المرتبط بإهداء الزهور.\n\nكان التحدي في جاردينيا هو الموازنة بين هدفين مختلفين:\n\n\"ابتكار تجربة علامة تجارية غنية بصرياً وفاخرة مع الحفاظ على رحلة تسوق بسيطة وسريعة وسلسة.\"\n\nلذلك كان لا بد للواجهة أن تبدو معبرة دون أن تصبح مشتتة، ومتقدمة دون جعل إجراءات الشراء الأساسية صعبة المنال.",
    solution: "Gardenia was designed around an editorial, story-driven shopping experience.\n\nLarge floral imagery, warm neutral backgrounds, soft pink accents, elegant typography, generous whitespace, and subtle motion establish the visual identity.\n\nBehind that visual layer is a structured commerce experience where customers can move naturally from inspiration to product discovery, customization, cart, and checkout.\n\nThe experience was designed responsively from the beginning, ensuring that the visual richness of the desktop interface translates naturally to tablets and mobile devices.",
    solutionAr: "تم تصميم جاردينيا حول تجربة تسوق قوامها السرد البصري والأسلوب التحريري.\n\nتُنشئ الصور الزهرية الكبيرة، الخلفيات المحايدة الدافئة، لمسات الوردي الناعم، الخطوط الأنيقة، والمساحات البيضاء السخية الهوية البصرية اللائقة.\n\nوراء تلك الطبقة البصرية توجد تجربة تجارية مهيكلة تتيح للعملاء الانتقال بسلاسة من الإلهام إلى استكشاف المنتجات، التخصيص، سلة التسوق، والدفع.\n\nتم تصميم التجربة بتجاوب تام منذ البداية لضمان انتقال الثراء البصري لشاشات السطح المكتبي بسلاسة للأجهزة اللوحية والمحمولة.",
    features: [
      "Product discovery path by flower varieties & occasion collections",
      "Custom Bouquet Studio with live order summary and dynamic pricing",
      "Personalized gift messaging, extras, and wrapping customization",
      "AI-assisted floral arrangement preview concept",
      "Responsive commerce interface optimized for mobile, tablet, and desktop"
    ],
    featuresAr: [
      "مسار استكشاف المنتجات حسب أنواع الزهور ومجموعات المناسبات",
      "استوديو تخصيص الباقات التفاعلي مع ملخص مباشر للطلب وتسعير ديناميكي",
      "إرسال رسائل الإهداء الشخصية وتخصيص التغليف والإضافات",
      "مفهوم المعاينة الذكية لتشكيلات الزهور قبل الطلب",
      "واجهة تجارة متجاوبة بالكامل ومحسنة للجوال واللوحي والمكتبي"
    ]
  },
  {
    slug: "aetheris-ai",
    title: "Subsec V2 — AI Technology Website",
    titleAr: "موقع Subsec V2 — منصة تقنيات الذكاء الاصطناعي",
    category: "AI Platform",
    categoryAr: "منصة ذكاء اصطناعي",
    shortDescription: "A modern and responsive corporate website developed for an artificial intelligence technology company showcasing computer vision, robotics, Edge AI, and accessibility technologies.",
    shortDescriptionAr: "موقع موقع شركة حديث ومتجاوب تم تطويره لشركة تقنيات ذكاء اصطناعي يعرض مجالات الرؤية الحاسوبية والروبوتات والذكاء الاصطناعي للطرفيات وتقنيات الإتاحة.",
    description: "A modern and responsive corporate website developed for an artificial intelligence technology company. The platform showcases advanced AI solutions including computer vision, video analytics, robotics, Edge AI, and accessibility technologies through a premium, technology-driven user experience.\n\nThe project focuses on responsive design, reusable components, smooth animations, visual storytelling, and optimized layouts across desktop, tablet, and mobile devices, providing a professional digital presence for complex AI products and services.",
    descriptionAr: "موقع رسمي حديث ومتجاوب لشركة تقنيات ذكاء اصطناعي، يهدف لنشر حلول الذكاء الاصطناعي المتقدمة بما في ذلك الرؤية الحوسبية وتحليل الفيديو والروبوتات والذكاء الاصطناعي على الحافة (Edge AI) وتقنيات التيسير والإتاحة عبر تجربة تفاعلية برمجية احترافية.\n\nيركز المشروع على التجاوب التام، إعادة استخدام المكونات البرمجية، الحركات التفاعلية السلسة، السرد البصري، وتحسين الأداء على الأجهزة المكتبية واللوحية والمحمولة.",
    image: "/View.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "Component-Based Architecture", "Vercel"],
    role: "Frontend Developer",
    roleAr: "مطورة واجهات مستخدم",
    year: "2025",
    status: "Completed",
    featured: true,
    liveUrl: "https://subsec-v2.vercel.app/",
    githubUrl: "https://github.com/SajaJawad",
    features: [
      "Advanced AI solutions showcase (computer vision, video analytics, robotics, Edge AI)",
      "Component-based architecture with smooth animations & visual storytelling",
      "Optimized responsive layouts across desktop, tablet, and mobile devices"
    ],
    featuresAr: [
      "معرض شامل لحلول الذكاء الاصطناعي المتقدمة (الرؤية الحوسبية، تحليلات الفيديو، الروبوتات)",
      "بنية مكونات برمجية قابلة لإعادة الاستخدام مع تأثيرات بصرية وسرد تفاعلي",
      "تخطيطات متجاوبة محسنة كلياً للأجهزة المكتبية واللوحية والجوال"
    ]
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker — Full-Stack FinTech Application",
    titleAr: "تطبيق Expense Tracker — إدارة المالية والحسابات",
    category: "Full Stack",
    categoryAr: "تطبيق كامل (Full Stack)",
    shortDescription: "A modern full-stack personal finance management platform designed to help users take control of their finances through a clean and intuitive FinTech experience.",
    shortDescriptionAr: "منصة حديثة ومتكاملة لإدارة المالية الشخصية تُساعد المستخدمين على التحكم الكامل بميزانياتهم ومصروفاتهم عبر تجربة تقنية مالية (FinTech) سلسة ومبتكرة.",
    description: "A modern full-stack personal finance management platform designed to help users take control of their finances through a clean and intuitive FinTech experience. Users can securely manage income and expenses, set monthly budgets, track financial performance, analyze spending patterns through interactive charts, and export financial data.\n\nThe platform features a responsive dashboard, real-time financial insights, advanced transaction filtering, dark/light mode, multilingual support, smooth animations, and secure user authentication. Built with a scalable REST API architecture and a modern responsive interface optimized for desktop and mobile.",
    descriptionAr: "منصة تقنية مالية متكاملة لإدارة المصروفات والدخل الشخصي تمكن المستخدمين من التحكم بميزانياتهم بكل سهولة وأمان. تتيح المنصة تسجيل المعاملات المالية، تحديد الميزانيات الشهرية، تحليل أنماط الإنفاق عبر رسوم بيانية تفاعلية، وتصدير التقارير المالية.\n\nتتميز المنصة بلوحة تحكم متجاوبة، تحليلات مالية فورية، فلترة متقدمة للمعاملات، دعم الوضع الداكن والفاتح، وحماية البيانات عبر مصادقة JWT وهندسة REST APIs واعدة.",
    image: "/expense-tracker.jpg",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Supabase", "REST APIs", "JWT Authentication", "Recharts", "Axios"],
    role: "Full Stack Developer",
    roleAr: "مطورة برمجيات كاملة (Full Stack)",
    year: "2024",
    status: "Completed",
    featured: false,
    liveUrl: "https://expense-final-beta.vercel.app/",
    githubUrl: "https://github.com/SajaJawad/Expense-Tracker",
    features: [
      "Secure income & expense management with monthly budgeting & spending analytics",
      "Real-time financial dashboard with interactive Recharts data visualization",
      "Advanced transaction filtering, dark/light mode & multilingual support",
      "Scalable REST API architecture with JWT authentication & Supabase integration"
    ],
    featuresAr: [
      "إدارة آمنة للدخل والمصروفات وتحديد الميزانيات الشهرية مع تحليلات الإنفاق",
      "لوحة تحكم مالية تفاعلية تتضمن رسوم بيانية مدعومة بمكتبة Recharts",
      "فلترة متقدمة للمعاملات ودعم الوضع الداكن/الفاتح وتعدد اللغات",
      "هيكلية برمجية قابلة للتوسع بـ REST API ومصادقة JWT وتكامل مع Supabase"
    ]
  },
  {
    slug: "e-commerce-platform",
    title: "Grocery E-Commerce — Next.js Web Application",
    titleAr: "تطبيق E-Commerce للتسوق الإلكتروني — Next.js",
    category: "Frontend",
    categoryAr: "واجهات مستخدم (Frontend)",
    shortDescription: "A modern and responsive e-commerce web application built with Next.js, designed to provide a smooth online shopping experience.",
    shortDescriptionAr: "تطبيق ويب حديث ومتجاوب للتسوق الإلكتروني تم بناؤه باستخدام Next.js لتوفير تجربة شراء سلسة وممتعة عبر الإنترنت.",
    description: "A modern and responsive e-commerce web application built with Next.js, designed to provide a smooth online shopping experience. The platform features product browsing, user authentication, interactive product interfaces, cart and checkout flows, and a responsive UI optimized for different screen sizes. Built with a component-based architecture and reusable UI elements to deliver a clean, scalable, and user-friendly shopping experience.",
    descriptionAr: "تطبيق تسوق إلكتروني متكامل وعصري تم بناؤه بأحدث تقنيات Next.js و React لتوفير تجربة تسوق سريعة وممتازة. يغطي التطبيق تصفح المنتجات، البحث والفلترة الفورية، إدارة سلة الشراء التفاعلية، وإجراءات الدفع وحساب المشتريات بكل سلاسة على جميع الأجهزة.",
    image: "/Econm.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Axios", "Radix UI", "Lucide React", "Embla Carousel"],
    role: "Frontend Engineer",
    roleAr: "مهندسة واجهات مستخدم",
    year: "2024",
    status: "Completed",
    featured: false,
    liveUrl: "https://ecommerce-clothing-store-ten.vercel.app/",
    githubUrl: "https://github.com/SajaJawad/GroceryApp_NextJs",
    features: [
      "Product browsing catalog with category filtering & instant search",
      "Interactive cart drawer and streamlined checkout user flow",
      "Component-based architecture built with Radix UI & Embla Carousel"
    ],
    featuresAr: [
      "كتالوج تصفح منتجات مدعوم بفلترة الفئات والبحث الفوري",
      "سلة شراء تفاعلية وتدفق دفع منسق وسهل الاستخدام",
      "بنية برمجية معتمدة على المكونات باستخدام Radix UI و Embla Carousel"
    ]
  },
  {
    slug: "subsec-landing-page",
    title: "SubSec.ai — Artificial Intelligence Corporate Website",
    titleAr: "موقع SubSec.ai — منصة حلول الذكاء الاصطناعي",
    category: "Frontend",
    categoryAr: "واجهات مستخدم (Frontend)",
    shortDescription: "A modern corporate website for an AI technology company focused on advanced real-world artificial intelligence solutions.",
    shortDescriptionAr: "موقع رسمي حديث لشركة تقنيات ذكاء اصطناعي متخصصة في تقديم حلول الذكاء الاصطناعي المتقدمة للتطبيقات الواقعية.",
    description: "A modern corporate website for an AI technology company focused on advanced real-world artificial intelligence solutions. The platform presents SubSec’s vision, AI solutions, global presence, and flagship HearUs™ sign-language accessibility platform through a clean, technology-driven and responsive interface.\n\nThe website is designed to communicate complex AI services clearly while providing an engaging experience across desktop and mobile devices, with structured solution showcases, company information, global partnerships, and streamlined contact experiences.",
    descriptionAr: "موقع تعريفي واعد لشركة SubSec للذكاء الاصطناعي يعرض رؤية الشركة وحلولها الذكية المتطورة وحضورها العالمي ومنصتها المبتكرة HearUs™ لتيسير لغة الإشارة.\n\nتم تصميم الموقع لإيصال خدمات الذكاء الاصطناعي المعقدة بأسلوب بصري جذاب وواضح، مع إتاحة تجربة تصفح سلسة على مختلف الشاشات والأجهزة الجوالة.",
    image: "/image.png",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer",
    roleAr: "مطورة واجهات مستخدم",
    year: "2024",
    status: "Completed",
    featured: false,
    liveUrl: "https://subsec.cz/",
    githubUrl: "https://github.com/SajaJawad/Subsec_LandingPage",
    features: [
      "Showcase of SubSec’s vision, AI solutions & HearUs™ sign-language accessibility platform",
      "High-contrast editorial corporate layout optimized for desktop and mobile",
      "Structured solution showcases, global partnerships & streamlined contact flow"
    ],
    featuresAr: [
      "عرض لرؤية SubSec وحلولها الذكية ومنصة HearUs™ لتيسير التواصل بلغة الإشارة",
      "تصميم رسمي رفيع المستوى ومحسن كلياً للشاشات المكتبية والجوالة",
      "عرض منظم للحلول والشراكات العالمية وتسهيل تواصل العملاء"
    ]
  },
  {
    slug: "luma-studio",
    title: "Luma Studio",
    titleAr: "لوما ستوديو — بيئة الذكاء الاصطناعي",
    category: "Frontend",
    categoryAr: "واجهات مستخدم (Frontend)",
    shortDescription: "AI-assisted media creation workspace with interactive canvas and component controls.",
    shortDescriptionAr: "مساحة عمل مدعومة بالذكاء الاصطناعي لإنشاء وتطوير الوسائط الرقمية مع أدوات تحكم تفاعلية.",
    description: "Luma Studio combines Next.js framework capabilities with AI integration for rich, interactive digital asset workflows.",
    descriptionAr: "يجمع مشروع Luma Studio بين إمكانيات أطر العمل الحديثة في Next.js وتقنيات الذكاء الاصطناعي لبناء مساحات عمل رقمية تفاعلية غنية.",
    image: "/luma.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Frontend Engineer",
    roleAr: "مهندسة واجهات مستخدم",
    year: "2025",
    status: "Completed",
    featured: false,
    liveUrl: "https://next-with-ai-eight.vercel.app/",
    githubUrl: "https://github.com/SajaJawad/Next-With-AI.git",
    features: [
      "Interactive studio canvas interface",
      "Integration with AI utility endpoints",
      "Clean modular component architecture"
    ],
    featuresAr: [
      "واجهة لوحة تفاعلية لإدارة الأصول الرقمية",
      "ربط وتكامل مع خدمات الذكاء الاصطناعي",
      "بنية مكونات نموذجية ونظيفة"
    ]
  },
];
