import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiWindows } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FaLaptopCode } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faApple} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaptopCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;
