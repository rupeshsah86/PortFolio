import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: '🎓 B.Tech Computer Science & Engineering',
      company: 'Sri Eshwar College Of Engineering',
      period: '2024 – Present | 4th Semester (2nd Year)',
      achievements: [
        'Strong foundation in Data Structures & Algorithms, OOP, DBMS',
        'Actively working on real-world academic and personal projects',
        'Focused on becoming a Full-Stack Developer with problem-solving skills',
        'Maintaining excellent academic performance in core CS subjects'
      ]
    },
    {
      title: '🔄 Smart Campus Service Request System',
      company: 'Ongoing Academic Project | 3rd Semester',
      period: '2024 – Present',
      achievements: [
        'Developing system to digitize and streamline campus service requests',
        'Enables students and staff to submit, track, and manage service requests',
        'Designed structured workflows for request submission, assignment, status tracking',
        'Focused on improving operational efficiency, transparency, and response time',
        'Applying concepts of backend logic, database management, and system architecture'
      ]
    },
    {
      title: '✅ Return & Refund Management System',
      company: 'Academic Project | 3rd Semester',
      period: '2024',
      achievements: [
        'Designed and developed a Return & Refund Management System',
        'Implemented return request handling, approval workflow, and refund status tracking',
        'Applied real-world business logic and DBMS concepts',
        'Strengthened understanding of backend processes and data management'
      ]
    },
    {
      title: '✅ Blood Bank Management System',
      company: 'Academic Project | 3rd Semester',
      period: '2024',
      achievements: [
        'Developed Blood Bank Management System for managing donors and blood inventory',
        'Implemented donor registration and blood availability modules',
        'Applied database design and query concepts',
        'Ensured efficient blood inventory tracking and management'
      ]
    },
    {
      title: '✅ Military Vehicle Maintenance System (ML)',
      company: 'Academic Project | 2nd Semester',
      period: '2024',
      achievements: [
        'Built Machine Learning-based system to support vehicle maintenance planning',
        'Applied ML concepts to improve vehicle readiness and maintenance efficiency',
        'Gained exposure to data-driven decision-making processes',
        'Implemented predictive maintenance algorithms'
      ]
    },
    {
      title: '✅ Hamro Food – Online Food Ordering Website',
      company: 'Academic Project | 1st Semester',
      period: '2024',
      achievements: [
        'Developed responsive online food ordering website using HTML, CSS, and JavaScript',
        'Focused on UI/UX, mobile responsiveness, and frontend best practices',
        'Implemented clean design with intuitive navigation',
        'Enhanced frontend development skills and web design fundamentals'
      ]
    },
    {
      title: '💻 Coding & Problem-Solving Journey',
      company: 'LeetCode, CodeChef, HackerRank, SkillRack',
      period: '2024 – Present (Ongoing)',
      achievements: [
        'Solved 100+ coding problems covering arrays, strings, recursion, hashing, stacks, queues',
        'Practicing consistently across multiple competitive programming platforms',
        'Focused on improving logic building, time complexity analysis, and coding efficiency',
        'Maintaining regular problem-solving habits alongside academic projects'
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">💼 Academic & Project Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="timeline-date">{exp.period}</span>
                <ul>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;