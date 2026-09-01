"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      aria-label="Toggle language"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border/80 text-foreground text-xs font-mono font-medium hover:bg-muted hover:border-primary/40 transition-colors shadow-subtle focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
    >
      <Globe className="w-3.5 h-3.5 text-primary" />
      <span>{language === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
