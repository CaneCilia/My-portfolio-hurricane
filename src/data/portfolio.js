/*
 * Single source of truth for the terminal's knowledge base.
 *
 * Everything here mirrors what the page actually renders. The terminal used to
 * carry its own hand-written copy, which had drifted into placeholder text
 * (wrong college, wrong CGPA, invented projects and employers, example.com
 * contacts) — so both the CLI commands and the RAG context fed to Gemini were
 * answering from fiction. Keep this file in step with the components when the
 * portfolio changes.
 */

export const PROFILE = {
  name: 'Kanishkar R',
  headline: 'Artificial Intelligence & Machine Learning engineering student',
  summary:
    "Kanishkar R is an Artificial Intelligence & Machine Learning engineering student who turns ideas into practical software. His focus is Agentic AI, LLMs, RAG pipelines and intelligent automation — building AI systems that reason, plan and assist users. He also builds Android and full-stack applications, and enjoys PC building and computer hardware.",
  approach:
    'Analyses a problem from several angles before implementing, and values preparation, continuous improvement and learning through experimentation.',
  vision:
    'To become a skilled AI and Software Engineer contributing to intelligent products that create real-world impact.',
  location: 'Salem, Tamil Nadu, India',
  metrics: ['10+ projects completed', '3+ developer programs', '5+ certifications'],
};

export const CONTACT = {
  email: 'kanew.gdg@gmail.com',
  phone: '+91 70109 99821',
  location: 'Salem, Tamil Nadu, India',
  github: 'https://github.com/CaneCilia',
  linkedin: 'https://www.linkedin.com/in/kanishkar42/',
};

export const EDUCATION = [
  {
    degree: 'B.E Artificial Intelligence and Machine Learning',
    institution: 'Sona College of Technology, Salem',
    duration: '2022 - 2026',
    grade: 'CGPA: 8.05 / 10',
    notes:
      'Specialised in AI, automation and advanced software architectures. Active organiser in the Computer Science Association.',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'CSI Polytechnic College, Salem',
    duration: '2020 - 2023',
    grade: 'CGPA: 9.0 / 10',
    notes: 'Core grounding in data structures, database systems and software engineering practice.',
  },
];

export const INTERNSHIPS = [
  {
    role: 'AI Engineer Intern',
    company: 'Space Marvel AI',
    duration: 'Oct 2025 - Mar 2026',
    tech: ['Python', 'LLMs', 'AI Agents', 'Generative AI', 'Machine Learning'],
    detail:
      'Developed AI-powered agents for intelligent automation and task execution, implemented modern AI technologies end to end, and collaborated on AI system development and model integration.',
  },
  {
    role: 'Android Developer Intern',
    company: 'Weefy',
    duration: 'Jan 2025 - Mar 2025',
    tech: ['Android', 'Java', 'Kotlin', 'Firebase', 'SQLite'],
    detail:
      'Built Android applications for entrepreneurs and small businesses, working with the product manager on interactive software and user-facing features.',
  },
  {
    role: 'Project Intern',
    company: 'Centre for Health Research and Innovation',
    duration: 'Jul 2024 - Jan 2025',
    tech: ['Java', 'Python', 'SQL', 'Android', 'Healthcare Software'],
    detail:
      'Developed healthcare software for research projects, supporting ophthalmology and laboratory management solutions alongside researchers.',
  },
];

export const PROJECTS = [
  {
    title: 'AI Powered Flight Assistant for NORDO Aviation',
    domain: 'Agentic AI',
    tech: ['Python', 'LangGraph', 'Gemini', 'RAG', 'FastAPI', 'Flutter', 'Firebase'],
    detail:
      'An agentic cockpit assistant for NORDO (No Radio Communication) scenarios. Assists pilots with emergency procedures, airport information, checklist retrieval and contextual decision support using Retrieval-Augmented Generation, with LangGraph orchestration and a Flutter dashboard.',
  },
  {
    title: 'Intelligent Meeting Feedback System & Quality Tracker',
    domain: 'Generative AI',
    tech: ['React', 'Node.js', 'MongoDB', 'Microsoft Entra ID', 'Express'],
    detail:
      'A platform that evaluates meetings, tracks participant engagement and generates actionable feedback reports, secured with Microsoft Entra ID authentication.',
  },
  {
    title: 'AI/ML Predictive Maintenance System for EVs & IC Engines',
    domain: 'Machine Learning',
    tech: ['Python', 'TensorFlow', 'Machine Learning', 'Flask', 'Pandas'],
    detail:
      'Analyses vehicle sensor data to predict failures before breakdowns occur in electric and internal combustion vehicles, served through a Flask API.',
    repo: 'https://github.com/CaneCilia/Ev-predictive-Maintenance-System-using-AIML',
  },
  {
    title: 'YouTube Copyright Analysis Chatbot',
    domain: 'Generative AI',
    tech: ['Python', 'Streamlit', 'Gemini', 'YouTube API', 'NLP'],
    detail:
      'Evaluates YouTube videos for copyright risk by analysing metadata and content indicators, combining API data with LLM reasoning in a Streamlit chatbot.',
    repo: 'https://github.com/CaneCilia/yt-copyright-chatbot-predictor',
  },
  {
    title: 'Image Captioning using YOLOv5 & BiLSTM',
    domain: 'Computer Vision',
    tech: ['YOLOv5', 'BiLSTM', 'PyTorch', 'Deep Learning', 'OpenCV'],
    detail:
      'Combines YOLOv5 object detection with a BiLSTM sequence model to generate context-aware natural language captions for images.',
  },
];

