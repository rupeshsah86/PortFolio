import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/files/Rupesh_Kumar_Sah_24CS201.pdf';
    link.download = 'Rupesh_Kumar_Sah_24CS201.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-orb" />
      <div className="hero-orb-2" />

      <div className="container">
        <div className="hero-content">
          {/* Left */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              3rd Year CS Student · Open to Internships
            </div>

            <h1 className="hero-title">
              Building software<br />
              that <span className="gradient-text">scales.</span>
            </h1>

            <p className="hero-subtitle">
              I'm Rupesh — a CS engineering student obsessed with clean architecture,
              full-stack systems, and shipping products that solve real problems.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={downloadResume}>
                Download Resume
              </button>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/rupeshsah86"
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/rupesh-shah-a480b8324/"
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://x.com/RupeshshahB86"
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="mailto:rupeshshah.86@gmail.com"
                className="hero-social-link"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hero-visual">
            <div className="profile-frame">
              <img
                src="/images/projects/profile.jpeg"
                alt="Rupesh Kumar"
                className="profile-img"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="profile-img-placeholder" style={{ display: 'none' }}>
                RK
              </div>

              <div className="tech-badge tech-badge-1">⚛ React</div>
              <div className="tech-badge tech-badge-2">🟦 TypeScript</div>
              <div className="tech-badge tech-badge-3">🟢 Node.js</div>
              <div className="tech-badge tech-badge-4">🐍 Python</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
