import React from 'react';
import { Briefcase, Calendar, Cpu, Award, BookOpen } from 'lucide-react';
import './Internships.css';

const INTERNSHIP_DATA = [
  {
    role: "AI Engineer Intern",
    company: "Space Marvel AI",
    duration: "Oct 2025 - Mar 2026",
    logo: "/icons/spacemarvel_ai_logo.jpg",
    companyUrl: "https://www.linkedin.com/company/spacemarvel-ai/",
    technologies: [
      "Python",
      "LLMs",
      "AI Agents",
      "Generative AI",
      "Machine Learning"
    ],
    responsibilities: [
      "Developed AI-powered agents for intelligent automation and task execution",
      "Explored and implemented modern AI technologies to build end-to-end AI solutions",
      "Collaborated on AI system development and model integration"
    ],
    achievements: [
      "Built practical AI agent workflows for real-world applications",
      "Strengthened expertise in Generative AI and intelligent automation"
    ],
    learnings:
      "Gained hands-on experience in AI agent development, prompt engineering, LLM integration, and end-to-end AI application development."
  },
  {
    role: "Android Developer Intern",
    company: "Weefy",
    duration: "Jan 2025 - Mar 2025",
    logo: "/images/weefy.png",
    companyUrl: "https://www.linkedin.com/company/weefy/",
    technologies: [
      "Android",
      "Java",
      "Kotlin",
      "Firebase",
      "SQLite"
    ],
    responsibilities: [
      "Developed Android applications for entrepreneurs and small-scale businesses",
      "Collaborated with the product manager to build interactive software solutions",
      "Implemented user-friendly interfaces and application features"
    ],
    achievements: [
      "Delivered mobile application features that improved user experience",
      "Contributed to innovative business-oriented Android solutions"
    ],
    learnings:
      "Improved Android application development skills, UI/UX implementation, mobile architecture, and collaborative software development."
  },
  {
    role: "Project Intern",
    company: "Centre for Health Research and Innovation",
    duration: "Jul 2024 - Jan 2025",
    logo: "/icons/CRHIT.png",
    companyUrl: "https://www.linkedin.com/company/chri-path/",
    technologies: [
      "Java",
      "Python",
      "SQL",
      "Android",
      "Healthcare Software"
    ],
    responsibilities: [
      "Developed healthcare software applications for research projects",
      "Supported ophthalmology and laboratory management solutions",
      "Collaborated with researchers to build software for medical applications"
    ],
    achievements: [
      "Contributed to healthcare technology projects supporting medical research",
      "Delivered reliable software solutions for clinical and laboratory use"
    ],
    learnings:
      "Gained experience in healthcare software development, research collaboration, software engineering practices, and domain-specific application design."
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
              <div className="job-header-row">
                <div className="job-title-info">
                  <div className="job-meta-row">
                    <span className="job-duration">
                      <Calendar size={14} /> {job.duration}
                    </span>
                  </div>
                  <h3 className="job-role">{job.role}</h3>
                  <h4 className="job-company">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="job-company-link">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h4>
                </div>
                {job.logo && (
                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="job-logo-wrapper">
                    <img 
                      src={process.env.PUBLIC_URL + job.logo} 
                      alt={`${job.company} logo`} 
                      className="job-company-logo" 
                    />
                  </a>
                )}
              </div>

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
