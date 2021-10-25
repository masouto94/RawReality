import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { scroller } from '../../Utils/Functions';
const NavMenu = (props) =>{


       

        return(
   
        
        
        <Navbar bg="light" expand="lg">
          
        <Nav.Item>{props.children}</Nav.Item>
        
        
            <Nav className="justify-content-end" style={{ width: "100%"}}>
            
            <Nav.Link as={Link} to={"/"}>{"Inicio"}</Nav.Link>
              {props.categorias.map((i) => <Nav.Link onClick={()=>scroller(`${i.id}`)}>{i.name}</Nav.Link>)
              }

              
            </Nav>
            
      </Navbar>
        )   
};

export default NavMenu