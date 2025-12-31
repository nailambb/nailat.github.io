import React from 'react';
import Navbar from '../app/navbar';  

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  return (
    <div className="grid-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <Header title="Welcome to My Homepage" />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl">About Me</h2>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl">Projects</h2>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl">Projects</h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl">Contact</h2>
      </section>
    </div>
  );
}