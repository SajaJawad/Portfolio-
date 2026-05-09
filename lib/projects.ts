export interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Aetheris AI",
    category: "AI Platform",
    image: "/View.png",
    link: "https://subsec-v2.vercel.app/",
    github: "https://github.com/SajaJawad", // Defaulting to profile if specific repo not known, or user didn't provide
  },
  {
    title: "Expense Tracker",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/SajaJawad/Expense-Tracker",
    github: "https://github.com/SajaJawad/Expense-Tracker",
  },
  {
    title: "E-commerce Platform",
    category: "NextJs",
    image: "/Econm.png",
    link: "https://github.com/SajaJawad/GroceryApp_NextJs",
    github: "https://github.com/SajaJawad/GroceryApp_NextJs",
  },
  {
    title: "Subsec Landing Page",
    category: "NextJs",
    image: "/image.png",
    link: "https://github.com/SajaJawad/Subsec_LandingPage",
    github: "https://github.com/SajaJawad/Subsec_LandingPage",
  },
  {
    title: "Luma Studio",
    category: "NextJs",
    image: "/luma.png",
    link: "https://next-with-ai-eight.vercel.app/",
    github: "https://github.com/SajaJawad/Next-With-AI.git",
  },
];
