import React from "react";
import Card from "../Cards/Card";
import SectionContainer from "./SectionContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { packs } from "../../Utils/Packs";
import Packs from "../Cards/Packs";
import PacksModal from "../../Utils/PacksModal";

const PacksCardContainer = () => {
    return (
        <>
            <SectionContainer>
                <Card margin={"0 5%"} id={"PacksContainer"}>
                    <h2 className="heading-line" id={"PacksContainerHeader"}>
                        Elegí tu pack
                    </h2>
                    <Container>
                        <Row className="gy-5">
                            {packs.map((i) => {
                                return (
                                    <Col xs={12} lg={6}>
                                        <div id={i.id} className={"PacksCard"}>
                                            <h2 className="heading-line">{i.name}</h2>
                                            <div className={"PacksCardContent"}>{i.description}</div>
                                            <PacksModal />
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </Card>
            </SectionContainer>
        </>
    );
};

export default PacksCardContainer;
