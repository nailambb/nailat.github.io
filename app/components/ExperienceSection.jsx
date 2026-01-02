import React from 'react';
import styles from './ExperienceSection.module.css';
import Link from 'next/link';

const ExperienceSection = () => {
    return (
        <section id="experience" className={styles.experienceSection}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.experienceList}>
                <div className={styles.experienceCard}>
                    <h3 className={styles.experienceTitle}>Software Engineer at TechCorp</h3>
                    <p className={styles.experienceDuration}>Jan 2020 - Present</p>
                    <p className={styles.experienceDescription}>
                        Working on developing scalable web applications and improving user experience.
                    </p>
                </div>
                <div className={styles.experienceCard}>
                    <h3 className={styles.experienceTitle}>Intern at WebSolutions</h3>
                    <p className={styles.experienceDuration}>Jun 2019 - Dec 2019</p>
                    <p className={styles.experienceDescription}>
                        Assisted in front-end development and contributed to several client projects.
                    </p>
                </div>
                {/* Add more experience cards as needed */}
            </div>
            <Link href="/experience" className={styles.experienceLink}>See More Experience</Link>
        </section>
    );
  }

  export default ExperienceSection;
  