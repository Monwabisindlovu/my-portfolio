import React from 'react';
import { FaCode, FaDumbbell, FaPodcast } from 'react-icons/fa';

const Interests = () => (
  <section id="interests">
    <div className="text-center">
      <h2>Interests</h2>
      <p>What fuels my creativity and keeps me in sync with tech and well-being.</p>

      <div className="interests-grid">
        <div className="interest-card interest-code">
          <FaCode className="icon" />
          <h3>Frontend Exploration</h3>
          <p>
            Constantly experimenting with modern UI/UX and frontend frameworks to craft better user experiences.
          </p>
        </div>

        <div className="interest-card interest-podcast">
          <FaPodcast className="icon" />
          <h3>Tech Podcasts & Blogs</h3>
          <p>
            Staying updated with industry trends, dev stories, and deep tech insights through podcasts and blogs.
          </p>
        </div>

        <div className="interest-card interest-fitness">
          <FaDumbbell className="icon" />
          <h3>Gym & Fitness</h3>
          <p>
            Keeping both mind and body sharp — weightlifting helps me stay focused, healthy, and energized.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Interests;
