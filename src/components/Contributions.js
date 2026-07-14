import React from 'react';
import { Code2, Zap, ExternalLink, GitFork, Star, Users, BookOpen, Layers } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Contributions.css';

const Contributions = () => {

  const gitHubStats = {
    username: "CaneCilia",
    fullName: "Kanishkar R",
    bio: "Software Developer | AI & Automation Systems Architect",
    avatarUrl: "https://github.com/CaneCilia.png",
    repos: "24+",
    stars: "15+",
    followers: "12+",
    commits: "480+"
  };

  const otherProfiles = [
    {
      id: "linkedin",
      icon: <Linkedin size={22} className="text-linkedin" />,
      platform: "LinkedIn Professional",
      title: "Kanishkar R",
      subtitle: "AI Engineer Intern | SCT AML '26",
      stats: [
        { label: "Connections", value: "400" },
        { label: "Recommendations", value: "5+" },
        { label: "Weekly Views", value: "40+" }
      ],
      description: "Networking and sharing updates on full-stack React systems, database architectures, and retrieval-augmented AI workflows.",
      impact: "Connecting with global developers, contributing to discussions on local LLMs and computing.",
      linkUrl: "https://www.linkedin.com/in/kanishkar42/"
    },
    {
      id: "google",
      icon: <Code2 size={22} className="text-google" />,
      platform: "Google Developer Program",
      title: "Google Cloud & Web Dev",
      subtitle: "Member since 2024",
      stats: [
        { label: "Skill Badges", value: "12" },
        { label: "Compute Engine VM", value: "4" },
        { label: "Firebase Integrations", value: "3" }
      ],
      description: "Deployed full-stack services utilizing Firebase Auth, Realtime Databases, and Cloud Functions. Completed VM compute paths on Google Cloud Skills Boost.",
      impact: "Architected secure data backup policies and cloud API wrappers for enterprise-level parsing scripts.",
      linkUrl: "https://g.dev/kanecodebytecrafter"
    },
    {
      id: "amd",
      icon: <Zap size={22} className="text-amd" />,
      platform: "AMD Developer Central",
      title: "GPU ROCm Compute",
      subtitle: "Machine Learning Tester",
      stats: [
        { label: "PyTorch ROCm Runs", value: "18+" },
        { label: "Quantization Setups", value: "5" },
        { label: "Local LLM Guides", value: "2" }
      ],
      description: "Optimizing ROCm GPU compute workflows with PyTorch. Documented compatibility workflows for running quantized local LLMs on client-side consumer GPUs.",
      impact: "Established functional local development runtimes for running high-parameter models on consumer graphics units.",
      linkUrl: "https://devcommunity.amd.com/u/kanishkar_ravichandr"
    }
  ];

  return (
    <section id="contributions" className="contributions-section">
      <div className="glow-orb glow-orb-purple" style={{ right: '5%', top: '10%', opacity: 0.15 }} />
      
      <div className="section-header">
        <h2 className="section-title">Contributions & Impact</h2>
        <p className="section-subtitle">
          My online presence, open-source activity, and professional profiles across leading developer platforms.
        </p>
      </div>

      <div className="contributions-container">
        {/* Featured GitHub Profile Card */}
        <div className="github-profile-card glass animate-slide-up">
          <div className="github-card-main">
            {/* Profile Info Side */}
            <div className="github-profile-info">
              <div className="github-avatar-wrapper">
                <img src={gitHubStats.avatarUrl} alt={gitHubStats.fullName} className="github-avatar" />
                <span className="github-badge-pulse"></span>
              </div>
              
              <div className="github-user-meta">
                <div className="github-brand-label">
                  <Github size={18} />
                  <span>GitHub Profile</span>
                </div>
                <h3>{gitHubStats.fullName}</h3>
                <a 
                  href={`https://github.com/${gitHubStats.username}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-handle"
                >
                  @{gitHubStats.username} <ExternalLink size={12} />
                </a>
                <p className="github-bio">{gitHubStats.bio}</p>
              </div>
            </div>

            {/* Quick Stats Side */}
            <div className="github-quick-stats">
              <div className="github-stat-item">
                <div className="github-stat-icon-box">
                  <Layers size={18} />
                </div>
                <div className="github-stat-values">
                  <span className="github-stat-num">{gitHubStats.repos}</span>
                  <span className="github-stat-label">Repositories</span>
                </div>
              </div>
              
              <div className="github-stat-item">
                <div className="github-stat-icon-box">
                  <Star size={18} />
                </div>
                <div className="github-stat-values">
                  <span className="github-stat-num">{gitHubStats.stars}</span>
                  <span className="github-stat-label">Stars Earned</span>
                </div>
              </div>
              
              <div className="github-stat-item">
                <div className="github-stat-icon-box">
                  <Users size={18} />
                </div>
                <div className="github-stat-values">
                  <span className="github-stat-num">{gitHubStats.followers}</span>
                  <span className="github-stat-label">Followers</span>
                </div>
              </div>

              <div className="github-stat-item">
                <div className="github-stat-icon-box">
                  <GitFork size={18} />
                </div>
                <div className="github-stat-values">
                  <span className="github-stat-num">{gitHubStats.commits}</span>
                  <span className="github-stat-label">Total Commits</span>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Contribution Graph */}
          <div className="github-graph-section">
            <div className="github-graph-header">
              <div className="github-graph-title-box">
                <BookOpen size={16} />
                <h4>Commit Contribution Graph</h4>
              </div>
              <span className="github-graph-desc">Last 12 Months Activity</span>
            </div>
            
            <div className="github-chart-wrapper">
              <img 
                src={`https://ghchart.rshah.org/8b5cf6/${gitHubStats.username}`} 
                alt={`${gitHubStats.username}'s GitHub Contribution Chart`}
                className="github-chart-img"
              />
            </div>
            
            <div className="github-graph-footer">
              <div className="chart-legend">
                <span>Less</span>
                <span className="legend-cell lvl-0"></span>
                <span className="legend-cell lvl-1"></span>
                <span className="legend-cell lvl-2"></span>
                <span className="legend-cell lvl-3"></span>
                <span className="legend-cell lvl-4"></span>
                <span>More</span>
              </div>
              
              <a 
                href={`https://github.com/${gitHubStats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link-btn"
              >
                Explore GitHub Repositories <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Other Platform Cards Header */}
        <h3 className="sub-section-title animate-slide-up" style={{ animationDelay: '100ms' }}>
          Additional Professional Platforms
        </h3>

        {/* Grid of other platform cards */}
        <div className="other-platforms-grid">
          {otherProfiles.map((item, idx) => {
            const isLinkedIn = item.id === 'linkedin';
            const isGoogle = item.id === 'google';
            const isAMD = item.id === 'amd';

            return (
              <div 
                key={item.id} 
                className={`platform-profile-card glass card animate-slide-up ${item.id}-card`} 
                style={{ animationDelay: `${150 + idx * 50}ms` }}
              >
                {/* Visual Banner */}
                <div className={`platform-card-banner ${item.id}-banner`}>
                  {isLinkedIn && <img src={process.env.PUBLIC_URL + "/icons/linkedin.png"} alt="LinkedIn Banner Logo" className="banner-logo-img" />}
                  {isGoogle && <img src={process.env.PUBLIC_URL + "/icons/search.png"} alt="Google Banner Logo" className="banner-logo-img" />}
                  {isAMD && <img src={process.env.PUBLIC_URL + "/icons/amd.png"} alt="AMD Banner Logo" className="banner-logo-img" />}
                </div>

                {isLinkedIn && (
                  <>
                    <div className="platform-card-header">
                      <div className="platform-avatar-wrapper">
                        <img src={gitHubStats.avatarUrl} alt="Kanishkar R" className="platform-avatar" />
                        <div className="platform-icon-badge linkedin-icon-badge">
                          {item.icon}
                        </div>
                      </div>
                      <div className="platform-meta">
                        <span className="platform-tag">{item.platform}</span>
                        <h4 className="platform-title">{item.title}</h4>
                        <span className="platform-subtitle">{item.subtitle}</span>
                      </div>
                    </div>

                    <div className="platform-stats-row linkedin-stats">
                      {item.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="platform-stat-cell">
                          <span className="platform-stat-val">{stat.value}</span>
                          <span className="platform-stat-lbl">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <p className="platform-desc">{item.description}</p>

                    <div className="linkedin-skills-tags">
                      <span className="skill-tag">Full-Stack React</span>
                      <span className="skill-tag">AI Workflows</span>
                      <span className="skill-tag">Database Ops</span>
                    </div>

                    <div className="platform-impact-box">
                      <span className="platform-impact-tag">Key Impact</span>
                      <p className="platform-impact-text">{item.impact}</p>
                    </div>
                  </>
                )}

                {isGoogle && (
                  <>
                    <div className="platform-card-header">
                      <div className="platform-icon-wrapper google-icon-wrapper">
                        {item.icon}
                      </div>
                      <div className="platform-meta">
                        <span className="platform-tag">{item.platform}</span>
                        <h4 className="platform-title">{item.title}</h4>
                        <span className="platform-subtitle">{item.subtitle}</span>
                      </div>
                    </div>

                    <div className="google-badges-showcase">
                      <div className="google-badge-item gcp">
                        <div className="badge-circle">GCP</div>
                        <span className="badge-label">Cloud</span>
                      </div>
                      <div className="google-badge-item ml">
                        <div className="badge-circle">ML</div>
                        <span className="badge-label">TensorFlow</span>
                      </div>
                      <div className="google-badge-item firebase">
                        <div className="badge-circle">FB</div>
                        <span className="badge-label">Firebase</span>
                      </div>
                      <div className="google-badge-item android">
                        <div className="badge-circle">AND</div>
                        <span className="badge-label">Android</span>
                      </div>
                    </div>

                    <p className="platform-desc">{item.description}</p>

                    <div className="platform-stats-row google-stats">
                      {item.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="platform-stat-cell">
                          <span className="platform-stat-val">{stat.value}</span>
                          <span className="platform-stat-lbl">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="platform-impact-box">
                      <span className="platform-impact-tag">Key Impact</span>
                      <p className="platform-impact-text">{item.impact}</p>
                    </div>
                  </>
                )}

                {isAMD && (
                  <>
                    <div className="platform-card-header">
                      <div className="platform-icon-wrapper amd-icon-wrapper">
                        {item.icon}
                      </div>
                      <div className="platform-meta">
                        <span className="platform-tag">{item.platform}</span>
                        <h4 className="platform-title">{item.title}</h4>
                        <span className="platform-subtitle">{item.subtitle}</span>
                      </div>
                    </div>

                    <div className="amd-gpu-metrics">
                      <div className="metric-header">
                        <span>ROCm PyTorch Inference</span>
                        <span className="metric-val">3.4x Speedup</span>
                      </div>
                      <div className="metric-bar-container">
                        <div className="metric-bar-fill" style={{ width: '85%' }}></div>
                      </div>
                      <div className="metric-labels">
                        <span>ROCm GPU: 45 t/s</span>
                        <span>CPU Base: 13 t/s</span>
                      </div>
                    </div>

                    <p className="platform-desc">{item.description}</p>

                    <div className="platform-stats-row amd-stats">
                      {item.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="platform-stat-cell">
                          <span className="platform-stat-val">{stat.value}</span>
                          <span className="platform-stat-lbl">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="platform-impact-box">
                      <span className="platform-impact-tag">Key Impact</span>
                      <p className="platform-impact-text">{item.impact}</p>
                    </div>
                  </>
                )}

                <a 
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-visit-btn"
                >
                  Visit Profile <ExternalLink size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contributions;
