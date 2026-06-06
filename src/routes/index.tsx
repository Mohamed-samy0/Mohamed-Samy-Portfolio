import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Activity } from "@/components/portfolio/Activity";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { TerminalWidget } from "@/components/portfolio/TerminalWidget";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mohamed Samy | Front-End Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mohamed Samy, a Front-End Engineer specializing in React, Next.js, and modern web architecture. Exploring AI integration and building scalable UIs.",
      },
      { property: "og:title", content: "Mohamed Samy | Front-End Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Mohamed Samy, a Front-End Engineer specializing in React, Next.js, and modern web architecture. Exploring AI integration and building scalable UIs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CommandPalette />
      <Hero />
      <TechStack />
      <Projects />
      <Philosophy />
      <Activity />
      <Contact />
      <Footer />
      <TerminalWidget />
    </main>
  );
}
