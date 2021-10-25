import React from "react";
import Card from "./Card";
import {Form, Button} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faWhatsapp, faBehance, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

const ContactCard = () => {
    const iconStyles = {
        color: "#BE9D94",
        fontSize: "25px",
    };
    return (
        <>
            <Card display={"flex"} margin={"12%"}>
                {/* INICIO CONTENIDO DEL LADO IZQUIERDO */}
                <div style={{flex:"50%"}} className="get-started text-start mx-5 text-secondary">
                    <h2 className="fs-1 mb-5 fw-bold">¿Listo para contactarnos?</h2>
                    <ul className="list-unstyled">
                        <li>
                            <FontAwesomeIcon style={iconStyles} icon={faEnvelope}/>



                            romgromero@gmail.com
                        </li>
                        <li>
                            <FontAwesomeIcon style={iconStyles} icon={faWhatsapp}/>
                            +54 9 11 51593906
                        </li>
                        <li>
                            <FontAwesomeIcon style={iconStyles} icon={faBehance}/>
                            <a href="https://www.behance.net/rominaromero3">
                                https://www.behance.net/rominaromero3
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon style={iconStyles} icon={faLinkedin}/>
                            <a href="https://www.linkedin.com/in/romina-romero-b64a7993/">
                                https://www.linkedin.com/in/romina-romero-b64a7993/
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon style={iconStyles} icon={faInstagram}/>
                            <a href="https://www.instagram.com/romina_gabriela_romero_colombo/">
                                https://www.instagram.com/romina_gabriela_romero_colombo/
                            </a>
                        </li>
                    </ul>
                </div>
                {/* FIN CONTENIDO DEL LADO IZQUIERDO */}

                {/* INICIO CONTENIDO DEL LADO DERECHO */}
                <div className="form" style={{flex:"50%"}}>
                    <h3 className="mb-5 fs-4 text-start text-primary">Déjanos tu mensaje.</h3>

                    <form method="POST" id="form">
                        <div>
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre"
                                className="w-100"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-100"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="asunto"
                                id="asunto"
                                placeholder="Asunto"
                                className="w-100"
                                required
                            />
                        </div>
                        <div>
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
