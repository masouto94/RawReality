import React from 'react'

const ImageContainer = ({image}) => {
    return (
        // <div style={{borderStyle:"solid",margin:"10%", borderWidth:"thin", borderColor:"black", borderRadius:"50%",alignItems:"center", verticalAlign:"middle" }}>
        <div style={{backgroundImage:`url(${image})`, border:"10px",backgroundSize:"cover", borderRadius:"50%", height:"50vh", width:"50vh",alignItems:"center"}}>
        </div>
        // </div>
    )
}

export default ImageContainer
