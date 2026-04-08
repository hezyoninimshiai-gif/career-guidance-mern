import React from "react";
import { useParams } from "react-router-dom";
import careerData from "../data/careerData";

const CareerDetail = () => {
  const { id } = useParams();

  // combine all career arrays (only mpc has objects for now)
  const allCareers = Object.values(careerData).flat();

  const career = allCareers.find((c) => c.id === id);

  if (!career) {
    return <h2 className="text-center mt-5">Career not found</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>{career.title}</h2>
      <p>{career.description}</p>

      <h4>Required Skills</h4>
      <ul>
        {career.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h4>Career Path</h4>
      <p>{career.path}</p>
    </div>
  );
};

export default CareerDetail;