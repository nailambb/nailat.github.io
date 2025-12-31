import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
      <header className={styles.wrapper}>
      <nav className={styles.navbar} role="navigation">
        {/* left: logo */}
        <div className={styles.logo}>
            <Link href="/">nailat taiyabah</Link>
        </div>
        
        {/* center: links */}
        <ul className={styles.links}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
        </ul>

        {/* right: contact-form (email?) */}
        <div className={styles.cta}>
            <li><Link href="/contact">Contact</Link></li>
        </div>
      </nav>
      </header>
    );
  }

  export default Navbar;
  