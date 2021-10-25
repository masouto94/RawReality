import React from 'react'
import Card from '../Cards/Card'
import SectionContainer from './SectionContainer'
import {packs} from '../../Utils/Packs'
import Packs from '../Cards/Packs'

const PacksCardContainer = () => {
    return (
        <>
        <SectionContainer>
            

         <Card display={"grid"} margin={"12%"} id={"PacksContainer"}>
         <h1>Elegi tu pack</h1>
             <div style={{ display:"grid",gridTemplateColumns:"50% 50%",borderStyle:"solid", borderWidth:"thin"}}>
             {packs.map(i=>{
                 return(
                    <div className={"PacksCard"}>
                    <h1>{i.name}</h1>
                    <div className={"PacksCardContent"}>
                    {i.description}
                    </div>
                    <button className={'btn btn-secondary '}>Consultar Pack</button>
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
