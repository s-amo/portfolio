export interface Project {
  id: string
  title: string
  description: string
  techs: string[]
  url?: string
  repo?: string
}

export interface Skill {
  name: string
  level: number // 0–100
  category: 'frontend' | 'backend' | 'infrastructure' | 'other'
}

export interface Profile {
  name: string
  role: string
  bio: string
  avatar?: string
  socials: {
    github?: string
    twitter?: string
    linkedin?: string
  }
}
