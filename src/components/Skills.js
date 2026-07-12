import React, { useState } from 'react';
import { Code2, Layout, Database, Cloud, Cpu, Settings, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Stacks' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'data', label: 'Databases & Cloud' },
    { id: 'devops', label: 'DevOps & Tools' }
  ];

  const skillsData = [
    // Programming Languages
    {
      name: "Python",
      category: "languages",
      icon: <Code2 size={20} />,
      level: 90,
      note: "Used for automation scripts, building FastAPI backends, and data science workflows."
    },
    {
      name: "JavaScript",
      category: "languages",
      icon: <Code2 size={20} />,
      level: 85,
      note: "Primary language for frontend React applications and backend Node.js APIs."
    },
    {
      name: "Java",
      category: "languages",
      icon: <Code2 size={20} />,
      level: 80,
      note: "Leveraged for object-oriented programming foundations and robust algorithms."
    },
    {
      name: "C++",
      category: "languages",
      icon: <Code2 size={20} />,
      level: 75,
      note: "Utilized for competitive coding, algorithms, and micro-optimization tasks."
    },
    
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      icon: <Layout size={20} />,
      level: 92,
      note: "I use React to build scalable and reusable UI components with clean architecture."
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: <Layout size={20} />,
      level: 80,
      note: "Used for production-grade React apps requiring server-side rendering and routing."
    },
    {
      name: "HTML5 & CSS3",
      category: "frontend",
      icon: <Layout size={20} />,
      level: 95,
      note: "Utilized to design pixel-perfect structures and responsive custom CSS animations."
    },

    // Backend
    {
      name: "Node.js & Express",
      category: "backend",
      icon: <Terminal size={20} />,
      level: 88,
      note: "I write high-concurrency event-driven rest backends and middleware engines."
    },
    {
      name: "FastAPI",
      category: "backend",
      icon: <Terminal size={20} />,
      level: 85,
      note: "Used to develop high-performance REST APIs for python based microservices."
    },

    // AI & ML
    {
      name: "LangChain & LLMs",
      category: "ai",
      icon: <Cpu size={20} />,
      level: 82,
      note: "Used to construct agentic systems, document summarizers, and retrieval chains (RAG)."
    },
    {
      name: "PyTorch",
      category: "ai",
      icon: <Cpu size={20} />,
      level: 75,
      note: "Applied for developing, training, and fine-tuning neural network structures."
    },

    // Databases & Cloud
    {
      name: "PostgreSQL",
      category: "data",
      icon: <Database size={20} />,
      level: 85,
      note: "Designed relational database schemas, complex joins, and stored procedures."
    },
    {
      name: "MongoDB",
      category: "data",
      icon: <Database size={20} />,
      level: 88,
      note: "Implemented flexible document stores for fast-moving web application schemas."
    },
    {
      name: "AWS & Google Cloud",
      category: "data",
      icon: <Cloud size={20} />,
      level: 78,
      note: "Configured EC2 instances, S3 asset buckets, Lambda functions, and serverless tasks."
    },

    // DevOps & Tools
    {
      name: "Docker",
      category: "devops",
      icon: <Settings size={20} />,
      level: 80,
      note: "Containerized environments to assure consistency between local run and staging build."
    },
    {
      name: "Git & GitHub",
      category: "devops",
      icon: <Settings size={20} />,
      level: 90,
      note: "Enforced semantic branch merges, rebases, and clean code management."
    },
    {
      name: "Linux Shell",
      category: "devops",
      icon: <Settings size={20} />,
      level: 82,
      note: "Automated server scripts and optimized tasks using shell programming workflows."
    }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A breakdown of my software tools, technologies, and methods of implementation.
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

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="skill-card glass card animate-slide-up"
            style={{ animationDelay: `${(index % 6) * 80}ms` }}
          >
            <div className="skill-card-top">
              <div className="skill-icon-box">
                {skill.icon}
              </div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <div className="proficiency-value">{skill.level}%</div>
              </div>
            </div>

            <div className="proficiency-track">
              <div className="proficiency-bar" style={{ width: `${skill.level}%` }}></div>
            </div>

            <p className="skill-note">
              {skill.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
