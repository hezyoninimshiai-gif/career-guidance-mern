import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Find Your Path</h1>

      <p>
        Explore opportunities for 10th, Inter, and Professionals instantly.
      </p>

      <div className="hero-buttons">
        <button className="explore-btn">Explore Now</button>
        <button className="guide-btn">Get Personalized Guidance</button>
      </div>
    </div>
  );
}

export default HeroSection;