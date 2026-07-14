import React from 'react';
import {
  Users,
  Users2,
  MessageSquare,
  Brain,
  ShieldAlert,
  Calendar,
  RefreshCw
} from 'lucide-react';
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
      desc: "Coordinating in multi-disciplinary teams, aligning team goals, and contributing effectively."
    },
    {
      name: "Communication",
      icon: <MessageSquare size={24} />,
      desc: "Explaining technical concepts clearly and collaborating effectively with teams and stakeholders."
    },
    {
      name: "Problem Solving",
      icon: <Brain size={24} />,
      desc: "Analyzing complex challenges, identifying root causes, and implementing effective solutions."
    },
    {
      name: "Critical Thinking",
      icon: <ShieldAlert size={24} />,
      desc: "Evaluating multiple approaches, optimizing solutions, and making informed technical decisions."
    },
    {
      name: "Event Coordination",
      icon: <Calendar size={24} />,
      desc: "Organizing technical events, workshops, and coordinating activities with team members."
    },
    {
      name: "Adaptability",
      icon: <RefreshCw size={24} />,
      desc: "Quickly learning new technologies and adapting to evolving project requirements."
    }
  ];

  return (
    <section id="soft-skills" className="soft-skills-section">
      <h3 className="sub-section-title">Interpersonal & Soft Skills</h3>

      <div className="soft-skills-grid">
        {softSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="soft-card glass card animate-slide-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="soft-card-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;