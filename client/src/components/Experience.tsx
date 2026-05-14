import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'B.Tech Computer Science & Engineering',
    company: 'Sri Eshwar College of Engineering · 2024 – Present',
    date: '2024 – Present',
    achievements: [
      'Maintaining strong academic performance across core CS subjects: DSA, OOP, DBMS, OS, and Computer Networks',
      'Architected and shipped 5+ full-stack and ML projects applying real-world engineering principles',
      'Solved 100+ algorithmic problems on LeetCode, CodeChef, and HackerRank — focusing on time/space complexity',
      'Actively building toward a full-stack engineering career with a focus on system design and scalable architecture',
    ],
  },
  {
    role: 'Smart Campus Service Request System',
    company: 'Academic Project · Ongoing',
    date: '2024 – Present',
    achievements: [
      'Architected end-to-end service request platform handling multi-role workflows for students, staff, and admins',
      'Designed normalized relational schema from scratch, modeling request lifecycle with full audit trail',
      'Implemented structured approval workflows reducing manual coordination overhead by design',
      'Applied backend architecture principles: separation of concerns, RESTful API design, and data integrity constraints',
    ],
  },
  {
    role: 'Return & Refund Management System',
    company: 'Academic Project · 3rd Semester',
    date: '2024',
    achievements: [
      'Modeled complex business logic for multi-stage return workflows with state machine transitions',
      'Implemented ACID-compliant transaction handling to ensure refund integrity under concurrent operations',
      'Designed role-based access control separating customer, reviewer, and admin permissions',
      'Strengthened understanding of real-world backend processes, data consistency, and approval pipelines',
    ],
  },
  {
    role: 'Military Vehicle Predictive Maintenance (ML)',
    company: 'Academic Project · 2nd Semester',
    date: '2024',
    achievements: [
      'Applied supervised learning pipeline: data preprocessing, feature engineering, model training, and evaluation',
      'Compared multiple classification algorithms and selected optimal model based on precision/recall tradeoffs',
      'Reduced false negatives in maintenance predictions to minimize risk of unplanned vehicle downtime',
      'Gained hands-on experience with Pandas, Scikit-learn, and data-driven decision-making workflows',
    ],
  },
  {
    role: 'Competitive Programming & DSA Practice',
    company: 'LeetCode · CodeChef · HackerRank · SkillRack',
    date: '2024 – Present',
    achievements: [
      'Solved 100+ problems spanning arrays, strings, recursion, hashing, stacks, queues, and trees',
      'Focused on writing optimal solutions with clear time and space complexity analysis',
      'Consistent daily practice building the algorithmic foundation for technical interviews',
    ],
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="experience section">
    <div className="container">
      <div className="experience-header">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Academic & Project Journey</h2>
        <p className="section-subtitle">
          Every project was an opportunity to think like an engineer, not just a student.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-top">
                <span className="timeline-role">{exp.role}</span>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <div className="timeline-company">{exp.company}</div>
              <ul className="timeline-achievements">
                {exp.achievements.map((a, j) => (
                  <li key={j}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
