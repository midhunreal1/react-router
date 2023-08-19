import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const productsData = [
  { title: 'HTML', description: 'Learn HTML' },
  { title: 'CSS', description: 'Learn CSS' },
  { title: 'JavaScript', description: 'Learn JavaScript' },
  { title: 'React', description: 'Learn React' },
  { title: 'MongoDB', description: 'Learn MongoDB' },
  { title: 'Node.js', description: 'Learn Node.js' },
  { title: 'Express.js', description: 'Learn Express.js' }
];

const Products = () => {
  return (
    <div>
      <h1 className="text-center">Products</h1>
      <Row className="justify-content-center">
        {productsData.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
