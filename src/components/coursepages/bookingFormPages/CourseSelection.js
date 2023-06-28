import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

import horizonViewIcon from "../../../resources/hompage/horizonViewIcon.jpg";
import soaringHeightsIcon from "../../../resources/hompage/soaringHeightsIcon.jpeg";

const CourseSelection = ({ setCourseName  }) => {
    const [error, setError] = useState(false);

    return (
        <Container className='mt-3'>
            <h1 className='display-6'>Select a Course</h1>
            <Container className='d-flex align-center justify-content-center mt-2'>
                <Row>
                    <Col>
                        <Card style={{ width: '35rem' }}>
                            <Card.Img variant="top" src={horizonViewIcon} />
                            <Card.Body>
                                <Card.Title className='text-center'>Horizon View</Card.Title>
                                <Card.Text className='text-center'>
                                    18 Hole Golf Course
                                </Card.Text>
                                <Button variant="success" className='mx-auto d-block' onClick={setCourseName("Horizon View")}>Select</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '35rem' }}>
                            <Card.Img variant="top" src={soaringHeightsIcon} />
                            <Card.Body>
                                <Card.Title className='text-center'>Soaring Heights</Card.Title>
                                <Card.Text className='text-center'>
                                18 Hole Golf Course
                                </Card.Text>
                                <Button variant="success" className='mx-auto d-block' onClick={setCourseName("Soaring Heights")}>Select</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default CourseSelection;