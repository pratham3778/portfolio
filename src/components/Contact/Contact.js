import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";
import emailjs from "emailjs-com";

function Contact() {
  const [formStatus, setFormStatus] = useState(null); // For status message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    // Send the form data using emailjs
    emailjs
      .sendForm(
        "service_bl9w1hv", // Your service ID
        "template_5zbpgvj", // Your template ID
        e.target,
        "nyXzDo1z_1TDDF7Sa" // Your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus(
            "Success! Thank you for reaching out. I'll get back to you soon."
          );
          setFormData({ name: "", email: "", message: "" }); // Clear form
          setTimeout(() => setFormStatus(null), 5000); // Clear success message after 5 seconds
        },
        (error) => {
          console.error(error.text);
          setFormStatus("Sorry, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Connect with <strong className="purple">Me</strong>
        </h1>
        <p style={{ color: "white" }}>
          I'd love to hear from you! Please fill out the form below.
        </p>

        <form onSubmit={handleFormSubmit}>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="contact-card">
              <ContactCard
                label="Your Name"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="contact-card">
              <ContactCard
                label="Your Email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="contact-card">
              <ContactCard
                label="Your Message"
                as="textarea"
                rows={5}
                placeholder="Type your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Col>
          </Row>

          {/* Card for Submit Button */}
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="text-center">
              <Card className="contact-card-view">
                <Card.Body className="text-center">
                  <button
                    variant="submit-btn"
                    type="submit"
                    className="submit-button"
                    style={{
                      maxWidth: "300px", // Increased width
                      fontSize: "1.1rem", // Slightly larger text
                      padding: "10px 20px", // Better padding for a bigger button
                      backgroundColor: "#6f42c1", // Same color as the "Download CV" button
                      borderColor: "#6f42c1", // Match border color
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for the button
                    }}
                  >
                    Submit
                  </button>
                  {/* Display the status message */}
                  {formStatus && (
                    <div
                      className="form-status"
                      role="alert"
                      aria-live="assertive"
                      style={{ marginTop: "10px" }}
                    >
                      {formStatus}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </form>
      </Container>
    </Container>
  );
}

export default Contact;
