import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', primary: true },
      { name: 'JavaScript', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'Java', primary: false },
      { name: 'C / C++', primary: false },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', primary: true },
      { name: 'HTML5', primary: true },
      { name: 'CSS3', primary: true },
      { name: 'Responsive Design', primary: false },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', primary: true },
      { name: 'Express.js', primary: true },
      { name: 'Django', primary: false },
      { name: 'REST APIs', primary: false },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', primary: true },
      { name: 'MongoDB', primary: true },
      { name: 'Database Design', primary: false },
      { name: 'Query Optimization', primary: false },
    ],
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures', primary: true },
      { name: 'Algorithms', primary: true },
      { name: 'OOP', primary: true },
      { name: 'DBMS', primary: false },
      { name: 'OS Concepts', primary: false },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', primary: true },
      { name: 'VS Code', primary: false },
      { name: 'Linux', primary: false },
      { name: 'Postman', primary: false },
    ],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="skills section">
    <div className="container">
      <div className="skills-header">
        <span className="section-label">Skills & Expertise</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-subtitle">
          A curated set of tools and technologies I use to build reliable, scalable software.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div className="skill-category" key={i}>
            <div className="skill-category-title">{cat.title}</div>
            <div className="skill-tags">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className={`skill-tag ${skill.primary ? 'primary' : ''}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="skills-note">
        "I pick up new tools fast. The stack is secondary to the thinking."
      </p>
    </div>
  </section>
);

export default Skills;
