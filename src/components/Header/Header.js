import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
    <LinkContainer to="/">
        <Navbar.Brand >Web Solution</Navbar.Brand>
    </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
    <Nav   >
        <LinkContainer to="/home">
            <Nav.Link >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/reviews">
            <Nav.Link >Review</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/dashboard">
            <Nav.Link >Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/blog">
            <Nav.Link >Blog</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
            <Nav.Link >About</Nav.Link>
        </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;