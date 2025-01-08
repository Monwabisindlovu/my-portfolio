import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>JournalHub</h3>
      <p>A web journal application built with Node.js and React.</p>
      <a href="https://github.com/legennd48/JournalHub">View Project</a>
    </div>
    <div className="project">
      <h3>Invoisseur</h3>
      <p>A free online invoice maker to streamline invoicing.</p>
      <a href="https://www.invoisseur-free-invoice-maker.com/">View Project</a>
    </div>
    <div className="project">
      <h3>Church Website</h3> {/* New Project Title */}
      <p>A website for Mzilikazi Barbourfields Church of the Nazarene.</p> {/* Description */}
      <a href="https://mzilikazi-barbourfields-church-of-the-nazaren.vercel.app/">View Project</a> {/* Link */}
    </div>
  </section>
);

export default Projects;
