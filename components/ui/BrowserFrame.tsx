import React from "react";

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
}

export function BrowserFrame({ children, url, className = "" }: BrowserFrameProps) {
  return (
    <div className={`rounded-xl border border-border/80 bg-surface shadow-card overflow-hidden ${className}`}>
      {/* Browser Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border/60">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        {url && (
          <div className="text-[11px] font-mono text-muted-foreground/70 bg-surface/80 px-4 py-1 rounded-md border border-border/40 truncate max-w-[240px] sm:max-w-xs">
            {url.replace(/^https?:\/\//, "")}
          </div>
        )}
        <div className="w-10" />
      </div>
      {/* Browser Content */}
      <div className="relative overflow-hidden bg-background">
        {children}
      </div>
    </div>
  );
}
