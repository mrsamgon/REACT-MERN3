import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="car-card">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Car"
        className="car-card-image"
      />
      <h2 className="car-card-title">Tesla Model S</h2>
      <p className="car-card-description">
        The Tesla Model S is a sleek and powerful electric sedan known for its
        cutting-edge technology, luxury, and impressive performance.
      </p>
      <ul className="car-card-features">
        <li>Top Speed: 200 mph</li>
        <li>Range: 396 miles</li>
        <li>0-60 mph: 1.99 seconds</li>
      </ul>
      <button className="car-card-button">Learn More</button>
    </div>
  );
};

export default Card;
