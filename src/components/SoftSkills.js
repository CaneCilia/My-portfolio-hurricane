import React from 'react';
import { Users, Users2, MessageSquare, Brain, Clock, ShieldAlert, Calendar, Mic, RefreshCw } from 'lucide-react';
import './SoftSkills.css';

const SoftSkills = () => {
  const softSkills = [
    {
      name: "Leadership",
      icon: <Users size={24} />,
      desc: "Guiding team initiatives, taking ownership of project deliverables, and fostering growth."
    },
    {
      name: "Team Collaboration",
      icon: <Users2 size={24} />,
      desc: "Coordinating in multi-disciplinary teams, merging branch systems, and aligning team goals."
    },
    {
      name: "Communication",
      icon: <MessageSquare size={24} />,
      desc: "Articulating technical architectural plans and logic to stakeholders and peers clearly."
    },
    {
      name: "Problem Solving",
      icon: <Brain size={24} />,
      desc: "Deconstructing complex bugs systematically, analyzing requirements, and implementing patches."
    },
    {
      name: "Time Management",
      icon: <Clock size={24} />,
      desc: "Iterating fast in short agile sprints, prioritizing mission-critical blockers and logs."
    },
    {
      name: "Critical Thinking",
      icon: <ShieldAlert size={24} />,
      desc: "Evaluating alternative software library paths, analyzing performance bottlenecks and risks."
    },
    {
      name: "Event Coordination",
      icon: <Calendar size={24} />,
      desc: "Organizing and hosting workshops, technical seminars, and hackathon logistics."
    },
    {
      name: "Public Speaking",
      icon: <Mic size={24} />,
      desc: "Presenting tech demos, running group tutorials, and delivering project pitches."
    },
    {
      name: "Adaptability",
      icon: <RefreshCw size={24} />,
      desc: "Quickly learning new tech stacks, adapting to script updates and environment revisions."
    }
  ];

  return (
    <div className="soft-skills-container">
      <h3 className="sub-section-title">Interpersonal & Soft Skills</h3>
      <div className="soft-skills-grid">
        {softSkills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="soft-card glass card animate-slide-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="soft-card-icon">
              {skill.icon}
            </div>
            <h4>{skill.name}</h4>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
