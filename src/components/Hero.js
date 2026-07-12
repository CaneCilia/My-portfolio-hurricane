import React, { useEffect, useRef, useState } from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

const FLOATING_SKILLS = [
  { text: "React.js", accent: "blue" },
  { text: "Python", accent: "purple" },
  { text: "Automation", accent: "blue" },
  { text: "AI / LLMs", accent: "purple" },
  { text: "FastAPI", accent: "blue" },
  { text: "AWS", accent: "purple" },
  { text: "Docker", accent: "blue" },
  { text: "LangChain", accent: "purple" },
  { text: "Node.js", accent: "blue" },
  { text: "CI/CD", accent: "purple" }
];

const Hero = () => {
  const sandboxRef = useRef(null);
  const containerRef = useRef(null);
  const [pills, setPills] = useState([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

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

  useEffect(() => {
    const sandbox = sandboxRef.current;
    if (!sandbox) return;

    // Approximate width and height
    const width = 450;
    const height = 480;

    // Initialize pill positions and states
    const initialPills = FLOATING_SKILLS.map((skill, idx) => {
      const angle = (idx / FLOATING_SKILLS.length) * Math.PI * 2;
      const radius = 130;
      return {
        ...skill,
        x: (width / 2) + Math.cos(angle) * radius - 45,
        y: (height / 2) + Math.sin(angle) * radius - 18,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        width: 100, // estimated width of DOM pill
        height: 36  // estimated height of DOM pill
      };
    });

    setPills(initialPills);

    const handleMouseMove = (e) => {
      if (!sandboxRef.current) return;
      const sandboxRect = sandboxRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - sandboxRect.left,
        y: e.clientY - sandboxRect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Listen on window for smooth tracking across boundaries
    window.addEventListener('mousemove', handleMouseMove);
    sandbox.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId;
    let localPills = [...initialPills];

    const updatePhysics = () => {
      if (!sandboxRef.current) return;
      const sandboxRect = sandboxRef.current.getBoundingClientRect();
      const currentWidth = sandboxRect.width || 450;
      const currentHeight = sandboxRect.height || 480;
      const mouse = mouseRef.current;

      localPills = localPills.map(pill => {
        let vx = pill.vx;
        let vy = pill.vy;

        // 1. Constant minor ambient drift force
        vx += (Math.random() - 0.5) * 0.04;
        vy += (Math.random() - 0.5) * 0.04;

        // 2. Friction damping
        vx *= 0.98;
        vy *= 0.98;

        // 3. Mouse gravitational repulsion
        const dx = (pill.x + pill.width / 2) - mouse.x;
        const dy = (pill.y + pill.height / 2) - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          // Apply a gentle repulsion force
          vx += (dx / dist) * force * 0.45;
          vy += (dy / dist) * force * 0.45;
        }

        // 4. Cap max speed
        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed > 2.5) {
          vx = (vx / speed) * 2.5;
          vy = (vy / speed) * 2.5;
        }

        // 5. Update positions
        let x = pill.x + vx;
        let y = pill.y + vy;

        // 6. Wall collision with boundary checks
        const padding = 15;
        if (x < padding) {
          x = padding;
          vx = -vx * 0.65;
        } else if (x > currentWidth - pill.width - padding) {
          x = currentWidth - pill.width - padding;
          vx = -vx * 0.65;
        }

        if (y < padding + 40) { // accounting for header
          y = padding + 40;
          vy = -vy * 0.65;
        } else if (y > currentHeight - pill.height - padding) {
          y = currentHeight - pill.height - padding;
          vy = -vy * 0.65;
        }

        return {
          ...pill,
          x,
          y,
          vx,
          vy
        };
      });

      setPills([...localPills]);
      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sandbox) sandbox.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={containerRef}>
      <div className="hero-grid-container">
        
        {/* Left Side: Professional Profile Intro */}
        <div className="hero-text-content">
          <div className="greeting-badge stagger-in-1">
            <span className="pulse-dot"></span>
            Open to Opportunities
          </div>

          <h1 className="hero-name stagger-in-2">
            Kanishkar R
          </h1>

          <h2 className="hero-title stagger-in-3">
            Software Developer <span className="title-accent">&</span> AI/Automation Builder
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub">
              <Github size={16} /> <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">
              <Linkedin size={16} /> <span>LinkedIn</span>
            </a>
            <a href="mailto:kanishkar@example.com" className="social-pill" aria-label="Email">
              <Mail size={16} /> <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Sandbox Area */}
        <div className="hero-visual-content">
          <div className="antigravity-sandbox" ref={sandboxRef}>
            <div className="sandbox-header">
              <span className="sandbox-dot red"></span>
              <span className="sandbox-dot yellow"></span>
              <span className="sandbox-dot green"></span>
              <span className="sandbox-title">antigravity_simulation.sh</span>
            </div>
            
            <div className="sandbox-instruction">Move cursor here to interact</div>
            
            {pills.map((pill, idx) => (
              <div
                key={idx}
                className={`physics-pill accent-${pill.accent}`}
                style={{
                  transform: `translate3d(${pill.x}px, ${pill.y}px, 0)`
                }}
              >
                <span className="pill-dot"></span>
                {pill.text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
