export interface Project {
  id: string;
  initials: string;
  title: string;
  shortDesc: string;
  problem: string;
  approach: string;
  challenges: string;
  results: string;
  learnings: string;
  tech: string[];
  primaryTech: string[];
  github: string;
  demo?: string;
  accentColor: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: "education" | "project" | "practice";
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; primary: boolean }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  initials: string;
  title: string;
  headline: string;
  subheadline: string;
  about: string[];
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  college: string;
  year: string;
  resumeUrl: string;
}
