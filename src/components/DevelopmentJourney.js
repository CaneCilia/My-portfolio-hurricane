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
          className="explore-btn-solid"
          aria-label="Explore Projects"
        >
          Explore Projects <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default DevelopmentJourney;
