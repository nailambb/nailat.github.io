'use client';
import React from 'react';
import {useState, useEffect} from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar({ sections }) {
    const scrollTo = (ref) => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const handleClick = (e, ref) => {
      e.preventDefault();
      scrollTo(ref);
    };

    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 40; // Show if scrolling up or near the top
        
        if (visible !== isVisible) {
          setIsVisible(visible);
        }
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible, prevScrollPos]); // Add dependencies

    return (
      <header className={styles.wrapper}>
      <nav className={`${styles.navbar} ${
                       isVisible ? styles.navbarVisible : styles.navbarHidden
                     }`} role="navigation">
        {/* left: logo */}
        <div className={styles.logo}>
            <Link 
              href="/"
              onClick={(e) => handleClick(e, sections.home)}
            > 
              nailat taiyabah
            </Link>
        </div>
        
        {/* center: links */}
        <ul className={styles.links}>
          <li>
            <Link 
              href="/about"
              onClick={(e) => handleClick(e, sections.about)}
            >
              About
            </Link>
          </li>

          <li>
            <Link 
              href="/projects"
              onClick={(e) => handleClick(e, sections.projects)}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link 
              href="/experience"
              onClick={(e) => handleClick(e, sections.experience)}
            >
              Experience
            </Link>
          </li>
        </ul>

        {/* right: contact-form (email?) */}
        <div className={styles.cta}>
        <li>
            <Link 
              href="/contact"
              onClick={(e) => handleClick(e, sections.contact)}
            >
              Contact
            </Link>
          </li>
        </div>
      </nav>
      </header>
    );
  }
  