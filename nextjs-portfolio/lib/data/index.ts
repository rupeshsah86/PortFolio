import type {
  PersonalInfo,
  Project,
  ProfessionalExperience,
  SkillCategory,
  BlogPost,
  Certification,
  Achievement,
  CodingProfile,
  Testimonial,
} from "@/lib/types";

export const personal: PersonalInfo = {
  name: "Rupesh Kumar",
  firstName: "Rupesh",
  initials: "RK",
  title: "Full-Stack Engineer & Computer Science Student",
  headline: "Full-Stack Engineer | Backend Systems | AI/ML",
  subheadline:
    "Building reliable web applications, scalable backend systems, and practical AI-powered solutions.",
  tagline: "Building software that scales and solves real problems.",
  positioning:
    "Full-Stack Engineer with hands-on experience in backend systems, database engineering, open-source contributions, and applied AI/ML.",
  targetRoles: [
    "Software Engineering Intern",
    "Full-Stack Developer Intern",
    "Backend Developer Intern",
    "AI/ML Engineering Intern",
  ],
  about: [
    "I'm Rupesh Kumar, a Computer Science and Engineering student at Sri Eshwar College of Engineering, graduating in 2028.",
    "I build full-stack applications and backend systems using Java, Spring Boot, React, Next.js, and relational databases. My work also includes AI/ML pipelines, RAG-based applications, and data-driven problem solving.",
    "With 2,000+ coding problems solved and hands-on experience contributing to open-source projects and building applications across backend engineering, databases, and AI, I enjoy turning complex problems into practical software.",
  ],
  email: "rupeshshah.86@gmail.com",
  github: "https://github.com/rupeshsah86",
  linkedin: "https://www.linkedin.com/in/rupesh-shah-a480b8324/",
  twitter: "https://x.com/RupeshshahB86",
  college: "Sri Eshwar College of Engineering",
  degree: "B.E. Computer Science and Engineering",
  educationPeriod: "2024–2028",
  expectedGraduation: "2028",
  cgpa: "7.93",
  resumeUrl: "/files/Rupesh_Kumar_Resume.pdf",
};

// ============================================================================
// VERIFIED STATISTICS
// Strictly verified metrics only (no invented metrics or user counts)
// ============================================================================
export const stats = [
  { n: "2,000+", l: "DSA Problems Solved" },
  { n: "7+", l: "Engineering Projects" },
  { n: "Open Source", l: "Merged PRs & Contributions" },
  { n: "Full-Stack & Backend", l: "Systems Development" },
  { n: "AI/ML", l: "Data-Driven Applications" },
];

// ============================================================================
// PROFESSIONAL EXPERIENCE & OPEN SOURCE CONTRIBUTIONS
// Dedicated section highlighting real engineering work beyond coursework
// ============================================================================
export const professionalExperiences: ProfessionalExperience[] = [
  {
    role: "Open Source Contributor",
    organization: "Eclipse SW360 — Eclipse Foundation",
    period: "2026",
    type: "opensource",
    description:
      "Delivered 2 merged pull requests to an enterprise license-compliance platform: added unit tests for LicenseInfoController, tightened ArchUnit architecture rules, and refactored test naming while removing an ArchUnit ratio exclusion.",
    highlights: [
      "Delivered 2 merged pull requests to an enterprise license-compliance platform.",
      "Added comprehensive unit tests for LicenseInfoController ensuring controller reliability.",
      "Tightened ArchUnit architecture rules to enforce clean architectural boundaries.",
      "Refactored test naming conventions and removed legacy ArchUnit ratio exclusion.",
    ],
    keyTags: ["Java", "Spring Boot", "ArchUnit", "JUnit", "Architecture Rules"],
    repoUrl: "https://github.com/eclipse/sw360",
    pullRequests: ["2 Merged PRs"],
  },
  {
    role: "Open Source Contributor",
    organization: "BossConsole — Risa Labs",
    period: "September 2026",
    type: "opensource",
    description:
      "Merged 3 pull requests (#704, #793, #777), including a coroutine-scope memory-leak fix for a production issue and UI-state persistence improvements.",
    highlights: [
      "Merged 3 pull requests (#704, #793, #777) in the official repository.",
      "Diagnosed and resolved a coroutine-scope memory leak addressing an active production issue.",
      "Engineered UI-state persistence improvements to maintain state integrity across lifecycle changes.",
      "Collaborated with project maintainers on code reviews and asynchronous dispatch best practices.",
    ],
    keyTags: ["Open Source", "Coroutines", "Memory Leak Fix", "UI State", "Production Issue"],
    repoUrl: "https://github.com/risa-labs-inc/BossConsole",
    pullRequests: ["PR #704", "PR #793", "PR #777"],
  },
  {
    role: "Full Stack Development Intern",
    organization: "Campus Aacharya",
    period: "December 2025",
    type: "internship",
    description:
      "Built a full-stack Blood Bank Management System using React.js, Node.js, Express.js, and MongoDB, with JWT authentication and REST APIs for donor registration, inventory tracking, and requests.",
    highlights: [
      "Built full-stack Blood Bank Management System applying MERN stack architecture.",
      "Engineered RESTful API endpoints for donor registration, blood inventory tracking, and request handling.",
      "Implemented secure JWT authentication and role-based access for system users.",
      "Designed MongoDB data models for real-time inventory management and request workflows.",
    ],
    keyTags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST APIs"],
  },
];

