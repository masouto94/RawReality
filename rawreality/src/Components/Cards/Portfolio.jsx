import React from 'react'
import Card from './Card'


const Portfolio = () => {
    const nombre = "Portfolio"
    return (
        <>
        <Card display={"block"} margin={"12%"}>
          {`Este es el lugar del ${nombre}`}
          </Card>
        </>
    )
}

export default Portfolio
