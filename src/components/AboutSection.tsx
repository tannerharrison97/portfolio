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
              Hi there! I&apos;m a passionate web developer with a strong background in building 
              modern, responsive websites and applications. I love solving complex problems and 
              creating intuitive, user-friendly interfaces.
            </p>
            
            <h3 className={styles.subtitle}>My Journey</h3>
            <p className={styles.paragraph}>
              My journey in web development began over 5 years ago when I built my first website. 
              Since then, I&apos;ve continuously expanded my skills and knowledge, staying up-to-date 
              with the latest technologies and best practices in the industry.
            </p>
            
            <h3 className={styles.subtitle}>What I Do</h3>
            <p className={styles.paragraph}>
              I specialize in front-end development using React.js and Next.js, with a strong 
              focus on responsive design, accessibility, and performance optimization. I also have 
              experience with back-end technologies, making me a versatile full-stack developer.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.number}>5+</span>
                <span className={styles.label}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>50+</span>
                <span className={styles.label}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>20+</span>
                <span className={styles.label}>Happy Clients</span>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
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