import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp, faBehanceSquare, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactCard = () => {
    return (
        <>
            <Card margin={"5% 5% 3% 5%"} id={"ContactForm"}>
                <Container>
                    <Row>
                        {/* INICIO CONTENIDO DEL LADO IZQUIERDO */}
                        <Col xs={12} lg={7} className={"p-3"}>
                            <div className="get-started text-start">
                                <h2 className="heading-line mb-5 fw-bold">¿Listo para contactarnos?</h2>
                                <ul className="list-unstyled">
                                    <li className="fw-bold text-start mb-4">
                                        <FontAwesomeIcon className="icons me-2" icon={faEnvelope} />
                                        romgromero@gmail.com
                                    </li>
                                    <li className="fw-bold text-start mb-4">
                                        <FontAwesomeIcon className="icons me-2" icon={faWhatsapp} />
                                        +54 9 11 51593906
                                    </li>
                                    <li className="fw-bold text-start mb-4">
                                        <FontAwesomeIcon className="icons me-2" icon={faBehanceSquare} />
                                        <a href="https://www.behance.net/rominaromero3">rominaromero3</a>
                                    </li>
                                    <li className="fw-bold text-start mb-4">
                                        <FontAwesomeIcon className="icons me-2" icon={faLinkedin} />
                                        <a href="https://www.linkedin.com/in/romina-romero-b64a7993/">romina-romero-b64a7993/ </a>
                                    </li>
                                    <li className="fw-bold text-start mb-4">
                                        <FontAwesomeIcon className="icons me-2" icon={faInstagram} />
                                        <a href="https://www.instagram.com/romina_gabriela_romero_colombo/">romina_gabriela_romero_colombo/</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* FIN CONTENIDO DEL LADO IZQUIERDO */}

                        <Col xs={12} lg={5} className={"p-3"}>
                            {/* INICIO CONTENIDO DEL LADO DERECHO */}
                            <div className="form">
                                <h3 className="mb-5 text-start">Déjanos tu mensaje.</h3>

                                <form method="POST">
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
                                        <button className="w-100 custom-button fw-bold" type="submit">
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        {/* FIN CONTENIDO DEL LADO DERECHO */}
                    </Row>
                </Container>
            </Card>
        </>
    );
};

export default ContactCard;
