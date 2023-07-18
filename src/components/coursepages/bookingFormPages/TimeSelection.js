import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import landingPicture from "../../../resources/coursePages/time_selection.png";

const TimeSelection = ({setCourseName, prevStep}) => {
    return (
        <Container className='mt-3'>
            <Image src={landingPicture} className='mx-auto d-block' alt="Progression indicator with numbered circles in order from 1 to 5 with arrows between the adjacent numbered circles. First circle is colored in green to indicate completion while rest of the circles are unfilled with a green border."></Image>
            <h1 className='display-6'>Select a Time</h1>
            <Container className='d-flex align-center justify-content-center mt-2'>
                <Row>
                    <Col>
                        <Card style={{ width: '80rem', height: "20rem" }}>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h1>TIME SELECTION</h1>
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

export default TimeSelection;