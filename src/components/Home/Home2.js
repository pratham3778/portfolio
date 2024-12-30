import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’ve always had a passion for programming, and every day I learn
              something new and exciting.
              <br />
              <br />
              I’m proficient in{" "}
              <i>
                <b className="purple"> Java </b>
              </i>
              , and I enjoy exploring its depths.
              <br />
              <br />
              As a fresher Java developer, my main focus is on building
              scalable, efficient, and maintainable backend systems. I am
              passionate about exploring Java’s powerful ecosystem and using it
              to solve real-world problems. I am particularly interested in
              areas such as <b className="purple">
                {" "}
                Backend development{" "}
              </b>, <b className="purple"> RESTful services </b>, and{" "}
              <b className="purple"> Database management </b>
              , and I’m excited about applying my skills in real-world
              projects.&nbsp;
              <br />
              <br />
              Whenever possible, I channel my enthusiasm for development into
              deepening my understanding of Java, exploring frameworks like
              <b className="purple"> Spring</b>,{" "}
              <b className="purple"> Hibernate</b>, and{" "}
              <b className="purple"> JavaFX</b>, and leveraging Java’s extensive
              libraries and tools to create robust and high-performance
              applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pratham3778"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/BurNz3778"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pratham-tanpure/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_prathammmm_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
