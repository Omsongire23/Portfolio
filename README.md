# Om Songire — Cinematic Space Portfolio

A high-performance, cinematic personal portfolio for **Om Songire**, an undergraduate Computer Engineering student specializing in **Generative AI, LLM Applications, AI/ML, DevOps, and Developer Community Leadership**.

Designed with an immersive cosmic visual language inspired by alien planetary basalt landscapes, glowing cyan crystals, molten magma fissures, deep navy stellar gradients, and interactive orbital mechanics.

---

## Verified Identity & Profiles

- **Name:** Om Songire
- **Headline:** Generative AI & LLM Applications · AI/ML · Developer Community
- **Location:** Nashik, Maharashtra, India
- **LinkedIn:** [linkedin.com/in/omsongire](https://www.linkedin.com/in/omsongire/)
- **GitHub:** [github.com/Omsongire23](https://github.com/Omsongire23)
- **Email:** `omsongire23@gmail.com`
- **Resume PDF:** `/resume.pdf` & `/assets/Om_Songire_Resume.pdf`

---

## Architecture & Key Sections

1. **Floating Cosmic Navbar (`src/components/Navbar.tsx`)**
   - Monogram initials logo ("OS") with glowing circular border.
   - Navigation links: *About, Work, Impact, Experience, Skills, Community, Contact* (strictly no resume link in the navbar).
   - Prominent "Get in Touch" electric gradient CTA.
   - Responsive mobile navigation drawer.

2. **Cinematic Hero (`src/components/Hero.tsx`)**
   - Full-viewport space centerpiece displaying **Om Songire**.
   - Core punchline: *"I build AI systems — and help the communities around them grow."*
   - 3 verified primary actions:
     - **Explore Selected Work** (smooth scrolls to `#work`).
     - **View Resume** (opens the verified PDF in a new tab).
     - **Contact Me** (scrolls to `#contact`).
   - Understated GitHub and LinkedIn profile links.

3. **About Section (`src/components/About.tsx`)**
   - Editorial narrative highlighting real-world Generative AI, RAG architectures, and DevOps.
   - Interactive **AI Systems Architecture Matrix** spanning Model Layer, Retrieval/Orchestration, Systems/DevOps, and Community Impact.

4. **Selected Work & Projects (`src/components/Projects.tsx` & `ProjectModal.tsx`)**
   - **VERIQ**: Compliance readiness & audit-workflow automation platform with AI-assisted document validation and evidence mapping.
   - **APPEX AI Test Framework**: Autonomous Playwright QA automation with self-healing selector routines and dynamic synthetic test data generation.
   - **EdutechAssistant**: Context-aware RAG educational tutor using Google Gemini API, LangChain, and FAISS vector indices with verified textbook citations.
   - **Digiton**: Digital forensic analysis tool for images with Error Level Analysis (ELA) and pixel variance detection.
   - Interactive category filter & comprehensive deep-dive project modal.

5. **Impact & Reach (`src/components/Impact.tsx`)**
   - Documented metrics: 6+ Technical Events & Workshops, 1,000+ Students & Developers reached, 3 Developer Communities led.
   - Narrative milestone breakdowns.

6. **Experience (`src/components/Experience.tsx`)**
   - **DevOps Intern — Deboistech IT Solutions** (June 2026 – September 2026): CI/CD, Linux, GitHub Actions, Jenkins, Docker, Kubernetes, AWS, and feature engineering on monitoring telemetry.
   - **Machine Learning Intern — Edunet Foundation (IBM SkillsBuild)** (January 2025 – March 2025): Supervised predictive models, EDA, data preprocessing, and evaluation pipelines.

7. **Interactive Skills Explorer (`src/components/Skills.tsx`)**
   - Categorized technology matrix with real-time search: *Generative AI, Programming, AI/ML & Data, Backend, DevOps & Cloud, Tools, Currently Learning*.
   - Usage context and proficiency badges for every technology.
   - Spotlight on current 2025 explorations: Multi-Agent Systems (LangGraph, CrewAI), Cloud Observability (Grafana, Prometheus), and LLM Fine-Tuning/Quantization.

8. **Developer Community (`src/components/Community.tsx`)**
   - **Core Team Member — GDG Nashik** (Google Developer Groups): DevFest and GenAI technical events.
   - **Campus Lead — ML Nashik**: Student ML circles and hands-on coding bootcamps.
   - **Co-organizer — Grafana & Friends Mumbai**: Cloud observability and telemetry meetups.

9. **Education & Certifications (`src/components/Education.tsx`)**
   - Bachelor of Engineering (B.E.) in Computer Engineering (Expected 2026), Nashik, Maharashtra.
   - Verified certifications: IBM SkillsBuild AI & Data Science, AWS Cloud Foundations, Generative AI Mastery.

10. **Contact & Footer (`src/components/Contact.tsx` & `Footer.tsx`)**
    - One-click verified email copy with visual confirmation.
    - Interactive message dispatch form with pre-filled mailto integration.
    - Live India Standard Time (IST) clock for Nashik, India.
    - Accessible back-to-top button and semantic landmarks.

11. **Celestial Background Engine (`src/components/CosmicCanvas.tsx`)**
    - Layered composition incorporating the reference space artwork (`public/assets/backgrounds/space-cosmic-bg.png`).
    - HTML5 canvas particle starfield with twinkling stars, shooting meteors, and cursor interaction.
    - Full `prefers-reduced-motion` compliance.

---

## Asset Conventions

- Cosmic background artwork: `public/assets/backgrounds/space-cosmic-bg.png`
- Resume document: `public/resume.pdf` and `public/assets/Om_Songire_Resume.pdf`

---

## Available Scripts

```bash
# Install dependencies
pnpm install

# Start Vite local development server
pnpm dev

# Run production build and TypeScript verification
pnpm run build

# Format codebase
pnpm run format
```

---

## Accessibility & Performance

- Semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`, `role="dialog"`).
- Visible focus ring indicators on all interactive controls.
- Full keyboard navigation support (escape key closes modals, tab navigation).
- Automatic reduction of particle effects when `prefers-reduced-motion` is active.

---

© Om Songire. All rights reserved.
