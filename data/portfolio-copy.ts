import { projects as baseProjects } from "@/data/site";
import type { Locale } from "@/lib/locale";
import type { Project } from "@/types/site";

type ProjectCopy = Pick<Project, "summary" | "description" | "features" | "technologies" | "architecture" | "challenges" | "solutions">;

type PortfolioCopy = {
  nav: { about: string; skills: string; experience: string; projects: string; contact: string };
  language: { fr: string; en: string; ar: string };
  hero: {
    badge: string;
    roles: string[];
    description: string;
    buttons: { contact: string; projects: string; download: string };
    stats: { projects: { label: string; detail: string }; internships: { label: string; detail: string }; focus: { label: string; detail: string } };
    titleLine: string;
    locationLabel: string;
    bornLabel: string;
  };
  about: { eyebrow: string; title: string; paragraphs: string[] };
  skills: { eyebrow: string; title: string; description: string };
  experience: { eyebrow: string; title: string; description: string };
  education: { eyebrow: string; title: string; description: string };
  skillGroups: Array<{ title: string; description: string; items: string[] }>;
  experienceEntries: Array<{ company: string; role: string; period: string; location: string; description: string; highlights: string[] }>;
  educationEntries: Array<{ institution: string; focus: string; period: string; description: string }>;
  projects: { eyebrow: string; title: string; description: string };
  projectCard: {
    featured: string;
    selected: string;
    architecture: string;
    challenge: string;
    solution: string;
    github: string;
    liveDemo: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    availability: string;
    emailMe: string;
    labels: { name: string; email: string; subject: string; message: string };
    placeholders: { name: string; email: string; subject: string; message: string };
    buttons: { sending: string; send: string };
    status: { idle: string; success: string; error: string };
  };
  footer: string;
  projectsCopy: Record<string, ProjectCopy>;
};

