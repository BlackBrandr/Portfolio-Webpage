'use client';
import { useEffect, useRef } from 'react';
import styles from '../projects.module.css';

export default function WebProjects() {
  const sectionRef = useRef(null);

  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com/ecommerce",
      github: "https://github.com/yourusername/ecommerce",
      image: "/images/projects/ecommerce.jpg"
    },
    {
      title: "Portfolio Website Builder",
      description: "A drag-and-drop website builder for creating professional portfolios",
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      link: "https://example.com/portfolio-builder",
      github: "https://github.com/yourusername/portfolio-builder",
      image: "/images/projects/portfolio-builder.jpg"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support and SEO optimization",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
      link: "https://example.com/blog-platform",
      github: "https://github.com/yourusername/blog-platform",
      image: "/images/projects/blog.jpg"
    }
  ];

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Web Development Projects</h1>
      <div ref={sectionRef} className={styles.projectsGrid}>
        {webProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={styles.tag} data-tag={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 