// ============================================================================
// TECHNICAL SKILLS
// Organized strictly into the 7 requested categories with clear prioritization
// ============================================================================
export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", primary: true },
      { name: "Python", primary: true },
      { name: "JavaScript", primary: true },
      { name: "TypeScript", primary: true },
      { name: "C", primary: false },
      { name: "C++", primary: false },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", primary: true },
      { name: "Node.js", primary: true },
      { name: "Express.js", primary: true },
      { name: "FastAPI", primary: true },
      { name: "REST APIs", primary: true },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", primary: true },
      { name: "Next.js", primary: true },
      { name: "HTML5", primary: true },
      { name: "CSS3", primary: true },
      { name: "Tailwind CSS", primary: true },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", primary: true },
      { name: "PostgreSQL", primary: true },
      { name: "MongoDB", primary: true },
      { name: "SQL", primary: true },
      { name: "Relational Schema Design", primary: true },
      { name: "Indexing", primary: true },
      { name: "Query Optimization", primary: true },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "RAG & LLM Integration", primary: true },
      { name: "Scikit-learn", primary: true },
      { name: "Pandas", primary: true },
      { name: "NumPy", primary: true },
      { name: "Feature Engineering", primary: true },
      { name: "SMOTE", primary: false },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", primary: true },
      { name: "GitHub", primary: true },
      { name: "Docker", primary: true },
      { name: "AWS", primary: false },
      { name: "Postman", primary: true },
      { name: "VS Code", primary: false },
      { name: "IntelliJ IDEA", primary: false },
    ],
  },
  {
    title: "Specialized Technologies",
    skills: [
      { name: "Three.js (WebGL)", primary: true },
      { name: "Leaflet GIS", primary: false },
      { name: "NetworkX", primary: false },
      { name: "Tesseract OCR", primary: false },
    ],
  },
];

