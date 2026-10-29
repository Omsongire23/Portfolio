import React, { useState } from "react"
import {
  Cpu,
  Layers,
  GitBranch,
  Users,
  Sparkles,
  Database,
  Shield,
  Server,
  Compass,
  ChevronRight,
} from "lucide-react"
import { PERSONAL_INFO } from "../data/portfolioData"

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"genai" | "devops" | "community">(
    "genai",
  )

  const architecturePillars = [
    {
      id: "genai",
      label: "Generative AI & RAG",
      icon: Cpu,
      summary: "Context-grounded language model architectures",
      points: [
        "Designing RAG pipelines that prevent hallucinations using semantic retrieval (ChromaDB, FAISS)",
        "Contextual orchestration using LangChain and Google Gemini API with verifiable citations",
        "Agentic workflows that translate human intent into executable actions and self-healing tests",
      ],
      badge: "Core Focus",
    },
    {
      id: "devops",
      label: "Cloud & Systems Engineering",
      icon: Server,
      summary: "Reliable deployment and telemetry automation",
      points: [
        "Containerized microservice workflows using Docker and Kubernetes cluster management",
        "Automated CI/CD pipelines with GitHub Actions and Jenkins for rapid release cycles",
        "Feature engineering on infrastructure telemetry metrics for proactive anomaly detection",
      ],
      badge: "Systems & Reliability",
    },
    {
      id: "community",
      label: "Developer Community",
      icon: Users,
      summary: "Empowering the next generation of engineers",
      points: [
        "Core Team Member at GDG Nashik, driving regional DevFests and tech initiatives",
        "Campus Lead for ML Nashik, running hands-on workshops on Python and machine learning",
        "Co-organizer for Grafana & Friends Mumbai, fostering cloud observability discussions",
      ],
      badge: "1,000+ Reached",
    },
  ]

  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="About Me"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>01 / About Om Songire</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl">
          Engineering at the Intersection of{" "}
          <span className="cosmic-cyan-gradient">Generative AI</span>, Systems,
          and Community.
        </h2>
      </div>

      {/* Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative Story (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 font-light leading-relaxed text-base sm:text-lg">
          <div className="p-6 rounded-2xl cosmic-glass border-l-4 border-l-cyan-400">
            <p className="font-normal text-slate-100 leading-relaxed">
              I am an undergraduate Computer Engineering student in Nashik,
              Maharashtra, driven by a simple conviction:
              <span className="text-cyan-300 font-medium">
                {" "}
                AI is only as valuable as the real-world friction it eliminates
                and the humans it empowers.
              </span>
            </p>
          </div>

          <p>
            My primary technical passion lies in{" "}
            <strong className="text-white font-medium">
              Generative AI and Retrieval-Augmented Generation (RAG)
            </strong>
            . Rather than treating foundation models as black-box novelties, I
            focus on building grounded systems that synthesize verified
            knowledge corpora — from enterprise compliance documents in{" "}
            <strong className="text-cyan-300 font-medium">VERIQ</strong> to
            curriculum-grounded tutoring in{" "}
            <strong className="text-cyan-300 font-medium">
              EdutechAssistant
            </strong>
            .
          </p>

          <p>
            Strong AI models require equally resilient infrastructure. Through
            my internships and hands-on projects, I have developed a deep
            appreciation for{" "}
            <strong className="text-white font-medium">
              DevOps, container orchestration, and CI/CD automation
            </strong>
            . Deploying microservices on Docker and Kubernetes, writing
            resilient GitHub Actions pipelines, and automating Linux server
            environments ensure that intelligent software can actually perform
            reliably in production.
          </p>

          <p>
            Beyond writing code, developer community leadership is integral to
            who I am. As a core contributor to{" "}
            <strong className="text-white font-medium">GDG Nashik</strong>,
            Campus Lead for{" "}
            <strong className="text-white font-medium">ML Nashik</strong>, and
            co-organizer for{" "}
            <strong className="text-white font-medium">
              Grafana & Friends Mumbai
            </strong>
            , I have had the privilege of organizing technical conferences,
            speaking at workshops, and mentoring over 1,000 student developers.
          </p>

          {/* Key Facts Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3.5 rounded-xl bg-[#091129]/80 border border-slate-800 flex flex-col">
              <span className="font-mono-code text-[11px] text-cyan-400 uppercase">
                Degree
              </span>
              <span className="font-heading font-semibold text-sm text-white">
                B.E. Comp Eng
              </span>
              <span className="text-[11px] text-slate-400">Expected 2026</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#091129]/80 border border-slate-800 flex flex-col">
              <span className="font-mono-code text-[11px] text-cyan-400 uppercase">
                Focus
              </span>
              <span className="font-heading font-semibold text-sm text-white">
                GenAI & RAG
              </span>
              <span className="text-[11px] text-slate-400">LLM Systems</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#091129]/80 border border-slate-800 flex flex-col">
              <span className="font-mono-code text-[11px] text-cyan-400 uppercase">
                Systems
              </span>
              <span className="font-heading font-semibold text-sm text-white">
                DevOps & Cloud
              </span>
              <span className="text-[11px] text-slate-400">
                K8s, CI/CD, AWS
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#091129]/80 border border-slate-800 flex flex-col">
              <span className="font-mono-code text-[11px] text-cyan-400 uppercase">
                Community
              </span>
              <span className="font-heading font-semibold text-sm text-white">
                1,000+ Students
              </span>
              <span className="text-[11px] text-slate-400">6+ Workshops</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Systems Architecture Matrix (5 cols) */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-3xl cosmic-glass border border-cyan-500/20 shadow-xl shadow-black/50 relative overflow-hidden">
            {/* Subtle glow header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span className="font-mono-code text-xs uppercase tracking-wider text-slate-200">
                  Technical Focus Matrix
                </span>
              </div>
              <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                Interactive
              </span>
            </div>

            {/* Tab Selectors */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950/70 border border-slate-800 mb-5">
              {architecturePillars.map((pillar) => {
                const isSelected = activeTab === pillar.id
                const Icon = pillar.icon
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveTab(pillar.id as any)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-md shadow-cyan-950"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="truncate">
                      {pillar.label.split(" ")[0]}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Tab Details */}
            {architecturePillars.map((pillar) => {
              if (pillar.id !== activeTab) return null
              return (
                <div
                  key={pillar.id}
                  className="space-y-4 animate-in fade-in duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {pillar.label}
                    </h3>
                    <span className="text-xs font-mono-code px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 italic border-l-2 border-cyan-500/40 pl-3">
                    {pillar.summary}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {pillar.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}

            {/* Orbital graphic footer inside card */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono-code">
              <span>Status: Exploring Multi-Agents & Telemetry</span>
              <span className="text-cyan-400">Nashik, IN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
