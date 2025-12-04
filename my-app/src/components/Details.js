import React from 'react';
import './Details.css';

const Details = () => {
  const getIconSVG = (iconName) => {
    const icons = {
      education: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9M5 13.18v3.82L12 19l7-2v-3.82L12 17l-7-3.82z"/>
        </svg>
      ),
      location: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      email: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      phone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      languages: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
        </svg>
      ),
      availability: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
        </svg>
      )
    };
    return icons[iconName];
  };

  return (
    <section id="details" className="details-section">
      <h2 className="section-title">Personal Details</h2>
      <div className="details-container">
        <div className="details-grid">
          <div className="detail-item">
            <div className="detail-icon">{getIconSVG('education')}</div>
            <h3>Education</h3>
            <p>Bachelor's Degree in Computer Science and Engineering (Artificial Intelligence)</p>
            <p className="detail-sub">Chitkara University</p>
          </div>
          <div className="detail-item">
            <div className="detail-icon">{getIconSVG('location')}</div>
            <h3>Location</h3>
            <p>Haryana, India</p>
          </div>
          <div className="detail-item">
            <div className="detail-icon">{getIconSVG('email')}</div>
            <h3>Email</h3>
            <p>sourabhbansalhello@gmail.com</p>
          </div>
          <div className="detail-item">
            <div className="detail-icon">{getIconSVG('phone')}</div>
            <h3>Phone</h3>
            <p>+91 9053647704</p>
          </div>
          <div className="detail-item">
            <div className="detail-icon">{getIconSVG('languages')}</div>
            <h3>Languages</h3>
            <p>English, Hindi</p>
          </div>
          <div className="detail-item">
            <div className="detail-icon">{getIconSVG('availability')}</div>
            <h3>Availability</h3>
            <p>Open to Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

