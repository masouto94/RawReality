import React from 'react'
import Card from './Card'

const ServiceCard = ({servicios}) => {
    return (
        <>
        <Card display={"flex"} margin={"12%"}>
            {servicios.map(i =>{
                return ("Acá viene cada card de cada servicio")
            })}
        </Card>   
        </>
    )
}

export default ServiceCard
