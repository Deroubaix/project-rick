/* import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar id='navigate' expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <NavLink className="nav-link" to="/" exact>Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavDropdown title="See More" id="basic-nav-dropdown">
            <NavLink className="dropdown-item" to="/episode">Best Episodes</NavLink>

            <NavLink className="dropdown-item" to="/allcharacters" >All Characters</NavLink>

            <NavLink className="dropdown-item" to="/episode3">All Episodes</NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Navigation; */