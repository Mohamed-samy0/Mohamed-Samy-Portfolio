import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { SectionHeader } from "./TechStack";

const GITHUB_USERNAME = "Mohamed-samy0";

const customTheme = {
  light: [
    "#e4e4e7", // empty — zinc-200
    "#a5b4fc", // level 1 — indigo-300
    "#6366f1", // level 2 — indigo-500
    "#4f46e5", // level 3 — indigo-600
    "#312e81", // level 4 — indigo-900
  ],
  dark: [
    "#27272a", // empty — zinc-800
    "#4c1d95", // level 1 — violet-900
    "#6d28d9", // level 2 — violet-700
    "#8b5cf6", // level 3 — violet-500
    "#22d3ee", // level 4 — cyan-400
  ],
};

export function Activity() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="activity" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Open Source" title="Activity & Contributions" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glow-border rounded-3xl p-6 sm:p-10 flex flex-col items-center"
        >
          <div className="w-full overflow-x-auto">
            <div className="min-w-[750px] flex justify-center">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                theme={customTheme}
                colorScheme={isDark ? "dark" : "light"}
                blockSize={14}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground text-center max-w-xl leading-relaxed">
            Consistently committing code, exploring open-source projects, and refining software architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
