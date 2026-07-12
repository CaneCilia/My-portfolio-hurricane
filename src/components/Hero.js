import { Mail, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

const Hero = () => {
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
    // Generate a simple print-based fallback or mock document download
    // For a portfolio, standard practice is to window.print() or download a PDF.
    // We will create a beautiful print style inside our CSS so window.print() outputs a perfect single-page summary resume!
    // Or we will generate a mock text file showing his profile. Let's trigger a print dialog or alert.
    alert("Preparing resume download... Click 'Print' or save as PDF.");
    window.print();
  };

  return (
    <section id="home" className="hero-section">
      <div className="glow-orb" />
      <div className="glow-orb glow-orb-blue" style={{ right: '10%', top: '20%' }} />

      <div className="hero-content animate-slide-up">
        <div className="greeting-badge glass">
          <span className="pulse-dot"></span>
          Open to Opportunities
        </div>

        <h1 className="hero-name">
          Kanishkar R
        </h1>

        <h2 className="hero-title">
          <span>Software Developer</span>
          <span className="divider">&</span>
          <span className="gradient-text">AI & Automation Builder</span>
        </h2>

        <p className="hero-intro">
          To start my career in a progressive organization where I can apply my technical skills in software development, contribute to solving real-world problems, build innovative solutions in areas like AI and automation, and grow along with the success of the company.
        </p>

        <div className="hero-actions">
          <a href="#contact" onClick={handleScrollToContact} className="glow-btn glow-btn-primary">
            Get In Touch <ArrowRight size={18} />
          </a>
          <button onClick={handleDownloadResume} className="glow-btn glow-btn-secondary">
            Download Resume <Download size={18} />
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:kanishkar@example.com" className="social-icon-btn glass" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="hero-background-art animate-fade-in">
        <div className="grid-overlay"></div>
        <div className="glowing-mesh"></div>
      </div>
    </section>
  );
};

export default Hero;
