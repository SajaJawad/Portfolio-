"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "40+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Cups of Coffee", value: "∞" },
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
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              I am a Software Engineering student passionate about building
              modern, responsive, and user-friendly web applications. I
              specialize in developing dynamic interfaces using React.js and
              Next.js, with a strong focus on performance, scalability, and
              clean architecture. With Tailwind CSS, I create visually appealing
              and responsive designs that enhance user experience while
              maintaining clean and maintainable code. I enjoy transforming
              ideas into functional digital products and continuously improving
              my skills by exploring new tools and best practices in web
              development. I am detail-oriented, adaptable, and always eager to
              take on new challenges that help me grow as a developer and
              contribute to impactful projects.
            </p>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              With expertise in React, Next.js, and modern CSS, I bridge the gap
              between complex engineering and intuitive design.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/50 font-medium">
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
              icon={<Code2 className="text-primary" />}
              title="Clean Code"
              description="Writing maintainable, scalable, and efficient code is my top priority."
            />
            <FeatureCard
              icon={<Palette className="text-primary" />}
              title="Modern Design"
              description="Creating visually appealing interfaces that follow current design trends."
            />
            <FeatureCard
              icon={<Globe className="text-primary" />}
              title="SEO Optimized"
              description="Ensuring your website is visible and ranks well on search engines."
            />
            <FeatureCard
              icon={<Zap className="text-primary" />}
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
  <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-foreground mb-3">{title}</h4>
    <p className="text-foreground/60 leading-relaxed text-sm">{description}</p>
  </div>
);

export default About;
