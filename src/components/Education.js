import React from 'react';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Education = () => (
  <section id="education" className="py-16 px-6 md:px-20 my-10">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-12">Education</h2>

      <div className="education-grid grid gap-8 md:grid-cols-2">
        {/* ALX Africa */}
        <div className="education-item bg-white p-6 rounded-lg shadow-md text-left">
          <FaGraduationCap className="icon text-3xl text-blue-500 mb-3" />
          <h3 className="text-2xl font-bold">ALX Africa</h3>
          <p className="subheading text-gray-600">Software Engineering</p>
          <p className="description mt-2 text-sm text-gray-700">
            Completed an intensive program in software engineering, gaining hands-on experience in programming languages, development frameworks, data structures, and algorithms.
          </p>
          {/*<p className="text-sm text-gray-500 mt-1">May 2023 - July 2024</p>*/}
        </div>

        {/* High School Certificate */}
        <div className="education-item bg-white p-6 rounded-lg shadow-md text-left">
          <FaCertificate className="icon text-3xl text-blue-500 mb-3" />
          <h3 className="text-2xl font-bold">High School Certificate</h3>
          <p className="subheading text-gray-600">High School Graduation</p>
          <p className="description mt-2 text-sm text-gray-700">
            Completed high school with strong academic performance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
