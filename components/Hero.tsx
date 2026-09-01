"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import { Container } from "./ui/Container";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t, language } = useLanguage();
  const techLabels = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-0">
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vedio.mp4" type="video/mp4" />
        </video>
        {/* Semi-transparent overlay so video shows through clearly while keeping text high-contrast */}
        <div className="absolute inset-0 bg-background/30 dark:bg-background/35 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-transparent to-background" />
      </div>

      {/* Ambient glowing accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-primary/15 via-soft-lavender/30 to-transparent blur-3xl z-0 rounded-full pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
          {/* Left Column: Hero Text Content */}
          <div className="flex-1 text-start max-w-2xl">
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/90 border border-primary/20 text-primary text-xs font-medium mb-6 shadow-subtle backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span>{t.hero.availableStatus}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6"
            >
              {t.hero.greeting} <span className="text-primary">{t.hero.name}</span>, <br />
              {t.hero.roleHeadline}
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl font-medium"
            >
              {t.hero.bioLead} <span className="font-semibold text-foreground">{t.hero.bioFrontend}</span>,{" "}
              <span className="font-semibold text-foreground">{t.hero.bioNextJs}</span>, {language === "en" ? "and" : "و"}{" "}
              <span className="font-semibold text-foreground">{t.hero.bioReact}</span>
              {t.hero.bioBody}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("projects");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-colors shadow-subtle focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowUpRight className={`w-4 h-4 ${language === "ar" ? "rotate-[-90deg]" : ""}`} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Saja_Qudeih_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface/90 border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>{t.hero.downloadResume}</span>
              </a>
            </motion.div>

            {/* Social Links & Tech Labels Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4"
            >
              {/* Tech Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono text-muted-foreground mr-1">{t.hero.focus}</span>
                {techLabels.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-surface/90 text-foreground/80 rounded-md border border-border/60 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/SajaJawad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-lg border border-border/80 bg-surface/90 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors backdrop-blur-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/SajaJawad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-lg border border-border/80 bg-surface/90 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-sm lg:max-w-md flex justify-center"
          >
            {/* Subtle background frame shadow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-2 opacity-60 pointer-events-none" />

            {/* Editorial Frame around image */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl border border-border bg-surface/90 shadow-card p-3 backdrop-blur-md overflow-visible">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-muted">
                <Image
                  src="/hero.png"
                  alt="Saja Jawad"
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Editorial Badge Label 1 (Top Left) */}
              <div className="absolute top-6 -left-5 sm:-left-7 px-3.5 py-2 bg-surface/95 backdrop-blur-md border border-border/90 rounded-xl shadow-card text-xs font-mono font-semibold text-foreground flex items-center gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{t.hero.badgeRole}</span>
              </div>

              {/* Editorial Badge Label 2 (Bottom Right) */}
              <div className="absolute bottom-8 -right-5 sm:-right-7 px-3.5 py-2 bg-surface/95 backdrop-blur-md border border-border/90 rounded-xl shadow-card text-xs font-mono font-semibold text-foreground flex items-center gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.hero.badgeTech}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
