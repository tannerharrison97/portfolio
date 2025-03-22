'use client';

import { useState } from 'react';
import styles from '../styles/ProjectsSection.module.css';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product catalog, shopping cart, and payment integration.',
      image: '/placeholder-project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/ecommerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects. Features include drag-and-drop interface, task prioritization, and team collaboration.',
      image: '/placeholder-project2.jpg',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/taskmanager',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data and forecasts. Integrates with a weather API to display current conditions and 5-day forecasts.',
      image: '/placeholder-project3.jpg',
      tags: ['JavaScript', 'API', 'CSS'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/weather',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS. Features a clean design, dark mode support, and interactive elements.',
      image: '/placeholder-project4.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/portfolio',
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'An application that helps users find recipes based on ingredients they have. Includes features like recipe saving, meal planning, and nutritional information.',
      image: '/placeholder-project5.jpg',
      tags: ['React', 'API', 'CSS'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/recipefinder',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A blogging platform with features like user authentication, content management, comments, and social sharing. Built with modern web technologies.',
      image: '/placeholder-project6.jpg',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/yourusername/blogplatform',
    },
  ];

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>My Projects</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.filters}>
          {allTags.map((tag, index) => (
            <button
              key={index}
              className={`${styles.filter} ${filter === tag ? styles.activeFilter : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div 
                className={styles.projectImage} 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 