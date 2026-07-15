import React from 'react';
import { BookOpen, Calendar, Building, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import './ResearchPublications.css';

const ResearchPublications = () => {
  const publications = [
    {
      title: "AI-Powered Flight Assistant for NORDO Aviation",
      type: "Conference Paper",
      conference: "ICCISS'26 – Computational Intelligence, Security and Systems",
      organizer: "Department of CSE, Sona College of Technology",
      date: "March 2026",
      status: "Presented",
      description: "An Agentic AI flight assistant providing real-time emergency decision support to pilots during communication-loss (No Radio) scenarios. Features an adaptive Agentic UI designed to dynamically adjust interfaces based on pilot intent and telemetry data.",
      highlights: [
        "Built Retrieval-Augmented Generation (RAG) pipeline over flight manuals.",
        "Architected adaptive UI to orchestrate multi-agent flight workflows.",
        "Integrated real-time sensor ingestion with voice navigation support."
      ],
      certificate: "https://drive.google.com/file/d/1RKeHFVfMGP1N3o0lHHvSQZZhYe_LHPzj/view"
    },
    {
      title: "Cost-Efficient Transformer-Based Demand Forecasting for Retail SMEs",
      type: "Conference Paper",
      conference: "ICMMCISD 2026 – Mathematical Modelling & Computational Intelligence",
      organizer: "Vellore Institute of Technology (VIT) & University of Queensland",
      date: "June 2026",
      status: "Presented",
      description: "A lightweight transformer-based decision intelligence framework designed to optimize demand forecasting and inventory replenishment schedules for small-to-medium retail enterprises operating under severe historical data constraints.",
      highlights: [
        "Adapted self-attention mechanisms to low-resource retail datasets.",
        "Achieved a 14% forecasting error reduction compared to baseline models.",
        "Designed local low-parameter deployment requiring zero expensive cloud GPUs."
      ],
      certificate: "https://drive.google.com/file/d/1f8Tve6MaQupFNGEbwH8NKNKbRYDqs-GP/view"
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="glow-orb glow-orb-blue" style={{ right: "10%", bottom: "20%", opacity: 0.12 }} />

      <div className="section-header">
        <h2 className="section-title">Research Publications</h2>
        <p className="section-subtitle">
          Peer-reviewed international conference papers detailing contributions in Agentic AI, RAG, and deep learning systems.
        </p>
      </div>

      <div className="publications-grid">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="pub-card glass card animate-slide-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Header: Type and Date */}
            <div className="pub-card-header">
              <div className="pub-badges">
                <span className="pub-badge-type">{pub.type}</span>
                <span className="pub-badge-status">{pub.status}</span>
              </div>
              <div className="pub-date-box">
                <Calendar size={14} />
                <span>{pub.date}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="pub-title">{pub.title}</h3>

            {/* Metadata (Conference & Host) */}
            <div className="pub-metadata-group">
              <div className="pub-meta-item">
                <BookOpen size={14} className="meta-icon" />
                <span className="meta-text"><strong>Venue:</strong> {pub.conference}</span>
              </div>
              <div className="pub-meta-item">
                <Building size={14} className="meta-icon" />
                <span className="meta-text"><strong>Organizer:</strong> {pub.organizer}</span>
              </div>
            </div>

            <div className="pub-divider"></div>

            {/* Abstract/Description */}
            <p className="pub-description-text">{pub.description}</p>

            {/* Highlights */}
            <div className="pub-highlights-section">
              <span className="highlights-title">Core Contributions</span>
              <ul className="pub-highlights-list">
                {pub.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="pub-highlight-item">
                    <CheckCircle2 size={14} className="check-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer action link */}
            <div className="pub-card-footer">
              <a
                href={pub.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-action-link"
              >
                <FileText size={16} />
                <span>View Certificate</span>
                <ArrowRight size={14} className="arrow-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPublications;