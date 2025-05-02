// src/components/Header.js
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons
import '../styles.css'; // Assuming styles are in a separate CSS file
import Navbar from './Navbar'; // Importing Navbar component

const Header = () => (
  <header className="header-container">
    <div className="header-content">
      <h1 className="header-name">Monwabisi Ndlovu</h1>
      <p className="header-contact">
        <FaMapMarkerAlt className="header-icon" /> Johannesburg, South Africa &nbsp;|&nbsp;
        <a href="tel:+27849621939" className="clickable-info">
          <FaPhoneAlt className="header-icon" /> +27849621939
        </a>
        &nbsp;|&nbsp;
        <a href="mailto:monwabisindlovu78@gmail.com" className="clickable-info">
          <FaEnvelope className="header-icon" /> monwabisindlovu78@gmail.com
        </a>
      </p>
    </div>

    {/* Add Navbar here */}
    <Navbar />
  </header>
);

export default Header;
