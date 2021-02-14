import React, { useState, useEffect } from "react";
import {Modal, Button} from "react-bootstrap";

function Update({task, show, handleClose, setEntry}) {
    const [updatedEntry, setUpdatedEntry] = useState(task);

    useEffect(() => {
        setUpdatedEntry(task);
    }, []);

    const handleUpdate = () => {
        setEntry(updatedEntry);
        handleClose();
    };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Entry</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input 
            type="text"
            className="form-control text-center"
            value={updatedEntry}
            onChange={(e) => setUpdatedEntry(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleUpdate}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Update;
