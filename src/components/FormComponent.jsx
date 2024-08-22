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

            <p>We plan a Celebration of Life for Susan on September 15 at 10 AM. It will be held at the Jewish Community Center of Salt Lake City, 2 Medical Dr N, Salt Lake City, UT 84113. Note that the JCC is a secure facility, and all adults will need to provide an ID in order to be admitted.</p>

            <p>Please consider making a short video to share your favorite memories about Susan at this website: (<a href="https://www.tribute.co/susan-lyons/">https://www.tribute.co/susan-lyons/</a>). We plan to collect these videos and share them at the Celebration of Life.</p>

            <p>I (David Stillman) have been into photography for years, and over the past months, I have spent time curating my photos and created a collection of pictures of Susan: (<a href="https://dstillman.smugmug.com/Susan">https://dstillman.smugmug.com/Susan</a>). Please feel free to enjoy these photos.</p>

            <p>If you want to post a comment about Susan that can be viewed publicly, please go to the online obituary (<a href="https://www.legacy.com/us/obituaries/saltlaketribune/name/susan-lyons-obituary?id=55878015">https://www.legacy.com/us/obituaries/saltlaketribune/name/susan-lyons-obituary?id=55878015</a>), and scroll down to the Memories and Condolences for Susan Lyons section.
            </p>
            
            <p>The contact info boxes below are optional. Please use them only if you wish to send a message to Susan’s husband, David Stillman.</p>
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