export const PUBLICATIONS = [
  {
    title: 'AI-Powered Flight Assistant for NORDO Aviation',
    venue: "ICCISS'26 – Computational Intelligence, Security and Systems",
    organizer: 'Department of CSE, Sona College of Technology',
    date: 'March 2026',
    status: 'Presented',
    detail:
      'An Agentic AI flight assistant giving pilots real-time emergency decision support during communication-loss scenarios, with a RAG pipeline over flight manuals and an adaptive agentic UI.',
  },
  {
    title: 'Cost-Efficient Transformer-Based Demand Forecasting for Retail SMEs',
    venue: 'ICMMCISD 2026 – Mathematical Modelling & Computational Intelligence',
    organizer: 'Vellore Institute of Technology (VIT) & University of Queensland',
    date: 'June 2026',
    status: 'Presented',
    detail:
      'A lightweight transformer framework for demand forecasting and inventory replenishment in small-to-medium retail, achieving a 14% forecasting error reduction with low-parameter local deployment.',
  },
];

export const CERTIFICATIONS = [
  { name: 'Oracle Cloud Infrastructure AI Foundations Associate', org: 'Oracle', date: 'Oct 2025' },
  { name: 'Machine Learning Operations (MLOps) for Generative AI', org: 'Google', date: 'Jul 2025' },
  { name: 'Use Machine Learning APIs on Google Cloud', org: 'Google', date: 'Jun 2025' },
  { name: 'Principles of Generative AI', org: 'Infosys Springboard', date: 'Jun 2025' },
  { name: 'MongoDB Basics for Students', org: 'MongoDB', date: 'Jun 2025' },
  { name: 'AWS APAC - Solutions Architecture Job Simulation', org: 'Forage', date: 'Jun 2025' },
  { name: 'Networking Basics', org: 'Cisco', date: 'Feb 2025' },
  { name: 'Data Analytics Essentials', org: 'Cisco', date: 'Feb 2025' },
  { name: 'Git Training - Version Controller', org: 'Simplilearn', date: 'Mar 2025' },
  { name: 'UiPath Automation Explorer Training', org: 'UiPath', date: 'Oct 2024' },
];

export const SKILLS = [
  { group: 'Languages', items: ['Python', 'Java', 'C', 'Data Structures & Algorithms'] },
  { group: 'AI Systems', items: ['Machine Learning', 'AI Agents', 'RAG Pipelines', 'LangChain'] },
  { group: 'Backend & Embedded', items: ['REST APIs', 'Embedded Systems', 'Arduino'] },
  { group: 'Interfaces', items: ['Android Studio', 'Flutter', 'Node.js'] },
  { group: 'Data & Cloud', items: ['MongoDB', 'AWS', 'Google Cloud'] },
  { group: 'Delivery', items: ['Git & GitHub', 'CI/CD', 'Debugging & QA'] },
];

export const EVENTS = [
  {
    title: "Appathon '25",
    role: 'Event Organizer',
    date: 'April 2025',
    scale: '100+ participants',
  },
  {
    title: 'Google Developer Groups - Build with AI',
    role: 'Event Organizer',
    date: 'March 11, 2025',
    scale: '80+ participants',
  },
];

/* ---------------------------------------------------------------------------
 * Formatters — the CLI output and the RAG context are both derived from the
 * data above, so they can never disagree with each other or with the page.
 * ------------------------------------------------------------------------- */

const bullet = (lines) => lines.map((l) => `  ${l}`).join('\n');