// ============================================================================
// FEATURED PROJECTS
// Prioritizing engineering depth, real problems, and working code
// ============================================================================
export const projects: Project[] = [
  {
    id: "datapulse",
    initials: "DP",
    title: "DataPulse — AI Crime Analytics & Spatial Intelligence Platform",
    shortDesc:
      "An AI-powered crime analytics platform designed to help organize crime records, extract information from FIR documents, analyze geographic patterns, and support patrol route planning.",
    problem:
      "Law enforcement operations struggle with fragmented crime records, manual paper FIR scans, lack of real-time spatial intelligence, and unoptimized patrol routing across jurisdictions.",
    approach:
      "Built a multi-service architecture: Spring Boot REST API with PostgreSQL backend for crime data persistence and security; FastAPI AI service leveraging Groq LLM (Llama-3.3-70b) for RAG-based case briefs; Tesseract OCR for automated FIR document text extraction; Three.js for 3D geographic elevation visualization; NetworkX for Dijkstra shortest-path patrol routing; Leaflet GIS for spatial mapping; and a React Native mobile field app.",
    keyFeatures: [
      "Spring Boot REST API and PostgreSQL backend.",
      "FastAPI-based AI service integrating Groq LLM for RAG-based case briefs.",
      "Tesseract OCR for FIR document text extraction.",
      "Three.js-based 3D geographic visualization.",
      "NetworkX-based Dijkstra shortest-path patrol routing.",
      "Leaflet GIS-based spatial visualization.",
      "React Native field application.",
    ],
    challenges:
      "Extracting text from scanned multi-page FIR documents asynchronously while maintaining low-latency Groq LLM RAG responses; synchronizing mobile GPS coordinates with interactive 3D WebGL elevation heatmaps.",
    results:
      "Built and demonstrated a functional prototype at the Karnataka State Police Hackathon 2026, automating incident text extraction and computing risk-weighted patrol routes.",
    learnings:
      "Decoupling enterprise persistence (Spring Boot) from AI inference microservices (FastAPI) enables clean separation of concerns and independent service scaling.",
    tech: [
      "Next.js",
      "Spring Boot",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Groq LLM",
      "Three.js",
      "React Native Expo",
      "NetworkX",
      "Leaflet GIS",
      "Tesseract OCR",
    ],
    primaryTech: ["Spring Boot", "FastAPI", "Groq LLM", "Next.js", "Three.js"],
    github: "https://github.com/rupeshsah86/DataPulse-KSP-Crime-Analytics.git",
    demo: "https://frontend-deploy-ejcwfbbz.onslate.in",
    accentColor: "#38bdf8",
    image: "/images/projects/datapulse.jpg",
    category: "Machine Learning",
    categoryBadge: "AI/ML | Full-Stack | Backend Engineering",
  },
  {
    id: "aerollm",
    initials: "AL",
    title: "AeroLLM — Domain-Specific Aviation Maintenance & Safety Intelligence",
    shortDesc:
      "Domain-specific RAG engine and intelligence platform for commercial aviation maintenance engineering, ATA 100 fault classification, and NASA ASRS safety intelligence.",
    problem:
      "Aviation maintenance technicians and safety analysts must parse thousands of unstructured NASA ASRS incident reports, maintenance logs, and multi-chapter ATA 100 manuals to identify component failure patterns.",
    approach:
      "Engineered a domain-specific dataset and retrieval pipeline: structured aviation incident safety data, implemented domain RAG embeddings for aircraft maintenance intelligence, and built fault classification pipelines aligned with ATA 100 chapter standards.",
    keyFeatures: [
      "NASA ASRS aviation safety report parsing and dataset structuring.",
      "Domain-specific RAG pipeline for aircraft maintenance intelligence.",
      "ATA 100 fault classification and incident taxonomy mapping.",
      "Component failure pattern analysis across safety logs.",
    ],
    challenges:
      "Handling technical terminology, acronym density, and varied reporting styles across unstructured aviation safety reports while ensuring accurate retrieval.",
    results:
      "Created a structured aviation safety dataset and specialized RAG retrieval pipeline for maintenance diagnostic exploration.",
    learnings:
      "Domain-specific RAG requires specialized taxonomy mapping (such as ATA 100 standards) to outperform generic foundation model retrieval on technical documentation.",
    tech: [
      "Python",
      "RAG & LLM Integration",
      "Dataset Engineering",
      "NLP",
      "Pandas",
      "Scikit-learn",
    ],
    primaryTech: ["Python", "RAG & LLM Integration", "Dataset Engineering"],
    github: "https://github.com/rupeshsah86/aerollm_rev2.git",
    accentColor: "#0ea5e9",
    category: "Machine Learning",
    categoryBadge: "Applied AI / RAG & Dataset Engineering",
  },
  {
    id: "return-refund",
    initials: "RR",
    title: "Return & Refund Management System",
    shortDesc:
      "A backend workflow system designed to manage e-commerce return and refund processes through structured approval stages and transaction-safe database operations.",
    problem:
      "E-commerce return flows involve complex multi-stage approvals across customers and administrators requiring transactional safety to prevent double-refunds and inconsistent inventory records.",
    approach:
      "Implemented a structured multi-stage approval workflow with ACID-compliant MySQL transactions and append-only audit logging for every state transition across customer, reviewer, and admin roles.",
    keyFeatures: [
      "Multi-stage approval workflow.",
      "Role-Based Access Control.",
      "MySQL transaction management.",
      "Audit logging for workflow transitions.",
      "Database consistency and duplicate-refund prevention design.",
    ],
    challenges:
      "Handling concurrent return requests without race conditions and designing an append-only audit trail that remains fast to query across high transaction volumes.",
    results:
      "Modeled complete multi-stage approval logic with transaction locking and verified data separation across role boundaries.",
    learnings:
      "Designing ACID compliance and audit trails into database schemas from day one makes backend systems significantly more robust and auditable.",
    tech: [
      "MySQL",
      "Node.js",
      "Transaction Management",
      "RBAC",
      "Audit Logging",
      "Backend Architecture",
    ],
    primaryTech: ["MySQL", "Transaction Management", "RBAC"],
    github: "https://github.com/rupeshsah86/ReturnRefundManager.git",
    accentColor: "#818cf8",
    image: "/images/projects/return-refund.png",
    category: "Backend & Systems",
    categoryBadge: "Backend & Systems",
  },
  {
    id: "smart-campus",
    initials: "SC",
    title: "Smart Campus Service Request System",
    shortDesc:
      "A campus service request backend designed to manage ticket submission, assignment, review, and resolution through a structured workflow.",
    problem:
      "Manual campus service ticketing led to lost requests, lack of resolution visibility for students, and unstructured ticket assignment workflows for facility administrators.",
    approach:
      "Designed a normalized relational schema modeling the ticket lifecycle. Built RESTful API endpoints with role-based access control and designed the workflow engine as a state machine to enforce valid transitions.",
    keyFeatures: [
      "Normalized relational schema.",
      "Ticket lifecycle management.",
      "Role-based access control.",
      "State machine-based workflow design.",
      "REST API architecture.",
    ],
    challenges:
      "Enforcing valid state transitions (preventing premature closures or invalid re-openings) at the backend API layer without relying on client-side validation.",
    results:
      "Digitized request lifecycles with structured state transitions, eliminating ambiguity across student, staff, and admin interactions.",
    learnings:
      "Encoding state transition constraints directly in backend service logic ensures data integrity regardless of client behavior.",
    tech: [
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "RBAC",
      "State Machine Design",
    ],
    primaryTech: ["Node.js", "Express.js", "MySQL", "REST APIs"],
    github: "https://github.com/rupeshsah86/SmartCampusServiceRequestSystem.git",
    accentColor: "#5b5bd6",
    image: "/images/projects/smart-campus.png",
    category: "Backend & Systems",
    categoryBadge: "Backend & Systems",
  },
  {
    id: "predictive-maintenance",
    initials: "ML",
    title: "Military Vehicle Predictive Maintenance",
    shortDesc:
      "An ML pipeline for predictive maintenance that analyzes sensor-related features to identify potential equipment failures and support preventive maintenance decisions.",
    problem:
      "Reactive maintenance on operational vehicles leads to costly equipment downtime and safety risks. The objective was to evaluate failure risk using sensor telemetry.",
    approach:
      "Built an end-to-end supervised machine learning pipeline: sensor data preprocessing, domain-specific feature engineering, class imbalance mitigation using SMOTE, and model evaluation focusing on precision and recall trade-offs.",
    keyFeatures: [
      "Data preprocessing and feature engineering.",
      "Supervised classification.",
      "Class imbalance handling using SMOTE.",
      "Model evaluation using precision and recall.",
    ],
    challenges:
      "Severe class imbalance in failure event data required careful SMOTE oversampling and threshold tuning to avoid false negatives.",
    results:
      "Demonstrated that domain feature engineering combined with SMOTE yielded substantial improvements in identifying rare failure events over baseline algorithms.",
    learnings:
      "In risk-sensitive engineering applications, the asymmetric cost of false negatives requires optimizing for recall rather than relying on standard accuracy.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Supervised Classification",
      "SMOTE",
      "Feature Engineering",
    ],
    primaryTech: ["Python", "Scikit-learn", "SMOTE", "Pandas"],
    github:
      "https://github.com/rupeshsah86/predictivemaintainancemilitarryvehicle-Aiml.git",
    accentColor: "#22c55e",
    image: "/images/projects/predictive-maintenance.png",
    category: "Machine Learning",
    categoryBadge: "Applied AI / ML",
  },
  {
    id: "blood-bank",
    initials: "BB",
    title: "Blood Bank Management System",
    shortDesc:
      "A database-focused blood bank management system designed to organize donor information and blood inventory through structured relational data.",
    problem:
      "Blood centers require fast inventory lookups and accurate donor record matching across blood types and urgency levels without database contention.",
    approach:
      "Designed a normalized relational schema supporting donor registration, inventory tracking, and matching queries. Applied database indexing and structured JOIN queries to optimize lookup performance.",
    keyFeatures: [
      "Normalized relational schema.",
      "Donor and inventory management.",
      "Composite indexing where implemented.",
      "SQL joins and query optimization.",
    ],
    challenges:
      "Selecting appropriate composite index structures to accelerate read-heavy inventory matching queries without imposing excessive overhead during donor record writes.",
    results:
      "Efficient inventory tracking schema with optimized query execution plans and clean relational data organization.",
    learnings:
      "Index design must be guided by execution plans and actual query patterns; normalization and indexing work together to ensure relational data efficiency.",
    tech: [
      "MySQL",
      "DBMS",
      "Relational Schema Design",
      "Indexing",
      "SQL Query Optimization",
    ],
    primaryTech: ["MySQL", "Relational Schema Design", "Query Optimization"],
    github: "https://github.com/rupeshsah86/blood-bank-system.git",
    accentColor: "#e05c5c",
    image: "/images/projects/blood-bank.png",
    category: "Backend & Systems",
    categoryBadge: "Database & Backend",
  },
  {
    id: "hamro-food",
    initials: "HF",
    title: "Hamro Food — Food Ordering Web App",
    shortDesc:
      "A responsive food ordering interface built using vanilla web technologies, focusing on accessibility, responsive layouts, and interactive cart functionality.",
    problem:
      "Build a complete, accessible food ordering frontend from scratch without external UI frameworks while maintaining mobile responsiveness and smooth interactions.",
    approach:
      "Implemented a mobile-first responsive layout with semantic HTML5, CSS Grid, and Flexbox. Built interactive components, cart state management, and menu category filtering using vanilla JavaScript.",
    keyFeatures: [
      "Mobile-first responsive layout.",
      "Interactive cart state.",
      "Menu filtering.",
      "Semantic HTML.",
      "CSS Grid and Flexbox.",
    ],
    challenges:
      "Structuring modular, maintainable CSS utility classes and efficient DOM state updates without third-party libraries.",
    results:
      "Fully responsive, accessible UI with zero framework overhead, fast initial load time, and live deployment on GitHub Pages.",
    learnings:
      "Building directly on browser primitives deepens understanding of DOM manipulation, CSS layout algorithms, and browser rendering lifecycles.",
    tech: ["HTML5", "CSS3", "JavaScript", "CSS Grid", "Flexbox"],
    primaryTech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/rupeshsah86/Hamro_Food.git",
    demo: "https://rupeshsah86.github.io/Hamro_Food/",
    accentColor: "#f59e0b",
    image: "/images/projects/hamro-food.png",
    category: "Full Stack",
    categoryBadge: "Frontend & Web Fundamentals",
  },
];

