/* import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar id='navigate' expand="md" fixed="top" style={{ zIndex: "2" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
         
          <NavLink className="dropdown-item" to="/allcharacters">All Characters</NavLink>
          <NavLink className="dropdown-item" to="/allepisodes">All Episodes</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
} 
export default Navigation; 
*/


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand style={{
          fontFamily: 'get_schwifty',
          fontSize: '1.5rem',
          color: '#08BAE3',
          zIndex: 70,
          left: '-7em',
          WebkitTextStroke: '0.2em rgba(0,0,0,0.1)',
          textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
        }}>Rick and Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/allcharacters" className="nav-link">All Characters</NavLink>
            <NavLink to="/allepisodes" className="nav-link">All Episodes</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;








