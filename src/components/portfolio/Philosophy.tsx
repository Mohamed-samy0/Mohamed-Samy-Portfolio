import { motion } from "framer-motion";
import { Boxes, Combine, Hammer } from "lucide-react";
import { SectionHeader } from "./TechStack";

const principles = [
  {
    icon: Boxes,
    title: "Component-Driven UI",
    body: "Small, focused, composable building blocks. Predictable props, no surprises, ship with confidence.",
  },
  {
    icon: Combine,
    title: "Compound Pattern",
    body: "Flexible APIs that express relationships between parts — power without prop drilling.",
  },
  {
    icon: Hammer,
    title: "Clean Code Architecture",
    body: "Boundaries that scale. SOLID principles applied pragmatically, not dogmatically.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Engineering Philosophy" title="How I build" />

        <div className="grid md:grid-cols-3 gap-5">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative glass glow-border rounded-2xl p-7 group hover:-translate-y-1 transition-transform"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                <div className="absolute top-4 right-5 font-mono text-xs text-muted-foreground/50">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
