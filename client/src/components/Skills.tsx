import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: 'fas fa-code' },
        { name: 'C++', icon: 'fas fa-code' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'JavaScript (ES6+)', icon: 'fab fa-js' },
        { name: 'Responsive Design', icon: 'fas fa-mobile-alt' }
      ]
    },
    {
      title: 'Backend & Frameworks',
      skills: [
        { name: 'Django (Basic)', icon: 'fas fa-server' },
        { name: 'Node.js (Basic)', icon: 'fab fa-node-js' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-leaf' }
      ]
    },
    {
      title: 'Machine Learning (Basic)',
      skills: [
        { name: 'Supervised Learning', icon: 'fas fa-brain' },
        { name: 'Data Preprocessing', icon: 'fas fa-chart-bar' },
        { name: 'Model Evaluation', icon: 'fas fa-chart-line' }
      ]
    },
    {
      title: 'Core Computer Science',
      skills: [
        { name: 'Data Structures & Algorithms', icon: 'fas fa-sitemap' },
        { name: 'OOP', icon: 'fas fa-cube' },
        { name: 'DBMS', icon: 'fas fa-database' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'LeetCode', icon: 'fas fa-laptop-code' },
        { name: 'CodeChef', icon: 'fas fa-trophy' },
        { name: 'HackerRank', icon: 'fas fa-medal' },
        { name: 'SkillRack', icon: 'fas fa-graduation-cap' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    <i className={skill.icon}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;