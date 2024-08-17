import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import memorialPic from '../images/memorial-pic.jpg';

const FormComponent = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mainContainer">
        <Row className="justify-content-center">
          <Col md={8}>
            <img src={memorialPic} alt="Memorial Pic" className="img-fluid mb-4" />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formRelation">
                <Form.Label>How You Know Susan:</Form.Label>
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

              <Form.Group controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
    </div>
  );
};

export default FormComponent;
