import React from 'react';

const projects = [
  {
    title: 'JournalHub',
    description: 'A web journal application built with Node.js and React.',
    repo: 'https://github.com/legennd48/JournalHub',
    className: 'project-journalhub',
  },
  {
    title: 'Invoisseur',
    description: 'A free online invoice maker to streamline invoicing.',
    link: 'https://www.invoisseur-free-invoice-maker.com/',
    className: 'project-invoisseur',
  },
  {
    title: 'Church Website',
    description: 'A website for Mzilikazi Barbourfields Church of the Nazarene.',
    link: 'https://mzilikazi-barbourfields-church-of-the-nazaren.vercel.app/',
    className: 'project-churchsite',
  },
  {
    title: 'EzyInvoice',
    description: 'A modern invoicing solution built for freelancers and small businesses.',
    link: 'https://ezyinvoice01.vercel.app/',
    repo: 'https://github.com/Monwabisindlovu/ezyinvoice01',
    className: 'project-ezyinvoice',
  },
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className={`project ${project.className}`} key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">Live Site</a>
            )}
            {project.repo && project.link && <span> | </span>}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
