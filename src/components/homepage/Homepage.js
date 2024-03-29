import NavigationBar from "../shared/NavigationBar";
import { Button, Container, Image, Card, Col, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

import landingPicture from "../../resources/homepage/homepage_landing.jpg";
import golfIcon from "../../resources/shared/golf.png";
import horizonViewIcon from "../../resources/homepage/horizon_view_icon.jpg";
import soaringHeightsIcon from "../../resources/homepage/soaring_heights_icon.jpeg";

function Homepage() {
    const { t } = useTranslation();

    return (
        <div className="Homepage">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100' alt="Drone shot of Eagle's Nest Golf Club clubhouse and practice green"></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>{t('welcome')}</h1>
                <p className="text-center">{t('welcomet1')}</p>
            </Container>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <h1 className='display-6 text-center'>{t('location')}</h1>
                        <p className='text-center'>
                            Eagle's Nest Golf Club<br/>
                            250 Forest Way<br/>
                            Ottawa, ON K7F 9H5
                        </p>
                    </Col>
                    <Col>
                        <Image src={golfIcon} className='mx-auto d-block mt-4' alt="Decorative icon of a golf flag"></Image>
                        <Button className='mx-auto d-block mt-3' variant='success' href='/courseBooking'>{t('bookNow')}</Button>
                    </Col>
                    <Col>
                        <h1 className='display-6 text-center'>{t('contact')}</h1>
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
                    <h1 className='display-6 text-center mt-3'>{t('exploreOurCourses')}</h1>
                </Container>
                <Container className='d-flex align-center justify-content-center mt-2'>
                    <Row>
                        <Col>
                            <Card style={{ width: '35rem' }}>
                                <Card.Img variant="top" src={horizonViewIcon} alt="Picture facing back from the putting green to the tee box on hole 8 of the Horizon View course"/>
                                <Card.Body>
                                    <Card.Title className='text-center'>Horizon View</Card.Title>
                                    <Card.Text className='text-center'>
                                        {t('gcdesc')}
                                    </Card.Text>
                                    <Button variant="dark" className='mx-auto d-block' href="/horizonView">{t('exploreHV')}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '35rem' }}>
                                <Card.Img variant="top" src={soaringHeightsIcon} alt="Picture looking down the fairway from the tee box on hole 10 of the Soaring Heights course"/>
                                <Card.Body>
                                    <Card.Title className='text-center'>Soaring Heights</Card.Title>
                                    <Card.Text className='text-center'>
                                        {t('gcdesc')}
                                    </Card.Text>
                                    <Button variant="dark" className='mx-auto d-block' href="/soaringHeights">{t('exploreSH')}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className='d-flex align-center justify-content-center'>
                    <p></p>
                </Container>
            </div>
            <Container className='d-flex align-center justify-content-center mt-4'>
                <p className='text-center'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default Homepage;