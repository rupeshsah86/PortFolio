import type {
  PersonalInfo,
  Project,
  Experience,
  SkillCategory,
  Testimonial,
  BlogPost,
} from "@/lib/types";

export const personal: PersonalInfo = {
  name: "Rupesh Kumar",
  firstName: "Rupesh",
  initials: "RK",
  title: "Full-Stack Engineer & CS Student",
  headline: "Building software that scales and solves real problems.",
  subheadline:
    "3rd-year CS student at Sri Eshwar College of Engineering. Focused on full-stack web development, backend architecture, relational database design, and machine learning pipelines.",
  about: [
    "I'm Rupesh — a CS student who loves building software from the ground up. I focus on clean architecture, practical tradeoffs, and building user experiences that feel intuitive and reliable.",
    "My work spans full-stack web applications, database-driven services, and machine learning pipelines. I enjoy designing normalized schemas, building workflow engines with explicit business logic, and applying ML models to practical problems.",
    "I practice DSA daily to strengthen core problem-solving fundamentals. I'm constantly learning and currently building deeper expertise in distributed systems, web architectures, and full-stack development.",
    "I'm looking for an engineering internship where I can contribute meaningfully, learn from experienced developers, and grow rapidly as a software engineer.",
  ],
  email: "rupeshshah.86@gmail.com",
  github: "https://github.com/rupeshsah86",
  linkedin: "https://www.linkedin.com/in/rupesh-shah-a480b8324/",
  twitter: "https://x.com/RupeshshahB86",
  college: "Sri Eshwar College of Engineering",
  year: "3rd Year · B.Tech CSE",
  resumeUrl: "/files/Rupesh_Kumar_Resume.pdf",
};

