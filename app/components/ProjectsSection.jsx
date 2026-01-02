import React from 'react';
import styles from './ProjectsSection.module.css';
import Link from 'next/link';

const ProjectsSection = () => {
    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.projectList}>
                <div className={styles.projectCard}>
                    <h3 className={styles.projectTitle}>Project One</h3>
                    <p className={styles.projectDescription}>A brief description of Project One.</p>
                    <Link href="/projects/project-one" className={styles.projectLink}>Learn More</Link>
                </div>
                <div className={styles.projectCard}>
                    <h3 className={styles.projectTitle}>Project Two</h3>
                    <p className={styles.projectDescription}>A brief description of Project Two.</p>
                    <Link href="/projects/project-two" className={styles.projectLink}>Learn More</Link>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </section>
    );
  }

  export default ProjectsSection;
  