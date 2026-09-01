"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { useToast } from "./ui/Toast";
import { useLanguage } from "./LanguageProvider";

const WhatsAppIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Contact() {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailAddress = "saiamaher2002@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    showToast(t.contact.copied);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const formattedMessage = `Hello Saja,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nMessage:\n${message.trim()}`;
    const whatsappUrl = `https://wa.me/970597805912?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <Container>
        <SectionHeading
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-soft-lavender/60 via-surface/95 to-surface shadow-card backdrop-blur-md flex flex-col justify-between h-full space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t.contact.getInTouch}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {t.contact.getInTouchSub}
                </p>

                {/* Copy Email Box */}
                <div className="p-4 rounded-xl bg-surface/90 border border-primary/15 flex items-center justify-between gap-3 shadow-subtle mb-6">
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase text-muted-foreground">
                      {t.contact.emailLabel}
                    </div>
                    <div className="text-sm font-medium text-foreground truncate">
                      {emailAddress}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy Email Address"
                    className="px-3 py-1.5 rounded-lg bg-soft-lavender text-primary hover:bg-primary hover:text-primary-foreground text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-primary cursor-pointer border border-primary/15"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{t.contact.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.contact.copy}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Additional Contact Channels */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors p-2.5 rounded-xl hover:bg-soft-lavender/60"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>{t.contact.sendDirectEmail}</span>
                  </a>

                  <a
                    href="https://wa.me/970597805912"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors p-2.5 rounded-xl hover:bg-soft-lavender/60"
                  >
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>+970 597 805 912</span>
                  </a>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground p-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{t.contact.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Social Networks */}
              <div className="pt-4 border-t border-border/60">
                <div className="text-xs font-mono text-muted-foreground uppercase mb-3">
                  {t.contact.socialChannels}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/SajaJawad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 rounded-xl border border-primary/20 bg-soft-lavender/70 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 shadow-subtle transition-all duration-300"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://github.com/SajaJawad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 rounded-xl border border-primary/20 bg-soft-lavender/70 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 shadow-subtle transition-all duration-300"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://wa.me/970597805912"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Contact"
                    className="w-10 h-10 rounded-xl border border-primary/20 bg-soft-lavender/70 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 shadow-subtle transition-all duration-300"
                  >
                    <WhatsAppIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Form */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-soft-lavender/60 via-surface/95 to-surface shadow-card backdrop-blur-md flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t.contact.sendMessage}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  {t.contact.sendMessageSub}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground mb-1.5">
                      {t.contact.yourName}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.yourNamePlaceholder}
                      required
                      className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-subtle"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground mb-1.5">
                      {t.contact.yourEmail}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.yourEmailPlaceholder}
                      required
                      className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-subtle"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-foreground mb-1.5">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      required
                      className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none shadow-subtle"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors shadow-subtle focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                    >
                      <WhatsAppIcon size={18} />
                      <span>{t.contact.sendWhatsApp}</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
