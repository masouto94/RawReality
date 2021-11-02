import React from "react";
import Card from "./Card";
import SectionContainer from "../Containers/SectionContainer";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption } from "mdb-react-ui-kit";

const Portfolio = ({ portfolio }) => {
    return (
        <>
            <Card margin={"5% 5% 3% 5%"} display={"block"} id={"PortfolioCarrousel"}>
                <h2 className=" fw-bold heading-line">Projectos realizados</h2>
                <MDBCarousel showIndicators showControls fade>
                    <MDBCarouselInner>
                        {portfolio.map((i) => {
                            return (
                                <>
                                    <MDBCarouselItem itemId={portfolio.indexOf(i)}>
                                        <SectionContainer>
                                            <MDBCarouselElement src={i.image} alt="..." style={{ height: "100%", margin: "25% 0" }} />
                                        </SectionContainer>
                                    </MDBCarouselItem>
                                </>
                            );
                        })}
                    </MDBCarouselInner>
                </MDBCarousel>
                <div className="footer-line"></div>
            </Card>
        </>
    );
};

export default Portfolio;
