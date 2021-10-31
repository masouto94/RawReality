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
                                Porque me gusta el diseño, la comunicación y el branding. Me gusta crear una imagen de como quieren que sea percibida una marca (sea empresa o persona como marca en sí
                                misma). Se ofrecen diversas estrategias que incluyen desde la percepción visual, tono comunicacional, estética general, canales de comunicación a utilizar, para lograr
                                un objetivo determinado definido por el cliente, por ej: aumento en la interacción del contenido que sube, aumento de leads, nueva percepción de la marca (redefinir una
                                marca determinada), aumento de ventas si ofrece productos o servicios etc
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