// ============================================================================
// PROJECTS DATA
// Live demo projects are listed first for maximum visibility.
// ============================================================================
export const projects: Project[] = [
  {
    id: "datapulse",
    initials: "DP",
    title: "DataPulse — AI Crime Analytics & Spatial Intelligence Platform",
    shortDesc:
      "AI crime analytics and spatial intelligence platform built for the Karnataka State Police Hackathon 2026, integrating Groq LLM RAG, Three.js 3D spatial maps, NetworkX routing, and React Native mobile telematics.",
    problem:
      "Law enforcement agencies operate with fragmented incident data, manual paper FIR scans, and multi-state registries. Officers lack real-time spatial intelligence, automated case briefings, and optimal risk-weighted patrol routing.",
    approach:
      "Built a multi-service architecture: Spring Boot 3.5 REST API with PostgreSQL 17 for relational crime data persistence & JWT security; Python 3.12 FastAPI AI Engine leveraging Groq LLM (Llama-3.3-70b) for RAG case briefs and Tesseract OCR for FIR extraction; NetworkX for Dijkstra shortest-path patrol routing; Next.js frontend featuring Three.js WebGL elevation maps; and a React Native Expo field app.",
    challenges:
      "Serving sub-second Groq LLM RAG responses while parsing multi-page scanned FIR PDFs required async FastAPI background pipelines. Synchronizing real-time React Native mobile officer GPS locations with interactive 3D WebGL elevation maps demanded low-latency state management via Zustand.",
    results:
      "Built a functional spatial intelligence platform prototype featuring automated FIR text extraction, fast Groq RAG case summaries, 3D WebGL severity visualization, and NetworkX risk-weighted patrol optimization.",
    learnings:
      "Combining high-speed LLMs (Groq Llama-3.3-70b) with spatial graph algorithms (NetworkX) unlocks domain-specific actionable intelligence. Decoupling enterprise REST services (Spring Boot) from AI engines (FastAPI) enables clean microservice separation.",
    tech: [
      "Next.js 16",
      "Spring Boot 3.5",
      "Python 3.12",
      "FastAPI",
      "Groq LLM (Llama 3.3)",
      "Three.js WebGL",
      "React Native Expo",
      "PostgreSQL 17",
      "NetworkX",
      "Leaflet GIS",
      "Vis Network",
      "Tesseract OCR",
      "Web Speech API",
    ],
    primaryTech: ["Next.js 16", "Spring Boot 3.5", "Groq LLM", "Python", "Three.js"],
    github: "https://github.com/rupeshsah86/DataPulse-KSP-Crime-Analytics.git",
    demo: "https://frontend-deploy-ejcwfbbz.onslate.in",
    accentColor: "#38bdf8",
    image: "/images/projects/datapulse.jpg",
    category: "Machine Learning",
  },
  {
    id: "hamro-food",
    initials: "HF",
    title: "Hamro Food — Food Ordering Web App",
    shortDesc:
      "Responsive food ordering interface built with vanilla HTML5, CSS3, and JavaScript — demonstrating core web platform fundamentals.",
    problem:
      "Build a clean, responsive frontend from scratch without external UI frameworks while maintaining mobile responsiveness, accessibility, and visual polish.",
    approach:
      "Implemented a mobile-first responsive layout using CSS Grid and Flexbox. Used semantic HTML5 for accessibility. Built interactive components (cart state, menu filtering, smooth scrolling) in vanilla JavaScript.",
    challenges:
      "Achieving visual polish and smooth interactions without component libraries required writing modular CSS utility classes from scratch and handling DOM updates efficiently.",
    results:
      "Fully responsive, accessible UI with clean visual hierarchy, fast load time, zero framework overhead, and live deployment on GitHub Pages.",
    learnings:
      "Building without frameworks builds deep understanding of DOM manipulation, CSS layout models, and browser rendering primitives.",
    tech: ["HTML5", "CSS3", "JavaScript", "CSS Grid", "Flexbox", "Responsive Design", "Accessibility"],
    primaryTech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/rupeshsah86/Hamro_Food.git",
    demo: "https://rupeshsah86.github.io/Hamro_Food/",
    accentColor: "#f59e0b",
    image: "/images/projects/hamro-food.png",
    category: "Full Stack",
  },
  {
    id: "smart-campus",
    initials: "SC",
    title: "Smart Campus Service Request System",
    shortDesc:
      "Backend platform digitizing campus service operations with role-based workflow management and state machine design.",
    problem:
      "Campus service requests were handled manually via paper forms, causing delays, lost tickets, and zero visibility into resolution status. Students had no way to track requests; admins had no structured assignment system.",
    approach:
      "Designed a normalized relational schema modeling the request lifecycle — submission, assignment, status transitions, and resolution. Built a REST API with role-based access control separating student, staff, and admin permissions. Designed the workflow engine as a state machine to ensure valid status transitions.",
    challenges:
      "Modeling concurrent request assignments without race conditions required careful transaction design. Ensuring the state machine rejected invalid transitions (e.g., re-opening a resolved request) without complex client-side logic meant encoding business rules directly in backend services.",
    results:
      "Digitized request lifecycles with structured state transitions, eliminating ambiguity and lost tickets in testing scenarios.",
    learnings:
      "Encoding business rules at the API layer rather than the client makes backend applications significantly more reliable.",
    tech: ["Node.js", "Express.js", "MySQL", "REST API", "Role-Based Access Control", "State Machine Design"],
    primaryTech: ["Node.js", "MySQL", "REST API"],
    github: "https://github.com/rupeshsah86",
    accentColor: "#5b5bd6",
    image: "/images/projects/smart-campus.png",
    category: "Backend & Systems",
  },
  {
    id: "return-refund",
    initials: "RR",
    title: "Return & Refund Management System",
    shortDesc:
      "Backend workflow system with multi-stage approval workflows and ACID-compliant refund transaction logic.",
    problem:
      "E-commerce return flows involve complex multi-stage decisions — submission, validation, approval/rejection, and refund issuance — requiring accurate database transactions and audit logging.",
    approach:
      "Implemented a multi-stage approval workflow with explicit state transitions and append-only audit logging at every step. Used ACID-compliant transactions to ensure data integrity during status updates.",
    challenges:
      "Handling concurrent refund operations without double-processing required transaction locking at the database level. Designing the audit trail to be append-only while remaining queryable was a structured schema design exercise.",
    results:
      "Correctly modeled multi-stage business logic with complete audit logs and clean data separation across customer and admin roles.",
    learnings:
      "ACID compliance requires deliberate schema and transaction design. Audit trails are far easier when designed into data models from day one.",
    tech: ["MySQL", "DBMS", "Transaction Management", "Role-Based Access", "Audit Logging", "Backend Architecture"],
    primaryTech: ["MySQL", "Transaction Management"],
    github: "https://github.com/rupeshsah86/ReturnRefundManager.git",
    accentColor: "#7b7bf0",
    image: "/images/projects/return-refund.png",
    category: "Backend & Systems",
  },
  {
    id: "blood-bank",
    initials: "BB",
    title: "Blood Bank Management System",
    shortDesc:
      "Donor and inventory management system focused on relational database indexing and query optimization.",
    problem:
      "Blood banks require fast inventory lookups and accurate donor record matching across blood types and urgency levels.",
    approach:
      "Designed a normalized relational schema supporting donor registration, inventory tracking, and matching queries. Applied database indexing and structured JOIN queries to optimize lookup performance.",
    challenges:
      "Designing indexes to speed up read-heavy availability lookups without imposing heavy write overhead during donor registrations required benchmarking index choices.",
    results:
      "Efficient inventory tracking schema with fast query execution and clear donor record management.",
    learnings:
      "Index selection has a direct impact on query execution plans. Proper normalization and query optimization complement each other.",
    tech: ["MySQL", "Database Design", "Query Optimization", "Indexing", "DBMS"],
    primaryTech: ["MySQL", "Query Optimization"],
    github: "https://github.com/rupeshsah86/blood-bank-system.git",
    accentColor: "#e05c5c",
    image: "/images/projects/blood-bank.png",
    category: "Backend & Systems",
  },
  {
    id: "predictive-maintenance",
    initials: "ML",
    title: "Military Vehicle Predictive Maintenance",
    shortDesc:
      "Supervised machine learning pipeline predicting vehicle component failure to prevent operational downtime.",
    problem:
      "Reactive vehicle maintenance leads to costly unplanned downtime. The project objective was to evaluate failure risk using sensor measurements.",
    approach:
      "Built an end-to-end ML pipeline: data cleaning, feature engineering from raw sensor readings, training classification models, and evaluating precision/recall trade-offs to minimize false negatives.",
    challenges:
      "Class imbalance in failure events required SMOTE oversampling and threshold tuning. Choosing the appropriate metric (recall vs precision) depended on the high cost of false negatives.",
    results:
      "Evaluated model performance under imbalanced data conditions, showing that domain feature engineering yielded significant performance gains.",
    learnings:
      "In risk-sensitive ML applications, error cost asymmetry dictates metric evaluation rather than default accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Supervised Learning", "Feature Engineering", "SMOTE"],
    primaryTech: ["Python", "Scikit-learn", "Feature Engineering"],
    github: "https://github.com/rupeshsah86/predictivemaintainancemilitarryvehicle-Aiml.git",
    accentColor: "#22c55e",
    image: "/images/projects/predictive-maintenance.png",
    category: "Machine Learning",
  },
];

