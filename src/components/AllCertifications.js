import React from 'react';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import './AllCertifications.css';

const AllCertifications = ({ onBack }) => {
  const certifications = [
    {
      name: "Oracle Cloud Infrastructure AI Foundations Associate",
      org: "Oracle",
      date: "Oct 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=22DA43035FA2AE7624A5EF1409D2013197456CC0DFD5E9AB35E3F901C9FA935A",
      accent: "linear-gradient(135deg, #F80000, #C74634)",
      logo: (
        <svg viewBox="0 0 100 60" className="provider-logo-svg" fill="#F80000">
          <path d="M50 5C27.9 5 10 16.2 10 30c0 13.8 17.9 25 40 25s40-11.2 40-25C90 16.2 72.1 5 50 5zm0 37.5c-15.2 0-27.5-7.8-27.5-17.5s12.3-17.5 27.5-17.5 27.5 7.8 27.5 17.5-12.3 17.5-27.5 17.5z" />
        </svg>
      )
    },
    {
      name: "Machine Learning Operations (MLOps) for Generative AI",
      org: "Google",
      date: "Jul 2025",
      credential: "17053654",
      link: "https://www.skills.google/public_profiles/bd07bebe-1115-41b4-b520-f446415e626d/badges/17053654?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      accent: "linear-gradient(135deg, #4285F4, #34A853)",
      logo: (
        <svg viewBox="0 0 24 24" className="provider-logo-svg">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z" />
        </svg>
      )
    },
    {
      name: "Use Machine Learning APIs on Google Cloud",
      org: "Google",
      date: "Jun 2025",
      credential: "16383153",
      link: "https://www.skills.google/public_profiles/bd07bebe-1115-41b4-b520-f446415e626d/badges/16383153?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      accent: "linear-gradient(135deg, #4285F4, #34A853)",
      logo: (
        <svg viewBox="0 0 24 24" className="provider-logo-svg">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z" />
        </svg>
      )
    },
    {
      name: "Principles of Generative AI",
      org: "Infosys Springboard",
      date: "Jun 2025",
      link: "https://drive.google.com/file/d/1tYfz1_ruWPNMB-4Ffl-ESDLJY_iFH2EI/view",
      accent: "linear-gradient(135deg, #007CC3, #00AEEF)",
      logo: (
        <svg viewBox="0 0 100 30" className="provider-logo-svg">
          <path fill="#007CC3" d="M12 5h4v16h-4zm7 0h3v2.5c.8-1.2 2.2-2.5 4.5-2.5 3.5 0 5.5 2 5.5 5.5V21h-4v-7c0-2.2-1-3.2-2.5-3.2-1.8 0-3.5 1.5-3.5 3.5V21h-4zm24 5c-1 0-2 .2-2.8.6v10.8c.8.4 1.8.6 2.8.6 3.5 0 5.5-2 5.5-6.3 0-4-2-6.3-5.5-6.3zm0-3.5c6.5 0 9.5 3.5 9.5 9.8s-3 9.8-9.5 9.8c-1.5 0-3-.3-4.5-.8V26h-4V5.5h4v4.3c1.5-.5 3-.8 4.5-.8zm15.5 7.3c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5zm11 11.7l6.8-15h4.2l-9.2 19.5h-4.2l3-6.2-5.6-13.3h4.2zm17.5-2.5c0-1.8-1.2-2.5-3.2-2.5-1.8 0-3.2.8-3.2 2.5 0 3.5 9.5 2 9.5 7.2 0 3.5-3 5.5-6.8 5.5-2.5 0-5-.8-6.2-1.8l1.8-2.8c1.2 1 3 1.6 4.4 1.6 1.8 0 3.2-.8 3.2-2.5 0-3.5-9.5-2-9.5-7.2 0-3.5 3-5.5 6.8-5.5 2.2 0 4.2.6 5.5 1.5z" />
        </svg>
      )
    },
    {
      name: "MongoDB Basics for Students",
      org: "MongoDB",
      date: "Jun 2025",
      link: "https://www.credly.com/badges/c1fc9ffc-3be3-4c70-8dde-ec85a1b259a0/public_url",
      accent: "linear-gradient(135deg, #13AA52, #0B6B3A)",
      logo: (
        <svg viewBox="0 0 32 32" className="provider-logo-svg">
          <path fill="#13AA52" d="M20.2 13.4c-.8-2.9-2.3-5.5-4.2-7.8-.5-.6-1-.6-1.5 0-1.9 2.3-3.4 4.9-4.2 7.8-.8 3 0 6 1.7 8.3 1.8 2.4 4.3 3.9 4.3 3.9s2.5-1.5 4.3-3.9c1.7-2.3 2.5-5.3 1.6-8.3z" />
          <path fill="#118843" d="M16 4.5v22c0 0 2.5-1.5 4.3-3.9 1.7-2.3 2.5-5.3 1.6-8.3-.8-2.9-2.3-5.5-4.2-7.8-.5-.6-1-.6-1.7 0z" />
          <path fill="#49A466" d="M16 1.5c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5s.5-.2.5-.5V2c0-.3-.2-.5-.5-.5zM16 27.5c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5s.5-.2.5-.5V28c0-.3-.2-.5-.5-.5z" />
        </svg>
      )
    },
    {
      name: "AWS APAC - Solutions Architecture Job Simulation",
      org: "Forage",
      date: "Jun 2025",
      credential: "rtDTog3QbhLwrnKsy",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_4EG3LTERX2GP76nWy_1749014547148_completion_certificate.pdf",
      accent: "linear-gradient(135deg, #FF9900, #232F3E)",
      logo: (
        <svg viewBox="0 0 120 40" className="provider-logo-svg">
          <rect width="120" height="40" rx="6" fill="#1F2937" />
          <text x="15" y="26" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="800" fontSize="18" letterSpacing="1">FORAGE</text>
          <circle cx="102" cy="18" r="4" fill="#FF9900" />
        </svg>
      )
    },
    {
      name: "Networking Basics",
      org: "Cisco",
      date: "Feb 2025",
      link: "https://www.credly.com/badges/9fad03fb-60e0-40a9-accc-7f75a6bd4eb5",
      accent: "linear-gradient(135deg, #049FD9, #0A5E92)",
      logo: (
        <svg viewBox="0 0 40 24" className="provider-logo-svg">
          <path fill="#049FD9" d="M4 14v4h2v-4H4zm4-3v7h2v-7H8zm4-3v10h2V8h-2zm4-4v14h2V4h-2zm4 4v10h2V8h-2zm4 3v7h2v-7h-2zm4 3v4h2v-4h-2z" />
        </svg>
      )
    },
    {
      name: "Data Analytics Essentials",
      org: "Cisco",
      date: "Feb 2025",
      link: "https://www.credly.com/badges/d123fc03-c18f-4d85-9440-373d74b310c2",
      accent: "linear-gradient(135deg, #049FD9, #0A5E92)",
      logo: (
        <svg viewBox="0 0 40 24" className="provider-logo-svg">
          <path fill="#049FD9" d="M4 14v4h2v-4H4zm4-3v7h2v-7H8zm4-3v10h2V8h-2zm4-4v14h2V4h-2zm4 4v10h2V8h-2zm4 3v7h2v-7h-2zm4 3v4h2v-4h-2z" />
        </svg>
      )
    },
    {
      name: "Git Training - Version Controller",
      org: "Simplilearn",
      date: "Mar 2025",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI3NTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC84MDA2NzkyXzgzNTM2MjUxNzQxMjgyMTg2OTE5LnBuZyIsInVzZXJuYW1lIjoiS2FuaXNoa2FyIFJhdmljaGFuZHJhbiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F2823%2FGIT%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1611641402373484845&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV97RMcyp1K8wvD0qyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAHw6k%2BNBAAAA",
      accent: "linear-gradient(135deg, #F1502F, #24292F)",
      logo: (
        <svg viewBox="0 0 120 30" className="provider-logo-svg">
          <rect width="120" height="30" rx="4" fill="#0A2540" />
          <text x="10" y="20" fill="#FF8C00" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="13">simpli</text>
          <text x="50" y="20" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="13">learn</text>
        </svg>
      )
    },
    {
      name: "UiPath Automation Explorer Training",
      org: "UiPath",
      date: "Oct 2024",
      credential: "118199495",
      link: "https://credentials.uipath.com/f2e0b774-b7f6-4d34-96fb-90ca4736a2b7",
      accent: "linear-gradient(135deg, #FA4616, #121212)",
      logo: (
        <svg viewBox="0 0 120 40" className="provider-logo-svg">
          <path fill="#FA4616" d="M15 10c-5.5 0-10 4.5-10 10s4.5 10 10 10c3.5 0 6.6-1.8 8.4-4.5h4.2C25.5 28.6 20.6 32 15 32 8.4 32 3 26.6 3 20S8.4 8 15 8c5.6 0 10.5 3.4 12.6 6.5h-4.2C21.6 11.8 18.5 10 15 10z" />
          <path fill="#FFFFFF" d="M22 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
          <text x="35" y="26" fill="#FFFFFF" fontFamily="var(--font-sans)" fontWeight="800" fontSize="16">UiPath</text>
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
