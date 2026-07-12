import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import './Education.css';

const EDUCATION_DATA = [
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

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic foundation and qualifications in Computer Science.
        </p>
      </div>

      <div className="education-timeline-container">
        <div className="timeline-line"></div>

        {EDUCATION_DATA.map((edu, idx) => (
          <div key={idx} className="education-timeline-item">
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot">
                <GraduationCap size={16} />
              </div>
            </div>

            <div className="education-timeline-content card">
              <div className="edu-meta-row">
                <span className="edu-duration">
                  <Calendar size={14} /> {edu.duration}
                </span>
                <span className="edu-grade">{edu.grade}</span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-details-grid">
                <div className="edu-details-col">
                  <h5 className="edu-details-title">
                    <Award size={14} /> Key Milestones
                  </h5>
                  <ul className="edu-milestone-list">
                    {edu.milestones.map((milestone, mIdx) => (
                      <li key={mIdx}>{milestone}</li>
                    ))}
                  </ul>
                </div>

                <div className="edu-details-col">
                  <h5 className="edu-details-title">
                    <BookOpen size={14} /> Key Learnings
                  </h5>
                  <p className="edu-learnings-text">{edu.learnings}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
