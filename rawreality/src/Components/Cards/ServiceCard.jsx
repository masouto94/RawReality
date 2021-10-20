import React from 'react'
import Card from './Card'
import SectionContainer from '../Containers/SectionContainer'
import ImageContainer from '../Containers/ImageContainer'

const ServiceCard = ({servicios}) => {
    return (
        <>
        {servicios.map(i =>
        {if(servicios.indexOf(i) %2 ===0){
            return(<> 
        <SectionContainer>
        <Card display={"flex"} margin={"12%"}>
            <div id={`tarjeta_${i.name}`} style={{display: "flex", justifyContent:"space-between", width:"100%"}}>
        <div style={{textAlign:"left"}}>
            {<h1 className={"serviceCardHeader"}>{i.name}</h1>}
            {i.content}
        </div>
        
        <ImageContainer image={i.service_image}/>
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
                    
                <ImageContainer image={i.service_image}/>

                <div  style={{textAlign:"right"}}>
                {<h1 className={"serviceCardHeader"}>{i.name}</h1>}
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
