import React from 'react';
import ProjectCard from './ProjectCard';
import journalhubImage from '../assets/journalhub.jpg';
import invoisseurImage from '../assets/invoisseur.jpg';
import logoImage from '../assets/logo.png';
import logo1Image from '../assets/logo1.png';
import './Projects.css';

const projects = [
  {
  
    title: 'Meticulous Cleaning Services',
    description: 'A modern cleaning service website with booking, quote system, and responsive UI.',
    tech: 'React, Firebase, EmailJS, Vercel',
    image: logoImage,
    liveLink: 'https://meticulous-cleaning-services.vercel.app/',
    githubLink: 'https://github.com/Monwabisindlovu/meticulous-cleaning-services',

  },
  {
    title: 'Invoisseur',
    description: 'A free online invoice maker to streamline invoicing.',
    tech: 'Next.js, Tailwind, Css, Vercel',
    image: invoisseurImage,
    liveLink: 'https://www.invoisseur-free-invoice-maker.com/',
    githubLink: '',
  },
  {
    title: 'EzyInvoice',
    description: 'A modern invoicing solution built for freelancers and small businesses.',
    tech: 'React.js, Tailwind CSS, Vercel',
    image: logo1Image,
    liveLink: 'https://vercel.com/monwabisindlovus-projects/ezyinvoice01',
    githubLink: 'https://github.com/Monwabisindlovu/ezyinvoice01',
  },
  {
    title: 'JournalHub',
    description: 'A web journal application built with Node.js and React.',
    tech: 'Node.js, MongoDB',
    image: journalhubImage,
    liveLink: '',
    githubLink: 'https://github.com/legennd48/JournalHub',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
          image={project.image}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  </section>
);

export default Projects;
