import React, { useEffect, useState } from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

const Hero = () => {
  const [typedName, setTypedName] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const [phase, setPhase] = useState('typing-name');

  useEffect(() => {
    const nameStr = "Kanishkar R";
    const titleStr = "Software Developer & AI Engineer";
    
    let nameIdx = 0;
    let titleIdx = 0;
    
    const nameInterval = setInterval(() => {
      if (nameIdx < nameStr.length) {
        setTypedName(nameStr.substring(0, nameIdx + 1));
        nameIdx++;
      } else {
        clearInterval(nameInterval);
        setPhase('typing-title');
        
        const titleInterval = setInterval(() => {
          if (titleIdx < titleStr.length) {
            setTypedTitle(titleStr.substring(0, titleIdx + 1));
            titleIdx++;
          } else {
            clearInterval(titleInterval);
            setPhase('done');
          }
        }, 50);
      }
    }, 80);

    return () => {
      clearInterval(nameInterval);
    };
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    alert("Preparing resume download... Click 'Print' or save as PDF.");
    window.print();
  };

  return (
    <section id="home" className="hero-section centered-hero">
      <div className="hero-text-content centered">
        <div className="greeting-badge stagger-in-1">
          <span className="pulse-dot"></span>
          Open to Opportunities
        </div>

        <h1 className="hero-name stagger-in-2">
          {typedName}
          {phase === 'typing-name' && <span className="typing-cursor">_</span>}
        </h1>

        <h2 className="hero-title stagger-in-3">
          {typedTitle}
          {phase === 'typing-title' && <span className="typing-cursor">_</span>}
        </h2>

        <p className="hero-intro stagger-in-4">
          Building clean, high-performance web systems and developer-focused utilities. Specialized in full-stack engineering, workflow automations, and building intelligent services using Gemini AI.
        </p>

        <div className="hero-actions stagger-in-5">
          <a href="#contact" onClick={handleScrollToContact} className="hero-btn-primary">
            Get In Touch <ArrowRight size={16} />
          </a>
          <button onClick={handleDownloadResume} className="hero-btn-secondary">
            Download Resume <Download size={16} />
          </button>
        </div>

        <div className="hero-socials stagger-in-6">
          <a href="https://github.com/CaneCilia" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub">
            <Github size={16} /> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kanishkar42/" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">
            <Linkedin size={16} /> <span>LinkedIn</span>
          </a>
          <a href="mailto:kanishkar@example.com" className="social-pill" aria-label="Email">
            <Mail size={16} /> <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
