import React from "react";
import "./experiences.css";

const Experiences = () => {
  const experiences = [
    {
      period: "2023 - Present",
      title: "Senior Full Stack Engineer | AI/ML Specialist",
      company: "Rattle AI",
      location: "Remote",
      achievements: [
        "Architected and built production-grade RAG system processing millions of documents",
        "Reduced API response time by 98.5% (2000ms → 30ms) using Redis caching",
        "Implemented LLM response caching reducing costs by 60%+",
        "Built multi-agent AI platform with supervisor pattern architecture",
        "Created 9 merged pull requests to LangChainJS core library",
        "Mentored junior developers and established AI development best practices"
      ],
      technologies: ["LangChain", "OpenAI", "PostgreSQL", "DynamoDB", "Redis", "AWS", "Node.js", "TypeScript"]
    },
    {
      period: "2022 - 2023",
      title: "Full Stack Engineer",
      company: "Rattle AI",
      location: "Remote",
      achievements: [
        "Developed AI-powered meeting intelligence platform with Zoom integration",
        "Built follow-up email generation system using call transcript analysis",
        "Implemented Slack Block Kit integration for formatted AI responses",
        "Created reusable React component architecture for prompt management",
        "Optimized database queries and implemented caching strategies"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Slack API", "Zoom API", "Express.js"]
    }
  ];

  const openSourceContributions = [
    {
      title: "LangChainJS Core Contributor",
      description: "9 significant pull requests enhancing AI capabilities",
      contributions: [
        "Fixed OpenAI integration with model_name metadata tracking",
        "Implemented MMR search for PgVector improving semantic search diversity",
        "Added complete Perplexity AI integration to LangChain ecosystem",
        "Extended Perplexity with search domain and recency filters",
        "Implemented Groq multimodal support for vision capabilities"
      ],
      impact: "Contributions used by thousands of developers worldwide"
    }
  ];

  return (
    <div className="experiences-container">
      <div className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">Building the future of AI-powered applications</p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-period">{exp.period}</div>
              <div className="experience-details">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company} • {exp.location}</div>
              </div>
            </div>
            
            <div className="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="open-source-section">
        <h2 className="section-title">Open Source Contributions</h2>
        {openSourceContributions.map((contribution, index) => (
          <div key={index} className="contribution-item">
            <h3 className="contribution-title">{contribution.title}</h3>
            <p className="contribution-description">{contribution.description}</p>
            <div className="contribution-details">
              <h4>Notable Contributions:</h4>
              <ul>
                {contribution.contributions.map((contrib, idx) => (
                  <li key={idx}>{contrib}</li>
                ))}
              </ul>
            </div>
            <div className="contribution-impact">
              <strong>Impact:</strong> {contribution.impact}
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-section">
        <h2 className="section-title">Key Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <div className="achievement-number">98.5%</div>
            <div className="achievement-label">Performance Improvement</div>
            <div className="achievement-desc">API response time optimization</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-number">60%+</div>
            <div className="achievement-label">Cost Reduction</div>
            <div className="achievement-desc">LLM response caching</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-number">9</div>
            <div className="achievement-label">LangChain PRs</div>
            <div className="achievement-desc">Open source contributions</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-number">3+</div>
            <div className="achievement-label">Years Experience</div>
            <div className="achievement-desc">AI/ML specialization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences