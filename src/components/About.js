import React, { useState, useEffect } from 'react';
import { User, Heart, Compass, Target, Code2 } from 'lucide-react';
import './About.css';

const SLIDES = [
  {
    icon: <User className="slide-icon text-dark" size={32} />,
    title: "Who I Am",
    statement:
      "I'm an Artificial Intelligence & Machine Learning engineering student who enjoys transforming ideas into practical software solutions that solve real-world problems.",
    subtext:
      "Driven by curiosity, continuous learning, and a passion for building impactful applications.",
    badge: "Identity"
  },
  {
    icon: <Heart className="slide-icon text-dark" size={32} />,
    title: "Why I Build",
    statement:
      "Technology gives us the freedom to create meaningful solutions. I enjoy designing systems that simplify complex problems and make life easier for the people who use them.",
    subtext:
      "Building isn't just writing code—it's creating something valuable from an idea.",
    badge: "Passion"
  },
  {
    icon: <Compass className="slide-icon text-dark" size={32} />,
    title: "Interests & Expertise",
    statement:
      "My primary interests are Artificial Intelligence, Agentic AI, LLMs, and intelligent automation. I enjoy building AI systems capable of reasoning, planning, and assisting users.",
    subtext:
      "Always exploring new AI frameworks, autonomous agents, and emerging technologies.",
    badge: "Technology"
  },
  {
    icon: <Code2 className="slide-icon text-dark" size={32} />,
    title: "How I Work",
    statement:
      "I believe every problem deserves thoughtful analysis before implementation. My approach is to understand the challenge from different perspectives and choose the most efficient, scalable solution.",
    subtext:
      "I value preparation, continuous improvement, and learning through experimentation.",
    badge: "Mindset"
  },
  {
    icon: <Target className="slide-icon text-dark" size={32} />,
    title: "Future Vision",
    statement:
      "My goal is to become a skilled AI and Software Engineer, contributing to intelligent products that create real-world impact while continuously growing as an engineer.",
    subtext:
      "Beyond software, I enjoy PC building and exploring computer hardware to better understand the technology behind modern computing.",
    badge: "Vision"
  }
];

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Auto-scroll effect: advances every 5 seconds unless active dragging is occurring
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveSlide((prev) => (prev + 1) % SLIDES.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handlePointerDown = (e) => {
    if (e.button !== 0) return; // only left click / single touch
    setTouchStart(e.clientX);
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - touchStart;
    setDragOffset(diff);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const diff = e.clientX - touchStart;
    const swipeThreshold = 60; // minimum pixels to count as swipe
    if (diff > swipeThreshold) {
      setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    } else if (diff < -swipeThreshold) {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }
    setDragOffset(0);
  };

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          My professional identity, engineering philosophy, and what drives me as a software developer.
        </p>
      </div>

      <div className="about-slider-wrapper no-card">
        {/* Slides Track with pointer event listeners */}
        <div 
          className="about-slides-container"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className="about-slides-track" 
            style={{ 
              transform: `translate3d(calc(-${activeSlide * 100}% + ${dragOffset}px), 0, 0)`,
              transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
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
