import React from 'react';
import { FaLaptopCode, FaDatabase, FaReact } from 'react-icons/fa';

const About = () => (
  <section id="about" className="py-12 px-6 md:px-16 my-10">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
      About Me
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I’m a passionate and detail-oriented software engineer with deep expertise in technologies such as 
      <span className="font-semibold text-blue-600"> C, React.js, Node.js, Python, and JavaScript.</span>
      I thrive on designing and building scalable, high-performance software solutions that tackle real-world problems and drive innovation. 
      My focus is on clean code, user-centric design, and continuously improving systems for better performance and maintainability.
    </p>

    <div className="flex justify-around text-4xl text-gray-700">
      {/* Coding Icon */}
      <div className="text-center">
        <FaLaptopCode className="coding-icon mb-3" />
        <p className="text-sm text-gray-600">Software Engineering</p>
      </div>
      
      {/* Backend Icon */}
      <div className="text-center">
        <FaDatabase className="backend-icon mb-3" />
        <p className="text-sm text-gray-600">Backend Development</p>
      </div>

      {/* React Icon */}
      <div className="text-center">
        <FaReact className="frontend-icon mb-3" />
        <p className="text-sm text-gray-600">Frontend Development</p>
      </div>
    </div>
  </section>
);

export default About;
