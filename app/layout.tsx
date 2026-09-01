import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://sajajawad.vercel.app"
);

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0910" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Saja Jawad — Software Engineer",
    template: "%s | Saja Jawad",
  },
  description:
    "Portfolio of Saja Jawad, a Software Engineer specializing in Frontend Engineering, Next.js, React, TypeScript, and thoughtful web user interfaces.",
  keywords: [
    "Saja Jawad",
    "Software Engineer",
    "Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Engineering",
  ],
  authors: [{ name: "Saja Jawad", url: "https://github.com/SajaJawad" }],
  creator: "Saja Jawad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sajajawad.vercel.app",
    title: "Saja Jawad — Software Engineer",
    description:
      "Software Engineer specializing in Frontend Engineering, Next.js, React, TypeScript, and clean digital experiences.",
    siteName: "Saja Jawad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saja Jawad — Software Engineer",
    description:
      "Software Engineer specializing in Frontend Engineering, Next.js, React, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saja Jawad",
  jobTitle: "Software Engineer",
  url: "https://sajajawad.vercel.app",
  sameAs: [
    "https://github.com/SajaJawad",
  ],
  knowsAbout: [
    "Software Engineering",
    "Frontend Engineering",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "User Interface Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }

                  var savedLang = localStorage.getItem('language');
                  if (savedLang === 'ar') {
                    document.documentElement.lang = 'ar';
                    document.documentElement.dir = 'rtl';
                  } else {
                    document.documentElement.lang = 'en';
                    document.documentElement.dir = 'ltr';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-200`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <ToastProvider>{children}</ToastProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
