import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

function InstructorContactModal(props) {
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
        <Form>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='outline-dark'>Close</Button>
        <Button onClick={props.onHide} variant='success'>Send</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InstructorContactModal;