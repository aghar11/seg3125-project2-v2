import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

const DetailsConfirmation = ({setCourseName, prevStep}) => {
    const [error, setError] = useState(false);

    return (
        <Container className='mt-3'>
            <h1 className='display-6'>Confirm Details</h1>
            <Container className='d-flex align-center justify-content-center mt-2'>
                <Row>
                    <Col>
                        <Card style={{ width: '80rem', height: "20rem" }}>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h5>Course: Soaring Heights</h5>
                                    <h5>Tee Time: Sunday, June 18th 2023 5:00 PM</h5>
                                    <h5>4 Players</h5>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="outline-success" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="success" type="submit" onClick={setCourseName()}>
                Confirm
              </Button>
            </div>
        </Container>
    );
}

export default DetailsConfirmation;