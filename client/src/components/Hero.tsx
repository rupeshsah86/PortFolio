import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Senior Full-Stack Developer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/files/Rupesh_Kumar_Resume.pdf';
    link.download = 'Rupesh_Kumar_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Rupesh Kumar</span>
            </h1>
            <h2 className="hero-subtitle">Computer Science Engineering Student | Aspiring Full-Stack Developer</h2>
            <p className="hero-description">
              I build practical web applications and enjoy solving real-world problems through code. 
              Currently in my 2nd year, I focus on full-stack development, core CS fundamentals, and consistent problem-solving practice.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={downloadResume}>
                <i className="fas fa-download"></i> Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <img src="/images/profile.jpg" alt="Rupesh Kumar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;