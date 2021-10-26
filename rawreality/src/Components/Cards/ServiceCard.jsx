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
     
            <div className={"ServiceCard"} id={`tarjeta_${i.name}`} >
        <div style={{textAlign:"left"}}>
            {<h1 className={"serviceCardHeader"}>{i.name}</h1>}
            {i.content}
        </div>
        
        <ImageContainer image={i.service_image}/>
        </div>
            
     
        </SectionContainer>
        </>
        )}
        else{
            return(<> 
                <SectionContainer>
                    <div className={"ServiceCard"} id={`tarjeta_${i.name}`} >
                    
                <ImageContainer image={i.service_image}/>

                <div  style={{textAlign:"left"}}>
                {<h1 className={"serviceCardHeader"}>{i.name}</h1>}
                    {i.content}
                </div>
                </div>
                    
                </SectionContainer>
                </>
                )
        }

        })}   
        </>
    )
}

export default ServiceCard
