'use client';

import { useRef, useEffect } from 'react';
import styles from '../styles/CareerTimeline.module.css';

type TimelineItem = {
  title: string;
  org: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills?: string[];
};

const CareerTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineItems: TimelineItem[] = [
    {
      title: "Software Engineer II",
      org: "Data Platform",
      company: "Qualtrics",
      period: "Oct 2022 - Present",
      location: "Seattle, WA",
      description: "Led the development of a data transformation tool enabling users to perform ETL operations directly within Qualtrics. Expanded ETL capabilities helped Qualtrics win massive customer contracts (>$10M) with very niche use cases.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "Agile", "Spark"]
    },
    {
      title: "Software Engineer I",
      org: "Data Platform",
      company: "Qualtrics",
      period: "May 2021 - Oct 2022",
      location: "Seattle, WA",
      description: "Migrated the 3rd most visited SPA from Angular to React as part of a company-wide initiative to standardize on React and achieve WCAG 2.0 compliance.",
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Software Engineer Intern",
      org: "Azure Compute",
      company: "Microsoft",
      period: "May 2019 - Aug 2019",
      location: "Redmond, WA",
      description: "Studied bin packing strategies to optimize the placement of VMs within Azure datacenters by batch processing 8000+ Monte Carlo simulations. Co-authored an internal document summarizing the findings to key stakeholders.",
      skills: ["Python", "Monte Carlo", "Regression", "Batch Processing"]
    },
    {
      title: "Undergrad Student",
      org: "Applied & Computational Mathematics Emphasis (ACME)",
      company: "Brigham Young University",
      period: "Sept 2015 - Apr 2021",
      location: "Provo, UT",
      description: "",
      skills: ["Python", "Monte Carlo", "Regression", "Batch Processing"]
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
                
                <div className={styles.timelineCompany}>
                  <span>{item.org}</span>
                  <span>{item.company}</span>
                </div>
                <div className={styles.timelineLocationContainer}>
                  <span className={styles.timelineLocation}>{item.location}</span>
                </div>
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