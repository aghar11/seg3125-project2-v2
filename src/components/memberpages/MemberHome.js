import { Container, Image, Navbar, Nav, Button, Tabs, Tab, Ratio, Row, Col, Form } from "react-bootstrap";

import logo from "../../resources/shared/logo.jpg"
import ScoreChart from "./ScoreChart";

function MemberHome() {
    return (
        <div className="MemberHome">
            <>
                <Container fluid className='text-center mt-4 mb-4'>
                    <Image src={logo} fluid alt="Eagle's Nest Golf Club Logo"/>
                </Container>
                <Navbar bg='dark' data-bs-theme="dark" >
                    <Container fluid className='text-center'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='m-auto'>
                            </Nav>
                            <Button variant="success" href='/'>Log Out</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <h1 className='display-5 mt-2'>Welcome Raymond!</h1>
                    <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                    >
                        <Tab eventKey="home" title="Score Tracker">
                            <h1 className='display-6 mt-2'>Your Performance</h1>
                            <Row>
                                <Col sm={8}>
                                    <ScoreChart/>
                                </Col>
                                <Col sm={4}>
                                    <h1 className='mt-2'>Enter a new score</h1>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Course Name</Form.Label>
                                            <Form.Control required type="text" placeholder="Enter course name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Course Par</Form.Label>
                                            <Form.Control required type="number" placeholder="Enter par for the course" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Your Score</Form.Label>
                                            <Form.Control required type="number" placeholder="Enter your score" />
                                        </Form.Group>
                                        <Button className='mx-auto d-block mt-3' type="submit" variant="success">Enter Score</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title="Upcoming Bookings">
                            <h1 className='display-6 mt-2'>Your Tee-Times</h1>
                            <Ratio>
                                <iframe title="availabilityCalender" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&showNav=1&showDate=1&showTabs=0&showPrint=0&showCalendars=0&mode=WEEK&src=YzhlOGVmYmZkOWJjNTNkNDNlYjI5NGRhMDRmNGUzMTg3ZmJjNTNjMmMzNDRlNzJhYWUxNGVhZTM4OWVhYzFkOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"></iframe>
                            </Ratio>
                        </Tab>
                    </Tabs>
                    <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
                </Container>
            </>
        </div>
    )
}

export default MemberHome;