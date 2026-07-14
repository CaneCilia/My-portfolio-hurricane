import React from 'react';
import { ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import './Certifications.css';

const Certifications = ({ onViewAll }) => {
  const certifications = [
    {
      name: "Oracle Cloud Infrastructure AI Foundations Associate",
      org: "Oracle",
      date: "Oct 2025",
      link: "#",
      accent: "linear-gradient(135deg, #F80000, #C74634)",
      logo: (
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#F80000">
          <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      )
    },
    {
      name: "Machine Learning Operations (MLOps) for Generative AI",
      org: "Google",
      date: "Jul 2025",
      credential: "17053654",
      link: "#",
      accent: "linear-gradient(135deg, #4285F4, #34A853)",
      logo: (
        <svg viewBox="0 0 24 24" className="provider-logo-svg">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z"/>
        </svg>
      )
    },
    {
      name: "Build Real World AI Applications with Gemini and Imagen",
      org: "Google",
      date: "Jun 2025",
      credential: "16673150",
      link: "#",
      accent: "linear-gradient(135deg, #4285F4, #EA4335)",
      logo: (
        <svg viewBox="0 0 24 24" className="provider-logo-svg">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z"/>
        </svg>
      )
    },
    {
      name: "Use Machine Learning APIs on Google Cloud",
      org: "Google",
      date: "Jun 2025",
      credential: "16383153",
      link: "#",
      accent: "linear-gradient(135deg, #4285F4, #34A853)",
      logo: (
        <svg viewBox="0 0 24 24" className="provider-logo-svg">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="certifications" className="certs-section">
      <h3 className="sub-section-title">Certifications & Credentials</h3>

      <p className="certs-subtitle-text">
        Verified competency in cloud engineering, AI models, and scalable databases.
      </p>

      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="cert-card glass card animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="cert-provider-row">
              <div className="cert-logo-wrapper">
                {cert.logo}
              </div>
              <div className="cert-provider-info">
                <span className="provider-name">{cert.org}</span>
                <span className="verify-badge">
                  <ShieldCheck size={12} className="text-blue" fill="currentColor" /> Verified
                </span>
              </div>
            </div>

            <div className="cert-body">
              <h4>{cert.name}</h4>
              <div className="cert-meta">
                <span className="cert-date">
                  <Calendar size={12} /> Issued: {cert.date}
                </span>
                {cert.credential && (
                  <span className="cert-id">
                    ID: {cert.credential}
                  </span>
                )}
              </div>
            </div>

            <div className="cert-actions">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-link glass"
              >
                Verify Credential <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Actions Button */}
      <div className="certs-show-more-box">
        <button 
          className="glow-btn glow-btn-primary certs-show-more-btn"
          onClick={onViewAll}
        >
          Show More Certifications
        </button>
      </div>
    </section>
  );
};

export default Certifications;
