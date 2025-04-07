// src/components/Profile.js
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import the icons
import '../styles.css';

const Profile = () => (
  <section id="profile">
    <img
      src="https://raw.githubusercontent.com/Monwabisindlovu/portfolio-landing_page/54270a4d398a6eba48587f883b987f376379641a/images/monwa.jpg"
      alt="Monwabisi Ndlovu"
      className="profile-img"
    />
    <h3 className="profile-title">Full Stack Developer</h3> {/* Developer title */}
    <p className="profile-info">
      <FaMapMarkerAlt className="profile-icon" /> Johannesburg, South Africa &nbsp;|&nbsp;
      <FaPhoneAlt className="profile-icon" /> +27849621939 &nbsp;|&nbsp;
      <FaEnvelope className="profile-icon" /> monwabisindlovu78@gmail.com
    </p>
  </section>
);

export default Profile;
