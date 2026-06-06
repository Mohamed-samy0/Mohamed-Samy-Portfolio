import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";

type Log = { text: string; type: "input" | "output" | "error" | "success" };

export function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Log[]>([
    { text: "Welcome to Mohamed Samy's Interactive Shell v1.0.0", type: "success" },
    { text: "Type 'help' to see available commands.", type: "output" },
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const commands: Record<string, () => void> = {
    help: () => {
      setHistory((prev) => [
        ...prev,
        { text: "Available commands:", type: "output" },
        { text: "  whoami   - Display bio and education background", type: "output" },
        { text: "  projects - List production-ready portfolio applications", type: "output" },
        { text: "  skills   - Output core engineering tech stack", type: "output" },
        { text: "  clear    - Flush the terminal screen screen buffer", type: "output" },
      ]);
    },
    whoami: () => {
      setHistory((prev) => [
        ...prev,
        { text: "User: Mohamed Samy", type: "success" },
        { text: "Role: Front-End Engineer specializing in modern web ecosystems.", type: "output" },
        { text: "Education: Faculty of Computers and Information - Artificial Intelligence Department (1st Year).", type: "output" },
        { text: "Focus: Scalable architectures, state management, and user-centric design.", type: "output" },
      ]);
    },
    projects: () => {
      setHistory((prev) => [
        ...prev,
        { text: "Loading core architectural artifacts...", type: "output" },
        { text: "• NextStore Platform (Next.js 15, Prisma, Stripe, Supabase)", type: "success" },
        { text: "• The Wild Oasis Dashboard (React 19, TanStack Query, Supabase)", type: "success" },
        { text: "• The Wild Oasis Customer Portal (Next.js 15, NextAuth, Server Actions)", type: "success" },
        { text: "• Fast React Pizza Co. (Redux Toolkit, Framer Motion, Tailwind CSS)", type: "success" },
      ]);
    },
    skills: () => {
      setHistory((prev) => [
        ...prev,
        { text: "Advanced ecosystem proficiencies:", type: "output" },
        { text: "Core: React, Next.js (App Router), TypeScript, JavaScript (ES6+)", type: "success" },
        { text: "State & Data: Redux Toolkit, TanStack React Query, Prisma ORM", type: "success" },
        { text: "Styles & Auth: Tailwind CSS, Styled Components, NextAuth, Clerk", type: "success" },
        { text: "Backend-as-a-Service: Supabase (PostgreSQL, RLS, Realtime)", type: "success" },
      ]);
    },
    clear: () => setHistory([]),
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;

    const newLogs: Log[] = [...history, { text: `guest@mohamedsamy.dev:~$ ${input}`, type: "input" }];
    setHistory(newLogs);
    setInput("");

    if (commands[trimmedInput]) {
      commands[trimmedInput]();
    } else {
      setHistory((prev) => [
        ...prev,
        { text: `bash: command not found: ${trimmedInput}. Type 'help' for options.`, type: "error" },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-zinc-900 border border-white/10 text-primary shadow-glow hover:scale-105 transition-transform"
        aria-label="Toggle Terminal Console"
      >
        <TerminalIcon className="w-5 h-5 text-[#00FFFF]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-lg h-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col font-mono text-xs overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-zinc-900/80 px-4 py-3 border-b border-white/5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-muted-foreground ml-2 text-[11px]">developer@mohamedsamy: ~</span>
              </div>
            </div>

            {/* Terminal Logs Area */}
            <div className="p-4 flex-1 overflow-y-auto space-y-1.5 scrollbar-thin">
              {history.map((log, i) => (
                <div
                  key={i}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    log.type === "input" ? "text-white font-semibold" :
                    log.type === "error" ? "text-rose-400" :
                    log.type === "success" ? "text-[#00FFFF]" : "text-zinc-300"
                  }`}
                >
                  {log.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Prompt Input */}
            <form onSubmit={handleCommand} className="p-3 bg-zinc-900/30 border-t border-white/5 flex items-center gap-2">
              <span className="text-[#BF40BF] font-bold">guest@mohamedsamy:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white caret-[#00FFFF]"
                autoFocus
                placeholder="type commands here..."
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}