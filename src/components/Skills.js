import React, { useState } from 'react';
import { Code2, Layout, Database, Cloud, Cpu, Settings, Terminal, Bug, Layers } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Stacks' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Embedded' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'data', label: 'Databases & Cloud' },
    { id: 'devops', label: 'DevOps & Tools' }
  ];

  const skillsData = [
    // Programming Languages
    {
      name: "Python",
      category: "languages",
      iconClass: "devicon-python-plain",
      brandColor: "#3776AB",
      level: 95,
      note: "Primary language for AI agent development, machine learning models, and automated scripting."
    },
    {
      name: "Java",
      category: "languages",
      iconClass: "devicon-java-plain",
      brandColor: "#5382a1",
      level: 85,
      note: "Robust object-oriented programming foundation, applied to Android studio components."
    },
    {
      name: "C Programming",
      category: "languages",
      iconClass: "devicon-c-plain",
      brandColor: "#A8B9CC",
      level: 80,
      note: "Experienced in low-level memory handling, system calls, and algorithms."
    },
    {
      name: "Data Structures & OOP",
      category: "languages",
      iconClass: "devicon-code-plain",
      brandColor: "#8B5CF6",
      level: 90,
      note: "Applied concepts like inheritance, polymorphism, and optimized lookup algorithms in project designs."
    },

    // Frontend / Mobile
    {
      name: "Android Studio",
      category: "frontend",
      iconClass: "devicon-android-plain",
      brandColor: "#3DDC84",
      level: 90,
      note: "Developed and shipped native applications with custom UI layouts and database connectivity."
    },
    {
      name: "Flutter",
      category: "frontend",
      iconClass: "devicon-flutter-plain",
      brandColor: "#02569B",
      level: 75,
      note: "Cross-platform app development with hot-reloading and reactive layouts."
    },
    {
      name: "Node.js",
      category: "frontend",
      iconClass: "devicon-nodejs-plain",
      brandColor: "#339933",
      level: 75,
      note: "Asynchronous server implementations and package dependency management."
    },

    // Backend & Embedded
    {
      name: "REST APIs",
      category: "backend",
      iconClass: "devicon-fastapi-plain",
      brandColor: "#009688",
      level: 88,
      note: "Architected clean endpoint contracts, JSON response parsing, and microservice pipelines."
    },
    {
      name: "Embedded Systems",
      category: "backend",
      iconClass: "devicon-embeddedc-plain",
      brandColor: "#E44D26",
      level: 85,
      note: "Microcontroller interface layouts, serial communication protocol mappings, and compiler chains."
    },
    {
      name: "Arduino Integration",
      category: "backend",
      iconClass: "devicon-arduino-plain",
      brandColor: "#00979D",
      level: 85,
      note: "Prototyped multiple automation systems with hardware interrupts and sensor calibration matrices."
    },

    // AI / ML
    {
      name: "Machine Learning",
      category: "ai",
      iconClass: "devicon-pytorch-original",
      brandColor: "#EE4C2C",
      level: 88,
      note: "Supervised and unsupervised model training pipelines, feature engineering, and inference pipelines."
    },
    {
      name: "AI Agents",
      category: "ai",
      iconClass: "devicon-tensorflow-line",
      brandColor: "#FF6F00",
      level: 90,
      note: "Stateful agentic behaviors built using tools, vector schemas, and custom cognitive loop graphs."
    },
    {
      name: "RAG Pipelines",
      category: "ai",
      iconClass: "",
      icon: <Layers size={22} style={{ color: '#8B5CF6' }} />,
      brandColor: "#8B5CF6",
      level: 85,
      note: "Semantic chunking methods, vector indexing schemas, and context window pruning frameworks."
    },
    {
      name: "LangChain",
      category: "ai",
      iconClass: "",
      icon: <Cpu size={22} style={{ color: '#10B981' }} />,
      brandColor: "#10B981",
      level: 85,
      note: "Composed complex multi-step prompt templates, chat memories, and LLM chains."
    },

    // Database & Cloud
    {
      name: "MongoDB",
      category: "data",
      iconClass: "devicon-mongodb-plain",
      brandColor: "#47A248",
      level: 85,
      note: "Document schemas, index configuration, aggregation stages, and scaling strategies."
    },
    {
      name: "AWS Platform",
      category: "data",
      iconClass: "devicon-amazonwebservices-plain-wordmark",
      brandColor: "#FF9900",
      level: 80,
      note: "Provisioning instances, storage buckets, cloud access management keys, and serverless actions."
    },
    {
      name: "Google Cloud Platform",
      category: "data",
      iconClass: "devicon-googlecloud-plain",
      brandColor: "#4285F4",
      level: 75,
      note: "GCP virtual machine provisioning, storage layers, and vertex AI engine deployments."
    },

    // DevOps & Tools
    {
      name: "Git & GitHub",
      category: "devops",
      iconClass: "devicon-github-original",
      brandColor: "#f05032",
      level: 90,
      note: "Complex branch management, conflict resolution steps, pull request loops, and commit trees."
    },
    {
      name: "CI/CD Workflows",
      category: "devops",
      iconClass: "devicon-githubactions-plain",
      brandColor: "#2088FF",
      level: 75,
      note: "Familiar with setting up action files, run steps, deployment dependencies, and status tests."
    },
    {
      name: "Debugging & QA",
      category: "devops",
      iconClass: "",
      icon: <Bug size={22} style={{ color: '#EF4444' }} />,
      brandColor: "#EF4444",
      level: 90,
      note: "Applying breakpoint systems, inspection tools, memory profiling tests, and regression runs."
    }
  ];

  const groupedSkills = {
    languages: {
      title: "Programming Languages",
      icon: <Code2 size={20} className="category-icon text-indigo" />,
      skills: skillsData.filter(s => s.category === 'languages')
    },
    frontend: {
      title: "Frontend & Mobile",
      icon: <Layout size={20} className="category-icon text-blue" />,
      skills: skillsData.filter(s => s.category === 'frontend')
    },
    backend: {
      title: "Backend & Embedded",
      icon: <Terminal size={20} className="category-icon text-teal" />,
      skills: skillsData.filter(s => s.category === 'backend')
    },
    ai: {
      title: "AI / ML Stack",
      icon: <Cpu size={20} className="category-icon text-purple" />,
      skills: skillsData.filter(s => s.category === 'ai')
    },
    data: {
      title: "Databases & Cloud",
      icon: <Database size={20} className="category-icon text-cyan" />,
      skills: skillsData.filter(s => s.category === 'data')
    },
    devops: {
      title: "DevOps & Tools",
      icon: <Settings size={20} className="category-icon text-red" />,
      skills: skillsData.filter(s => s.category === 'devops')
    }
  };

  const hexToRgb = (hex) => {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '139, 92, 246';
  };

  const renderSkillIcon = (skill) => {
    if (skill.iconClass) {
      return <i className={`${skill.iconClass} colored`} style={{ fontSize: '24px' }}></i>;
    }
    return skill.icon;
  };

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Classified breakdown of my software technologies, frameworks, and implementation proficiencies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-tabs glass">
        {categories.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Showcase */}
      {activeCategory === 'All' ? (
        <div className="skills-overview-grid">
          {Object.entries(groupedSkills).map(([catId, cat], idx) => (
            <div 
              key={catId} 
              className={`skills-group-card glass card animate-slide-up cat-${catId}`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="group-card-header">
                <div className="group-icon-box">
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
              </div>
              <div className="group-skills-list">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="group-skill-row">
                    <div className="skill-row-left">
                      <div className="skill-row-icon">
                        {renderSkillIcon(skill)}
                      </div>
                      <span className="skill-row-name">{skill.name}</span>
                    </div>
                    <div className="skill-row-right">
                      <div className="skill-row-bar-track">
                        <div 
                          className="skill-row-bar-fill" 
                          style={{ 
                            width: `${skill.level}%`, 
                            backgroundColor: skill.brandColor,
                            boxShadow: `0 0 8px ${skill.brandColor}80` 
                          }}
                        ></div>
                      </div>
                      <span className="skill-row-percent">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="skills-detail-grid">
          {filteredSkills.map((skill, index) => {
            const rgbColor = hexToRgb(skill.brandColor);
            return (
              <div 
                key={skill.name} 
                className="skill-detail-card glass card animate-slide-up"
                style={{ 
                  animationDelay: `${(index % 6) * 60}ms`,
                  '--skill-color': skill.brandColor,
                  '--skill-color-rgb': rgbColor
                }}
              >
                <div className="skill-detail-top">
                  <div 
                    className="skill-detail-icon-box" 
                    style={{ 
                      background: `rgba(${rgbColor}, 0.08)`, 
                      borderColor: `rgba(${rgbColor}, 0.2)` 
                    }}
                  >
                    {renderSkillIcon(skill)}
                  </div>
                  <div className="skill-detail-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-detail-level" style={{ color: skill.brandColor }}>{skill.level}% Proficiency</span>
                  </div>
                </div>
                
                <div className="skill-detail-bar-container">
                  <div className="skill-detail-bar-track">
                    <div 
                      className="skill-detail-bar-fill" 
                      style={{ 
                        width: `${skill.level}%`, 
                        background: `linear-gradient(90deg, ${skill.brandColor}, ${skill.brandColor}cc)`,
                        boxShadow: `0 0 10px ${skill.brandColor}60`
                      }}
                    ></div>
                  </div>
                </div>

                <p className="skill-detail-note">{skill.note}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Skills;
