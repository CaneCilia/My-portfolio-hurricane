import React, { useState, useRef, useEffect, useLayoutEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, ArrowLeft, X } from 'lucide-react';
import { Github } from './BrandIcons';
import ProjectVisual from './ProjectVisuals';
import './Projects.css';

const categories = ['All', 'Agentic AI', 'Generative AI', 'Machine Learning', 'Computer Vision'];

const projectsData = [
  {
    id: 'nordo',
    title: 'AI Powered Flight Assistant for NORDO Aviation',
    category: 'Agentic AI',
    preview: 'workflow',
    year: '2025',
    role: 'System Design · AI Engineering',
    tagline: 'An agentic cockpit copilot for lost-communication scenarios.',
    desc:
      'An Agentic AI-powered cockpit assistant designed for NORDO (No Radio Communication) scenarios. The system assists pilots with emergency procedures, airport information, checklist retrieval, and contextual decision support using Retrieval-Augmented Generation (RAG).',
    technologies: ['Python', 'LangGraph', 'Gemini', 'RAG', 'FastAPI', 'Flutter', 'Firebase'],
    github: '#',
    live: '#',
    architecture:
      'Built using an Agentic AI workflow with LangGraph orchestration, Gemini LLM, Retrieval-Augmented Generation, and a Flutter dashboard communicating with backend APIs.',
    features: [
      'Voice-enabled AI flight assistant',
      'Context-aware RAG retrieval',
      'Emergency checklist guidance',
      'Real-time cockpit status monitoring',
      'Interactive pilot dashboard',
    ],
    challenges:
      'Delivering reliable contextual responses while maintaining low latency during emergency scenarios.',
    solution:
      'Designed an Agentic RAG pipeline with optimized retrieval and lightweight orchestration for fast and accurate AI responses.',
    process: [
      'Research',
      'System Design',
      'RAG Pipeline',
      'Agent Workflow',
      'Flutter Dashboard',
      'Backend Integration',
      'Testing',
    ],
  },

  {
    id: 'meeting-quality',
    title: 'Intelligent Meeting Feedback System & Quality Tracker',
    category: 'Generative AI',
    preview: 'analytics',
    year: '2025',
    role: 'Full-Stack Engineering',
    tagline: 'Turning meeting records into measurable communication quality.',
    desc:
      'An AI-powered platform that evaluates meetings, tracks participant engagement, and generates actionable feedback reports for improving communication quality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Microsoft Entra ID', 'Express'],
    github: '#',
    live: '#',
    architecture:
      'Full-stack application with Microsoft Entra ID authentication, Node.js backend, MongoDB storage, and React frontend.',
    features: [
      'Meeting quality analysis',
      'Attendance tracking',
      'Performance dashboards',
      'AI-generated feedback reports',
    ],
    challenges: 'Managing secure authentication while handling multiple meeting records efficiently.',
    solution:
      'Integrated Microsoft Entra ID authentication and optimized MongoDB queries for scalable performance.',
    process: ['Requirement Analysis', 'Database Design', 'Authentication', 'Dashboard Development', 'Testing'],
  },

  {
    id: 'predictive-maintenance',
    title: 'AI/ML Predictive Maintenance System for EVs & IC Engines',
    category: 'Machine Learning',
    preview: 'signal',
    year: '2024',
    role: 'ML Engineering',
    tagline: 'Reading sensor telemetry before it becomes a breakdown.',
    desc:
      'An AI-powered predictive maintenance system that analyzes vehicle sensor data to predict failures before breakdowns occur in electric and internal combustion vehicles.',
    technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Flask', 'Pandas'],
    github: 'https://github.com/CaneCilia/Ev-predictive-Maintenance-System-using-AIML',
    live: '#',
    architecture:
      'Machine learning models process vehicle sensor datasets and predict potential failures through a Flask-based API.',
    features: [
      'Predictive fault detection',
      'Vehicle health monitoring',
      'Maintenance recommendations',
      'Failure prediction dashboard',
    ],
    challenges: 'Obtaining balanced datasets and improving prediction accuracy.',
    solution: 'Applied preprocessing, feature engineering, and model tuning to improve prediction performance.',
    process: ['Dataset Collection', 'Data Cleaning', 'Model Training', 'Evaluation', 'Deployment'],
  },

  {
    id: 'copyright-chatbot',
    title: 'YouTube Copyright Analysis Chatbot',
    category: 'Generative AI',
    preview: 'terminal',
    year: '2024',
    role: 'AI Engineering',
    tagline: 'A conversational risk report for any video URL.',
    desc:
      'An AI chatbot that evaluates YouTube videos for copyright risks by analyzing metadata, content information, and copyright-related indicators.',
    technologies: ['Python', 'Streamlit', 'Gemini', 'YouTube API', 'NLP'],
    github: 'https://github.com/CaneCilia/yt-copyright-chatbot-predictor',
    live: '#',
    architecture:
      'Streamlit frontend integrated with YouTube APIs and AI models to generate copyright analysis reports.',
    features: [
      'Video copyright assessment',
      'AI-powered recommendations',
      'Metadata analysis',
      'Interactive chatbot',
    ],
    challenges: 'Combining API data with AI-generated recommendations accurately.',
    solution: 'Built a structured analysis pipeline combining API responses with LLM reasoning.',
    process: ['API Integration', 'NLP Processing', 'AI Analysis', 'User Interface'],
  },

  {
    id: 'image-captioning',
    title: 'Image Captioning using YOLOv5 & BiLSTM',
    category: 'Computer Vision',
    preview: 'vision',
    year: '2024',
    role: 'Deep Learning Research',
    tagline: 'Detection features translated into natural language.',
    desc:
      'A deep learning system combining YOLOv5 object detection with BiLSTM sequence generation to produce context-aware image captions.',
    technologies: ['YOLOv5', 'BiLSTM', 'PyTorch', 'Deep Learning', 'OpenCV'],
    github: '#',
    live: '#',
    architecture:
      'YOLOv5 extracts object features which are passed into a BiLSTM network for natural language caption generation.',
    features: [
      'Real-time object detection',
      'Automatic image captioning',
      'Context-aware sentence generation',
      'Deep learning pipeline',
    ],
    challenges: 'Generating meaningful captions from multiple detected objects.',
    solution:
      'Integrated object detection features with BiLSTM sequence modeling for improved contextual understanding.',
    process: ['Dataset Preparation', 'YOLO Training', 'Feature Extraction', 'BiLSTM Training', 'Evaluation'],
  },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reveal a node once, the first time it enters the viewport. */
