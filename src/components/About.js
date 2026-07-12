import React from 'react';
import { User, Heart, Target, Compass, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
  const details = [
    {
      icon: <Heart className="about-icon text-red" size={24} />,
      title: "My Passion",
      text: "Building high-performance automated solutions, crafting intuitive user experiences, and bridging the gap between design and functionality in software developer systems."
    },
    {
      icon: <Compass className="about-icon text-blue" size={24} />,
      title: "Interests",
      text: "Full-stack development architectures, autonomous AI agents, machine learning workflows, and exploring real-world hardware/software integrations."
    },
    {
      icon: <Target className="about-icon text-purple" size={24} />,
      title: "Career Goals",
      text: "To thrive in a progressive and innovative environment, apply advanced software skills to solve industrial challenges, and drive technological scaling and value."
    },
    {
      icon: <Sparkles className="about-icon text-yellow" size={24} />,
      title: "Current Focus",
      text: "Deepening concepts of clean software architectures, state management patterns in modern frameworks, cloud deployments, and prompt-engineered workflows."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know my professional identity, core values, and what drives me as a developer.
        </p>
      </div>

      <div className="about-container">
        <div className="about-main glass card animate-slide-up">
          <div className="about-main-header">
            <User size={30} className="about-title-icon" />
            <h3>Who I Am</h3>
          </div>
          <p className="about-desc">
            I am a motivated, detail-oriented software developer specializing in building clean, scalable, and responsive web applications. I enjoy crafting robust backend systems and elegant frontend interfaces, using modern web technologies to translate requirements into fully working products.
          </p>
          <p className="about-desc">
            With a strong foundation in core programming, cloud architectures, and a growing interest in artificial intelligence and automation, I aim to deliver high-quality code. I'm highly collaborative, adaptable, and constantly learning new stacks to tackle engineering complexities.
          </p>
          
          <div className="profile-highlights">
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Developer Programs</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5+</span>
              <span className="highlight-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="about-grid">
          {details.map((item, idx) => (
            <div key={idx} className="about-card glass card animate-slide-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="about-card-header">
                {item.icon}
                <h4>{item.title}</h4>
              </div>
              <p className="about-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
