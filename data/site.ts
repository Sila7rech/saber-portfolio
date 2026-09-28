import type {
  EducationEntry,
  ExperienceEntry,
  NavItem,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
} from "@/types/site";

export const site = {
  name: "Saber Bradai",
  title: "Full Stack Developer",
  location: "Manouba, Tunisia",
  email: "saberbradaiset23@gmail.com",
  phone: "+216 51121136",
  birthDate: "02 December 2004",
  summary:
    "I design and ship premium web experiences that balance elegant interfaces, clear product thinking, and resilient engineering. My focus is on modern frontend systems, fast user experiences, and scalable full-stack delivery.",
  availability: "Open to internships, freelance, and full-time opportunities.",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Sila7rech", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saber-bradai/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:saberbradaiset23@gmail.com", icon: "mail" },
];

export const heroRoles = [
  "Full Stack Developer",
  "React Developer",
  "Spring Boot Developer",
  "AI Enthusiast",
];

export const stats: Stat[] = [
  { label: "Projects", value: "6+", detail: "Real products and polished demos shipped." },
  { label: "Internships", value: "3", detail: "Practical experience across enterprise teams." },
  { label: "Stacks", value: "4", detail: "Frontend, backend, database, and tooling." },
  { label: "Focus", value: "Awwwards", detail: "Premium UI, motion, and product quality." },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, clear, and premium.",
    items: ["React", "Angular", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    description: "Reliable services and API layers with clean architecture.",
    items: ["Node.js", "Spring Boot", "Laravel", "PHP", "REST APIs"],
  },
  {
    title: "Database",
    description: "Data models and persistence for production workflows.",
    items: ["MySQL", "Firebase", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Tools",
    description: "Workflow, collaboration, and shipping discipline.",
    items: ["Git", "Docker", "Postman", "VS Code", "Figma"],
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "STEG",
    role: "Full Stack Intern",
    period: "2024",
    location: "Tunisia",
    description:
      "Built internal workflows and reporting surfaces with a strong focus on clarity, reliability, and maintainability.",
    highlights: ["Operational dashboards", "Automation flows", "Stakeholder reporting"],
  },
  {
    company: "BTK Bank",
    role: "Frontend & Integration Intern",
    period: "2025",
    location: "Tunisia",
    description:
      "Shaped customer-facing interfaces and integrated secure APIs for banking-related service flows.",
    highlights: ["Secure integration", "Polished UI states", "Process optimization"],
  },
  {
    company: "MEDIANET",
    role: "Web Development Intern",
    period: "2023",
    location: "Tunisia",
    description:
      "Contributed to responsive marketing pages and product interfaces with performance and accessibility in mind.",
    highlights: ["Responsive layouts", "Accessible components", "Performance tuning"],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    institution: "Licence en Technologie de l'Informatique",
    focus: "Specialité Developpement des Systèmes d'Informations",
    period: "2023 - 2026",
    description: "ISET Mahdia - Institut Supérieur des Études Technologiques",
  },
  {
    institution: "Baccalaureat en Informatique",
    focus: "Lycée Oued Ellil",
    period: "2022 - 2023",
    description: "",
  },
];

export const projects: Project[] = [
  {
    slug: "nexora",
    name: "NEXORA",
    summary: "Startup Incubation Platform",
    description:
      "NEXORA is a modern web platform designed to connect startups, investors, evaluators, and administrators within a unified digital ecosystem. The platform streamlines the startup incubation process by offering project management, funding opportunities, startup evaluation, AI-powered assistance, document management, and real-time communication. Built with scalability and collaboration in mind, NEXORA helps entrepreneurs accelerate innovation while enabling investors to discover high-potential startups.",
    image: "/projects/nexora/cover.svg",
    features: [
      "Real-time activity summaries",
      "Smart workflow automation",
      "Executive-grade insights panels",
      "Modular dashboard architecture",
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    architecture:
      "App Router architecture with composable sections, reusable UI primitives, and isolated data/config modules.",
    challenges:
      "The design needed to feel premium without becoming visually noisy or losing clarity on dense dashboard data.",
    solutions:
      "Used restrained gradients, glass surfaces, consistent spacing, and a strong content hierarchy to keep the interface elegant and legible.",
    githubUrl: "https://github.com/Sila7rech",
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "cv-ya",
    name: "CV-YA",
    summary: "AI Resume Builder",
    description:
      "CV-YA is an intelligent resume generation platform designed to help users create professional, ATS-friendly resumes quickly and efficiently. The platform provides customizable templates, AI-assisted content generation, PDF export, and job application tracking, enabling users to optimize their chances of landing interviews.",
    image: "/projects/cv-ya/cover.svg",
    features: ["Template selection", "Preview states", "Export flow", "Profile settings"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    architecture: "Componentized form flow with preview-first layout sections.",
    challenges: "Keeping the builder accessible while supporting a dense configuration experience.",
    solutions: "Grouped controls, clear labels, and a sticky preview surface.",
    githubUrl: "https://github.com/Sila7rech",
    liveUrl: "#",
  },
  {
    slug: "braintrain",
    name: "Brain Train",
    summary: "Mobile Cognitive Training Application",
    description:
      "BrainTrain is an Android application that enhances cognitive abilities through engaging memory, logic, and concentration exercises. The application offers interactive challenges, performance tracking, personalized difficulty levels, and daily training sessions to improve mental agility while providing an enjoyable user experience.",
    image: "/projects/braintrain/cover.svg",
    features: ["Progress analytics", "Study plans", "Achievement loops", "Focus timer"],
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    architecture: "Content-rich learning dashboard with metric-driven cards.",
    challenges: "Making motivation feel positive rather than gamified and noisy.",
    solutions: "Soft hierarchy, calm motion, and a clear progress narrative.",
    githubUrl: "https://github.com/Sila7rech",
    liveUrl: "#",
  },
  {
    slug: "flight-reservation-system",
    name: "Flight Reservation System",
    summary: "Web Application",
    description:
      "The Flight Reservation System is a web application that allows users to search, book, and manage airline reservations efficiently. It provides a complete booking workflow, including flight search, seat selection, passenger information, payment processing, and reservation management with an intuitive and responsive interface.",
    image: "/projects/flight/cover.svg",
    features: ["Search results", "Seat selection", "Trip summary", "Booking confirmation"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    architecture: "Multi-step booking funnel with strong state progression.",
    challenges: "Presenting travel data without overwhelming the booking path.",
    solutions: "Guided steps, concise data cards, and progressive disclosure.",
    githubUrl: "https://github.com/Sila7rech",
    liveUrl: "#",
  },
  {
    slug: "istudent",
    name: "iStudent",
    summary: "Student Management Platform",
    description:
      "iStudent is a web-based academic management platform developed to simplify communication and organization between students and educational institutions. The platform centralizes course management, schedules, assignments, grades, announcements, and student information through a clean and intuitive interface.",
    image: "/projects/istudent/cover.svg",
    features: ["Schedule overview", "Task management", "Notifications", "Academic metrics"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    architecture: "Information-rich student workspace with side-panel navigation.",
    challenges: "Balancing multiple academic signals in one screen.",
    solutions: "Card grouping, strong color coding, and a stable layout rhythm.",
    githubUrl: "https://github.com/Sila7rech",
    liveUrl: "#",
  },
  {
    slug: "bank-payment-automation",
    name: "Bank Payment Automation",
    summary: "Bank Payment Automation System",
    description:
      "The Bank Payment Automation System is a secure financial management solution that automates banking transactions and payment workflows. The system simplifies transaction processing while ensuring data integrity, security, and efficient management of financial operations through an administrative dashboard.",
    image: "/projects/bank-payment/cover.svg",
    features: ["Approval queues", "Transaction states", "Audit logs", "Risk cues"],
    technologies: ["Spring Boot", "React", "MySQL"],
    architecture: "Enterprise workflow dashboard with layered trust states.",
    challenges: "Making finance tooling feel trustworthy and understandable.",
    solutions: "Strong contrast, structured data, and restrained motion.",
    githubUrl: "https://github.com/Sila7rech",
    liveUrl: "#",
  },
];