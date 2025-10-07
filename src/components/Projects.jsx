import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Von AI Platform",
      description:
        "Multi-agent AI platform with supervisor pattern architecture, featuring specialized agents for CRM operations, domain intelligence, and natural language interactions.",
      technologies: [
        "LangChain",
        "OpenAI",
        "PostgreSQL",
        "OpenSearch",
        "Node.js",
        "TypeScript",
      ],
      features: [
        "Multi-agent system with supervisor pattern",
        "Custom MCP server for Salesforce integration",
        "Vector database infrastructure with OpenSearch",
        "Real-time agent orchestration",
        "Sub-2 second response times",
      ],
      impact: "Production-scale AI platform serving enterprise customers",
      github: "https://github.com/anadi45",
      demo: "https://ranjeetbaraik.netlify.app/",
    },
    {
      title: "RAG System Architecture",
      description:
        "Production-grade Retrieval Augmented Generation system processing millions of documents with advanced semantic search capabilities.",
      technologies: [
        "LangChain",
        "PostgreSQL",
        "Pgvector",
        "OpenAI",
        "Redis",
        "AWS",
      ],
      features: [
        "Vector database with Pgvector extension",
        "K-similarity search with cosine similarity",
        "Parent document retrieval",
        "Multi-query RAG fusion",
        "MMR search for result diversity",
      ],
      impact: "Processes millions of documents with sub-second retrieval times",
      github: "https://github.com/anadi45",
      demo: "https://ranjeetbaraik.netlify.app/",
    },
    {
      title: "Meeting Intelligence Platform",
      description:
        "AI-powered meeting analysis system with real-time transcript processing, follow-up email generation, and intelligent participant detection.",
      technologies: [
        "React",
        "Node.js",
        "Zoom API",
        "Slack API",
        "OpenAI",
        "DynamoDB",
      ],
      features: [
        "Real-time meeting transcript analysis",
        "AI-generated follow-up emails",
        "Intelligent participant detection",
        "Slack Block Kit integration",
        "Custom prompt management system",
      ],
      impact: "Automated post-call workflows saving hours of manual work",
      github: "https://github.com/anadi45",
      demo: "https://ranjeetbaraik.netlify.app/",
    },
    {
      title: "Deal Intelligence Workflows",
      description:
        "Comprehensive deal analysis system combining CRM data, email threads, and Slack conversations for holistic deal insights.",
      technologies: [
        "Salesforce API",
        "Slack API",
        "OpenAI",
        "DynamoDB",
        "Node.js",
        "Express.js",
      ],
      features: [
        "Multi-source data integration",
        "AI-powered deal summarization",
        "Slack slash command interface",
        "Custom prompt system",
        "Feedback collection pipeline",
      ],
      impact: "Unified fragmented deal data into actionable intelligence",
      github: "https://github.com/anadi45",
      demo: "https://ranjeetbaraik.netlify.app/",
    },
    {
      title: "Smart Views & Q&A Plugin",
      description:
        "Intelligent data exploration system with natural language querying and real-time updates for complex data analysis.",
      technologies: [
        "React",
        "Node.js",
        "OpenAI",
        "Vector DB",
        "Polling",
        "Real-time Updates",
      ],
      features: [
        "Natural language data querying",
        "Real-time data updates",
        "Diagnostic capabilities",
        "Structured JSON output",
        "Client-side polling mechanism",
      ],
      impact: "Enabled conversational interface for complex data exploration",
      github: "https://github.com/anadi45",
      demo: "https://ranjeetbaraik.netlify.app/",
    },
    {
      title: "Performance Optimization Suite",
      description:
        "Comprehensive performance optimization including caching strategies, query optimization, and cost reduction techniques.",
      technologies: [
        "Redis",
        "DynamoDB",
        "PostgreSQL",
        "AWS",
        "Node.js",
        "Performance Monitoring",
      ],
      features: [
        "98.5% API response time improvement",
        "60%+ cost reduction through caching",
        "40%+ token savings with sliding window",
        "Sub-2 second first token response",
        "Comprehensive monitoring and alerting",
      ],
      impact:
        "Dramatically improved system performance and reduced operational costs",
      github: "https://github.com/anadi45",
      demo: "https://ranjeetbaraik.netlify.app/",
    },
  ];

  const openSourceProjects = [
    {
      title: "LangChainJS Contributions",
      description:
        "9 merged pull requests to the core LangChainJS library, enhancing AI capabilities and integration options.",
      contributions: [
        "OpenAI integration improvements",
        "MMR search for PgVector",
        "Perplexity AI integration",
        "Groq multimodal support",
        "Vertex AI enhancements",
      ],
      github: "https://github.com/langchain-ai/langchainjs",
      impact: "Used by thousands of developers worldwide",
    },
  ];

  return (
    <div className="projects-container">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          AI-powered solutions that drive real business impact
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Demo
                </a>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-impact">
              <strong>Impact:</strong> {project.impact}
            </div>
          </div>
        ))}
      </div>

      <div className="open-source-section">
        <h2 className="section-title">Open Source Projects</h2>
        <div className="open-source-grid">
          {openSourceProjects.map((project, index) => (
            <div key={index} className="open-source-card">
              <h3 className="open-source-title">{project.title}</h3>
              <p className="open-source-description">{project.description}</p>
              <div className="open-source-contributions">
                <h4>Contributions:</h4>
                <ul>
                  {project.contributions.map((contrib, idx) => (
                    <li key={idx}>{contrib}</li>
                  ))}
                </ul>
              </div>
              <div className="open-source-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-source-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
              <div className="open-source-impact">
                <strong>Impact:</strong> {project.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
