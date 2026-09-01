"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Sparkles, Cpu } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t, language } = useLanguage();

  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-primary" />,
      title: language === "ar" ? "بنية تودية نظيفة" : "Clean Architecture",
      description: language === "ar" ? "بناء هياكل برمجية قابلة للتوسع والصيانة متبعةً أفضل الممارسات في TypeScript و React." : "Building scalable, maintainable codebase structures with TypeScript and React best practices.",
    },
    {
      icon: <Layout className="w-5 h-5 text-primary" />,
      title: language === "ar" ? "واجهات مستخدم متجاوبة" : "Responsive Product UI",
      description: language === "ar" ? "صياغة واجهات تفاعلية دقيقة البكسل ومتكيفة بسلاسة عبر جميع أحجام الشاشات والأجهزة." : "Crafting fluid, pixel-perfect user interfaces adaptable across all device display sizes.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: language === "ar" ? "هندسة الحركات والتفاعل" : "UI Engineering & Motion",
      description: language === "ar" ? "دمج التفاعلات الدقيقة والانتقالات البصرية السلسة باستخدام مكتبة Framer Motion." : "Integrating subtle micro-interactions and smooth transitions using Framer Motion.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: language === "ar" ? "الأداء وسهولة الوصول" : "Performance & Accessibility",
      description: language === "ar" ? "تحسين حجم الحزم وأداء العرض وضمان سهولة الوصول للجميع عبر قواعد HTML الدلالية." : "Optimizing bundle size, rendering performance, and semantic HTML for all users.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <Container>
        <SectionHeading
          badge={t.about.badge}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        {/* Editorial Split Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-snug">
              {language === "ar" ? "شغوفة بتحويل المتطلبات البرمجية المعقدة إلى منتجات ويب سلسة وذكية." : "Passionate about turning complex requirements into seamless web products."}
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>{t.about.bioParagraph1}</p>
            <p>{t.about.bioParagraph2}</p>
          </div>
        </div>

        {/* Factual Core Engineering Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-surface shadow-subtle hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-soft-lavender border border-primary/10 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default About;
