"use client";

import React from "react";
import { Container } from "./ui/Container";
import { useLanguage } from "./LanguageProvider";

export function Currently() {
  const { t } = useLanguage();

  const currentItems = [
    {
      label: t.currently.buildingLabel,
      value: t.currently.buildingVal,
    },
    {
      label: t.currently.learningLabel,
      value: t.currently.learningVal,
    },
    {
      label: t.currently.openToLabel,
      value: t.currently.openToVal,
    },
  ];

  return (
    <div className="py-12 border-y border-border/80 bg-surface">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-lg border border-border/60 bg-muted/30"
            >
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary mb-1">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm font-medium text-foreground">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Currently;
