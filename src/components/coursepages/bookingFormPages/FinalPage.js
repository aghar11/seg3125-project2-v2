import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import landingPicture from "../../../resources/coursePages/final.png";

const FinalPage = ({setCourseName, prevStep}) => {
    return (
        <Container className='mt-3'>
            <Image src={landingPicture} className='mx-auto d-block'></Image>
            <Container className='d-flex align-center justify-content-center mt-2'>
                <Row>
                    <Col>
                        <Card style={{ width: '80rem', height: "20rem" }}>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h2>Booking Confirmed!</h2>
                                    <h5>Course: Soaring Heights</h5>
                                    <h5>Tee Time: Sunday, June 18th 2023 5:00 PM</h5>
                                    <h5>4 Players</h5>

                                    <h5>
                                        <br/><br/>
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