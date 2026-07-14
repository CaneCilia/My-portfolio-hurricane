import React, { useState } from 'react';
import { ExternalLink, Filter, Cpu, Code2, Layers, CheckCircle2, AlertTriangle, Eye, X } from 'lucide-react';
import { Github } from './BrandIcons';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

const categories = ["All","Agentic AI","Generative AI","Machine Learning","Computer Vision"];

const projectsData = [
  {
    title: "AI Powered Flight Assistant for NORDO Aviation",
    category: "AI / Automation",
    bannerText: "Agentic Aviation AI",
    bgGradient: "linear-gradient(135deg, #0F172A, #2563EB)",
    desc: "An Agentic AI-powered cockpit assistant designed for NORDO (No Radio Communication) scenarios. The system assists pilots with emergency procedures, airport information, checklist retrieval, and contextual decision support using Retrieval-Augmented Generation (RAG).",
    technologies: [
      "Python",
      "LangGraph",
      "Gemini",
      "RAG",
      "FastAPI",
      "Flutter",
      "Firebase"
    ],
    github: "#",
    live: "#",
    architecture:
      "Built using an Agentic AI workflow with LangGraph orchestration, Gemini LLM, Retrieval-Augmented Generation, and a Flutter dashboard communicating with backend APIs.",
    features: [
      "Voice-enabled AI flight assistant",
      "Context-aware RAG retrieval",
      "Emergency checklist guidance",
      "Real-time cockpit status monitoring",
      "Interactive pilot dashboard"
    ],
    challenges:
      "Delivering reliable contextual responses while maintaining low latency during emergency scenarios.",
    solution:
      "Designed an Agentic RAG pipeline with optimized retrieval and lightweight orchestration for fast and accurate AI responses.",
    process:
      "Research → System Design → RAG Pipeline → Agent Workflow → Flutter Dashboard → Backend Integration → Testing"
  },

  {
    title: "Intelligent Meeting Feedback System & Quality Tracker",
    category: "AI / Automation",
    bannerText: "AI Meeting Analytics",
    bgGradient: "linear-gradient(135deg)",
    desc: "An AI-powered platform that evaluates meetings, tracks participant engagement, and generates actionable feedback reports for improving communication quality.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Microsoft Entra ID",
      "Express"
    ],
    github: "#",
    live: "#",
    architecture:
      "Full-stack application with Microsoft Entra ID authentication, Node.js backend, MongoDB storage, and React frontend.",
    features: [
      "Meeting quality analysis",
      "Attendance tracking",
      "Performance dashboards",
      "AI-generated feedback reports"
    ],
    challenges:
      "Managing secure authentication while handling multiple meeting records efficiently.",
    solution:
      "Integrated Microsoft Entra ID authentication and optimized MongoDB queries for scalable performance.",
    process:
      "Requirement Analysis → Database Design → Authentication → Dashboard Development → Testing"
  },

  {
    title: "AI/ML Predictive Maintenance System for EVs & IC Engines",
    category: "AI / Automation",
    bannerText: "Predictive Maintenance",
    bgGradient: "linear-gradient(135deg)",
    desc: "An AI-powered predictive maintenance system that analyzes vehicle sensor data to predict failures before breakdowns occur in electric and internal combustion vehicles.",
    technologies: [
      "Python",
      "TensorFlow",
      "Machine Learning",
      "Flask",
      "Pandas"
    ],
    github: "https://github.com/CaneCilia/Ev-predictive-Maintenance-System-using-AIML",
    live: "#",
    architecture:
      "Machine learning models process vehicle sensor datasets and predict potential failures through a Flask-based API.",
    features: [
      "Predictive fault detection",
      "Vehicle health monitoring",
      "Maintenance recommendations",
      "Failure prediction dashboard"
    ],
    challenges:
      "Obtaining balanced datasets and improving prediction accuracy.",
    solution:
      "Applied preprocessing, feature engineering, and model tuning to improve prediction performance.",
    process:
      "Dataset Collection → Data Cleaning → Model Training → Evaluation → Deployment"
  },

  {
    title: "YouTube Copyright Analysis Chatbot",
    category: "AI / Automation",
    bannerText: "AI Copyright Assistant",
    bgGradient: "linear-gradient(135deg)",
    desc: "An AI chatbot that evaluates YouTube videos for copyright risks by analyzing metadata, content information, and copyright-related indicators.",
    technologies: [
      "Python",
      "Streamlit",
      "Gemini",
      "YouTube API",
      "NLP"
    ],
    github: "https://github.com/CaneCilia/yt-copyright-chatbot-predictor",
    live: "#",
    architecture:
      "Streamlit frontend integrated with YouTube APIs and AI models to generate copyright analysis reports.",
    features: [
      "Video copyright assessment",
      "AI-powered recommendations",
      "Metadata analysis",
      "Interactive chatbot"
    ],
    challenges:
      "Combining API data with AI-generated recommendations accurately.",
    solution:
      "Built a structured analysis pipeline combining API responses with LLM reasoning.",
    process:
      "API Integration → NLP Processing → AI Analysis → User Interface"
  },

  {
    title: "Image Captioning using YOLOv5 & BiLSTM",
    category: "AI / Automation",
    bannerText: "Computer Vision",
    bgGradient: "linear-gradient(135degs)",
    desc: "A deep learning system combining YOLOv5 object detection with BiLSTM sequence generation to produce context-aware image captions.",
    technologies: [
      "YOLOv5",
      "BiLSTM",
      "PyTorch",
      "Deep Learning",
      "OpenCV"
    ],
    github: "#",
    live: "#",
    architecture:
      "YOLOv5 extracts object features which are passed into a BiLSTM network for natural language caption generation.",
    features: [
      "Real-time object detection",
      "Automatic image captioning",
      "Context-aware sentence generation",
      "Deep learning pipeline"
    ],
    challenges:
      "Generating meaningful captions from multiple detected objects.",
    solution:
      "Integrated object detection features with BiLSTM sequence modeling for improved contextual understanding.",
    process:
      "Dataset Preparation → YOLO Training → Feature Extraction → BiLSTM Training → Evaluation"
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
