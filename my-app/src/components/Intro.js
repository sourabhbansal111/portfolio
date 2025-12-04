import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="intro-greeting">Hello, I'm</h1>
            <h1 className="intro-name">Sourabh Bansal</h1>
            <h2 className="intro-title">Student & Aspiring Developer</h2>
            <p className="intro-description">
              Passionate about creating innovative solutions and learning new technologies. 
              Currently pursuing my studies while building real-world projects.
            </p>
            <div className="intro-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
          <div className="intro-image">
            <div className="image-wrapper">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

