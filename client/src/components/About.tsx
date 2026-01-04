import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">👋 About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I am a Computer Science Engineering student currently in my 4th semester (2nd year), with a strong interest in software development and problem-solving. I began my academic journey in 2024 and have been consistently building my skills through hands-on projects and regular coding practice.
            </p>
            <p>
              I have worked on multiple academic and real-world projects, including a Smart Campus Service Request System, Return & Refund Management System, Blood Bank Management System, Military Vehicle Maintenance System (Machine Learning), and a frontend web project "Hamro Food". These projects have helped me gain practical experience in system design, backend logic, database management, and basic machine learning concepts.
            </p>
            <p>
              Alongside project development, I actively practice Data Structures and Algorithms on platforms like LeetCode, CodeChef, HackerRank, and SkillRack, which has strengthened my logical thinking and coding efficiency. I enjoy learning new technologies and applying theoretical concepts to solve real-world problems.
            </p>
            <p>
              I am currently focused on improving my full-stack development skills, deepening my understanding of core computer science subjects, and preparing for internship opportunities where I can learn, contribute, and grow as a software developer.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-graduation-cap"></i>
                <span>4th Semester Student</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-project-diagram"></i>
                <span>5+ Academic Projects</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-code"></i>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;