// src/components/Header.js
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons
import '../styles.css'; // Assuming styles are in a separate CSS file

const Header = () => (
  <header className="header-container">
    <h1 className="header-name">Monwabisi Ndlovu</h1>
    <p className="header-contact">
      <FaMapMarkerAlt className="header-icon" /> Johannesburg, South Africa &nbsp;|&nbsp;
      <FaPhoneAlt className="header-icon" /> +27849621939 &nbsp;|&nbsp;
      <FaEnvelope className="header-icon" /> monwabisindlovu78@gmail.com
    </p>
  </header>
);

export default Header;
