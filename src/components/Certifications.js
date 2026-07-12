import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Solutions Architect - Associate",
      org: "Amazon Web Services (AWS)",
      date: "Jan 2026",
      link: "https://aws.amazon.com",
      accent: "linear-gradient(135deg, #FF9900, #232F3E)"
    },
    {
      name: "Deep Learning Specialization",
      org: "DeepLearning.AI",
      date: "Nov 2025",
      link: "https://coursera.org",
      accent: "linear-gradient(135deg, #1e3a8a, #0284c7)"
    },
    {
      name: "Associate Cloud Engineer",
      org: "Google Cloud Platform (GCP)",
      date: "Aug 2025",
      link: "https://cloud.google.com",
      accent: "linear-gradient(135deg, #4285F4, #34A853)"
    },
    {
      name: "PostgreSQL Database Administration",
      org: "University of Michigan (Coursera)",
      date: "June 2025",
      link: "https://coursera.org",
      accent: "linear-gradient(135deg, #336791, #1e293b)"
    }
  ];

  return (
    <div className="certs-container">
      <h3 className="sub-section-title">Certifications & Credentials</h3>
      <p className="certs-subtitle-text">
        Verified competency in cloud engineering, AI models, and scalable databases.
      </p>

      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card glass card animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="cert-preview-box" style={{ background: cert.accent }}>
              <Award size={36} className="cert-icon-glow" />
              <span>{cert.org}</span>
            </div>

            <div className="cert-info-box">
              <h4>{cert.name}</h4>
              <div className="cert-meta">
                <span className="cert-date">
                  <Calendar size={12} /> Issued: {cert.date}
                </span>
                <span className="cert-verified">
                  <ShieldCheck size={12} className="text-blue" /> Verified
                </span>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-link glass">
                Verify Credential <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
