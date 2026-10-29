export interface Project {
  id: string
  title: string
  tagline: string
  category: "Generative AI" | "Automation & QA" | "Computer Vision" | "DevOps & Systems"
  problem: string
  solution: string
  architecture: string
  tags: string[]
  keyFeatures: string[]
  githubUrl: string
  featured: boolean
  statusBadge: string
  iconType: "bot" | "shield-check" | "graduation" | "scan"
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: string
  location: string
  summary: string
  achievements: string[]
  technologies: string[]
  statusBadge: string
}

export interface SkillItem {
  name: string
  category: string
  level: "Core" | "Advanced" | "Familiar" | "Active Study"
  usageContext: string
  iconName?: string
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  skills: SkillItem[]
}

export interface CommunityItem {
  id: string
  role: string
  organization: string
  scope: string
  period: string
  description: string
  impactHeadline: string
  initiatives: string[]
  tags: string[]
}

export interface ImpactMetric {
  id: string
  metric: string
  label: string
  description: string
  badge: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  period: string
  verificationBadge: string
  skillsCovered: string[]
}
