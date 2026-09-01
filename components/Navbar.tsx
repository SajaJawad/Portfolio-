"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border/80 shadow-subtle py-3"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link
          href="/#hero"
          onClick={(e) => {
            setIsOpen(false);
            handleNavClick(e, "/#hero");
          }}
          className="flex items-center gap-2 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-0.5"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center">
            <Image
              src="/logo2.png"
              alt={t.hero.name}
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif italic text-sm sm:text-lg md:text-xl font-bold text-secondary tracking-tight whitespace-nowrap group-hover:text-primary transition-colors">
            {t.hero.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-surface/80 border border-border/60 rounded-full px-4 py-1.5 backdrop-blur-md shadow-subtle">
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
              className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-muted text-foreground/80 hover:text-foreground flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Search"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              type="button"
              className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-muted text-foreground/80 hover:text-foreground flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Search"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-surface/98 backdrop-blur-2xl border-b border-border shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === "/" && activeSection === link.id;

                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleNavClick(e, link.href);
                      }}
                      className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-subtle"
                          : "text-foreground hover:bg-muted border border-transparent"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </Link>
                  );
                })}
              </nav>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
