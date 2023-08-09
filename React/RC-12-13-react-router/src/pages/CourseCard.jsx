import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";


import data from "../data";
//!react-bootstrap ten CourseCard componenti

const CourseCard = () => {


  return (
    <Container className="text-center mt-4 p-4">
      <Row className="d-flex justify-content-center">
        {data.map((item) => {
          const { id, name, img, text } = item;
          return (
            <Col
              className="d-flex justify-content-center mb-4"
              sm={12}
              md={6}
              lg={4}
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>

                  <Button variant="info"  >Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard