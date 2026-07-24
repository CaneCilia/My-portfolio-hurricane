import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  Braces, Coffee, Binary, Boxes, Smartphone, Blocks, Hexagon, Share2,
  CircuitBoard, Microchip, Brain, Bot, ScanSearch, Workflow, Database,
  Cloud, Globe, GitBranch, Rocket, Bug, X, CornerDownRight, MoveRight
} from 'lucide-react';
import './Skills.css';

/* ------------------------------------------------------------------ */
/*  System map data                                                    */
/* ------------------------------------------------------------------ */

const CATEGORIES = [
  { id: 'all', label: 'Full System' },
  { id: 'languages', label: 'Languages' },
  { id: 'ai', label: 'AI Systems' },
  { id: 'backend', label: 'Backend & Embedded' },
  { id: 'frontend', label: 'Interfaces' },
  { id: 'data', label: 'Data & Cloud' },
  { id: 'devops', label: 'Delivery' }
];

const CATEGORY_LABEL = CATEGORIES.reduce((acc, c) => {
  acc[c.id] = c.label;
  return acc;
}, {});

const NODES = [
  {
    id: 'python', name: 'Python', category: 'languages', icon: Braces, core: true,
    tag: 'System Core',
    desc: 'The language everything else plugs into — agent runtimes, model pipelines, service endpoints and the automation glue that holds them together.',
    uses: [
      'Agent runtimes and orchestration layers',
      'Model training, evaluation and inference pipelines',
      'Automation scripts, data cleaning and preprocessing'
    ],
    stack: ['FastAPI', 'Flask', 'Pandas', 'Streamlit'],
    projects: ['NORDO Flight Assistant', 'EV Predictive Maintenance', 'YouTube Copyright Chatbot'],
    exp: 'Primary language for AI agent development, machine learning models and automated scripting.'
  },
  {
    id: 'java', name: 'Java', category: 'languages', icon: Coffee,
    tag: 'Object-Oriented Base',
    desc: 'Where the object-oriented discipline comes from — class design, interfaces and lifecycle thinking that carries into every other stack I touch.',
    uses: [
      'Native Android application components',
      'Class hierarchies, interfaces and lifecycle handling',
      'Coursework implementations of core OOP patterns'
    ],
    stack: ['Android SDK', 'JDK', 'Gradle'],
    projects: ['Android coursework applications'],
    exp: 'Robust object-oriented foundation, applied through Android Studio components.'
  },
  {
    id: 'c', name: 'C', category: 'languages', icon: Binary,
    tag: 'Low Level',
    desc: 'The layer where nothing is hidden — manual memory, pointers and the compiler chain that makes embedded work possible.',
    uses: [
      'Memory handling and pointer-level data structures',
      'System calls and algorithm implementations',
      'Firmware routines for microcontroller targets'
    ],
    stack: ['GCC', 'AVR toolchain', 'Make'],
    projects: ['Embedded automation prototypes'],
    exp: 'Experienced in low-level memory handling, system calls and algorithms.'
  },
  {
    id: 'dsa', name: 'Data Structures', category: 'languages', icon: Boxes,
    tag: 'Design Discipline',
    desc: 'The reasoning layer behind every design decision — choosing the structure before writing the loop.',
    uses: [
      'Selecting structures against access and growth patterns',
      'Optimising lookup and traversal paths',
      'Applying inheritance and polymorphism in system design'
    ],
    stack: ['Trees', 'Graphs', 'Hash maps', 'Queues'],
    projects: ['Applied across all project architectures'],
    exp: 'Applied inheritance, polymorphism and optimised lookup algorithms in project designs.'
  },

  {
    id: 'android', name: 'Android Studio', category: 'frontend', icon: Smartphone,
    tag: 'Native Mobile',
    desc: 'Native application surfaces — custom layouts wired to real backends rather than mock screens.',
    uses: [
      'Custom UI layouts and navigation flows',
      'Database connectivity from device to service',
      'Shipping and debugging on physical hardware'
    ],
    stack: ['Java', 'XML layouts', 'Gradle', 'Firebase'],
    projects: ['Android coursework applications'],
    exp: 'Developed and shipped native applications with custom UI layouts and database connectivity.'
  },
  {
    id: 'flutter', name: 'Flutter', category: 'frontend', icon: Blocks,
    tag: 'Cross Platform',
    desc: 'One reactive codebase driving the dashboards that sit on top of my AI services.',
    uses: [
      'Cross-platform dashboards and control panels',
      'Reactive layouts with hot-reload iteration',
      'Consuming backend APIs from the client'
    ],
    stack: ['Dart', 'Firebase', 'REST clients'],
    projects: ['NORDO Flight Assistant'],
    exp: 'Cross-platform app development with hot-reloading and reactive layouts.'
  },
  {
    id: 'nodejs', name: 'Node.js', category: 'frontend', icon: Hexagon,
    tag: 'JS Runtime',
    desc: 'The asynchronous side of my backend work — event-driven services and the package ecosystem around them.',
    uses: [
      'Asynchronous server implementations',
      'Express routes and middleware chains',
      'Package and dependency management'
    ],
    stack: ['Express', 'npm', 'React'],
    projects: ['Meeting Feedback & Quality Tracker'],
    exp: 'Asynchronous server implementations and package dependency management.'
  },

  {
    id: 'rest', name: 'REST APIs', category: 'backend', icon: Share2,
    tag: 'Service Layer',
    desc: 'The contract between everything — clean endpoints that let models, databases and interfaces talk without knowing each other.',
    uses: [
      'Endpoint contracts and JSON response schemas',
      'Serving model inference behind HTTP',
      'Microservice pipelines between components'
    ],
    stack: ['FastAPI', 'Flask', 'Express', 'Postman'],
    projects: ['NORDO Flight Assistant', 'EV Predictive Maintenance', 'Meeting Feedback & Quality Tracker'],
    exp: 'Architected clean endpoint contracts, JSON response parsing and microservice pipelines.'
  },
  {
    id: 'embedded', name: 'Embedded Systems', category: 'backend', icon: CircuitBoard,
    tag: 'Hardware Layer',
    desc: 'Software with physical consequences — timing, interrupts and protocols where a wrong byte is a wrong movement.',
    uses: [
      'Microcontroller interface layouts',
      'Serial communication protocol mapping',
      'Compiler chains and flashing workflows'
    ],
    stack: ['C', 'UART / I2C', 'Sensors'],
    projects: ['Embedded automation prototypes'],
    exp: 'Microcontroller interface layouts, serial protocol mappings and compiler chains.'
  },
  {
    id: 'arduino', name: 'Arduino', category: 'backend', icon: Microchip,
    tag: 'Prototyping',
    desc: 'The fastest route from an idea to something that physically moves, reads or reacts.',
    uses: [
      'Automation prototypes with hardware interrupts',
      'Sensor calibration and signal conditioning',
      'Serial bridges into Python analysis scripts'
    ],
    stack: ['C', 'Sensor modules', 'Serial'],
    projects: ['Embedded automation prototypes'],
    exp: 'Prototyped multiple automation systems with hardware interrupts and sensor calibration.'
  },

  {
    id: 'ml', name: 'Machine Learning', category: 'ai', icon: Brain,
    tag: 'Modelling',
    desc: 'Turning raw signals into predictions — the full path from messy dataset to a model that holds up outside the notebook.',
    uses: [
      'Supervised and unsupervised training pipelines',
      'Feature engineering and dataset balancing',
      'Evaluation, tuning and inference deployment'
    ],
    stack: ['TensorFlow', 'PyTorch', 'Pandas', 'scikit-learn'],
    projects: ['EV Predictive Maintenance', 'Image Captioning with YOLOv5 & BiLSTM'],
    exp: 'Supervised and unsupervised model training pipelines, feature engineering and inference.'
  },
  {
    id: 'agents', name: 'AI Agents', category: 'ai', icon: Bot,
    tag: 'Orchestration',
    desc: 'Systems that decide rather than answer — stateful graphs where tools, memory and control flow are first-class design concerns.',
    uses: [
      'Stateful agent graphs and cognitive loops',
      'Tool calling with structured schemas',
      'Latency-aware orchestration for live use'
    ],
    stack: ['LangGraph', 'Gemini', 'Tool schemas'],
    projects: ['NORDO Flight Assistant'],
    exp: 'Stateful agentic behaviours built with tools, vector schemas and custom cognitive loop graphs.'
  },
  {
    id: 'rag', name: 'RAG Pipelines', category: 'ai', icon: ScanSearch,
    tag: 'Retrieval',
    desc: 'Grounding models in real documents — retrieval quality decides answer quality long before the model does.',
    uses: [
      'Semantic chunking and embedding strategies',
      'Vector indexing and similarity retrieval',
      'Context window pruning and reranking'
    ],
    stack: ['Vector stores', 'Embeddings', 'LangChain'],
    projects: ['NORDO Flight Assistant'],
    exp: 'Semantic chunking, vector indexing schemas and context window pruning frameworks.'
  },
  {
    id: 'langchain', name: 'LangChain', category: 'ai', icon: Workflow,
    tag: 'LLM Composition',
    desc: 'Composition for language models — prompts, memory and chains assembled into something repeatable.',
    uses: [
      'Multi-step prompt templates and chains',
      'Chat memory and conversation state',
      'Wiring retrieval into model calls'
    ],
    stack: ['LangGraph', 'Gemini', 'Python'],
    projects: ['NORDO Flight Assistant', 'YouTube Copyright Chatbot'],
    exp: 'Composed complex multi-step prompt templates, chat memories and LLM chains.'
  },

  {
    id: 'mongodb', name: 'MongoDB', category: 'data', icon: Database,
    tag: 'Persistence',
    desc: 'Flexible document storage for systems whose shape is still moving — with indexes added where the queries actually hurt.',
    uses: [
      'Document schema and index design',
      'Aggregation stages for reporting views',
      'Query optimisation and scaling strategy'
    ],
    stack: ['Compass', 'Express', 'Node.js'],
    projects: ['Meeting Feedback & Quality Tracker'],
    exp: 'Document schemas, index configuration, aggregation stages and scaling strategies.'
  },
  {
    id: 'aws', name: 'AWS', category: 'data', icon: Cloud,
    tag: 'Cloud',
    desc: 'Where the systems actually live — instances, buckets, access keys and the serverless pieces in between.',
    uses: [
      'Provisioning instances and storage buckets',
      'Access management keys and policies',
      'Serverless functions for background work'
    ],
    stack: ['EC2', 'S3', 'IAM', 'Lambda'],
    projects: ['Deployment infrastructure'],
    exp: 'Provisioning instances, storage buckets, cloud access management and serverless actions.'
  },
  {
    id: 'gcp', name: 'Google Cloud', category: 'data', icon: Globe,
    tag: 'Cloud',
    desc: 'The platform side of my AI work — managed machines and hosted model endpoints close to the data.',
    uses: [
      'Virtual machine provisioning',
      'Storage layers for datasets and artefacts',
      'Vertex AI engine deployments'
    ],
    stack: ['Vertex AI', 'Compute Engine', 'Cloud Storage'],
    projects: ['Model hosting experiments'],
    exp: 'GCP virtual machine provisioning, storage layers and Vertex AI engine deployments.'
  },

  {
    id: 'git', name: 'Git & GitHub', category: 'devops', icon: GitBranch,
    tag: 'Version Control',
    desc: 'History as a design tool — branches that isolate risk and commits that explain themselves later.',
    uses: [
      'Branch strategy and conflict resolution',
      'Pull request review loops',
      'Reading and repairing commit trees'
    ],
    stack: ['GitHub', 'CLI', 'Actions'],
    projects: ['Every repository in this portfolio'],
    exp: 'Complex branch management, conflict resolution, pull request loops and commit trees.'
  },
  {
    id: 'cicd', name: 'CI/CD', category: 'devops', icon: Rocket,
    tag: 'Automation',
    desc: 'The part that removes me from the deployment path — build, test and ship on every push.',
    uses: [
      'Workflow files and run steps',
      'Deployment dependencies and environments',
      'Status checks gating merges'
    ],
    stack: ['GitHub Actions', 'YAML', 'AWS'],
    projects: ['Repository automation workflows'],
    exp: 'Setting up action files, run steps, deployment dependencies and status tests.'
  },
  {
    id: 'qa', name: 'Debugging & QA', category: 'devops', icon: Bug,
    tag: 'Verification',
    desc: 'The habit that keeps everything else honest — reproduce it, isolate it, then prove the fix.',
    uses: [
      'Breakpoint and inspection workflows',
      'Memory profiling and performance tracing',
      'Regression runs before release'
    ],
    stack: ['DevTools', 'Profilers', 'Logging'],
    projects: ['Applied across all projects'],
    exp: 'Applying breakpoint systems, inspection tools, memory profiling and regression runs.'
  }
];

