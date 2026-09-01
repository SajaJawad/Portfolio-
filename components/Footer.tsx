"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { Container } from "./ui/Container";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border bg-background overflow-hidden z-0">
      {/* Ambient gradient glow matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-soft-lavender/30 to-transparent pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-t from-primary/15 via-soft-lavender/40 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Stack Info */}
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border">
              <Image
                src="/logo.png"
                alt="Saja Jawad"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif italic text-lg font-bold text-secondary">
                {t.hero.name}
              </span>
              <span className="text-xs text-muted-foreground block">
                {t.footer.builtWith}
              </span>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/SajaJawad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/SajaJawad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground border-l border-r border-border px-4">
              © {new Date().getFullYear()} Saja Jawad. {t.footer.rights}
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
