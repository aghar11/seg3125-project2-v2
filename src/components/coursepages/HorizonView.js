import NavigationBar from "../shared/NavigationBar";
import { Button, Container, Image, Card, Col, Row, Badge, Carousel } from "react-bootstrap";
import React from 'react';
import HolePreviewModal from "../shared/HolePreviewModal";

import landingPicture from "../../resources/coursePages/horizonViewLanding.jpg";
import golfIcon from "../../resources/shared/golf.png";
import holeLayout from "../../resources/coursePages/holeLayout.webp";

function HorizonView() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="HorizonView">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Horizon View</h1>
                <h1 className='text-center'>
                    <Badge bg="success">Now Open</Badge>
                </h1>
                <p>Immerse yourself in the stunning beauty of the surrounding landscape on the Horizon View Course at Eagle's Nest Golf Club. As you play this course, you'll be treated to panoramic views of rolling hills, lush greenery, and distant horizons that seem to stretch on forever. The Horizon View Course offers a harmonious blend of challenging holes and breathtaking scenery, creating a golfing experience that is both invigorating and tranquil. Let the natural wonders of the course inspire your swings as you tee off against the backdrop of nature's majesty.</p>
            </Container>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <Button className='m-auto d-block mt-5' variant='success'>Book Now</Button>
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

export default HorizonView;