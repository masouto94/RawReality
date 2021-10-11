import React from "react";
import Card from "./Card";

const ContactCard = () => {
    return (
        <>
            <Card display={"flex"} margin={"0 25%"}>
                {/* INICIO CONTENIDO DEL LADO IZQUIERDO */}
                <div>
                    <div class="titulo">
                        <h2>¿Listo para contactarnos?</h2>
                    </div>
                    <div className="text-start">
                        <p>
                            <i></i>
                            romgromero@gmail.com
                        </p>
                        <p>
                            <i></i>
                            <p>+54 9 11 51593906</p>
                        </p>
                        <p>
                            <i></i>
                            <a href="https://www.behance.net/rominaromero3">
                                https://www.behance.net/rominaromero3
                            </a>
                        </p>
                        <p>
                            <i></i>
                            <a href="https://www.linkedin.com/in/romina-romero-b64a7993/">
                                https://www.linkedin.com/in/romina-romero-b64a7993/
                            </a>
                        </p>
                        <p>
                            <i></i>
                            <a href="https://www.instagram.com/romina_gabriela_romero_colombo/">
                                https://www.instagram.com/romina_gabriela_romero_colombo/
                            </a>
                        </p>
                    </div>
                </div>
                {/* FIN CONTENIDO DEL LADO IZQUIERDO */}

                {/* INICIO CONTENIDO DEL LADO DERECHO */}
                <div>
                    <h3>Déjanos tu mensaje.</h3>

                    <form method="POST" id="form">
                        <div>
                            <input
                                type="text"
                                name="nombre"
                                id="name"
                                placeholder="Nombre"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="asunto"
                                id="asunto"
                                placeholder="Asunto"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                rows="5"
                                name="message"
                                id="mensaje"
                                placeholder="Mensaje"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                {/* FIN CONTENIDO DEL LADO DERECHO */}
            </Card>
        </>
    );
};

export default ContactCard;
