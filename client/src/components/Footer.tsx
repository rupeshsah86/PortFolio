import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <span className="footer-logo">RK.</span>
            <span className="footer-copy">
              © {new Date().getFullYear()} Rupesh Kumar · Designed & built with care
            </span>
            <div className="footer-socials">
              <a href="https://github.com/rupeshsah86" className="footer-social" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/rupesh-shah-a480b8324/" className="footer-social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://x.com/RupeshshahB86" className="footer-social" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up" />
        </button>
      )}
    </>
  );
};

export default Footer;
