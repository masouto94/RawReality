import React, { useState } from "react";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const styles = [
    {
        color: "#be9d94",
    },
    {
        color: "#be9d94",
        width: 100,
        height: 100,
    },
];

const ChildModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="mb-4 w-100 custom-button fw-bold" onClick={handleShow} type="submit">
                Enviar
            </button>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
                <Modal.Body className="d-flex align-items-center flex-column">
                    <FontAwesomeIcon style={{ ...styles[1] }} icon={faCheckCircle} />
                    <h3 style={{ ...styles[0] }} className="mt-4 fw-bold">
                        Mensaje enviado con éxito.
                    </h3>
                    <h3 style={{ ...styles[0] }} className="mt-4 mb-5 fw-bold">
                        Recibirás un email con tu respuesta.
                    </h3>
                </Modal.Body>
            </Modal>
        </>
    );
};

const PacksModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="PacksButton" onClick={handleShow}>
                Consultar tu pack
            </button>

            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="form">
                                    <form method="POST">
                                        <h2 className="mt-4 fw-bold">Déjanos tu mensaje.</h2>
                                        <h3 className="fs-2 mt-4 mb-5 fw-bold">Te responderemos a la brevedad.</h3>
                                        <div className="mb-3">
                                            <input type="text" name="nombre" id="nombre" placeholder="Nombre" className="w-100" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" name="email" id="email" placeholder="Email" className="w-100" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" name="asunto" id="asunto" placeholder="Asunto" className="w-100" required />
                                        </div>
                                        <div className="mb-3">
                                            <textarea rows="5" name="mensaje" id="mensaje" placeholder="Mensaje" className="w-100" required></textarea>
                                        </div>
                                        <div>
                                            <ChildModal />
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PacksModal;
