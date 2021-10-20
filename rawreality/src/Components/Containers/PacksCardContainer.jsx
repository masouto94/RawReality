import React from 'react'
import Card from '../Cards/Card'
import SectionContainer from './SectionContainer'
import {packs} from '../../Utils/Packs'
import Packs from '../Cards/Packs'

const PacksCardContainer = () => {
    return (
        <>
        <SectionContainer>
            <h1>Nuestros combos</h1>

         <Card display={"grid"} margin={"12%"} id={"PacksContainer"}>
             <div style={{ display:"grid",gridTemplateColumns:"50vw 1fr",borderStyle:"solid", borderWidth:"thin"}}>
             {packs.map(i=>{
                 return(
                    <div className={"PacksCard"}>
                    <h1>{i.name}</h1>
                    {i.description}
                    <button className={'btn btn-secondary btn-outline'}>Comprar</button>
                    </div>
                 )
             }
             )}
             
             </div>
        </Card>   
        </SectionContainer>
        </>
    )
}

export default PacksCardContainer
