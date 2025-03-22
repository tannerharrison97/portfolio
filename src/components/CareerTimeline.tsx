'use client';

import { useRef, useEffect } from 'react';
import styles from '../styles/CareerTimeline.module.css';

type TimelineItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
};

const CareerTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineItems: TimelineItem[] = [
    {
      title: "Senior Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      description: "Led development of enterprise applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description: "Developed responsive web applications and collaborated with UX designers to create intuitive user interfaces.",
      skills: ["JavaScript", "React", "CSS/SCSS", "REST APIs"]
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Vision",
      period: "2017 - 2018",
      description: "Assisted in building web applications and learned modern web development practices in an agile environment.",
      skills: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    // Add more timeline items as needed
  ];

  useEffect(() => {
    // Set up IntersectionObserver for smooth animations
    let sectionObserver: IntersectionObserver | null = null;
    let itemObserver: IntersectionObserver | null = null;
    
    try {
      sectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            sectionObserver?.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        sectionObserver.observe(sectionRef.current);
      }
  
      itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.itemVisible);
              itemObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
      );
  
      itemRefs.current.forEach(item => {
        if (item && itemObserver) {
          itemObserver.observe(item);
        }
      });
    } catch (error) {
      console.error("IntersectionObserver error:", error);
    }

    return () => {
      if (sectionObserver && sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      
      if (itemObserver) {
        itemRefs.current.forEach(item => {
          if (item) itemObserver.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <section 
      id="career" 
      ref={sectionRef}
      className={`${styles.career} section`}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Career Journey</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              ref={el => { itemRefs.current[index] = el; }}
              className={styles.timelineItem}
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className={styles.timelineDot}>
                <span className={styles.dotInner}></span>
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                </div>
                
                <div className={styles.timelineCompany}>{item.company}</div>
                <p className={styles.timelineDescription}>{item.description}</p>
                
                {item.skills && (
                  <div className={styles.timelineSkills}>
                    {item.skills.map((skill, i) => (
                      <span key={i} className={styles.timelineSkill}>{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;