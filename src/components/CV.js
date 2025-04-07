// src/components/CV.js
import React from 'react';
import { FaDownload, FaUserTie, FaEnvelopeOpenText } from 'react-icons/fa';

const CV = () => (
  <section id="cv" className="bg-gray-100 py-16 px-6 md:px-20 rounded-2xl shadow-lg my-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="cv-header">Documents</h2>
      <p className="text-lg text-gray-600 mb-8">
        Below you can find downloadable versions of my CV and Cover Letter.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* CV Download */}
        <a
          href="https://1drv.ms/b/c/bc02ce5c09626414/EUVBq8jR35pKmQgK5HIER-YB7OcbgPAAtZFvAFipCdYrgw?e=okja0r"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-card"
        >
          <FaUserTie className="cv-icon" />
          <h3 className="cv-title">Curriculum Vitae</h3>
          <p className="cv-description">Get a full overview of my experience & skills</p>
          <button className="cv-btn">
            <FaDownload />
            Download CV
          </button>
        </a>

        {/* Cover Letter Download */}
        <a
          href="https://1drv.ms/b/s!AhRkYglczgK8w0tDC6ffJdydgSL-?e=evPSuc"
          target="_blank"
          rel="noopener noreferrer"
          className="cover-letter-card"
        >
          <FaEnvelopeOpenText className="cover-letter-icon" />
          <h3 className="cover-letter-title">Cover Letter</h3>
          <p className="cover-letter-description">A personal introduction tailored for you</p>
          <button className="cover-letter-btn">
            <FaDownload />
            Download Letter
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default CV;

