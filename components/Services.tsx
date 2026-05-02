"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  AppWindow,
  Activity,
  Diamond,
  Layers,
  Webhook,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 size={32} strokeWidth={1.5} />,
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using modern frameworks like React and Next.js.",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <AppWindow size={32} strokeWidth={1.5} />,
      title: "App Design",
      description:
        "Creating intuitive and engaging mobile-first interfaces for all screen sizes.",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <Activity size={32} strokeWidth={1.5} />,
      title: "UI/UX Design",
      description:
        "Focusing on user-centric design principles to deliver exceptional digital experiences.",
      color: "bg-rose-500/10 text-rose-500",
    },
    {
      icon: <Diamond size={32} strokeWidth={1.5} />,
      title: "Visual Branding",
      description:
        "Developing cohesive visual identities including logos, palettes, and typography.",
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      icon: <Layers size={32} strokeWidth={1.5} />,
      title: "Front-end Architecture",
      description:
        "Designing scalable and maintainable front-end systems for complex applications.",
      color: "bg-emerald-500/10 text-emerald-500",
    },
    {
      icon: <Webhook size={32} strokeWidth={1.5} />,
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
              className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Decorative Corner Shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
              
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner border border-white">
                <div className={service.color.split(' ')[1]}>
                  {service.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#B591D4] transition-colors">
                {service.title}
              </h4>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
