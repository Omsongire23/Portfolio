import React from "react"
import {
  ArrowDown,
  FileText,
  Send,
  MapPin,
  Sparkles,
  Orbit,
  Bot,
  Terminal,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons"
import { PERSONAL_INFO } from "../data/portfolioData"

export const Hero: React.FC = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero"
    >
      {/* Center Orbital Celestial Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[720px] h-[340px] sm:h-[540px] md:h-[720px] pointer-events-none opacity-40 -z-10">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-orbit" />
        {/* Middle Ring */}
        <div className="absolute inset-8 sm:inset-16 rounded-full border border-blue-500/15" />
        {/* Inner Ring with Glowing Node */}
        <div className="absolute inset-20 sm:inset-36 rounded-full border border-cyan-400/25 animate-float-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400" />
          <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-amber-400 shadow-md shadow-amber-400" />
        </div>
        {/* Center celestial aura */}
        <div className="absolute inset-32 sm:inset-48 rounded-full bg-gradient-to-tr from-cyan-600/10 via-blue-700/15 to-transparent blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08102b]/80 border border-cyan-500/30 shadow-md shadow-cyan-950/50 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
          <span className="font-mono-code text-xs font-medium tracking-wider text-cyan-300 uppercase">
            {PERSONAL_INFO.title}
          </span>
        </div>

        {/* Primary Name Display */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 drop-shadow-sm">
          <span className="inline-block transition-transform hover:scale-[1.01]">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Secondary Title / Punchline */}
        <p className="font-heading font-medium text-lg sm:text-2xl md:text-3xl text-cyan-200/90 max-w-2xl mb-5 leading-snug">
          “{PERSONAL_INFO.tagline}”
        </p>

        {/* Concise Credible Summary */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300/90 max-w-2xl mb-8 leading-relaxed font-light">
          Computer Engineering student specializing in building production-ready
          Generative AI systems, RAG pipelines, and cloud-native automation
          while spearheading community learning across Maharashtra.
        </p>

        {/* Location & Status Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 mb-10">
          <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/50 rounded-full px-3 py-1">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-3 py-1 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{PERSONAL_INFO.availability}</span>
          </div>
        </div>

        {/* The 3 Core Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
          {/* 1. Explore Selected Work */}
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "#work")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-950/60 hover:shadow-cyan-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* 2. View Resume */}
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#09112e]/80 hover:bg-[#0f1b47] text-cyan-200 hover:text-white border border-cyan-500/30 hover:border-cyan-400/60 font-medium text-sm backdrop-blur-md shadow-md shadow-black/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
          >
            <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>View Resume</span>
            <span className="font-mono-code text-[11px] px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/20">
              PDF
            </span>
          </a>

          {/* 3. Contact Me */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700/50 hover:border-slate-500 font-medium text-sm backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
          >
            <Send className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Understated GitHub and LinkedIn Icon Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-800/60">
          <span className="text-xs text-slate-400 font-mono-code uppercase tracking-wider">
            Connect:
          </span>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Om Songire's GitHub profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Om Songire's LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Gentle Scroll Hint at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[11px] font-mono-code uppercase tracking-widest text-slate-400">
          Scroll to Explore
        </span>
        <div className="w-4 h-7 rounded-full border border-cyan-500/30 flex justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
