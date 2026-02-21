"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  PenTool,
  Database,
  Layers,
  Monitor,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using modern frameworks like React and Next.js.",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Design",
      description:
        "Creating intuitive and engaging mobile-first interfaces for all screen sizes.",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <PenTool size={32} />,
      title: "UI/UX Design",
      description:
        "Focusing on user-centric design principles to deliver exceptional digital experiences.",
      color: "bg-rose-500/10 text-rose-500",
    },
    {
      icon: <Layers size={32} />,
      title: "Visual Branding",
      description:
        "Developing cohesive visual identities including logos, palettes, and typography.",
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      icon: <Monitor size={32} />,
      title: "Front-end Architecture",
      description:
        "Designing scalable and maintainable front-end systems for complex applications.",
      color: "bg-emerald-500/10 text-emerald-500",
    },
    {
      icon: <Database size={32} />,
      title: "API Integration",
      description:
        "Connecting front-end interfaces with robust back-end services and third-party APIs.",
      color: "bg-indigo-500/10 text-indigo-500",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Services I Provide
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div
                className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h4>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8">
                <button className="text-sm font-bold text-primary flex items-center gap-2 group/btn">
                  Read More
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
