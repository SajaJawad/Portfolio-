import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5 -mt-4">
            <Image
              src="/logo.png"
              alt="Saja Jawad"
              width={160}
              height={160}
              className="object-cover h-[100px] w-[100px] rounded-full shadow-md"
            />
            <span className="font-serif italic text-2xl font-bold text-[#ae86ce] tracking-wide">
              Saja Jawad
            </span>
          </div>

          <div className="flex space-x-8 text-sm font-medium text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies Settings
            </a>
          </div>

          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Saja Jawad. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
