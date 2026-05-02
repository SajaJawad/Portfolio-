"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Globe,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const description =
    "I am a Software Engineering student passionate about building modern, responsive, and user-friendly web applications. I specialize in developing dynamic interfaces using React.js and Next.js, with a strong focus on performance, scalability, and clean architecture. With Tailwind CSS, I create visually appealing and responsive designs that enhance user experience while maintaining clean and maintainable code. I enjoy transforming ideas into functional digital products and continuously improving my skills by exploring new tools and best practices in web development. I am detail-oriented, adaptable, and always eager to take on new challenges that help me grow as a developer and contribute to impactful projects.";

  const truncatedDescription = description.slice(0, 150) + "...";

  const stats = [
    { label: "Years", value: "3+" },
    { label: "Projects", value: "40+" },
    { label: "Clients", value: "25+" },
    { label: "Coffee", value: "∞" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              About Me
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Transforming Ideas into <br />
              <span className="text-primary">Stunning Digital Reality</span>
            </h3>
            <div className="relative mb-6">
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? "max-h-[1000px]" : "max-h-[120px]"}`}
              >
                <p className="text-base text-foreground/70 leading-relaxed">
                  {description}
                </p>
                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-base text-foreground/70 mt-6 leading-relaxed"
                  >
                    With expertise in React, Next.js, and modern CSS, I bridge
                    the gap between complex engineering and intuitive design.
                  </motion.p>
                )}
              </div>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none" />
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-all focus:outline-none group mb-10"
            >
              <span className="text-sm">
                {isExpanded ? "Read Less" : "Read More"}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="group-hover:translate-y-0.5 transition-transform"
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/50 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <FeatureCard
              icon={
                <Code2 className="text-primary w-7 h-7 group-hover:text-accent transition-colors duration-300" />
              }
              title="Clean Code"
              description="Writing maintainable, scalable, and efficient code is my top priority."
            />
            <FeatureCard
              icon={
                <Palette className="text-primary w-7 h-7 group-hover:text-accent transition-colors duration-300" />
              }
              title="Modern Design"
              description="Creating visually appealing interfaces that follow current design trends."
            />
            <FeatureCard
              icon={
                <Globe className="text-primary w-7 h-7 group-hover:text-accent transition-colors duration-300" />
              }
              title="SEO Optimized"
              description="Ensuring your website is visible and ranks well on search engines."
            />
            <FeatureCard
              icon={
                <Zap className="text-primary w-7 h-7 group-hover:text-accent transition-colors duration-300" />
              }
              title="Fast Performance"
              description="Optimizing every millisecond for a lightning-fast user experience."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner border border-white">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#c195e7] transition-colors">
      {title}
    </h4>
    <p className="text-foreground/60 leading-relaxed text-sm">{description}</p>
  </div>
);

export default About;
