import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  initials: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    initials: 'SC',
    title: 'Smart Campus Service Request System',
    description: 'Architected a full-stack platform to digitize and streamline campus service operations for students and staff.',
    problem: 'Campus service requests were handled manually via paper forms, causing delays, lost requests, and zero visibility into resolution status.',
    solution: 'Designed a structured workflow engine with role-based access — students submit requests, admins assign and track them, and all parties get real-time status updates. Built the database schema from scratch with normalized tables for requests, users, and assignments.',
    tech: ['Node.js', 'MySQL', 'Backend Architecture', 'Database Design', 'REST API'],
    github: 'https://github.com/rupeshsah86',
    demo: '#',
  },
  {
    id: 2,
    initials: 'RR',
    title: 'Return & Refund Management System',
    description: 'Built a business-logic-heavy system handling return requests, approval workflows, and refund status tracking.',
    problem: 'E-commerce return processes involve complex state machines — request submission, validation, approval, rejection, and refund issuance — all of which needed to be modeled accurately.',
    solution: 'Implemented a multi-stage approval workflow with state transitions, audit logging, and role-based permissions. Applied ACID-compliant transaction handling to ensure refund integrity across concurrent operations.',
    tech: ['DBMS', 'MySQL', 'Workflow Design', 'Backend Logic', 'Transaction Management'],
    github: 'https://github.com/rupeshsah86/ReturnRefundManager.git',
    demo: '#',
  },
  {
    id: 3,
    initials: 'BB',
    title: 'Blood Bank Management System',
    description: 'Developed a donor and inventory management system with efficient blood availability tracking.',
    problem: 'Blood banks struggle with real-time inventory visibility, donor record management, and matching blood types to urgent requests.',
    solution: 'Designed a normalized relational schema supporting donor registration, blood type inventory, and request matching. Optimized queries for fast availability lookups across blood type and location filters.',
    tech: ['MySQL', 'Database Design', 'Query Optimization', 'DBMS'],
    github: 'https://github.com/rupeshsah86/blood-bank-system.git',
    demo: '#',
  },
  {
    id: 4,
    initials: 'ML',
    title: 'Military Vehicle Predictive Maintenance (ML)',
    description: 'Applied supervised machine learning to predict vehicle maintenance needs and reduce unplanned downtime.',
    problem: 'Reactive maintenance of military vehicles leads to costly breakdowns and operational disruptions. The goal was to shift from reactive to predictive maintenance using historical sensor data.',
    solution: 'Preprocessed and engineered features from vehicle sensor datasets, trained and evaluated multiple classification models, and selected the best-performing model based on precision and recall. Reduced false negatives to minimize missed maintenance events.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Data Preprocessing'],
    github: 'https://github.com/rupeshsah86/predictivemaintainancemilitarryvehicle-Aiml.git',
    demo: '#',
  },
  {
    id: 5,
    initials: 'HF',
    title: 'Hamro Food — Online Food Ordering UI',
    description: 'Designed and built a fully responsive food ordering frontend with clean UI and intuitive navigation.',
    problem: 'Needed to build a production-quality frontend from scratch with zero frameworks — pure HTML, CSS, and JavaScript — while maintaining mobile responsiveness and accessibility.',
    solution: 'Implemented a mobile-first responsive layout with CSS Grid and Flexbox, smooth scroll navigation, and interactive menu components. Achieved clean visual hierarchy and fast load times with no external dependencies.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'],
    github: 'https://github.com/rupeshsah86/Hamro_Food.git',
    demo: 'https://rupeshsah86.github.io/Hamro_Food/',
  },
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of projects where I owned the architecture, implementation, and delivery.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card"
              onClick={() => setSelected(p)}
            >
              <div className="project-thumb">
                <span className="project-thumb-text">{p.initials}</span>
                <div className="project-thumb-overlay">
                  View Details →
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.slice(0, 4).map((t, i) => (
                    <span key={i} className="badge">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={p.github}
                    className="project-link-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github" /> GitHub
                  </a>
                  {p.demo !== '#' && (
                    <a
                      href={p.demo}
                      className="project-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt" /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selected.title}</h3>
              <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <div className="modal-section-label">Problem</div>
                <p>{selected.problem}</p>
              </div>
              <div className="modal-section">
                <div className="modal-section-label">Solution & Approach</div>
                <p>{selected.solution}</p>
              </div>
              <div className="modal-section">
                <div className="modal-section-label">Tech Stack</div>
                <div className="modal-tech">
                  {selected.tech.map((t, i) => (
                    <span key={i} className="badge">{t}</span>
                  ))}
                </div>
              </div>
              <div className="modal-links">
                <a href={selected.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" /> View Code
                </a>
                {selected.demo !== '#' && (
                  <a href={selected.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
