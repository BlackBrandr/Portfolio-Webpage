'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRefs = {
    intro: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    skills: useRef(null)
  };

  useEffect(() => {
    const observers = {};
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      observers[key] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observers[key].observe(ref.current);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => {
        observer.disconnect();
      });
    };
  }, []);

  const skills = [
    { name: "Product Strategy", level: 95 },
    { name: "Agile Management", level: 90 },
    { name: "Stakeholder Communication", level: 88 },
    { name: "User Experience", level: 85 },
    { name: "Market Analysis", level: 92 },
    { name: "Team Leadership", level: 94 }
  ];

  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Product Owner",
      period: "2021 - Present",
      description: "Leading product development for enterprise SaaS solutions, managing a portfolio of products with $10M+ annual revenue.",
      extendedDetails: {
        achievements: [
          "Led cross-functional team of 15 members across 3 time zones",
          "Increased product adoption rate by 200% in 12 months",
          "Successfully launched 4 major product features",
          "Reduced customer churn rate by 45%"
        ],
        technologies: ["Jira", "Confluence", "Amplitude", "Mixpanel"],
        responsibilities: [
          "Product strategy and roadmap development",
          "Stakeholder management and communication",
          "Agile ceremony facilitation",
          "Budget management and resource allocation"
        ]
      }
    },
    {
      company: "Digital Solutions Co.",
      role: "Product Owner",
      period: "2018 - 2021",
      description: "Managed agile development teams, launched 5 successful products, and increased user engagement by 150%.",
      extendedDetails: {
        achievements: [
          "Spearheaded company's first mobile app development",
          "Achieved 98% customer satisfaction rate",
          "Optimized development process reducing time-to-market by 40%"
        ],
        technologies: ["Azure DevOps", "Tableau", "UserTesting"],
        responsibilities: [
          "Product backlog management",
          "Sprint planning and execution",
          "User research and validation",
          "Feature prioritization"
        ]
      }
    },
    {
      company: "StartUp Ventures",
      role: "Associate Product Manager",
      period: "2016 - 2018",
      description: "Developed product roadmaps and coordinated with cross-functional teams to deliver innovative solutions.",
      extendedDetails: {
        achievements: [
          "Launched company's first B2B product",
          "Generated $2M in first-year revenue",
          "Built and maintained relationships with key clients"
        ],
        technologies: ["Trello", "Google Analytics", "Hotjar"],
        responsibilities: [
          "Market research and analysis",
          "Product requirements documentation",
          "Customer feedback collection",
          "Competitive analysis"
        ]
      }
    }
  ];

  const education = [
    {
      school: "Stanford University",
      degree: "Master of Science in Computer Science",
      period: "2018 - 2020",
      location: "Stanford, California",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
      description: "Specialized in Software Engineering and Product Management",
      extendedDetails: {
        achievements: [
          "GPA: 3.9/4.0",
          "Research Assistant in Human-Computer Interaction Lab",
          "Published 2 papers on Product Development Methodologies",
          "Led student product development team"
        ],
        courses: [
          "Advanced Software Engineering",
          "Product Management in Tech",
          "User Experience Design",
          "Data-Driven Development"
        ],
        technologies: [
          "Python",
          "Machine Learning",
          "Product Analytics",
          "UX Research",
          "Data Science",
          "Agile Methods"
        ]
      }
    },
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      period: "2014 - 2018",
      location: "Berkeley, California",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png",
      description: "Focus on Software Development and Product Design",
      extendedDetails: {
        achievements: [
          "Graduated with Honors",
          "Dean's List all semesters",
          "President of Product Development Club",
          "Internship at Major Tech Company"
        ],
        courses: [
          "Software Development Principles",
          "Algorithms and Data Structures",
          "Database Management Systems",
          "Web Development"
        ],
        technologies: [
          "Java",
          "C++",
          "Web Technologies",
          "Algorithms",
          "Database Design",
          "Software Architecture"
        ]
      }
    }
  ];

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <main className={styles.container}>
      <section ref={sectionRefs.intro} className={`${styles.section} ${styles.intro}`}>
        <div className={styles.profileImage}>
          <Image
            src="/images/profile-placeholder.jpg"
            alt="John Doe"
            width={200}
            height={200}
            className={styles.avatar}
          />
        </div>
        <div className={styles.introContent}>
          <h1>John Doe</h1>
          <h2>Product Owner & Agile Enthusiast</h2>
          <p>
            Passionate about creating products that make a difference. With over 8 years
            of experience in product management, I specialize in turning complex problems
            into elegant solutions.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="mailto:contact@example.com">Email</a>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.education} className={`${styles.section} ${styles.education}`}>
        <h2>Educational Journey</h2>
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.educationCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logoContainer}>
                      <Image
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        width={60}
                        height={60}
                        className={styles.schoolLogo}
                      />
                    </div>
                    <div className={styles.headerInfo}>
                      <div className={styles.periodLocation}>
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                      </div>
                      <h3>{edu.school}</h3>
                      <h4>{edu.degree}</h4>
                    </div>
                    <button 
                      className={styles.expandButton}
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      aria-label="Toggle details"
                    >
                      <span className={expandedCard === index ? styles.minus : styles.plus}></span>
                    </button>
                  </div>

                  <p className={styles.description}>{edu.description}</p>

                  {expandedCard === index && (
                    <div className={styles.expandedDetails}>
                      <div className={styles.detailSection}>
                        <h5>Key Achievements</h5>
                        <ul>
                          {edu.extendedDetails.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.detailSection}>
                        <h5>Notable Courses</h5>
                        <ul>
                          {edu.extendedDetails.courses.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.detailSection}>
                        <h5>Technologies & Skills</h5>
                        <div className={styles.techTags}>
                          {edu.extendedDetails.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className={styles.techTag}
                              data-tag={tech}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={sectionRefs.experience} className={`${styles.section} ${styles.experience}`}>
        <h2>Professional Journey</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${expandedCard === index ? styles.expanded : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className={styles.period}>{exp.period}</span>
                <p>{exp.description}</p>
                
                {expandedCard === index && (
                  <div className={styles.expandedDetails}>
                    <div className={styles.detailSection}>
                      <h5>Key Achievements</h5>
                      <ul>
                        {exp.extendedDetails.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.detailSection}>
                      <h5>Technologies Used</h5>
                      <div className={styles.techTags}>
                        {exp.extendedDetails.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className={styles.techTag}
                            data-tag={tech}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.detailSection}>
                      <h5>Core Responsibilities</h5>
                      <ul>
                        {exp.extendedDetails.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={sectionRefs.skills} className={`${styles.section} ${styles.skills}`}>
        <h2>Core Competencies</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillItem}
              data-skill={skill.name}
            >
              <div className={styles.skillInfo}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}