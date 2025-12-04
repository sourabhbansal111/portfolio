import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      rating: 4
    },
    { 
      name: 'Django', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      rating: 4.5
    },
    { 
      name: 'Flask', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      rating: 4.5
    },
    { 
      name: 'HTML/CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      rating: 5
    },
    { 
      name: 'MySQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      rating: 5
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      rating: 4
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      rating: 5
    },
    { 
      name: 'C++', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      rating: 4
    },
    { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      rating: 4
    },
    { 
      name: 'Data Analytics', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      rating: 4
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="tech-rating">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <span key={`full-${index}`} className="star filled">
            ★
          </span>
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <span key="half" className="star half-star">
            <span className="star-background">★</span>
            <span className="star-foreground">★</span>
          </span>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span key={`empty-${index}`} className="star empty">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="techstack" className="techstack-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="techstack-container">
        <div className="techstack-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <div className="tech-name">{tech.name}</div>
              {renderStars(tech.rating)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

