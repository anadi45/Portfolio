import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Email",
      value: "ranjeetbaraik@gmail.com",
      link: "mailto:ranjeetbaraik@gmail.com",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      value: "github.com/anadi45",
      link: "https://github.com/anadi45",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: "LinkedIn",
      value: "linkedin.com/in/ranjeetbaraik",
      link: "https://linkedin.com/in/ranjeetbaraik",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Website",
      value: "ranjeetbaraik.netlify.app",
      link: "https://ranjeetbaraik.netlify.app",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Location",
      value: "Ranchi, Jharkhand, India",
      link: null,
    },
  ];

  const availability = {
    status: "Available for opportunities",
    description:
      "Open to discussing AI/ML engineering roles, consulting opportunities, and open source collaborations.",
    responseTime: "Usually responds within 24 hours",
  };

  return (
    <div className="contact-container">
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Let's discuss AI/ML opportunities, technical challenges, or potential
          collaborations
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-item">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3 className="contact-title">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="availability-section">
          <h2 className="section-title">Availability</h2>
          <div className="availability-card">
            <div className="availability-status">
              <div className="status-indicator"></div>
              <span className="status-text">{availability.status}</span>
            </div>
            <p className="availability-description">
              {availability.description}
            </p>
            <p className="response-time">{availability.responseTime}</p>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="section-title">Let's Connect</h2>
          <p className="cta-description">
            I'm always interested in discussing AI/ML engineering challenges,
            performance optimization techniques, and innovative solutions.
            Whether you're looking for technical expertise or want to explore
            potential collaborations, I'd love to hear from you.
          </p>
          <div className="cta-buttons">
            <a
              href="mailto:ranjeetbaraik@gmail.com"
              className="cta-button primary"
            >
              Send Email
            </a>
            <a
              href="https://github.com/anadi45"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
