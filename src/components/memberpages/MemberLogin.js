import NavigationBar from "../shared/NavigationBar";
import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import landingPicture from "../../resources/memberpages/member_landing.png";

function MemberLogin() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/memberHome");
    }

    return (
        <div className="MemberLogin">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Welcome to Eagle's Nest Golf Club!</h1>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" />
                            </Form.Group>
                            <Button type="submit" className='mx-auto d-block mt-3' variant="success">Login</Button>
                        </Form>
                    </Col>
                </Row>
                
                <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    )
}

export default MemberLogin;