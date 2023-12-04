"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { memo } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface Props {
  show: boolean;
  setShow: any;
}

function Modals({ show, setShow }: Props) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(Modals);
