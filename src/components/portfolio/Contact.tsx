import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Check } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "./TechStack";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }

    setErrors({});

    form.append("access_key", "d1222c5c-8e6e-4cf3-8079-7b73df2fb943");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Get in touch" title="Let's build something great." />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-6"
        >
          <div className="md:col-span-2 glass glow-border rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Have a project, role, or idea? I reply within 24 hours.
              </p>
              <a
                href="mailto:mohamedsamy42302@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" /> mohamedsamy42302@gmail.com
              </a>
            </div>
            <div className="flex gap-2 mt-8">
              <SocialLink href="https://github.com/MohamedSamy42302" icon={Github} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/mohamedsamy42302" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="mailto:mohamedsamy42302@gmail.com" icon={Mail} label="Email" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 glass glow-border rounded-2xl p-6 space-y-4">
            <Field label="Name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Message" name="message" textarea error={errors.message} />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-white rounded-xl py-3 font-medium shadow-glow hover:opacity-95 transition-opacity"
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4" /> Sent
                </>
              ) : (
                <>
                  Send message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const base =
    "w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:bg-background/70";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} maxLength={1000} className={base} />
      ) : (
        <input name={name} type={type} maxLength={255} className={base} />
      )}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: typeof Github; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
