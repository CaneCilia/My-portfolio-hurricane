import React, { useState, useEffect } from 'react';
import { ChevronUp, Heart, Mail } from 'lucide-react';
import { Github, Linkedin } from './components/BrandIcons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
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
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#contact' ? 'contact' : 'portfolio';
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('portfolio');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateToSection = (id) => {
    if (id === 'contact') {
      window.location.hash = '#contact';
      setCurrentPage('contact');
      window.scrollTo(0, 0);
    } else {
      window.location.hash = `#${id}`;
      setCurrentPage('portfolio');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleTerminalToggle = () => {
    setIsTerminalOpen(prev => !prev);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      {/* Sticky Navigation Bar */}
      <Navbar 
        onTerminalToggle={handleTerminalToggle} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Content Layout */}
      <main className="main-content">
        {currentPage === 'contact' ? (
          <Contact />
        ) : (
          <>
            <Hero />
            
            <About />
            
            <Education />
            <Internships />
            
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
          </>
        )}
      </main>

      {/* Footer Component */}
      <footer className="footer glass">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-info">
              <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); navigateToSection('home'); }}>
                KANISHKAR<span>.</span>
              </a>
              <p>Applying technical skills in software development and automation to solve real-world problems.</p>
            </div>
            
            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('about'); }}>About</a></li>
                <li><a href="#education" onClick={(e) => { e.preventDefault(); navigateToSection('education'); }}>Education</a></li>
                <li><a href="#internships" onClick={(e) => { e.preventDefault(); navigateToSection('internships'); }}>Internships</a></li>
                <li><a href="#skills" onClick={(e) => { e.preventDefault(); navigateToSection('skills'); }}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); navigateToSection('projects'); }}>Projects</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}>Contact</a></li>
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
