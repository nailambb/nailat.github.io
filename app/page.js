'use client';
import React from 'react';
import { useRef } from 'react';
import TopBanner from './src/components/TopBanner';
import Navbar from './src/components/Navbar';
import HeroSection from "./src/components/HeroSection";
import AboutSection from "./src/components/AboutSection";
import ProjectsSection from "./src/components/ProjectsSection";
import ExperienceSection from "./src/components/ExperienceSection";
import ContactSection from "./src/components/ContactSection";
import SquigglyLine from './src/components/SquigglyLine';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <TopBanner message="WELCOME TO NAILAT'S PORTFOLIO!" />
      <Navbar 
        sections={{
          home : homeRef,
          about : aboutRef,
          projects : projectsRef,
          experience : experienceRef,
          contact : contactRef
        }}
      />

      <main>
        <section ref={homeRef}>
          <HeroSection />
        </section>
        <div style={{ position: 'relative', height: '0px', color: '#5C4033' }}>
          <SquigglyLine />
        </div>
        <section ref={aboutRef}>
          <AboutSection />
        </section>

        <section ref={projectsRef}>
          <ProjectsSection />
        </section>

        <section ref={experienceRef}>
        <ExperienceSection />
        </section>

        <section ref={contactRef}>
          <ContactSection />
        </section>
      </main>
    </div>
  );
}