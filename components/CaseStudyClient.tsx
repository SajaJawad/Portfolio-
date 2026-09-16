"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Globe } from "lucide-react";
import { Project } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { useLanguage } from "@/components/LanguageProvider";
import { GardeniaCaseStudy } from "@/components/GardeniaCaseStudy";

interface CaseStudyClientProps {
  project: Project;
  nextProject: Project;
}

export function CaseStudyClient({ project, nextProject }: CaseStudyClientProps) {
  if (project.slug === "gardenia") {
    return <GardeniaCaseStudy project={project} nextProject={nextProject} />;
  }
  const { t, language } = useLanguage();

  const title = (language === "ar" && project.titleAr) ? project.titleAr : project.title;
  const category = (language === "ar" && project.categoryAr) ? project.categoryAr : project.category;
  const shortDescription = (language === "ar" && project.shortDescriptionAr) ? project.shortDescriptionAr : project.shortDescription;
  const description = (language === "ar" && project.descriptionAr) ? project.descriptionAr : project.description;
  const role = (language === "ar" && project.roleAr) ? project.roleAr : (project.role || "Software Engineer");
  const challenge = (language === "ar" && project.challengeAr) ? project.challengeAr : project.challenge;
  const solution = (language === "ar" && project.solutionAr) ? project.solutionAr : project.solution;
  const features = (language === "ar" && project.featuresAr) ? project.featuresAr : project.features;
  const outcome = (language === "ar" && project.outcomeAr) ? project.outcomeAr : project.outcome;

  const nextTitle = (language === "ar" && nextProject.titleAr) ? nextProject.titleAr : nextProject.title;

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft className={`w-4 h-4 transition-transform ${language === "ar" ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
          <span>{t.projects.backToAllProjects}</span>
        </Link>

        {/* Header Info */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider px-3 py-1 rounded bg-soft-lavender border border-primary/10">
              {category}
            </span>
            {project.year && (
              <span className="text-xs font-mono text-muted-foreground border-l border-border pl-3">
                {project.year}
              </span>
            )}
            {role && (
              <span className="text-xs font-mono text-muted-foreground border-l border-border pl-3">
                {t.projects.role}: {role}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Actions & Tech Stack Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-border/80 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground mr-2">
              {language === "ar" ? "التقنيات المستخدمة:" : "Technologies:"}
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded bg-muted text-foreground/80 border border-border/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary-hover transition-colors shadow-subtle"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t.projects.liveDemo}</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-foreground text-xs font-medium hover:bg-muted transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.projects.sourceCode}</span>
              </a>
            )}
          </div>
        </div>

        {/* Browser Frame Showcase Visual */}
        <div className="mb-16">
          <BrowserFrame url={project.liveUrl || project.githubUrl}>
            <div className="relative aspect-[16/9] w-full max-h-[600px] bg-muted">
              <Image
                src={project.coverImage || project.image}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </BrowserFrame>
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            {description && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  {t.projects.overview}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              </div>
            )}

            {/* Conditional Challenge */}
            {challenge && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  {t.projects.challenge}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {challenge}
                </p>
              </div>
            )}

            {/* Conditional Solution */}
            {solution && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  {t.projects.solution}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {solution}
                </p>
              </div>
            )}

            {/* Features List */}
            {features && features.length > 0 && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  {t.projects.features}
                </h2>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conditional Outcome */}
            {outcome && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  {t.projects.outcome}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {outcome}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-tl from-soft-lavender/60 via-surface/95 to-surface shadow-card backdrop-blur-md space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                  {t.projects.category}
                </h3>
                <p className="text-sm font-medium text-foreground">{category}</p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                  {t.projects.role}
                </h3>
                <p className="text-sm font-medium text-foreground">{role}</p>
              </div>

              {project.year && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                    {t.projects.timeline}
                  </h3>
                  <p className="text-sm font-medium text-foreground">{project.year}</p>
                </div>
              )}

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  {t.projects.links}
                </h3>
                <div className="space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs font-medium text-primary hover:underline"
                    >
                      <span>{t.projects.visitLiveSite}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      <span>{t.projects.githubRepo}</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="mt-20 pt-12 border-t border-border flex items-center justify-between">
          <Link
            href="/projects"
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.projects.allProjectsLink}
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-end"
            >
              <div>
                <div className="text-[11px] font-mono text-muted-foreground uppercase">
                  {t.projects.nextProject}
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {nextTitle}
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                <ArrowRight className={`w-4 h-4 transition-transform ${language === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`} />
              </div>
            </Link>
          )}
        </div>
      </Container>
    </article>
  );
}
