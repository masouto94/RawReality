import React from 'react'

const ImageContainer = ({image}) => {
    return (
        <div style={{borderStyle:"solid", borderWidth:"outline",border:"10%", borderColor:"black", borderRadius:"50%",alignItems:"center", verticalAlign:"middle", backgroundColor:"#FF3423"}}>
        <div style={{backgroundImage:`url(${image})`, backgroundSize:"cover", borderStyle: "none", borderRadius:"50%", height:"50vh", width:"50vh",alignItems:"center", verticalAlign:"middle"}}>
        </div>
        </div>
    )
}

export default ImageContainer
