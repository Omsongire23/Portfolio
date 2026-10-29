import React, { useState } from "react"
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons"
import { PERSONAL_INFO } from "../data/portfolioData"

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return

    setIsSubmitting(true)
    // Simulate clean dispatch and prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // Open client's email program with pre-filled content
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formState.subject || "Portfolio Inquiry: Om Songire",
      )}&body=${encodeURIComponent(
        `Hello Om,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`,
      )}`
      window.location.href = mailtoUrl
    }, 600)
  }

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Contact Om Songire"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>08 / Get In Touch</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-2xl">
          Let’s Build{" "}
          <span className="cosmic-cyan-gradient">Intelligent Systems</span>{" "}
          Together.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light">
          Open for AI engineering internships, full-stack ML development,
          community speaking engagements, and collaborative open-source
          projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Links & Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Quick-Copy Card */}
          <div className="cosmic-glass p-6 rounded-3xl border border-cyan-500/25 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono-code text-[11px] text-cyan-400 uppercase tracking-wider">
                Direct Email
              </span>
              <span className="text-xs font-mono-code text-slate-400">
                Verified
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="truncate text-sm font-medium text-white">
                {PERSONAL_INFO.email}
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0 flex items-center gap-1.5 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Verified Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-card p-5 rounded-2xl border hover:border-cyan-400/40 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <span className="font-heading font-semibold text-sm text-white">
                LinkedIn
              </span>
              <span className="text-[11px] text-slate-400 font-mono-code truncate">
                /in/omsongire
              </span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-card p-5 rounded-2xl border hover:border-cyan-400/40 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <GithubIcon className="w-5 h-5 text-cyan-400" />
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <span className="font-heading font-semibold text-sm text-white">
                GitHub
              </span>
              <span className="text-[11px] text-slate-400 font-mono-code truncate">
                @Omsongire23
              </span>
            </a>
          </div>

          {/* Location & Availability Note */}
          <div className="p-5 rounded-2xl bg-[#080e28]/70 border border-slate-800 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-300">
                Based in {PERSONAL_INFO.location}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Open to remote roles globally and on-site / hybrid opportunities
                in Mumbai, Pune, and Bengaluru.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Dispatcher (7 cols) */}
        <div className="lg:col-span-7">
          <div className="cosmic-card p-6 sm:p-8 rounded-3xl border border-cyan-500/25 relative overflow-hidden">
            <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              Whether you want to discuss a role, explore an AI prototype, or
              organize a community workshop, leave a message below.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center animate-in fade-in duration-300">
                <Check className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-lg text-white mb-1">
                  Message Prepared
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto mb-4">
                  Your email client has been opened to dispatch this directly to{" "}
                  <span className="text-cyan-300 font-mono-code">
                    {PERSONAL_INFO.email}
                  </span>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs text-cyan-300 border border-slate-700"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="AI Internship / Technical Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Hi Om, let's discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:via-cyan-500 text-white font-medium text-xs shadow-lg shadow-cyan-950/60 hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Send className="w-4 h-4 text-cyan-200" />
                  <span>
                    {isSubmitting ? "Preparing..." : "Dispatch Message"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
