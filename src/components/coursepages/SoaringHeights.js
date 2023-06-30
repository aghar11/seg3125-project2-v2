import NavigationBar from "../shared/NavigationBar";
import { Button, Container, Image, Card, Col, Row, Badge, Carousel } from "react-bootstrap";
import React from "react";
import HolePreviewModal from "../shared/HolePreviewModal";

import landingPicture from "../../resources/coursepages/soaring_heights_landing.jpeg";
import golfIcon from "../../resources/shared/golf.png";
import holeLayout from "../../resources/coursepages/hole_layout.webp";

function SoaringHeights() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="SoaringHeights">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Soaring Heights</h1>
                <h1 className='text-center'>
                    <Badge bg="success">Now Open</Badge>
                </h1>
                <p>Prepare to be awe-inspired as you ascend to new heights on the Soaring Heights Course at Eagle's Nest Golf Club. This course is renowned for its elevated fairways, strategically placed bunkers, and sweeping views that stretch far beyond the horizon. Immerse yourself in the beauty of nature while tackling the challenges of this stunning course, where every shot feels like a majestic flight towards the heavens.</p>
            </Container>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <Button className='m-auto d-block mt-5' variant='success' href='/courseBooking'>Book Now</Button>
                    </Col>
                    <Col>
                        <Image src={golfIcon} className='mx-auto d-block mt-5'></Image>
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
                <Container className='d-flex align-center justify-content-center container-fluid'>
                <Carousel>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 1</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 2</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 3</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 4</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 5</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 6</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 7</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 8</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 9</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 10</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 11</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top"  src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 12</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 13</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 14</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 15</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 16</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 17</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top"  src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Hole 18</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>Watch</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container className='d-flex align-center justify-content-center'>
                    <p></p>
                </Container>
            </div>
            <Container className='d-flex align-center justify-content-center mt-4'>
                <p className='text-center'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>

            <HolePreviewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default SoaringHeights;