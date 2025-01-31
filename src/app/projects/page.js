'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './projects.module.css';

export default function ProjectsPage() {
  const sectionRef = useRef(null);

  const categories = [
    {
      title: "Web Development",
      description: "Full-stack web applications and responsive websites",
      path: "/projects/web",
      icon: "🌐",
      tags: ["Next.js", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      path: "/projects/mobile",
      icon: "📱",
      tags: ["React Native", "Flutter", "Firebase"]
    },
    {
      title: "Design Work",
      description: "UI/UX design and brand identity projects",
      path: "/projects/design",
      icon: "🎨",
      tags: ["Figma", "Adobe XD", "Sketch"]
    }
  ];

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.subtitle}>Explore my work across different domains</p>
      
      <div ref={sectionRef} className={styles.projectsGrid}>
        {categories.map((category, index) => (
          <Link href={category.path} key={index}>
            <div className={styles.projectCard}>
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className={styles.tags}>
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag} data-tag={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}