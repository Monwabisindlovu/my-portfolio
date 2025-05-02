import React from 'react';
import "./About.css"
const About = () => (
  <section id="about" className="py-12 px-6 md:px-16 my-10">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
      About Me
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      I’m a passionate and detail-oriented software engineer with deep expertise in technologies such as 
      <span className="font-semibold text-blue-600"> React.js, Node.js, Next.js, Html, Css and JavaScript.</span>
      I thrive on designing and building scalable, high-performance software solutions that tackle real-world problems and drive innovation. 
      My focus is on clean code, user-centric design, and continuously improving systems for better performance and maintainability.
    </p>
  </section>
);

export default About;
