import React, { useState } from "react";
import { Container, Card, Button, Modal, Form } from "react-bootstrap";

const MovieReseña = () => {
    const [showModal, setShowModal] = useState(false);
    const [review, setReview] = useState("");

    const toggleModal = () => setShowModal(!showModal);
    const saveReview = () => {
        if (review.trim()) {
            alert(`Reseña guardada: ${review}`);
            setReview("");
            toggleModal();
        } else {
            alert("Escribe una reseña antes de guardar.");
        }
    };

    return (
        <Container className="mt-4">
            <header className="mb-4 text-center">
                <img src="abismo-secreto.jpg" alt="El Abismo Secreto" style={{ maxWidth: "100%", height: "auto" }} />
            </header>
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>El Abismo Secreto</Card.Title>
                    <Card.Text><strong>Fecha de estreno:</strong> 14 de febrero de 2025</Card.Text>
                    <Card.Text>
                        Dos operativos de élite (Anya Taylor-Joy y Miles Teller) deberán unir fuerzas 
                        para sobrevivir al mal que oculta un misterioso abismo.
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="d-flex justify-content-center mb-4">
                <Button variant="primary" className="me-2" onClick={() => window.open("https://youtu.be/3QbfHIKyd4I?si=wojcTiOiziNSsiq3", "_blank")}>
                    Ver Tráiler
                </Button>
                <Button variant="secondary" onClick={toggleModal}>
                    Agregar Reseña
                </Button>
            </div>
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Escribe tu reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Tu reseña</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                placeholder="Escribe aquí tu reseña..."
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>Cerrar</Button>
                    <Button variant="primary" onClick={saveReview}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default MovieReseña;
