import React from 'react';
import './Hero.css'; // Make sure this has both sets of styles merged

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <h1>Monwabisi Ndlovu</h1>
          <p className="hero-role">React & Next.js Frontend Developer</p>
          <span className="tagline">Crafting clean, responsive, and modern web apps</span>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>

        <div className="hero-image">
          <img
            src="https://raw.githubusercontent.com/Monwabisindlovu/portfolio-landing_page/54270a4d398a6eba48587f883b987f376379641a/images/monwa.jpg"
            alt="Monwabisi Ndlovu"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
