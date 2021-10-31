import React from "react";
import { useState, useEffect } from "react";

const WhatsappButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    return (
        <>
            {showButton && (
                <a href="https://wa.me/5491151593906" target={"_blank"} className="whatsapp-icon">
                    <img src="/whatsapp_icon.png" alt="" srcSet="" />
                </a>
            )}
        </>
    );
};

export default WhatsappButton;
