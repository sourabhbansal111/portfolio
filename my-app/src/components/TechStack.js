import React, { useState } from 'react';
import './TechStack.css';

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', proficiency: 100, duration: 'Experienced', about: 'Responsive layouts, semantic markup, and modern UI styling.' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 80, duration: 'Experienced', about: 'ES6+, async/await, DOM, and interaction patterns.' }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', proficiency: 80, duration: 'Experienced', about: 'Components, hooks, context, and clean state management.' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', proficiency: 90, duration: 'Experienced', about: 'Auth, ORM, admin, and full-stack web apps.' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', proficiency: 90, duration: 'Experienced', about: 'Lightweight APIs and microservices.' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', proficiency: 100, duration: 'Experienced', about: 'Modeling, joins, indexing, and query optimization basics.' }
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', proficiency: 100, duration: 'Experienced', about: 'Scripting, data handling, and backend tasks.' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', proficiency: 80, duration: 'Experienced', about: 'Strong fundamentals, problem solving, and DSA.' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', proficiency: 80, duration: 'Experienced', about: 'Branching, PRs, and collaborative workflows.' }
      ]
    },
    {
      title: 'Data',
      skills: [
        { name: 'Data Analytics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', proficiency: 80, duration: 'Experienced', about: 'Exploration, notebooks, and visualization basics.' }
      ]
    }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="techstack" className="techstack-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="techstack-layout">
        <div className="techstack-left">
          {categories.map((cat, idx) => (
            <div key={idx} className="tech-category">
              <h3 className="tech-category-title">{cat.title}</h3>
              <div className="tech-cards">
                {cat.skills.map((skill) => (
                  <button
                    key={skill.name}
                    className={`tech-card ${selected?.name === skill.name ? 'active' : ''}`}
                    onClick={() => setSelected(skill)}
                    aria-pressed={selected?.name === skill.name}
                  >
                    <div className="tech-card-header">
                      <div className="tech-card-icon">
                        <img src={skill.icon} alt={skill.name} width="36" height="36" loading="lazy" decoding="async" />
                      </div>
                      <div className="tech-card-name">{skill.name}</div>
                    </div>
                    <div className="tech-card-progress">
                      <div className="tech-card-progress-bar">
                        <div className="tech-card-progress-fill" style={{ width: `${skill.proficiency}%` }}></div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="techstack-right">
          {selected ? (
            <div className="tech-detail">
              <div className="tech-detail-header">
                <div className="tech-detail-icon">
                  <img src={selected.icon} alt={selected.name} width="48" height="48" loading="lazy" decoding="async" />
                </div>
                <div className="tech-detail-info">
                  <div className="tech-detail-name">{selected.name}</div>
                  <div className="tech-detail-duration">{selected.duration}</div>
                </div>
              </div>
              <div className="tech-detail-proficiency">
                <div className="tech-detail-labels">
                  <span>Proficiency</span>
                  <span>{selected.proficiency}%</span>
                </div>
                <div className="tech-detail-progress-bar">
                  <div className="tech-detail-progress-fill" style={{ width: `${selected.proficiency}%` }}></div>
                </div>
              </div>
              <div className="tech-detail-about">
                <div className="tech-detail-subtitle">About</div>
                <p className="tech-detail-text">{selected.about}</p>
              </div>
              <div className="tech-detail-tags">
                <span className="tech-tag-chip">{selected.duration}</span>
                <span className="tech-tag-chip">{selected.proficiency}% Proficient</span>
              </div>
            </div>
          ) : (
            <div className="tech-detail-placeholder">Click any skill to see detailed information</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

