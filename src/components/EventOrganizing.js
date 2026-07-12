import React from 'react';
import { Calendar, Users } from 'lucide-react';
import './EventOrganizing.css';

const EventOrganizing = () => {
  const events = [
    {
      title: "React Web Development Bootcamp",
      role: "Coordinator & Tech Mentor",
      date: "Feb 2026",
      participants: "120+ Students",
      contributions: [
        "Authored the starter templates and structured core tutorial modules",
        "Conducted live debugging workshops on state, hooks, and responsive layouts",
        "Mentored student groups in deploying their final capstone projects to Vercel"
      ]
    },
    {
      title: "Smart India Hackathon Internal Selection",
      role: "Technical Committee Lead",
      date: "Oct 2025",
      participants: "45 Team submissions",
      contributions: [
        "Drafted standard evaluation templates and set staging grading metrics",
        "Configured sandboxed deployment runtimes for testing backend solutions",
        "Judged candidate pitches on API architectures and system scalability"
      ]
    },
    {
      title: "Algorithmic CSA Code-Sprint",
      role: "Host & Event Organizer",
      date: "Mar 2025",
      participants: "200+ Participants",
      contributions: [
        "Coordinated contest platform setups and configured score logic servers",
        "Curated 8 programming problems on dynamic array lists and graph models",
        "Presented the post-contest code reviews and optimization walkthroughs"
      ]
    }
  ];

  return (
    <div className="events-container">
      <h3 className="sub-section-title">Leadership & Events Organized</h3>
      <p className="events-subtitle-text">
        Fostering collaborative growth, hosting technical sessions, and organizing hackathons.
      </p>

      <div className="events-grid">
        {events.map((evt, idx) => (
          <div key={idx} className="event-card glass card animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
            <div className="event-card-top">
              <span className="event-date">
                <Calendar size={14} /> {evt.date}
              </span>
              <span className="event-participants">
                <Users size={14} /> {evt.participants}
              </span>
            </div>

            <h4 className="event-title">{evt.title}</h4>
            <h5 className="event-role">{evt.role}</h5>

            <div className="event-contributions-box">
              <h6>Key Contributions:</h6>
              <ul className="evt-contrib-list">
                {evt.contributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventOrganizing;
