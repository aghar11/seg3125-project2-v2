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
                <h1 className='display-6 mt-1'>Helpful Videos</h1>
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
                <h1 className='display-6 mt-2'>FAQ</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How do I grip a golf club correctly?</Accordion.Header>
                        <Accordion.Body>
                        To grip a golf club correctly, start by placing the club in your non-dominant hand (left hand for right-handed golfers, right hand for left-handed golfers) with the club's grip resting diagonally across your fingers. Wrap your fingers around the grip, ensuring that your palm is facing towards your target. Next, place your dominant hand below your non-dominant hand, overlapping or interlocking your fingers. Maintain a light but secure grip, making sure not to grip the club too tightly. This grip provides stability and control throughout your swing.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the proper stance and posture in golf?</Accordion.Header>
                        <Accordion.Body>
                        Proper stance and posture are crucial for a successful golf swing. Start by standing with your feet shoulder-width apart and your weight evenly distributed on both feet. Bend your knees slightly and maintain a straight back. Your upper body should tilt slightly forward from the hips, ensuring that your spine remains straight and your chin is up. Your arms should hang naturally, and your hands should be positioned slightly ahead of the ball. This balanced and athletic posture will help you generate power and maintain control during your swing.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How do I improve my swing?</Accordion.Header>
                        <Accordion.Body>
                        Improving your swing takes practice and patience. Here are a few tips to help you get started:<br/><br/>
                        - Work on your grip, stance, and posture to ensure a solid foundation.<br/>
                        - Practice your swing mechanics, focusing on a smooth and fluid motion.<br/>
                        - Develop a consistent and rhythmic tempo throughout your swing.<br/>
                        - Engage in regular strength and flexibility exercises to improve your overall fitness for golf.<br/>
                        - Seek guidance from a golf instructor who can provide personalized tips and feedback.<br/><br/>
                        Practice regularly, both on the driving range and on the course, to develop muscle memory and refine your technique.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What are the basic rules and etiquette of golf?</Accordion.Header>
                        <Accordion.Body>
                        While the rules of golf can be extensive, here are a few key basics:<br/><br/>
                        - Each player should play their own ball and keep track of their own score.<br/>
                        - Players should be respectful of others on the course, maintaining proper etiquette and pace of play.<br/>
                        - Golfers should take care of the course, repairing divots, raking bunkers, and adhering to any course-specific rules.<br/>
                        - Players should not disturb others while they are preparing or taking their shots.<br/>
                        - It's important to know and follow the local rules of the course you are playing on.<br/>
                        - Familiarize yourself with the rules regarding out-of-bounds, hazards, and penalties.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Which clubs should I use for different shots on the course?</Accordion.Header>
                        <Accordion.Body>
                        While the choice of clubs may vary depending on individual playing style and course conditions, here are the general guidelines:<br/><br/>
                        - Driver: Typically used for long-distance shots off the tee.<br/>
                        - Fairway Woods: Used for long shots from the fairway or rough, particularly when the ball is sitting well above the ground.<br/>
                        - Irons: Numbered from 3 to 9, irons are versatile clubs used for shots of varying distances. Lower-numbered irons are used for longer shots, while higher-numbered irons are used for shorter, more controlled shots.<br/>
                        - Wedges: Includes pitching wedge, sand wedge, and lob wedge. Wedges are designed for short shots near or around the green, helping to control trajectory and spin.<br/>
                        - Putter: Used on the green to roll the ball into the hole. Putters have a flat face and are designed for accuracy and control.<br/><br/>
                        Experiment with different clubs during practice sessions to understand how each one performs for various shots. As you gain experience, you'll develop a better sense of which club to use in different situations on the course.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <p className='text-center mt-4'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default Basics;