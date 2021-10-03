import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

const NavMenu = (props) =>{


       

        return(
   
        
        
        <Navbar bg="light" expand="lg">
          
        <Nav.Item>{props.children}</Nav.Item>
        
        
            <Nav className="justify-content-end" style={{ width: "100%"}}>
            
            <Nav.Link as={Link} to={"/"}>{"Inicio"}</Nav.Link>
              {props.categorias.map((i) => <Nav.Link as={Link} to={`/categoria/${i}`}>{i}</Nav.Link>)
              }

              
            </Nav>
            
      </Navbar>
        )   
};

export default NavMenu