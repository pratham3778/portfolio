import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function ContactCard({
  label,
  type = "text",
  placeholder,
  as,
  rows,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <Card className="contact-card-view">
      <Card.Body>
        <Form.Group className="mb-3">
          <Card.Title className="contact-label">{label}</Card.Title>
          <Form.Control
            className="contact-input"
            type={type}
            placeholder={placeholder}
            as={as}
            rows={rows}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
