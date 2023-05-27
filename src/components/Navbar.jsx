import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const [allCharactersActive, setAllCharactersActive] = React.useState(false);

  React.useEffect(() => {
    // Check if the current location matches the All Characters route
    if (location.pathname === '/allcharacters') {
      setAllCharactersActive(true);
    } else {
      setAllCharactersActive(false);
    }
  }, [location]);

  React.useEffect(() => {
    if (location.pathname === '/') {
      setAllCharactersActive(true);
    }
  }, [location.pathname]);
  

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
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            <NavLink
              to="/allcharacters"
              className={`nav-link ${allCharactersActive ? 'active' : ''}`}
              onClick={() => setAllCharactersActive(true)}
            >
              All Characters
            </NavLink>
            <NavLink
              to="/allepisodes"
              className="nav-link"
              activeclassname="active"
            >
              All Episodes
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;













