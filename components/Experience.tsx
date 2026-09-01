"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Layers, Sparkles } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Experience() {
  const { t, language } = useLanguage();

  const journeyTimeline = [
    {
      icon: <GraduationCap className="w-4 h-4 text-primary" />,
      period: language === "ar" ? "الحالي" : "Current",
      title: language === "ar" ? "بكالوريوس هندسة البرمجيات" : "Software Engineering Degree",
      organization: language === "ar" ? "الدراسة الجامعية" : "University Studies",
      description: language === "ar" ? "التركيز على هندسة البرمجيات، الخوارزميات، هياكل البيانات، وأساسيات تطوير الويب الحديث." : "Focusing on software architecture, algorithms, data structures, and web development fundamentals.",
      tags: ["Software Architecture", "Algorithms", "Web Engineering"],
    },
    {
      icon: <Code className="w-4 h-4 text-primary" />,
      period: "2024 – Present",
      title: "Specialization in Frontend Engineering",
      titleAr: "التخصص في هندسة واجهات المستخدم (Frontend)",
      organization: "Personal & Open Source Engineering",
      organizationAr: "المشاريع البرمجية وتطوير الذات",
      description: "Building production-ready Next.js and React applications, mastering Tailwind CSS, TypeScript, and state management.",
      descriptionAr: "بناء تطبيقات جاهزة للإنتاج باستخدام Next.js و React، وإتقان تقنيات Tailwind CSS و TypeScript وإدارة الحالة.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Layers className="w-4 h-4 text-primary" />,
      period: "2024 – 2025",
      title: "Interactive Web Applications & Projects",
      titleAr: "تطبيقات الويب التفاعلية والمشاريع المميزة",
      organization: "Project Portfolio Development",
      organizationAr: "تطوير معرض المشاريع البرمجية",
      description: "Engineered web applications including Aetheris AI, Expense Tracker, and E-commerce Platform interfaces.",
      descriptionAr: "تصميم وبناء تطبيقات ويب متكاملة تتضمن Aetheris AI و Expense Tracker و E-commerce Platform.",
      tags: ["State Management", "REST APIs", "Interactive UI"],
    },
    {
      icon: <Sparkles className="w-4 h-4 text-primary" />,
      period: language === "ar" ? "مستمر" : "Ongoing Focus",
      title: "Advanced System Design & UI Engineering",
      titleAr: "هندسة واجهات المستخدم والتصميم المتقدم",
      organization: "Continuous Growth",
      organizationAr: "التطوير المستمر",
      description: "Exploring performance optimization, server components, accessibility standards, and modern UI engineering patterns.",
      descriptionAr: "التعمق في تحسين الأداء، مكونات السيرفر، معايير سهولة الوصول (Accessibility)، وأنظمة التصميم البرمجية الحديثة.",
      tags: ["Performance", "Accessibility", "UI Patterns"],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative">
      <Container>
        <SectionHeading
          badge={t.experience.badge}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className={`absolute top-3 bottom-3 w-px bg-border/80 ${language === "ar" ? "right-4 sm:right-6" : "left-4 sm:left-6"}`} />

          <div className="space-y-10">
            {journeyTimeline.map((item, index) => {
              const itemTitle = (language === "ar" && item.titleAr) ? item.titleAr : item.title;
              const itemOrg = (language === "ar" && item.organizationAr) ? item.organizationAr : item.organization;
              const itemDesc = (language === "ar" && item.descriptionAr) ? item.descriptionAr : item.description;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: language === "ar" ? 16 : -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative group ${language === "ar" ? "pr-12 sm:pr-16" : "pl-12 sm:pl-16"}`}
                >
                  {/* Timeline Dot Icon */}
                  <div className={`absolute top-1 w-8 h-8 rounded-full border border-border bg-surface shadow-subtle flex items-center justify-center group-hover:border-primary transition-colors ${language === "ar" ? "right-0 sm:right-2" : "left-0 sm:left-2"}`}>
                    {item.icon}
                  </div>

                  <div className="p-6 rounded-xl border border-border/80 bg-surface shadow-subtle group-hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-primary font-medium px-2 py-0.5 rounded bg-soft-lavender border border-primary/10">
                        {item.period}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {itemOrg}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {itemTitle}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {itemDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
