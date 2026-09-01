"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignalStrip from "@/components/SignalStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import StackSection from "@/components/StackSection";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ProjectModal from "@/components/ProjectModal";
import { projects, Project } from "@/lib/projects";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedQuickViewSlug, setSelectedQuickViewSlug] = useState<string | null>(null);

  const selectedQuickViewProject: Project | null = selectedQuickViewSlug
    ? projects.find((p) => p.slug === selectedQuickViewSlug) || null
    : null;

  return (
    <main className="min-h-screen bg-background selection:bg-soft-lavender selection:text-primary relative">
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <Hero />
      <SignalStrip />
      <About />
      <Experience />
      <Works onQuickView={(slug) => setSelectedQuickViewSlug(slug)} />
      <StackSection />
      <Services />
      <Process />
      <Currently />
      <Contact />
      <Footer />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Desktop Quick View Modal */}
      <ProjectModal
        project={selectedQuickViewProject}
        onClose={() => setSelectedQuickViewSlug(null)}
      />
    </main>
  );
}
