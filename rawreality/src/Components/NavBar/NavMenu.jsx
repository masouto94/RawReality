import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { scroller, BackToTop } from "../../Utils/Functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavMenu = (props) => {
    return (
        <Navbar className={"navBarText"} id={"NavBar"} expand="lg" style={{ position: "fixed", top: 0, zIndex: 1 }}>
            <Container>
                <Navbar.Brand href="#">{props.children}</Navbar.Brand>
                <span className="fs-4 me-4">RawReality</span>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <FontAwesomeIcon className="icons w-100" icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link as={Link} to={"/"} onClick={() => scroller("LandingCard")}>
                            {"Inicio"}
                        </Nav.Link>
                        {props.categorias.map((i) => {
                            if (i !== "Inicio") {
                                return <Nav.Link onClick={() => scroller(`${i.id}`)}>{i.name}</Nav.Link>;
                            } else {
                                return <Nav.Link onClick={() => BackToTop}>{i.name}</Nav.Link>;
                            }
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;
