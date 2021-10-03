import React from 'react'
import ServiceCard from '../Cards/ServiceCard'


const ServiceCardContainer = () => {
    const servicios = [
        {name:"Marketing",
        image:"imagen"
        },
        {name:"Branding",
        image:"imagen"
        },
        {name:"Sarasing",
        image:"imagen"
        },
        {name:"Alging",
        image:"imagen"
        },
    ];


    return (
        <>
            <ServiceCard servicios={servicios}/>
        </>
    )
}

export default ServiceCardContainer
