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
  keyFeatures?: string[];
  tech: string[];
  primaryTech: string[];
  github?: string;
  demo?: string;
  accentColor: string;
  image?: string | null;
  category?: "Full Stack" | "Backend & Systems" | "Machine Learning";
  categoryBadge?: string;
}

export interface ProfessionalExperience {
  role: string;
  organization: string;
  period: string;
  type: "opensource" | "internship";
  description: string;
  highlights: string[];
  keyTags: string[];
  repoUrl?: string;
  pullRequests?: string[];
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

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  badge: string;
}

export interface CodingProfile {
  platform: string;
  solved: string;
  url: string;
  highlight?: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  initials: string;
  title: string;
  headline: string;
  subheadline: string;
  tagline: string;
  positioning: string;
  targetRoles: string[];
  about: string[];
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  college: string;
  degree: string;
  educationPeriod: string;
  expectedGraduation: string;
  cgpa: string;
  resumeUrl: string;
}
