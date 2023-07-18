import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import landingPicture from "../../../resources/tournamentPages/final.png";

const FinalPage = ({setCourseName, prevStep}) => {
    return (
        <Container className='mt-3'>
            <Image src={landingPicture} className='mx-auto d-block' alt="Progression indicator with numbered circles in order from 1 to 2 with arrows between the adjacent numbered circles. Both circles are filled in to indicate completion of the steps."></Image>
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