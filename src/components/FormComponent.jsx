import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import memorialPic from '../images/memorial-pic.jpg';
import { useForm, ValidationError } from '@formspree/react';

const FormComponent = () => {
  const [state, handleSubmit] = useForm("manwbzbo");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    relation: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className="mainContainer">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="titleText">Susan Lyons Memorial Website</h1>
          <img src={memorialPic} alt="Memorial Pic" className="img-fluid mb-4" />
          <p className="mainParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="formFirstName" controlId="formFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="formLastName" controlId="formLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="formEmail" controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </Form.Group>

            <Form.Group className="formRelation" controlId="formRelation">
              <Form.Label>How Do You Know Susan:</Form.Label>
              <Form.Control
                as="select"
                name="relation"
                value={formData.relation}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="friend">Friend</option>
                <option value="family">Family</option>
                <option value="colleague">Colleague</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="formMessage" controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={state.submitting}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormComponent;
