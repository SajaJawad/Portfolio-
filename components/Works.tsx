"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Github, Globe } from "lucide-react";
import { projects } from "@/lib/projects";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Works({ onQuickView }: { onQuickView?: (slug: string) => void }) {
  const { t, language } = useLanguage();
  const displayProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30 relative">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-6">
          <SectionHeading
            badge={t.projects.badge}
            title={t.projects.title}
            subtitle={t.projects.subtitle}
            className="mb-0"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-border text-foreground font-medium text-sm hover:bg-muted hover:border-primary/40 transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-primary shadow-subtle"
          >
            <span>{t.projects.viewAll} ({projects.length})</span>
            <ArrowUpRight className={`w-4 h-4 ${language === "ar" ? "rotate-[-90deg]" : ""}`} />
          </Link>
        </div>

        {/* Side-by-side 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => {
            const title = (language === "ar" && project.titleAr) ? project.titleAr : project.title;
            const category = (language === "ar" && project.categoryAr) ? project.categoryAr : project.category;
            const shortDescription = (language === "ar" && project.shortDescriptionAr) ? project.shortDescriptionAr : project.shortDescription;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-primary/20 bg-gradient-to-tl from-soft-lavender/60 via-surface/95 to-surface shadow-card backdrop-blur-md hover:shadow-hover hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Visual Image Banner with Floating Glass Badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted border-b border-border/60">
                    <Image
                      src={project.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Top Floating Glass Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                      <span className="px-2.5 py-1 rounded-lg bg-surface/90 backdrop-blur-md border border-border/80 text-xs font-mono font-bold text-foreground shadow-subtle">
                        0{index + 1}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-primary/20 text-xs font-mono font-semibold text-primary shadow-subtle">
                        {category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                      {title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                      {shortDescription}
                    </p>

                    {/* Technology Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted/80 text-foreground/80 border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-mono px-2 py-1 rounded-md bg-muted/40 text-muted-foreground border border-border/40">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-primary text-primary-foreground text-[11px] sm:text-xs font-semibold hover:bg-primary-hover transition-colors shadow-subtle whitespace-nowrap shrink-0"
                    >
                      <span>{t.projects.caseStudy}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0 ${language === "ar" ? "rotate-[-90deg]" : ""}`} />
                    </Link>

                    {onQuickView && (
                      <button
                        onClick={() => onQuickView(project.slug)}
                        type="button"
                        className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-2 rounded-xl bg-muted border border-border/60 text-foreground text-[11px] sm:text-xs font-medium hover:bg-border/60 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <Eye className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        <span>{t.projects.quickView}</span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${title}`}
                        className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shrink-0"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repo for ${title}`}
                        className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shrink-0"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Works;
