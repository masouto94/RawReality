import React from 'react'
import Card from './Card'

const scroller =(id)=>{
    let element= document.getElementById(id)
    element.scrollIntoView()
}
const LandingCard = () => {
    return (
        <>
        <Card display={"block"} margin={"12%"}>
            <h1>Te ayudamos a hacer crecer tu negocio más rápido</h1>
            <p>Ayudamos a nuestros clientes a potenciar el valor del negocio, a través del desarrollo de estrategias creativas, innovadoras y visualmente atractivas. </p>

            <button className={'btn btn-primary btn-outline'} onClick={()=>scroller("ServiceBar")}>Ir a Servicios</button>
            <button className={'btn btn-secondary btn-outline'}>Pedir un presupuesto</button>
        </Card>
        </>
    )
}

export default LandingCard
