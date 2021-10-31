import React from "react";
import Card from "./Card";
import SectionContainer from "../Containers/SectionContainer";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption } from "mdb-react-ui-kit";

const Portfolio = ({ portfolio }) => {
    return (
        <>
            <Card display={"block"} id={"PortfolioCarrousel"}>
                <h2 className="fw-bold">Projectos realizados</h2>
                <MDBCarousel showIndicators showControls fade>
                    <MDBCarouselInner>
                        {portfolio.map((i) => {
                            return (
                                <>
                                    <MDBCarouselItem itemId={portfolio.indexOf(i)}>
                                        <SectionContainer>
                                            <MDBCarouselElement src={i.image} alt="..." style={{ height: "100%", margin: "25% 0" }} />
                                        </SectionContainer>
                                        <MDBCarouselCaption>
                                            <h5>{i.name}</h5>
                                            <p>{i.description}</p>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                </>
                            );
                        })}
                    </MDBCarouselInner>
                </MDBCarousel>
            </Card>
        </>
    );
};

export default Portfolio;
