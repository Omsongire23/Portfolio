import React, { useState } from "react"
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Server,
  Cpu,
} from "lucide-react"
import { EXPERIENCES } from "../data/portfolioData"

export const Experience: React.FC = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0)
  const activeRole = EXPERIENCES[selectedRoleIndex]

  return (
    <section
      id="experience"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Experience"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>04 / Experience</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl">
          Verified{" "}
          <span className="cosmic-cyan-gradient">Engineering Roles</span> &
          Internships.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          Hands-on technical internships spanning cloud-native DevOps pipelines
          and applied machine learning engineering.
        </p>
      </div>

      {/* Editorial Dual-Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Role Selector (4 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {EXPERIENCES.map((exp, index) => {
            const isSelected = index === selectedRoleIndex
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setSelectedRoleIndex(index)}
                className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? "cosmic-glass-strong border-cyan-400/50 shadow-lg shadow-cyan-950/80 ring-1 ring-cyan-500/30"
                    : "bg-[#080e26]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#091130]/80"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-cyan-300 uppercase px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/20">
                    {exp.statusBadge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono-code flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {exp.period.split("–")[0].trim()}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-cyan-200/90 font-medium mb-3">
                  {exp.organization}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {exp.location}
                  </span>
                  <span className="text-cyan-400 flex items-center gap-1 font-medium">
                    {isSelected ? "Viewing" : "Inspect"}
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            )
          })}

          {/* Context box */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-xs text-slate-400 font-mono-code">
            <span>
              Note: Documented professional experiences verified from technical
              resumes and credentials.
            </span>
          </div>
        </div>

        {/* Right Column: Detailed Role Breakdown (7 cols) */}
        <div className="lg:col-span-7">
          <div className="cosmic-glass p-6 sm:p-8 rounded-3xl border border-cyan-500/20 shadow-2xl relative overflow-hidden">
            {/* Ambient background accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="font-mono-code text-xs text-cyan-400 uppercase tracking-wider block mb-1">
                  {activeRole.organization} · {activeRole.type}
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  {activeRole.role}
                </h3>
              </div>
              <div className="sm:text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono-code">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeRole.period}</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono-code">
                  Location: {activeRole.location}
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              {activeRole.summary}
            </p>

            {/* Key Verified Contributions */}
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Key Engineering Contributions</span>
              </h4>
              <ul className="space-y-3">
                {activeRole.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Technologies Used */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-2.5">
                Verified Toolchain & Infrastructure:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeRole.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono-code px-3 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
