'use client';

import { useState } from 'react';
import styles from '../styles/SkillsSection.module.css';

type Skill = {
  name: string;
  proficiency: number;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'React', proficiency: 85 },
        { name: 'Next.js', proficiency: 80 },
        { name: 'Tailwind CSS', proficiency: 85 },
        { name: 'TypeScript', proficiency: 80 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 80 },
        { name: 'Express', proficiency: 75 },
        { name: 'MongoDB', proficiency: 70 },
        { name: 'PostgreSQL', proficiency: 65 },
        { name: 'GraphQL', proficiency: 60 },
        { name: 'AWS', proficiency: 55 },
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git/GitHub', proficiency: 90 },
        { name: 'VS Code', proficiency: 95 },
        { name: 'Figma', proficiency: 75 },
        { name: 'Webpack', proficiency: 70 },
        { name: 'Jest', proficiency: 75 },
        { name: 'Docker', proficiency: 60 },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>My Skills</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.tabs}>
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className={styles.skillList}>
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercentage}>{skill.proficiency}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 