export const format = {
  about: () =>
    `${PROFILE.name} — ${PROFILE.headline}\n\n${PROFILE.summary}\n\nHow he works: ${PROFILE.approach}\nGoal: ${PROFILE.vision}\nBased in ${PROFILE.location}.`,

  skills: () =>
    'Technical Stack:\n' +
    SKILLS.map((s) => `\n${s.group}:\n${bullet(s.items.map((i) => `- ${i}`))}`).join(''),

  projects: () =>
    'Projects:\n' +
    PROJECTS.map(
      (p, i) =>
        `\n${i + 1}. ${p.title}  [${p.domain}]\n${bullet([p.detail, `Stack: ${p.tech.join(', ')}`])}`
    ).join(''),

  internships: () =>
    'Experience:\n' +
    INTERNSHIPS.map(
      (j) => `\n- ${j.role} @ ${j.company}  (${j.duration})\n${bullet([j.detail, `Stack: ${j.tech.join(', ')}`])}`
    ).join(''),

  education: () =>
    'Education:\n' +
    EDUCATION.map((e) => `\n- ${e.degree}\n${bullet([`${e.institution}  (${e.duration})`, e.grade, e.notes])}`).join(''),

  publications: () =>
    'Research & Publications:\n' +
    PUBLICATIONS.map(
      (p) => `\n- "${p.title}"\n${bullet([`${p.venue}`, `${p.organizer} · ${p.date} · ${p.status}`, p.detail])}`
    ).join(''),

  certifications: () =>
    `Certifications (${CERTIFICATIONS.length}):\n` +
    bullet(CERTIFICATIONS.map((c) => `- ${c.name} — ${c.org} (${c.date})`)),

  events: () =>
    'Events Organised:\n' + bullet(EVENTS.map((e) => `- ${e.title} — ${e.role}, ${e.date} (${e.scale})`)),

  contact: () =>
    'Contact:\n' +
    bullet([
      `- Email:    ${CONTACT.email}`,
      `- Phone:    ${CONTACT.phone}`,
      `- Location: ${CONTACT.location}`,
      `- GitHub:   ${CONTACT.github}`,
      `- LinkedIn: ${CONTACT.linkedin}`,
    ]),
};

/*
 * Retrieval documents. `section` is the anchor id on the page, so a strong
 * match can also scroll the user to the relevant part of the portfolio.
 */
export const PORTFOLIO_DB = [
  {
    id: 'about',
    section: 'about',
    title: `About ${PROFILE.name}`,
    keywords: 'who is kanishkar bio profile summary introduction himself yourself background interests hobbies pc building',
    content: format.about(),
  },
  {
    id: 'skills',
    section: 'skills',
    title: 'Technical Skills & Stack',
    keywords: 'skills stack technologies languages frameworks tools python java flutter android langchain rag aws gcp mongodb git',
    content: format.skills(),
  },
  {
    id: 'projects',
    section: 'projects',
    title: 'Projects',
    keywords: 'projects work built portfolio nordo aviation flight assistant meeting feedback predictive maintenance ev youtube copyright chatbot image captioning yolo bilstm',
    content: format.projects(),
  },
  {
    id: 'internships',
    section: 'internships',
    title: 'Work Experience & Internships',
    keywords:
      'intern interned interning internship internships experience job work worked employment company employer space marvel weefy chri healthcare android engineer',
    content: format.internships(),
  },
  {
    id: 'education',
    section: 'education',
    title: 'Education & Academics',
    keywords:
      'education college university degree school study studies studied studying graduate cgpa gpa grade marks sona salem diploma polytechnic',
    content: format.education(),
  },
  {
    id: 'publications',
    section: 'publications',
    title: 'Research & Publications',
    keywords:
      'research publication publications paper papers conference journal publish published iccis icmmcisd transformer forecasting nordo',
    content: format.publications(),
  },
  {
    id: 'certifications',
    section: 'certifications',
    title: 'Certifications & Credentials',
    keywords:
      'certification certifications certificate certified credential credentials course courses oracle google cisco mongodb aws forage uipath simplilearn infosys',
    content: format.certifications(),
  },
  {
    id: 'events',
    section: 'events',
    title: 'Events & Community',
    keywords: 'event organizer organised community appathon google developer groups gdg build with ai volunteer leadership',
    content: format.events(),
  },
  {
    id: 'contact',
    section: 'contact',
    title: 'Contact Details & Social Profiles',
    keywords: 'contact email phone reach hire mail gmail number linkedin github location address where based',
    content: format.contact(),
  },
];

/* The full portfolio, for grounding the LLM on cross-section questions. */
export const FULL_CONTEXT = PORTFOLIO_DB.map((d) => `[${d.title}]\n${d.content}`).join('\n\n');
