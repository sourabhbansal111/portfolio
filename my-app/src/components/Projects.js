import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/profile.jpg',
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Material-UI'],
      image: '/profile.jpg',
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts and interactive charts.',
      tech: ['React', 'API Integration', 'Chart.js'],
      image: '/profile.jpg',
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
                <div className="project-overlay">
                  <a href={project.link} className="overlay-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
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
      </div>
    </section>
  );
};

export default Projects;

