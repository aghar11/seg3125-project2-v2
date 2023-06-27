import Modal from 'react-bootstrap/Modal';
import { Button, Ratio } from 'react-bootstrap';

function HolePreviewModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hole _ Preview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Hole Number: _ <br/>
            Par: 4 <br/>
            Yards: 270
        </p>
        <Ratio>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6lJ8sAwBM9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Ratio>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='dark'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HolePreviewModal;