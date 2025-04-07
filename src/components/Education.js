import React from 'react';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Education = () => (
  <section id="education" className="py-16 px-6 md:px-20 my-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Education</h2>

      {/* ALX Africa */}
      <div className="education-item mb-10">
        <FaGraduationCap className="text-5xl text-blue-600 mb-3" />
        <h3 className="text-2xl font-bold text-blue-700">ALX Africa</h3>
        <p className="text-lg text-gray-600">Software Engineering</p>
        <p className="text-gray-500 mt-2 mb-1">
          Completed an intensive program in software engineering, gaining hands-on experience in programming languages, development frameworks, data structures, and algorithms.
        </p>
        <p className="text-sm text-gray-500">May 2023 - July 2024</p>
      </div>

      {/* High School Certificate */}
      <div className="education-item">
        <FaCertificate className="text-5xl text-purple-600 mb-3" />
        <h3 className="text-2xl font-bold text-purple-700">High School Certificate</h3>
        <p className="text-lg text-gray-600">High School Graduation</p>
        <p className="text-gray-500 mt-2 mb-1">
          Completed high school with strong academic performance.
        </p>
       
      </div>
    </div>
  </section>
);

export default Education;
