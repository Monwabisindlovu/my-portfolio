// src/components/Skills.js
import React from 'react';
import '../styles.css'; // Assuming styles are in a separate CSS file

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-container">
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/OIP%20(1)node.jpeg?raw=true" alt="Node.js" />
        <p>Node.js</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/flask.jpeg?raw=true" alt="Flask" />
        <p>Flask</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/python.jpeg?raw=true" alt="Python" />
        <p>Python</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/java.jpeg?raw=true" alt="Java" />
        <p>Java</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/javascript.jpeg?raw=true" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/expressjs.jpeg?raw=true" alt="Express.js" />
        <p>Express.js</p>
      </div>
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/mangodb.jpeg?raw=true" alt="MongoDB" />
        <p>MongoDB</p>
      </div>
      {/* New skill category: Front-End Development */}
      <div className="skill">
        <img src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/html-icon.jpg?raw=true" alt="HTML & CSS" />
        <p>HTML & CSS</p>
      </div>
      <div className="skill">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" alt="React" />
        <p>React</p>
      </div>
    </div>
  </section>
);

export default Skills;
