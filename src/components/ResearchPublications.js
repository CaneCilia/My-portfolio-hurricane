import React from 'react';
import { BookOpen, ExternalLink, Award, FileText } from 'lucide-react';
import './ResearchPublications.css';

const ResearchPublications = () => {
  const publications = [
    {
      title: "Automated Crop Disease Detection using Deep Learning Architectures",
      type: "Journal Paper",
      journal: "International Journal of Computer Engineering & Science",
      date: "Nov 2025",
      link: "https://example.com",
      description: "Engineered a custom convolutional neural network structure that parses high-resolution agricultural leaf images to diagnose crop infections, achieving a 94.6% validation accuracy.",
      learnings: "Obtained deep skills in image pre-processing configurations, model layer pruning, and vector spatial convolutions."
    },
    {
      title: "Edge Computing for LLM Agents: Optimizing Localized Execution Constraints",
      type: "Conference Paper",
      journal: "National Conference on Advanced AI Systems",
      date: "Aug 2025",
      link: "https://example.com",
      description: "Analyzed memory consumption profiles and latency spikes when executing lightweight quantized LLM models directly on resource-constrained micro-controllers and client hardware.",
      learnings: "Investigated neural quantization protocols, ROCm acceleration paths, and API fallback pipelines."
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="glow-orb" style={{ right: '15%', top: '20%' }} />

      <div className="section-header">
        <h2 className="section-title">Research & Publications</h2>
        <p className="section-subtitle">
          My academic investigations, conference proceedings, and journal contributions.
        </p>
      </div>

      <div className="publications-grid">
        {publications.map((pub, idx) => (
          <div key={idx} className="pub-card glass card animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
            <div className="pub-header">
              <span className="pub-tag">{pub.type}</span>
              <span className="pub-date">{pub.date}</span>
            </div>

            <h3 className="pub-title">{pub.title}</h3>
            
            <div className="pub-meta">
              <BookOpen size={16} />
              <span>{pub.journal}</span>
            </div>

            <p className="pub-desc">{pub.description}</p>

            <div className="pub-learnings glass">
              <strong><Award size={14} /> Key Contribution:</strong>
              <p>{pub.learnings}</p>
            </div>

            <div className="pub-footer">
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="view-pub-btn glow-btn glow-btn-secondary">
                <FileText size={16} /> View Full Paper <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPublications;
