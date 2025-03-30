'use client';

import { useRef, useEffect, useState } from 'react';
import styles from '../styles/AboutSection.module.css';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`${styles.about} ${isVisible ? styles.visible : ''} section`}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.image}></div>
          </div>
          
          <div className={styles.text}>
            <h3 className={styles.subtitle}>Who I Am</h3>
            <p className={styles.paragraph}>
              Hi there! I&apos;m a passionate engineer with a strong background in software development. I love using code to solve complex problems.
            </p>
            
            <h3 className={styles.subtitle}>My Journey</h3>
            <p className={styles.paragraph}>
              My journey in software engineering began in college where I studied computer science and applied mathematics.
            </p>
            
            <h3 className={styles.subtitle}>What I Do</h3>
            <p className={styles.paragraph}>
              I have a wide range of experience in software development, from building complex web applications to a background in various data science and machine learning projects.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.number}>5+</span>
                <span className={styles.label}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>500+</span>
                <span className={styles.label}>Merge Requests</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>Major Features Delivered</span>
              </div>
            </div>
            
            <a 
              href="/Harrison, Tanner Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.resumeButton}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 