import { Container, Image, Row, Col, Card, Button, } from "react-bootstrap";

import landingPicture from "../../../resources/coursePages/course_selection.png"
import horizonViewIcon from "../../../resources/homepage/horizon_view_icon.jpg";
import soaringHeightsIcon from "../../../resources/homepage/soaring_heights_icon.jpeg";

const CourseSelection = ({ setCourseName  }) => {
    return (
        <Container className='mt-3'>
            <Image src={landingPicture} className='mx-auto d-block'></Image>
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