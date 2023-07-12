import NavigationBar from "../shared/NavigationBar";
import { Button, Container, Image, Card, Col, Row } from "react-bootstrap";

import landingPicture from "../../resources/homepage/homepage_landing.jpg";
import golfIcon from "../../resources/shared/golf.png";
import horizonViewIcon from "../../resources/homepage/horizon_view_icon.jpg";
import soaringHeightsIcon from "../../resources/homepage/soaring_heights_icon.jpeg";

function Homepage() {
    return (
        <div className="Homepage">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Welcome to Eagle's Nest Golf Club!</h1>
                <p className="text-center">Welcome to Eagle's Nest Golf Club, where soaring ambitions meet tranquil greens!<br/>Whether you're a seasoned golfer seeking a new challenge or a beginner in the sport, our course and trained instructors cater to players of all skill levels.</p>
            </Container>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <h1 className='display-6 text-center'>Location</h1>
                        <p className='text-center'>
                            Eagle's Nest Golf Club<br/>
                            250 Forest Way<br/>
                            Ottawa, ON K7F 9H5
                        </p>
                    </Col>
                    <Col>
                        <Image src={golfIcon} className='mx-auto d-block mt-4'></Image>
                        <Button className='mx-auto d-block mt-3' variant='success' href='/courseBooking'>Book Now</Button>
                    </Col>
                    <Col>
                        <h1 className='display-6 text-center'>Contact</h1>
                        <p className='text-center'>
                            (613) 236 7262<br/>
                            (613) 394 2342<br/>
                            admin@eaglegolf.ca
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className='container-bg'>
                <Container className='d-flex align-center justify-content-center mt-2'>
                    <h1 className='display-6 text-center mt-3'>Explore Our Courses</h1>
                </Container>
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
                                    <Button variant="dark" className='mx-auto d-block' href="/horizonView">Learn More</Button>
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
                                    <Button variant="dark" className='mx-auto d-block' href="/soaringHeights">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className='d-flex align-center justify-content-center'>
                    <p></p>
                </Container>
            </div>
            <Container className='d-flex align-center justify-content-center mt-4'>
                <p className='text-center'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default Homepage;