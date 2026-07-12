import React, { useState } from 'react';
import { Code2, Award, Zap, GitPullRequest, Flame, Star } from 'lucide-react';
import { Github } from './BrandIcons';
import './Contributions.css';

const Contributions = () => {
  const [activeTab, setActiveTab] = useState('github');

  // Simulated GitHub Heatmap data (last 24 weeks, 7 days per week)
  const generateHeatmap = () => {
    const levels = [0, 0, 1, 2, 0, 3, 4, 1, 2, 0, 1, 2, 3, 0, 1, 0, 4, 2, 1, 3, 0, 2, 1, 3];
    const grid = [];
    for (let day = 0; day < 7; day++) {
      const row = [];
      for (let week = 0; week < 24; week++) {
        // cycle through levels with some randomness to look real
        const index = (week * 7 + day) % levels.length;
        row.push(levels[index]);
      }
      grid.push(row);
    }
    return grid;
  };

  const heatmapGrid = generateHeatmap();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <section id="contributions" className="contributions-section">
      <div className="glow-orb" style={{ left: '20%', bottom: '20%' }} />
      
      <div className="section-header">
        <h2 className="section-title">Contributions & Experience</h2>
        <p className="section-subtitle">
          My presence and active participation in top-tier global developer programs.
        </p>
      </div>

      {/* Tabs */}
      <div className="contrib-tabs glass">
        <button 
          className={`contrib-tab ${activeTab === 'github' ? 'active' : ''}`}
          onClick={() => setActiveTab('github')}
        >
          <Github size={18} /> GitHub Profile
        </button>
        <button 
          className={`contrib-tab ${activeTab === 'google' ? 'active' : ''}`}
          onClick={() => setActiveTab('google')}
        >
          <Code2 size={18} /> Google for Developers
        </button>
        <button 
          className={`contrib-tab ${activeTab === 'amd' ? 'active' : ''}`}
          onClick={() => setActiveTab('amd')}
        >
          <Award size={18} /> AMD Developer Program
        </button>
      </div>

      {/* Content Area */}
      <div className="contrib-content">
        {activeTab === 'github' && (
          <div className="github-widget glass card animate-slide-up">
            <div className="widget-header">
              <div className="user-profile">
                <div className="avatar-placeholder">KR</div>
                <div>
                  <h4>Kanishkar R</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">@CaneCilia</a>
                </div>
              </div>
              <div className="repo-stats-summary">
                <div className="stat-badge">
                  <Star size={14} className="text-yellow" /> 18 Stars
                </div>
                <div className="stat-badge">
                  <GitPullRequest size={14} className="text-blue" /> 42 PRs
                </div>
              </div>
            </div>

            {/* Grid statistics */}
            <div className="github-stats-grid">
              <div className="stat-card glass">
                <Flame className="stat-icon text-red" size={24} />
                <span className="stat-number">45 Days</span>
                <span className="stat-label">Current Streak</span>
              </div>
              <div className="stat-card glass">
                <GitPullRequest className="stat-icon text-blue" size={24} />
                <span className="stat-number">1,432</span>
                <span className="stat-label">Total Commits</span>
              </div>
              <div className="stat-card glass">
                <Code2 className="stat-icon text-purple" size={24} />
                <span className="stat-number">18</span>
                <span className="stat-label">Public Repos</span>
              </div>
            </div>

            {/* Heatmap Widget */}
            <div className="heatmap-container glass">
              <div className="heatmap-months">
                {months.map((m, idx) => (
                  <span key={idx} className="month-label">{m}</span>
                ))}
              </div>
              <div className="heatmap-grid-wrapper">
                <div className="heatmap-days">
                  {weekDays.map((d, idx) => (
                    <span key={idx} className="day-label">{idx % 2 === 0 ? d : ''}</span>
                  ))}
                </div>
                <div className="heatmap-grid">
                  {heatmapGrid.map((row, rIdx) => (
                    <div key={rIdx} className="heatmap-row">
                      {row.map((cell, cIdx) => (
                        <div 
                          key={cIdx} 
                          className={`heatmap-cell level-${cell}`}
                          title={`Commit Activity Level: ${cell}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="heatmap-legend">
                <span>Less</span>
                <div className="heatmap-cell level-0"></div>
                <div className="heatmap-cell level-1"></div>
                <div className="heatmap-cell level-2"></div>
                <div className="heatmap-cell level-3"></div>
                <div className="heatmap-cell level-4"></div>
                <span>More</span>
              </div>
            </div>

            {/* Languages and Repo Stats */}
            <div className="languages-breakdown">
              <h5>Languages Used</h5>
              <div className="language-bar">
                <div className="lang-segment js" style={{ width: '45%' }} title="JavaScript 45%"></div>
                <div className="lang-segment python" style={{ width: '35%' }} title="Python 35%"></div>
                <div className="lang-segment htmlcss" style={{ width: '12%' }} title="HTML/CSS 12%"></div>
                <div className="lang-segment other" style={{ width: '8%' }} title="Others 8%"></div>
              </div>
              <div className="language-labels">
                <span className="lang-label"><span className="dot js-dot"></span> JavaScript (45%)</span>
                <span className="lang-label"><span className="dot py-dot"></span> Python (35%)</span>
                <span className="lang-label"><span className="dot hc-dot"></span> HTML/CSS (12%)</span>
                <span className="lang-label"><span className="dot ot-dot"></span> Others (8%)</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'google' && (
          <div className="google-widget glass card animate-slide-up">
            <div className="widget-header">
              <div className="platform-info">
                <div className="g-logo">G</div>
                <div>
                  <h4>Google Developer Profile</h4>
                  <span className="member-since">Active Developer Member</span>
                </div>
              </div>
              <span className="google-status-badge glass">Verified Profile</span>
            </div>

            <div className="google-contributions-grid">
              <div className="contributions-panel glass">
                <h5>Platform Contributions</h5>
                <ul className="contributions-list">
                  <li>
                    <strong>Developer Console</strong>
                    <p>Published 2 testing apps using Firebase Authentications and Realtime Storage.</p>
                  </li>
                  <li>
                    <strong>Google Cloud Skills Boost</strong>
                    <p>Completed Cloud Fundamentals and Core Infrastructure quest labs.</p>
                  </li>
                  <li>
                    <strong>Gemini Prompting Quests</strong>
                    <p>Participated in prompt engineering challenges with multi-modal configurations.</p>
                  </li>
                </ul>
              </div>

              <div className="badges-panel glass">
                <h5>Earned Badges</h5>
                <div className="badges-grid">
                  <div className="badge-item" title="Google Cloud Fundamentals">
                    <div className="badge-icon cloud-badge">☁️</div>
                    <span>Cloud Base</span>
                  </div>
                  <div className="badge-item" title="Firebase Deployment Badge">
                    <div className="badge-icon fb-badge">🔥</div>
                    <span>Firebase</span>
                  </div>
                  <div className="badge-item" title="Gemini APIs Integration Certificate">
                    <div className="badge-icon AI-badge">♊</div>
                    <span>Gemini AI</span>
                  </div>
                  <div className="badge-item" title="Android Development Foundations">
                    <div className="badge-icon ad-badge">🤖</div>
                    <span>Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'amd' && (
          <div className="amd-widget glass card animate-slide-up">
            <div className="widget-header">
              <div className="platform-info">
                <div className="amd-logo">AMD</div>
                <div>
                  <h4>AMD Developer Central</h4>
                  <span className="member-since">ROCm Compute Developer</span>
                </div>
              </div>
              <span className="amd-status-badge glass">Member</span>
            </div>

            <div className="amd-activities">
              <div className="activity-card glass">
                <Award className="act-icon text-purple" size={24} />
                <div>
                  <h6>GPU Computing Forums</h6>
                  <p>Contributed to optimization threads related to running lightweight LLMs on custom client hardware.</p>
                </div>
              </div>
              
              <div className="activity-card glass">
                <Code2 className="act-icon text-blue" size={24} />
                <div>
                  <h6>ROCm Tooling Explorer</h6>
                  <p>Explored AMD ROCm architecture compatibility with PyTorch, testing tensor operations and cuda fallback modes.</p>
                </div>
              </div>

              <div className="activity-card glass">
                <Zap className="act-icon text-yellow" size={24} />
                <div>
                  <h6>AI Acceleration Badge</h6>
                  <p>Achieved completion status in AMD's beginner computing webinars for model deployment acceleration.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contributions;
