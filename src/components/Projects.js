import React, { useState } from 'react';
import { ExternalLink, Filter, Cpu, Code2, Layers, CheckCircle2, AlertTriangle, Eye, X } from 'lucide-react';
import { Github } from './BrandIcons';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI / Automation', 'Web Dev', 'Mobile'];

  const projectsData = [
    {
      title: "Aether Automation Hub",
      category: "AI / Automation",
      bannerText: "AI Orchestration Platform",
      bgGradient: "linear-gradient(135deg, #1e3a8a, #581c87)",
      desc: "An agentic orchestration dashboard for executing scheduled cloud backups, log reporting, and retrieval-augmented document analysis.",
      technologies: ["React", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      architecture: "React frontend communicating via WebSockets with a FastAPI microservice backend. Background workers run via Celery queues monitored by Redis, with document embeddings stored in a pgvector database.",
      features: [
        "Dynamic workflow builder using visual nodes",
        "Real-time task executor monitoring through WebSockets",
        "Vector-based document ingestion for custom AI context retrieval",
        "Automated cron backup configurations"
      ],
      challenges: "Encountered high RAM costs and CPU spikes during vector document chunking operations.",
      solution: "Implemented memory-efficient streaming buffers that process text fragments sequentially in background processes, reducing active memory footfall by 65%.",
      process: "Conducted requirement mapping -> Designed database structures -> Wrote FastAPI endpoints -> Integrated LLM chains -> Connected React state models -> Polish & deploy."
    },
    {
      title: "Letter Craft Document Builder",
      category: "Web Dev",
      bannerText: "Cloud Letterhead Designer",
      bgGradient: "linear-gradient(135deg, #1e1b4b, #047857)",
      desc: "A professional letterhead builder supporting custom templates, automated cloudsync, and version control layers.",
      technologies: ["React", "Vanilla CSS", "Firebase", "Realtime DB"],
      github: "https://github.com",
      live: "https://example.com",
      architecture: "A Client-side Single Page Application utilizing React state management, direct authentication integrations with Firebase, and live websocket syncing with Firebase Realtime Database.",
      features: [
        "Interactive canvas layout builder with custom drag sizing",
        "Version control log history with single-click rolling restore",
        "Firebase credentials auth verification flow",
        "Custom PDF layout conversion"
      ],
      challenges: "Managing page boundary calculations in a WYSIWYG canvas for multi-page documents.",
      solution: "Coded a custom React calculation hook that computes layout bounding boxes dynamically, enforcing automatic page-break insertions.",
      process: "Defined page properties -> Programmed the canvas renderer -> Coupled Firebase DB triggers -> Engineered custom CSS modals -> Automated testing."
    },
    {
      title: "Swift Delivery App",
      category: "Mobile",
      bannerText: "Realtime Delivery App",
      bgGradient: "linear-gradient(135deg, #701a75, #0369a1)",
      desc: "A cross-platform mobile app offering real-time driver tracking, automated billing, and notification streams.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
      architecture: "React Native mobile client with a load-balanced Node.js API layer. Real-time location streams coordinate over Socket.io, backed by geospatial indexing queries in MongoDB.",
      features: [
        "Live Google Map driver tracking coordinates",
        "Automatic push notifications for delivery states",
        "In-app secure payment gateway mockups",
        "Driver route optimizations using Dijkstra's algorithm"
      ],
      challenges: "High battery usage during background location polling on driver mobile devices.",
      solution: "Engineered distance-based adaptive location polling that slows queries down when the driver is stationary, reducing battery drain by 45%.",
      process: "Wireframed navigation -> Integrated mapping APIs -> Established WebSocket links -> Implemented background tracking -> Final UI tuning."
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="glow-orb glow-orb-blue" style={{ right: '10%', bottom: '20%' }} />

      <div className="section-header">
        <h2 className="section-title">Explore My Work</h2>
        <p className="section-subtitle">
          A showcase of application builds, custom architectures, and development workflows.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filters glass">
        <Filter size={16} className="filter-icon" />
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((proj, idx) => (
          <div key={proj.title} className="project-card glass card animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="project-banner" style={{ background: proj.bgGradient }}>
              <span className="banner-badge">{proj.category}</span>
              <h4>{proj.bannerText}</h4>
            </div>

            <div className="project-info">
              <h3>{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="project-tech-list">
                {proj.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="proj-tech-badge">{tech}</span>
                ))}
                {proj.technologies.length > 4 && <span className="proj-tech-badge">+{proj.technologies.length - 4}</span>}
              </div>

              <div className="project-actions">
                <button className="view-details-btn glass" onClick={() => setSelectedProject(proj)}>
                  <Eye size={16} /> Details
                </button>
                <div className="external-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="link-icon-btn glass" title="GitHub Code">
                    <Github size={16} />
                  </a>
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="link-icon-btn glass" title="Live Demo">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <div className="modal-banner" style={{ background: selectedProject.bgGradient }}>
              <span className="banner-badge">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.desc}</p>

              {/* Technologies */}
              <div className="modal-section-info">
                <h5><Code2 size={16} /> Tech Stack:</h5>
                <div className="modal-techs">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div className="modal-section-info">
                <h5><Layers size={16} /> System Architecture:</h5>
                <p>{selectedProject.architecture}</p>
              </div>

              {/* Features */}
              <div className="modal-section-info">
                <h5><CheckCircle2 size={16} /> Key Features:</h5>
                <ul className="modal-list">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="modal-section-info challenge-box glass">
                <h5><AlertTriangle size={16} className="text-yellow" /> Challenge & Solution:</h5>
                <p><strong>The Challenge:</strong> {selectedProject.challenges}</p>
                <p className="solution-text"><strong>The Solution:</strong> {selectedProject.solution}</p>
              </div>

              {/* Process */}
              <div className="modal-section-info">
                <h5><Cpu size={16} /> My Development Process:</h5>
                <p>{selectedProject.process}</p>
              </div>

              <div className="modal-footer-actions">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="glow-btn glow-btn-secondary">
                  <Github size={16} /> Repository Code
                </a>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="glow-btn glow-btn-primary">
                  <ExternalLink size={16} /> Launch Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
