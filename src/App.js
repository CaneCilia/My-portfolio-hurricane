import React, { useState, useEffect } from 'react';
import { ChevronUp, Heart, Mail } from 'lucide-react';
import { Github, Linkedin } from './components/BrandIcons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TimelineSection from './components/TimelineSection';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Contributions from './components/Contributions';
import Projects from './components/Projects';
import DevelopmentJourney from './components/DevelopmentJourney';
import ResearchPublications from './components/ResearchPublications';
import EventOrganizing from './components/EventOrganizing';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleTerminalToggle = () => {
    setIsTerminalOpen(prev => !prev);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      {/* Sticky Navigation Bar */}
      <Navbar onTerminalToggle={handleTerminalToggle} />

      {/* Main Content Layout */}
      <main className="main-content">
        <Hero />
        
        <About />
        
        <TimelineSection />
        
        <div className="skills-group-wrapper">
          <Skills />
          <SoftSkills />
        </div>

        <Contributions />
        
        <Projects />

        <div className="journey-group-wrapper">
          <DevelopmentJourney />
          <ResearchPublications />
          <EventOrganizing />
          <Certifications />
        </div>

        <Contact />
      </main>

      {/* Footer Component */}
      <footer className="footer glass">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-info">
              <a href="#home" className="footer-logo">
                KANISHKAR<span>.</span>
              </a>
              <p>Applying technical skills in software development and automation to solve real-world problems.</p>
            </div>
            
            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#timeline">Journey</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-socials">
              <h4>Social Links</h4>
              <div className="footer-social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="mailto:kanishkar@example.com" aria-label="Email"><Mail size={18} /></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              &copy; {currentYear} Kanishkar R. All rights reserved.
            </p>
            <p className="built-with">
              Built with <Heart size={12} className="heart-icon" /> using React & Vanilla CSS | Last Updated: July 2026
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CLI Terminal */}
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      {/* Back to Top Floating Trigger */}
      <button 
        className={`scroll-top-btn glass ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}

export default App;
