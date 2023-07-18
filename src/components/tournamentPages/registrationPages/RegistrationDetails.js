import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";

import landingPicture from "../../../resources/tournamentPages/details_confirmation.png"

const RegistrationDetails = ({setCourseName, prevStep}) => {
    return (
        <Container className='mt-3'>
            <Image src={landingPicture} className='mx-auto d-block' alt="Progression indicator with numbered circles in order from 1 to 2 with arrows between the adjacent numbered circles. First circle is filled in to indicate completion of the first step while the second is unfilled with a green border to indicate uncomplete status."></Image>
            <h1 className='display-6'>Confirm Details</h1>
            <Container className='d-flex align-center justify-content-center mt-2'>
                <Row>
                    <Col>
                        <Card style={{ width: '80rem', height: "20rem" }}>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <h5>Tournament: Callaway Classic</h5>
                                    <h5>Course: Soaring Heights</h5>
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

export default RegistrationDetails;