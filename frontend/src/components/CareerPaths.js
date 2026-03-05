import React from "react";
import "../App.css";

function CareerPaths() {
  return (
    <div className="paths-container">

      <h2>Explore Career Paths</h2>

      <div className="paths-grid">

        <div className="path-card">
          <h3>10th Foundation</h3>
          <p>Explore streams and future paths after 10th.</p>
        </div>

        <div className="path-card">
          <h3>MPC</h3>
          <p>Engineering, Technology, Research careers.</p>
        </div>

        <div className="path-card">
          <h3>BiPC</h3>
          <p>Medical, Pharmacy, Biotechnology careers.</p>
        </div>

        <div className="path-card">
          <h3>CEC</h3>
          <p>Commerce, Business, Management careers.</p>
        </div>

        <div className="path-card">
          <h3>MEC</h3>
          <p>Economics, Finance, Analytics careers.</p>
        </div>

        <div className="path-card">
          <h3>HEC</h3>
          <p>Humanities, Law, Civil services careers.</p>
        </div>

        <div className="path-card">
          <h3>Professional Paths</h3>
          <p>Upskilling, career switching and modern jobs.</p>
        </div>

        <div className="path-card">
          <h3>Government Jobs</h3>
          <p>Explore public sector opportunities.</p>
        </div>

      </div>
    </div>
  );
}

export default CareerPaths;