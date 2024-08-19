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

  const inlineStyle = {
    display: 'inline-block',
  };

  if (state.succeeded) {
    return  <div className="submission mainContainer">
                <p className="mainParagraph">Thank you for your submission!</p>
            </div>;
  }

  return (
    <main className="mainContainer">
      <Row className="justify-content-center">
        <Col md={8}>
          <header>
            <h1 className="titleText">Susan Lyons Celebration of Life</h1>
            <h2 className="subtitleText">Sign up for Updates</h2>
          </header>
          <img src={memorialPic} alt="Memorial Pic" className="img-fluid mb-4" />
          <section className="mainParagraph">
            <p>Susan Lyons was a beautiful person who had a positive impact on many people.</p>
            <p>We are planning a Celebration of Life for Susan, tentatively in mid-September.</p>
            <p>The details are still being worked out. We will post details here when they are complete.</p>
            <p>The contact info boxes below are optional. If you provide your contact information, we will email you with information about the Celebration of Life, when plans are complete.</p>
            <p>You can also use these contact boxes to send a message to Susan’s husband, David Stillman, particularly if you want info on a video tribute website or a photo gallery of Susan.</p>
          </section>
          <section>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="formFirstName" controlId="formFirstName">
                <Form.Label className="formLabel">First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Form.Group className="formLastName" controlId="formLastName">
                <Form.Label className="formLabel">Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
  
              <Form.Group className="formEmail" controlId="formEmail">
                <Form.Label className="formLabel">Email:</Form.Label>
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
                <Form.Label className="formLabel">How did you know Susan?:</Form.Label>
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
                  <option value="patient">Patient</option>
                </Form.Control>
              </Form.Group>
  
              <Form.Group className="formMessage" controlId="formMessage">
                <Form.Label className="formLabel">Message (Optional):</Form.Label>
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
          </section>
        </Col>
      </Row>
    </main>
  );
  
};

export default FormComponent;
