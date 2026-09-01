"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/#hero", id: "hero" },
    { name: t.nav.about, href: "/#about", id: "about" },
    { name: t.nav.journey, href: "/#experience", id: "experience" },
    { name: t.nav.projects, href: "/#projects", id: "projects" },
    { name: t.nav.stack, href: "/#stack", id: "stack" },
    { name: t.nav.services, href: "/#services", id: "services" },
    { name: t.nav.contact, href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = navLinks.map((link) => link.id);
        const scrollPosition = window.scrollY + 200;

        for (const section of [...sections].reverse()) {
          const el = document.getElementById(section);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, navLinks]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/SajaJawad",
      label: "GitHub Profile",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://github.com/SajaJawad",
      label: "LinkedIn Profile",
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      const sectionId = href.replace("/#", "");
      setActiveSection(sectionId);
      const el = document.getElementById(sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-md border-b border-border/80 shadow-subtle py-3"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, "/#hero")}
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border group-hover:border-primary/50 transition-colors shadow-sm">
            <Image
              src="/logo.png"
              alt="Saja Jawad"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-serif italic text-xl md:text-2xl font-bold text-secondary tracking-wide group-hover:text-primary transition-colors">
            {t.hero.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-surface/60 border border-border/60 rounded-full px-4 py-1.5 backdrop-blur-md shadow-subtle">
          {navLinks.map((link) => {
            const isActive = pathname === "/" && activeSection === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-soft-lavender/80 rounded-full -z-10 border border-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions: Cmd+K, Language Toggle, Social, Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              type="button"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-muted-foreground bg-surface border border-border rounded-lg hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-muted border border-border rounded text-muted-foreground">
                ⌘K
              </kbd>
            </button>
          )}

          <LanguageToggle />

          <div className="flex items-center gap-1.5 border-r border-l border-border px-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] bottom-0 z-50 bg-surface/95 backdrop-blur-xl border-t border-border p-6 flex flex-col justify-between md:hidden"
          >
            <nav className="flex flex-col gap-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-border flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Connect
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center text-foreground/80 hover:text-primary transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
