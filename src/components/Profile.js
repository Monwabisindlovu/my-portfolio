import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles.css';

const Profile = () => (
  <section id="profile">
    <img
      src="https://raw.githubusercontent.com/Monwabisindlovu/portfolio-landing_page/54270a4d398a6eba48587f883b987f376379641a/images/monwa.jpg"
      alt="Monwabisi Ndlovu"
      className="profile-img"
    />
    <h3 className="profile-title">front-End Developer</h3>

    <div className="profile-info">
      <span><FaMapMarkerAlt className="profile-icon" /> Johannesburg, South Africa</span>
      <span><FaPhoneAlt className="profile-icon" /> +27849621939</span>
      <span><FaEnvelope className="profile-icon" /> monwabisindlovu78@gmail.com</span>
    </div>
  </section>
);

export default Profile;
