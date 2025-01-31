'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './references.module.css';

export default function ReferencesPage() {
  const references = [
    {
      name: "Sarah Johnson",
      role: "CEO at Tech Solutions Inc.",
      company: "Tech Solutions Inc.",
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
      testimonial: "An exceptional product owner who consistently delivers results. Their strategic vision and ability to execute are outstanding.",
      project: "Enterprise E-commerce Platform",
      year: "2023"
    },
    {
      name: "Michael Chen",
      role: "Senior Development Manager",
      company: "InnovateTech",
      image: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
      testimonial: "Outstanding leadership skills and technical knowledge. They have a unique ability to bridge technical and business requirements.",
      project: "Mobile Banking App",
      year: "2023"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Design Director",
      company: "Creative Solutions",
      image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=random",
      testimonial: "Their understanding of user experience and product strategy is remarkable. A true professional who delivers excellence.",
      project: "Healthcare Platform Redesign",
      year: "2022"
    },
    {
      name: "David Kim",
      role: "Product Manager",
      company: "InnovateTech",
      image: "https://ui-avatars.com/api/?name=David+Kim&background=random",
      testimonial: "Exceptional ability to manage stakeholders and deliver complex projects. A pleasure to work with!",
      project: "AI-Powered Analytics Dashboard",
      year: "2022"
    },
    {
      name: "Lisa Thompson",
      role: "Agile Coach",
      company: "Agile Consulting Group",
      image: "https://ui-avatars.com/api/?name=Lisa+Thompson&background=random",
      testimonial: "One of the best product owners I've worked with. Their agile practices and team leadership are exemplary.",
      project: "Digital Transformation Initiative",
      year: "2022"
    },
    {
      name: "James Wilson",
      role: "CTO",
      company: "Digital Dynamics",
      image: "https://ui-avatars.com/api/?name=James+Wilson&background=random",
      testimonial: "Brings both technical depth and strategic thinking to every project. A rare combination of skills.",
      project: "Cloud Migration Project",
      year: "2021"
    },
    {
      name: "Anna Martinez",
      role: "Head of Product",
      company: "Future Tech",
      image: "https://ui-avatars.com/api/?name=Anna+Martinez&background=random",
      testimonial: "Their product vision and execution strategy transformed our entire approach to product development.",
      project: "IoT Platform Development",
      year: "2021"
    },
    {
      name: "Robert Taylor",
      role: "Engineering Director",
      company: "TechCorp",
      image: "https://ui-avatars.com/api/?name=Robert+Taylor&background=random",
      testimonial: "Exceptional at balancing technical constraints with business needs. A true technology leader.",
      project: "Microservices Architecture",
      year: "2021"
    }
  ];

  const sectionRef = useRef(null);

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
    <div className={styles.container}>
      <section ref={sectionRef} className={styles.section}>
        <h1 className={styles.title}>Client References</h1>
        <p className={styles.subtitle}>What industry leaders say about our collaboration</p>
        
        <div className={styles.referencesGrid}>
          {references.map((reference, index) => (
            <div key={index} className={styles.referenceCard}>
              <div className={styles.referenceHeader}>
                <Image
                  src={reference.image}
                  alt={reference.name}
                  width={80}
                  height={80}
                  className={styles.referenceImage}
                  unoptimized={true}
                />
                <div className={styles.headerInfo}>
                  <h3>{reference.name}</h3>
                  <p className={styles.role}>{reference.role}</p>
                  <p className={styles.company}>{reference.company}</p>
                </div>
              </div>
              
              <div className={styles.referenceContent}>
                <blockquote>{reference.testimonial}</blockquote>
                <div className={styles.projectInfo}>
                  <span className={styles.project}>{reference.project}</span>
                  <span className={styles.year}>{reference.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 