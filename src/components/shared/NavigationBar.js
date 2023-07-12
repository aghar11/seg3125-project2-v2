import logo from '../../resources/shared/logo.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const lngs = [
    { code: "en", native: "English"},
    { code: "fr", native: "French" }
];

function NavigationBar() {
    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
    }

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
                        <Nav.Link href="/" className='mx-2'>{t('home')}</Nav.Link>
                        <NavDropdown title={t('play')} className='mx-2'>
                            <NavDropdown.Item href="/horizonView">Horizon View</NavDropdown.Item>
                            <NavDropdown.Item href="/soaringHeights">Soaring Heights</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/courseBooking">{t('bookNow')}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/tournamentList" className='mx-2'>{t('compete')}</Nav.Link>
                        <NavDropdown title={t('learn')} className='mx-2'>
                            <NavDropdown.Item href="/learn/basics">{t('basicResources')}</NavDropdown.Item>
                            <NavDropdown.Item href="/learn/instructors">{t('instructors')}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/memberLogin'>{t('memberLogin')}</Nav.Link>
                        <NavDropdown title={t('language')} className='mx-2'>
                            {lngs.map((lng, i) => {
                                const { code, native } = lng;
                                return <NavDropdown.Item onClick={() => handleTrans(code)}>{native}</NavDropdown.Item>;
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
        </>
    );
}

export default NavigationBar;