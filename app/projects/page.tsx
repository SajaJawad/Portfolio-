"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
            >
              All Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground/60 max-w-2xl"
            >
              A showcase of my recent work, ranging from web applications to AI platforms and branding projects.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 ease-out overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden bg-muted/20 p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 shadow-lg transition-transform"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 shadow-lg transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-bold text-primary tracking-wider uppercase">
                      {project.category}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5 -mt-4">
            <Image
              src="/logo.png"
              alt="Saja Jawad"
              width={160}
              height={160}
              className="object-cover h-[100px] w-[100px] rounded-full shadow-md"
            />
            <span className="font-serif italic text-2xl font-bold text-[#ae86ce] tracking-wide">
              Saja Jawad
            </span>
          </div>

          <div className="flex space-x-8 text-sm font-medium text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies Settings
            </a>
          </div>

          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Saja Jawad. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ProjectsPage;
