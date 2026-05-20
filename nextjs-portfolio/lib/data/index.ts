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
  headline: "I build systems that think.",
  subheadline:
    "3rd-year CS student at Sri Eshwar College of Engineering. I obsess over architecture, developer experience, and shipping software that solves real problems — not just software that runs.",
  about: [
    "I'm Rupesh — a CS student who thinks in systems and ships in code. I don't just implement features; I think about architecture, tradeoffs, and the humans who'll use what I build.",
    "My work spans full-stack web applications, database-driven systems, and machine learning pipelines. I've designed schemas from scratch, built approval workflows with real business logic, and applied ML to reduce operational risk in predictive maintenance systems.",
    "I practice DSA daily because strong fundamentals are what separate engineers who can solve any problem from those who can only solve familiar ones. I'm currently deepening my expertise in distributed systems, system design, and production-grade full-stack engineering.",
    "I'm looking for an internship where I can contribute meaningfully from day one, learn from engineers who've built things at scale, and grow faster than I could alone.",
  ],
  email: "rupeshshah.86@gmail.com",
  github: "https://github.com/rupeshsah86",
  linkedin: "https://www.linkedin.com/in/rupesh-shah-a480b8324/",
  twitter: "https://x.com/RupeshshahB86",
  college: "Sri Eshwar College of Engineering",
  year: "3rd Year · B.Tech CSE",
  resumeUrl: "/files/Rupesh_Kumar_Sah_24CS201.pdf",
};

