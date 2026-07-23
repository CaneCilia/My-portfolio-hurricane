import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import './AllCertifications.css';

const AllCertifications = ({ onBack }) => {
  const certifications = [
    {
      name: "Oracle Cloud Infrastructure AI Foundations Associate",
      org: "Oracle",
      date: "Oct 2025",
      link: "#",
      accent: "linear-gradient(135deg, #F80000, #C74634)",
      logo: (
        <svg viewBox="0 0 100 60" className="provider-logo-svg" fill="#F80000" style={{ width: '42px', height: 'auto' }}>
          <path d="M50 5C27.9 5 10 16.2 10 30c0 13.8 17.9 25 40 25s40-11.2 40-25C90 16.2 72.1 5 50 5zm0 37.5c-15.2 0-27.5-7.8-27.5-17.5s12.3-17.5 27.5-17.5 27.5 7.8 27.5 17.5-12.3 17.5-27.5 17.5z"/>
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
    },
    {
      name: "Principles of Generative AI",
      org: "Infosys Springboard",
      date: "Jun 2025",
      link: "#",
      accent: "linear-gradient(135deg, #007CC3, #00AEEF)",
      logo: (
        <svg viewBox="0 0 100 30" className="provider-logo-svg" style={{ width: '62px', height: 'auto' }}>
          <path fill="#007CC3" d="M12 5h4v16h-4zm7 0h3v2.5c.8-1.2 2.2-2.5 4.5-2.5 3.5 0 5.5 2 5.5 5.5V21h-4v-7c0-2.2-1-3.2-2.5-3.2-1.8 0-3.5 1.5-3.5 3.5V21h-4zm24 5c-1 0-2 .2-2.8.6v10.8c.8.4 1.8.6 2.8.6 3.5 0 5.5-2 5.5-6.3 0-4-2-6.3-5.5-6.3zm0-3.5c6.5 0 9.5 3.5 9.5 9.8s-3 9.8-9.5 9.8c-1.5 0-3-.3-4.5-.8V26h-4V5.5h4v4.3c1.5-.5 3-.8 4.5-.8zm15.5 7.3c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5zm11 11.7l6.8-15h4.2l-9.2 19.5h-4.2l3-6.2-5.6-13.3h4.2zm17.5-2.5c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5z"/>
        </svg>
      )
    },
    {
      name: "MongoDB Basics for Students",
      org: "MongoDB",
      date: "Jun 2025",
      link: "#",
      accent: "linear-gradient(135deg, #13AA52, #0B6B3A)",
      logo: (
        <svg viewBox="0 0 32 32" className="provider-logo-svg" style={{ width: '26px', height: '26px' }}>
          <path fill="#13AA52" d="M20.2 13.4c-.8-2.9-2.3-5.5-4.2-7.8-.5-.6-1-.6-1.5 0-1.9 2.3-3.4 4.9-4.2 7.8-.8 3 0 6 1.7 8.3 1.8 2.4 4.3 3.9 4.3 3.9s2.5-1.5 4.3-3.9c1.7-2.3 2.5-5.3 1.6-8.3z"/>
          <path fill="#118843" d="M16 4.5v22c0 0 2.5-1.5 4.3-3.9 1.7-2.3 2.5-5.3 1.6-8.3-.8-2.9-2.3-5.5-4.2-7.8-.5-.6-1-.6-1.7 0z"/>
          <path fill="#49A466" d="M16 1.5c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5s.5-.2.5-.5V2c0-.3-.2-.5-.5-.5zM16 27.5c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5s.5-.2.5-.5V28c0-.3-.2-.5-.5-.5z"/>
        </svg>
      )
    },
    {
      name: "AWS APAC - Solutions Architecture Job Simulation",
      org: "Forage",
      date: "Jun 2025",
      credential: "rtDTog3QbhLwrnKsy",
      link: "#",
      accent: "linear-gradient(135deg, #FF9900, #232F3E)",
      logo: (
        <svg viewBox="0 0 120 40" className="provider-logo-svg" style={{ width: '65px', height: 'auto' }}>
          <rect width="120" height="40" rx="6" fill="#1F2937"/>
          <text x="15" y="26" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="800" fontSize="18" letterSpacing="1">FORAGE</text>
          <circle cx="102" cy="18" r="4" fill="#FF9900" />
        </svg>
      )
    },
    {
      name: "AI-powered Travel App",
      org: "Google for Developers",
      date: "May 2025",
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
      name: "Prompt Engineering",
      org: "Infosys Springboard",
      date: "Jan 2025",
      link: "#",
      accent: "linear-gradient(135deg, #007CC3, #00AEEF)",
      logo: (
        <svg viewBox="0 0 100 30" className="provider-logo-svg" style={{ width: '62px', height: 'auto' }}>
          <path fill="#007CC3" d="M12 5h4v16h-4zm7 0h3v2.5c.8-1.2 2.2-2.5 4.5-2.5 3.5 0 5.5 2 5.5 5.5V21h-4v-7c0-2.2-1-3.2-2.5-3.2-1.8 0-3.5 1.5-3.5 3.5V21h-4zm24 5c-1 0-2 .2-2.8.6v10.8c.8.4 1.8.6 2.8.6 3.5 0 5.5-2 5.5-6.3 0-4-2-6.3-5.5-6.3zm0-3.5c6.5 0 9.5 3.5 9.5 9.8s-3 9.8-9.5 9.8c-1.5 0-3-.3-4.5-.8V26h-4V5.5h4v4.3c1.5-.5 3-.8 4.5-.8zm15.5 7.3c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5zm11 11.7l6.8-15h4.2l-9.2 19.5h-4.2l3-6.2-5.6-13.3h4.2zm17.5-2.5c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5z"/>
        </svg>
      )
    },
    {
      name: "Networking Basics",
      org: "Cisco",
      date: "Feb 2025",
      link: "#",
      accent: "linear-gradient(135deg, #049FD9, #0A5E92)",
      logo: (
        <svg viewBox="0 0 40 24" className="provider-logo-svg" style={{ width: '36px', height: 'auto' }}>
          <path fill="#049FD9" d="M4 14v4h2v-4H4zm4-3v7h2v-7H8zm4-3v10h2V8h-2zm4-4v14h2V4h-2zm4 4v10h2V8h-2zm4 3v7h2v-7h-2zm4 3v4h2v-4h-2z"/>
        </svg>
      )
    },
    {
      name: "Data Analytics Essentials",
      org: "Cisco",
      date: "Feb 2025",
      link: "#",
      accent: "linear-gradient(135deg, #049FD9, #0A5E92)",
      logo: (
        <svg viewBox="0 0 40 24" className="provider-logo-svg" style={{ width: '36px', height: 'auto' }}>
          <path fill="#049FD9" d="M4 14v4h2v-4H4zm4-3v7h2v-7H8zm4-3v10h2V8h-2zm4-4v14h2V4h-2zm4 4v10h2V8h-2zm4 3v7h2v-7h-2zm4 3v4h2v-4h-2z"/>
        </svg>
      )
    },
    {
      name: "Machine Learning",
      org: "Skillshare",
      date: "Mar 2025",
      link: "#",
      accent: "linear-gradient(135deg, #00C7B7, #2B2D42)",
      logo: (
        <svg viewBox="0 0 100 30" className="provider-logo-svg" style={{ width: '70px', height: 'auto' }}>
          <text x="0" y="22" fill="#00FFC7" fontFamily="var(--font-sans)" fontWeight="900" fontSize="16" letterSpacing="0">SKILLSHARE</text>
        </svg>
      )
    },
    {
      name: "Git Training - Version Controller",
      org: "Simplilearn",
      date: "Mar 2025",
      link: "#",
      accent: "linear-gradient(135deg, #F1502F, #24292F)",
      logo: (
        <svg viewBox="0 0 120 30" className="provider-logo-svg" style={{ width: '75px', height: 'auto' }}>
          <rect width="120" height="30" rx="4" fill="#0A2540"/>
          <text x="10" y="20" fill="#FF8C00" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="13">simpli</text>
          <text x="50" y="20" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="13">learn</text>
        </svg>
      )
    },
    {
      name: "Artificial Intelligence Primer",
      org: "Infosys Springboard",
      date: "Nov 2024",
      link: "#",
      accent: "linear-gradient(135deg, #007CC3, #00AEEF)",
      logo: (
        <svg viewBox="0 0 100 30" className="provider-logo-svg" style={{ width: '62px', height: 'auto' }}>
          <path fill="#007CC3" d="M12 5h4v16h-4zm7 0h3v2.5c.8-1.2 2.2-2.5 4.5-2.5 3.5 0 5.5 2 5.5 5.5V21h-4v-7c0-2.2-1-3.2-2.5-3.2-1.8 0-3.5 1.5-3.5 3.5V21h-4zm24 5c-1 0-2 .2-2.8.6v10.8c.8.4 1.8.6 2.8.6 3.5 0 5.5-2 5.5-6.3 0-4-2-6.3-5.5-6.3zm0-3.5c6.5 0 9.5 3.5 9.5 9.8s-3 9.8-9.5 9.8c-1.5 0-3-.3-4.5-.8V26h-4V5.5h4v4.3c1.5-.5 3-.8 4.5-.8zm15.5 7.3c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5zm11 11.7l6.8-15h4.2l-9.2 19.5h-4.2l3-6.2-5.6-13.3h4.2zm17.5-2.5c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5z"/>
        </svg>
      )
    },
    {
      name: "UiPath Automation Explorer Training",
      org: "UiPath",
      date: "Oct 2024",
      credential: "118199495",
      link: "#",
      accent: "linear-gradient(135deg, #FA4616, #121212)",
      logo: (
        <svg viewBox="0 0 120 40" className="provider-logo-svg" style={{ width: '70px', height: 'auto' }}>
          <path fill="#FA4616" d="M15 10c-5.5 0-10 4.5-10 10s4.5 10 10 10c3.5 0 6.6-1.8 8.4-4.5h4.2C25.5 28.6 20.6 32 15 32 8.4 32 3 26.6 3 20S8.4 8 15 8c5.6 0 10.5 3.4 12.6 6.5h-4.2C21.6 11.8 18.5 10 15 10z"/>
          <path fill="#FFFFFF" d="M22 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
          <text x="35" y="26" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16">UiPath</text>
        </svg>
      )
    },
    {
      name: "Design and Implementation of Human Computer Interfaces",
      org: "NPTEL",
      date: "Jun 2024",
      link: "#",
      accent: "linear-gradient(135deg, #8B5CF6, #4338CA)",
      logo: (
        <svg viewBox="0 0 120 35" className="provider-logo-svg" style={{ width: '70px', height: 'auto' }}>
          <rect width="120" height="35" rx="5" fill="#E28743"/>
          <text x="12" y="22" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16" letterSpacing="1">NPTEL</text>
        </svg>
      )
    }
  ];

  return (
    <section className="all-certs-section">
      <div className="all-certs-container">
        {/* Back Button */}
        <button className="certs-back-btn glass" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Portfolio
        </button>

        <div className="all-certs-header">
          <h2 className="all-certs-title">Certifications & Professional Credentials</h2>
          <p className="all-certs-subtitle">
            A comprehensive list of verified credentials, courses, and technical assessments from official providers.
          </p>
        </div>

        <div className="all-certs-grid">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="all-cert-card glass card animate-slide-up"
              style={{ animationDelay: `${(idx % 6) * 50}ms` }}
            >
              <div className="all-cert-provider-row">
                <div className="all-cert-logo-wrapper">
                  {cert.logo}
                </div>
                <div className="all-cert-provider-info">
                  <span className="provider-name">{cert.org}</span>
                  <span className="verify-badge">
                    <ShieldCheck size={12} className="text-blue" fill="currentColor" /> Verified
                  </span>
                </div>
              </div>

              <div className="all-cert-body">
                <h4>{cert.name}</h4>
                <div className="all-cert-meta">
                  <span className="all-cert-date">
                    <Calendar size={12} /> Issued: {cert.date}
                  </span>
                  {cert.credential && (
                    <span className="all-cert-id">
                      ID: {cert.credential}
                    </span>
                  )}
                </div>
              </div>

              <div className="all-cert-actions">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="all-cert-verify-link glass"
                >
                  Verify Credential <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCertifications;
