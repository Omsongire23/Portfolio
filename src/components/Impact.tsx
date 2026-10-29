import React from "react"
import {
  Trophy,
  Users,
  Presentation,
  Cpu,
  ArrowUpRight,
  Award,
  Flame,
  CheckCircle,
} from "lucide-react"
import { IMPACT_METRICS } from "../data/portfolioData"

export const Impact: React.FC = () => {
  const narrativeMilestones = [
    {
      title: "Democratizing AI Education Across Maharashtra",
      description:
        "Spearheaded technical workshops and bootcamps targeting foundational Python, machine learning workflows, and practical Generative AI. Enabled over a thousand aspiring engineering students to build their first functional AI models.",
      category: "Education & Mentorship",
      highlight: "1,000+ Students Impacted",
    },
    {
      title: "Catalyzing Regional Developer Ecosystems",
      description:
        "Co-organized community gatherings, DevFest Nashik sessions, and cloud observability meetups. Connected grassroots developers with seasoned industry practitioners and modern cloud technologies.",
      category: "Ecosystem Building",
      highlight: "3 Tech Communities",
    },
    {
      title: "Bridging Theoretical AI with Real Production Pipelines",
      description:
        "Applied systems-level DevOps, continuous integration, and container orchestration to live AI applications. Proven ability to take research concepts from Jupyter notebooks into automated microservice architectures.",
      category: "Engineering Rigor",
      highlight: "End-to-End Delivery",
    },
  ]

  return (
    <section
      id="impact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Impact and Achievements"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
          <Trophy className="w-3.5 h-3.5 text-cyan-400" />
          <span>03 / Impact & Reach</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl">
          Measurable Reach,{" "}
          <span className="cosmic-cyan-gradient">Grassroots Mentorship</span> &
          Engineering Execution.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          Tangible contributions across developer education, technical events,
          and open systems.
        </p>
      </div>

      {/* 4 Big Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {IMPACT_METRICS.map((item) => (
          <div
            key={item.id}
            className="cosmic-glass p-6 rounded-3xl relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Subtle corner aura */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-colors pointer-events-none" />

            <div>
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 inline-block mb-4">
                {item.badge}
              </span>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white group-hover:text-cyan-200 transition-colors mb-2">
                {item.metric}
              </div>
              <h3 className="font-heading font-semibold text-base text-slate-100 mb-2">
                {item.label}
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light mt-4 pt-3 border-t border-slate-800/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Narrative Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {narrativeMilestones.map((milestone, idx) => (
          <div
            key={idx}
            className="cosmic-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border hover:border-cyan-400/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono-code text-cyan-300 uppercase tracking-wider">
                  {milestone.category}
                </span>
                <span className="text-xs font-mono-code px-2 py-0.5 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                  {milestone.highlight}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-3 leading-snug">
                {milestone.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {milestone.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono-code">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Documented community activity</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
