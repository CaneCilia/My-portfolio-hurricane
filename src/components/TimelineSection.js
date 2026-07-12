import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award, BookOpen, Cpu } from 'lucide-react';
import './TimelineSection.css';

const TimelineSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "PSG College of Technology, Coimbatore",
      duration: "2022 - 2026",
      grade: "CGPA: 8.7 / 10",
      milestones: [
        "Specialized in AI, Automation, and Advanced Software Architectures",
        "Winner of Smart India Hackathon (College Level Selection)",
        "Active organizer in the Computer Science Association"
      ],
      learnings: "Deepened core concepts in Data Structures, Database Systems, Cloud Computing, and Machine Learning. Developed a systematic approach to debugging and architectural design."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Joseph's Higher Secondary School",
      duration: "2020 - 2022",
      grade: "Percentage: 96.5%",
      milestones: [
        "School Rank 1 in Computer Science",
        "Completed certifications in Python and Advanced Java basics"
      ],
      learnings: "Acquired fundamental logic formulation, object-oriented concepts, and computational thinking frameworks."
    }
  ];

  const internshipData = [
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

  return (
    <section id="timeline" className="timeline-section">
      <div className="glow-orb glow-orb-blue" style={{ left: '-5%', bottom: '10%' }} />
      <div className="glow-orb" style={{ right: '5%', top: '30%' }} />

      <div className="section-header">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">
          An overview of my academic milestones and professional developer internships.
        </p>
      </div>

      <div className="timeline-grid">
        {/* Education Column */}
        <div className="timeline-column">
          <div className="column-title">
            <GraduationCap size={24} className="title-icon text-blue" />
            <h3>Education</h3>
          </div>
          
          <div className="timeline-items">
            {educationData.map((edu, idx) => (
              <div key={idx} className="timeline-card glass card animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="timeline-badge edu-badge">
                  <GraduationCap size={16} />
                </div>
                
                <div className="card-meta">
                  <span className="duration-tag">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                  <span className="grade-tag">{edu.grade}</span>
                </div>
                
                <h4 className="card-title">{edu.degree}</h4>
                <h5 className="card-subtitle">{edu.institution}</h5>
                
                <div className="timeline-details">
                  <div className="detail-section">
                    <h6 className="detail-subheading">
                      <Award size={14} /> Key Milestones:
                    </h6>
                    <ul className="milestone-list">
                      {edu.milestones.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h6 className="detail-subheading">
                      <BookOpen size={14} /> Key Learnings:
                    </h6>
                    <p className="learning-text">{edu.learnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internships Column */}
        <div className="timeline-column">
          <div className="column-title">
            <Briefcase size={24} className="title-icon text-purple" />
            <h3>Internships</h3>
          </div>

          <div className="timeline-items">
            {internshipData.map((job, idx) => (
              <div key={idx} className="timeline-card glass card animate-slide-up" style={{ animationDelay: `${(idx + 2) * 150}ms` }}>
                <div className="timeline-badge job-badge">
                  <Briefcase size={16} />
                </div>

                <div className="card-meta">
                  <span className="duration-tag">
                    <Calendar size={14} /> {job.duration}
                  </span>
                </div>

                <h4 className="card-title">{job.role}</h4>
                <h5 className="card-subtitle">{job.company}</h5>

                <div className="tech-badge-container">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="timeline-details">
                  <div className="detail-section">
                    <h6 className="detail-subheading">
                      <Cpu size={14} /> Responsibilities:
                    </h6>
                    <ul className="responsibility-list">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h6 className="detail-subheading">
                      <Award size={14} /> Achievements:
                    </h6>
                    <ul className="achievement-list">
                      {job.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h6 className="detail-subheading">
                      <BookOpen size={14} /> Key Learnings:
                    </h6>
                    <p className="learning-text">{job.learnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
