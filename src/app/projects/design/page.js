'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../projects.module.css';

export default function DesignProjects() {
  const sectionRef = useRef(null);

  const designProjects = [
    {
      title: "Brand Identity System",
      description: "Complete brand identity design for a tech startup, including logo design, color palette, typography, and brand guidelines. Created a cohesive visual language that reflects the company's innovative spirit.",
      tags: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Brand Design", "Visual Identity"],
      link: "https://example.com/brand-identity",
    },
    {
      title: "Healthcare App UI/UX",
      description: "User interface and experience design for a healthcare application focused on patient engagement and medical record management. Implemented intuitive navigation and accessibility features.",
      tags: ["Sketch", "Principle", "Zeplin", "UI Design", "UX Research"],
      link: "https://example.com/healthcare-app",
    },
    {
      title: "E-Learning Platform Redesign",
      description: "Complete redesign of an e-learning platform to improve user engagement and learning outcomes. Created an immersive and interactive learning experience with modern design principles.",
      tags: ["Figma", "Framer", "Adobe XD", "Educational Design", "Interactive Design"],
      link: "https://example.com/elearning-redesign",
    },
    {
      title: "Financial Dashboard",
      description: "Design of a comprehensive financial dashboard for professional traders. Focus on data visualization and real-time information display with clear hierarchy and accessibility.",
      tags: ["Figma", "Data Visualization", "UI Design", "Dashboard Design"],
      link: "https://example.com/financial-dashboard",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Design Projects</h1>
      <p className={styles.subtitle}>Exploring creativity through visual design and user experience</p>
      
      <div ref={sectionRef} className={styles.projectsGrid}>
        {designProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className={styles.tag}
                    data-tag={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link 
                href={project.link}
                className={styles.viewProjectButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.buttonText}>View Project</span>
                <span className={styles.buttonIcon}>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 