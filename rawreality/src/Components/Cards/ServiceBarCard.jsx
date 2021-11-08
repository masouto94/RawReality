import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { scroller } from "../../Utils/Functions";

const ServiceBarCard = ({ servicios }) => {
    return (
        <>
            <Card id={"ServiceBar"}>
                <div id={"ServiceBarContainer"}>
                    {servicios.map((i) => {
                        return (
                            <div className="service">
                                <div onClick={() => scroller(`tarjeta_${i.name}`)}>
                                    <img className="img-fluid" src={i.image} alt={i.image} />
                                </div>
                                <div style={{ color: "white" }}>{i.name}</div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </>
    );
};

export default ServiceBarCard;
