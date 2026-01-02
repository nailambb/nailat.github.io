import React from 'react';
import styles from './AboutSection.module.css';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.aboutText}>
                Hello! I'm Nailat Taiyabah, a passionate developer with experience in building web applications using modern technologies. I love creating efficient and user-friendly solutions to real-world problems.
            </p>
            <Link href="/about" className={styles.learnMoreLink}>Learn More About Me</Link>
        </section>
    );
  }

  export default AboutSection;
  