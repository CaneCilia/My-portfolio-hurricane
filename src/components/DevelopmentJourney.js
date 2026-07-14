import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import './DevelopmentJourney.css';

const DevelopmentJourney = () => {
  const images = [
    '/images/tech1.jpg',
    '/images/tech2.jpg',
    '/images/tech3.jpg',
    '/images/tech1.jpg',
    '/images/tech2.jpg',
    '/images/tech3.jpg'
  ];

  const handleExploreClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
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
  };

  return (
    <div className="journey-container">
      {/* Auto-scrolling background image track */}
      <div className="journey-scroll-track">
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Developer landscape ${idx + 1}`} 
            className="journey-scroll-img" 
          />
        ))}
      </div>
      
      {/* Faded overlay mask */}
      <div className="journey-glass-overlay"></div>

      {/* Central Interactive Content */}
      <div className="journey-explore-content animate-slide-up">
        <div className="explore-badge">
          <Compass size={14} className="explore-badge-icon" />
          <span>Interactive Showcase</span>
        </div>
        
        <h3>Explore Architectural Prototypes</h3>
        
        <p>
          Step into a curated index of system architectures, live cloud-hosted APIs, and fully responsive frontend environments built to resolve production bottlenecks.
        </p>
        
        <button 
          onClick={handleExploreClick}
          className="explore-btn-glowing"
          aria-label="Explore Projects"
        >
          Explore Projects <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default DevelopmentJourney;
