import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import './Education.css';

const EDUCATION_DATA = [
  {
    degree: "B.E Artificial Intelligence and Machine Learning",
    institution: "Sona College of Technology, Salem",
    duration: "2022 - 2026",
    grade: "CGPA: 8.05 / 10",
    images: [
      "/images/main-buildinge.jpg",
      "/images/mba-library-side-view.jpg",
      "/images/college-entrance.jpg",
      "images/main-building.jpg"
    ],
    logo: "/icons/SCT.png",
    milestones: [
      "Specialized in AI, Automation, and Advanced Software Architectures",
      "Active organizer in the Computer Science Association"
    ],
    learnings:
      "Deepened core concepts in Data Structures, Database Systems, Cloud Computing, and Machine Learning. Developed a systematic approach to debugging and architectural design."
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "CSI Polytechnic College, Salem",
    duration: "2020 - 2023",
    grade: "CGPA: 9.0 / 10",
    milestones: [
      "Specialized in AI, Automation, and Advanced Software Architectures",
      "Active organizer in the Computer Science Association"
    ],
    learnings:
      "Deepened core concepts in Data Structures, Database Systems, Cloud Computing, and Machine Learning. Developed a systematic approach to debugging and architectural design."
  }
];

const EducationImageSlider = ({ images, institution }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="edu-card-image-side">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${institution} campus view ${idx + 1}`}
          className={`edu-card-img-side ${idx === currentIdx ? 'active' : ''}`}
        />
      ))}
      {images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`slider-dot ${idx === currentIdx ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx(idx);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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

        {EDUCATION_DATA.map((edu, idx) => {
          const hasImages = edu.images && edu.images.length > 0;
          return (
            <div key={idx} className="education-timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <GraduationCap size={16} />
                </div>
              </div>

              <div className={`education-timeline-content card ${hasImages ? 'has-image' : ''}`}>
                {hasImages && (
                  <EducationImageSlider images={edu.images} institution={edu.institution} />
                )}
                
                <div className="edu-card-details-side">
                  <div className="edu-meta-row">
                    <div className="edu-meta-left">
                      {edu.logo && (
                        <img 
                          src={process.env.PUBLIC_URL + edu.logo} 
                          alt={`${edu.institution} Logo`} 
                          className="edu-college-logo" 
                        />
                      )}
                      <span className="edu-duration">
                        <Calendar size={14} /> {edu.duration}
                      </span>
                    </div>
                    <div className="edu-meta-divider"></div>
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
