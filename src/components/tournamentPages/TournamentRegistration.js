import NavigationBar from "../shared/NavigationBar";
import { Image, Container, Row, Col } from "react-bootstrap";
import RegistrationForm from "./registrationPages/RegistrationForm";

import landingPicture from "../../resources/tournamentPages/tournament_registration.jpg"

function TournamentRegistration() {
    return (
        <div className="TournamentRegistration">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Tournament ____ Registration</h1>
                <Row>
                    <Col>
                        <RegistrationForm/>
                    </Col>
                </Row>
                <p className='text-center mt-3'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default TournamentRegistration;