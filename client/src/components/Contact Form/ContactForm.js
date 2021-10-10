import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [inputValue, setInputValue] = useState("");
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };
  const resetInputField = () => {
    setInputValue("");
  };

  return (
    <div>
      <Form className="form">
        <div className="form-items">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={inputValue}
              onChange={handleUserInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={inputValue}
              onChange={handleUserInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={inputValue}
              onChange={handleUserInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={inputValue}
              onChange={handleUserInput}
            />
          </Form.Group>
          <Button size="lg" onClick={resetInputField}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
