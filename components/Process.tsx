"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t.process.steps.step1Title,
      description: t.process.steps.step1Desc,
    },
    {
      num: "02",
      title: t.process.steps.step2Title,
      description: t.process.steps.step2Desc,
    },
    {
      num: "03",
      title: t.process.steps.step3Title,
      description: t.process.steps.step3Desc,
    },
    {
      num: "04",
      title: t.process.steps.step4Title,
      description: t.process.steps.step4Desc,
    },
    {
      num: "05",
      title: t.process.steps.step5Title,
      description: t.process.steps.step5Desc,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/40 relative">
      <Container>
        <SectionHeading
          badge={t.process.badge}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-xl border border-border/80 bg-surface shadow-subtle flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-soft-lavender border border-primary/10 inline-block mb-3">
                  {step.num}
                </span>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
