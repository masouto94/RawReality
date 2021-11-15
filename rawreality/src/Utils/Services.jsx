import React from "react";

export const servicios = [
    {
        name: "Publicidad",
        image: "/servicios/ads.svg",
        service_image: "/imagenes_servicios/screens.svg",
        content: (
            <div className={"serviceCardContent"}>
                <ul>
                    <li>Estrategia de publicidad digital</li>
                    <li>Publicidad Google Search y Google Display</li>
                    <li>Setteo de audiencia adecuada</li>
                    <li>Publicidad en redes sociales</li>
                    <li>Mediciones y monitoreo</li>
                </ul>
            </div>
        ),
    },
    {
        name: "Marketing digital",
        image: "/servicios/mkt_digital.svg",
        service_image: "/imagenes_servicios/charts.svg",
        content: (
            <div className={"serviceCardContent"}>
                <ul>
                    <li>Estrategia y definición de objetivos</li>
                    <li>Selección de redes sociales a utilizar</li>
                    <li>Redacción de copies</li>
                    <li>Búsqueda de hashtags con mayor alcance</li>
                    <li>Servicios de Community Manager</li>
                    <li>Análisis SEM de website</li>
                    <li>Servicios de consultoría</li>
                </ul>
            </div>
        ),
    },
    {
        name: "Branding",
        image: "/servicios/branding.svg",
        service_image: "/imagenes_servicios/meeting_alt_1.svg",
        content: (
            <div className={"serviceCardContent"}>
                <p>
                    Trabajamos todas las acciones de una marca<br></br>
                    que constituyen su identidad:
                </p>
                <ul>
                    <li>Creación del logotipo.</li>
                    <li>Elección de diseño general.</li>
                    <li>Tipografia.</li>
                    <li>Música.</li>
                    <li>Tono comunicacional.</li>
                    <li>Estética en general.</li>
                </ul>
                <p>
                    Estas promueven no sólo el producto en sí, sino el valor que tendrá la marca concebida como un todo. El producto ha de ser y representar la marca, ha de comunicar, ha de ser
                    percibido por nuestra audiencia de la manera correcta.
                </p>
            </div>
        ),
    },
    {
        name: "Diseño",
        image: "/servicios/diseno.svg",
        service_image: "/imagenes_servicios/palette.svg",
        content: (
            <div className={"serviceCardContent"}>
                <ul>
                    <li>Armado de posts para feed armónico</li>
                    <li>Diseño digital de imágenes</li>
                    <li>Retoque digital de fotografía</li>
                    <li>Armado y edición</li>
                    <li>Diseño de Logos</li>
                    <li>Estética armónica de la marca</li>
                </ul>
            </div>
        ),
    },
];
