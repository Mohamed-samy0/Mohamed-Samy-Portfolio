import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const socials = [
  { href: "https://github.com/Mohamed-samy0", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/mohamed-samy-886516377/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:mohamedsamy42302@gmail.com", icon: Mail, label: "Email" },
];

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  function openPalette() {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }),
    );
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="glass glow-border rounded-full px-5 py-2.5 flex items-center gap-6">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="text-sm">MS<span className="text-primary">.</span></span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-secondary/50"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={openPalette}
          aria-label="Open command palette"
          className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground hover:text-accent transition-colors border border-border rounded-md px-2 py-1"
        >
          <kbd>⌘</kbd>
          <span>K</span>
        </button>
        <div className="hidden md:flex items-center gap-1 pl-1 border-l border-border ml-1">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>
        <ThemeToggle />
        <a
          href="#contact"
          className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-primary text-white shadow-glow hover:opacity-95 transition-opacity"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
