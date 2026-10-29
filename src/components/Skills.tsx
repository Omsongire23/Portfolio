import React, { useState, useMemo } from "react"
import {
  Code2,
  Search,
  Sparkles,
  Cpu,
  Layers,
  Server,
  Terminal,
  Wrench,
  BookOpen,
  Check,
  ExternalLink,
} from "lucide-react"
import { SKILL_GROUPS } from "../data/portfolioData"
import { SkillItem } from "../types/portfolio"

export const Skills: React.FC = () => {
  const [activeGroupId, setActiveGroupId] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Flattened skills with their group title
  const allSkills = useMemo(() => {
    const list: (SkillItem & { groupName: string })[] = []
    SKILL_GROUPS.forEach((group) => {
      group.skills.forEach((skill) => {
        list.push({ ...skill, groupName: group.title })
      })
    })
    return list
  }, [])

  // Filter by category and search query
  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesGroup =
        activeGroupId === "all"
          ? true
          : SKILL_GROUPS.find((g) => g.id === activeGroupId)?.skills.some(
              (s) => s.name === skill.name,
            )
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.usageContext.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesGroup && matchesSearch
    })
  }, [allSkills, activeGroupId, searchQuery])

  const getGroupIcon = (id: string) => {
    switch (id) {
      case "genai":
        return <Sparkles className="w-4 h-4" />
      case "prog":
        return <Code2 className="w-4 h-4" />
      case "aiml":
        return <Cpu className="w-4 h-4" />
      case "backend":
        return <Layers className="w-4 h-4" />
      case "devops":
        return <Server className="w-4 h-4" />
      case "tools":
        return <Wrench className="w-4 h-4" />
      case "learning":
        return <BookOpen className="w-4 h-4" />
      default:
        return <Terminal className="w-4 h-4" />
    }
  }

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
      aria-label="Skills & Technologies"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4 uppercase tracking-widest">
          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>05 / Skills Explorer</span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl">
          Interactive{" "}
          <span className="cosmic-cyan-gradient">Technology Matrix</span> &
          Toolchains.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-light">
          Categorized explorer of verified languages, AI/ML libraries,
          cloud-native infrastructure, and active study domains.
        </p>
      </div>

      {/* Search and Category Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
        {/* Category Pill Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveGroupId("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              activeGroupId === "all"
                ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-md shadow-cyan-950"
                : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            All Toolchains ({allSkills.length})
          </button>
          {SKILL_GROUPS.map((group) => {
            const isSelected = activeGroupId === group.id
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroupId(group.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-md shadow-cyan-950"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {getGroupIcon(group.id)}
                <span>{group.title.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Active Group Description Banner (if single group selected) */}
      {activeGroupId !== "all" && (
        <div className="mb-6 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getGroupIcon(activeGroupId)}
            <span className="font-heading font-semibold text-sm text-cyan-200">
              {SKILL_GROUPS.find((g) => g.id === activeGroupId)?.title}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-light hidden sm:inline">
            {SKILL_GROUPS.find((g) => g.id === activeGroupId)?.description}
          </span>
        </div>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {filteredSkills.map((skill, index) => {
          const isLearning = skill.level === "Active Study"
          return (
            <div
              key={`${skill.name}-${index}`}
              className={`p-4 rounded-2xl transition-all duration-200 border flex flex-col justify-between ${
                isLearning
                  ? "bg-gradient-to-br from-[#121124] to-[#0a0914] border-amber-500/30 hover:border-amber-400/50"
                  : "cosmic-glass border-slate-800 hover:border-cyan-500/40 hover:bg-[#09112e]/90"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-heading font-semibold text-sm text-white">
                  {skill.name}
                </h3>
                <span
                  className={`text-[10px] font-mono-code px-2 py-0.5 rounded-full ${
                    isLearning
                      ? "bg-amber-950/60 text-amber-300 border border-amber-500/30"
                      : "bg-cyan-950/60 text-cyan-300 border border-cyan-500/25"
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed mb-3">
                {skill.usageContext}
              </p>

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>{skill.category}</span>
                <span className="text-cyan-400/60">Verified</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Currently Learning Spotlight Section */}
      <div className="p-6 sm:p-8 rounded-3xl cosmic-card border border-amber-500/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-amber-300">
                Continuous Engineering Growth
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                Currently Deep-Diving Into
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono-code px-3 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/30 self-start sm:self-auto">
            Active 2025 Explorations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="font-mono-code text-xs text-amber-400 block mb-1">
              01 / Multi-Agent Systems
            </span>
            <h4 className="font-heading font-semibold text-sm text-white mb-2">
              LangGraph & CrewAI
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              State machine workflows, recursive agent memory loops, tool
              arbitration, and self-correcting agent chains.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="font-mono-code text-xs text-amber-400 block mb-1">
              02 / Observability
            </span>
            <h4 className="font-heading font-semibold text-sm text-white mb-2">
              Grafana & Prometheus
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Distributed trace synthesis, OpenTelemetry instrumentation, and
              live telemetry dashboards for AI inference pipelines.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="font-mono-code text-xs text-amber-400 block mb-1">
              03 / Model Optimization
            </span>
            <h4 className="font-heading font-semibold text-sm text-white mb-2">
              LoRA & Quantization
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Parameter-efficient fine-tuning (PEFT), 4-bit GGUF quantization,
              and low-latency self-hosted LLM endpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
