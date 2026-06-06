import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, FileDown } from "lucide-react";
import { KineticMesh } from "./KineticMesh";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for freelance & full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6"
          >
            Building <span className="text-gradient">Scalable</span> &<br />
            High-Performance<br />
            Web Applications.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            I am <span className="text-foreground font-medium">Mohamed Samy</span>, a Front-End Engineer specializing in the React & Next.js ecosystem.
            I focus on creating accessible, interactive user interfaces backed by clean architecture and SOLID principles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#work"
              className="group inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-medium shadow-glow hover:shadow-glow-cyan transition-shadow"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 glass glow-border-cyan px-6 py-3 rounded-full font-medium hover:bg-secondary/60 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </MagneticButton>
            <a
              href="/Mohamed_Samy_CV.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
            <div className="hidden sm:flex items-center gap-2 ml-2 text-xs text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Crafted with care & caffeine
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <KineticMesh />
        </motion.div>
      </div>
    </section>
  );
}
