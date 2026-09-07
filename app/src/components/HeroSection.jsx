'use client';
import { motion } from 'framer-motion';
import React from 'react';
import DraggableProp from './DraggableProp';
import styles from './HeroSection.module.css';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className={styles.hero}>

      {/* Draggable flower */}
      <DraggableProp initialX={80} initialY={40}>
        <img src="/images/flower.png" alt="flower" width={80} />
      </DraggableProp>

      {/* Draggable tag */}
      <DraggableProp initialX={850} initialY={400}>
        <div className={styles.stickyTag}>
          ✦ CODER
        </div>
      </DraggableProp>

      {/* Main content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome To My</h1>
        <h1 className={styles.projectTitle}>Project Portfolio!</h1>
        <p className={styles.heroSubtitle}>project portfolio + resume all in one :D</p>
        <Link href="#projects" className={styles.heroButton}>View Projects</Link>
      </div>

      {/* Hero image with cutout effect */}
      <div className={styles.heroImage}>
        <div className={styles.pinkBlob}></div>
        <img src="/images/hero_img_nails.png" alt="Hero" className={styles.cutoutImage} />
      </div>

    </section>
  );
};

export default HeroSection;
  