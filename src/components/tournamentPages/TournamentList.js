import NavigationBar from "../shared/NavigationBar";
import { Image, Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import landingPicture from "../../resources/tournamentPages/tournament_landing.jpg";
import { useState } from "react";

let tournamentList = [
    { id: 1, name: "Summer Breeze Cup", month: "June", dates: "10", handicap: "Open", style: "Scramble", fees: "120", prize: "4 000"},
    { id: 2, name: "Coastal Cup Classic", month: "July", dates: "23- 25", handicap: "20 and below", style: "Individual", fees: "100", prize: "6 000"},
    { id: 3, name: "Iron Man Challenge", month: "Aug", dates: "5 - 6", handicap: "18 and below", style: "Individual", fees: "150", prize: "6 500"},
    { id: 4, name: "Summer Swing Open", month: "Aug", dates: "15 - 17", handicap: "10 and below", style: "Scramble", fees: "250", prize: "5 000"},
    { id: 5, name: "Moutain Ridfe Championship", month: "Sept", dates: "2 - 4", handicap: "12 and below", style: "Stableford", fees: "175", prize: "8 000"},
    { id: 6, name: "Legends Cup Invitational", month: "Sept", dates: "8 - 10", handicap: "5 and below", style: "Scramble", fees: "250", prize: "10 000"},
    { id: 7, name: "Coastal Links Trophy", month: "Sept", dates: "15 - 17", handicap: "25 and below", style: "Individual", fees: "180", prize: "5 500"},
    { id: 8, name: "Autumn Masters Challenge", month: "Oct", dates: "12 - 14", handicap: "15 and below", style: "Stableford", fees: "150", prize: "7 500"}
]

function TournamentList() {
    const [tournaments, setTournaments] = useState(
        tournamentList
    );

    return (
        <div className="TournamentList">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Upcoming Tournaments</h1>
                <Row>
                    <Col sm={4}>
                        <h4 className="mt-2">Handicap Level</h4>
                        <Form.Select aria-label="Default select example" id="handicapFilter">
                            <option value="all">Filter by Handicap</option>
                            <option value="gt20">&gt;20</option>
                            <option value="11to20">11 - 20</option>
                            <option value="0to10">0 - 10</option>
                            <option value="lt0">&lt;0</option>
                        </Form.Select>
                        <h4 className="mt-3">Style</h4>
                        <Form.Select aria-label="Default select example" id="styleFilter">
                            <option value="all">Filter by Style</option>
                            <option value="scramble">Scramble</option>
                            <option value="stableford">Stableford</option>
                            <option value="individual">Individual</option>
                        </Form.Select>
                        <h4 className="mt-3">Fees</h4>
                        <Form.Select aria-label="Default select example" id="feeFilter" >
                            <option value="all">Filter by Fees</option>
                            <option value="donation">Donation</option>
                            <option value="lt100">Less than $100</option>
                            <option value="100to200">$100 - $200</option>
                            <option value="gt200">More than $200</option>
                        </Form.Select>
                        <h4 className="mt-3">Prize Purse</h4>
                        <Form.Select aria-label="Default select example" id="prizeFilter">
                            <option value="all">Filter by Purse</option>
                            <option value="lt1000">Less than $1000</option>
                            <option value="1000to3000">$1000 - $3000</option>
                            <option value="gt3000">More than $3000</option>
                        </Form.Select>
                    </Col>
                    <Col sm={8}>
                        {tournaments.map(tournament => (
                            <Card className="mt-2" id={tournament.id}>
                                <Row>
                                    <Col>
                                        <h1 className="text-center m-4">{tournament.month}<br/>{tournament.dates}</h1>
                                    </Col>
                                    <Col xs={6}>
                                        <h4 className="mt-2">{tournament.name}</h4>
                                        <p className="mt-2">
                                            Handicap: {tournament.handicap} <br/>
                                            Style: {tournament.style} <br/>
                                            Fees: ${tournament.fees} <br/>
                                            Prize: ${tournament.prize}
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
                        ))}
                    </Col>
                </Row>
                <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default TournamentList;