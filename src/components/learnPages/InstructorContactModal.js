import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

function InstructorContactModal(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Instructor Contact Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder='Enter name' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formSelection'>
                <Form.Label>Instructor</Form.Label>
                <Form.Select>
                    <option selected>Select an Instructor</option>
                    <option>Sarah Mitchell</option>
                    <option>David Reynolds</option>
                    <option>Mark Thompson</option>
                    <option>Emily Wong</option>
                    <option>Mike Johnson</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formMessage'>
                <Form.Label>Goals</Form.Label>
                <Form.Control placeholder='Enter some golf goals you want to achieve'/>
            </Form.Group>
            <Button className='mx-auto d-block mt-3' type="submit" variant='success'>Send</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='outline-dark'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InstructorContactModal;