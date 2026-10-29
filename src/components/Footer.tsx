import React, { useState, useEffect } from "react"
import { ArrowUp, Mail, Sparkles, MapPin, Clock } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons"
import { PERSONAL_INFO } from "../data/portfolioData"

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      const formatter = new Intl.DateTimeFormat([], options)
      setIstTime(formatter.format(new Date()))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerNav = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Impact", href: "#impact" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#030612]/90 backdrop-blur-md z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-heading font-bold text-xs text-white">
              OS
            </div>
            <span className="font-heading font-bold text-lg text-white">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-light max-w-sm">
            Generative AI & LLM Applications · AI/ML Systems · Developer
            Community
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-300 font-medium">
          {footerNav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-900 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono-code">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>Nashik, Maharashtra, India</span>
          <span className="text-slate-600">·</span>
          <div className="flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{istTime || "IST"}</span>
          </div>
        </div>

        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with
          precision.
        </div>
      </div>
    </footer>
  )
}