// ============================================================================
// COMPETITIVE PROGRAMMING PROFILES
// 2,000+ problems solved across verified coding platforms
// ============================================================================
export const codingProfiles: CodingProfile[] = [
  {
    platform: "SkillRack",
    solved: "1,500+ Problems",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=515052&key=f24de1adc9fe16fffdcba8ac076d17c239e67d84",
    highlight: "Daily DSA & Logic Practice",
  },
  {
    platform: "CodeChef",
    solved: "650+ Problems",
    url: "https://www.codechef.com/users/rupeshsah_1",
    highlight: "Competitive Problem Solving",
  },
  {
    platform: "LeetCode",
    solved: "240+ Problems",
    url: "https://leetcode.com/u/Rupeshkumarsah/",
    highlight: "Data Structures & Algorithms",
  },
  {
    platform: "CodeForces",
    solved: "35+ Problems",
    url: "https://codeforces.com/profile/rupeshkumarsah.2024cse",
    highlight: "Contest Problem Solving",
  },
  {
    platform: "HackerRank",
    solved: "Secured Bronze in Java",
    url: "https://www.hackerrank.com/profile/rupeshkumarsah_1",
    highlight: "Java Problem Solving",
  },
];

// ============================================================================
// ACHIEVEMENTS & CERTIFICATIONS
// Verified awards, hackathons, and certifications
// ============================================================================
export const achievements: Achievement[] = [
  {
    title: "First Prize Winner",
    event: "Freshathon 2025",
    year: "2025",
    badge: "1st Place",
  },
  {
    title: "First Prize Winner",
    event: "Creatathon 2025",
    year: "2025",
    badge: "1st Place",
  },
  {
    title: "Hackathon Participant & Presenter",
    event: "Karnataka State Police Hackathon 2026 (DataPulse Platform)",
    year: "2026",
    badge: "KSP Hackathon",
  },
  {
    title: "Second Prize Winner",
    event: "Creatathon 2024 & Freshathon 2024",
    year: "2024",
    badge: "2nd Place",
  },
];

