"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function StackSection() {
  const { t } = useLanguage();

  const stackCategories = [
    {
      title: t.stack.coreTitle,
      items: [
        { name: "React 19", category: "Library", description: "UI Component Architecture" },
        { name: "Next.js 16", category: "Framework", description: "App Router & SSR" },
        { name: "TypeScript", category: "Language", description: "Type-Safe Development" },
        { name: "JavaScript (ES6+)", category: "Language", description: "Modern Web Logic" },
      ],
    },
    {
      title: t.stack.stylingTitle,
      items: [
        { name: "Tailwind CSS 4", category: "Styling", description: "Utility-First Design Tokens" },
        { name: "Framer Motion", category: "Animation", description: "Fluid UI Micro-Interactions" },
        { name: "CSS Modules / Custom Props", category: "Styling", description: "Design Systems & Variables" },
      ],
    },
    {
      title: t.stack.toolsTitle,
      items: [
        { name: "Git & GitHub", category: "VCS", description: "Version Control & Collaboration" },
        { name: "Figma", category: "Design", description: "UI Inspection & Prototyping" },
        { name: "Node.js & npm", category: "Runtime", description: "Tooling & Package Ecosystem" },
      ],
    },
  ];

  return (
    <section id="stack" className="py-24 md:py-32 bg-muted/40 relative">
      <Container>
        <SectionHeading
          badge={t.stack.badge}
          title={t.stack.title}
          subtitle={t.stack.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stackCategories.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-tl from-soft-lavender/60 via-surface/95 to-surface shadow-card backdrop-blur-md hover:shadow-hover hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-6 pb-3 border-b border-border/60">
                  {group.title}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/item flex items-start justify-between p-2.5 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div>
                        <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-soft-lavender text-primary border border-primary/10 shrink-0">
                        {item.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StackSection;
