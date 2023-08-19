import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <section>
        <h1 className="text-center">Welcome to E-Learn Website</h1>
        <p className="text-center">Learn about the latest web technologies.</p>
        <div className="text-center">
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      </section>
    </Container>
  );
};

export default Home;
