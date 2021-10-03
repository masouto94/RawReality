import React from 'react'

const Card = ({display, margin, children}) => {
    return (
        <div style={{display:display, margin:margin}}>
            
                {children}
            
        </div>
    )
}

export default Card
