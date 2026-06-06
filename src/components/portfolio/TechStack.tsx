import { motion } from "framer-motion";
import {
  Atom,
  Triangle,
  Braces,
  Wind,
  Layers,
  Database,
  Code2,
  GitBranch,
} from "lucide-react";

const items = [
  {
    name: "React",
    desc: "Component-driven UIs with hooks & context.",
    icon: Atom,
    accent: "from-[oklch(0.85_0.12_195)]/25 to-transparent",
  },
  {
    name: "Next.js",
    desc: "Server-side rendering & optimized web apps.",
    icon: Triangle,
    accent: "from-foreground/15 to-transparent",
  },
  {
    name: "TypeScript",
    desc: "Type-safe development for scalable code.",
    icon: Braces,
    accent: "from-[oklch(0.6_0.18_250)]/25 to-transparent",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first styling & responsive design.",
    icon: Wind,
    accent: "from-[oklch(0.7_0.14_200)]/25 to-transparent",
  },
  {
    name: "Redux Toolkit",
    desc: "Global state management & predictable logic.",
    icon: Layers,
    accent: "from-[oklch(0.72_0.18_305)]/25 to-transparent",
  },
  {
    name: "Supabase",
    desc: "Real-time backend, Auth, and PostgreSQL.",
    icon: Database,
    accent: "from-[oklch(0.78_0.16_150)]/25 to-transparent",
  },
  {
    name: "VS Code",
    desc: "My primary environment for clean coding.",
    icon: Code2,
    accent: "from-[oklch(0.65_0.18_240)]/25 to-transparent",
  },
  {
    name: "Git & GitHub",
    desc: "Version control and open-source collaboration.",
    icon: GitBranch,
    accent: "from-[oklch(0.75_0.16_30)]/25 to-transparent",
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Tech Stack" title="Tools I reach for daily" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative glass glow-border rounded-2xl p-5 overflow-hidden h-[180px]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${it.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative h-full flex flex-col justify-between">
                  <Icon className="w-7 h-7 text-foreground/80 group-hover:text-primary transition-colors" />
                  <div>
                    <h3 className="text-lg font-semibold">{it.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">
                      {it.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl">{title}</h2>
    </div>
  );
}
