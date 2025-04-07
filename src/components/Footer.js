// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';  // Add icons

const Footer = () => (
  <footer>
    <div className="footer-container">
      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://github.com/Monwabisindlovu" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/monwabisindlovu" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/monwabisindlovu" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="mailto:monwabisindlovu78@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <p>Johannesburg, South Africa</p>
        <p>+27 84 962 1939</p>
        <p>monwabisindlovu78@gmail.com</p>
      </div>

      {/* Copyright Notice */}
      <div className="copyright">
        <p>&copy; 2025 Monwabisi Ndlovu. All Rights Reserved.</p>
      </div>

      {/* Navigation Links (Optional) */}
      <div className="nav-links">
        <a href="#about">About</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