const EDGES = [
  ['python', 'dsa'], ['python', 'ml'], ['python', 'agents'], ['python', 'rag'],
  ['python', 'langchain'], ['python', 'rest'], ['python', 'mongodb'], ['python', 'qa'],
  ['python', 'arduino'], ['python', 'gcp'],
  ['java', 'dsa'], ['java', 'android'], ['c', 'dsa'], ['c', 'embedded'],
  ['android', 'flutter'], ['android', 'rest'], ['flutter', 'rest'], ['nodejs', 'rest'],
  ['nodejs', 'mongodb'], ['embedded', 'arduino'],
  ['ml', 'rag'], ['ml', 'gcp'], ['agents', 'langchain'], ['agents', 'rag'],
  ['agents', 'rest'], ['langchain', 'rag'],
  ['rest', 'mongodb'], ['rest', 'aws'], ['mongodb', 'aws'],
  ['git', 'cicd'], ['git', 'qa'], ['cicd', 'aws'], ['qa', 'rest']
];

const NODE_BY_ID = NODES.reduce((acc, n) => {
  acc[n.id] = n;
  return acc;
}, {});

const NEIGHBOURS = NODES.reduce((acc, n) => {
  acc[n.id] = [];
  return acc;
}, {});
EDGES.forEach(([a, b]) => {
  if (NEIGHBOURS[a] && NEIGHBOURS[b]) {
    NEIGHBOURS[a].push(b);
    NEIGHBOURS[b].push(a);
  }
});

