import React from "react";
import { Nav, Navbar, NavDropdown, Container, NavLink, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import "./nav-bar.style.scss";
import { toggleTheme } from '../../Slices/appVars';


const NavBar = () => {
  const appVars = useSelector((state) => state.applicationVars);
  const dispatch = useDispatch();

  const handleToggleTheme = () =>{
    
    dispatch(toggleTheme());
    
  }
  
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="p-3 py-3 fixed-top">
      <Container fluid>

          <Navbar.Brand href="/inicio"><h1  className="text-white h1"> Desvelando Oriente</h1></Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navigation-bar__historia navigation-bar__actualidad"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav id="navigation-bar__nav" className='fs-5'>
            {/*HISTORIA*/}
            <NavDropdown id="navigation-bar__historia" title="Historia" className='ms-5 me-3 fs-5'>
              <NavDropdown.Item
                href="https://desvelandooriente.com/historia/breve-historia-de-oriente-medio/"
                menuVariant="dark"
              >
                Breve Historia de Oriente Medio
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/personajes">
                Personajes
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/iran">
                Irán
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/afganistan/">
                Afghanistán
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/arabia-saudi/">
                Arabia Saudí
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/espana-en-el-rif/">
                España y el Rif
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/imperio-otomano-y-turquia/">
                El Imperio Otomano y Turquía
              </NavDropdown.Item>
            </NavDropdown>
            {/*ACTUALIDAD*/}
            <NavDropdown id="navigation-bar__actualidad" title="Actualidad" className='me-3 fs-5'>
              <NavDropdown.Item
                href="/categoria/actualidad/coronavirus/"
                menuVariant="dark"
              >
                Coronavirus
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/actualidad/politica-y-sociedad/">
                Política y sociedad
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/movimientos-sociales/">
                Movimientos sociales
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/migraciones-y-fronteras/">
                Migraciones y fronteras
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/qatar/">
                Luces y Sombras de Qatar
              </NavDropdown.Item>
              <NavDropdown.Item href="/categoria/guerra-civil-siria/">
                Guerra civil siria
              </NavDropdown.Item>
            </NavDropdown>
            {/*OPINIÓN*/}
            <NavLink href="/categoria/opinion" className='me-3 fs-5'>
              Opinión
            </NavLink>
            {/*FAQ*/}
            <NavLink href="/categoria/preguntas-y-respuestas" className='me-3fs-5'>
              Q&A
            </NavLink>
            
          </Nav>
          
        </Navbar.Collapse>
        <Button onClick={handleToggleTheme} className='btn btn-info px-3 float-end'><i className="lni lni-sun"></i></Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
