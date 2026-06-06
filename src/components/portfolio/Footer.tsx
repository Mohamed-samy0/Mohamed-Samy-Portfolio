import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/Mohamed-samy0", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/mohamed-samy-886516377/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:mohamedsamy42302@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Mohamed Samy — Front-End Engineer</span>

        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/Mohamed_Samy_CV.pdf"
            download
            className="hover:text-foreground transition-colors"
          >
            Download CV
          </a>
          <span className="font-mono hidden sm:inline">Designed & built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
