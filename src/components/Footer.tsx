'use client';

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerDot}></div>
        <div className={styles.dividerLine}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span>Portfolio</span>
            </Link>
            <p className={styles.description}>
              A passionate web developer building amazing digital experiences.
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Site Map</h3>
              <ul className={styles.linkItems}>
                <li>
                  <Link href="/#hero" className={styles.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className={styles.link}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#skills" className={styles.link}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className={styles.link}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className={styles.link}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Social Media</h3>
              <ul className={styles.linkItems}>
                <li>
                  <a 
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} Your Name. All rights reserved.
          </div>
          
          <button 
            className={styles.scrollTop}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 