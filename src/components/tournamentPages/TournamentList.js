import NavigationBar from "../shared/NavigationBar";
import { Image, Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import landingPicture from "../../resources/tournamentPages/tournament_landing.jpg";

function TournamentList() {
    return (
        <div className="TournamentList">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Upcoming Tournaments</h1>
                <Row>
                    <Col sm={4}>
                        <h4 className="mt-2">Handicap Level</h4>
                        <Form.Select aria-label="Default select example">
                            <option value="all">Filter by Handicap</option>
                            <option value="gt20">&gt;20</option>
                            <option value="10to20">10 - 20</option>
                            <option value="0to10">0 - 10</option>
                            <option value="lt0">&lt;0</option>
                        </Form.Select>
                        <h4 className="mt-3">Style</h4>
                        <Form.Select aria-label="Default select example">
                            <option value="all">Filter by Style</option>
                            <option value="2Man">Scramble</option>
                            <option value="stableford">Stableford</option>
                            <option value="stableford">Individual</option>
                        </Form.Select>
                        <h4 className="mt-3">Fees</h4>
                        <Form.Select aria-label="Default select example">
                            <option value="all">Filter by Fees</option>
                            <option value="donation">Donation</option>
                            <option value="lt100">Less than $100</option>
                            <option value="100to200">$100 - $200</option>
                            <option value="gt200">More than $200</option>
                        </Form.Select>
                        <h4 className="mt-3">Prize Purse</h4>
                        <Form.Select aria-label="Default select example">
                            <option value="all">Filter by Purse</option>
                            <option value="lt1000">Less than $1000</option>
                            <option value="1000 - 3000">$1000 - $3000</option>
                            <option value="gt3000">More than $3000</option>
                        </Form.Select>
                    </Col>
                    <Col sm={8}>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">June<br/>18 - 20</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Callaway Classic</h4>
                                    <p className="mt-2">
                                        Handicap: 20-25 <br/>
                                        Style: 2-Man Scramble <br/>
                                        Fees: $80 per team <br/>
                                        Prize: $1 000
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">Aug<br/>15 - 17</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Summer Swing Open</h4>
                                    <p className="mt-2">
                                        Handicap: &lt;10 <br/>
                                        Style: Best Ball <br/>
                                        Fees: $250 per team <br/>
                                        Prize: $5 000
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">Sept<br/>8 - 10</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Legends Cup Invitational</h4>
                                    <p className="mt-2">
                                        Handicap: &lt;5 <br/>
                                        Style: Scramble<br/>
                                        Fees: $250 per team <br/>
                                        Prize: $10 000
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">Oct<br/>12 - 14</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Autumn Masters Challenge</h4>
                                    <p className="mt-2">
                                        Handicap: 15 and below<br/>
                                        Style: Stableford<br/>
                                        Fees: $150<br/>
                                        Prize: $7,500
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">July<br/>23 - 25</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Coastal Cup Classic</h4>
                                    <p className="mt-2">
                                        Handicap: 20 and below<br/>
                                        Style: Match Play<br/>
                                        Fees: $175<br/>
                                        Prize: $6,000
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">Nov<br/>4</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Charity Scramble Classic</h4>
                                    <p className="mt-2">
                                        Handicap: Open to all<br/>
                                        Style: Scramble<br/>
                                        Fees: $100 per team<br/>
                                        Prize: Donations to charity
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">Sept<br/>2 - 4</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Mountain Ridge Championship</h4>
                                    <p className="mt-2">
                                        Handicap: 12 and below<br/>
                                        Style: Modified Stableford<br/>
                                        Fees: $175<br/>
                                        Prize: $8,000
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">June<br/>10</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Summer Breeze Cup</h4>
                                    <p className="mt-2">
                                        Handicap: Open to all<br/>
                                        Style: Team Texas Scramble<br/>
                                        Fees: $120 per team<br/>
                                        Prize: $4,000
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">Aug<br/>5 - 6</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Iron Man Challenge</h4>
                                    <p className="mt-2">
                                        Handicap: 18 and below<br/>
                                        Style: Individual Stroke Play<br/>
                                        Fees: $150<br/>
                                        Prize: $6,500
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card className="mt-2">
                            <Row>
                                <Col>
                                    <h1 className="text-center m-4">Sept<br/>16 - 17</h1>
                                </Col>
                                <Col xs={6}>
                                    <h4 className="mt-2">Coastal Links Trophy</h4>
                                    <p className="mt-2">
                                        Handicap: 25 and below<br/>
                                        Style: Indivdual<br/>
                                        Fees: $180 per team<br/>
                                        Prize: $5,500
                                    </p>
                                </Col>
                                <Col>
                                    <div className="d-grid gap-2 m-4">
                                        <Button variant="success" size="lg" href="/tournamentRegistration">
                                            Register
                                        </Button>
                                        <Button variant="outline-success" size="lg" href="/tournamentHome">
                                            Learn More
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default TournamentList;