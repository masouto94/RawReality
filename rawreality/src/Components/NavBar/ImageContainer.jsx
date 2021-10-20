import React from 'react'

const ImageContainer = ({image}) => {
    return (
        <div style={{backgroundImage:`url(${image})`, backgroundSize:"100%", borderStyle: "none", borderRadius:"50%", height:"50vh", width:"50vh", padding:"10%"}}>
        </div>
    )
}

export default ImageContainer
