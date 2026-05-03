# Portfolio

A modern portfolio website showcasing my work as a full-stack developer specializing in observability, infrastructure monitoring, and high-performance systems.

Built with [Next.js 16](https://nextjs.org), TypeScript, and Tailwind CSS v4.

## Features

- **Home** — Hero section with key metrics and areas of expertise
- **Projects** — Detailed project showcases with status indicators, tech tags, and highlights
- **Stack** — Skill breakdown across frontend, backend, databases, infrastructure, and observability
- **Guides** — Technical guides and resources
- **Contact** — Get in touch form
- **Dark/Light Mode** — Theme switching via `ThemeProvider`
- **Responsive Design** — Fully responsive across all screen sizes

## Tech Stack

| Category       | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| Framework      | Next.js 16 (App Router), React 19                                            |
| Language       | TypeScript 5                                                                 |
| Styling        | Tailwind CSS v4, PostCSS                                                     |
| Icons          | Lucide React                                                                 |
| Linting        | ESLint 9                                                                     |
| Deployment     | Vercel                                                                       |

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Start the development server         |
| `npm run build`| Build for production                 |
| `npm run start`| Start the production server          |
| `npm run lint` | Run ESLint                           |

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── guides/          # Technical guides
│   ├── projects/        # Projects showcase
│   ├── stack/           # Tech stack / skills
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Shared components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ThemeProvider.tsx
└── lib/                 # Data and utilities
    ├── guides.ts
    ├── projects.ts
    └── skills.ts
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

## Deploy

Deploy on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) — the easiest way to deploy Next.js apps.
