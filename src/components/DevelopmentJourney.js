import React from 'react';
import { Search, Map, Layout, Layers, Terminal, ShieldCheck, Rocket, RefreshCw } from 'lucide-react';
import './DevelopmentJourney.css';

const DevelopmentJourney = () => {
  const steps = [
    {
      stepNum: "01",
      title: "Requirement Analysis",
      icon: <Search size={22} />,
      desc: "Deconstructing project parameters, defining specifications, scoping dependencies, and identifying edge-cases."
    },
    {
      stepNum: "02",
      title: "Planning & Sprints",
      icon: <Map size={22} />,
      desc: "Drafting user story checklists, mapping out schedules, and outlining data synchronization models."
    },
    {
      stepNum: "03",
      title: "UI / UX Design",
      icon: <Layout size={22} />,
      desc: "Establishing color variables, structuring responsive components, and planning transitions and micro-animations."
    },
    {
      stepNum: "04",
      title: "System Architecture",
      icon: <Layers size={22} />,
      desc: "Formulating database schemas (PostgreSQL/MongoDB), creating REST endpoints, and verifying cache bounds."
    },
    {
      stepNum: "05",
      title: "Clean Development",
      icon: <Terminal size={22} />,
      desc: "Writing reusable, modular code blocks, maintaining strict commit guidelines, and documenting API specs."
    },
    {
      stepNum: "06",
      title: "Strict Testing",
      icon: <ShieldCheck size={22} />,
      desc: "Running manual edge-cases, validation suites, and debugging console errors/vulnerabilities."
    },
    {
      stepNum: "07",
      title: "Staged Deployment",
      icon: <Rocket size={22} />,
      desc: "Configuring container environments, automating build pipelines, and staging live URLs."
    },
    {
      stepNum: "08",
      title: "Continuous Improvements",
      icon: <RefreshCw size={22} />,
      desc: "Refactoring legacy calculations, analyzing performance load metrics, and integrating user feedback."
    }
  ];

  return (
    <div className="journey-container">
      <h3 className="sub-section-title">Development Journey</h3>
      <p className="journey-subtitle-text">
        How I approach engineering puzzles, from abstract specs to high-fidelity production systems.
      </p>

      <div className="journey-timeline">
        {steps.map((step, idx) => (
          <div key={idx} className="journey-step glass animate-slide-up" style={{ animationDelay: `${idx * 80}ms` }}>
            <div className="step-badge">{step.stepNum}</div>
            <div className="step-icon-box">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentJourney;
