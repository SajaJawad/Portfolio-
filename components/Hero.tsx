"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      {/* Animated Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          y: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[25%] left-[15%] w-6 h-6 border-2 border-primary/20 rounded-lg -z-10"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[30%] right-[20%] w-8 h-8 rounded-full bg-accent/10 -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              I'm <span className="text-primary">Saja Jawad</span>, <br />
              Building digital <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent relative inline-block">
                experience.
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 10"
                  fill="none"
                >
                  <path
                    d="M5 5C50 5 250 5 295 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            A{" "}
            <span className="font-semibold text-foreground">
              Software Engineer
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              Frontend Developer
            </span>
            . I specialize in building high-performance, beautiful, and
            user-centric web applications that turn complex problems into
            elegant digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-6 pr-40 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-xl font-semibold hover:bg-accent transition-colors">
                Connect With Me
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto overflow-hidden rounded-[2.5rem] bg-muted shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/hero.png"
                alt="Saja Jawad Soliman Qudaih"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="font-bold">✓</span>
                </div>
                <div>
                  <div className="text-xs text-foreground/50 font-medium">
                    Availability
                  </div>
                  <div className="text-sm font-bold">Open for work</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-primary/20"
                    />
                  ))}
                </div>
                <div className="text-sm font-bold">50+ Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