export const experiences: Experience[] = [
  {
    role: "DataPulse — AI Crime Analytics Platform",
    company: "Karnataka State Police Hackathon 2026",
    period: "2026",
    type: "project",
    bullets: [
      "Built multi-service AI crime analytics platform integrating Groq LLM (Llama-3.3-70b) RAG for incident summarization",
      "Engineered 3D WebGL spatial height elevation maps with Three.js and 2D GIS hotspot maps with Leaflet",
      "Implemented NetworkX shortest path graph algorithms for patrol route optimization",
      "Designed Spring Boot 3.5 REST backend with PostgreSQL 17 and FastAPI Python AI services",
    ],
  },
  {
    role: "B.Tech Computer Science & Engineering",
    company: "Sri Eshwar College of Engineering",
    period: "2024 – Present",
    type: "education",
    bullets: [
      "Maintaining strong academic performance across core CS subjects: DSA, OOP, DBMS, Operating Systems, and Computer Networks",
      "Built 5+ full-stack web and ML projects applying engineering principles beyond coursework requirements",
      "Solved 2000+ algorithmic problems on LeetCode, CodeChef, and HackerRank with focus on time/space complexity",
      "Actively preparing for full-stack software engineering roles with deep focus on clean code and system design",
    ],
  },
  {
    role: "Smart Campus Service Request System",
    company: "Academic Project",
    period: "2024",
    type: "project",
    bullets: [
      "Designed end-to-end service request platform handling multi-role workflows for students, staff, and administrators",
      "Designed normalized relational schema modeling full request lifecycles with state machine constraints",
      "Implemented role-based access control and RESTful API endpoints in Node.js & Express",
      "Applied backend architecture principles: modular separation, REST design, and data integrity constraints",
    ],
  },
  {
    role: "Return & Refund Management System",
    company: "Academic Project",
    period: "2024",
    type: "project",
    bullets: [
      "Modeled complex e-commerce return workflows with explicit state transitions and permission boundaries",
      "Implemented ACID-compliant transaction handling in MySQL to maintain data integrity during approval stages",
      "Designed append-only audit logging system capturing status changes with actor timestamps",
      "Enforced role-based access separating customer, reviewer, and administrator actions",
    ],
  },
  {
    role: "Military Vehicle Predictive Maintenance (ML)",
    company: "Academic Project",
    period: "2024",
    type: "project",
    bullets: [
      "Built supervised learning pipeline: data preprocessing, feature engineering, model training, and evaluation",
      "Applied SMOTE oversampling to address class imbalance in failure event data",
      "Evaluated model trade-offs with explicit focus on minimizing false negatives",
      "Demonstrated how feature engineering improves classification metrics over baseline algorithms",
    ],
  },
  {
    role: "Competitive Programming & DSA Practice",
    company: "LeetCode · CodeChef · HackerRank · SkillRack",
    period: "2024 – Present",
    type: "practice",
    bullets: [
      "Solved 2000+ problems spanning arrays, strings, recursion, hashing, stacks, queues, and trees",
      "Consistent daily practice with focus on optimal time/space complexity analysis",
      "Building the algorithmic foundation required for technical interviews and software engineering roles",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
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
    title: "Web Technologies",
    skills: [
      { name: "HTML5", primary: true },
      { name: "CSS3", primary: true },
      { name: "JavaScript", primary: true },
      { name: "React.js", primary: true },
      { name: "Next.js", primary: true },
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
    title: "Machine Learning & Data Analysis",
    skills: [
      { name: "Pandas", primary: true },
      { name: "NumPy", primary: true },
      { name: "Scikit-learn", primary: true },
      { name: "Matplotlib", primary: false },
      { name: "Groq LLM RAG", primary: true },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", primary: true },
      { name: "MongoDB", primary: true },
      { name: "PostgreSQL", primary: true },
      { name: "Schema Design", primary: false },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "GitHub & Git", primary: true },
      { name: "Docker", primary: true },
      { name: "AWS", primary: false },
      { name: "VS Code", primary: false },
      { name: "IntelliJ IDEA", primary: false },
      { name: "Postman", primary: false },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures", primary: true },
      { name: "Algorithms & OOP", primary: true },
      { name: "DBMS", primary: true },
      { name: "Computer Networks", primary: false },
      { name: "Operating Systems", primary: false },
    ],
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

export const blogPosts: BlogPost[] = [
  {
    slug: "mysql-query-optimization",
    title: "How I optimized MySQL joins and indexed relational queries",
    excerpt:
      "A deep dive into index design, JOIN strategies, and query execution plans — lessons learned building database projects.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["MySQL", "Performance", "Backend"],
    published: false,
  },
  {
    slug: "state-machines-backend",
    title: "State machines in backend systems: lessons from a refund workflow",
    excerpt:
      "Why modeling business logic as explicit state machines makes backend applications reliable and auditable.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["Architecture", "Backend", "System Design"],
    published: false,
  },
  {
    slug: "why-i-practice-dsa",
    title: "Why I practice DSA daily as a CS student",
    excerpt:
      "Building the core mental models and algorithmic intuition that make software engineers adaptable across tech stacks.",
    date: "Coming Soon",
    readTime: "5 min read",
    tags: ["DSA", "Career", "Engineering"],
    published: false,
  },
];

