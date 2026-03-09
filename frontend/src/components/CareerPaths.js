import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "./CareerPaths.css";
import { motion } from "framer-motion";

function CareerPaths(){

return(
<div className="career-container">
<h2>Explore Career Paths</h2>
<div className="career-grid">
<motion.div className="career-card" whileHover={{scale:1.05}}>
    <h3>MPC</h3>
<p>B.Tech → CS, ECE, EEE</p>
<p>Jobs: Software Engineer, Data Scientist</p>
<p>Salary: ₹6L - ₹25L</p>
<Link to="/mpc">
<button>Explore</button>
</Link>
</motion.div>

<motion.div className="career-card">
  <h3>BiPC</h3>
  <p>MBBS, Pharmacy, Nursing</p>
  <p>Jobs: Doctor, Pharmacist</p>
  <p>Salary: ₹8L - ₹40L</p>
  <Link to="/bipc">
    <button>Explore</button>
  </Link>
</motion.div>

<motion.div className="career-card">
  <h3>CEC</h3>
  <p>B.Com, CA, CS</p>
  <p>Jobs: Accountant, Auditor</p>
  <p>Salary: ₹4L - ₹15L</p>
  <Link to="/cec">
    <button>Explore</button>
  </Link>
</motion.div>

<motion.div className="career-card">
  <h3>MEC</h3>
  <p>Economics, Business Analytics</p>
  <p>Jobs: Economist, Analyst</p>
  <p>Salary: ₹5L - ₹18L</p>
  <Link to="/mec">
    <button>Explore</button>
  </Link>
</motion.div>
</div>
</div>
)
}
export default CareerPaths;
