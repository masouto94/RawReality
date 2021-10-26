import React from 'react'
import { useState,useEffect } from 'react'

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
    }, [ ]);
  

    return (
        <>
        {showButton && (
            <a href="https://wa.me/541122330999" target={"_blank"} className="whatsapp-icon">
              <img src="/whatsapp_icon.png" alt="" srcset="" />
            </a>)}
    </>)
}

export default WhatsappButton
