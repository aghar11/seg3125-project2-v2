import NavigationBar from "../shared/NavigationBar";
import { Button, Container, Image, Card, Col, Row, Badge, Carousel } from "react-bootstrap";
import React from 'react';
import HolePreviewModal from "../shared/HolePreviewModal";
import { useTranslation } from "react-i18next";

import landingPicture from "../../resources/coursePages/horizon_view_landing.jpg";
import golfIcon from "../../resources/shared/golf.png";
import holeLayout from "../../resources/coursePages/hole_layout.webp";

function HorizonView() {
    const [modalShow, setModalShow] = React.useState(false);

    const { t, i18n } = useTranslation();

    return (
        <div className="HorizonView">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Horizon View</h1>
                <h1 className='text-center'>
                    <Badge bg="dark">{t('nowOpen')}</Badge>
                </h1>
                <p className="text-center">{t('horizonViewDesc')}<br/>{t('courseSignOff')}</p>
            </Container>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <Button className='m-auto d-block mt-5' variant='success' href='/courseBooking'>{t('bookNow')}</Button>
                    </Col>
                    <Col>
                        <Image src={golfIcon} className='mx-auto d-block mt-5'></Image>
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
                    <h1 className='display-6 text-center mt-3'>{t('exploreHV')}</h1>
                </Container>
                <Container className='d-flex align-center justify-content-center container-fluid'>
                    <Carousel>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 1</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 2</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 3</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 4</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 5</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 6</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 7</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 8</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 9</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 10</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 11</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top"  src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 12</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 13</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 14</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 15</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 16</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top" src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 17</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem', margin: 5}}>
                                    <Card.Img variant="top"  src={holeLayout}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{t("hole")} 18</Card.Title>
                                        <Button variant="dark" className='mx-auto d-block' onClick={() => setModalShow(true)}>{t("watch")}</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container className='d-flex align-center justify-content-center'>
                    <p></p>
                </Container>
            </div>
            <Container className='d-flex align-center justify-content-center mt-4'>
                <p className='text-center'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>

            <HolePreviewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default HorizonView;