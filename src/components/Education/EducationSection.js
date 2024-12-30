import React, { useState } from "react";
import Particle from "../Particle";

// Education section component
function EducationSection() {
  const [clickedCard, setClickedCard] = useState(null); // Track clicked card

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering (B.E.)",
      field: "Information Technology Engineering",
      institution: "Savitribai Phule Pune University",
      year: "2021 - 2025",
      description: "Currently Pursuing",
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      field: "Science",
      institution: "Muktangan English School & Jr.College",
      year: "2018 - 2020",
      description: "Percentage: 61.38%",
    },
    {
      id: 3,
      degree: "Secondary Education",
      institution: "Muktangan English School & Jr.College",
      year: "2016 - 2018",
      description: "Percentage: 84.00%",
    },
  ];

  const handleCardClick = (id) => {
    setClickedCard(id === clickedCard ? null : id); // Toggle clicked card
  };

  return (
    <section className="education-section">
      <Particle />
      <h1 className="project-heading">
        Edu<strong className="purple">cation</strong>
      </h1>
      <div className="education-container">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className={`education-card ${
              clickedCard === edu.id ? "clicked" : ""
            }`}
            onClick={() => handleCardClick(edu.id)}
          >
            <div className="education-card-view">
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
