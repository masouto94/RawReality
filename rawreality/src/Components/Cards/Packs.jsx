import React from 'react'

const Packs = ({packs}) => {
    return (
        <>
        Aca van los packs
         {packs.map(i=>{<h1>{i.name}</h1>})}   
        </>
    )
}

export default Packs
