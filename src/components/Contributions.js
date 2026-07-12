import React from 'react';
import { Code2, Award, Zap } from 'lucide-react';
import { Github } from './BrandIcons';
import './Contributions.css';

const CONTRIBUTIONS_DATA = [
  {
    icon: <Github size={24} />,
    platform: "GitHub & Open Source",
    title: "Developer Tools & Automation Pipelines",
    description: "Actively building developer utilities, CLI tools, and webhook parsers. Maintain several open repositories focusing on workflow automation, scripts, and API connectors.",
    impact: "Created custom scripts that automate repetitive tasks, saving developer workflow overhead."
  },
  {
    icon: <Code2 size={24} className="text-blue" />,
    platform: "Google Developer Program",
    title: "Web Platform & Firebase Systems",
    description: "Deployed full-stack services utilizing Firebase Auth, Realtime Databases, and Cloud Functions. Completed several Google Cloud Skill Boost courses on foundational VM compute engines.",
    impact: "Built secure authentication frameworks and automated backup solutions for small-scale applications."
  },
  {
    icon: <Zap size={24} className="text-yellow" />,
    platform: "AMD Developer Central",
    title: "ROCm GPU Computing & AI Acceleration",
    description: "Participated in testing and optimizing ROCm tooling with PyTorch for local machine learning execution. Documented compatibility workflows for running quantized LLMs on consumer compute GPUs.",
    impact: "Successfully mapped GPU tensor operations to client environments, achieving local execution of LLM workloads."
  },
  {
    icon: <Award size={24} className="text-purple" />,
    platform: "Smart India Hackathon",
    title: "AI-Powered Business Parser Selection",
    description: "Collaborated on designing a web solution that parsed layout-heavy documents using multi-modal AI APIs. Winner of the internal selection round for building structured backend JSON outputs.",
    impact: "Architected a system that extracted document metadata with high reliability, replacing manual entry."
  }
];

const Contributions = () => {
  return (
    <section id="contributions" className="contributions-section">
      <div className="section-header">
        <h2 className="section-title">Contributions & Impact</h2>
        <p className="section-subtitle">
          My presence and active participation in developer programs, open-source communities, and challenges.
        </p>
      </div>

      <div className="contributions-grid-container">
        {CONTRIBUTIONS_DATA.map((item, idx) => (
          <div key={idx} className="contribution-card card">
            <div className="contrib-card-header">
              <div className="contrib-icon-box">
                {item.icon}
              </div>
              <div className="contrib-meta">
                <span className="contrib-platform">{item.platform}</span>
                <h3 className="contrib-title">{item.title}</h3>
              </div>
            </div>
            
            <p className="contrib-desc">{item.description}</p>
            
            <div className="contrib-impact-box">
              <span className="impact-tag">Key Impact</span>
              <p className="impact-text">{item.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributions;
