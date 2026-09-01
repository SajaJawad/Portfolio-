"use client";

import React from "react";
import { Container } from "./ui/Container";
import { useLanguage } from "./LanguageProvider";

export function SignalStrip() {
  const { t } = useLanguage();

  const signals = [
    t.signals.item1,
    t.signals.item2,
    t.signals.item3,
    t.signals.item4,
    t.signals.item5,
    t.signals.item6,
  ];

  return (
    <div className="py-6 border-y border-border/80 bg-surface/40 backdrop-blur-sm">
      <Container>
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-3 gap-x-8 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          {signals.map((signal, index) => (
            <div key={signal} className="flex items-center gap-6">
              <span className="hover:text-foreground transition-colors font-medium">
                {signal}
              </span>
              {index < signals.length - 1 && (
                <span className="text-primary/40 hidden sm:inline">•</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SignalStrip;
