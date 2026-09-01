import React from "react";

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: "sm" | "md";
}

export function TechBadge({ name, className = "", size = "md" }: TechBadgeProps) {
  const sizeClasses =
    size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs font-medium";

  return (
    <span
      className={`inline-flex items-center rounded-md bg-muted text-foreground/80 border border-border/80 ${sizeClasses} ${className}`}
    >
      {name}
    </span>
  );
}