const projectCopy: Record<Locale, Record<string, ProjectCopy>> = {
  fr: {
    nexora: {
      summary: "Plateforme d'incubation de startups",
      description:
        "NEXORA est une plateforme web moderne conçue pour connecter les startups, les investisseurs, les évaluateurs et les administrateurs dans un écosystème numérique unifié. Elle simplifie le processus d'incubation grâce à la gestion de projet, aux opportunités de financement, à l'évaluation des startups, à l'assistance propulsée par l'IA, à la gestion documentaire et à la communication en temps réel. Pensée pour la scalabilité et la collaboration, NEXORA aide les entrepreneurs à accélérer l'innovation tout en permettant aux investisseurs d'identifier des startups à fort potentiel.",
      features: ["Suivi en temps réel", "Automatisation intelligente", "Tableaux de bord exécutifs", "Architecture modulaire"],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
      architecture: "Architecture App Router avec sections composables, primitives UI réutilisables et modules de données isolés.",
      challenges: "Le design devait rester premium sans perdre en clarté sur des tableaux de bord riches en données.",
      solutions: "Gradients sobres, surfaces glassmorphism, espacements cohérents et hiérarchie nette pour une interface élégante et lisible.",
    },
    "cv-ya": {
      summary: "Générateur de CV intelligent",
      description:
        "CV-YA est une plateforme intelligente de génération de CV conçue pour aider les utilisateurs à créer rapidement et efficacement des CV professionnels et compatibles ATS. La plateforme propose des modèles personnalisables, une génération de contenu assistée par IA, l'export PDF et le suivi des candidatures afin d'améliorer les chances d'obtenir des entretiens.",
      features: ["Choix de modèles", "Aperçu en direct", "Export PDF", "Suivi des candidatures"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      architecture: "Flux de formulaire componentisé avec un aperçu prioritaire.",
      challenges: "Conserver une expérience accessible tout en supportant une configuration riche.",
      solutions: "Contrôles regroupés, libellés clairs et zone d'aperçu épinglée.",
    },
    braintrain: {
      summary: "Application mobile d'entraînement cognitif",
      description:
        "BrainTrain est une application Android qui améliore les capacités cognitives grâce à des exercices de mémoire, de logique et de concentration. L'application propose des défis interactifs, le suivi des performances, des niveaux de difficulté personnalisés et des sessions d'entraînement quotidiennes pour améliorer l'agilité mentale tout en offrant une expérience agréable.",
      features: ["Analytique de progression", "Plans d'entraînement", "Boucles de motivation", "Minuteur de concentration"],
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      architecture: "Tableau de bord d'apprentissage riche en contenu avec cartes métriques.",
      challenges: "Rendre la motivation positive sans tomber dans un effet ludique trop chargé.",
      solutions: "Hiérarchie douce, motion apaisée et narration claire de la progression.",
    },
    "flight-reservation-system": {
      summary: "Application web",
      description:
        "Le Flight Reservation System est une application web qui permet aux utilisateurs de rechercher, réserver et gérer efficacement des vols. Elle fournit un parcours complet comprenant la recherche de vols, la sélection des sièges, les informations passagers, le paiement et la gestion des réservations dans une interface intuitive et responsive.",
      features: ["Résultats de recherche", "Sélection des sièges", "Résumé du trajet", "Confirmation de réservation"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      architecture: "Tunnel de réservation multi-étapes avec progression claire de l'état.",
      challenges: "Présenter les données de voyage sans surcharger le parcours de réservation.",
      solutions: "Étapes guidées, cartes compactes et divulgation progressive.",
    },
    istudent: {
      summary: "Plateforme de gestion étudiante",
      description:
        "iStudent est une plateforme web de gestion académique développée pour simplifier la communication et l'organisation entre les étudiants et les établissements d'enseignement. Elle centralise les cours, les emplois du temps, les devoirs, les notes, les annonces et les informations étudiantes dans une interface claire et intuitive.",
      features: ["Vue du planning", "Gestion des tâches", "Notifications", "Métriques académiques"],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      architecture: "Espace de travail étudiant riche en informations avec navigation latérale.",
      challenges: "Équilibrer plusieurs signaux académiques dans un même écran.",
      solutions: "Regroupement par cartes, codage couleur net et rythme de mise en page stable.",
    },
    "bank-payment-automation": {
      summary: "Système d'automatisation des paiements bancaires",
      description:
        "Le Bank Payment Automation System est une solution sécurisée de gestion financière qui automatise les transactions bancaires et les flux de paiement. Le système simplifie le traitement des transactions tout en garantissant l'intégrité des données, la sécurité et une gestion efficace des opérations financières via un tableau de bord administratif.",
      features: ["Files d'approbation", "États des transactions", "Journaux d'audit", "Indicateurs de risque"],
      technologies: ["Spring Boot", "React", "MySQL"],
      architecture: "Tableau de bord métier avec états de confiance stratifiés.",
      challenges: "Rendre un outil financier à la fois rassurant et facile à comprendre.",
      solutions: "Contraste fort, données structurées et motion mesurée.",
    },
  },
  en: {
    nexora: {
      summary: "Startup Incubation Platform",
      description:
        "NEXORA is a modern web platform designed to connect startups, investors, evaluators, and administrators within a unified digital ecosystem. It streamlines the incubation process with project management, funding opportunities, startup evaluation, AI-powered assistance, document management, and real-time communication. Built for scalability and collaboration, NEXORA helps entrepreneurs accelerate innovation while helping investors discover high-potential startups.",
      features: ["Real-time tracking", "Smart automation", "Executive dashboards", "Modular architecture"],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
      architecture: "App Router architecture with composable sections, reusable UI primitives, and isolated data modules.",
      challenges: "The design needed to feel premium without losing clarity on dense dashboard data.",
      solutions: "Subtle gradients, glass surfaces, consistent spacing, and a strong hierarchy kept the interface elegant and readable.",
    },
    "cv-ya": {
      summary: "AI Resume Builder",
      description:
        "CV-YA is an intelligent resume generation platform designed to help users create professional, ATS-friendly resumes quickly and efficiently. The platform provides customizable templates, AI-assisted content generation, PDF export, and job application tracking, enabling users to improve their chances of landing interviews.",
      features: ["Template selection", "Live preview", "PDF export", "Application tracking"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      architecture: "Componentized form flow with a preview-first experience.",
      challenges: "Keeping the builder accessible while supporting a rich configuration surface.",
      solutions: "Grouped controls, clear labels, and a pinned preview panel.",
    },
    braintrain: {
      summary: "Mobile Cognitive Training Application",
      description:
        "BrainTrain is an Android application that improves cognitive abilities through memory, logic, and concentration exercises. It offers interactive challenges, performance tracking, personalized difficulty levels, and daily training sessions to improve mental agility while delivering an enjoyable user experience.",
      features: ["Progress analytics", "Training plans", "Motivation loops", "Focus timer"],
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      architecture: "Content-rich learning dashboard with metric-driven cards.",
      challenges: "Making motivation feel positive without becoming noisy or game-like.",
      solutions: "Soft hierarchy, calm motion, and a clear progress narrative.",
    },
    "flight-reservation-system": {
      summary: "Web Application",
      description:
        "The Flight Reservation System is a web application that allows users to search, book, and manage airline reservations efficiently. It provides a complete booking workflow, including flight search, seat selection, passenger information, payment processing, and reservation management with an intuitive and responsive interface.",
      features: ["Search results", "Seat selection", "Trip summary", "Booking confirmation"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      architecture: "Multi-step booking funnel with clear state progression.",
      challenges: "Presenting travel data without overwhelming the booking path.",
      solutions: "Guided steps, concise cards, and progressive disclosure.",
    },
    istudent: {
      summary: "Student Management Platform",
      description:
        "iStudent is a web-based academic management platform developed to simplify communication and organization between students and educational institutions. It centralizes course management, schedules, assignments, grades, announcements, and student information through a clean and intuitive interface.",
      features: ["Schedule overview", "Task management", "Notifications", "Academic metrics"],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      architecture: "An information-rich student workspace with side navigation.",
      challenges: "Balancing multiple academic signals on one screen.",
      solutions: "Card grouping, strong color coding, and a stable layout rhythm.",
    },
    "bank-payment-automation": {
      summary: "Bank Payment Automation System",
      description:
        "The Bank Payment Automation System is a secure financial management solution that automates banking transactions and payment workflows. It simplifies transaction processing while ensuring data integrity, security, and efficient management of financial operations through an administrative dashboard.",
      features: ["Approval queues", "Transaction states", "Audit logs", "Risk indicators"],
      technologies: ["Spring Boot", "React", "MySQL"],
      architecture: "Enterprise workflow dashboard with layered trust states.",
      challenges: "Making finance tooling feel trustworthy and understandable.",
      solutions: "Strong contrast, structured data, and restrained motion.",
    },
  },
  ar: {
    nexora: {
      summary: "منصة احتضان الشركات الناشئة",
      description:
        "NEXORA هي منصة ويب حديثة صُممت لربط الشركات الناشئة والمستثمرين والمقيّمين والمديرين ضمن نظام رقمي موحد. تعمل المنصة على تبسيط عملية الاحتضان من خلال إدارة المشاريع، وفرص التمويل، وتقييم الشركات الناشئة، والمساعدة المدعومة بالذكاء الاصطناعي، وإدارة المستندات، والتواصل الفوري. وبفضل تركيزها على القابلية للتوسع والتعاون، تساعد NEXORA رواد الأعمال على تسريع الابتكار وتمكّن المستثمرين من اكتشاف الشركات ذات الإمكانات العالية.",
      features: ["تتبع لحظي", "أتمتة ذكية", "لوحات تنفيذية", "معمارية معيارية"],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
      architecture: "معمارية App Router مع أقسام قابلة للتركيب ووحدات بيانات معزولة.",
      challenges: "كان يجب أن يبدو التصميم فخمًا دون أن يفقد الوضوح مع كثافة البيانات.",
      solutions: "تدرجات هادئة، أسطح زجاجية، مسافات ثابتة، وتسلسل بصري واضح.",
    },
    "cv-ya": {
      summary: "منشئ سيرة ذاتية بالذكاء الاصطناعي",
      description:
        "CV-YA هي منصة ذكية لتوليد السيرة الذاتية تساعد المستخدمين على إنشاء سير ذاتية احترافية ومتوافقة مع ATS بسرعة وكفاءة. توفر المنصة قوالب قابلة للتخصيص، وتوليد محتوى بمساعدة الذكاء الاصطناعي، وتصدير PDF، وتتبع طلبات التوظيف لزيادة فرص الحصول على المقابلات.",
      features: ["اختيار القوالب", "معاينة مباشرة", "تصدير PDF", "تتبع الطلبات"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      architecture: "مسار نماذج مكوّن مع تجربة تركز على المعاينة.",
      challenges: "الحفاظ على سهولة الاستخدام مع دعم إعدادات غنية.",
      solutions: "تجميع عناصر التحكم، وتسميات واضحة، ولوحة معاينة مثبتة.",
    },
    braintrain: {
      summary: "تطبيق تدريب معرفي للهاتف",
      description:
        "BrainTrain هو تطبيق Android يعزّز القدرات المعرفية من خلال تمارين الذاكرة والمنطق والتركيز. يقدّم تحديات تفاعلية، وتتبعًا للأداء، ومستويات صعوبة مخصصة، وجلسات تدريب يومية لتحسين المرونة الذهنية مع تجربة ممتعة.",
      features: ["تحليلات التقدم", "خطط تدريب", "دورات تحفيز", "مؤقت التركيز"],
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      architecture: "لوحة تدريب غنية بالمحتوى مع بطاقات مقاييس.",
      challenges: "جعل التحفيز إيجابيًا دون أن يصبح صاخبًا أو ألعابيًا بشكل مبالغ.",
      solutions: "تسلسل هادئ، حركة سلسة، وسرد واضح للتقدم.",
    },
    "flight-reservation-system": {
      summary: "تطبيق ويب",
      description:
        "Flight Reservation System هو تطبيق ويب يتيح للمستخدمين البحث عن حجوزات الطيران وحجزها وإدارتها بكفاءة. يوفر مسار حجز كاملًا يشمل البحث عن الرحلات، واختيار المقاعد، وإدخال بيانات المسافرين، والدفع، وإدارة الحجز ضمن واجهة متجاوبة وبديهية.",
      features: ["نتائج البحث", "اختيار المقاعد", "ملخص الرحلة", "تأكيد الحجز"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      architecture: "مسار حجز متعدد الخطوات مع تقدم واضح للحالة.",
      challenges: "عرض بيانات السفر دون إرهاق مسار الحجز.",
      solutions: "خطوات موجهة وبطاقات مختصرة وكشف تدريجي للمعلومات.",
    },
    istudent: {
      summary: "منصة إدارة الطلاب",
      description:
        "iStudent هي منصة ويب لإدارة الحياة الأكاديمية صُممت لتبسيط التواصل والتنظيم بين الطلاب والمؤسسات التعليمية. تجمع المنصة الدروس والجداول والواجبات والدرجات والإعلانات ومعلومات الطلاب في واجهة نظيفة وبديهية.",
      features: ["عرض الجدول", "إدارة المهام", "الإشعارات", "مقاييس أكاديمية"],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      architecture: "مساحة عمل طلابية غنية بالمعلومات مع تنقل جانبي.",
      challenges: "موازنة عدة إشارات أكاديمية في شاشة واحدة.",
      solutions: "تقسيم عبر بطاقات، وترميز لوني واضح، وإيقاع تصميم ثابت.",
    },
    "bank-payment-automation": {
      summary: "نظام أتمتة المدفوعات البنكية",
      description:
        "Bank Payment Automation System هو حل مالي آمن يهدف إلى أتمتة المعاملات البنكية ومسارات الدفع. يسهّل النظام معالجة العمليات مع ضمان سلامة البيانات والأمان والإدارة الفعالة للعمليات المالية عبر لوحة تحكم إدارية.",
      features: ["صفوف الموافقة", "حالات المعاملات", "سجلات التدقيق", "مؤشرات المخاطر"],
      technologies: ["Spring Boot", "React", "MySQL"],
      architecture: "لوحة أعمال مؤسسية مع حالات ثقة متدرجة.",
      challenges: "جعل أداة مالية تبدو موثوقة ومفهومة.",
      solutions: "تباين قوي، وبيانات منظمة، وحركة مدروسة.",
    },
  },
};

const base = {
  fr: {
    nav: { about: "À propos", skills: "Compétences", experience: "Expérience", projects: "Projets", contact: "Contact" },
    language: { fr: "FR", en: "EN", ar: "AR" },
    hero: {
      badge: "Disponible pour des projets produit premium",
      roles: ["Développeur Full Stack", "Développeur React", "Développeur Spring Boot", "Passionné par l'IA"],
      description:
        "Jeune diplômé d'une Licence en Technologie de l'Informatique, spécialité Développement des Systèmes d'Informations à l'ISET Mahdia. Passionné par le développement Full Stack et les technologies innovantes, je possède une solide expérience acquise à travers plusieurs stages professionnels et des projets concrets. Rigoureux, autonome et doté d'un bon esprit d'équipe",
      buttons: { contact: "Me contacter", projects: "Voir les projets", download: "Télécharger le CV" },
      stats: {
        projects: { label: "Projets", detail: "Produits réels, prototypes et réalisations complètes livrés." },
        internships: { label: "Stages", detail: "Expérience pratique au sein d'équipes professionnelles." },
        focus: { label: "Priorité", detail: "UI premium, motion maîtrisée et qualité de produit." },
      },
      titleLine: "DÉVELOPPEUR FULL STACK",
      locationLabel: "Localisation",
      bornLabel: "Né le",
    },
    about: {
      eyebrow: "À propos",
      title: "Concevoir des produits premium avec clarté, mouvement et sobriété.",
      paragraphs: [
        "Je crée des interfaces et des systèmes qui paraissent soignés dès la première interaction. Mon travail combine réflexion produit, architecture frontend moderne et design visuel précis afin d'obtenir un résultat beau et fiable.",
        "Né le 02 décembre 2004, basé à Manouba en Tunisie, j'aime façonner l'expérience complète, du premier pixel jusqu'à l'appel API final.",
      ],
    },
    skills: {
      eyebrow: "Compétences",
      title: "Des stacks modernes regroupés clairement pour une lecture rapide.",
      description: "Chaque carte suit un flux de production réel : frontend, backend, données et outils.",
    },
    skillGroups: [
      {
        title: "Frontend",
        description: "Des interfaces rapides, claires et soignées.",
        items: ["React", "Angular", "Next.js", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "Backend",
        description: "Des services fiables et des API propres.",
        items: ["Node.js", "Spring Boot", "Laravel", "PHP", "REST APIs"],
      },
      {
        title: "Base de données",
        description: "Modèles de données et persistance prêts pour la production.",
        items: ["MySQL", "Firebase", "PostgreSQL", "MongoDB", "Prisma"],
      },
      {
        title: "Outils",
        description: "Flux de travail, collaboration et discipline de livraison.",
        items: ["Git", "Docker", "Postman", "VS Code", "Figma"],
      },
    ],
    experienceEntries: [
      {
        company: "STEG",
        role: "Stagiaire Full Stack",
        period: "2024",
        location: "Tunisie",
        description: "Création de flux internes et d'écrans de reporting avec un fort accent sur la clarté, la fiabilité et la maintenabilité.",
        highlights: ["Tableaux de bord opérationnels", "Flux d'automatisation", "Reporting métier"],
      },
      {
        company: "BTK Bank",
        role: "Stagiaire Frontend & Intégration",
        period: "2025",
        location: "Tunisie",
        description: "Conception d'interfaces orientées client et intégration d'API sécurisées pour des parcours bancaires.",
        highlights: ["Intégration sécurisée", "États d'interface soignés", "Optimisation des processus"],
      },
      {
        company: "MEDIANET",
        role: "Stagiaire Développement Web",
        period: "2023",
        location: "Tunisie",
        description: "Contribution à des pages marketing responsives et à des interfaces produit avec un souci de performance et d'accessibilité.",
        highlights: ["Mises en page responsives", "Composants accessibles", "Optimisation des performances"],
      },
    ],
    educationEntries: [
      {
        institution: "Licence en Technologie de l'Informatique",
        focus: "Spécialité Développement des Systèmes d'Informations",
        period: "2023 - 2026",
        description: "ISET Mahdia - Institut Supérieur des Études Technologiques",
      },
      {
        institution: "Baccalauréat en Informatique",
        focus: "Lycée Oued Ellil",
        period: "2022 - 2023",
        description: "",
      },
    ],
    experience: {
      eyebrow: "Expérience",
      title: "Des stages et projets qui ont renforcé ma rigueur d'ingénierie.",
      description: "L'accent est mis sur l'impact, la clarté et la qualité d'exécution plutôt que sur des descriptions gonflées.",
    },
    education: {
      eyebrow: "Formation",
      title: "L'apprentissage continu au service de chaque livraison.",
      description: "Un portfolio moderne doit montrer à la fois ce qui est livré et la discipline qui le soutient.",
    },
    projects: {
      eyebrow: "Projets",
      title: "La pièce maîtresse du portfolio : des présentations premium avec un récit technique clair.",
      description: "NEXORA reçoit la plus grande mise en avant, tandis que les autres projets utilisent des maquettes cohérentes pour garder une présentation élégante.",
    },
    projectCard: {
      featured: "Projet phare",
      selected: "Projet sélectionné",
      architecture: "Architecture",
      challenge: "Défi",
      solution: "Solution",
      github: "GitHub",
      liveDemo: "Démo en direct",
    },
    contact: {
      eyebrow: "Contact",
      title: "Une manière simple et directe de lancer un projet ou une discussion.",
      description: "Cette section de contact est optimisée pour la clarté, la confiance et une interaction rapide sur desktop comme sur mobile.",
      availability: "Disponible pour des stages, des missions freelance et des projets produits nécessitant un design soigné et une ingénierie solide.",
      emailMe: "M'envoyer un email",
      labels: { name: "Nom", email: "Email", subject: "Sujet", message: "Message" },
      placeholders: {
        name: "Votre nom",
        email: "vous@exemple.com",
        subject: "Demande de projet",
        message: "Décrivez le projet, le délai et ce que vous considérez comme un succès.",
      },
      buttons: { sending: "Envoi...", send: "Envoyer le message" },
      status: { idle: "Je réponds généralement rapidement.", success: "Message envoyé ou client mail ouvert.", error: "Une erreur est survenue. Réessayez." },
    },
    footer: "Conçu pour la performance, la clarté et les opportunités.",
  },
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    language: { fr: "FR", en: "EN", ar: "AR" },
    hero: {
      badge: "Available for premium product work",
      roles: ["Full Stack Developer", "React Developer", "Spring Boot Developer", "AI Enthusiast"],
      description:
        "I design and ship premium web experiences that balance elegant interfaces, clear product thinking, and resilient engineering. My focus is on modern frontend systems, fast user experiences, and scalable full-stack delivery.",
      buttons: { contact: "Contact Me", projects: "View Projects", download: "Download CV" },
      stats: {
        projects: { label: "Projects", detail: "Real products, prototypes, and complete builds shipped." },
        internships: { label: "Internships", detail: "Hands-on experience across professional teams." },
        focus: { label: "Focus", detail: "Premium UI, controlled motion, and product quality." },
      },
      titleLine: "FULL STACK DEVELOPER",
      locationLabel: "Location",
      bornLabel: "Born",
    },
    about: {
      eyebrow: "About",
      title: "Engineering premium products with clarity, motion, and restraint.",
      paragraphs: [
        "I build interfaces and systems that feel polished from the first interaction. My work combines product thinking, modern frontend architecture, and careful visual design so the result is both beautiful and dependable.",
        "Born on 02 December 2004, based in Manouba, Tunisia, I enjoy shaping the entire user journey from the first pixel to the final API call.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Modern stacks, grouped clearly so hiring teams can scan fast.",
      description: "Each card follows a real production workflow: frontend, backend, data, and tools.",
    },
    skillGroups: [
      { title: "Frontend", description: "Interfaces that feel fast, clear, and premium.", items: ["React", "Angular", "Next.js", "Tailwind CSS", "TypeScript"] },
      { title: "Backend", description: "Reliable services and API layers with clean architecture.", items: ["Node.js", "Spring Boot", "Laravel", "PHP", "REST APIs"] },
      { title: "Database", description: "Data models and persistence for production workflows.", items: ["MySQL", "Firebase", "PostgreSQL", "MongoDB", "Prisma"] },
      { title: "Tools", description: "Workflow, collaboration, and shipping discipline.", items: ["Git", "Docker", "Postman", "VS Code", "Figma"] },
    ],
    experienceEntries: [
      { company: "STEG", role: "Full Stack Intern", period: "2024", location: "Tunisia", description: "Built internal workflows and reporting surfaces with a strong focus on clarity, reliability, and maintainability.", highlights: ["Operational dashboards", "Automation flows", "Stakeholder reporting"] },
      { company: "BTK Bank", role: "Frontend & Integration Intern", period: "2025", location: "Tunisia", description: "Shaped customer-facing interfaces and integrated secure APIs for banking-related service flows.", highlights: ["Secure integration", "Polished UI states", "Process optimization"] },
      { company: "MEDIANET", role: "Web Development Intern", period: "2023", location: "Tunisia", description: "Contributed to responsive marketing pages and product interfaces with performance and accessibility in mind.", highlights: ["Responsive layouts", "Accessible components", "Performance tuning"] },
    ],
    educationEntries: [
      { institution: "Bachelor of Computer Technology", focus: "Information Systems Development", period: "2023 - 2026", description: "ISET Mahdia - Higher Institute of Technological Studies" },
      { institution: "High School Diploma in Computer Science", focus: "Oued Ellil High School", period: "2022 - 2023", description: "" },
    ],
    experience: {
      eyebrow: "Experience",
      title: "Internships and product work that sharpened my engineering discipline.",
      description: "The focus is on impact, clarity, and execution quality rather than inflated descriptions.",
    },
    education: {
      eyebrow: "Education",
      title: "Continuous learning, applied every time I ship.",
      description: "A modern portfolio should show both delivery and the discipline behind it.",
    },
    projects: {
      eyebrow: "Projects",
      title: "The portfolio centerpiece: premium showcases with clear technical storylines.",
      description: "NEXORA gets maximum attention, while the remaining projects use cohesive mockups to keep the presentation polished.",
    },
    projectCard: {
      featured: "Featured project",
      selected: "Selected project",
      architecture: "Architecture",
      challenge: "Challenge",
      solution: "Solution",
      github: "GitHub",
      liveDemo: "Live demo",
    },
    contact: {
      eyebrow: "Contact",
      title: "A clean, direct way to start a project or conversation.",
      description: "This contact section is optimized for clarity, trust, and quick interaction on desktop and mobile.",
      availability: "Available for internships, freelance builds, and product work that needs careful design and strong engineering.",
      emailMe: "Email Me",
      labels: { name: "Name", email: "Email", subject: "Subject", message: "Message" },
      placeholders: { name: "Your name", email: "you@example.com", subject: "Project inquiry", message: "Tell me about the project, timeline, and what success looks like." },
      buttons: { sending: "Sending...", send: "Send Message" },
      status: { idle: "Replies usually come quickly.", success: "Message sent or email client opened.", error: "Something went wrong. Try again." },
    },
    footer: "Built for performance, clarity, and opportunity.",
  },
  ar: {
    nav: { about: "نبذة", skills: "المهارات", experience: "الخبرة", projects: "المشاريع", contact: "تواصل" },
    language: { fr: "FR", en: "EN", ar: "AR" },
    hero: {
      badge: "متاح لأعمال المنتجات المميزة",
      roles: ["مطور واجهات متكاملة", "مطور React", "مطور Spring Boot", "مهتم بالذكاء الاصطناعي"],
      description:
        "أصمّم وأطلق تجارب ويب مميزة تجمع بين الواجهات الأنيقة والتفكير الواضح في المنتج والهندسة الموثوقة. تركيزي على أنظمة Frontend حديثة وسريعة وقابلة للتوسع.",
      buttons: { contact: "تواصل معي", projects: "عرض المشاريع", download: "تحميل السيرة الذاتية" },
      stats: {
        projects: { label: "المشاريع", detail: "منتجات حقيقية ونماذج أولية وبناءات كاملة تم تسليمها." },
        internships: { label: "التدريبات", detail: "خبرة عملية ضمن فرق مهنية." },
        focus: { label: "الأولوية", detail: "واجهة مميزة، حركة محسوبة، وجودة منتج عالية." },
      },
      titleLine: "مطور واجهات متكاملة",
      locationLabel: "الموقع",
      bornLabel: "تاريخ الميلاد",
    },
    about: {
      eyebrow: "نبذة",
      title: "هندسة منتجات مميزة بوضوح وحركة وضبط.",
      paragraphs: [
        "أبني واجهات وأنظمة تبدو مصقولة منذ أول تفاعل. عملي يجمع بين التفكير في المنتج، ومعمارية Frontend حديثة، وتصميم بصري دقيق للحصول على نتيجة جميلة وموثوقة.",
        "وُلدت في 02 ديسمبر 2004 وأقيم في منوبة - تونس، وأستمتع بتشكيل رحلة المستخدم كاملة من أول بكسل حتى آخر استدعاء API.",
      ],
    },
    skills: {
      eyebrow: "المهارات",
      title: "حزم تقنية حديثة مرتبة بوضوح لتسريع القراءة من قِبل فرق التوظيف.",
      description: "كل بطاقة تعكس سير عمل حقيقي: الواجهة، الخادم، البيانات، والأدوات.",
    },
    skillGroups: [
      { title: "الواجهة الأمامية", description: "واجهات سريعة وواضحة ومصقولة.", items: ["React", "Angular", "Next.js", "Tailwind CSS", "TypeScript"] },
      { title: "الخادم", description: "خدمات موثوقة وواجهات API نظيفة.", items: ["Node.js", "Spring Boot", "Laravel", "PHP", "REST APIs"] },
      { title: "قاعدة البيانات", description: "نماذج بيانات وتخزين جاهزان للإنتاج.", items: ["MySQL", "Firebase", "PostgreSQL", "MongoDB", "Prisma"] },
      { title: "الأدوات", description: "سير عمل وتعاون وانضباط في التسليم.", items: ["Git", "Docker", "Postman", "VS Code", "Figma"] },
    ],
    experienceEntries: [
      { company: "STEG", role: "متدرب Full Stack", period: "2024", location: "تونس", description: "أنشأت مسارات داخلية وشاشات تقارير مع تركيز قوي على الوضوح والموثوقية وقابلية الصيانة.", highlights: ["لوحات تشغيلية", "مسارات أتمتة", "تقارير للأطراف المعنية"] },
      { company: "BTK Bank", role: "متدرب Frontend & Integration", period: "2025", location: "تونس", description: "صممت واجهات موجهة للعملاء وربطت واجهات API آمنة لمسارات الخدمات البنكية.", highlights: ["تكامل آمن", "حالات واجهة مصقولة", "تحسين العمليات"] },
      { company: "MEDIANET", role: "متدرب تطوير ويب", period: "2023", location: "تونس", description: "ساهمت في صفحات تسويقية متجاوبة وواجهات منتجات مع مراعاة الأداء وإمكانية الوصول.", highlights: ["تخطيطات متجاوبة", "مكونات قابلة للوصول", "تحسين الأداء"] },
    ],
    educationEntries: [
      { institution: "بكالوريوس في تكنولوجيا الإعلامية", focus: "تطوير أنظمة المعلومات", period: "2023 - 2026", description: "المعهد العالي للدراسات التكنولوجية - المهدية" },
      { institution: "شهادة البكالوريا في الإعلامية", focus: "معهد وادي الليل", period: "2022 - 2023", description: "" },
    ],
    experience: {
      eyebrow: "الخبرة",
      title: "تدريبات وأعمال منتج عززت انضباطي الهندسي.",
      description: "التركيز هنا على الأثر والوضوح وجودة التنفيذ بدلًا من الوصف المبالغ فيه.",
    },
    education: {
      eyebrow: "التعليم",
      title: "التعلّم المستمر الذي يرافق كل عملية تسليم.",
      description: "يجب أن يُظهر أي Portfolio حديث ما تم تسليمه وما الذي يدعمه من انضباط.",
    },
    projects: {
      eyebrow: "المشاريع",
      title: "القطعة الأهم في الملف: عروض مميزة مع سرد تقني واضح.",
      description: "يحصل NEXORA على أكبر قدر من التركيز، بينما تستخدم المشاريع الأخرى نماذج متناسقة للحفاظ على عرض أنيق.",
    },
    projectCard: {
      featured: "المشروع الأبرز",
      selected: "مشروع مختار",
      architecture: "المعمارية",
      challenge: "التحدي",
      solution: "الحل",
      github: "GitHub",
      liveDemo: "عرض مباشر",
    },
    contact: {
      eyebrow: "تواصل",
      title: "طريقة مباشرة ونظيفة لبدء مشروع أو محادثة.",
      description: "قسم التواصل هذا محسّن للوضوح والثقة والتفاعل السريع على الكمبيوتر والهاتف.",
      availability: "متاح للتدريبات والمشاريع الحرة وأعمال المنتجات التي تحتاج تصميمًا دقيقًا وهندسة قوية.",
      emailMe: "راسلني",
      labels: { name: "الاسم", email: "البريد الإلكتروني", subject: "الموضوع", message: "الرسالة" },
      placeholders: { name: "اسمك", email: "you@example.com", subject: "استفسار عن مشروع", message: "أخبرني عن المشروع والمدة وما الذي يعني النجاح بالنسبة لك." },
      buttons: { sending: "جاري الإرسال...", send: "إرسال الرسالة" },
      status: { idle: "عادةً أجيب بسرعة.", success: "تم إرسال الرسالة أو فتح تطبيق البريد.", error: "حدث خطأ. حاول مرة أخرى." },
    },
    footer: "مصمم للأداء والوضوح والفرص.",
  },
};

export function getPortfolioCopy(locale: Locale): PortfolioCopy {
  const current = base[locale];

  return {
    ...current,
    projectsCopy: projectCopy[locale],
  };
}

export function getLocalizedProjects(locale: Locale) {
  return baseProjects.map((project) => ({
    ...project,
    ...projectCopy[locale][project.slug],
  }));
}