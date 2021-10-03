import React from 'react'
import Card from './Card'

const ServiceBarCard = ({servicios}) => {
    return (
        <>
        <Card display={"flex"} margin={"12%"}>
            {servicios.map(i =>{
                return <div style={{backgroundColor:"black", width:"100%"}}><div style={{color:'white'}}>{i.name}</div><div><img src={i.image} alt={i.image} /></div></div>
            })}
        </Card>
        </>
    )
}

export default ServiceBarCard
