import logo from '../../resources/shared/logo.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';

function NavigationBar() {
    return (
        <>
         <Container fluid className='text-center mt-4 mb-4'>
            <Image src={logo} fluid/>
         </Container>
         <Navbar bg='dark' data-bs-theme="dark" >
            <Container fluid className='text-center'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-auto'>
                        <Nav.Link href="/" className='mx-2'>Home</Nav.Link>
                        <NavDropdown title="Play" className='mx-2'>
                            <NavDropdown.Item href="/horizonView">Horizon View</NavDropdown.Item>
                            <NavDropdown.Item href="/soaringHeights">Soaring Heights</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Book Now</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="" className='mx-2'>Compete</Nav.Link>
                        <NavDropdown title="Learn" className='mx-2'>
                            <NavDropdown.Item href="/learn/basics">Basic Resources</NavDropdown.Item>
                            <NavDropdown.Item href="/learn/instructors">Instructors</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
        </>
    );
}

export default NavigationBar;