"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Layout, Webhook, Zap } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Services() {
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: <Code2 className="w-5 h-5 text-primary" />,
      title: t.services.items.frontendTitle,
      description: t.services.items.frontendDesc,
    },
    {
      icon: <Layers className="w-5 h-5 text-primary" />,
      title: t.services.items.nextJsTitle,
      description: t.services.items.nextJsDesc,
    },
    {
      icon: <Layout className="w-5 h-5 text-primary" />,
      title: t.services.items.responsiveTitle,
      description: t.services.items.responsiveDesc,
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: t.services.items.uiTitle,
      description: t.services.items.uiDesc,
    },
    {
      icon: <Webhook className="w-5 h-5 text-primary" />,
      title: t.services.items.apiTitle,
      description: t.services.items.apiDesc,
    },
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: t.services.items.perfTitle,
      description: t.services.items.perfDesc,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <Container>
        <SectionHeading
          badge={t.services.badge}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-tl from-soft-lavender/60 via-surface/95 to-surface shadow-card backdrop-blur-md hover:shadow-hover hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-soft-lavender border border-primary/10 flex items-center justify-center mb-4">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
