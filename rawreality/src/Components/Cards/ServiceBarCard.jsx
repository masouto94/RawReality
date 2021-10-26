import React from 'react'
import Card from './Card'
import { scroller } from '../../Utils/Functions'

const ServiceBarCard = ({servicios}) => {
    return (
        <>
        
        <Card id={"ServiceBar"}>
        <div id={"ServiceBarContainer"} >
        {servicios.map(i =>{
                return (<div>
                    <div style={{color:'white'}}>{i.name}</div>
                    <div onClick={()=>scroller(`tarjeta_${i.name}`)}>
                        <img src={i.image} alt={i.image} /></div>
                        </div>)
            })}
        </div>
        </Card>
        
        </>
    )
}

export default ServiceBarCard
