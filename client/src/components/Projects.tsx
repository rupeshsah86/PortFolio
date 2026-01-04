import React, { useState, useEffect } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  solution: string;
  tech: string[];
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    // Use fallback data directly
    setProjects([
      {
        id: 1,
        title: 'Smart Campus Service Request System',
        description: 'Developing a Smart Campus Service Request System to digitize and streamline campus service requests',
        solution: 'Enables students and staff to submit, track, and manage service requests such as maintenance, IT, and facilities with structured workflows.',
        tech: ['Backend Logic', 'Database Management', 'System Architecture'],
        github: 'https://github.com/rupeshsah86',
        demo: 'https://demo.example.com'
      },
      {
        id: 2,
        title: 'Return & Refund Management System',
        description: 'Designed and developed a Return & Refund Management System',
        solution: 'Implemented return request handling, approval workflow, and refund status tracking with real-world business logic.',
        tech: ['DBMS', 'Backend Logic', 'Workflow Management'],
        github: 'https://github.com/rupeshsah86/ReturnRefundManager.git',
        demo: 'https://demo.example.com'
      },
      {
        id: 3,
        title: 'Blood Bank Management System',
        description: 'Developed Blood Bank Management System for managing donors and blood inventory',
        solution: 'Implemented donor registration and blood availability modules with efficient inventory tracking and database design.',
        tech: ['MySQL', 'Database Design', 'DBMS'],
        github: 'https://github.com/rupeshsah86/blood-bank-system.git',
        demo: 'https://demo.example.com'
      },
      {
        id: 4,
        title: 'Military Vehicle Maintenance System (ML)',
        description: 'Built Machine Learning-based system to support vehicle maintenance planning',
        solution: 'Applied ML concepts to improve vehicle readiness and maintenance efficiency with data-driven decision-making.',
        tech: ['Python', 'Machine Learning', 'Data Analysis'],
        github: 'https://github.com/rupeshsah86/predictivemaintainancemilitarryvehicle-Aiml.git',
        demo: 'https://demo.example.com.'
      },
      {
        id: 5,
        title: 'Hamro Food – Online Food Ordering Website',
        description: 'Developed responsive online food ordering website using HTML, CSS, and JavaScript',
        solution: 'Focused on UI/UX, mobile responsiveness, and frontend best practices with clean design and intuitive navigation.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/rupeshsah86/Hamro_Food.git',
        demo: 'https://rupeshsah86.github.io/Hamro_Food/'
      }
    ]);
    setLoading(false);
  };

  const getProjectIcon = (title: string) => {
    if (title.includes('Smart Campus')) return 'fas fa-building';
    if (title.includes('Return & Refund')) return 'fas fa-undo';
    if (title.includes('Blood Bank')) return 'fas fa-heartbeat';
    if (title.includes('Military Vehicle')) return 'fas fa-cogs';
    if (title.includes('Hamro Food')) return 'fas fa-utensils';
    return 'fas fa-code';
  };

  if (loading) {
    return (
      <section id="projects" className="projects section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <i className={getProjectIcon(project.title)}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-problem">{project.description}</p>
                <p className="project-solution">{project.solution}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;