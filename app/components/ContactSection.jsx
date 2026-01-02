import React from 'react';
import styles from './ContactSection.module.css';
import Link from 'next/link';

const ContactSection = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Contact Me</h2>
            <p className={styles.contactText}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me!
            </p>
            <Link href="/contact" className={styles.contactLink}>Get in Touch</Link>
        </section>
    );
  }

  export default ContactSection;