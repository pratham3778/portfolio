import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import ums from "../../Assets/Projects/ums.jpeg";
import wapp from "../../Assets/Projects/wapp.png";
import vqa from "../../Assets/Projects/vqa.jpeg";
import st from "../../Assets/Projects/st.jpeg";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "centre", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={st}
              title="Spending Tracker Application"
              description="Developed a robust system for tracking personal daily expenses, enabling efficient money management and budgeting. It monitor expenditures on a date-wise basis, add new expenses, and gain insights into their spending habits, improving financial oversight and decision-making."
              ghLink="https://github.com/pratham3778/Spending-Tracker.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={vqa}
              title="Finance Video Question Answering using Large Language Model"
              description="Developed chatbot leveraging Large Language Models to provide answers based on user
queries about video content. Utilized Python libraries and NLP algorithms to ensure keyword
relevance in the finance domain."
              ghLink="https://github.com/pratham3778/WeatherApplication"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ums}
              title="University Managment System"
              description="Developed a University Management System with centralized management of student, faculty, courses, and attendance records, enabling efficient addition, viewing, and updating of information."
              ghLink="https://github.com/pratham3778/University-Management-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={wapp}
              title="Weather Application"
              description="Built a web-based weather app, which allows users to input a city name and receive real time temperature
and wind flow information. Utilized an online weather API to fetch and display accurate weather data."
              ghLink="https://github.com/pratham3778/WeatherApplication"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
