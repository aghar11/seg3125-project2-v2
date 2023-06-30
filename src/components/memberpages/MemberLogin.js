import NavigationBar from "../shared/NavigationBar";
import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";

import landingPicture from "../../resources/memberpages/member_landing.png";

function MemberLogin() {
    return (
        <div className="MemberLogin">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Welcome to Eagle's Nest Golf Club!</h1>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className='mx-auto d-block mt-3' href="/memberHome" variant="success">Login</Button>
                        </Form>
                    </Col>
                </Row>
                
                <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    )
}

export default MemberLogin;