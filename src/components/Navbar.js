import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'internships', label: 'Internships' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ onTerminalToggle, currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage === 'contact') {
      setActiveSection('contact');
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active highlights
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        if (item.id === 'contact') continue;
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (id === 'contact') {
      window.location.hash = '#contact';
      setCurrentPage('contact');
      window.scrollTo(0, 0);
      setActiveSection('contact');
    } else {
      window.location.hash = `#${id}`;
      setCurrentPage('portfolio');
      
      // Scroll to the element after state updates and DOM renders
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // height of fixed navbar
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

  return (
    <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <span>&gt;_</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-links ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button 
            className="terminal-btn glass"
            onClick={onTerminalToggle}
            title="Open Interactive Terminal"
            aria-label="Open Terminal"
          >
            <TerminalIcon size={18} />
            <span className="terminal-btn-text">Terminal</span>
          </button>

          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''} glass`}>
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-item">
              <a
                href={`#${item.id}`}
                className={`mobile-links ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-item">
            <button 
              className="mobile-terminal-trigger"
              onClick={() => {
                setIsOpen(false);
                onTerminalToggle();
              }}
            >
              <TerminalIcon size={18} /> Open CLI Terminal
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
