export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  category: 'hardware' | 'ai' | 'web' | 'systems';
  tech: string[];
  problem: string;
  solution: string;
  architecture: string;
  keyTakeaway: string;
  githubUrl: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  locationType: string;
  bullets: string[];
  skills: string[];
}

export interface SkillRow {
  category: string;
  skills: string[];
}

export interface FieldNote {
  id: string;
  number: string;
  type: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  content: string[];
  featured?: boolean;
}

export interface PhilosophyItem {
  number: string;
  title: string;
  content: string;
}
