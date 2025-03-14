export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  process: string;
  solution: string;
  impact: string[];
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}
