import Modal from 'react-bootstrap/Modal';
import { Button, Ratio } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function HolePreviewModal(props) {
  const { t } = useTranslation();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t('hole')} _ {t('preview')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            {t('holeNumber')}: _ <br/>
            Par: 4 <br/>
            {t('yards')}: 270
        </p>
        <Ratio>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6lJ8sAwBM9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Ratio>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='dark'>{t('close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HolePreviewModal;