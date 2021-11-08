import React from "react";
import SectionContainer from "../Containers/SectionContainer";
import ImageContainer from "../Containers/ImageContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceCard = ({ servicios }) => {
    return (
        <>
            {servicios.map((i) => {
                if (servicios.indexOf(i) % 2 === 0) {
                    return (
                        <>
                            <SectionContainer>
                                <Container className="mb-5">
                                    <Row className={"ServiceCard"} id={`tarjeta_${i.name}`}>
                                        <Col xs={12} lg={7}>
                                            <div style={{ textAlign: "left" }}>
                                                {<h1 className={"serviceCardHeader"}>{i.name}</h1>}
                                                {i.content}
                                            </div>
                                        </Col>

                                        <Col xs={12} lg={5}>
                                            <img src={i.service_image} alt="" />
                                        </Col>
                                    </Row>
                                </Container>
                            </SectionContainer>
                        </>
                    );
                } else {
                    return (
                        <>
                            <SectionContainer className="mb-5">
                                <Container className="mb-5">
                                    <Row className={"ServiceCard"} id={`tarjeta_${i.name}`}>
                                        <Col className="img-left d-flex justify-content-end" xs={12} lg={5}>
                                            <img src={i.service_image} alt="" />
                                        </Col>
                                        <Col className="d-flex justify-content-end" xs={12} lg={7}>
                                            <div style={{ textAlign: "left" }}>
                                                {<h1 className={"serviceCardHeader"}>{i.name}</h1>}
                                                {i.content}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </SectionContainer>
                        </>
                    );
                }
            })}
        </>
    );
};

export default ServiceCard;
