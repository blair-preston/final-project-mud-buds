import { useState } from "react";
import request from '../services/api.requests';
import { Modal, Form, Button } from 'react-bootstrap';

export default function AddDogImage(props) {
    const [newDogImage, setNewDogImage] = useState({
        image: null,
        dog: `${props.thisDogId}`,
    })

    const handleChangeImage = (event) => {
      // creating a new object to update state with so that dogdisplay will rerender with image
      const thisImage = {
        ...newDogImage,
        image: event.target.files[0],
      }
        setNewDogImage(
          thisImage
        );
    }

    const handleSubmitImage = async(e) => {
        e.preventDefault()
        const newDogImageFormData = new FormData();
        newDogImageFormData.append("image", newDogImage.image);
        newDogImageFormData.append("dog", `${props.thisDogId}`);

        try {
            let options = {
              method: "POST",
              url: '/images/',
              data: newDogImageFormData,
            }
            let resp = await request(options)
            console.log(resp)
            props.hidefirst()
            props.onHide()
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Modal 
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="modal-new-dog">
            <Form >
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        placeholder=""
                        onChange={handleChangeImage}
                        autoFocus
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Button type="submit" variant="primary" onClick={handleSubmitImage}>
            Create Post
          </Button>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}