import NavigationBar from "../shared/NavigationBar";
import { Button, Container, Image, Card, Col, Row } from "react-bootstrap";

import landingPicture from "../../resources/hompage/homepageLanding.jpg";
import golfIcon from "../../resources/shared/golf.png";
import horizonViewIcon from "../../resources/hompage/horizonViewIcon.jpg";
import soaringHeightsIcon from "../../resources/hompage/soaringHeightsIcon.jpeg";

function Homepage() {
    return (
        <div className="Homepage">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Welcome to Eagle's Nest Golf Club!</h1>
                <p>Welcome to Eagle's Nest Golf Club, where soaring ambitions meet tranquil greens. Nestled in the picturesque countryside, this imaginary golfing sanctuary offers an unrivalled experience for enthusiasts of the sport. With its meticulously designed fairways, challenging hazards, and breathtaking vistas, Eagle's Nest promises to elevate your game while immersing you in the serenity of nature. Whether you're a seasoned golfer seeking a new challenge or a beginner looking to embark on a golfing journey, our course and trained instructors cater to players of all skill levels. Prepare to spread your wings and embark on an unforgettable golfing adventure at Eagle's Nest Golf Club.</p>
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
                        <Button className='mx-auto d-block mt-3' variant='dark'>Book Now</Button>
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