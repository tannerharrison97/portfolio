'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="#hero" className={styles.navLink}>
            Home
          </Link>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#skills" className={styles.navLink}>
            Skills
          </Link>
          <Link href="#projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.menuIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.menuIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <div className={styles.mobileNavContainer}>
            <Link
              href="#hero"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 