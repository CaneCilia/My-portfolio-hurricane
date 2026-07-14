import React from 'react';
import { Calendar, Users } from 'lucide-react';
import './EventOrganizing.css';

const EventOrganizing = () => {
  const events = [
    {
      title: "Appathon '25",
      role: "Event Organizer",
      date: "April 2025",
      participants: "100+ Participants",
      image: "/images/Appathon.png",
      contributions: [
        "Planned and coordinated the end-to-end execution of the Appathon event.",
        "Managed participant registrations, event scheduling, and technical logistics.",
        "Collaborated with mentors and judges to ensure smooth project evaluations."
      ]
    },
    {
      title: "Google Developer Groups- Build with AI",
      role: "Event Organizer",
      date: "March 11, 2025",
      participants: "80+ Participants",
      image: "/images/Built with AI.png",
      contributions: [
        "Organized Google's 'Build with AI' community event focused on Generative AI technologies.",
        "Coordinated speaker sessions, hands-on AI workshops, and participant engagement.",
        "Facilitated networking opportunities between students, developers, and industry professionals."
      ]
    }
  ];

  return (
    <section id="events" className="events-section">
      <h3 className="sub-section-title">Leadership & Events Organized</h3>
      <p className="events-subtitle-text">
        Fostering collaborative growth, hosting technical sessions, and organizing hackathons.
      </p>

      <div className="events-grid">
        {events.map((evt, idx) => (
          <div key={idx} className="event-card glass card animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
            {evt.image && (
              <div className={`event-card-banner banner-${evt.title.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                <img 
                  src={process.env.PUBLIC_URL + evt.image} 
                  alt={evt.title} 
                  className={`event-banner-img img-${evt.title.toLowerCase().replace(/[^a-z0-9]/g, '')}`} 
                />
              </div>
            )}
            
            <div className="event-card-content">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventOrganizing;
