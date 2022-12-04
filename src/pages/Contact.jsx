import React from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "../style/Contact.css";
const Contact = () => {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text className="formlabel">First name</InputGroup.Text>
        <Form.Control aria-label="First name" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text className="formlabel">Last name</InputGroup.Text>
        <Form.Control aria-label="Last name" />
      </InputGroup>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="formlabel">Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Text className="formlabel">Tel. Number</InputGroup.Text>
        <Form.Control aria-label="Number" />
      </InputGroup>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formlabel">Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button className="w-100 " type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
