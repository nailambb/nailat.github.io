import React from 'react';
import styles from './HeroSection.module.css';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className={styles.heroContent}>
            <h1 className={styles.title}>Welcome to My Portfolio</h1>
            <p className={styles.subtitle}>Showcasing my projects and experience</p>
            <Link href="#projects" className={styles.ctaButton}>View Projects</Link>
        </div>
    );
  }

  export default HeroSection;
  