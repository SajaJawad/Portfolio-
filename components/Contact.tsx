"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Let's Build Something <br /> Great Together
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-10"
          >
            <div>
              <p className="text-lg text-foreground/70 mb-10 max-w-md leading-relaxed">
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Mail size={24} />}
                  label="Email"
                  value="saiamaher2002@gmail.com"
                  href="mailto:saiamaher2002@gmail.com"
                />
                <ContactInfoItem
                  icon={<Phone size={24} />}
                  label="Phone"
                  value="+970597805912"
                  href="tel:+970597805912"
                />
                <ContactInfoItem
                  icon={<MapPin size={24} />}
                  label="Location"
                  value="Palestine, Gaza"
                  href="#"
                />
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h5 className="font-bold text-foreground mb-6">Follow Me</h5>
              <div className="flex gap-4">
                <SocialIcon icon={<Github size={20} />} href="#" />
                <SocialIcon icon={<Linkedin size={20} />} href="#" />
                <SocialIcon icon={<Twitter size={20} />} href="#" />
                <SocialIcon icon={<Instagram size={20} />} href="#" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5] bg-muted/30 p-8 lg:p-12 rounded-[2.5rem] border border-border"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-foreground ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-foreground ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="button"
                  className="w-full md:w-auto bg-[#ae86ce] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#B591D4] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#ae86ce]/40 flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) => (
  <a href={href} className="flex items-center gap-5 group p-4 -ml-4 rounded-3xl transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:text-[#B591D4] transition-all duration-300">
      {icon}
    </div>
    <div>
      <div className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-0.5">
        {label}
      </div>
      <div className="text-lg font-bold text-foreground group-hover:text-[#B591D4] transition-colors">
        {value}
      </div>
    </div>
  </a>
);

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-12 h-12 bg-white border border-border rounded-2xl flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Contact;
