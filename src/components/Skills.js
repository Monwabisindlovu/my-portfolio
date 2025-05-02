// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Assuming styles are in a separate CSS file
import mongodbImage from '../assets/mongodb';
import htmlIconImage from '../assets/html-icon.jpg';
import nodejsImage from '../assets/nodejs.avif'


const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-container">
      <div className="skill">
      <img src={nodejsImage} alt="Node.js" />
        <p>Node.js</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/javascript.jpeg?raw=true" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="skill">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" alt="React" />
        <p>React</p>
      </div>
      {/* New skill category: Front-End Development */}
      <div className="skill">
        <img src={mongodbImage} alt="MongoDB" />
        <p>MongoDB</p>
      </div>
      <div className="skill">
        <img src={htmlIconImage} alt="HTML & CSS" />
        <p>HTML & CSS</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/expressjs.jpeg?raw=true" alt="Express.js" />
        <p>Express.js</p>
      </div>
    </div>
  </section>
);

export default Skills;
