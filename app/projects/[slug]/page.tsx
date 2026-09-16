import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseStudyClient } from "@/components/CaseStudyClient";

interface CaseStudyProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Saja Jawad",
    };
  }

  if (slug === "gardenia") {
    return {
      title: "Gardenia — Premium Floral E-Commerce Experience | Saja Jawad",
      description:
        "Explore Gardenia, a premium floral e-commerce experience focused on curated flower discovery, bouquet customization, thoughtful gifting, responsive design, and a seamless shopping journey.",
      openGraph: {
        title: "Gardenia — Premium Floral E-Commerce Experience | Saja Jawad",
        description:
          "Explore Gardenia, a premium floral e-commerce experience focused on curated flower discovery, bouquet customization, thoughtful gifting, responsive design, and a seamless shopping journey.",
        images: [{ url: project.image }],
      },
    };
  }

  return {
    title: `${project.title} — Case Study | Saja Jawad`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <CaseStudyClient project={project} nextProject={nextProject} />
      <Footer />
    </main>
  );
}
