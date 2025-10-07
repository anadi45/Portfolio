import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <div className="intro-line">
          <span className="greeting">Hi, I'm</span>
          <span className="name-heading">Ranjeet Baraik</span>
        </div>
        <div className="title-line">
          <span className="role">Senior Full Stack Engineer</span>
          <span className="separator">•</span>
          <span className="specialization">AI/ML Specialist</span>
        </div>
        <div className="about-content">
          I architect and build enterprise-grade AI/ML solutions, specializing in Large Language Models, 
          RAG systems, and multi-agent AI platforms. With 3+ years of experience, I've delivered 
          production-scale AI features that process millions of documents and serve hundreds of users.
        </div>
        <div className="about-content">
          I'm passionate about pushing the boundaries of AI technology, contributing to open-source 
          projects like LangChainJS, and mentoring the next generation of AI engineers. My work focuses 
          on creating intelligent, efficient systems that solve real-world problems at scale.
        </div>
        <div className="cta-section">
          <a href="/experience" className="cta-button primary">View My Work</a>
          <a href="/contact" className="cta-button secondary">Get In Touch</a>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">9</div>
          <div className="stat-label">LangChainJS PRs</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98.5%</div>
          <div className="stat-label">Performance Improvement</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">60%+</div>
          <div className="stat-label">Cost Reduction</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default About;
