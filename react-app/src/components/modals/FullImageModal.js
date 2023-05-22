import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function FullImageModal({ show, handleClose, imageSrc }) {
  const [modalShow, setModalShow] = useState(show);
  const [modalImageSrc, setModalImageSrc] = useState(imageSrc);

  useEffect(() => {
    setModalShow(show);
    setModalImageSrc(imageSrc);
  }, [show, imageSrc]);

  const handleModalClose = () => {
    setModalShow(false);
    handleClose();
  };

  return (
    <Modal show={modalShow} onHide={handleModalClose} className="full-image-modal">
      <Modal.Body className="d-flex justify-content-center align-items-center position-relative">
        <Button variant="secondary" className="position-sticky top-1 end-0 m-0" onClick={handleModalClose}>
          Close
        </Button>
        <img src={modalImageSrc} style={{ maxWidth: '100vw', maxHeight: '100vh' }}/>
      </Modal.Body>
    </Modal>
  );
}

export default FullImageModal;