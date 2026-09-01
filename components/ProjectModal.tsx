"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Github, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/lib/projects";
import { useLanguage } from "./LanguageProvider";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage();

  if (!project) return null;

  const title = (language === "ar" && project.titleAr) ? project.titleAr : project.title;
  const category = (language === "ar" && project.categoryAr) ? project.categoryAr : project.category;
  const description = (language === "ar" && project.descriptionAr) ? project.descriptionAr : (project.description || project.shortDescription);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-foreground/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-surface border border-border rounded-xl shadow-card overflow-hidden z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-muted/40">
            <div>
              <span className="text-[10px] font-mono uppercase text-primary font-semibold px-2 py-0.5 rounded bg-soft-lavender">
                {category}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-1">
                {title}
              </h3>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border bg-muted">
              <Image
                src={project.image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-cover object-top"
              />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {description}
            </p>

            {/* Tech badges */}
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground mb-2">
                {language === "ar" ? "التقنيات المستخدمة" : "Tech Stack"}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-muted text-foreground/80 border border-border/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-border bg-muted/40 flex items-center justify-between gap-3">
            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>{t.projects.caseStudy}</span>
              <ArrowUpRight className={`w-4 h-4 ${language === "ar" ? "rotate-[-90deg]" : ""}`} />
            </Link>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary-hover transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t.projects.liveDemo}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-border text-foreground text-xs font-medium hover:bg-muted transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.projects.sourceCode}</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
