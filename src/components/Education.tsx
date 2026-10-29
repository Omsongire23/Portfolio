import React from "react"
import {
  GraduationCap,
  Award,
  CheckCircle2,
  BookCheck,
  Sparkles,
  MapPin,
} from "lucide-react"
import { EDUCATION, CERTIFICATIONS } from "../data/portfolioData"

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Education & Certifications"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
          <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
          <span>07 / Education & Certifications</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl">
          Academic Foundations &{" "}
          <span className="cosmic-cyan-gradient">Verified Credentials</span>.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          Formal computer engineering curriculum complemented by applied
          industry certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Academic Degree (6 cols) */}
        <div className="lg:col-span-6">
          <div className="cosmic-glass p-6 sm:p-8 rounded-3xl border border-cyan-500/25 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20">
                  Undergraduate Program
                </span>
                <span className="text-xs font-mono-code text-slate-400">
                  {EDUCATION.graduation}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                {EDUCATION.degree}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-mono-code">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{EDUCATION.location}</span>
              </div>

              <h4 className="text-xs font-mono-code text-slate-300 uppercase tracking-wider mb-3">
                Core Computer Engineering Coursework:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EDUCATION.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
                  >
                    <BookCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono-code flex items-center justify-between">
              <span>Status: Active Undergraduate</span>
              <span className="text-cyan-400">Computer Engineering</span>
            </div>
          </div>
        </div>

        {/* Right Column: Verified Certifications (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="cosmic-card p-5 sm:p-6 rounded-2xl border hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-300/80">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 shrink-0">
                  {cert.verificationBadge}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {cert.skillsCovered.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-slate-950/80 text-slate-300 border border-slate-800"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
