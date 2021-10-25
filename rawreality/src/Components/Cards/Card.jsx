import React from 'react'

const Card = ({display, margin, children, id}) => {
    return (
        <div id={id} style={{display:display, margin:margin}}>
            
                {children}
            
        </div>
    )
}

export default Card
