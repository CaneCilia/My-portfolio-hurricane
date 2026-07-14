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
    },
    {
      name: "Principles of Generative AI",
      org: "Infosys Springboard",
      date: "Jun 2025",
      link: "#",
      accent: "linear-gradient(135deg, #007CC3, #00AEEF)",
      logo: (
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#007CC3">
          <rect width="24" height="24" rx="4" />
          <text x="3" y="16" fill="white" fontFamily="var(--font-sans)" fontSize="10">Infy</text>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#13AA52">
          <path d="M12 1.5c-.32 0-.64.08-.94.24l-7.5 4c-.95.5-1.56 1.5-1.56 2.58v8.36c0 1.08.6 2.08 1.56 2.58l7.5 4c.3.16.62.24.94.24s.64-.08.94-.24l7.5-4c.95-.5 1.56-1.5 1.56-2.58V8.32c0-1.08-.6-2.08-1.56-2.58l-7.5-4c-.3-.16-.62-.24-.94-.24zm0 2.86l6.38 3.4L12 11.16 5.62 7.76 12 4.36zM3.5 9.7L11 13.7v8.52L3.5 18.22V9.7zm17 0v8.52L13 22.22V13.7l7.5-4z"/>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#FF9900">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.132 16.59c-.43.513-.984.81-1.572.852-.894.06-1.74-.324-2.21-.99-.072-.102-.132-.216-.174-.336l-.012-.03c-.276-.816-.96-1.398-1.794-1.536-.78-.132-1.56.096-2.148.624l-.192.174c-.588.528-1.392.768-2.172.636-.93-.162-1.68-.828-1.92-1.722-.24-.9-.012-1.854.606-2.52.888-.948 2.148-1.488 3.468-1.488 1.134 0 2.22.402 3.06 1.134.42-.486.966-.78 1.566-.828.87-.06 1.704.306 2.172.954.108.15.192.318.252.492l.012.036c.27.816.942 1.404 1.776 1.548.78.132 1.572-.096 2.16-.63l.168-.15c.57-.528 1.344-.768 2.112-.66.93.138 1.698.786 1.968 1.674.276.882.072 1.836-.522 2.514-.882.996-2.178 1.572-3.528 1.572-1.122 0-2.196-.402-3.036-1.122z"/>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#007CC3">
          <rect width="24" height="24" rx="4" />
          <text x="3" y="16" fill="white" fontFamily="var(--font-sans)" fontSize="10">Infy</text>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#049FD9">
          <path d="M2.4 15.6V8.4h1.2v7.2zm2.4 2.4V6h1.2v12zm2.4-2.4V8.4h1.2v7.2zm2.4 4.8V3.6h1.2v16.8zm2.4-4.8V8.4h1.2v7.2zm2.4 2.4V6h1.2v12zm2.4-2.4V8.4h1.2v7.2zM21.6 20.4V3.6h1.2v16.8z"/>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#049FD9">
          <path d="M2.4 15.6V8.4h1.2v7.2zm2.4 2.4V6h1.2v12zm2.4-2.4V8.4h1.2v7.2zm2.4 4.8V3.6h1.2v16.8zm2.4-4.8V8.4h1.2v7.2zm2.4 2.4V6h1.2v12zm2.4-2.4V8.4h1.2v7.2zM21.6 20.4V3.6h1.2v16.8z"/>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#00C7B7">
          <rect width="24" height="24" rx="4" />
          <text x="3" y="16" fill="white" fontFamily="var(--font-sans)" fontSize="10">SS</text>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#F1502F">
          <rect width="24" height="24" rx="4" />
          <text x="3" y="16" fill="white" fontFamily="var(--font-sans)" fontSize="10">SL</text>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#007CC3">
          <rect width="24" height="24" rx="4" />
          <text x="3" y="16" fill="white" fontFamily="var(--font-sans)" fontSize="10">Infy</text>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#FA4616">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
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
        <svg viewBox="0 0 24 24" className="provider-logo-svg" fill="#8B5CF6">
          <rect width="24" height="24" rx="4" />
          <text x="2" y="15" fill="white" fontFamily="var(--font-sans)" fontSize="8">NPTEL</text>
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