export const projects: Project[] = [
  {
    id: "smart-campus",
    initials: "SC",
    title: "Smart Campus Service Request System",
    shortDesc:
      "End-to-end platform digitizing campus service operations with role-based workflow management.",
    problem:
      "Campus service requests were handled manually via paper forms, causing delays, lost tickets, and zero visibility into resolution status. Students had no way to track requests; admins had no structured assignment system.",
    approach:
      "Architected a normalized relational schema modeling the full request lifecycle — submission, assignment, status transitions, and resolution. Built a REST API with role-based access control separating student, staff, and admin permissions. Designed the workflow engine as a state machine to ensure valid transitions only.",
    challenges:
      "Modeling concurrent request assignments without race conditions required careful transaction design. Ensuring the state machine rejected invalid transitions (e.g., re-opening a resolved request) without complex client-side logic meant encoding all business rules at the database and API layer.",
    results:
      "Digitized the entire request lifecycle from submission to resolution. Reduced resolution ambiguity by enforcing structured workflows. Eliminated lost requests through persistent state tracking.",
    learnings:
      "Encoding business rules at the API layer rather than the client makes systems far more robust. State machines are underused in academic projects but essential in production systems.",
    tech: ["Node.js", "Express.js", "MySQL", "REST API", "Role-Based Access Control", "State Machine Design"],
    primaryTech: ["Node.js", "MySQL", "REST API"],
    github: "https://github.com/rupeshsah86",
    accentColor: "#5b5bd6",
    image: "/images/projects/smart-campus.png",
  },
  {
    id: "return-refund",
    initials: "RR",
    title: "Return & Refund Management System",
    shortDesc:
      "Business-logic-heavy system with multi-stage approval workflows and ACID-compliant refund processing.",
    problem:
      "E-commerce return flows involve complex state machines — request submission, validation, approval, rejection, and refund issuance — all of which needed to be modeled accurately with full auditability.",
    approach:
      "Implemented a multi-stage approval workflow with explicit state transitions and audit logging at every step. Used ACID-compliant transactions to ensure refund integrity under concurrent operations. Separated customer, reviewer, and admin roles with distinct permission boundaries.",
    challenges:
      "Handling concurrent refund operations without double-processing required pessimistic locking at the database level. Designing the audit trail to be append-only while remaining queryable for reporting was a non-trivial schema design challenge.",
    results:
      "Correctly modeled real-world business logic with full auditability. Zero data inconsistency in concurrent test scenarios. Clean separation of concerns between workflow logic and data persistence.",
    learnings:
      "ACID compliance isn't just a checkbox — it requires deliberate schema and query design. Audit trails should be designed upfront, not retrofitted.",
    tech: ["MySQL", "DBMS", "Transaction Management", "Role-Based Access", "Audit Logging", "Backend Architecture"],
    primaryTech: ["MySQL", "Transaction Management"],
    github: "https://github.com/rupeshsah86/ReturnRefundManager.git",
    accentColor: "#7b7bf0",
    image: "/images/projects/return-refund.png",
  },
  {
    id: "blood-bank",
    initials: "BB",
    title: "Blood Bank Management System",
    shortDesc:
      "Donor and inventory management system with optimized blood type matching and real-time availability tracking.",
    problem:
      "Blood banks struggle with real-time inventory visibility, donor record management, and efficiently matching blood types to urgent requests — often relying on manual lookups.",
    approach:
      "Designed a normalized relational schema supporting donor registration, blood type inventory, and request matching. Optimized queries for fast availability lookups across blood type and location filters using indexed columns and efficient JOIN strategies.",
    challenges:
      "Achieving sub-100ms query performance on availability lookups required careful index design. Modeling the many-to-many relationship between donors and blood types while keeping queries readable was a schema design challenge.",
    results:
      "Efficient inventory tracking with fast availability queries. Clean donor management with full registration and history. Demonstrated measurable query performance improvement through indexing.",
    learnings:
      "Index design has an outsized impact on read performance. Normalization and query optimization are not in conflict — they require each other.",
    tech: ["MySQL", "Database Design", "Query Optimization", "Indexing", "DBMS"],
    primaryTech: ["MySQL", "Query Optimization"],
    github: "https://github.com/rupeshsah86/blood-bank-system.git",
    accentColor: "#e05c5c",
    image: "/images/projects/blood-bank.png",
  },
  {
    id: "predictive-maintenance",
    initials: "ML",
    title: "Military Vehicle Predictive Maintenance",
    shortDesc:
      "Supervised ML pipeline predicting vehicle maintenance needs to eliminate unplanned operational downtime.",
    problem:
      "Reactive maintenance of military vehicles leads to costly unplanned downtime in high-stakes environments. The goal was to shift from reactive to predictive maintenance using historical sensor and maintenance data.",
    approach:
      "Built a full ML pipeline: data cleaning, feature engineering from raw sensor readings, training multiple classification models, and evaluating them against precision/recall tradeoffs. Prioritized minimizing false negatives (missed failures) over false positives given the high cost of unplanned downtime.",
    challenges:
      "Class imbalance in failure data (failures are rare) required SMOTE oversampling and careful threshold tuning. Selecting the right evaluation metric — F1 vs. recall — required understanding the real-world cost asymmetry between false positives and false negatives.",
    results:
      "Identified optimal model with best precision/recall tradeoff for high-stakes prediction. Demonstrated that feature engineering contributed more to model performance than algorithm selection.",
    learnings:
      "In high-stakes ML, metric selection is a product decision, not a technical one. Understanding the cost of each error type should drive every modeling choice.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Supervised Learning", "Feature Engineering", "SMOTE"],
    primaryTech: ["Python", "Scikit-learn", "Feature Engineering"],
    github: "https://github.com/rupeshsah86/predictivemaintainancemilitarryvehicle-Aiml.git",
    accentColor: "#22c55e",
    image: "/images/projects/predictive-maintenance.png",
  },
  {
    id: "hamro-food",
    initials: "HF",
    title: "Hamro Food — Food Ordering Frontend",
    shortDesc:
      "Production-quality responsive food ordering UI built with zero frameworks — pure HTML, CSS, and JavaScript.",
    problem:
      "Build a production-quality frontend from scratch with no frameworks while maintaining mobile responsiveness, accessibility, and visual polish — a constraint that forces deep understanding of the web platform.",
    approach:
      "Implemented a mobile-first responsive layout using CSS Grid and Flexbox. Used semantic HTML5 for accessibility and SEO. Built interactive components (cart, menu filtering, smooth scroll navigation) in vanilla JavaScript with no dependencies.",
    challenges:
      "Achieving visual polish and smooth interactions without a component library required writing reusable CSS patterns from scratch. Ensuring cross-browser consistency without a CSS reset framework required careful testing.",
    results:
      "Fully responsive, accessible UI with clean visual hierarchy. Fast load time with zero JavaScript framework overhead. Live deployed on GitHub Pages.",
    learnings:
      "Building without frameworks forces you to understand what frameworks actually do. Every abstraction has a cost — knowing the platform makes you a better engineer regardless of what stack you use.",
    tech: ["HTML5", "CSS3", "JavaScript", "CSS Grid", "Flexbox", "Responsive Design", "Accessibility"],
    primaryTech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/rupeshsah86/Hamro_Food.git",
    demo: "https://rupeshsah86.github.io/Hamro_Food/",
    accentColor: "#f59e0b",
    image: "/images/projects/hamro-food.png",
  },
];

