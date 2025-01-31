'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRefs = {
    hero: useRef(null),
    skills: useRef(null),
    references: useRef(null)
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "/projects/web"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile app for tracking workouts and nutrition",
      image: "/images/projects/fitness.jpg",
      tags: ["React Native", "Firebase"],
      link: "/projects/mobile"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity design for a tech startup",
      image: "/images/projects/brand.jpg",
      tags: ["Figma", "Adobe XD"],
      link: "/projects/design"
    }
  ];

  const skills = [
    { name: "Product Strategy", level: 95 },
    { name: "Agile Management", level: 90 },
    { name: "User Experience", level: 85 },
    { name: "Market Analysis", level: 92 }
  ];

  const references = [
    {
      name: "Sarah Johnson",
      role: "CEO at Tech Solutions Inc.",
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
      testimonial: "An exceptional product owner who consistently delivers results. Their strategic vision and ability to execute are outstanding."
    },
    {
      name: "Michael Chen",
      role: "Senior Development Manager",
      image: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
      testimonial: "Outstanding leadership skills and technical knowledge. They have a unique ability to bridge technical and business requirements."
    },
    {
      name: "Emily Rodriguez",
      role: "UX Design Director",
      image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=random",
      testimonial: "Their understanding of user experience and product strategy is remarkable. A true professional who delivers excellence."
    },
    {
      name: "David Kim",
      role: "Product Manager at InnovateTech",
      image: "https://ui-avatars.com/api/?name=David+Kim&background=random",
      testimonial: "Exceptional ability to manage stakeholders and deliver complex projects. A pleasure to work with!"
    },
    {
      name: "Lisa Thompson",
      role: "Agile Coach",
      image: "https://ui-avatars.com/api/?name=Lisa+Thompson&background=random",
      testimonial: "One of the best product owners I've worked with. Their agile practices and team leadership are exemplary."
    },
    {
      name: "James Wilson",
      role: "CTO at Digital Dynamics",
      image: "https://ui-avatars.com/api/?name=James+Wilson&background=random",
      testimonial: "Brings both technical depth and strategic thinking to every project. A rare combination of skills."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className={styles.main}>
      {/* Hero Section with Project Carousel */}
      <section ref={sectionRefs.hero} className={styles.heroSection}>
        <div className={styles.carousel}>
          <div 
            className={styles.carouselTrack} 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className={styles.carouselSlide}>
                <div className={styles.slideContent}>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag} data-tag={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} className={styles.viewProjectBtn}>
                    View Project
                  </Link>
                </div>
                <div className={styles.slideImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.projectImage}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.carouselDots}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className={styles.skillsSection}>
        <h2>Core Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
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

      {/* References Section */}
      <section ref={sectionRefs.references} className={styles.referencesSection}>
        <h2>What People Say</h2>
        <div className={styles.referencesSlider}>
          <div className={styles.sliderTrack}>
            {/* First set of references */}
            {references.map((reference, index) => (
              <div key={index} className={styles.referenceCard}>
                <div className={styles.referenceHeader}>
                  <Image
                    src={reference.image}
                    alt={reference.name}
                    width={60}
                    height={60}
                    className={styles.referenceImage}
                    unoptimized={true}
                  />
                  <div>
                    <h3>{reference.name}</h3>
                    <p>{reference.role}</p>
                  </div>
                </div>
                <blockquote>{reference.testimonial}</blockquote>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {references.map((reference, index) => (
              <div key={`duplicate-${index}`} className={styles.referenceCard}>
                <div className={styles.referenceHeader}>
                  <Image
                    src={reference.image}
                    alt={reference.name}
                    width={60}
                    height={60}
                    className={styles.referenceImage}
                    unoptimized={true}
                  />
                  <div>
                    <h3>{reference.name}</h3>
                    <p>{reference.role}</p>
                  </div>
                </div>
                <blockquote>{reference.testimonial}</blockquote>
              </div>
            ))}
          </div>
        </div>
        <Link href="/references" className={styles.viewMoreBtn}>
          View All References
        </Link>
      </section>
    </main>
  );
}