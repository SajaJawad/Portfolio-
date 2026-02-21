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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-bold text-lg tracking-tight">Saja Jawad</span>
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
