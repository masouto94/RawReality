import React from 'react'
import Card from './Card'
import SectionContainer from '../Containers/SectionContainer'
const ServiceCard = ({servicios}) => {
    return (
        <>
        {servicios.map(i =>
        {if(servicios.indexOf(i) %2 ===0){
            return(<> 
        <SectionContainer>
        <Card display={"grid"} margin={"12%"}>
            <div id={`tarjeta_${i.name}`} style={{display: "grid",gridTemplateColumns:"50vw 1fr"}}>
        <div style={{textAlign:"left"}}>
            {<h1>{i.name}</h1>}
            {i.content}
        </div>
        <div style={{justifyItems:"end"}}>
        <img src={i.service_image} height={"100%"} width={"100%"}></img>
        </div>
        </div>
            
        </Card>
        </SectionContainer>
        </>
        )}
        else{
            return(<> 
                <SectionContainer>
                <Card display={"block"} margin={"12%"}>
                    <div id={`tarjeta_${i.name}`} style={{display: "grid",gridTemplateColumns:"50vw 1fr", justifyItems:"start"}}>
                <div >
                <img src={i.service_image} height={"100%"} width={"70%"}></img>
                </div>
                <div  style={{textAlign:"right"}}>
                {<h1>{i.name}</h1>}
                    {i.content}
                </div>
                </div>
                    
                </Card>
                </SectionContainer>
                </>
                )
        }

        })}   
        </>
    )
}

export default ServiceCard
