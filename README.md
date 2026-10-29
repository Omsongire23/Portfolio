<div align="center">

# Personal Portfolio

</div>

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Available_for_Opportunities-00E5FF?style=for-the-badge)](https://www.linkedin.com/in/omsongire/)

<p align="center">
  <strong>Generative AI · AI/ML · Data Science · DevOps · Community Building</strong>
</p>

<p align="center">
  <em>“Build intelligent AI applications, RAG-powered systems, and cloud-native solutions, turning data into actionable insights while empowering developer communities to learn, build, and grow together.”</em>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/omsongire/">LinkedIn</a> •
  <a href="https://github.com/Omsongire23">GitHub</a> •
  <a href="mailto:omsantoshsongire23@gmail.com">Email</a> •
  <a href="#-quick-start">Quick Start</a>
</p>

</div>

---

## About Me

I am an undergraduate Computer Engineering student based in **Nashik, Maharashtra, India**, passionate about building reliable Generative AI systems, context-grounded RAG architectures, and scalable cloud-native pipelines. Beyond engineering, I actively lead and foster developer communities across Maharashtra.

- 📍 **Location:** Nashik, Maharashtra, India
- 💼 **Status:** Available for Opening Opportunities!
- 🎓 **Education:** B.E. in Computer Engineering (Expected 2026)
- 🌐 **Profiles:** [LinkedIn](https://www.linkedin.com/in/omsongire/) | [GitHub](https://github.com/Omsongire23)
- ✉️ **Email:** [omsantoshsongire23@gmail.com](mailto:omsantoshsongire23@gmail.com)

---

## Features & Architecture

- **🌌 Celestial Particle Canvas (`CosmicCanvas.tsx`)**: An interactive HTML5 canvas space engine with twinkling stars, celestial orbital mechanics, interactive cursor trails, and full `prefers-reduced-motion` accessibility support.
- **⚡ Modern Technology Stack**: Built with React 19, TypeScript, and the latest Tailwind CSS v4 running on Vite 8 for instant hot-module replacement and ultra-fast production builds.
- **🛠️ Interactive Skills Matrix (`Skills.tsx`)**: Live search and categorised exploration covering Generative AI, Machine Learning, Backend, Cloud & DevOps, and Developer Tools.
- **🚀 Featured Projects Showcase (`Projects.tsx`, `ProjectModal.tsx`)**: Deep-dive modals with architectural breakdowns, problem statements, technical implementation details, key outcomes, and live repository links.
- **📊 Real-World Community Impact (`Impact.tsx`)**: Metrics highlighting 6+ developer workshops, 1,000+ engineers reached, and 3 regional community chapters.
- **📱 Fully Responsive & Accessible**: Mobile-first architecture with semantic HTML5 elements, keyboard-accessible modals, and high-contrast glassmorphic design.

---

## Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/) (with `@tailwindcss/vite`), Custom Glassmorphism |
| **Build Tooling** | [Vite 8](https://vitejs.dev/), [pnpm](https://pnpm.io/) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/), Custom HTML5 Canvas Particle Engine |
| **Form & Navigation** | Native React Hooks, Custom Smooth Scrolling, Mailto Integration |

---

## Project Structure

```text
portfolio/
├── public/
│   ├── assets/
│   │   ├── backgrounds/          # Cosmic background assets
│   │   └── Om_Songire_Resume.pdf # Downloadable resume PDF
│   └── resume.pdf                # Verified root resume PDF
├── src/
│   ├── components/               # UI Components
│   │   ├── About.tsx             # Editorial biography & architecture matrix
│   │   ├── Community.tsx         # GDG, ML Nashik, & Grafana leadership
│   │   ├── Contact.tsx           # Contact form & clipboard integration
│   │   ├── CosmicCanvas.tsx      # Particle background animation
│   │   ├── Education.tsx         # Academics & verified certifications
│   │   ├── Experience.tsx        # Professional internships & achievements
│   │   ├── Footer.tsx            # Navigation links & copyright
│   │   ├── Hero.tsx              # Interactive landing section
│   │   ├── Impact.tsx            # Quantitative metrics & ecosystem milestones
│   │   ├── Navbar.tsx            # Fixed blur navbar with mobile drawer
│   │   ├── ProjectModal.tsx      # Comprehensive project case-study modal
│   │   ├── Projects.tsx          # Filterable project portfolio grid
│   │   └── Skills.tsx            # Searchable technical skills explorer
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for portfolio data
│   ├── types/
│   │   └── portfolio.ts          # Strongly-typed TypeScript interfaces
│   ├── App.tsx                   # Main application layout
│   ├── index.css                 # Tailwind CSS v4 styling & theme tokens
│   └── main.tsx                  # React DOM entrypoint
├── index.html                    # HTML shell
├── package.json                  # Scripts & dependencies
├── pnpm-lock.yaml                # Deterministic dependency tree
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build & plugin configurations
```

---

## Quick Start

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [pnpm](https://pnpm.io/) (v9 or v10) or [npm](https://www.npmjs.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Omsongire23/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

Using `pnpm` (recommended):
```bash
pnpm install
```

Or using `npm`:
```bash
npm install
```

### 3. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the displayed port) in your browser to view the application.

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `pnpm build` | Builds the optimized production bundle in `/dist` |
| `pnpm preview` | Locally previews the production build |
| `pnpm format` | Formats code using `oxfmt` |
| `npx tsc --noEmit` | Validates TypeScript types across the codebase |

---

## Key Highlights & Leadership

- **Core Team Member — GDG Nashik**: Co-organizing DevFest and Google Developer community initiatives across the region.
- **Campus Lead — ML Nashik**: Leading hands-on Machine Learning, Python, and Generative AI bootcamps for student developers.
- **Co-organizer — Grafana & Friends Mumbai**: Fostering discussions on cloud observability, Prometheus, and OpenTelemetry.
- **Internships**:
  - *DevOps Intern* at Deboistech IT Solutions (CI/CD, Kubernetes, Docker, Linux telemetry automation).
  - *Machine Learning Intern* at Edunet Foundation / IBM SkillsBuild (Supervised learning models, exploratory data analysis).

---

## Contact & Connect

- **Email:** [omsantoshsongire23@gmail.com](mailto:omsantoshsongire23@gmail.com)
- **LinkedIn:** [linkedin.com/in/omsongire](https://www.linkedin.com/in/omsongire/)
- **GitHub:** [github.com/Omsongire23](https://github.com/Omsongire23)

---
