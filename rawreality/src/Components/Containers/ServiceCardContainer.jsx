import React from 'react'


export const servicios = [
    {name:"Publicidad",
    image:"/servicios/publicidad.svg",
    service_image:"/imagenes_servicios/screens.svg",
    content:(<><h1>Info de publicidad</h1>
    <h2>hahaha</h2></>)
    },
    {name:"Marketing",
    image:"/servicios/mkt_digital.svg",
    service_image:"/imagenes_servicios/charts.svg",
    content:(<h1>Info de mark</h1>)
    },
    {name:"Branding",
    image:"/servicios/branding.svg",
    service_image:"/imagenes_servicios/meeting_alt_1.svg",
    content:(<h1>Info de branding</h1>)
    },
    {name:"Comunicación estratégica",
    image:"/servicios/comunicacion_estrategica.svg",
    service_image:"/imagenes_servicios/meeting.svg",
    content:(<h1>Info de Comu</h1>)
    },
    {name:"Diseño",
    image:"/servicios/diseno.svg",
    service_image:"/imagenes_servicios/palette.svg",
    content:(<h1>Info de Diseño</h1>)
    },
    
];

const ServiceCardContainer = ({children}) => {
   


    return (
        <>
           {children}
        </>
    )
}

export default ServiceCardContainer
