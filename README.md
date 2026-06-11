<div align="center">

```
███╗   ███╗ ██████╗ ██╗  ██╗ █████╗ ███╗   ███╗███████╗██████╗
████╗ ████║██╔═══██╗██║  ██║██╔══██╗████╗ ████║██╔════╝██╔══██╗
██╔████╔██║██║   ██║███████║███████║██╔████╔██║█████╗  ██║  ██║
██║╚██╔╝██║██║   ██║██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║
██║ ╚═╝ ██║╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝
                                                   S A M Y
```

<br/>

**`Full-Stack Developer · UI Craftsman · Problem Solver`**

<br/>

[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-000000?style=for-the-badge&logoColor=white)](https://mohamedsamy.engineer)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mohamed-samy0)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamed-samy-886516377/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohamedsamy42302@email.com)

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-96.3%25-3178C6?style=flat-square&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3.2%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-0.5%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

---

## ⚡ Overview

> A **production-grade personal portfolio** built with cutting-edge web technologies — designed to be fast, animated, and visually unforgettable.

This isn't just a portfolio. It's a **living demo** of what I can build: performant React apps with fluid animations, server-side rendering, type-safe architecture, and seamless deployment to the edge.

---

## 🛠️ Tech Stack

### Core Framework

| Technology | Role |
|---|---|
| **React 19** | UI library with concurrent features |
| **TanStack Start** | Full-stack React framework (SSR + file-based routing) |
| **TypeScript** | End-to-end type safety |
| **Vite 7** | Lightning-fast build tool |

### Styling & UI

| Technology | Role |
|---|---|
| **Tailwind CSS v4** | Utility-first styling engine |
| **shadcn/ui** | Beautifully designed component primitives |
| **Radix UI** | Accessible, unstyled component foundation |
| **Framer Motion** | Production-ready animations & transitions |
| **tw-animate-css** | Extended animation utilities |

### Data & State

| Technology | Role |
|---|---|
| **TanStack Query v5** | Async state management & data fetching |
| **TanStack Router** | Type-safe, file-based routing |
| **React Hook Form** | Performant form management |
| **Zod** | Schema validation |

### Deployment & Tooling

| Technology | Role |
|---|---|
| **Cloudflare Pages** | Edge deployment — global, instant, free |
| **Bun** | Fast JavaScript runtime & package manager |
| **Prettier** | Code formatting |
| **ESLint** | Code quality enforcement |

---

## ✨ Features

- 🚀 **Server-Side Rendered** — fast first paint, great SEO
- 🎨 **Animated UI** — smooth transitions powered by Framer Motion
- 🌐 **Edge Deployed** — served globally via Cloudflare's CDN
- 📱 **Fully Responsive** — pixel-perfect on every device
- ♿ **Accessible** — built on Radix UI primitives with ARIA standards
- 🌙 **Dark / Light Mode** — system-aware theming
- 📊 **GitHub Activity** — live contribution calendar via `react-github-calendar`
- ⚡ **Type Safe** — strict TypeScript throughout the entire codebase

---

## 🗂️ Project Structure

```
Mohamed-Samy-Portfolio/
├── public/                 # Static assets (favicon, images, etc.)
├── src/
│   ├── routes/             # File-based routing (TanStack Router)
│   │   ├── __root.tsx      # Root layout & providers
│   │   └── index.tsx       # Home page
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # shadcn/ui primitives
│   │   └── sections/       # Portfolio sections (Hero, About, Projects…)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & helpers
│   └── styles/             # Global CSS & Tailwind config
├── .prettierrc             # Formatting rules
├── vite.config.ts          # Vite + Cloudflare plugin config
├── wrangler.jsonc          # Cloudflare Workers/Pages config
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) ≥ 1.0 (recommended) **or** Node.js ≥ 18
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Mohamed-samy0/Mohamed-Samy-Portfolio.git
cd Mohamed-Samy-Portfolio

# Install dependencies (with Bun)
bun install

# Start the dev server
bun dev
```

> The app will be available at **http://localhost:5173**

### Build for Production

```bash
# Standard build
bun run build

# Preview the production build locally
bun run preview
```

### Deploy to Cloudflare Pages

```bash
# Deploy via Wrangler CLI
bunx wrangler pages deploy dist
```

---

## 🧪 Available Scripts

| Script | Description |
|---|---|
| `bun dev` | Start development server |
| `bun run build` | Build for production |
| `bun run build:dev` | Build in development mode |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format code with Prettier |

---

## 🌐 Deployment

This portfolio is deployed on **Cloudflare Pages** — leveraging the Cloudflare plugin for Vite for edge-optimized SSR. Every push to `main` triggers an automatic deployment.

```
Production URL → (https://mohamed-samy.mohamed0.workers.dev/)
```

<div align="center">

**Designed & built by Mohamed Samy**

*If you found this helpful, consider leaving a ⭐*

</div>
