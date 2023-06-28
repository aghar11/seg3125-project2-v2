import NavigationBar from "../shared/NavigationBar";
import { Image, Container, Accordion, Ratio } from "react-bootstrap";

import landingPicture from "../../resources/learnPages/basicsLanding.jpg"

function Basics() {
    return (
        <div className="Basics">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Let's get you started!</h1>
                <p>
                    We know that golf can be an intimidating sport to get into so we've compiled some of the most frequently asked question as well as some useful resources below. We hope these help you out! <br/>
                    In case you have any questions that aren't covered here, please feel free to contact us or ask any of our staff members next time you're here. We're happy to help!
                </p>
                <h1 className='display-6'>Helpful Videos</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Golf Swing Tutorial</Accordion.Header>
                        <Accordion.Body>
                            <Ratio>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/aIB8BnsrV3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Ratio>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Driver Swing Tutorial</Accordion.Header>
                        <Accordion.Body>
                            <Ratio>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZiTTHzsgbgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Ratio>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Putting Tutorial</Accordion.Header>
                        <Accordion.Body>
                            <Ratio>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/duVpMgaWHdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Ratio>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Etiquette Basics</Accordion.Header>
                        <Accordion.Body>
                            <Ratio>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/G9j4BrCT5oU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Ratio>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <h1 className='display-6'>FAQ</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default Basics;