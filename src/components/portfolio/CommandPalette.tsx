import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Code2, Mail, Github, FileDown, FolderSearch, ExternalLink } from "lucide-react";

type Item = {
  id: string;
  label: string;
  hint?: string;
  icon: typeof Search;
  run: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function close() {
    setOpen(false);
    setQuery("");
  }

  const items: Item[] = [
    {
      id: "search",
      label: "Search Projects",
      hint: "Jump to featured work",
      icon: FolderSearch,
      run: () => {
        close();
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "copy-email",
      label: "Copy Email",
      hint: "mohamedsamy42302@gmail.com",
      icon: Mail,
      run: () => {
        navigator.clipboard?.writeText("mohamedsamy42302@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
    },
    {
      id: "github",
      label: "Go to GitHub",
      hint: "Open profile",
      icon: Github,
      run: () => {
        window.open("https://github.com/Mohamed-samy0", "_blank", "noopener,noreferrer");
        close();
      },
    },
    {
      id: "cv",
      label: "Download CV (PDF)",
      hint: "Latest resume",
      icon: FileDown,
      run: () => {
        const a = document.createElement("a");
        a.href = "/Mohamed_Samy_CV.pdf";
        a.download = "Mohamed_Samy_CV.pdf";
        a.click();
        close();
      },
    },
  ];

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl glass glow-border rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
              <kbd className="text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5">
                ESC
              </kbd>
            </div>

            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-muted-foreground">No results found.</li>
              )}
              {filtered.map((it) => {
                const Icon = it.icon;
                const isCopy = it.id === "copy-email";
                return (
                  <li key={it.id}>
                    <button
                      onClick={it.run}
                      className="w-full group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-primary/10 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-secondary/60 border border-border text-foreground/80 group-hover:text-accent group-hover:border-accent/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 text-left">
                        <span className="block font-medium">{it.label}</span>
                        {it.hint && (
                          <span className="block text-[11px] text-muted-foreground">
                            {isCopy && copied ? "Copied!" : it.hint}
                          </span>
                        )}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="px-4 py-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Navigate with arrows</span>
              <span className="flex items-center gap-1">
                <kbd className="font-mono border border-border rounded px-1.5 py-0.5">⌘</kbd>
                <kbd className="font-mono border border-border rounded px-1.5 py-0.5">K</kbd>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
