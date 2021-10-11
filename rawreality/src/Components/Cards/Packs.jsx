import React from 'react'

const Packs = ({packs}) => {
    return (
        <>
         {packs.map(i=>{<h1>{i.name}</h1>})}   
        </>
    )
}

export default Packs
