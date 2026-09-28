export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export type EducationEntry = {
  institution: string;
  focus: string;
  period: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  architecture: string;
  challenges: string;
  solutions: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
};