export const experiences: Experience[] = [
  {
    role: "B.Tech Computer Science & Engineering",
    company: "Sri Eshwar College of Engineering",
    period: "2024 – Present",
    type: "education",
    bullets: [
      "Maintaining strong academic performance across core CS subjects: DSA, OOP, DBMS, Operating Systems, and Computer Networks",
      "Architected and shipped 5+ full-stack and ML projects applying real-world engineering principles beyond coursework requirements",
      "Solved 100+ algorithmic problems on LeetCode, CodeChef, and HackerRank with consistent focus on time/space complexity analysis",
      "Actively building toward a full-stack engineering career with deep focus on system design, scalable architecture, and production-grade development",
    ],
  },
  {
    role: "Smart Campus Service Request System",
    company: "Academic Project · Ongoing",
    period: "2024 – Present",
    type: "project",
    bullets: [
      "Architected end-to-end service request platform handling multi-role workflows for students, staff, and administrators",
      "Designed normalized relational schema from scratch, modeling the full request lifecycle with complete audit trail",
      "Implemented role-based access control and state machine workflow engine ensuring only valid state transitions",
      "Applied backend architecture principles: separation of concerns, RESTful API design, and data integrity constraints",
    ],
  },
  {
    role: "Return & Refund Management System",
    company: "Academic Project · 3rd Semester",
    period: "2024",
    type: "project",
    bullets: [
      "Modeled complex e-commerce return workflows as explicit state machines with full transition validation",
      "Implemented ACID-compliant transaction handling to ensure refund integrity under concurrent operations",
      "Designed append-only audit logging system capturing every state change with timestamp and actor",
      "Enforced role-based permissions separating customer, reviewer, and admin access boundaries",
    ],
  },
  {
    role: "Military Vehicle Predictive Maintenance (ML)",
    company: "Academic Project · 2nd Semester",
    period: "2024",
    type: "project",
    bullets: [
      "Built end-to-end supervised learning pipeline: data preprocessing, feature engineering, model training, and evaluation",
      "Applied SMOTE oversampling to address class imbalance in rare failure event data",
      "Selected optimal model based on precision/recall tradeoff analysis, prioritizing false negative minimization",
      "Demonstrated that feature engineering contributed more to model performance than algorithm selection",
    ],
  },
  {
    role: "Competitive Programming & DSA Practice",
    company: "LeetCode · CodeChef · HackerRank · SkillRack",
    period: "2024 – Present",
    type: "practice",
    bullets: [
      "Solved 100+ problems spanning arrays, strings, recursion, hashing, stacks, queues, and trees",
      "Consistent daily practice with explicit focus on time/space complexity analysis and optimal solution design",
      "Building the algorithmic foundation required for technical interviews at top engineering companies",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", primary: true },
      { name: "JavaScript", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Java", primary: false },
      { name: "C / C++", primary: false },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", primary: true },
      { name: "HTML5", primary: true },
      { name: "CSS3", primary: true },
      { name: "Responsive Design", primary: false },
      { name: "Accessibility", primary: false },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", primary: true },
      { name: "Express.js", primary: true },
      { name: "REST APIs", primary: true },
      { name: "Django", primary: false },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", primary: true },
      { name: "MongoDB", primary: true },
      { name: "Schema Design", primary: true },
      { name: "Query Optimization", primary: false },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures", primary: true },
      { name: "Algorithms", primary: true },
      { name: "OOP", primary: true },
      { name: "DBMS", primary: true },
      { name: "OS Concepts", primary: false },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", primary: true },
      { name: "Linux", primary: false },
      { name: "Postman", primary: false },
      { name: "VS Code", primary: false },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Rupesh demonstrates a level of systems thinking that I rarely see in students at this stage. His ability to model complex workflows and reason about edge cases is genuinely impressive.",
    name: "Prof. [Name]",
    title: "Department of CSE · Sri Eshwar College of Engineering",
    initials: "PR",
  },
  {
    quote:
      "What sets Rupesh apart is his ownership mindset. He doesn't just complete tasks — he thinks about the full problem space and delivers solutions that actually work under real constraints.",
    name: "[Mentor / Senior Developer]",
    title: "Software Engineer",
    initials: "ME",
  },
  {
    quote:
      "Strong fundamentals, consistent work ethic, and genuine intellectual curiosity. Rupesh is the kind of engineer teams want to hire early and grow with.",
    name: "[Peer / Project Collaborator]",
    title: "CS Student · Project Collaborator",
    initials: "PC",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "mysql-query-optimization",
    title: "How I optimized MySQL joins and cut query time significantly",
    excerpt:
      "A deep dive into index design, JOIN strategies, and the query execution plan — lessons from building the Blood Bank Management System.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["MySQL", "Performance", "Backend"],
    published: false,
  },
  {
    slug: "state-machines-backend",
    title: "State machines in backend systems: lessons from a refund workflow",
    excerpt:
      "Why modeling business logic as explicit state machines makes your backend more robust, auditable, and easier to reason about.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["Architecture", "Backend", "System Design"],
    published: false,
  },
  {
    slug: "why-i-practice-dsa",
    title: "Why I practice DSA daily even though I'm a web developer",
    excerpt:
      "It's not about memorizing algorithms. It's about building the mental models that make you a better engineer in every domain.",
    date: "Coming Soon",
    readTime: "5 min read",
    tags: ["DSA", "Career", "Engineering"],
    published: false,
  },
];
