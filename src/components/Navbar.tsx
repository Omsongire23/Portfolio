import React, { useState, useEffect } from "react"
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react"
import { PERSONAL_INFO } from "../data/portfolioData"

interface NavbarProps {
  activeSection: string
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Impact", href: "#impact" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" },
  ]

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Circular Initials Logo "OS" */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="group relative flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full"
          aria-label="Om Songire - Home"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-indigo-950/80 p-px border border-cyan-400/40 shadow-lg shadow-cyan-500/20 group-hover:border-cyan-300 group-hover:shadow-cyan-400/40 transition-all duration-300 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#070d24]/90 flex items-center justify-center">
              <span className="font-heading font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 group-hover:scale-105 transition-transform">
                {PERSONAL_INFO.initials}
              </span>
            </div>
            {/* Orbital tiny dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-300 animate-ping opacity-60" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-heading font-semibold text-sm tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
              Om Songire
            </span>
            <span className="font-mono-code text-[10px] text-cyan-400/80 uppercase tracking-widest">
              AI & Systems
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#080e28]/85 backdrop-blur-md border border-cyan-500/20 shadow-lg shadow-black/40"
              : "bg-[#080e28]/50 backdrop-blur-sm border border-cyan-500/10"
          }`}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 shadow-xs shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {/* Ambient glow & gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-1.5 z-10">
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-slate-900/80 border border-cyan-500/20 text-slate-200 hover:text-white hover:border-cyan-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto rounded-2xl bg-[#090f2a]/95 backdrop-blur-xl border border-cyan-500/25 p-4 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-300 bg-cyan-950/50 border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
            <div className="pt-2 mt-2 border-t border-slate-800/60 flex items-center justify-between px-2 text-xs text-slate-400">
              <span>📍 Nashik, India</span>
              <span className="text-cyan-400 font-mono-code text-[11px]">
                AI Systems
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
