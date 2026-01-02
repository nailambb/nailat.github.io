'use client';

import React from 'react';
import { useRef } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

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

      <main className="container mx-auto px-4">
        <section ref={homeRef}>
          <HeroSection />
        </section>

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