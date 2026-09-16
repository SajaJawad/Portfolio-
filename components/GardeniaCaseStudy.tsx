"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Globe,
  Sparkles,
  Flower2,
  Gift,
  Search,
  Filter,
  SlidersHorizontal,
  CheckCircle2,
  Layers,
  Heart,
  Smartphone,
  Eye,
  ShoppingBag,
} from "lucide-react";
import { Project } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { useLanguage } from "@/components/LanguageProvider";

interface GardeniaCaseStudyProps {
  project: Project;
  nextProject: Project;
}

export function GardeniaCaseStudy({ project, nextProject }: GardeniaCaseStudyProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const nextTitle = isAr && nextProject.titleAr ? nextProject.titleAr : nextProject.title;

  // Visual features list for Section 5
  const shoppingCapabilities = [
    {
      titleEn: "Product Discovery",
      titleAr: "استكشاف المنتجات",
      descEn: "Curated floral arrangements categorized by style and aesthetics.",
      descAr: "تشكيلات زهرية مصممة ومصنفة حسب الأسلوب والجماليات.",
      icon: Eye,
    },
    {
      titleEn: "Flower Categories",
      titleAr: "تصنيفات الزهور",
      descEn: "Browse by individual stem types including Roses, Tulips, Peonies & Hydrangeas.",
      descAr: "التصفح حسب أنواع الأصناف كـ الورود، التوليب، البيوني، والهيدرانجيا.",
      icon: Flower2,
    },
    {
      titleEn: "Shop by Occasion",
      titleAr: "التسوق حسب المناسبة",
      descEn: "Targeted collections for Birthdays, Romance, Anniversaries, and Celebrations.",
      descAr: "مجموعات مخصصة لأعياد الميلاد، الرومانسية، الذكرى السنوية، والتهاني.",
      icon: Heart,
    },
    {
      titleEn: "Search & Filtering",
      titleAr: "البحث والفلترة",
      descEn: "Instant filter controls for color palette, price range, and availability.",
      descAr: "أدوات تصفية فورية حسب لوحة الألوان، النطاق السعري، والتوفر.",
      icon: Search,
    },
    {
      titleEn: "Product Details & Controls",
      titleAr: "تفاصيل المنتج وعناصر التحكم",
      descEn: "Interactive stem counts, vessel options, and quantity customization.",
      descAr: "تفاصيل أعداد السيقان، خيارات الفازات، والتحكم بالكميات.",
      icon: SlidersHorizontal,
    },
    {
      titleEn: "Gift Messaging & Add-ons",
      titleAr: "رسائل الإهداء والإضافات",
      descEn: "Custom written cards, luxury wrapping, and artisan chocolates.",
      descAr: "كروت إهداء مخصصة، تغليف فاخر، وشوكولاتة حرفية فاخرة.",
      icon: Gift,
    },
    {
      titleEn: "Cart & Quick Checkout",
      titleAr: "سلة الشراء والدفع السريع",
      descEn: "Slide-out cart drawer with free delivery calculator and express checkout.",
      descAr: "درج سلة الشراء الجانبي مع حاسبة التوصيل المجاني والدفع السريع.",
      icon: ShoppingBag,
    },
    {
      titleEn: "Real-Time Stock Availability",
      titleAr: "توفر المنتجات في الوقت الفعلي",
      descEn: "Daily fresh stem inventory tracking for local white-glove courier delivery.",
      descAr: "متابعة المخزون اليومي للزهور الطازجة لخدمة التوصيل السريع.",
      icon: CheckCircle2,
    },
  ];

  // Bouquet studio journey steps for Section 6
  const studioSteps = [
    { num: "01", nameEn: "Flower Varieties", nameAr: "أنواع الزهور", detailEn: "Select primary & accent stems", detailAr: "اختيار الزهور الأساسية والإضافية" },
    { num: "02", nameEn: "Bouquet Size", nameAr: "حجم الباقة", detailEn: "Petite, Classic, or Grand Signature", detailAr: "صغيرة، كلاسيكية، أو فاخرة كبرى" },
    { num: "03", nameEn: "Color Palette", nameAr: "لوحة الألوان", detailEn: "Pastel blush, crimson velvet, or vibrant spring", detailAr: "وردي ناعم، أحمر قرمزي، أو ربيعي زاهي" },
    { num: "04", nameEn: "Wrapping Style", nameAr: "أسلوب التغليف", detailEn: "Artisan matte paper, silk ribbon, or linen wrap", detailAr: "ورق غير لامع، شريط حريري، أو كتان" },
    { num: "05", nameEn: "Occasion Theme", nameAr: "طابع المناسبة", detailEn: "Tailored presentation tag and ribbon color", detailAr: "بطاقة تقديم مخصصة ولون شريط متناسق" },
    { num: "06", nameEn: "Gift Card Message", nameAr: "رسالة بطاقة الإهداء", detailEn: "Custom embossed calligraphy card note", detailAr: "بطاقة إهداء فاخرة بنص شخصي" },
    { num: "07", nameEn: "Optional Extras", nameAr: "الإضافات الاختيارية", detailEn: "Scented candles, vase upgrades & chocolates", detailAr: "شموع معطرة، فازات زجاجية وشوكولاتة" },
  ];

  // Principles for Section 9
  const experiencePrinciples = [
    {
      titleEn: "Emotional",
      titleAr: "عاطفي",
      descEn: "The experience should preserve the meaning behind gifting flowers.",
      descAr: "يجب أن تحافظ التجربة على المعنى والرمزية الوجدانية وراء إهداء الزهور.",
      color: "border-rose-400/30 bg-rose-500/5",
    },
    {
      titleEn: "Intuitive",
      titleAr: "سلس وبديهي",
      descEn: "Commerce actions should always remain easy to understand.",
      descAr: "يجب أن تظل إجراءات الشراء والتصفح واضحة وسهلة الفهم دائماً.",
      color: "border-amber-400/30 bg-amber-500/5",
    },
    {
      titleEn: "Personal",
      titleAr: "شخصي ومخصص",
      descEn: "Bouquet customization and gifting options make each order more meaningful.",
      descAr: "تخصيص الباقات وخيارات الإهداء تجعل كل طلب فريداً وذو قيمة خاصة.",
      color: "border-purple-400/30 bg-purple-500/5",
    },
    {
      titleEn: "Responsive",
      titleAr: "متجاوب بالكامل",
      descEn: "The experience should feel considered on every screen.",
      descAr: "تكون التجربة مصممة بعناية وتعمل بكفاءة عالية على جميع الشاشات.",
      color: "border-emerald-400/30 bg-emerald-500/5",
    },
    {
      titleEn: "Elegant",
      titleAr: "أنيق وراقٍ",
      descEn: "Visual richness should support the product rather than compete with it.",
      descAr: "الثراء البصري يدعم المنتج ويعزز قيمته بدلاً من المنافسة معه.",
      color: "border-sky-400/30 bg-sky-500/5",
    },
  ];

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden selection:bg-rose-500/20 selection:text-rose-900 dark:selection:text-rose-100">
      <Container>
        {/* Navigation / Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft
            className={`w-4 h-4 transition-transform ${
              isAr ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"
            }`}
          />
          <span>{t.projects.backToAllProjects}</span>
        </Link>

        {/* ---------------------------------------------------- */}
        {/* SECTION 1: PROJECT HERO */}
        {/* ---------------------------------------------------- */}
        <header className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 shadow-sm">
              {isAr ? "تجارة إلكترونية · تجربة زهور فاخرة" : "E-Commerce · Floral Experience"}
            </span>
            {project.year && (
              <span className="text-xs font-mono text-muted-foreground border-l border-border/80 pl-3">
                {project.year}
              </span>
            )}
            {project.role && (
              <span className="text-xs font-mono text-muted-foreground border-l border-border/80 pl-3">
                {t.projects.role}: {isAr && project.roleAr ? project.roleAr : project.role}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Gardenia
          </h1>

          <p className="text-xl sm:text-2xl font-light text-rose-600/90 dark:text-rose-300/90 mb-8 leading-snug">
            {isAr ? "تجربة تسوق زهور فاخرة ومصممة بعناية" : "A Premium Floral E-Commerce Experience"}
          </p>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              {isAr
                ? "تعتبر جاردينيا منصة تسوق إلكتروني معاصرة مصممة لتحويل العملية التقليدية لطلب الزهور إلى تجربة شخصية، أنيقة ومميزة."
                : "Gardenia is a modern floral e-commerce experience designed to transform the traditional process of ordering flowers into something more personal, elegant, and memorable."}
            </p>
            <p>
              {isAr
                ? "تجمع المنصة بين التصميم التحريري الفاخر وتجربة التسوق التفاعلية السلسة، مما يتيح للعملاء اكتشاف مجموعات الزهور المختارة، التسوق حسب المناسبة أو نوع الزهر، تصميم باقاتهم الخاصة، إضافة الهدايا، وإتمام الطلب عبر تدفق دفع غير مسبوق."
                : "The platform combines a luxury editorial design with an intuitive shopping experience, allowing customers to discover curated floral collections, shop by flower or occasion, customize their own bouquet, add thoughtful gifts, and complete their order through a seamless checkout journey."}
            </p>
          </div>

          {/* Action Links & Tech Stack */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 mt-8 border-t border-border/70">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground mr-1">
                {isAr ? "التقنيات الحقيقية:" : "Verified Stack:"}
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-muted/80 text-foreground/90 border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-md group"
                >
                  <Globe className="w-4 h-4" />
                  <span>{isAr ? "زيارة الموقع الحي ↗" : "Visit Website ↗"}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-border text-foreground text-xs font-semibold hover:bg-muted transition-colors shadow-subtle"
                >
                  <Github className="w-4 h-4" />
                  <span>{isAr ? "مستودع GitHub ↗" : "GitHub ↗"}</span>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Large Hero Screenshot in Browser Frame */}
        <section className="mb-24">
          <BrowserFrame url="https://gardenia-five.vercel.app/">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-900 overflow-hidden">
              <Image
                src={project.coverImage || project.image}
                alt="Gardenia Floral E-Commerce Hero View"
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </BrowserFrame>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 2: PROJECT OVERVIEW */}
        {/* ---------------------------------------------------- */}
        <section className="max-w-4xl mx-auto mb-24 py-8 border-y border-border/60">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 mb-3 block">
            {isAr ? "رؤية المشروع التحريرية" : "Editorial Vision"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {isAr ? "أكثر من مجرد متجر زهور إلكتروني." : "More than an online flower shop."}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
            {isAr
              ? "بدلاً من تصميم جاردينيا كمتجر تجاري تقليدي، كان الهدف هو ابتكار تجربة رقمية تعكس العاطفة والرمزية الوجدانية خلف إهداء الزهور — حيث تتكامل الصور الفوتوغرافية، الخطوط التحريرية، الحركة، الألوان، والتفاعل لجعل رحلة التسوق استثنائية بقدر الهدية نفسها."
              : "Rather than designing Gardenia as a conventional online store, the goal was to create a digital experience that reflects the emotion behind giving flowers — where photography, typography, motion, color, and interaction work together to make the shopping journey feel as special as the gift itself."}
          </p>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 3: THE CHALLENGE */}
        {/* ---------------------------------------------------- */}
        <section className="max-w-4xl mx-auto mb-24 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 mb-2 block">
              {isAr ? "التحدي الرئيسي" : "The Core Problem"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              {isAr ? "التحدي" : "The Challenge"}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {isAr
                ? "تركز معظم تجارب التجارة الإلكترونية للزهور بشكل مكثف على شبكات المنتجات وإجراءات الدفع، مما يفقدها غالبًا الطابع العاطفي المرتبط بإهداء الزهور. كان التحدي في جاردينيا هو الموازنة بين هدفين مختلفين:"
                : "Most flower e-commerce experiences focus heavily on product grids and checkout, often losing the emotional quality associated with flowers and gifting. The challenge with Gardenia was to balance two different goals:"}
            </p>
          </div>

          {/* Emphasized Challenge Blockquote */}
          <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent border-l-4 border-rose-500 backdrop-blur-sm shadow-subtle">
            <p className="text-xl sm:text-2xl font-serif italic text-foreground leading-snug">
              &ldquo;
              {isAr
                ? "ابتكار تجربة علامة تجارية غنية بصرياً وفاخرة مع الحفاظ على رحلة تسوق بسيطة وسريعة وسلسة."
                : "Create a visually rich, premium brand experience while keeping the shopping journey simple, fast, and intuitive."}
              &rdquo;
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {isAr
              ? "لذلك كان لا بد للواجهة أن تبدو معبرة دون أن تصبح مشتتة، ومتقدمة دون جعل إجراءات الشراء الأساسية صعبة المنال."
              : "The interface therefore needed to feel expressive without becoming distracting, and sophisticated without making basic commerce actions difficult to find."}
          </p>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 4: THE SOLUTION */}
        {/* ---------------------------------------------------- */}
        <section className="mb-28 space-y-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 block">
              {isAr ? "المنهجية والتنفيذ" : "Approach & Execution"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              {isAr ? "الحل البرمجي والتصميمي" : "The Solution"}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                {isAr
                  ? "تم تصميم جاردينيا حول تجربة تسوق قوامها السرد البصري والأسلوب التحريري."
                  : "Gardenia was designed around an editorial, story-driven shopping experience."}
              </p>
              <p>
                {isAr
                  ? "تُنشئ الصور الزهرية الكبيرة، الخلفيات المحايدة الدافئة، لمسات الوردي الناعم، الخطوط الأنيقة، والمساحات البيضاء السخية الهوية البصرية اللائقة."
                  : "Large floral imagery, warm neutral backgrounds, soft pink accents, elegant typography, generous whitespace, and subtle motion establish the visual identity."}
              </p>
              <p>
                {isAr
                  ? "وراء تلك الطبقة البصرية توجد تجربة تجارية مهيكلة تتيح للعملاء الانتقال بسلاسة من الإلهام إلى استكشاف المنتجات، التخصيص، سلة التسوق، والدفع."
                  : "Behind that visual layer is a structured commerce experience where customers can move naturally from inspiration to product discovery, customization, cart, and checkout."}
              </p>
              <p>
                {isAr
                  ? "تم تصميم التجربة بتجاوب تام منذ البداية لضمان انتقال الثراء البصري لشاشات السطح المكتبي بسلاسة للأجهزة اللوحية والمحمولة."
                  : "The experience was designed responsively from the beginning, ensuring that the visual richness of the desktop interface translates naturally to tablets and mobile devices."}
              </p>
            </div>
          </div>

          {/* Solution Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-primary/20 bg-surface overflow-hidden shadow-card">
              <div className="p-4 bg-muted/60 border-b border-border text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>{isAr ? "واجهة الكتالوج والتسوق" : "Storefront & Catalog Browsing"}</span>
                <span className="text-rose-500 font-semibold">Gardenia Store</span>
              </div>
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src="/gardenia/discovery.png"
                  alt="Gardenia Storefront Catalog Discovery"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-surface overflow-hidden shadow-card">
              <div className="p-4 bg-muted/60 border-b border-border text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>{isAr ? "استوديو تخصيص الباقات" : "Custom Bouquet Studio"}</span>
                <span className="text-rose-500 font-semibold">Digital Studio</span>
              </div>
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src="/gardenia/bouquet-builder.png"
                  alt="Gardenia Custom Bouquet Builder Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 5: SHOPPING EXPERIENCE */}
        {/* ---------------------------------------------------- */}
        <section className="mb-28 max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 block">
              {isAr ? "هندسة تجربة التسوق" : "Commerce Architecture"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              {isAr ? "مصمم للاكتشاف والاستكشاف." : "Designed for discovery."}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {isAr
                ? "يمكن للعملاء استكشاف الكتالوج عبر مسارات متعددة بدلاً من الاعتماد على شبكة منتجات تقليدية واحدة. يتيح النظام تصفح كافة التشكيلات، استكشاف أنواع زهور محددة، اكتشاف المجموعات الموسمية، أو التسوق حسب المناسبات كـ أعياد الميلاد، الذكرى السنوية، الرومانسية، والتهاني."
                : "Customers can explore the catalog through multiple discovery paths instead of relying on a single product grid. They can browse all arrangements, explore specific flower types, discover seasonal collections, or shop according to occasions such as birthdays, anniversaries, romance, congratulations, and thank-you gifts."}
            </p>
          </div>

          {/* Visual Capabilities Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shoppingCapabilities.map((cap, i) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-primary/15 bg-gradient-to-br from-surface via-surface to-rose-500/5 shadow-subtle hover:shadow-card hover:border-rose-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-rose-500 transition-colors">
                    {isAr ? cap.titleAr : cap.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {isAr ? cap.descAr : cap.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 6: BUILD YOUR OWN BOUQUET */}
        {/* ---------------------------------------------------- */}
        <section className="mb-28 p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white shadow-2xl relative overflow-hidden border border-rose-500/20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono font-semibold border border-rose-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? "استوديو الزهور الرقمي" : "Digital Floral Studio"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {isAr ? "صمم باقتك الخاصة بنفسك" : "Build Your Own Bouquet"}
            </h2>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-light">
              {isAr
                ? "تعد أداة تصميم الباقات المخصصة إحدى التجارب المميزة في جاردينيا. بدلاً من اختيار التشكيلات المجهزة فقط، يمكن للعملاء بناء باقة فريدة تعكس الشخص أو المناسبة المستهدفة."
                : "One of Gardenia's signature experiences is the custom bouquet builder. Instead of selecting only pre-designed arrangements, customers can create a bouquet that reflects the person or moment they are buying for."}
            </p>
          </div>

          {/* Customization Journey Steps Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {studioSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
              >
                <span className="text-xs font-mono font-bold text-rose-400 block mb-2">
                  {step.num}
                </span>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {isAr ? step.nameAr : step.nameEn}
                </h4>
                <p className="text-xs text-stone-400 font-light">
                  {isAr ? step.detailAr : step.detailEn}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/10 text-stone-300 text-sm sm:text-base leading-relaxed mb-10">
            {isAr
              ? "تنعكس الاختيارات فورياً في ملخص طلب مباشر مع تسعير ديناميكي، مما يخلق تجربة أقرب للعمل المباشر مع بائع زهور محترف مقارنة بتعبئة نموذج منتج تقليدي."
              : "Selections are reflected in a live order summary with dynamic pricing, creating an experience that feels closer to working with a florist than completing a traditional product form."}
          </div>

          {/* Customization Studio Screenshot Showcase */}
          <div className="relative z-10 rounded-2xl border border-white/20 overflow-hidden shadow-2xl bg-stone-900">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/gardenia/bouquet-builder.png"
                alt="Gardenia Custom Bouquet Studio Interface"
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 7: BOUQUET PREVIEW CONCEPT */}
        {/* ---------------------------------------------------- */}
        <section className="mb-28 max-w-5xl mx-auto space-y-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? "مفهوم المعاينة الذكية" : "AI Preview Concept"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              {isAr ? "عاين الباقة قبل الطلب." : "Visualize it before ordering."}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {isAr
                ? "تستكشف جاردينيا أيضاً مفهوم معاينة الباقات المدعوم بالذكاء الاصطناعي. بعد إعداد التشكيلة المخصصة، تقدم التجربة خطوة معاينة مخصصة قوامها إتاحة الفرصة للعملاء لتخيل ومعاينة شكل باقتهم المصممة قبل تأكيد الطلب."
                : "Gardenia also explores an AI-assisted bouquet preview concept. After configuring a custom arrangement, the experience introduces a dedicated preview step built around the idea of allowing customers to visualize their bouquet before placing the order."}
            </p>
            <p className="text-xs text-muted-foreground/80 italic font-mono">
              *{" "}
              {isAr
                ? "ملاحظة: هذا المفهوم مُصمم كنموذج استكشافي لواجهة المعاينة الذكية لتوضيح تجربة المستخدم المستقبلي."
                : "Note: Described factually as an AI-assisted preview UX concept."}
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-surface overflow-hidden shadow-card">
            <div className="relative aspect-[16/9] w-full bg-stone-900">
              <Image
                src="/gardenia/preview-modal.png"
                alt="Gardenia AI Bouquet Preview Concept Modal"
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 8: RESPONSIVE EXPERIENCE */}
        {/* ---------------------------------------------------- */}
        <section className="mb-28 max-w-6xl mx-auto space-y-12">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-rose-500">
              <Smartphone className="w-4 h-4" />
              <span>{isAr ? "التجاوب عبر الشاشات" : "Multi-Device Architecture"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              {isAr ? "مصمم ليعمل بسلاسة عبر كافة الشاشات." : "Designed across every screen."}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {isAr
                ? "تم تصميم جاردينيا بشكل متجاوب بالكامل بحيث تظل عمليات استكشاف المنتجات، التخصيص، وإجراءات الدفع سهلة وبديهية على الشاشات الصغيرة دون فقدان الهوية البصرية الفاخرة."
                : "Gardenia was designed responsively so that product discovery, customization, and checkout remain intuitive on smaller screens without losing the premium visual identity."}
            </p>
          </div>

          {/* Multi-Device Screenshot Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 rounded-2xl border border-primary/20 bg-surface overflow-hidden shadow-card">
              <div className="p-3 bg-muted/60 border-b border-border text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>Desktop Experience (1440px)</span>
                <span className="text-emerald-500 font-semibold">Responsive Desktop</span>
              </div>
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src="/gardenia/hero.png"
                  alt="Gardenia Desktop Viewport"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-primary/20 bg-surface overflow-hidden shadow-card">
              <div className="p-3 bg-muted/60 border-b border-border text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>Mobile View (390px)</span>
                <span className="text-rose-500 font-semibold">Mobile First</span>
              </div>
              <div className="relative aspect-[9/16] max-h-[500px] mx-auto bg-muted">
                <Image
                  src="/gardenia/mobile-hero.png"
                  alt="Gardenia Mobile Viewport"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 9: EXPERIENCE PRINCIPLES */}
        {/* ---------------------------------------------------- */}
        <section className="mb-28 max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 block">
              {isAr ? "مبادئ المنتج" : "Product Principles"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              {isAr ? "مبادئ تجربة جاردينيا" : "Experience Principles"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {experiencePrinciples.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${item.color} backdrop-blur-sm flex flex-col justify-between space-y-4`}
              >
                <div>
                  <span className="text-xs font-mono text-muted-foreground font-semibold block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 10: FINAL PROJECT STATEMENT */}
        {/* ---------------------------------------------------- */}
        <section className="max-w-4xl mx-auto py-16 px-8 sm:px-12 rounded-3xl bg-gradient-to-br from-rose-500/10 via-surface to-surface border border-rose-500/20 text-center space-y-8 shadow-card">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {isAr ? (
              <>
                الزهور تعبر عن المشاعر الشخصية.
                <br />
                <span className="italic text-rose-600 dark:text-rose-400">التجربة يجب أن تكون كذلك أيضاً.</span>
              </>
            ) : (
              <>
                Flowers are personal.
                <br />
                <span className="italic text-rose-600 dark:text-rose-400">The experience should be too.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            {isAr
              ? "تستكشف جاردينيا كيف يمكن للتصميم المدروس تحويل رحلة التجارة الإلكترونية المألوفة إلى تجربة رقمية أكثر عاطفية وتذكراً — بالجمع بين استكشاف المنتجات، التخصيص، الإهداء، والتجارة ضمن هوية زهرية متماسكة."
              : "Gardenia explores how thoughtful product design can turn a familiar e-commerce journey into a more emotional and memorable digital experience — combining product discovery, personalization, gifting, and commerce within one cohesive floral identity."}
          </p>

          {/* External Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-all shadow-lg"
              >
                <Globe className="w-4 h-4" />
                <span>{isAr ? "زيارة الموقع الحي ↗" : "Visit Website ↗"}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors shadow-subtle"
              >
                <Github className="w-4 h-4" />
                <span>{isAr ? "مستودع GitHub ↗" : "GitHub ↗"}</span>
              </a>
            )}
          </div>
        </section>

        {/* Back to Projects & Next Project Footer Bar */}
        <div className="mt-20 pt-12 border-t border-border flex items-center justify-between">
          <Link
            href="/projects"
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.projects.allProjectsLink}
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-end"
            >
              <div>
                <div className="text-[11px] font-mono text-muted-foreground uppercase">
                  {t.projects.nextProject}
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {nextTitle}
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isAr ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"
                  }`}
                />
              </div>
            </Link>
          )}
        </div>
      </Container>
    </article>
  );
}
