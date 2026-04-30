"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Works = () => {
  const projects = [
    {
      title: "Expense Tracker",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/SajaJawad/Expense-Tracker",
      github: "https://github.com/SajaJawad/Expense-Tracker",
    },
    {
      title: "E-commerce Platform",
      category: "NextJs",
      image: "/Econm.png",
      link: "https://github.com/SajaJawad/GroceryApp_NextJs",
      github: "https://github.com/SajaJawad/GroceryApp_NextJs",
    },
    {
      title: "Subsec Landing Page",
      category: "NextJs",
      image: "/image.png",
      link: "https://github.com/SajaJawad/Subsec_LandingPage",
      github: "https://github.com/SajaJawad/Subsec_LandingPage",
    },
    {
      title: "Luma Studio",
      category: "NextJs",
      image: "/luma.png",
      link: "https://next-with-ai-eight.vercel.app/",
      github: "https://github.com/SajaJawad/Next-With-AI.git",
    },
  ];

  return (
    <section id="works" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
            >
              My Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-foreground"
            >
              Recent Works
            </motion.h3>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#ae86ce] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#B591D4] transition-all shadow-lg shadow-[#ae86ce]/40"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-border"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
