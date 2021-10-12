import React from 'react'
import Card from './Card'
import SectionContainer from '../Containers/SectionContainer'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const Portfolio = ({portfolio}) => {
    return (
        <>
            <SectionContainer>
        <Card display={"block"} margin={"12%"} id={"PortfolioCarrousel"}>
        <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner >
          {portfolio.map(i=>{return (
            <>
            <MDBCarouselItem itemId={portfolio.indexOf(i)} >
          <MDBCarouselElement src={i.image} alt='...' height={"100vh"}/>
          <MDBCarouselCaption>
            <h5>{i.name}</h5>
            <p>{i.description}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
            </>
          )})}
          </MDBCarouselInner>
    </MDBCarousel>
          </Card>
        </SectionContainer>
          
        </>
    )
}

export default Portfolio
