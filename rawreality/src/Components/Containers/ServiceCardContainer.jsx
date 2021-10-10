import React from 'react'
import ServiceBarCard from '../Cards/ServiceBarCard'
import ServiceCard from '../Cards/ServiceCard';

const ServiceCardContainer = () => {
    const servicios = [
        {name:"Marketing",
        image:"/servicios/mkt_digital.svg",
        service_image:"/imagenes_servicios/charts.svg"
        },
        {name:"Branding",
        image:"/servicios/branding.svg",
        service_image:"/imagenes_servicios/meeting_alt_1.svg"
        },
        {name:"Comunicación estratégica",
        image:"/servicios/comunicacion_estrategica.svg",
        service_image:"/imagenes_servicios/meeting.svg"
        },
        {name:"Diseño",
        image:"/servicios/diseno.svg",
        service_image:"/imagenes_servicios/palette.svg"
        },
        {name:"Publicidad",
        image:"/servicios/publicidad.svg",
        service_image:"/imagenes_servicios/screens.svg"
        },
        
    ];


    return (
        <>
            <ServiceBarCard servicios={servicios}/>
            <ServiceCard servicios={servicios}/>
        </>
    )
}

export default ServiceCardContainer
