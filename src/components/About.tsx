'use client';
import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const skills = ['UI/UX Design', 'React', 'Next.js', 'Node.js', 'Figma', 'Tailwind CSS'];
  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Arabic', level: 'Intermediate' },
  ];

  return (
    <section className={styles.about}>
      {/* Header Card */}
      <div className={styles.headerCard}>
        <div className={styles.checkerBorder}></div>
        <div className={styles.headerInner}>
          <div className={styles.photoWrapper}>
            <div className={styles.paperclip}>
              <svg width="30" height="60" viewBox="0 0 30 60" fill="none">
                <path d="M15 5 C5 5 5 20 15 20 C25 20 25 10 15 10 C8 10 8 50 15 50 C22 50 22 35 15 35" 
                  stroke="#a8b8d8" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.photoCard}>
              <div className={styles.photoCardInner}>
                <img src="/images/hero-image.jpg" alt="Profile" className={styles.photo} />
              </div>
            </div>
          </div>

          <div className={styles.headerText}>
            <div className={styles.helloWrapper}>
              <span className={styles.imText}>I'm</span>
              <h1 className={styles.helloText}>Hello!</h1>
            </div>
            <div className={styles.namePill}>Nailat's Portfolio</div>
            <p className={styles.bio}>
              A passionate developer specializing in building beautiful, 
              functional web experiences. Experienced in React, Next.js, 
              and modern frontend technologies to deliver creative and 
              compelling digital solutions.
            </p>
            <div className={styles.contactRow}>
              <span className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span> +1 234 567 8901
              </span>
              <span className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span> hello@nailat.dev
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <div className={styles.divider}></div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Your University</h3>
              <p className={styles.entrySubtitle}>Bachelor of Computer Science</p>
              <p className={styles.entrySubtitle}>Major in Software Engineering</p>
              <span className={styles.datePill}>2020 – 2024</span>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skillPill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Languages</h2>
            <div className={styles.languageGrid}>
              {languages.map((lang) => (
                <div key={lang.name}>
                  <p className={styles.langName}>{lang.name}</p>
                  <p className={styles.langLevel}>{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <div className={styles.divider}></div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>

            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Freelance Developer</h3>
              <span className={styles.datePill}>2023 – Present</span>
              <ul className={styles.bulletList}>
                <li>Built and deployed full-stack web applications for clients</li>
                <li>Designed responsive UI/UX with React and Tailwind CSS</li>
              </ul>
            </div>

            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Tech Company Name</h3>
              <p className={styles.entrySubtitle}>Frontend Developer Intern</p>
              <ul className={styles.bulletList}>
                <li>Developed new features for the company's main product dashboard</li>
                <li>Collaborated with design team to implement pixel-perfect components</li>
              </ul>
              <span className={styles.datePill}>June 2023 – Aug 2023</span>
            </div>

            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>University Dev Club</h3>
              <p className={styles.entrySubtitle}>Project Lead</p>
              <ul className={styles.bulletList}>
                <li>Led a team of 5 to build an internal club management web app</li>
                <li>Organized workshops on modern web development practices</li>
              </ul>
              <span className={styles.datePill}>2022 – 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
  