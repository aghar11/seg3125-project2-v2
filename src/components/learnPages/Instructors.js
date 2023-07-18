import NavigationBar from "../shared/NavigationBar";
import { Image, Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";
import InstructorContactModal from "./InstructorContactModal";

import landingPicture from "../../resources/learnPages/instructors_landing.jpg";
import david from "../../resources/learnPages/instructorsHeadshots/David.jpg";
import mark from "../../resources/learnPages/instructorsHeadshots/Mark.jpg";
import mike from "../../resources/learnPages/instructorsHeadshots/Mike.jpg";
import sarah from "../../resources/learnPages/instructorsHeadshots/Sarah.jpg";
import stacy from "../../resources/learnPages/instructorsHeadshots/Stacy.jpeg";

function Instructors() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="Instructors">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100' alt="Golf instructor helping a golfer with their swing on an indoor golf simulator."></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Golf Academy</h1>
                <p>
                Our esteemed golf school is dedicated to helping golfers of all skill levels elevate their game to new heights. With state-of-the-art facilities, cutting-edge technology, and a personalized approach, we offer comprehensive instruction tailored to your individual needs. Get ready to unlock your full potential, refine your skills, and embrace the joy of golf.
                </p>
                <h1 className='display-6'>Our Instructors</h1>
                <p>
                Whether you're a beginner eager to learn the fundamentals or an experienced player looking to fine-tune your technique, our expert instructors are here to guide you on your journey. Please contact the instructor that best meets your goals to start your journey.
                </p>
                <Row>
                    <Col sm={4}>
                        <Card>
                            <Card.Img src={sarah} alt="Image of one of the golf academy instructors; Sarah Mitchell"/>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>Sarah Mitchell - The Swing Whisperer</Card.Title>
                                <Card.Text>
                                With a keen eye for detail and a gentle approach, Sarah Mitchell, aka "The Swing Whisperer," has a remarkable ability to analyze and refine your swing technique. Her patient demeanor and clear communication style make her an excellent instructor for golfers of all levels, from beginners to advanced players. Sarah's passion for the game and her commitment to helping her students achieve their goals are evident in every lesson.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="success" onClick={() => setModalShow(true)}>Contact Me</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card>
                            <Card.Img src={david} alt="Image of one of the golf academy instructors; David Reynolds"/>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>David Reynolds - The Short Game Prodigy</Card.Title>
                                <Card.Text>
                                When it comes to mastering the delicate art of the short game, David Reynolds is unmatched. Known as "The Short Game Prodigy," David possesses a wealth of knowledge and experience in chipping, pitching, and putting. His creative strategies, expert guidance, and precise instruction will transform your approach around the greens. With David's tutelage, you'll gain the confidence and finesse to navigate any short game situation.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="success" onClick={() => setModalShow(true)}>Contact Me</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card>
                            <Card.Img src={mark} alt="Image of one of the golf academy instructors; Mark Thompson"/>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>Mark Thompson - The Power Hitter</Card.Title>
                                <Card.Text>
                                For those seeking to unleash their inner power and maximize their driving distance, Mark Thompson, or simply "The Power Hitter," is the instructor to seek out. Mark's emphasis on generating clubhead speed, utilizing proper body mechanics, and optimizing launch angles will help you add significant yards to your drives. With Mark's expertise, you'll discover the exhilarating feeling of unleashing raw power off the tee.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="float-right">
                                <Button variant="success" onClick={() => setModalShow(true)}>Contact Me</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card>
                            <Card.Img src={mike} alt="Image of one of the golf academy instructors; Mike Wong"/>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>Mike Wong - The Mental Game Guru</Card.Title>
                                <Card.Text>
                                Golf is as much a mental challenge as it is a physical one, and Mike Wong, "The Mental Game Guru," understands this better than anyone. Mike's holistic approach to golf instruction focuses not only on technical skills but also on mental fortitude, confidence, and course management. His insightful strategies, relaxation techniques, and mental exercises will equip you with the mental resilience needed to excel under pressure.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="success" onClick={() => setModalShow(true)}>Contact Me</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card>
                            <Card.Img src={stacy} alt="Image of one of the golf academy instructors; Stacy Johnson"/>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="mt-2">
                            <Card.Body>
                                <Card.Title>Stacy Johnson - The Junior Golf Mentor</Card.Title>
                                <Card.Text>
                                When it comes to nurturing young talent and fostering a love for the game, Mike Johnson, "The Junior Golf Mentor," stands out. With his infectious enthusiasm, patience, and ability to connect with young players, Mike creates a fun and engaging learning environment for junior golfers. From teaching the basics to refining advanced skills, Mike's guidance empowers young golfers to grow their passion and reach their full potential in the game.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="success" onClick={() => setModalShow(true)}>Contact Me</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>

            <InstructorContactModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default Instructors;