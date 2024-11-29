import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Us</h1>
        <p>
          Welcome to our platform! We are dedicated to providing you with the best
          experience possible. Our mission is to simplify your life with innovative
          solutions and create a positive impact on the world.
        </p>
        <p>
          Our team consists of passionate individuals committed to excellence and
          constantly striving to exceed your expectations. Thank you for being a
          part of our journey!
        </p>
        <div className="team-photo">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Our Team"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
