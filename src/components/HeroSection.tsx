"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/HeroSection.module.css";

const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_TIME = 1500;

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  const phrases = [
    "Software Engineer",
    "Mathematician",
    "Problem Solver",
    "Data Enthusiast",
    "Critical Thinker",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      if (isDeleting) {
        setText(text.substring(0, text.length - 1));
      } else {
        // Normal character deletion
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        setTypingSpeed(DELETING_SPEED);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(TYPING_SPEED);
      } else {
        setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className={`${styles.hero} section`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            👋 Hi, I&apos;m <span className={styles.name}>Tanner Harrison</span>
          </h1>
          <h2 className={styles.subtitle}>
            I&apos;m a <span className={styles.animatedText}>{text}</span><span className={styles.cursor}>|</span>
          </h2>
          <p className={styles.description}>
            I&apos;m passionate about building quality solutions to difficult problems. I love learning. I&apos;m not afraid to challenge the status quo.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src="/Tanner Headshot.png"
              alt="Profile photo"
              fill
              className={styles.circleImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
