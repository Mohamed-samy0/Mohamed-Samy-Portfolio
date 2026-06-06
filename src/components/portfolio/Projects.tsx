import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { SectionHeader } from "./TechStack";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
  image: string;
  caseStudy: {
    challenge: string;
    architecture: string;
    learnings: string;
  };
};

const projects: Project[] = [
  {
    title: "NextStore Platform",
    description:
      "A production-ready e-commerce solution built with Next.js 15 App Router, featuring server-side rendering, real-time payments, and enterprise-grade authentication.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "Supabase", "Stripe", "Clerk"],
    demo: "https://nextjs-store-project-alpha.vercel.app/",
    github: "https://github.com/Mohamed-samy0/nextjs-store-project",
    image:
      "https://github.com/user-attachments/assets/451095a4-b505-4f8e-93db-47b8de08ca91",
    caseStudy: {
      challenge:
        "Building a secure, scalable e-commerce platform that handles real-time payments, persistent carts, and prevents duplicate orders, all while keeping the client JS bundle size minimal for peak performance.",
      architecture:
        "Architected around Next.js 15 App Router using Server Components by default to eliminate hydration costs. Integrated Prisma as a type-safe ORM over a managed Supabase PostgreSQL database. Handled payments securely via Stripe webhooks rather than relying on brittle redirect URLs.",
      learnings:
        "Relying on server-side webhooks for payment confirmation is critical for reliability. Utilizing Prisma over direct SQL eliminated runtime errors by providing end-to-end type safety across the API and DB layers.",
    },
  },
  {
    title: "The Wild Oasis Dashboard",
    description:
      "A full-stack internal hotel management dashboard built for staff to manage cabins, bookings, and guests seamlessly.",
    tags: ["React 19", "React Query", "Supabase", "Styled Components"],
    demo: "https://the-wild-oasis-kohl-eight.vercel.app/dashboard",
    github: "https://github.com/mohamed-samy0/the-wild-oasis",
    image:
      "https://github.com/user-attachments/assets/ff31e445-5f9f-4764-a250-8a757d470b1d",
    caseStudy: {
      challenge:
        "Creating a performant, data-heavy dashboard for hotel staff to manage bookings, filter guest statuses, and handle cabin management with direct image uploads, all while maintaining a smooth and interactive UI.",
      architecture:
        "Built with React 19 and Vite. Utilized TanStack React Query for robust remote state management, caching, and optimistic UI updates. Supabase powered the PostgreSQL database, Authentication, and Storage for high-quality images. Used Recharts for dynamic data visualization.",
      learnings:
        "React Query drastically simplifies remote state management, making the app feel native and incredibly fast. Combining it with Supabase as a Backend-as-a-Service allows for rapid, secure development of complex internal tools.",
    },
  },
  {
    title: "The Wild Oasis Portal",
    description:
      "A luxurious customer-facing cabin booking platform where users can explore cabins, make reservations, and share experiences.",
    tags: ["Next.js 15", "NextAuth", "Tailwind CSS", "Server Actions"],
    demo: "https://the-rustic-haven-booking.vercel.app/",
    github: "https://github.com/mohamed-samy0/the-wild-oasis-website",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", // صورة فخمة للكابينة
    caseStudy: {
      challenge:
        "Designing a seamless reservation system with interactive date selection to prevent double-bookings, alongside engineering a custom full-stack review and rating system from scratch.",
      architecture:
        "Leveraged Next.js App Router with Server Components and Server Actions for data mutations without client-side JS overhead. Integrated NextAuth.js for secure Google OAuth login. Designed a relational database in Supabase linking Cabins, Guests, Bookings, and Reviews.",
      learnings:
        "Next.js Server Actions significantly streamline data mutation workflows (like adding/deleting reviews) and instantly update the UI using revalidatePath. Relational data modeling is key to a robust backend architecture.",
    },
  },
  {
    title: "Fast React Pizza Co.",
    description:
      "A modern, highly interactive web application for ordering pizzas, featuring custom UI redesign and fluid animations.",
    tags: ["React Router", "Redux Toolkit", "Framer Motion", "Tailwind"],
    demo: "https://fast-react-pizza-co-olive.vercel.app/",
    github: "https://github.com/Mohamed-samy0/Fast-React-Pizza-Co.",
    image:
      "https://github.com/user-attachments/assets/6d311556-b06a-4cb5-bc58-daae76bcf014",
    caseStudy: {
      challenge:
        "Building a complex cart and ordering system that stays perfectly in sync across routes without loading spinners, while delivering a premium UX with buttery-smooth animations and reverse-geocoding.",
      architecture:
        "Utilized React Router's modern loaders and actions for 'fetch-before-render' data fetching. Redux Toolkit manages global cart state. Framer Motion drives staggered list animations and spring-based reveals, all styled with Tailwind CSS v4.",
      learnings:
        "Fetching data within routing mechanisms (loaders/actions) provides a vastly superior UX compared to traditional fetch-on-render patterns. Purposeful animations elevate the perceived performance and premium feel of the app.",
    },
  },
];
function CaseStudySection({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
        {eyebrow}
      </p>
      <h4 className="font-display text-lg font-semibold text-foreground mb-2 tracking-tight">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative glass glow-border rounded-3xl overflow-hidden transition-shadow flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-15 mix-blend-overlay" />
        <div className="absolute bottom-3 left-5 right-5">
          <span className="font-display text-2xl font-semibold text-white tracking-tight drop-shadow-lg">
            {p.title}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/70 text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* أزرار الكارت من تحت */}
        <div className="mt-auto flex items-center gap-3 flex-wrap">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full bg-gradient-primary text-white shadow-glow hover:opacity-95 transition-opacity"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Case Study
              </button>
            </DialogTrigger>
            <DialogContent className="glass border-white/10 sm:max-w-2xl max-h-[85vh] overflow-y-auto p-0 backdrop-blur-2xl">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>

              <div className="px-7 pb-7 -mt-10 relative">
                <DialogHeader className="text-left mb-5">
                  <DialogTitle className="font-display text-3xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </DialogTitle>
                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-all"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-border">·</span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      GitHub <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 mb-7 pb-7 border-b border-border">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/70 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-7">
                  <CaseStudySection
                    eyebrow="01"
                    title="The Challenge"
                    body={p.caseStudy.challenge}
                  />
                  <CaseStudySection
                    eyebrow="02"
                    title="Architecture & Approach"
                    body={p.caseStudy.architecture}
                  />
                  <CaseStudySection
                    eyebrow="03"
                    title="Key Learnings"
                    body={p.caseStudy.learnings}
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* زرار الـ Live Demo اللي ظهرناه بره */}
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-1"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>

          {/* زرار الـ GitHub */}
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Featured Work" title="Selected projects" />

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
