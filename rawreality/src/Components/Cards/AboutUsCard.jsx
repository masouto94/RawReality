import React from 'react'
import Card from './Card'

const AboutUsCard = () => {
    return (
        <>
        <Card display={"flex"} margin={"12%"}>
            <div style={{flex:"50%"}}>
                <h2>¿Por qué elegir Rar Reality?</h2>
            <p>
            Porque me gusta el diseño, la comunicación y el branding. Me gusta crear una imagen de como quieren que sea percibida una marca (sea empresa o persona como marca en sí misma). Se ofrecen diversas estrategias que incluyen desde la percepción visual, tono comunicacional, estética general, canales de comunicación a utilizar, para lograr un objetivo determinado definido por el cliente, por ej: aumento en la interacción del contenido que sube, aumento de leads, nueva percepción de la marca (redefinir una marca determinada), aumento de ventas si ofrece productos o servicios etc
            </p>
            </div>
            <div style={{flex:"50%"}}>
                <img src="/logos/logo_rr.jpeg" alt="/logos/logo_rr.jpeg" height={"100%"} width={"100%"} />
            </div>
        </Card>
        </>
    )
}

export default AboutUsCard
