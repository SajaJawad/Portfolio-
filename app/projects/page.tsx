"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => (language === "ar" && p.categoryAr) ? p.categoryAr : p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => {
          const cat = (language === "ar" && p.categoryAr) ? p.categoryAr : p.category;
          return cat === selectedCategory;
        });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          {/* Back to Home Link */}
          <Link
            href="/#hero"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft className={`w-4 h-4 transition-transform ${language === "ar" ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
            <span>{t.projects.backToHome}</span>
          </Link>

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-soft-lavender px-3 py-1 rounded-md mb-3 border border-primary/10">
              Portfolio
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              {t.projects.allProjectsTitle}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.projects.allProjectsSubtitle}
            </p>
          </div>

          {/* Category Filter Pills & Counter */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border/80 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    type="button"
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-subtle"
                        : "bg-surface text-muted-foreground hover:text-foreground border border-border"
                    }`}
                  >
                    {cat === "All" ? (language === "ar" ? "الكل" : "All") : cat}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-mono text-muted-foreground">
              <span className="font-semibold text-foreground">
                0{filteredProjects.length}
              </span>{" "}
              {t.projects.selectedWorksCount}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const title = (language === "ar" && project.titleAr) ? project.titleAr : project.title;
                const category = (language === "ar" && project.categoryAr) ? project.categoryAr : project.category;
                const shortDescription = (language === "ar" && project.shortDescriptionAr) ? project.shortDescriptionAr : project.shortDescription;

                return (
                  <motion.div
                    layout
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group rounded-2xl border border-primary/20 bg-gradient-to-tl from-soft-lavender/60 via-surface/95 to-surface shadow-subtle hover:shadow-card hover:border-primary/50 backdrop-blur-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Visual Aspect Container */}
                      <div className="relative aspect-video overflow-hidden bg-muted border-b border-border/60">
                        <Image
                          src={project.image}
                          alt={title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="text-[11px] font-mono font-semibold text-primary uppercase tracking-wider px-2 py-0.5 rounded bg-soft-lavender border border-primary/10">
                            {category}
                          </span>
                          {project.year && (
                            <span className="text-xs font-mono text-muted-foreground">
                              {project.year}
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                          {title}
                        </h2>

                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                          {shortDescription}
                        </p>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-foreground/70 border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="p-4 sm:p-6 pt-0 flex flex-wrap items-center justify-between gap-2.5 mt-4 border-t border-border/40">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>{t.projects.caseStudy}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 shrink-0 ${language === "ar" ? "rotate-[-90deg]" : ""}`} />
                      </Link>

                      <div className="flex items-center gap-2 shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live Demo for ${title}`}
                            className="w-8 h-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shrink-0"
                          >
                            <Globe className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub Repository for ${title}`}
                            className="w-8 h-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
