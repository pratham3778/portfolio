import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pratham Tanpure </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            <br></br>
            I am currently in the final year of my Bachelor of Engineering
            (B.E.) degree in Information Technology at Anantrao Pawar College of
            Engineering & Research, affiliated with Savitribai Phule Pune
            University.
            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Improvise, Adapt, Overcome"{" "}
          </p>
          <footer className="blockquote-footer">Pratham Tanpure</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
