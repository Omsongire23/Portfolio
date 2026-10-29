import React from "react"
import {
  Users,
  Globe2,
  Sparkles,
  Calendar,
  ArrowUpRight,
  Compass,
  Heart,
  CheckCircle2,
} from "lucide-react"
import { COMMUNITY_ROLES } from "../data/portfolioData"

export const Community: React.FC = () => {
  return (
    <section
      id="community"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Developer Community"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
          <Users className="w-3.5 h-3.5 text-cyan-400" />
          <span>06 / Developer Community</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl">
          Building Ecosystems &{" "}
          <span className="cosmic-cyan-gradient">Mentoring Engineers</span>.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          Confirmed leadership and organizational roles across Google Developer
          Groups, machine learning circles, and cloud observability communities.
        </p>
      </div>

      {/* Community Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {COMMUNITY_ROLES.map((role) => (
          <div
            key={role.id}
            className="cosmic-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Subtle top glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 pointer-events-none transition-colors" />

            <div>
              {/* Role & Org Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20">
                  {role.scope}
                </span>
                <span className="text-xs font-mono-code text-slate-400">
                  {role.period}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-200 transition-colors mb-1">
                {role.role}
              </h3>
              <p className="text-sm font-semibold text-cyan-300/90 mb-4">
                {role.organization}
              </p>

              {/* Impact Headline */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 italic mb-5 leading-relaxed">
                “{role.impactHeadline}”
              </div>

              {/* Detailed Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                {role.description}
              </p>

              {/* Key Initiatives */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                  Key Contributions:
                </span>
                {role.initiatives.map((init, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{init}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-slate-950/80 text-cyan-300 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Community Ethos Banner */}
      <div className="cosmic-glass p-8 rounded-3xl border border-cyan-500/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-white">
              Philosophy: Open Knowledge & Hands-On Engineering
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mt-1">
              I believe the most effective way to master complex AI systems is
              to teach them, run workshops, and build alongside peers who are
              equally curious.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 transition-all"
        >
          Invite to Speak or Collaborate
        </a>
      </div>
    </section>
  )
}
