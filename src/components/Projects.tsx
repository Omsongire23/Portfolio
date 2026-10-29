import React, { useState } from "react"
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Bot,
  GraduationCap,
  Scan,
  Layers,
  Info,
} from "lucide-react"
import { GithubIcon } from "./icons/SocialIcons"
import { PROJECTS } from "../data/portfolioData"
import { Project } from "../types/portfolio"
import { ProjectModal } from "./ProjectModal"

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const [inspectProject, setInspectProject] = useState<Project | null>(null)

  const categories = [
    "All",
    "Generative AI",
    "Automation & QA",
    "Computer Vision",
  ]

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter)

  const getProjectIcon = (iconType: string) => {
    switch (iconType) {
      case "shield-check":
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />
      case "bot":
        return <Bot className="w-5 h-5 text-cyan-400" />
      case "graduation":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />
      case "scan":
        return <Scan className="w-5 h-5 text-cyan-400" />
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />
    }
  }

  return (
    <section
      id="work"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Selected Work"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 / Selected Work</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Engineered <span className="cosmic-cyan-gradient">AI Systems</span>{" "}
            & Frameworks.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
            Autonomous agents, compliance automation, RAG copilots, and digital
            forensic tools built with rigorous systems engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-950/60 border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedFilter === cat
                  ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-md shadow-cyan-950"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Project Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {filteredProjects.map((project, index) => {
          const isPrimary = project.id === "veriq" && selectedFilter === "All"
          const colSpan = isPrimary
            ? "lg:col-span-12"
            : index % 3 === 0
              ? "lg:col-span-7"
              : "lg:col-span-5"

          return (
            <div
              key={project.id}
              className={`${colSpan} group relative rounded-3xl cosmic-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 border hover:border-cyan-400/40`}
            >
              {/* Ambient inner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Top Card Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-500/25 flex items-center justify-center shadow-xs">
                      {getProjectIcon(project.iconType)}
                    </div>
                    <div>
                      <span className="font-mono-code text-[11px] uppercase tracking-wider text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono-code text-slate-400 border border-slate-800 bg-slate-950/60 px-2.5 py-1 rounded-lg">
                    {project.statusBadge}
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-cyan-200 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-cyan-300/85 font-medium mb-4 leading-snug">
                  {project.tagline}
                </p>

                {/* Problem & Solution Teaser */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {project.solution}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.keyFeatures
                    .slice(0, isPrimary ? 3 : 2)
                    .map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Bottom Metadata & Actions */}
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono-code px-2 py-0.5 rounded-md bg-slate-950/70 border border-slate-800/80 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setInspectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-2 py-1 -ml-2"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inspect Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/60 hover:border-cyan-400/50 text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-cyan-300" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={inspectProject}
        onClose={() => setInspectProject(null)}
      />
    </section>
  )
}
