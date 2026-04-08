import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import careerData from "../data/careerData";
import "../index.css";

const MPCPage = () => {
  const navigate = useNavigate();
  const careers = careerData.mpc;

  const [filter, setFilter] = useState("all");

  const filteredCareers =
    filter === "all"
      ? careers
      : careers.filter((c) => c.category === filter);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">MPC Career Options</h2>

      {/* Filter Buttons */}
      <div className="mb-3">
        <button
          onClick={() => setFilter("all")}
          className="btn btn-secondary me-2"
        >
          All
        </button>

        <button
          onClick={() => setFilter("coding")}
          className="btn btn-primary me-2"
        >
          Coding
        </button>

        <button
          onClick={() => setFilter("core")}
          className="btn btn-warning"
        >
          Core
        </button>
      </div>

      {/* Career Cards */}
      <div className="row">
        {filteredCareers.map((career) => (
          <div className="col-md-4 mb-3" key={career.id}>
            <div
              className="card p-3 shadow-sm career-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/career/${career.id}`)}
            >
              <h4>{career.title}</h4>
              <p>{career.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MPCPage;