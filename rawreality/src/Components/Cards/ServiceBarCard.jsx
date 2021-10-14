import React from 'react'
import Card from './Card'
import { scroller } from '../../Utils/Functions'

const ServiceBarCard = ({servicios}) => {
    return (
        <>
        
        <Card display={"flex"} margin={"12%"} id={"ServiceBar"}>
            {servicios.map(i =>{
                return <div style={{backgroundColor:"black", width:"100%"}}><div style={{color:'white'}}>{i.name}</div><div onClick={()=>scroller(`tarjeta_${i.name}`)}><img src={i.image} alt={i.image} /></div></div>
            })}
        </Card>
        
        </>
    )
}

export default ServiceBarCard
