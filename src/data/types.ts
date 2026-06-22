export interface NavItem {
  label: string
  href: string
}

export interface Major {
  icon: string
  title: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface Job {
  logo: string
  name: string
  period: string
}

export type ProjectCategory = 'manage' | 'front-end' | 'back-end' | 'session'

export interface CategoryFilter {
  label: string
  value: ProjectCategory | '*'
}

export interface UnifiedProject {
  title: string
  period: string
  client?: string
  company?: string
  role?: string
  os?: string
  language?: string
  dbms?: string
  tool?: string
  etc?: string
  image: string
  href?: string
  categories: ProjectCategory[]
}