/* ------------------------------------------------------------------ */
/*  Layout                                                             */
/* ------------------------------------------------------------------ */

const DESKTOP_WORLD = { w: 1180, h: 760 };
const SECTORS = { ai: -90, data: -30, devops: 30, frontend: 90, backend: 150, languages: 210 };
const RINGS = [240, 330];
const RADIUS_DESKTOP = 46;
const RADIUS_MOBILE = 30;

const MOBILE_TOP = 88;
const MOBILE_STEP = 80;
const MOBILE_PAD = 84;

const rad = (deg) => (deg * Math.PI) / 180;

/* Radial engineering map: core in the centre, one angular sector per domain. */
const radialLayout = (world) => {
  const cx = world.w / 2;
  const cy = world.h / 2;
  const map = { python: { x: cx, y: cy } };
  const grouped = {};

  NODES.forEach((n) => {
    if (n.core) return;
    if (!grouped[n.category]) grouped[n.category] = [];
    grouped[n.category].push(n);
  });

  Object.keys(grouped).forEach((cat) => {
    const members = grouped[cat];
    const base = SECTORS[cat] || 0;
    const spread = Math.min(42, 10 * members.length);
    members.forEach((n, i) => {
      const t = members.length > 1 ? i / (members.length - 1) - 0.5 : 0;
      const angle = rad(base + t * spread);
      const r = RINGS[i % 2];
      map[n.id] = {
        x: cx + Math.cos(angle) * r * 1.38,
        y: cy + Math.sin(angle) * r * 0.86
      };
    });
  });

  return map;
};