const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return undefined;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, threshold]);

  return [ref, shown];
};

/* Small odometer for the section counter. */
const useCountUp = (target, active) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }
    let frame;
    let start;
    const from = 0;
    const duration = 700;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);

  return value;
};

/*
 * Editorial layout: rows alternate wide/narrow so the grid never reads as a
 * uniform set of tiles. A row left with a single panel spans the full width.
 */
const computeSpans = (count) => {
  const rhythm = [[4, 2], [2, 4]];
  const spans = [];
  let i = 0;
  let row = 0;
  while (i < count) {
    if (count - i === 1) {
      spans.push(6);
      break;
    }
    const [a, b] = rhythm[row % rhythm.length];
    spans.push(a, b);
    i += 2;
    row += 1;
  }
  return spans;
};

const SystemCard = ({ project, index, order, span, onOpen, registerRef }) => {
  const cardRef = useRef(null);
  const rafRef = useRef(0);
  const featured = span >= 4;

  const handleMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el || rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      /* Parallax capped at 6px, per the motion spec. */
      el.style.setProperty('--px', `${((x / rect.width) - 0.5) * 12}px`);
      el.style.setProperty('--py', `${((y / rect.height) - 0.5) * 8}px`);
    });
  }, []);

  const handleLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--px', '0px');
    el.style.setProperty('--py', '0px');
  }, []);

  useEffect(() => () => rafRef.current && cancelAnimationFrame(rafRef.current), []);

  const open = () => onOpen(project, cardRef.current);

  return (
    <article
      ref={(node) => {
        cardRef.current = node;
        registerRef(project.id, node);
      }}
      className={`system-card ${featured ? 'is-featured' : ''}`}
      style={{ '--span': span, '--i': order }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open case study: ${project.title}`}
    >
      <span className="card-sweep" aria-hidden="true" />
      <span className="card-corner tl" aria-hidden="true" />
      <span className="card-corner tr" aria-hidden="true" />
      <span className="card-corner br" aria-hidden="true" />
      <span className="card-corner bl" aria-hidden="true" />

      <div className="card-inner">
        <header className="card-head">
          <span className="system-index">SYSTEM {String(index + 1).padStart(2, '0')}</span>
          <span className="system-domain">{project.category}</span>
        </header>

        <div className="card-preview">
          <div className="card-preview-shift">
            <ProjectVisual variant={project.preview} />
          </div>
        </div>

        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-tagline">{project.tagline}</p>
          <p className="card-desc">{project.desc}</p>

          <ul className="card-stack">
            {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
            {project.technologies.length > (featured ? 6 : 4) && (
              <li className="stack-more">+{project.technologies.length - (featured ? 6 : 4)}</li>
            )}
          </ul>
        </div>

        <footer className="card-foot">
          <span className="open-case">
            OPEN CASE
            <span className="open-arrow" aria-hidden="true">→</span>
          </span>

          <span className="card-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.title} repository`}
            >
              <Github size={15} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={15} />
            </a>
          </span>
        </footer>
      </div>
    </article>
  );
};

