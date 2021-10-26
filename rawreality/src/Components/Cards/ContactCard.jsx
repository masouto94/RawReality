import React from "react";
import Card from "./Card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faWhatsapp, faBehance, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './ContactCard.css';

const ContactCard = () => {
    const iconStyles = {
        color: "#BE9D94",
        fontSize: "25px",
    };
    return (
        <>
            <Card display={"flex"} margin={"12%"}> 
                {/* INICIO CONTENIDO DEL LADO IZQUIERDO */}
                <div className="get-started text-start" style={{flex:"50%"}}>
                    <h2 className="fs-1 mb-5 fw-bold">¿Listo para contactarnos?</h2>
                    <ul className="list-unstyled">
                        <li className="fw-bold text-start mb-4 d-flex">
                            <FontAwesomeIcon className="me-2" style={iconStyles} icon={faEnvelope}/>
                            romgromero@gmail.com
                        </li>
                        <li className="fw-bold text-start mb-4 d-flex">
                            <FontAwesomeIcon className="me-2" style={iconStyles} icon={faWhatsapp}/>
                            +54 9 11 51593906
                        </li>
                        <li className="fw-bold text-start mb-4 d-flex">
                            <FontAwesomeIcon className="me-2" style={iconStyles} icon={faBehance}/>
                            <a href="https://www.behance.net/rominaromero3">
                                rominaromero3
                            </a>
                        </li>
                        <li className="fw-bold text-start mb-4 d-flex">
                            <FontAwesomeIcon className="me-2" style={iconStyles} icon={faLinkedin}/>
                            <a href="https://www.linkedin.com/in/romina-romero-b64a7993/">
                                Romina Colombo
                            </a>
                        </li>
                        <li className="fw-bold text-start mb-4 d-flex">
                            <FontAwesomeIcon className="me-2" style={iconStyles} icon={faInstagram}/>
                            <a href="https://www.instagram.com/romina_gabriela_romero_colombo/">
                                romina_gabriela_romero_colombo
                            </a>
                        </li>
                    </ul>
                </div>
                {/* FIN CONTENIDO DEL LADO IZQUIERDO */}

                {/* INICIO CONTENIDO DEL LADO DERECHO */}
                <div className="form" style={{flex:"50%"}}>
                    <h3 className="mb-5 fs-4 text-start">Déjanos tu mensaje.</h3>

                    <form method="POST" id="ContactForm">
                        <div className="mb-3">
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre"
                                className="w-100"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-100"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="asunto"
                                id="asunto"
                                placeholder="Asunto"
                                className="w-100"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                rows="5"
                                name="mensaje"
                                id="mensaje"
                                placeholder="Mensaje"
                                className="w-100"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button className="w-100 custom-button fw-bold" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                {/* FIN CONTENIDO DEL LADO DERECHO */}
            </Card>
        </>
    );
};

export default ContactCard;
