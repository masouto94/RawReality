import React from 'react'

const ImageContainer = ({image}) => {
    return (
        // <div style={{borderStyle:"solid",margin:"10%", borderWidth:"thin", borderColor:"black", borderRadius:"50%",alignItems:"center", verticalAlign:"middle" }}>
        <div className={"ImageContainer"} style={{backgroundImage:`url(${image})`}}>
        </div>
        // </div>
    )
}

export default ImageContainer
