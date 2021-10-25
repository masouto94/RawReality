import React from 'react'
import { useState,useEffect } from 'react'
import { BackToTop } from '../../Utils/Functions';

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
            <button onClick={BackToTop} className="back-to-top">
              &#8679;
            </button>)}
    </>)
}

export default WhatsappButton