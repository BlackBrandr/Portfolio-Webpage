'use client';
import { useEffect, useRef } from 'react';
import styles from '../projects.module.css';

export default function MobileProjects() {
  const sectionRef = useRef(null);

  const mobileProjects = [
    {
      title: "Fitness Tracking App",
      description: "Mobile app for tracking workouts and nutrition with social features",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      link: "https://example.com/fitness-app",
      github: "https://github.com/yourusername/fitness-app",
      image: "/images/projects/fitness.jpg"
    },
    {
      title: "Travel Companion",
      description: "Travel planning and itinerary management app with offline support",
      tags: ["Flutter", "GraphQL", "MongoDB", "Google Maps API"],
      link: "https://example.com/travel-app",
      github: "https://github.com/yourusername/travel-app",
      image: "/images/projects/travel.jpg"
    },
    {
      title: "Language Learning App",
      description: "Interactive language learning platform with speech recognition",
      tags: ["React Native", "AWS", "TensorFlow", "Socket.io"],
      link: "https://example.com/language-app",
      github: "https://github.com/yourusername/language-app",
      image: "/images/projects/language.jpg"
    }
  ];

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Mobile Development Projects</h1>
      <div ref={sectionRef} className={styles.projectsGrid}>
        {mobileProjects.map((project, index) => (
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