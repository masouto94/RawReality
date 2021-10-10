import React from 'react'
import Card from './Card'

const ServiceCard = ({servicios}) => {
    return (
        <>
        {servicios.map(i =>
        {return(<> 
        <Card display={"flex"} margin={"12%"}>
            <div>
        <div style={{flex: "50%"}}>
        
            {`Info de ${i.name}`}
        </div>
        <div style={{flex: "50%"}}>
        <img src={i.service_image} height={"100%"} width={"40%"}></img>
        </div>
        </div>
            
        </Card>
        </>)})}   
        </>
    )
}

export default ServiceCard
