import React from 'react';
import './ProjectCard.css'; // Or './Projects.css' if all styles are combined

// Utility to generate dynamic class
const generateClassName = (title) => {
  return `project-${title.toLowerCase().replace(/\s+/g, '')}`;
};

const ProjectCard = ({ title, description, tech, image, liveLink, githubLink }) => {
  const isMeticulous = title === 'Meticulous Cleaning Services';
  const projectClass = generateClassName(title); // e.g. project-meticulous

  return (
    <div className={`project-card ${projectClass} ${isMeticulous ? 'project-meticulous' : ''}`}>
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-tech">{tech}</p>
        <div className="project-links">
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>}
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
