import React, { useEffect } from 'react';
import { FaDownload, FaUserTie, FaEnvelopeOpenText } from 'react-icons/fa';
import './cv.css';

const CV = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.cv-card, .cover-letter-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.style.opacity = 1;
      }, 200);
    });
  }, []);

  return (
    <section id="cv">
      <h2 className="cv-header">Documents</h2>
      <p className="cv-subtext">
        Below you can find downloadable versions of my CV and Cover Letter.
      </p>

      <div className="cv-grid">
        {/* CV Card */}
        <a
          href="https://1drv.ms/b/c/bc02ce5c09626414/EUVBq8jR35pKmQgK5HIER-YB7OcbgPAAtZFvAFipCdYrgw?e=okja0r"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-card"
        >
          <FaUserTie className="cv-icon" />
          <h3 className="cv-title">Curriculum Vitae</h3>
          <p className="cv-description">
            Get a full overview of my experience & skills
          </p>
          <button className="cv-btn">
            <FaDownload />
            Download CV
          </button>
        </a>

        {/* Cover Letter Card */}
        <a
          href="https://1drv.ms/b/s!AhRkYglczgK8w0tDC6ffJdydgSL-?e=evPSuc"
          target="_blank"
          rel="noopener noreferrer"
          className="cover-letter-card"
        >
          <FaEnvelopeOpenText className="cover-letter-icon" />
          <h3 className="cover-letter-title">Cover Letter</h3>
          <p className="cover-letter-description">
            A personal introduction tailored for you
          </p>
          <button className="cover-letter-btn">
            <FaDownload />
            Download Letter
          </button>
        </a>
      </div>
    </section>
  );
};

export default CV;