export const certifications: Certification[] = [
  {
    name: "Software Engineering Job Simulation",
    issuer: "JP-Morgan Chase & Co",
    year: "2026",
  },
  {
    name: "Mastering Data Structures & Algorithms using C & C++",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "DSA using Java",
    issuer: "Guvi",
    year: "2025",
  },
  {
    name: "C and C++ Certificate",
    issuer: "Spoken Tutorial by IIT Bombay",
    year: "2024",
  },
  {
    name: "Java from Zero to First Job",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "CTF Certificate in Cyber Security",
    issuer: "Cyber Security CTF",
    year: "2024",
  },
];

// ============================================================================
// TECHNICAL WRITING / PLANNED ARTICLES
// Clearly marked as planned / coming soon
// ============================================================================
export const blogPosts: BlogPost[] = [
  {
    slug: "mysql-query-optimization",
    title: "How I optimized MySQL joins and indexed relational queries",
    excerpt:
      "A practical exploration of index design, JOIN execution plans, and query optimization lessons from building relational database systems.",
    date: "Planned / Coming Soon",
    readTime: "6 min read",
    tags: ["MySQL", "Query Optimization", "Backend"],
    published: false,
  },
  {
    slug: "state-machines-backend",
    title: "State machines in backend systems: lessons from a refund workflow",
    excerpt:
      "Why modeling business logic and request lifecycles as explicit state machines makes backend services reliable, transactional, and auditable.",
    date: "Planned / Coming Soon",
    readTime: "8 min read",
    tags: ["System Design", "State Machine", "Backend"],
    published: false,
  },
  {
    slug: "why-i-practice-dsa",
    title: "Why I practice DSA daily as a CS student",
    excerpt:
      "Building core algorithmic intuition, time-space complexity awareness, and systematic problem decomposition across 2,000+ solved problems.",
    date: "Planned / Coming Soon",
    readTime: "5 min read",
    tags: ["DSA", "Problem Solving", "Computer Science"],
    published: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Rupesh demonstrates strong analytical thinking and structured problem-solving. His ability to model complex workflows and reason about edge cases makes him a standout CS student.",
    name: "Faculty Review",
    title: "Department of CSE · Sri Eshwar College of Engineering",
    initials: "FR",
  },
  {
    quote:
      "Rupesh takes real ownership of his projects. He goes beyond basic functionality to think through schema normalization, state management, and practical execution.",
    name: "Project Feedback",
    title: "Academic Project Mentor",
    initials: "PM",
  },
  {
    quote:
      "Solid engineering fundamentals, consistent DSA practice, and continuous learning mindset. Rupesh works effectively in team settings and builds reliable software.",
    name: "Peer Endorsement",
    title: "CS Peer & Hackathon Collaborator",
    initials: "PE",
  },
];
