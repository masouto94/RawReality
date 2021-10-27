import React from "react";
const LogoWidget = () => {
    return (
        <div className="justify-content-start navBarLogo" style={{ display: "flex", alignItems: "center" }}>
            <img src={"logos/logo_circulo.jpeg"} width={"55px"} />
            <span className="fs-4">RawReality</span>
        </div>
    );
};

export default LogoWidget;
