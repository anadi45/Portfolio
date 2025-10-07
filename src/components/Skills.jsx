import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        {
          name: "Large Language Models",
          level: 95,
          description: "GPT-4, Claude, Perplexity, Groq",
        },
        {
          name: "RAG Systems",
          level: 95,
          description:
            "Vector databases, semantic search, retrieval optimization",
        },
        {
          name: "LangChain",
          level: 95,
          description: "Custom plugins, chain orchestration, output parsing",
        },
        {
          name: "AI Agents",
          level: 90,
          description:
            "Multi-agent systems, supervisor patterns, tool creation",
        },
        {
          name: "Vector Databases",
          level: 90,
          description: "OpenSearch, Pgvector, similarity search",
        },
        {
          name: "Prompt Engineering",
          level: 90,
          description:
            "Advanced prompting, few-shot learning, chain-of-thought",
        },
      ],
    },
    {
      title: "Backend Engineering",
      skills: [
        {
          name: "Node.js",
          level: 95,
          description: "Express.js, microservices, API development",
        },
        {
          name: "TypeScript",
          level: 95,
          description: "Type-safe development, advanced patterns",
        },
        {
          name: "PostgreSQL",
          level: 90,
          description: "Query optimization, Pgvector extension",
        },
        {
          name: "DynamoDB",
          level: 85,
          description: "NoSQL design, caching strategies",
        },
        {
          name: "Redis",
          level: 90,
          description: "Caching, performance optimization",
        },
        {
          name: "AWS",
          level: 85,
          description: "S3, Lambda, CloudWatch, infrastructure",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "AWS Services",
          level: 85,
          description: "S3, DynamoDB, Lambda, EC2, CloudWatch",
        },
        {
          name: "Microservices",
          level: 90,
          description: "Architecture design, service communication",
        },
        {
          name: "Performance Optimization",
          level: 95,
          description: "Latency reduction, caching strategies",
        },
        {
          name: "Event-driven Architecture",
          level: 85,
          description: "Real-time processing, message queues",
        },
        {
          name: "Monitoring & Alerting",
          level: 80,
          description: "System observability, performance metrics",
        },
      ],
    },
    {
      title: "Integrations & APIs",
      skills: [
        {
          name: "Salesforce API",
          level: 90,
          description: "SOQL optimization, CRM workflows",
        },
        {
          name: "Slack API",
          level: 85,
          description: "Block Kit, slash commands, webhooks",
        },
        {
          name: "Zoom API",
          level: 80,
          description: "Meeting integration, transcript processing",
        },
        {
          name: "REST APIs",
          level: 95,
          description: "API design, GraphQL, webhook systems",
        },
        {
          name: "Third-party Integrations",
          level: 85,
          description: "Multi-platform data synchronization",
        },
      ],
    },
  ];

  const achievements = [
    {
      metric: "98.5%",
      label: "Performance Improvement",
      description: "API response time optimization",
    },
    {
      metric: "60%+",
      label: "Cost Reduction",
      description: "LLM response caching",
    },
    {
      metric: "9",
      label: "LangChain PRs",
      description: "Open source contributions",
    },
    {
      metric: "3+",
      label: "Years Experience",
      description: "AI/ML specialization",
    },
  ];

  return (
    <div className="skills-container">
      <div className="page-header">
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">
          Technical proficiency across AI/ML, backend engineering, and cloud
          infrastructure
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-description">{skill.description}</div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-section">
        <h2 className="section-title">Key Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-number">{achievement.metric}</div>
              <div className="achievement-label">{achievement.label}</div>
              <div className="achievement-desc">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="expertise-section">
        <h2 className="section-title">Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3>AI/ML Engineering</h3>
            <p>
              Advanced expertise in Large Language Models, RAG systems,
              multi-agent architectures, and production-scale AI applications.
            </p>
          </div>
          <div className="expertise-item">
            <h3>Backend Architecture</h3>
            <p>
              Microservices design, API optimization, database performance
              tuning, and scalable system architecture.
            </p>
          </div>
          <div className="expertise-item">
            <h3>Performance Engineering</h3>
            <p>
              Latency optimization, caching strategies, cost reduction
              techniques, and system performance monitoring.
            </p>
          </div>
          <div className="expertise-item">
            <h3>Open Source</h3>
            <p>
              Active contributor to LangChainJS with 9 merged PRs, enhancing AI
              capabilities for the developer community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
