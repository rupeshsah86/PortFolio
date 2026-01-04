import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span onClick={() => scrollToSection('home')}>RK</span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><span onClick={() => scrollToSection('home')}>Home</span></li>
          <li><span onClick={() => scrollToSection('about')}>About</span></li>
          <li><span onClick={() => scrollToSection('skills')}>Skills</span></li>
          <li><span onClick={() => scrollToSection('projects')}>Projects</span></li>
          <li><span onClick={() => scrollToSection('experience')}>Experience</span></li>
          <li><span onClick={() => scrollToSection('contact')}>Contact</span></li>
        </ul>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;