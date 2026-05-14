import React from 'react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { number: '5', suffix: '+', label: 'Projects Shipped' },
    { number: '100', suffix: '+', label: 'Problems Solved' },
    { number: '3', suffix: 'rd', label: 'Year CS Student' },
  ];

  const philosophy = [
    { icon: '⚡', text: 'Performance is a feature, not an afterthought' },
    { icon: '🧱', text: 'Build for maintainability first, optimize second' },
    { icon: '🔍', text: 'Understand the problem deeply before writing a line' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number">
                  {s.number}<span>{s.suffix}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Engineer by mindset,<br />developer by craft.</h2>

            <p>
              I'm Rupesh — a 3rd-year Computer Science student who thinks in systems and ships in code.
              I don't just write features; I think about <strong>architecture, tradeoffs, and the humans
              who'll use what I build</strong>. My obsession is the intersection of great engineering
              and great product thinking.
            </p>
            <p>
              Over the past two years I've architected full-stack applications, applied machine learning
              to real-world maintenance problems, and built database-driven systems from schema design
              to production logic. I practice DSA consistently across LeetCode, CodeChef, and HackerRank
              because <strong>strong fundamentals compound</strong>.
            </p>
            <p>
              I'm currently deepening my expertise in full-stack development and distributed systems,
              and actively looking for internship opportunities where I can contribute meaningfully,
              learn from senior engineers, and grow fast.
            </p>

            <div className="philosophy-grid">
              {philosophy.map((p, i) => (
                <div className="philosophy-card" key={i}>
                  <span className="philosophy-icon">{p.icon}</span>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
