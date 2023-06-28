import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

const FinalPage = ({setCourseName, prevStep}) => {
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
                                    <h2>Booking Confirmed!</h2>
                                    <h5>Tournament: Callaway Classic</h5>
                                    <h5>Course: Soaring Heights</h5>

                                    <h5>
                                        <br/><br/>
                                        We will be in contact with your tee off time.<br/>
                                        Please arrive at least 15 minutes before your booking. <br/>
                                        See you soon!
                                    </h5>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="success" type="submit" href="/">
                Return to Home
              </Button>
            </div>
        </Container>
    );
}

export default FinalPage;