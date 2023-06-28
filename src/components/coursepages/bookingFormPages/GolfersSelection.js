import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

const GolfersSelection = ({setCourseName, prevStep}) => {
    const [error, setError] = useState(false);

    return (
        <Container className='mt-3'>
            <h1 className='display-6'>How many golfers?</h1>
            <Container className='d-flex align-center justify-content-center mt-2'>
                <Row>
                    <Col>
                        <Card style={{ width: '80rem', height: "20rem" }}>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h1>NUMBER OF GOLFERS SELECTION</h1>
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
                Continue
              </Button>
            </div>
        </Container>
    );
}

export default GolfersSelection;