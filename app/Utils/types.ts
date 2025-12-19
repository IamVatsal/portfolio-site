
export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  lessons: string;
  githubUrl?: string;
  link?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
