import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`max-w-7xl mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
