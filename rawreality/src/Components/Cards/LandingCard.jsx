import React from "react";
import Card from "./Card";
import { scroller } from "../../Utils/Functions";
import PacksModal from "../../Utils/PacksModal";

const LandingCard = () => {
    return (
        <>
            <Card display={"block"} margin={"0 5%"} id={"LandingCard"}>
                <div>
                    <h1>Te ayudamos a hacer crecer tu negocio más rápido</h1>
                    <p>Ayudamos a nuestros clientes a potenciar el valor del negocio, a través del desarrollo de estrategias creativas, innovadoras y visualmente atractivas. </p>

                    <button className={"landing-btn"} onClick={() => scroller("ServiceBar")}>
                        Ir a Servicios
                    </button>
                    <button className={"landing-btn"} onClick={() => scroller("PacksContainer")}>
                        Pedir un presupuesto
                    </button>
                </div>
            </Card>
        </>
    );
};

export default LandingCard;
