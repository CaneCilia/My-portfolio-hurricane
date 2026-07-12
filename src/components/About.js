import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Heart, Compass, Target, Code2 } from 'lucide-react';
import './About.css';

const SLIDES = [
  {
    icon: <User className="slide-icon text-dark" size={28} />,
    title: "Who I Am",
    statement: "I am a detail-oriented software developer focused on building clean, high-performance web systems and intelligent developer tooling.",
    subtext: "Specialized in full-stack engineering, API performance scaling, and cloud architectures.",
    badge: "Identity"
  },
  {
    icon: <Heart className="slide-icon text-dark" size={28} />,
    title: "My Passion",
    statement: "I bridge the gap between design and functionality, creating automated systems that save development time and eliminate manual overhead.",
    subtext: "Passionate about streamlining developer workflows and designing highly intuitive interface architectures.",
    badge: "Motivation"
  },
  {
    icon: <Compass className="slide-icon text-dark" size={28} />,
    title: "Interests & Stack",
    statement: "I enjoy building with React, Python, FastAPI, Docker, and exploring the capabilities of agentic workflows and LLM engines.",
    subtext: "Constantly researching microservice design patterns and model-orchestration architectures.",
    badge: "Technology"
  },
  {
    icon: <Code2 className="slide-icon text-dark" size={28} />,
    title: "Development Ethics",
    statement: "I advocate for clean architectures, comprehensive unit testing, and robust documentation. I value code maintainability above short-cuts.",
    subtext: "Committed to engineering standards, agile processes, and continuous integration workflows.",
    badge: "Process"
  },
  {
    icon: <Target className="slide-icon text-dark" size={28} />,
    title: "Career Goals",
    statement: "To contribute to innovative teams scaling software systems, solving complex industrial logic, and creating real-world value.",
    subtext: "Seeking to apply technical skills in software scaling and automation to drive team success.",
    badge: "Vision"
  }
];

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          My professional identity, engineering philosophy, and what drives me as a software developer.
        </p>
      </div>

      <div className="about-slider-wrapper">
        
        {/* Left Arrow */}
        <button 
          className="slider-nav-btn prev" 
          onClick={prevSlide}
          aria-label="Previous Statement"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Slides Track */}
        <div className="about-slides-container">
          <div 
            className="about-slides-track" 
            style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
          >
            {SLIDES.map((slide, idx) => (
              <div 
                key={idx} 
                className={`about-slide-panel ${idx === activeSlide ? 'active' : ''}`}
              >
                <div className="slide-inner">
                  <span className="slide-badge">{slide.badge}</span>
                  <div className="slide-header">
                    {slide.icon}
                    <h3>{slide.title}</h3>
                  </div>
                  <blockquote className="slide-statement">
                    "{slide.statement}"
                  </blockquote>
                  <p className="slide-subtext">
                    {slide.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          className="slider-nav-btn next" 
          onClick={nextSlide}
          aria-label="Next Statement"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slider Indicators */}
      <div className="about-slider-indicators">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`indicator-dot ${idx === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Profile Metrics Summary */}
      <div className="about-metrics-footer">
        <div className="metric-box">
          <span className="metric-number">10+</span>
          <span className="metric-label">Projects Completed</span>
        </div>
        <div className="metric-box-divider" />
        <div className="metric-box">
          <span className="metric-number">3+</span>
          <span className="metric-label">Developer Programs</span>
        </div>
        <div className="metric-box-divider" />
        <div className="metric-box">
          <span className="metric-number">5+</span>
          <span className="metric-label">Certifications</span>
        </div>
      </div>
      
    </section>
  );
};

export default About;
