import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate student with a keen interest in technology and software development. 
              My journey in programming started with curiosity and has evolved into a deep passion 
              for creating innovative solutions.
            </p>
            <p>
              Currently, I'm focused on expanding my knowledge in modern web technologies, 
              building projects that solve real-world problems, and continuously learning 
              from the developer community.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing knowledge with fellow developers.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Technologies Mastered</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

