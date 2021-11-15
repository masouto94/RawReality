import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUsCard = () => {
    return (
        <>
            <Card margin={"10% 5%"} id={"AboutUsCard"}>
                <Container>
                    <Row>
                        <h2>¿Por qué elegir Raw Reality?</h2>
                        <Col xs={12} lg={6} className="order-3 order-lg-2">
                            <p>
                                Porque creemos que el éxito de una marca, entendida como producto, servicio o mismo persona, reside en su identidad. La identidad es todo. Creemos que la percepción de
                                la marca que tiene la audiencia es fundamental para lograr el éxito. Para ello se deben evaluar estrategias, tanto visuales, comunicacionales, estética en general,
                                canales a utilizar para darla a difundir; todo según el rubro en que uno se mueve y objetivos planteados por el cliente, sean estos aumento de interacción con la marca,
                                fidelidad a la misma, reposicionamiento de ella, aumento de leads. Para ello los ayudamos en todo el proceso o en la parte que sea necesaria para ustedes.
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="img-col order-2 order-lg-3">
                            <img src="/logos/logo_rr.jpeg" alt="/logos/logo_rr.jpeg" />
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    );
};

export default AboutUsCard;
