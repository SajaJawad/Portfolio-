"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
      title={language === "en" ? "العربية" : "English"}
      className={`inline-flex items-center justify-center gap-1.5 w-9 h-9 md:w-auto md:px-3 rounded-lg bg-surface border border-border/80 text-foreground text-xs font-mono font-medium hover:bg-muted hover:border-primary/40 transition-colors shadow-subtle focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${className}`}
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="hidden md:inline">{language === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
