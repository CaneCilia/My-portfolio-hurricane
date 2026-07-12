import React from 'react';
import { Briefcase, Calendar, Cpu, Award, BookOpen } from 'lucide-react';
import './Internships.css';

const INTERNSHIP_DATA = [
  {
    role: "Software Engineering Intern",
    company: "InnovateTech Labs",
    duration: "Jan 2026 - Present",
    technologies: ["React.js", "Node.js", "Express", "AWS", "MongoDB"],
    responsibilities: [
      "Built responsive client-facing dashboards and custom data widgets",
      "Optimized backend queries and cache structures, enhancing API performance",
      "Automated deployment workflows using AWS pipelines and Docker containers"
    ],
    achievements: [
      "Reduced page render times by 30% through React code-splitting and memoization",
      "Designed and built an automated testing suite reducing manual testing overhead by 40%"
    ],
    learnings: "Mastered full-stack React lifecycle, state optimization patterns, production monitoring, and Agile sprint environments."
  },
  {
    role: "AI & Automation Intern",
    company: "Apex Automation Solutions",
    duration: "June 2025 - Dec 2025",
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI API", "PostgreSQL"],
    responsibilities: [
      "Developed custom LLM retrieval-augmented generation (RAG) applications",
      "Automated administrative reports generation using Python scripting and Cron tasks",
      "Created background parsing engines for heterogeneous PDF/JSON document scanning"
    ],
    achievements: [
      "Deployed agentic AI workflows saving internal staff over 15 hours per week in data sorting",
      "Achieved a 94% accuracy rate in automated parsing algorithms"
    ],
    learnings: "Gained hands-on experience in token efficiency, vector database query structures, REST API architectures, and model orchestration."
  }
];

const Internships = () => {
  return (
    <section id="internships" className="internships-section">
      <div className="section-header">
        <h2 className="section-title">Internships</h2>
        <p className="section-subtitle">
          My professional background and industrial software development experience.
        </p>
      </div>

      <div className="internships-timeline-container">
        <div className="timeline-line"></div>

        {INTERNSHIP_DATA.map((job, idx) => (
          <div key={idx} className="internship-timeline-item">
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
            </div>

            <div className="internship-timeline-content card">
              <div className="job-meta-row">
                <span className="job-duration">
                  <Calendar size={14} /> {job.duration}
                </span>
              </div>

              <h3 className="job-role">{job.role}</h3>
              <h4 className="job-company">{job.company}</h4>

              <div className="job-tech-container">
                {job.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="job-tech-badge">{tech}</span>
                ))}
              </div>

              <div className="job-details-grid">
                <div className="job-details-col">
                  <h5 className="job-details-title">
                    <Cpu size={14} /> Responsibilities
                  </h5>
                  <ul className="job-list">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-details-col">
                  <h5 className="job-details-title">
                    <Award size={14} /> Achievements
                  </h5>
                  <ul className="job-list text-accent">
                    {job.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="job-learnings-row">
                <h5 className="job-details-title">
                  <BookOpen size={14} /> Key Learnings
                </h5>
                <p className="job-learnings-text">{job.learnings}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