/* Focused domain: core in the centre, the domain distributed evenly around it. */
const ringLayout = (members, world) => {
  const cx = world.w / 2;
  const cy = world.h / 2;
  const map = { python: { x: cx, y: cy } };
  const count = members.length;
  const r = count <= 3 ? 275 : 315;
  members.forEach((n, i) => {
    const angle = rad(-90 + (360 / count) * i);
    map[n.id] = {
      x: cx + Math.cos(angle) * r * 1.28,
      y: cy + Math.sin(angle) * r * 0.9
    };
  });
  return map;
};

/* Mobile: a vertical spine with an organic horizontal drift. */
const spineLayout = (members, world) => {
  const map = { python: { x: world.w / 2, y: MOBILE_TOP } };
  members.forEach((n, i) => {
    map[n.id] = {
      x: world.w / 2 + Math.sin(i * 1.35 + 0.6) * (world.w / 2 - 68),
      y: MOBILE_TOP + (i + 1) * MOBILE_STEP
    };
  });
  return map;
};

const buildLayout = (activeCat, isMobile, containerW) => {
  const visible = NODES.filter(
    (n) => n.core || activeCat === 'all' || n.category === activeCat
  );
  const members = visible.filter((n) => !n.core);

  if (isMobile) {
    const world = {
      w: Math.max(292, Math.min(containerW, 460)),
      h: MOBILE_TOP + members.length * MOBILE_STEP + MOBILE_PAD
    };
    const positions = spineLayout(members, world);
    NODES.forEach((n) => {
      if (!positions[n.id]) positions[n.id] = { x: world.w / 2, y: world.h + 60 };
    });
    return { world, positions, visible };
  }

  const world = DESKTOP_WORLD;
  const base = radialLayout(world);
  const positions =
    activeCat === 'all' ? base : { ...base, ...ringLayout(members, world) };

  /* Nodes outside the active domain drift outward instead of vanishing. */
  const full = { ...positions };
  NODES.forEach((n) => {
    if (visible.indexOf(n) !== -1) return;
    const p = base[n.id];
    full[n.id] = {
      x: world.w / 2 + (p.x - world.w / 2) * 1.45,
      y: world.h / 2 + (p.y - world.h / 2) * 1.45
    };
  });

  return { world, positions: full, visible };
};

