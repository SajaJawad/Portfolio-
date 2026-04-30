"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// dynamically import Spline to prevent WebGL context loss in Next.js
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center text-primary/50 text-sm">
      Loading 3D Scene...
    </div>
  ),
});

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vedio.mp4" type="video/mp4" />
        </video>
        {/* Overlay to allow video colors to show clearly while maintaining some readability */}
        <div className="absolute inset-0 bg-background/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10 w-full">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-foreground">
              I'm <span className="text-primary">Saja Jawad</span>, <br />
              Building digital <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent relative inline-block">
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
                className="w-full pl-6 pr-40 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm text-foreground"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#ae86ce] text-white px-6 rounded-xl font-semibold hover:bg-[#B591D4] transition-colors">
                Connect With Me
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full h-[450px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
          {/* Custom Beautiful Light Animation (Glassmorphism) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-visible z-0">
            {/* Background glowing blobs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] top-10 left-10"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] bottom-10 right-10"
            />

            {/* Rotating Glass Rectangles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-[3rem] border border-white/40 bg-gradient-to-tr from-white/10 to-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-white/50 bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-md shadow-xl"
            />

            {/* Floating Mini Shapes */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-12 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 border border-white/50 backdrop-blur-lg shadow-lg rotate-12"
            />
            <motion.div
              animate={{
                y: [20, -20, 20],
                x: [10, -10, 10],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-24 left-8 w-24 h-24 rounded-full bg-gradient-to-tr from-accent/40 to-accent/10 border border-white/50 backdrop-blur-lg shadow-lg"
            />
          </div>

          {/* Saja's Floating Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-20"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[2.5rem] border-[8px] border-white/80 bg-white shadow-2xl transform hover:scale-105 transition-transform duration-500 backdrop-blur-sm">
              <Image
                src="/hero.png"
                alt="Saja Jawad Soliman Qudaih"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
