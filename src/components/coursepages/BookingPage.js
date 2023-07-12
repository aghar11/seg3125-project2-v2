import NavigationBar from "../shared/NavigationBar";
import { Image, Container, Row, Col } from "react-bootstrap";
import BookingForm from "./bookingFormPages/BookingForm";

import landingPicture from "../../resources/coursePages/booking_landing.webp"

function BookingPage() {
    return (
        <div className="Booking">
            <NavigationBar/>
            <Image src={landingPicture} className='mx-auto d-block w-100'></Image>
            <Container className='mt-3'>
                <h1 className='display-5 text-center'>Course Bookings</h1>
                <Row>
                    <Col>
                        <BookingForm/>
                    </Col>
                </Row>
                <p className='text-center mt-3'>EAGLES NEST GOLF CLUB © 2023</p>
            </Container>
        </div>
    );
}

export default BookingPage;