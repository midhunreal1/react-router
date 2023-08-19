import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Import your custom CSS for Footer styling

const Footer = () => {
  return (
    <footer className="footer bg-light py-3 ">
      <Container>
        <p>&copy;All rights reserved</p>
        <p>Useful Links</p>
        <p>Product Categories</p>
      </Container>
    </footer>
  );
};

export default Footer;
