import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

//!jsx alaninda döngü olarak sadece map kullanimina izin veriliyor. foreach, filter vs olmuyor

const CourseCard = ({veri}) => {
    //?database den çekilen veriler ekrana bastırılırken, en dış div unique bir veri ister bunu da key={id} şeklinde yazarız. id olmak zorunda değil unique herhangi bir property olabilir, mesela img
  return (
    <Container>
        <Row className='text-center g-3 mt-3'>
            {veri.map(({id, img, name, text}) => (    

                <Col key={id} className='d-flex justify-content-center' sm={12} md={6} lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                            <Button variant="primary">Detaylar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            {/* arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz */}
        </Row>
    </Container>
  )
}

export default CourseCard