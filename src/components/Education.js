import React from 'react';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Education = () => (
  <section id="education" className="py-16 px-6 md:px-20 my-10">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-12">Education</h2>

      <div className="education-grid">
        {/* ALX Africa */}
        <div className="education-item">
          <FaGraduationCap className="icon" />
          <h3 className="text-2xl font-bold">ALX Africa</h3>
          <p className="subheading">Software Engineering</p>
          <p className="description">
            Completed an intensive program in software engineering, gaining hands-on experience in programming languages, development frameworks, data structures, and algorithms.
          </p>
          <p className="text-sm">May 2023 - July 2024</p>
        </div>

        {/* High School Certificate */}
        <div className="education-item">
          <FaCertificate className="icon" />
          <h3 className="text-2xl font-bold">High School Certificate</h3>
          <p className="subheading">High School Graduation</p>
          <p className="description">
            Completed high school with strong academic performance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
