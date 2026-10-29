import React, { useEffect } from "react"
import {
  X,
  ExternalLink,
  ShieldCheck,
  Bot,
  GraduationCap,
  Scan,
  Layers,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { GithubIcon } from "./icons/SocialIcons"
import { Project } from "../types/portfolio"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (project) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const getIcon = () => {
    switch (project.iconType) {
      case "shield-check":
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />
      case "bot":
        return <Bot className="w-6 h-6 text-cyan-400" />
      case "graduation":
        return <GraduationCap className="w-6 h-6 text-cyan-400" />
      case "scan":
        return <Scan className="w-6 h-6 text-cyan-400" />
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#030612]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-[#080e2a] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 z-10 max-h-[90vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Icon and Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
            {getIcon()}
          </div>
          <div>
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-500/20">
              {project.statusBadge}
            </span>
            <h3
              id="modal-title"
              className="font-heading font-bold text-2xl text-white mt-1"
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-cyan-200/90 font-medium mb-6">
          {project.tagline}
        </p>

        {/* Deep Dive Sections */}
        <div className="space-y-5 text-sm">
          {/* Problem */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>The Challenge</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-light">
              {project.solution}
            </p>
          </div>

          {/* Architecture */}
          <div>
            <div className="flex items-center gap-2 text-slate-200 font-semibold mb-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Architecture & Tech Stack</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-mono-code leading-relaxed bg-[#05091a] p-3 rounded-lg border border-slate-800">
              {project.architecture}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="font-semibold text-white mb-2.5">
              Key Technical Capabilities
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono-code">
            Author: Om Songire
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs shadow-md shadow-cyan-950 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-200" />
          </a>
        </div>
      </div>
    </div>
  )
}
