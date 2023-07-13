import NavigationBar from "../shared/NavigationBar";
import { Image, Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import landingPicture from "../../resources/tournamentPages/tournament_landing.jpg";
import { useState } from "react";

let tournamentList = [
    { id: 1, name: "Summer Breeze Cup", month: "June", dates: "10", category: "Senior", style: "Scramble", fees: "80", prize: "4 000"},
    { id: 2, name: "Coastal Cup Classic", month: "July", dates: "23- 25", category: "Beginner", style: "Individual", fees: "100", prize: "6 000"},
    { id: 3, name: "Iron Man Challenge", month: "Aug", dates: "5 - 6", category: "Beginner", style: "Individual", fees: "150", prize: "6 500"},
    { id: 4, name: "Summer Swing Open", month: "Aug", dates: "15 - 17", category: "Pro", style: "Scramble", fees: "350", prize: "5 000"},
    { id: 5, name: "Moutain Ridfe Championship", month: "Sept", dates: "2 - 4", category: "Senior", style: "Stableford", fees: "175", prize: "8 000"},
    { id: 6, name: "Legends Cup Invitational", month: "Sept", dates: "8 - 10", category: "Pro", style: "Scramble", fees: "250", prize: "10 000"},
    { id: 7, name: "Coastal Links Trophy", month: "Sept", dates: "15 - 17", category: "Amateur", style: "Individual", fees: "180", prize: "5 500"},
    { id: 8, name: "Autumn Masters Challenge", month: "Oct", dates: "12 - 14", category: "Amateur", style: "Stableford", fees: "150", prize: "7 500"}
]

function TournamentList() {
    const [tournaments] = useState(
        tournamentList
    );

    const [categoryFilter, setCategoryFilter] = useState('all');
    const [styleFilter, setStyleFilter] = useState('all');
    const [monthFilter, setMonthFilter] = useState('all');
    const [feeFilter, setFeeFilter] = useState('all');

    const handleCategoryFilterChange = (e) => {
        setCategoryFilter(e.target.value);
    }

    const handleStyleFilterChange = (e) => {
        setStyleFilter(e.target.value);
    }

    const handleMonthFilterChange = (e) => {
        setMonthFilter(e.target.value);
    }

    const handleFeeFilterChange = (e) => {
        setFeeFilter(e.target.value);
    }

    const filteredTournaments = tournaments.filter(
        (tournament) =>
            (categoryFilter === 'all' || tournament.category === categoryFilter) &&
            (styleFilter === 'all' || tournament.style === styleFilter) &&
            (monthFilter === 'all' || tournament.month === monthFilter) &&
            (feeFilter === 'all' || parseInt(tournament.fees) < parseInt(feeFilter))
    )

    return (
        <div className="TournamentList">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Upcoming Tournaments</h1>
                <Row>
                    <Col sm={4}>
                        <h4 className="mt-2">Category</h4>
                        <Form.Select id="categoryFilter" value={categoryFilter} onChange={handleCategoryFilterChange}>
                            <option value="all">Filter by Category</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Amateur">Amateur</option>
                            <option value="Pro">Pro</option>
                            <option value="Senior">Senior</option>
                        </Form.Select>
                        <h4 className="mt-3">Style</h4>
                        <Form.Select id="styleFilter" value={styleFilter} onChange={handleStyleFilterChange}>
                            <option value="all">Filter by Style</option>
                            <option value="Scramble">Scramble</option>
                            <option value="Stableford">Stableford</option>
                            <option value="Individual">Individual</option>
                        </Form.Select>
                        <h4 className="mt-3">Month</h4>
                        <Form.Select id="monthFilter" value={monthFilter} onChange={handleMonthFilterChange}>
                            <option value="all">Filter by Month</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Aug">August</option>
                            <option value="Sept">September</option>
                            <option value="Oct">October</option>
                        </Form.Select>
                        <h4 className="mt-3">Fees</h4>
                        <Form.Select id="feeeFilter" value={feeFilter} onChange={handleFeeFilterChange}>
                            <option value="all">Filter by Fee</option>
                            <option value="100">Less than $100</option>
                            <option value="200">Less than $200</option>
                            <option value="300">Less than $300</option>
                        </Form.Select>
                    </Col>
                    <Col sm={8}>
                        {filteredTournaments.map(tournament => (
                            <Card className="mt-2" id={tournament.id}>
                                <Row>
                                    <Col>
                                        <h1 className="text-center m-4">{tournament.month}<br/>{tournament.dates}</h1>
                                    </Col>
                                    <Col xs={6}>
                                        <h4 className="mt-2">{tournament.name}</h4>
                                        <p className="mt-2">
                                            Category: {tournament.category} <br/>
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