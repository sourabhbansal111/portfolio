import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Pet Adoption Site',
      description: 'A full-stack pet adoption platform built with Django, featuring user authentication, pet listings, and adoption management system.',
      tech: ['Django', 'SQLite'],
      image: '/petadop.png',
      link: 'https://sourabhbansal.pythonanywhere.com/',
      github: 'https://github.com/sourabhbansal111/pet-adoption-site'
    },
    {
      title: 'Flappy Bird Game',
      description: 'A fun and interactive Flappy Bird game clone , featuring smooth animations and responsive gameplay.',
      tech: ['HTML',  'CSS' , 'JavaScript'],
      image: '/flapybird.png',
      link: 'https://github.com/sourabhbansal111/flappy-bird.git',
      github: 'https://github.com/sourabhbansal111/flappy-bird.git'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts and interactive charts.',
      tech: ['React', 'API Integration', 'Chart.js'],
      image: '/',
      link: '#',
      github: '#'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250?text=Project+Preview';
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <a 
            href="https://github.com/sourabhbansal111?tab=repositories" 
            className="view-all-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="view-all-text">View All Projects</span>
            <span className="view-all-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

