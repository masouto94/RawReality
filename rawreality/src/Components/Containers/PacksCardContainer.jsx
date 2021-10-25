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

         <Card display={"grid"} margin={"12%"}>
             <div style={{ display:"grid",gridTemplateColumns:"50vw 1fr",borderStyle:"solid", borderWidth:"thin"}}>
             <div>
             <h1>Pack 1</h1>
             <p>Descripcion jajajajaj <br/>
             con listas:<ul><li>item</li></ul></p>
             <button>Comprar</button>
             </div>
             <div>
             <h1>Pack 2</h1>
             <p>Descripcion jajajajaj <br/>
             con listas:<ul><li>item</li></ul></p>
             <button>Comprar</button>
             </div>
             <div>
             <h1>Pack 3</h1>
             <p>Descripcion jajajajaj <br/>
             con listas:<ul><li>item</li></ul></p>
             <button>Comprar</button>
             </div>
             <div>
             <h1>Pack 4</h1>
             <p>Descripcion jajajajaj. <br/>
             con listas:<ul><li>item</li></ul></p>
             <button>Comprar</button>
             </div>
             </div>
        </Card>   
        </SectionContainer>
        </>
    )
}

export default PacksCardContainer
