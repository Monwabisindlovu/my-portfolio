import React from 'react';
import { FaCode, FaPodcast } from 'react-icons/fa';
import "./Interests.css"

const Interests = () => (
  <section id="interests">
    <div className="text-center">
      <h2>Interests</h2>
      <p>Fueling creativity through continuous learning and frontend innovation.</p>

      <div className="interests-grid">
        <div className="interest-card interest-code">
          <FaCode className="icon" />
          <h3>Frontend Exploration</h3>
          <p>
            Passionate about modern UI/UX, responsive design, and frontend frameworks for seamless user experiences.
          </p>
        </div>

        <div className="interest-card interest-podcast">
          <FaPodcast className="icon" />
          <h3>Tech Podcasts & Blogs</h3>
          <p>
            Staying current with tech trends, engineering insights, and developer journeys through curated content.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Interests;
