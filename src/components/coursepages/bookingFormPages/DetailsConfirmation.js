import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import landingPicture from "../../../resources/coursePages/confirm_details.png";

const DetailsConfirmation = ({setCourseName, prevStep}) => {
    return (
        <Container className='mt-3'>
            <Image src={landingPicture} className='mx-auto d-block' alt="Progression indicator with numbered circles in order from 1 to 5 with arrows between the adjacent numbered circles. First 4 circles are colored in green to indicate completion while rest of the circles are unfilled with a green border."></Image>
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