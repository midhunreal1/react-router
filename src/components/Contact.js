import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center">Contact Us</h1>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