/* Quadratic curve between two discs, trimmed to the disc edge. */
const linkPath = (a, b, radius) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const from = { x: a.x + ux * radius, y: a.y + uy * radius };
  const to = { x: b.x - ux * radius, y: b.y - uy * radius };
  const bend = len * 0.1;
  const cx = (from.x + to.x) / 2 - uy * bend;
  const cy = (from.y + to.y) / 2 + ux * bend;
  return `M${from.x.toFixed(1)},${from.y.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${to.x.toFixed(1)},${to.y.toFixed(1)}`;
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const Skills = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [live, setLive] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [containerW, setContainerW] = useState(1180);
  const [cam, setCam] = useState({ x: 0, y: 0, z: 1 });
  const [dragging, setDragging] = useState(false);

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const viewportRef = useRef(null);
  const cursorRef = useRef(null);
  const nodeRefs = useRef({});
  const camRef = useRef(cam);
  const pointerRef = useRef({ pointers: new Map(), moved: 0, start: null, pinch: null });
  const cursorState = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0, inside: false, over: false });

  camRef.current = cam;

  const { world, positions, visible } = useMemo(
    () => buildLayout(activeCat, isMobile, containerW),
    [activeCat, isMobile, containerW]
  );

  const visibleIds = useMemo(() => new Set(visible.map((n) => n.id)), [visible]);
  const nodeRadius = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP;

  const fitScale = Math.min(1, containerW / world.w);
  const viewW = world.w * fitScale;
  const viewH = world.h * fitScale;

  /* ---------------- environment ---------------- */

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileMq = window.matchMedia('(max-width: 760px)');
    const sync = () => {
      setReduced(mq.matches);
      setIsMobile(mobileMq.matches);
    };
    sync();
    mq.addEventListener('change', sync);
    mobileMq.addEventListener('change', sync);
    window.addEventListener('resize', sync);
    return () => {
      mq.removeEventListener('change', sync);
      mobileMq.removeEventListener('change', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  useLayoutEffect(() => {
    const el = canvasRef.current;
    if (!el) return undefined;
    const measure = () => {
      const width = el.clientWidth;
      if (width > 0) setContainerW(width);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* Assemble the system when the section enters the viewport. */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setLive(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------------- camera ---------------- */

  const HOME_CAM = useMemo(() => ({ x: 0, y: 0, z: 1 }), []);

  useEffect(() => {
    /* Mobile keeps the map still — the page itself is the camera. */
    if (!selected || isMobile) {
      setCam(HOME_CAM);
      return;
    }
    const p = positions[selected];
    if (!p) return;
    const z = 1.26;
    const fx = viewW * 0.24;
    const fy = viewH * 0.5;
    setCam({ x: fx / fitScale - z * p.x, y: fy / fitScale - z * p.y, z });
  }, [selected, positions, isMobile, viewW, viewH, fitScale, HOME_CAM]);

  /* On mobile, bring the selected node above the detail sheet. */
  useEffect(() => {
    if (!selected || !isMobile) return;
    const el = nodeRefs.current[selected];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top + rect.height / 2 - window.innerHeight * 0.17;
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
  }, [selected, isMobile, reduced]);

  /* ---------------- interaction ---------------- */

  const selectNode = useCallback((id) => {
    setSelected((prev) => (prev === id ? null : id));
  }, []);

  const closePanel = useCallback(() => {
    setSelected(null);
    const el = nodeRefs.current[selected];
    if (el) el.focus({ preventScroll: true });
  }, [selected]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closePanel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, closePanel]);

  const handleCategory = (id) => {
    setSelected(null);
    setHovered(null);
    setActiveCat(id);
  };

  /* Arrow-key traversal across the map. */
  const handleNodeKeyDown = (e, index) => {
    const order = visible;
    if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].indexOf(e.key) === -1) return;
    e.preventDefault();
    const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1;
    const next = order[(index + step + order.length) % order.length];
    const el = nodeRefs.current[next.id];
    if (el) el.focus({ preventScroll: true });
  };

  /* Cursor ring + spotlight (fine pointers only). */
  useEffect(() => {
    if (isMobile || reduced) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    const vp = viewportRef.current;
    if (!vp) return undefined;

    const state = cursorState.current;

    const tick = () => {
      state.x += (state.tx - state.x) * 0.22;
      state.y += (state.ty - state.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${state.x.toFixed(1)}px, ${state.y.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }
      vp.style.setProperty('--sx', `${state.x.toFixed(1)}px`);
      vp.style.setProperty('--sy', `${state.y.toFixed(1)}px`);
      state.raf = state.inside ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e) => {
      const rect = vp.getBoundingClientRect();
      state.tx = e.clientX - rect.left;
      state.ty = e.clientY - rect.top;
    };
    const onEnter = (e) => {
      const rect = vp.getBoundingClientRect();
      state.tx = e.clientX - rect.left;
      state.ty = e.clientY - rect.top;
      state.x = state.tx;
      state.y = state.ty;
      state.inside = true;
      vp.classList.add('has-cursor');
      if (!state.raf) state.raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      state.inside = false;
      vp.classList.remove('has-cursor');
    };

    vp.addEventListener('pointerenter', onEnter);
    vp.addEventListener('pointermove', onMove);
    vp.addEventListener('pointerleave', onLeave);
    return () => {
      vp.removeEventListener('pointerenter', onEnter);
      vp.removeEventListener('pointermove', onMove);
      vp.removeEventListener('pointerleave', onLeave);
      if (state.raf) cancelAnimationFrame(state.raf);
      state.raf = 0;
      state.inside = false;
      vp.classList.remove('has-cursor');
    };
  }, [isMobile, reduced]);

  /* Drag to explore / pinch to zoom (touch surfaces). */
  const clampCam = useCallback(
    (next) => {
      if (selected) return next;
      const minX = Math.min(0, viewW / fitScale - world.w * next.z);
      const minY = Math.min(0, viewH / fitScale - world.h * next.z);
      return {
        x: Math.max(minX, Math.min(0, next.x)),
        y: Math.max(minY, Math.min(0, next.y)),
        z: next.z
      };
    },
    [selected, viewW, viewH, fitScale, world.w, world.h]
  );

  const onPointerDown = (e) => {
    if (!isMobile || e.pointerType === 'mouse') return;
    const store = pointerRef.current;
    store.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (store.pointers.size === 1) {
      store.moved = 0;
      store.start = { x: e.clientX, y: e.clientY, cam: camRef.current };
    } else if (store.pointers.size === 2) {
      const pts = Array.from(store.pointers.values());
      store.pinch = {
        dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1,
        cam: camRef.current
      };
      setDragging(true);
    }
  };

  const onPointerMove = (e) => {
    if (!isMobile) return;
    const store = pointerRef.current;
    if (!store.pointers.has(e.pointerId)) return;
    store.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (store.pointers.size >= 2 && store.pinch) {
      const pts = Array.from(store.pointers.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
      const ratio = dist / store.pinch.dist;
      const z = Math.max(0.6, Math.min(2.2, store.pinch.cam.z * ratio));
      setCam((prev) => clampCam({ ...prev, z }));
      return;
    }

    if (!store.start) return;
    const dx = e.clientX - store.start.x;
    const dy = e.clientY - store.start.y;
    store.moved = Math.max(store.moved, Math.hypot(dx, dy));
    if (store.moved < 6) return;
    setDragging(true);
    setCam(
      clampCam({
        x: store.start.cam.x + dx / fitScale,
        y: store.start.cam.y + dy / fitScale,
        z: store.start.cam.z
      })
    );
  };

  const onPointerUp = (e) => {
    const store = pointerRef.current;
    store.pointers.delete(e.pointerId);
    if (store.pointers.size < 2) store.pinch = null;
    if (store.pointers.size === 0) {
      store.start = null;
      setDragging(false);
      window.setTimeout(() => {
        store.moved = 0;
      }, 0);
    }
  };

  const guardClick = (id) => {
    if (pointerRef.current.moved > 6) return;
    selectNode(id);
  };

  /* ---------------- derived view state ---------------- */

  const focusId = selected || hovered;
  const focusSet = useMemo(() => {
    if (!focusId) return null;
    const set = new Set(NEIGHBOURS[focusId] || []);
    set.add(focusId);
    return set;
  }, [focusId]);

  const activeNode = selected ? NODE_BY_ID[selected] : null;
  const activeIndex = activeNode ? NODES.indexOf(activeNode) + 1 : 0;

  /* Selecting pushes the rest of the system outward, away from the focus. */
  const displayPositions = useMemo(() => {
    if (!selected || isMobile || !positions[selected]) return positions;
    const sp = positions[selected];
    const out = {};
    Object.keys(positions).forEach((id) => {
      const p = positions[id];
      if (id === selected) {
        out[id] = p;
        return;
      }
      const dx = p.x - sp.x;
      const dy = p.y - sp.y;
      const len = Math.hypot(dx, dy) || 1;
      out[id] = { x: p.x + (dx / len) * 62, y: p.y + (dy / len) * 62 };
    });
    return out;
  }, [positions, selected, isMobile]);

  const links = useMemo(
    () =>
      EDGES.map(([a, b]) => {
        const pa = displayPositions[a];
        const pb = displayPositions[b];
        return {
          id: `${a}-${b}`,
          a,
          b,
          d: linkPath(pa, pb, nodeRadius + 6),
          shown: visibleIds.has(a) && visibleIds.has(b)
        };
      }),
    [displayPositions, visibleIds, nodeRadius]
  );

  const layoutKey = `${activeCat}-${isMobile ? 'm' : 'd'}`;

  const sectionClass = [
    'skills-section',
    'eco',
    live ? 'is-live' : '',
    reduced ? 'is-reduced' : '',
    selected ? 'is-focused' : '',
    hovered ? 'is-hovering' : '',
    dragging ? 'is-dragging' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="skills" className={sectionClass} ref={sectionRef}>
      <div className="eco-header">
        <span className="eco-eyebrow">Engineering Systems</span>
        <h2 className="section-title">Technology Ecosystem</h2>
        <p className="section-subtitle">
          Explore the technologies that power my software systems — and how they connect.
        </p>
      </div>

      <div className="eco-filters" role="group" aria-label="Filter the technology map by domain">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            aria-pressed={activeCat === cat.id}
            className={`eco-filter ${activeCat === cat.id ? 'is-active' : ''}`}
            onClick={() => handleCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="eco-canvas" ref={canvasRef}>
        <div
          className="eco-viewport"
          ref={viewportRef}
          style={{ width: `${viewW}px`, height: `${viewH}px` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            className="eco-grid"
            style={{
              backgroundPosition: `${(cam.x * fitScale * 0.18).toFixed(1)}px ${(cam.y * fitScale * 0.18).toFixed(1)}px`
            }}
            aria-hidden="true"
          />
          <div className="eco-noise" aria-hidden="true" />

          <div
            className="eco-stage"
            style={{
              width: `${world.w}px`,
              height: `${world.h}px`,
              transform: `scale(${fitScale})`,
              '--fit': String(fitScale)
            }}
          >
            <div
              className="eco-camera"
              style={{
                transform: `translate3d(${cam.x.toFixed(2)}px, ${cam.y.toFixed(2)}px, 0) scale(${cam.z})`
              }}
            >
              <svg
                className="eco-links"
                width={world.w}
                height={world.h}
                viewBox={`0 0 ${world.w} ${world.h}`}
                aria-hidden="true"
                key={layoutKey}
              >
                {links.map((link) => {
                  const lit = focusSet ? focusSet.has(link.a) && focusSet.has(link.b) : false;
                  const cls = [
                    'eco-link',
                    link.shown ? '' : 'is-off',
                    lit ? 'is-lit' : '',
                    focusSet && !lit ? 'is-dim' : ''
                  ]
                    .filter(Boolean)
                    .join(' ');
                  /* `d` is also set through CSS so supporting browsers morph
                     the curve instead of snapping when the map re-arranges. */
                  const morph = { d: `path("${link.d}")` };
                  return (
                    <g className={cls} key={link.id}>
                      <path className="eco-link-line" d={link.d} style={morph} pathLength="1" />
                      <path className="eco-link-pulse" d={link.d} style={morph} pathLength="1" />
                    </g>
                  );
                })}
              </svg>

              <div className="eco-nodes" role="group" aria-label="Technology map">
                {NODES.map((node) => {
                  const p = displayPositions[node.id];
                  const shown = visibleIds.has(node.id);
                  const isSelected = selected === node.id;
                  const dimmed =
                    (focusSet && !focusSet.has(node.id)) || (selected && !isSelected);
                  const orderIndex = visible.indexOf(node);
                  const Icon = node.icon;
                  const cls = [
                    'eco-node',
                    node.core ? 'is-core' : '',
                    shown ? '' : 'is-off',
                    isSelected ? 'is-selected' : '',
                    dimmed ? 'is-dim' : '',
                    focusSet && focusSet.has(node.id) && !isSelected ? 'is-linked' : ''
                  ]
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <button
                      key={node.id}
                      type="button"
                      ref={(el) => {
                        nodeRefs.current[node.id] = el;
                      }}
                      className={cls}
                      style={{
                        transform: `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`,
                        '--i': String(orderIndex < 0 ? 0 : orderIndex)
                      }}
                      tabIndex={shown ? 0 : -1}
                      aria-hidden={shown ? undefined : true}
                      aria-pressed={isSelected}
                      aria-label={`${node.name} — ${node.tag}. Connects to ${(NEIGHBOURS[node.id] || [])
                        .map((id) => NODE_BY_ID[id].name)
                        .join(', ')}.`}
                      onMouseEnter={() => !selected && setHovered(node.id)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => !selected && setHovered(node.id)}
                      onBlur={() => setHovered(null)}
                      onClick={() => guardClick(node.id)}
                      onKeyDown={(e) => handleNodeKeyDown(e, orderIndex < 0 ? 0 : orderIndex)}
                    >
                      <span className="eco-node-in">
                        <span className="eco-node-float">
                          <span className="eco-node-dial" aria-hidden="true" />
                          <span className="eco-node-disc">
                            <Icon size={isMobile ? 20 : 24} strokeWidth={1.5} />
                          </span>
                        </span>
                        <span className="eco-node-label">{node.name}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="eco-cursor" ref={cursorRef} aria-hidden="true">
            <span className="eco-cursor-ring" />
            <span className="eco-cursor-dot" />
          </div>

          {isMobile && !selected && (
            <span className="eco-hint" aria-hidden="true">
              Drag to explore · Pinch to zoom
            </span>
          )}

          {activeNode && (
            <div
              className="eco-panel"
              role="dialog"
              aria-modal="false"
              aria-label={`${activeNode.name} details`}
            >
              <div className="eco-panel-inner">
                <div className="eco-panel-top">
                  <div className="eco-panel-meta">
                    <span className="eco-panel-index">
                      SYS-{String(activeIndex).padStart(2, '0')}
                    </span>
                    <span className="eco-panel-cat">{CATEGORY_LABEL[activeNode.category]}</span>
                  </div>
                  <button
                    type="button"
                    className="eco-panel-close"
                    onClick={closePanel}
                    aria-label="Close details"
                  >
                    <X size={16} />
                  </button>
                </div>

                <h3 className="eco-panel-title">{activeNode.name}</h3>
                <p className="eco-panel-tag">{activeNode.tag}</p>
                <p className="eco-panel-desc">{activeNode.desc}</p>

                <div className="eco-panel-block">
                  <h4>Applied to</h4>
                  <ul className="eco-panel-list">
                    {activeNode.uses.map((use) => (
                      <li key={use}>
                        <CornerDownRight size={13} strokeWidth={1.6} />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="eco-panel-block">
                  <h4>Working set</h4>
                  <div className="eco-chips">
                    {activeNode.stack.map((item) => (
                      <span className="eco-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="eco-panel-block">
                  <h4>Built into</h4>
                  <ul className="eco-panel-projects">
                    {activeNode.projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </div>

                <div className="eco-panel-block">
                  <h4>Connects to</h4>
                  <div className="eco-chips">
                    {(NEIGHBOURS[activeNode.id] || []).map((id) => (
                      <button
                        type="button"
                        key={id}
                        className="eco-chip is-link"
                        onClick={() => setSelected(id)}
                      >
                        {NODE_BY_ID[id].name}
                        <MoveRight size={12} strokeWidth={1.8} />
                      </button>
                    ))}
                  </div>
                </div>

                <p className="eco-panel-exp">{activeNode.exp}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Linear fallback for screen readers and print */}
      <ul className="eco-index">
        {NODES.map((node) => (
          <li key={node.id}>
            <strong>{node.name}</strong> ({CATEGORY_LABEL[node.category]}) — {node.exp} Connects
            to: {(NEIGHBOURS[node.id] || []).map((id) => NODE_BY_ID[id].name).join(', ')}.
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
