import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS Configuration
    // TODO: Replace these with your EmailJS credentials
    // Get them from: https://dashboard.emailjs.com/admin
    const serviceId = 'service_hee3spg'; // e.g., 'service_xxxxxxx'
    const templateId = 'template_tr0q5fc'; // e.g., 'template_xxxxxxx'
    const publicKey = 'FoZj_O3wiKiZ5aRP0'; // e.g., 'xxxxxxxxxxxxx'

    // Check if EmailJS is configured
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      // Fallback to mailto if EmailJS not configured
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:sourabhbansalhello@gmail.com?subject=${subject}&body=${body}`;
      setSubmitStatus({ type: 'success', message: 'Opening your email client...' });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      return;
    }

    // Google Sheets Web App URL
    // TODO: Replace with your Google Apps Script Web App URL after setup
    const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbz195IpBJZa1EBnG4PvRGc-QUGhOclMr-ZfGxK0-N1IM4GySGjN-1QxDbB2Td29K7HcMg/exec'; // e.g., 'https://script.google.com/macros/s/.../exec'

    try {
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'sourabhbansalhello@gmail.com',
      }, publicKey);

      // Save to Google Sheets if configured
      if (googleSheetsUrl !== 'YOUR_GOOGLE_SCRIPT_URL') {
        try {
          // Use URL-encoded format for Google Apps Script
          const params = new URLSearchParams();
          params.append('name', formData.name);
          params.append('email', formData.email);
          params.append('message', formData.message);
          params.append('timestamp', new Date().toISOString());

          // Send to Google Sheets using GET method (more reliable for Google Apps Script)
          // Append data as query parameters
          const urlWithParams = `${googleSheetsUrl}?${params.toString()}`;
          
          // Use image-based approach to avoid CORS and tracking prevention issues
          // This is more reliable than fetch for Google Apps Script
          const img = new Image();
          img.src = urlWithParams;
          img.style.display = 'none';
          document.body.appendChild(img);
          
          // Clean up after a delay
          setTimeout(() => {
            document.body.removeChild(img);
          }, 1000);

          console.log('Data sent to Google Sheets successfully');
        } catch (sheetsError) {
          console.error('Google Sheets save error:', sheetsError);
          // Don't fail the form if Sheets save fails
        }
      }
      
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly via email.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg', 
      url: 'https://www.linkedin.com/in/sourabh-bansal-4a4b80338/' 
    },
    { 
      name: 'GitHub', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 
      url: 'https://github.com/sourabhbansal111' 
    },
    { 
      name: 'Instagram', 
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/instagram.svg', 
      url: 'https://www.instagram.com/sourabhbansal981/' 
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your visions.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="social-icon">
                    <img src={social.icon} alt={social.name} />
                  </span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            {submitStatus && (
              <div className={`submit-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

