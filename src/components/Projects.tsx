import React, { useCallback } from 'react';
import styles from './ProjectsSection.module.css';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  { id: 1, title: 'AI Interview Coach', description: 'Interview Coach focused on technical questions using Gemini.', img: "/images/hero-image.jpg", href: 'https://github.com/shreyasi-23/ai-interview-coach', target: "_blank" },
  { id: 2, title: 'Project Two', description: 'A brief description of Project Two.', href: '/projects/project-two' },
  { id: 3, title: 'Project Three', description: 'A brief description of Project Three.', href: '/projects/project-three' },
];

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.emblaWrapper}>
        {/* Viewport — Embla attaches here */}
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {projects.map((project) => (
              <div className={styles.emblaSlide} key={project.id}>
                <div className={styles.projectCard}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <Link href={project.href} className={styles.projectLink}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next buttons */}
        <button className={styles.emblaPrev} onClick={scrollPrev} aria-label="Previous">‹</button>
        <button className={styles.emblaNext} onClick={scrollNext} aria-label="Next">›</button>
      </div>
    </section>
  );
};

export default ProjectsSection;