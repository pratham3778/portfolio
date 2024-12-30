import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa"; // Import Python icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava /> {/* Java icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython /> {/* Python icon */}
      </Col>
    </Row>
  );
}

export default Techstack;
