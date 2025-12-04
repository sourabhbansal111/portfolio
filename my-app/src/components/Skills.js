import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Web Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Database Management', level: 80 },
    { name: 'Team Collaboration', level: 90 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

