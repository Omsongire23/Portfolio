import React, { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Impact } from "./components/Impact"
import { Experience } from "./components/Experience"
import { Skills } from "./components/Skills"
import { Community } from "./components/Community"
import { Education } from "./components/Education"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { CosmicCanvas } from "./components/CosmicCanvas"

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState<boolean>(false)

  useEffect(() => {
    // Check reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handleMotionChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handleMotionChange)

    // Section observer for active navbar highlighting
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      },
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange)
      sections.forEach((sec) => observer.unobserve(sec))
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#040714] text-slate-100 selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium text-xs shadow-lg"
      >
        Skip to content
      </a>

      {/* Atmospheric Cosmic Canvas & Artwork Background */}
      <CosmicCanvas reducedMotion={prefersReducedMotion} />

      {/* Persistent Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Impact />
        <Experience />
        <Skills />
        <Community />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