/* Full-bleed case view that expands out of the panel that opened it. */
const CaseView = ({ project, index, originEl, onClose }) => {
  const panelRef = useRef(null);
  const [state, setState] = useState('enter');

  /* Shared element transition: map the panel back onto the card, then release. */
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (prefersReducedMotion() || !originEl) {
      setState('open');
      return;
    }
    const from = originEl.getBoundingClientRect();
    const to = panel.getBoundingClientRect();
    const scale = Math.max(from.width / to.width, 0.2);

    panel.style.transition = 'none';
    panel.style.transformOrigin = 'top left';
    panel.style.transform = `translate3d(${from.left - to.left}px, ${from.top - to.top}px, 0) scale(${scale})`;
    panel.style.opacity = '0.35';
    void panel.getBoundingClientRect();

    const id = requestAnimationFrame(() => {
      panel.style.transition = 'transform 560ms cubic-bezier(0.16, 1, 0.3, 1), opacity 320ms ease-out';
      panel.style.transform = 'translate3d(0, 0, 0) scale(1)';
      panel.style.opacity = '1';
      setState('open');
    });
    return () => cancelAnimationFrame(id);
  }, [originEl]);

  const close = useCallback(() => {
    const panel = panelRef.current;
    if (!panel || prefersReducedMotion() || !originEl) {
      onClose();
      return;
    }
    const from = originEl.getBoundingClientRect();
    const to = panel.getBoundingClientRect();
    const scale = Math.max(from.width / to.width, 0.2);
    setState('exit');
    panel.style.transition = 'transform 420ms cubic-bezier(0.4, 0, 0.2, 1), opacity 260ms ease-in 120ms';
    panel.style.transformOrigin = 'top left';
    panel.style.transform = `translate3d(${from.left - to.left}px, ${from.top - to.top}px, 0) scale(${scale})`;
    panel.style.opacity = '0';
    window.setTimeout(onClose, 400);
  }, [onClose, originEl]);

  /* Escape to leave, and hold the page still underneath. */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
    };
  }, [close]);

  /* Portalled to the body so the fixed navbar can never sit above it. */
  return createPortal(
    <div className={`case-overlay ${state}`} onClick={close} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="case-panel" ref={panelRef} onClick={(e) => e.stopPropagation()}>
        <div className="case-scroll">
          <div className="case-topbar">
            <button className="case-back" onClick={close}>
              <ArrowLeft size={15} />
              <span>BACK TO SYSTEMS</span>
            </button>
            <button className="case-close" onClick={close} aria-label="Close case study">
              <X size={18} />
            </button>
          </div>

          <div className="case-content">
            <div className="case-hero" style={{ '--s': 0 }}>
              <span className="case-index">SYSTEM {String(index + 1).padStart(2, '0')} · {project.category}</span>
              <h2 className="case-title">{project.title}</h2>
              <p className="case-tagline">{project.tagline}</p>
            </div>

            <div className="case-visual" style={{ '--s': 1 }}>
              <ProjectVisual variant={project.preview} />
            </div>

            <dl className="case-meta" style={{ '--s': 2 }}>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Domain</dt>
                <dd>{project.category}</dd>
              </div>
            </dl>

            <section className="case-block" style={{ '--s': 3 }}>
              <h4>Overview</h4>
              <p className="case-lead">{project.desc}</p>
            </section>

            <div className="case-split" style={{ '--s': 4 }}>
              <section className="case-block">
                <h4>Architecture</h4>
                <p>{project.architecture}</p>
              </section>

              <section className="case-block">
                <h4>Stack</h4>
                <ul className="case-stack">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="case-block" style={{ '--s': 5 }}>
              <h4>Key Capabilities</h4>
              <ul className="case-features">
                {project.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </section>

            <section className="case-block case-problem" style={{ '--s': 6 }}>
              <div>
                <h4>Challenge</h4>
                <p>{project.challenges}</p>
              </div>
              <div>
                <h4>Solution</h4>
                <p>{project.solution}</p>
              </div>
            </section>

            <section className="case-block" style={{ '--s': 7 }}>
              <h4>Process</h4>
              <ol className="case-process">
                {project.process.map((stepName, i) => (
                  <li key={stepName}>
                    <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="step-label">{stepName}</span>
                  </li>
                ))}
              </ol>
            </section>

            <footer className="case-actions" style={{ '--s': 8 }}>
              <a className="case-btn" href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={15} /> REPOSITORY <span className="open-arrow">→</span>
              </a>
              <a className="case-btn case-btn-solid" href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} /> LIVE DEMO <span className="open-arrow">→</span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [active, setActive] = useState(null);
  const [sectionRef, revealed] = useReveal(0.08);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const filterRefs = useRef({});
  const cardRefs = useRef({});
  const filterBarRef = useRef(null);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? projectsData : projectsData.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const spans = useMemo(() => computeSpans(filtered.length), [filtered.length]);
  const count = useCountUp(filtered.length, revealed);

  /* Sliding pill indicator — width interpolates between filters. */
  useLayoutEffect(() => {
    const sync = () => {
      const el = filterRefs.current[activeCategory];
      if (!el) return;
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [activeCategory]);

  const registerRef = useCallback((id, node) => {
    cardRefs.current[id] = node;
  }, []);

  const openCase = useCallback((project, el) => {
    setActive({ project, el });
  }, []);

  const activeIndex = active ? projectsData.findIndex((p) => p.id === active.project.id) : -1;

  return (
    <section id="projects" className={`projects-section ${revealed ? 'is-revealed' : ''}`} ref={sectionRef}>
      <div className="projects-header">
        <span className="projects-eyebrow">SELECTED WORK</span>
        <h2 className="projects-title">Systems I have built</h2>
        <p className="projects-subtitle">
          Applied AI systems — from agentic orchestration and retrieval pipelines to predictive models and
          computer vision. Open a case to read the architecture behind it.
        </p>
        <div className="projects-count">
          <span className="count-num">{String(count).padStart(2, '0')}</span>
          <span className="count-label">SYSTEMS INDEXED</span>
        </div>
      </div>

      <div className="projects-filters" ref={filterBarRef} role="tablist" aria-label="Project categories">
        <span
          className={`filter-indicator ${indicator.ready ? 'ready' : ''}`}
          style={{ transform: `translateX(${indicator.left}px)`, width: `${indicator.width}px` }}
          aria-hidden="true"
        />
        {categories.map((cat) => (
          <button
            key={cat}
            ref={(node) => {
              filterRefs.current[cat] = node;
            }}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid" key={activeCategory}>
        {filtered.map((project, idx) => (
          <SystemCard
            key={project.id}
            project={project}
            index={projectsData.findIndex((p) => p.id === project.id)}
            order={idx}
            span={spans[idx]}
            onOpen={openCase}
            registerRef={registerRef}
          />
        ))}
      </div>

      {active && (
        <CaseView
          project={active.project}
          index={activeIndex}
          originEl={active.el || cardRefs.current[active.project.id]}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
};

export default Projects;
