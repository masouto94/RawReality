import React from 'react'
import Card from './Card'


const Portfolio = () => {
    const nombre = "Portfolio"
    const lista =[1,2]
    return (
        <>
        <Card display={"block"} margin={"12%"}>
          {`Este es el lugar del ${nombre}`}
          <h1>{lista[0]+lista[1]}</h1>
          </Card>
        </>
    )
}

export default Portfolio
