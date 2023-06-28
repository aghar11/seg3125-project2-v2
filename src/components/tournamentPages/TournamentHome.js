import NavigationBar from "../shared/NavigationBar";
import { Button, Container, Image, Card, Col, Row, Badge, Carousel } from "react-bootstrap";
import React from 'react';


import landingPicture from "../../resources/tournamentPages/tournamentLanding.jpg";
import callawayLogo from "../../resources/tournamentPages/callawayLogo.gif";


function TournamentHome() {
    return (
        <div className="HorizonView">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Grand Fairway Classic</h1>
            </Container>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <h1 className='display-6'>Details</h1>
                        <p>
                            Tournament Name: Grand Fairway Classic sponsored by Callaway<br/>
                            Date: July 22-24, 2023<br/>
                            Location: Eagle's Nest Golf Club<br/>
                            Course: Horizon View<br/>
                            Format: 72-Hole Stroke Play<br/>
                            Prize Purse: $30 000
                        </p>
                    </Col>
                    <Col>
                        <Image src={callawayLogo} className='mx-auto d-block'></Image>
                    </Col>
                </Row>
                <h1 className='display-6'>Details</h1>
                <p>
                    The Grand Fairway Classic is an esteemed golf tournament that brings together the world's finest golfers for an unforgettable display of skill, precision, and sportsmanship. Set against the breathtaking backdrop of Riverview Golf Club, this three-day extravaganza promises an exhilarating golfing experience for players and spectators alike.
                </p>
                <h1 className='display-6'>Course</h1>
                <p>
                    Horizon View offers an immaculate championship course designed to challenge even the most seasoned golfers. With its undulating fairways, strategically placed bunkers, and pristine greens, the course demands a combination of accuracy, strategy, and finesse. The course also boasts breathtaking views of the surrounding mountains and the picturesque Green River.
                </p>
                <h1 className='display-6'>Player Field</h1>
                <p>
                    The Grand Fairway Classic attracts a star-studded field of professional golfers from around the world, including reigning champions, rising stars, and legendary players. The tournament serves as a battleground for the best in the sport, promising intense competition and electrifying moments on every hole.
                </p>
                <h1 className='display-6'>Special Events</h1>
                <p>
                The Grand Fairway Classic offers more than just world-class golf. Throughout the tournament, there will be exciting side events and activities for spectators and players alike. From charity exhibitions featuring renowned golfers to skills challenges and autograph sessions, there's something for everyone to enjoy, adding an extra layer of excitement and entertainment to the tournament.
                </p>
            </Container>
            <Container className="mt-2 text-center">
                <div class="text-right">
                    <Button variant="success" href="/tournamentRegistration">Register</Button>
                </div>
            </Container>
            <Container className='d-flex align-center justify-content-center mt-4'>
                <p className='text-center'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default TournamentHome;